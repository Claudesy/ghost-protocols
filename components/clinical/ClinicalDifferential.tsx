import {
  runDiagnosisAlgorithm,
  type RankedDiagnosis,
} from '@/lib/cdss/diagnosis-algorithm';
import type { DifferentialVitals } from '@/lib/cdss/differential-diagnosis';
import { buildRMETransferPayload } from '@/lib/rme/payload-mapper';
import { sendMessage } from '@/utils/messaging';
import type {
  CDSSAlert,
  DiagnosisSuggestion,
  MedicationRecommendation,
  PharmacotherapyExplainability,
} from '@/types/api';
import type {
  RMETransferProgressEvent,
  RMETransferReasonCode,
  RMETransferResult,
  RMETransferStepStatus,
} from '@/utils/types';
import React, { useEffect, useMemo, useState } from 'react';
import { browser } from 'wxt/browser';

interface ClinicalDifferentialProps {
  keluhanUtama: string;
  keluhanTambahan?: string;
  patientAge: number;
  patientGender: 'L' | 'P';
  patientRM: string;
  allergies?: string[];
  confirmedPregnancyStatus?: boolean | null;
  vitals: DifferentialVitals;
  onBack: () => void;
}

type LoadState = 'loading' | 'error' | 'ready';
type TherapyState = 'idle' | 'loading' | 'ready' | 'error';
type TransferUiState = 'idle' | 'running' | 'partial' | 'success' | 'failed';
const MAX_DIAGNOSIS_SELECTION = 2;

interface SelectedDiagnosis {
  icd_x: string;
  nama: string;
  source: 'suggested' | 'manual';
  rank?: number;
}

interface DiagnosisTherapyResult {
  diagnosis: SelectedDiagnosis;
  medications: MedicationRecommendation[];
  alerts: CDSSAlert[];
  guidelines: string[];
  explainability?: PharmacotherapyExplainability;
  error?: string;
}

function humanize(value: string): string {
  return value.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
}

type PregnancyStatus = boolean;

function pregnancyStatusLabel(status: PregnancyStatus): string {
  if (status === true) return 'Confirmed: Pregnant';
  return 'Confirmed: Not Pregnant';
}

function buildUiFallbackDiagnoses(
  keluhanUtama: string,
  vitals: DifferentialVitals,
): DiagnosisSuggestion[] {
  const text = keluhanUtama.toLowerCase().trim();
  const hasChestPain = text.includes('nyeri dada') || text.includes('chest pain') || text === 'dada';
  const chestRisk = vitals.sbp >= 180 || vitals.sbp < 90 || vitals.hr >= 120 || vitals.rr >= 24;

  if (hasChestPain) {
    return [
      {
        rank: 1,
        icd_x: 'I20.9',
        nama: 'Suspek Angina / Rule-Out ACS',
        confidence: chestRisk ? 0.52 : 0.41,
        rationale: 'Nyeri dada harus menyingkirkan kondisi kardiak akut terlebih dahulu.',
        red_flags: chestRisk ? ['Instabilitas hemodinamik atau distress respirasi'] : [],
        recommended_actions: [
          'Lakukan EKG 12 sadapan',
          'Monitoring serial tanda vital',
          'Rujuk emergensi bila nyeri menetap/memberat',
        ],
      },
      {
        rank: 2,
        icd_x: 'M94.0',
        nama: 'Nyeri Dinding Dada Muskuloskeletal',
        confidence: 0.33,
        rationale: 'Diagnosis banding non-kardiak yang sering pada nyeri dada setelah red flag tersingkirkan.',
        red_flags: [],
        recommended_actions: ['Evaluasi nyeri tekan lokal', 'Eksklusi red flag kardiopulmoner'],
      },
    ];
  }

  return [
    {
      rank: 1,
      icd_x: 'R69',
      nama: 'Differential Belum Spesifik',
      confidence: 0.25,
      rationale: 'Data klinis belum cukup untuk differential spesifik, perlu anamnesis dan pemeriksaan lanjutan.',
      red_flags: [],
      recommended_actions: [
        'Lengkapi keluhan utama terstruktur',
        'Ulangi pemeriksaan tanda vital serial',
      ],
    },
  ];
}

function toNeedStyle(level: 'required' | 'recommended' | 'optional'): {
  color: string;
  bg: string;
  border: string;
  label: string;
} {
  if (level === 'required') {
    return {
      color: '#EF4444',
      bg: 'rgba(239,68,68,0.12)',
      border: 'rgba(239,68,68,0.35)',
      label: 'REQUIRED',
    };
  }
  if (level === 'recommended') {
    return {
      color: '#F59E0B',
      bg: 'rgba(245,158,11,0.12)',
      border: 'rgba(245,158,11,0.35)',
      label: 'RECOMMENDED',
    };
  }
  return {
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.35)',
    label: 'OPTIONAL',
  };
}

function riskTierUi(
  riskTier: PharmacotherapyExplainability['risk_tier'],
): { label: string; badgeClass: string } {
  if (riskTier === 'emergency') {
    return { label: 'EMERGENCY', badgeClass: 'border-red-600/35 text-red-400 bg-red-600/10' };
  }
  if (riskTier === 'urgent') {
    return { label: 'URGENT', badgeClass: 'border-amber-600/35 text-amber-400 bg-amber-600/10' };
  }
  return { label: 'ROUTINE', badgeClass: 'border-emerald-600/35 text-emerald-400 bg-emerald-600/10' };
}

function pathwayUi(
  pathway: PharmacotherapyExplainability['pathway'],
): string {
  if (pathway === 'knowledge+syndrome-intent') return 'Knowledge + Syndrome-Intent';
  if (pathway === 'knowledge-only') return 'Knowledge Only';
  if (pathway === 'syndrome-intent-only') return 'Syndrome-Intent Only';
  return 'Legacy Fallback';
}

const TRANSFER_STEP_ORDER: RMETransferStepStatus[] = ['anamnesa', 'diagnosa', 'resep'];

const REASON_CODE_LABELS: Record<RMETransferReasonCode, string> = {
  DUPLICATE_SUPPRESSED: 'Transfer duplikat diblok dalam window idempotency.',
  USER_CANCELLED: 'Transfer dibatalkan oleh pengguna.',
  NO_ACTIVE_TAB: 'Tab ePuskesmas tidak ditemukan.',
  PAGE_NOT_READY: 'Halaman belum siap, coba reload halaman ePuskesmas.',
  STEP_TIMEOUT: 'Waktu eksekusi step habis.',
  FIELD_NOT_FOUND: 'Field target RME tidak ditemukan.',
  NO_FIELDS_FILLED: 'Tidak ada field yang berhasil diisi.',
  RETRY_EXHAUSTED: 'Retry habis sebelum step berhasil.',
  DIAGNOSA_PAYLOAD_EMPTY: 'Payload diagnosa kosong.',
  RESEP_PAYLOAD_EMPTY: 'Payload resep kosong.',
  RESEP_EMPTY_AFTER_SAFETY: 'Semua kandidat resep diblok safety filter.',
  RESEP_TRIAD_INCOMPLETE: 'Komponen triad regimen belum lengkap.',
  PREGNANCY_UNKNOWN_DEFAULT_FALSE: 'Status kehamilan tidak diketahui, default ke tidak hamil.',
  UNKNOWN_STEP_FAILURE: 'Step gagal tanpa klasifikasi spesifik.',
};

function filterReasonCodesForStep(
  reasonCodes: RMETransferReasonCode[],
  step: RMETransferStepStatus,
): RMETransferReasonCode[] {
  return reasonCodes.filter((code) => {
    if (step !== 'diagnosa' && code === 'DIAGNOSA_PAYLOAD_EMPTY') return false;
    if (
      step !== 'resep' &&
      (code === 'RESEP_PAYLOAD_EMPTY' ||
        code === 'RESEP_EMPTY_AFTER_SAFETY' ||
        code === 'RESEP_TRIAD_INCOMPLETE')
    ) {
      return false;
    }
    return true;
  });
}

function mapTransferStateToUi(state: RMETransferResult['state']): TransferUiState {
  if (state === 'success') return 'success';
  if (state === 'partial') return 'partial';
  return 'failed';
}

function stepLabel(step: RMETransferStepStatus): string {
  if (step === 'anamnesa') return 'Anamnesa';
  if (step === 'diagnosa') return 'Diagnosa';
  return 'Resep';
}

function makeInitialTransferSteps(): RMETransferResult['steps'] {
  return {
    anamnesa: {
      step: 'anamnesa',
      state: 'pending',
      attempt: 0,
      latencyMs: 0,
      successCount: 0,
      failedCount: 0,
      skippedCount: 0,
    },
    diagnosa: {
      step: 'diagnosa',
      state: 'pending',
      attempt: 0,
      latencyMs: 0,
      successCount: 0,
      failedCount: 0,
      skippedCount: 0,
    },
    resep: {
      step: 'resep',
      state: 'pending',
      attempt: 0,
      latencyMs: 0,
      successCount: 0,
      failedCount: 0,
      skippedCount: 0,
    },
  };
}

export const ClinicalDifferential: React.FC<ClinicalDifferentialProps> = ({
  keluhanUtama,
  keluhanTambahan,
  patientAge,
  patientGender,
  patientRM,
  allergies = [],
  confirmedPregnancyStatus,
  vitals,
  onBack,
}) => {
  const [phase, setPhase] = useState<LoadState>('loading');
  const [errorMsg, setErrorMsg] = useState('');
  const [suggestions, setSuggestions] = useState<DiagnosisSuggestion[]>([]);
  const [selectedDiagnoses, setSelectedDiagnoses] = useState<SelectedDiagnosis[]>([]);
  const [manualIcd, setManualIcd] = useState('');
  const [manualName, setManualName] = useState('');
  const [showManualDiagnosisInput, setShowManualDiagnosisInput] = useState(false);
  const [therapyState, setTherapyState] = useState<TherapyState>('idle');
  const [therapyError, setTherapyError] = useState('');
  const [therapyByDiagnosis, setTherapyByDiagnosis] = useState<DiagnosisTherapyResult[]>([]);
  const [processingTimeMs, setProcessingTimeMs] = useState<number | null>(null);
  const [transferUiState, setTransferUiState] = useState<TransferUiState>('idle');
  const [transferRunId, setTransferRunId] = useState<string | null>(null);
  const [transferReasonCodes, setTransferReasonCodes] = useState<RMETransferReasonCode[]>([]);
  const [transferSteps, setTransferSteps] = useState<RMETransferResult['steps']>(
    makeInitialTransferSteps()
  );
  const [transferError, setTransferError] = useState('');
  const [transferResult, setTransferResult] = useState<RMETransferResult | null>(null);
  const [lastTriggeredStep, setLastTriggeredStep] = useState<RMETransferStepStatus>('anamnesa');
  const [pregnancyStatus, setPregnancyStatus] = useState<PregnancyStatus>(
    patientGender === 'L'
      ? false
      : typeof confirmedPregnancyStatus === 'boolean'
        ? confirmedPregnancyStatus
        : false,
  );

  useEffect(() => {
    if (patientGender === 'L') {
      setPregnancyStatus(false);
      return;
    }
    if (typeof confirmedPregnancyStatus === 'boolean') {
      setPregnancyStatus(confirmedPregnancyStatus);
      return;
    }
    setPregnancyStatus(false);
  }, [patientGender, confirmedPregnancyStatus]);

  useEffect(() => {
    let cancelled = false;

    const fetchDifferential = async () => {
      setPhase('loading');
      setErrorMsg('');
      setSelectedDiagnoses([]);
      setManualIcd('');
      setManualName('');
      setShowManualDiagnosisInput(false);
      setTherapyState('idle');
      setTherapyError('');
      setTherapyByDiagnosis([]);

      try {
        const response = await sendMessage('getSuggestions', {
          keluhan_utama: keluhanUtama,
          keluhan_tambahan: keluhanTambahan || '',
          patient_age: patientAge > 0 ? patientAge : 30,
          patient_gender: patientGender === 'P' ? 'F' : 'M',
          vital_signs: {
            systolic: vitals.sbp || undefined,
            diastolic: vitals.dbp || undefined,
            heart_rate: vitals.hr || undefined,
            respiratory_rate: vitals.rr || undefined,
            temperature: vitals.temp || undefined,
          },
        });

        if (cancelled) return;

        if (!response.success || !response.data) {
          setErrorMsg(response.error?.message || 'Engine tidak merespons, fallback differential lokal digunakan.');
          setSuggestions(buildUiFallbackDiagnoses(keluhanUtama, vitals));
          setPhase('ready');
          return;
        }

        const incomingSuggestions = (response.data.diagnosis_suggestions || []).slice(0, 5);
        if (incomingSuggestions.length === 0) {
          setErrorMsg('Differential dari engine kosong, fallback differential lokal digunakan.');
          setSuggestions(buildUiFallbackDiagnoses(keluhanUtama, vitals));
        } else {
          setErrorMsg('');
          setSuggestions(incomingSuggestions);
        }
        setProcessingTimeMs(response.data.meta?.processing_time_ms ?? null);
        setPhase('ready');
      } catch (error) {
        if (cancelled) return;
        setErrorMsg(
          error instanceof Error
            ? `${error.message} (fallback differential lokal digunakan)`
            : 'Unknown error (fallback differential lokal digunakan)',
        );
        setSuggestions(buildUiFallbackDiagnoses(keluhanUtama, vitals));
        setPhase('ready');
      }
    };

    fetchDifferential();
    return () => {
      cancelled = true;
    };
  }, [keluhanUtama, keluhanTambahan, patientAge, patientGender, vitals.dbp, vitals.glucose, vitals.hr, vitals.rr, vitals.sbp, vitals.temp]);

  const normalizedSuggestions = useMemo<DiagnosisSuggestion[]>(() => {
    if (Array.isArray(suggestions) && suggestions.length > 0) {
      return suggestions;
    }
    return buildUiFallbackDiagnoses(keluhanUtama, vitals);
  }, [suggestions, keluhanUtama, vitals]);

  const rankedDiagnoses: RankedDiagnosis[] = useMemo(
    () =>
      runDiagnosisAlgorithm({
        suggestions: normalizedSuggestions,
        keluhanUtama,
        keluhanTambahan,
        vitals,
        maxResults: 5,
      }),
    [normalizedSuggestions, keluhanUtama, keluhanTambahan, vitals]
  );

  const diagnosisKey = (diagnosis: SelectedDiagnosis): string =>
    diagnosis.source === 'manual'
      ? `manual:${diagnosis.icd_x}`
      : `suggested:${diagnosis.rank ?? 0}:${diagnosis.icd_x}`;

  const isDiagnosisSelected = (diagnosis: SelectedDiagnosis): boolean =>
    selectedDiagnoses.some((item) => diagnosisKey(item) === diagnosisKey(diagnosis));

  useEffect(() => {
    let cancelled = false;

    const loadPharmacotherapy = async () => {
      if (selectedDiagnoses.length === 0) {
        setTherapyByDiagnosis([]);
        setTherapyState('idle');
        setTherapyError('');
        return;
      }

      setTherapyState('loading');
      setTherapyError('');

      try {
        const results = await Promise.all(
          selectedDiagnoses.map(async (diagnosis): Promise<DiagnosisTherapyResult> => {
            try {
              const response = await sendMessage('getRecommendations', {
                icd_x: diagnosis.icd_x,
                patient_age: patientAge > 0 ? patientAge : 30,
                alergi: allergies.filter((item) => item.toLowerCase() !== 'tidak ada'),
                penyakit_kronis: [],
                current_medications: [],
                keluhan_utama: keluhanUtama,
                selected_diagnosis_name: diagnosis.nama,
                is_pregnant: pregnancyStatus === true,
                vital_signs: {
                  systolic: vitals.sbp,
                  diastolic: vitals.dbp,
                  heart_rate: vitals.hr,
                  respiratory_rate: vitals.rr,
                  temperature: vitals.temp,
                },
              });

              if (!response.success || !response.data) {
                return {
                  diagnosis,
                  medications: [],
                  alerts: [],
                  guidelines: [],
                  error: response.error?.message || 'Gagal mengambil rekomendasi farmakoterapi.',
                };
              }

              return {
                diagnosis,
                medications: response.data.medication_recommendations || [],
                alerts: response.data.alerts || [],
                guidelines: response.data.clinical_guidelines || [],
                explainability: response.data.pharmacotherapy_explainability,
              };
            } catch (error) {
              return {
                diagnosis,
                medications: [],
                alerts: [],
                guidelines: [],
                error:
                  error instanceof Error
                    ? error.message
                    : 'Gagal mengambil rekomendasi farmakoterapi.',
              };
            }
          }),
        );

        if (cancelled) return;

        setTherapyByDiagnosis(results);

        if (results.some((result) => Boolean(result.error))) {
          setTherapyState('error');
          setTherapyError('Sebagian diagnosis gagal dimuat farmakoterapinya.');
          return;
        }

        setTherapyState('ready');
      } catch (error) {
        if (cancelled) return;
        setTherapyByDiagnosis([]);
        setTherapyState('error');
        setTherapyError(
          error instanceof Error ? error.message : 'Gagal mengambil rekomendasi farmakoterapi.',
        );
      }
    };

    loadPharmacotherapy();
    return () => {
      cancelled = true;
    };
  }, [
    selectedDiagnoses,
    patientAge,
    allergies,
    keluhanUtama,
    keluhanTambahan,
    patientGender,
    pregnancyStatus,
    vitals.sbp,
    vitals.dbp,
    vitals.hr,
    vitals.rr,
    vitals.temp,
  ]);

  useEffect(() => {
    const chromeGlobal = (globalThis as unknown as { chrome?: typeof chrome }).chrome;
    if (!chromeGlobal?.runtime?.onMessage) return;

    const listener = (message: unknown) => {
      const payload = message as { type?: string; data?: unknown };
      if (payload.type !== 'RME_TRANSFER_PROGRESS') return;

      const progress = payload.data as RMETransferProgressEvent;
      if (transferRunId && progress.runId !== transferRunId) return;

      setTransferRunId(progress.runId);
      setTransferSteps(progress.steps);
      setTransferReasonCodes(progress.reasonCodes);

      if (progress.state === 'running') {
        setTransferUiState('running');
        return;
      }

      if (progress.transferState === 'cancelled') {
        setTransferUiState('failed');
        setTransferError(REASON_CODE_LABELS.USER_CANCELLED);
        return;
      }

      setTransferUiState(
        progress.transferState === 'success'
          ? 'success'
          : progress.transferState === 'partial'
            ? 'partial'
            : 'failed'
      );
    };

    chromeGlobal.runtime.onMessage.addListener(listener);
    return () => {
      chromeGlobal.runtime.onMessage.removeListener(listener);
    };
  }, [transferRunId]);

  const selectedDiagnosisForTransfer = selectedDiagnoses[0] || null;
  const transferMedications = useMemo(() => {
    if (selectedDiagnoses.length === 0) return [];
    const selectedKeys = new Set(selectedDiagnoses.map((item) => diagnosisKey(item)));
    const combined = therapyByDiagnosis
      .filter((item) => selectedKeys.has(diagnosisKey(item.diagnosis)))
      .flatMap((item) => item.medications);

    const deduped = new Map<string, MedicationRecommendation>();
    for (const med of combined) {
      const key = med.nama_obat.toLowerCase().trim();
      if (!deduped.has(key)) deduped.set(key, med);
    }
    return Array.from(deduped.values());
  }, [selectedDiagnoses, therapyByDiagnosis]);

  const hasDiagnosisForTransfer = Boolean(selectedDiagnosisForTransfer);
  const hasResepPayloadReady =
    hasDiagnosisForTransfer &&
    therapyState !== 'loading' &&
    transferMedications.length > 0 &&
    (therapyState === 'ready' || therapyByDiagnosis.length > 0);

  const handleTransferToRME = async (
    targetStep: RMETransferStepStatus,
    forceRun = false,
  ): Promise<void> => {
    if (targetStep === 'diagnosa' && !selectedDiagnosisForTransfer) {
      setTransferUiState('failed');
      setTransferError('Pilih diagnosis terlebih dahulu sebelum uplink Diagnosa.');
      return;
    }

    if (targetStep === 'resep') {
      if (!selectedDiagnosisForTransfer) {
        setTransferUiState('failed');
        setTransferError('Pilih diagnosis terlebih dahulu sebelum uplink Resep.');
        return;
      }
      if (therapyState === 'loading') {
        setTransferUiState('failed');
        setTransferError('Farmakoterapi masih diproses. Tunggu sampai selesai lalu uplink Resep.');
        return;
      }
      if (!hasResepPayloadReady) {
        setTransferUiState('failed');
        setTransferError(
          'Resep belum siap. Muat rekomendasi farmakologi dulu agar uplink Resep tidak kosong.',
        );
        return;
      }
    }

    const mapped = buildRMETransferPayload({
      keluhanUtama,
      keluhanTambahan,
      patientGender,
      pregnancyStatus,
      allergies,
      vitalSigns: {
        sbp: vitals.sbp,
        dbp: vitals.dbp,
        hr: vitals.hr,
        rr: vitals.rr,
        temp: vitals.temp,
        glucose: vitals.glucose,
      },
      diagnosis: {
        icd_x: selectedDiagnosisForTransfer.icd_x,
        nama: selectedDiagnosisForTransfer.nama,
        jenis: 'PRIMER',
        kasus: 'BARU',
        penyakit_kronis: [],
        prognosa: '',
      },
      medications: transferMedications,
    });

    const scopedReasonCodes = filterReasonCodesForStep(mapped.reasonCodes, targetStep);

    const requestId = `rme-${Date.now()}`;
    setTransferRunId(requestId);
    setLastTriggeredStep(targetStep);
    setTransferUiState('running');
    setTransferError('');
    setTransferResult(null);
    setTransferSteps(makeInitialTransferSteps());
    setTransferReasonCodes(scopedReasonCodes);

    try {
      const scopedPayload = {
        ...mapped.payload,
        options: {
          ...mapped.payload.options,
          requestId,
          forceRun,
          startFromStep: targetStep,
          onlyStep: targetStep,
        },
        meta: {
          ...mapped.payload.meta,
          reasonCodes: scopedReasonCodes,
        },
      };

      const result = await sendMessage('transferRME', {
        ...scopedPayload,
      });
      setTransferResult(result);
      setTransferRunId(result.runId);
      setTransferSteps(result.steps);
      setTransferReasonCodes(result.reasonCodes);
      setTransferUiState(mapTransferStateToUi(result.state));
      if (result.state !== 'success') {
        const firstReason = result.reasonCodes[0];
        setTransferError(firstReason ? REASON_CODE_LABELS[firstReason] : 'Transfer RME tidak sepenuhnya berhasil.');
      }
    } catch (error) {
      setTransferUiState('failed');
      setTransferError(error instanceof Error ? error.message : 'Transfer RME gagal.');
    }
  };

  const handleCancelTransfer = async (): Promise<void> => {
    if (!transferRunId) return;
    try {
      await sendMessage('cancelRMETransfer', { runId: transferRunId });
      setTransferUiState('failed');
      setTransferError(REASON_CODE_LABELS.USER_CANCELLED);
    } catch (error) {
      setTransferUiState('failed');
      setTransferError(error instanceof Error ? error.message : 'Gagal membatalkan transfer.');
    }
  };

  const selectSuggestedDiagnosis = (item: RankedDiagnosis): void => {
    const diagnosis: SelectedDiagnosis = {
      icd_x: item.suggestion.icd_x,
      nama: item.suggestion.nama,
      source: 'suggested',
      rank: item.rank,
    };

    let exceeded = false;
    setSelectedDiagnoses((prev) => {
      const exists = prev.some((entry) => diagnosisKey(entry) === diagnosisKey(diagnosis));
      if (exists) {
        return prev.filter((entry) => diagnosisKey(entry) !== diagnosisKey(diagnosis));
      }
      if (prev.length >= MAX_DIAGNOSIS_SELECTION) {
        exceeded = true;
        return prev;
      }
      return [...prev, diagnosis];
    });

    if (exceeded) {
      setTherapyState('error');
      setTherapyError(`Maksimal ${MAX_DIAGNOSIS_SELECTION} diagnosis dapat dipilih.`);
    } else {
      setTherapyError('');
    }
  };

  const selectManualDiagnosis = (): void => {
    const icd = manualIcd.trim().toUpperCase();
    if (!icd) {
      setTherapyState('error');
      setTherapyError('Kode ICD-X manual wajib diisi sebelum mengambil farmakoterapi.');
      return;
    }

    const diagnosis: SelectedDiagnosis = {
      icd_x: icd,
      nama: manualName.trim() || 'Diagnosis manual',
      source: 'manual',
    };

    let exceeded = false;
    setSelectedDiagnoses((prev) => {
      const exists = prev.some((entry) => diagnosisKey(entry) === diagnosisKey(diagnosis));
      if (exists) {
        return prev.filter((entry) => diagnosisKey(entry) !== diagnosisKey(diagnosis));
      }
      if (prev.length >= MAX_DIAGNOSIS_SELECTION) {
        exceeded = true;
        return prev;
      }
      return [...prev, diagnosis];
    });

    if (exceeded) {
      setTherapyState('error');
      setTherapyError(`Maksimal ${MAX_DIAGNOSIS_SELECTION} diagnosis dapat dipilih.`);
      return;
    }

    setTherapyError('');
    setManualIcd('');
    setManualName('');
  };

  const removeDiagnosis = (diagnosis: SelectedDiagnosis): void => {
    setSelectedDiagnoses((prev) =>
      prev.filter((entry) => diagnosisKey(entry) !== diagnosisKey(diagnosis))
    );
    setTherapyError('');
  };

  return (
    <div className="relative min-h-screen w-full p-5 flex flex-col gap-4" style={{ background: 'linear-gradient(180deg, #202024 0%, #1a1a1d 100%)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,107,47,0.08) 0%, transparent 70%)',
        }}
      />
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="neu-logo w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src={browser.runtime.getURL('/sentra.png')}
              alt="Sentra"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="text-title text-platinum">Sentra Assist</h1>
            <p className="text-small text-muted mt-0.5">Differential Diagnosis Workup</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-left">
            <p className="text-[10px] text-muted leading-tight">Architected by</p>
            <p className="text-[12px] text-platinum font-semibold leading-tight">dr Ferdi Iskandar</p>
          </div>
          <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
            <img src={browser.runtime.getURL('/docsy.png')} alt="Docsy" className="w-14 h-14 object-contain" />
          </div>
        </div>
      </header>

      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-3 py-2 text-xs font-semibold text-platinum hover:bg-carbon-800 transition-colors"
        >
          ← Kembali
        </button>
        <div className="flex-1">
          <h2 className="text-xs font-semibold uppercase tracking-wide animate-pulse" style={{ color: 'var(--accent-primary)' }}>
            Differential Diagnosis (Top 3-5)
          </h2>
        </div>
        {processingTimeMs !== null && (
          <span className="px-2 py-1 text-[10px] rounded border border-[var(--border-subtle)] text-muted font-mono">
            {processingTimeMs}ms
          </span>
        )}
      </div>

      <div className="ttv-section p-3">
        <div className="text-tiny font-bold text-muted uppercase tracking-wide mb-1">Chief Complaint Context</div>
        <div className="text-small text-platinum">{keluhanUtama || '-'}</div>
        {keluhanTambahan && <div className="text-small text-muted mt-1">{keluhanTambahan}</div>}
        <div className="text-[10px] text-muted mt-2 font-mono">RM: {patientRM} | Age: {patientAge || '-'} | Gender: {patientGender}</div>
      </div>

      <div className="ttv-section p-3">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="text-tiny font-bold text-muted uppercase tracking-wide">
            Pregnancy Status Confirmation
          </div>
          <span className="px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[10px] text-muted">
            {pregnancyStatusLabel(pregnancyStatus)}
          </span>
        </div>
        {patientGender === 'L' ? (
          <div className="text-[10px] text-muted leading-snug">
            Gender male terdeteksi, status kehamilan dikunci ke <span className="text-platinum font-semibold">Not Pregnant</span>.
          </div>
        ) : typeof confirmedPregnancyStatus === 'boolean' ? (
          <div className="text-[10px] text-muted leading-snug">
            Status kehamilan diambil dari konfirmasi Anamnesa:{' '}
            <span className="text-platinum font-semibold">
              {confirmedPregnancyStatus ? 'Pregnant' : 'Not Pregnant'}
            </span>.
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="text-[10px] text-muted leading-snug">
              Default saat tidak dicentang adalah <span className="text-platinum font-semibold">Not Pregnant</span>.
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPregnancyStatus(false)}
                className={`px-3 py-1.5 rounded border text-[10px] font-semibold transition-colors ${
                  pregnancyStatus === false
                    ? 'border-emerald-600/35 text-emerald-300 bg-emerald-600/10'
                    : 'border-[var(--border-subtle)] text-muted hover:text-platinum'
                }`}
              >
                Not Pregnant
              </button>
              <button
                onClick={() => setPregnancyStatus(true)}
                className={`px-3 py-1.5 rounded border text-[10px] font-semibold transition-colors ${
                  pregnancyStatus === true
                    ? 'border-amber-600/35 text-amber-300 bg-amber-600/10'
                    : 'border-[var(--border-subtle)] text-muted hover:text-platinum'
                }`}
              >
                Pregnant
              </button>
            </div>
          </div>
        )}
      </div>

      {phase === 'loading' && (
        <div className="ttv-section p-8 flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-pulse-500 border-t-transparent rounded-full animate-spin" />
          <div className="text-small text-muted">Menganalisis differential diagnosis...</div>
        </div>
      )}

      {phase === 'error' && (
        <div className="bg-[var(--surface-secondary)] border border-critical/40 rounded-[6px] p-4">
          <div className="text-xs text-critical font-bold mb-1">FAILED TO LOAD DIFFERENTIAL</div>
          <div className="text-small text-muted">{errorMsg || 'Terjadi error saat memuat data.'}</div>
        </div>
      )}

      {phase === 'ready' && rankedDiagnoses.length === 0 && (
        <div className="ttv-section p-4">
          <div className="text-small text-muted">Belum ada differential diagnosis yang bisa diproposisikan.</div>
        </div>
      )}

      {phase === 'ready' && rankedDiagnoses.length > 0 && (
        <div className="flex flex-col gap-3">
          {errorMsg && (
            <div className="bg-amber-700/10 border border-amber-700/30 rounded-[6px] p-3">
              <div className="text-[10px] text-amber-300 leading-snug">{errorMsg}</div>
            </div>
          )}

          {rankedDiagnoses.map((item) => {
            const { suggestion, insight } = item;
            const confidencePct = Math.round(suggestion.confidence * 100);
            const needStyle = toNeedStyle(insight.supportingExamPlan.needLevel);
            const diagnosisCandidate: SelectedDiagnosis = {
              icd_x: suggestion.icd_x,
              nama: suggestion.nama,
              source: 'suggested',
              rank: item.rank,
            };
            const isSelected = isDiagnosisSelected(diagnosisCandidate);
            const isSelectionBlocked =
              !isSelected && selectedDiagnoses.length >= MAX_DIAGNOSIS_SELECTION;

            return (
              <div
                key={`${suggestion.icd_x}-${suggestion.rank}`}
                className={`ttv-section p-4 ${isSelected ? 'border-emerald-500/50' : ''}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-carbon-800 border border-[var(--border-subtle)] text-[10px] text-muted font-mono">
                        #{item.rank}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-carbon-800 border border-[var(--border-subtle)] text-[10px] text-platinum font-mono">
                        {suggestion.icd_x}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-platinum mt-2">{humanize(suggestion.nama)}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted uppercase tracking-wide">Confidence</div>
                    <div className="text-sm font-mono font-bold text-platinum">{confidencePct}%</div>
                    <div className="text-[10px] text-muted mt-1">
                      Dx score: <span className="font-mono text-platinum">{item.diagnosisScore}</span>
                    </div>
                    <button
                      onClick={() => selectSuggestedDiagnosis(item)}
                      disabled={isSelectionBlocked}
                      className={`mt-2 px-2 py-1 rounded border text-[10px] font-semibold transition-colors ${
                        isSelected
                          ? 'border-emerald-600/35 text-emerald-300 bg-emerald-600/10'
                          : isSelectionBlocked
                            ? 'border-[var(--border-subtle)] text-muted/50 cursor-not-allowed'
                            : 'border-[var(--border-subtle)] text-muted hover:text-platinum'
                      }`}
                    >
                      {isSelected ? 'Batalkan Pilihan' : 'Pilih Diagnosis'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="ct-neu-cell bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-2">
                    <div className="text-tiny font-bold text-muted uppercase tracking-wide mb-1">Berdasarkan Gejala</div>
                    <div className="flex flex-wrap gap-1">
                      {insight.matchedSymptoms.length > 0 ? (
                        insight.matchedSymptoms.map((item) => (
                          <span key={item} className="px-2 py-0.5 rounded bg-carbon-800/70 border border-[var(--border-subtle)] text-[10px] text-muted">
                            {humanize(item)}
                          </span>
                        ))
                      ) : (
                        <span className="text-[10px] text-muted">Tidak ada sinyal gejala dominan.</span>
                      )}
                    </div>
                  </div>

                  <div className="ct-neu-cell bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-2">
                    <div className="text-tiny font-bold text-muted uppercase tracking-wide mb-1">Driver TTV</div>
                    <div className="flex flex-col gap-1">
                      {insight.vitalDrivers.length > 0 ? (
                        insight.vitalDrivers.slice(0, 2).map((driver) => (
                          <div key={driver} className="text-[10px] text-muted leading-snug">
                            • {humanize(driver)}
                          </div>
                        ))
                      ) : (
                        <div className="text-[10px] text-muted">Tidak ada abnormalitas TTV dominan.</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="ct-neu-cell bg-[var(--surface-primary)] border rounded-[6px] p-2 mb-2" style={{ borderColor: needStyle.border }}>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="text-tiny font-bold text-muted uppercase tracking-wide">Pemeriksaan Penunjang</div>
                    <span
                      className="px-2 py-0.5 rounded border text-[10px] font-bold tracking-wide"
                      style={{ color: needStyle.color, background: needStyle.bg, borderColor: needStyle.border }}
                    >
                      {needStyle.label}
                    </span>
                  </div>
                  <div className="text-[10px] text-muted mb-1">{insight.supportingExamPlan.summary}</div>
                  <div className="flex flex-col gap-1">
                    {insight.supportingExamPlan.tests.slice(0, 4).map((test) => (
                      <div key={test} className="text-[10px] text-muted leading-snug">
                        • {humanize(test)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-muted leading-relaxed mb-2">
                  {humanize(suggestion.rationale || suggestion.reasoning || 'Rasional klinis tidak tersedia.')}
                </div>

                {suggestion.red_flags && suggestion.red_flags.length > 0 && (
                  <div className="mb-2">
                    <div className="text-[10px] text-critical uppercase font-bold tracking-wide mb-1">Red Flags</div>
                    <div className="flex flex-wrap gap-1">
                      {suggestion.red_flags.slice(0, 4).map((flag) => (
                        <span
                          key={flag}
                          className="px-2 py-0.5 rounded bg-critical/10 border border-critical/30 text-[10px] text-critical"
                        >
                          {humanize(flag)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {suggestion.recommended_actions && suggestion.recommended_actions.length > 0 && (
                  <div>
                    <div className="text-[10px] text-muted uppercase font-bold tracking-wide mb-1">Aksi Awal Disarankan</div>
                    <div className="flex flex-col gap-1">
                      {suggestion.recommended_actions.slice(0, 3).map((action) => (
                        <div key={action} className="text-[10px] text-muted leading-snug">
                          • {humanize(action)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="ttv-section p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="text-tiny font-bold text-muted uppercase tracking-wide">
                Diagnosis Terpilih
              </div>
              <span className="px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[10px] text-muted">
                {selectedDiagnoses.length}/{MAX_DIAGNOSIS_SELECTION}
              </span>
            </div>
            {selectedDiagnoses.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedDiagnoses.map((diagnosis) => (
                  <button
                    key={diagnosisKey(diagnosis)}
                    onClick={() => removeDiagnosis(diagnosis)}
                    className="px-2 py-1 rounded border border-emerald-600/35 bg-emerald-600/10 text-[10px] text-emerald-300"
                  >
                    {diagnosis.icd_x} - {humanize(diagnosis.nama)} ×
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-[10px] text-muted">
                Pilih 1-2 diagnosis dari daftar differential. Klik ulang diagnosis untuk membatalkan.
              </div>
            )}
          </div>

          <div className="ttv-section p-4">
            <button
              onClick={() => setShowManualDiagnosisInput((prev) => !prev)}
              className="px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-[var(--border-subtle)] text-platinum hover:bg-carbon-800 transition-colors"
            >
              {showManualDiagnosisInput
                ? 'Tutup Input Diagnosis Manual'
                : 'Input Diagnosis Manual (Opsional)'}
            </button>
            {showManualDiagnosisInput && (
              <div className="mt-3">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <input
                    value={manualIcd}
                    onChange={(event) => setManualIcd(event.target.value)}
                    placeholder="ICD-X manual (contoh: I10)"
                    className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] px-2 py-2 text-xs text-platinum outline-none"
                  />
                  <input
                    value={manualName}
                    onChange={(event) => setManualName(event.target.value)}
                    placeholder="Nama diagnosis manual (opsional)"
                    className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] px-2 py-2 text-xs text-platinum outline-none"
                  />
                </div>
                <button
                  onClick={selectManualDiagnosis}
                  className="px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-emerald-600/40 text-emerald-300 bg-emerald-600/10 hover:bg-emerald-600/20 transition-colors"
                >
                  Gunakan Diagnosis Manual
                </button>
              </div>
            )}
          </div>

          <div className="ttv-section p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="text-tiny font-bold text-muted uppercase tracking-wide">
                Terapi Farmakologi Awal
              </div>
              <span className="px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[10px] text-muted">
                Basis:{' '}
                {selectedDiagnoses.length > 0
                  ? selectedDiagnoses.map((item) => item.icd_x).join(', ')
                  : 'Belum dipilih'}
              </span>
            </div>
            {therapyState === 'idle' && (
              <div className="text-[10px] text-muted leading-snug">
                {therapyError || 'Pilih diagnosis terlebih dahulu agar rekomendasi farmakoterapi ditampilkan.'}
              </div>
            )}
            {therapyState === 'loading' && (
              <div className="text-[10px] text-muted leading-snug">
                Mengambil rekomendasi farmakoterapi untuk diagnosis terpilih...
              </div>
            )}
            {therapyState === 'error' && (
              <div className="text-[10px] text-critical leading-snug mb-2">
                {therapyError || 'Gagal memuat rekomendasi farmakoterapi.'}
              </div>
            )}

            {(therapyState === 'ready' || therapyState === 'error' || therapyState === 'loading') &&
            selectedDiagnoses.length > 0 ? (
              <div className="grid grid-cols-1 gap-2">
                {selectedDiagnoses.map((diagnosis) => {
                  const therapyResult = therapyByDiagnosis.find(
                    (result) => diagnosisKey(result.diagnosis) === diagnosisKey(diagnosis),
                  );
                  const medications = therapyResult?.medications || [];
                  const explainability = therapyResult?.explainability;
                  const escalationAlerts = (therapyResult?.alerts || []).filter(
                    (alert) => alert.type === 'red_flag' && alert.severity === 'emergency',
                  );
                  const explainabilityRiskUi = explainability ? riskTierUi(explainability.risk_tier) : null;

                  return (
                    <div
                      key={diagnosisKey(diagnosis)}
                      className="ct-neu-cell bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-2"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="text-[11px] font-semibold text-platinum">
                          {diagnosis.icd_x} - {humanize(diagnosis.nama)}
                        </div>
                        <button
                          onClick={() => removeDiagnosis(diagnosis)}
                          className="px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[10px] text-muted hover:text-platinum"
                        >
                          Batalkan
                        </button>
                      </div>

                      {!therapyResult && therapyState === 'loading' && (
                        <div className="text-[10px] text-muted">
                          Menyiapkan rekomendasi farmakoterapi...
                        </div>
                      )}
                      {therapyResult?.error && (
                        <div className="text-[10px] text-critical">{therapyResult.error}</div>
                      )}
                      {therapyResult && !therapyResult.error && explainability && (
                        <div className="ct-neu-cell bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-2 mb-2">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="text-tiny font-bold text-muted uppercase tracking-wide">
                              Explainability
                            </div>
                            <div className="flex items-center gap-1.5">
                              {explainabilityRiskUi && (
                                <span
                                  className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${explainabilityRiskUi.badgeClass}`}
                                >
                                  {explainabilityRiskUi.label}
                                </span>
                              )}
                              <span className="px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[10px] text-platinum font-mono">
                                {Math.round(explainability.confidence)}%
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="text-[10px] text-muted">
                              Review window:{' '}
                              <span className="text-platinum font-mono">{explainability.review_window}</span>
                            </div>
                            <div className="text-[10px] text-muted">
                              Pathway:{' '}
                              <span className="text-platinum">{pathwayUi(explainability.pathway)}</span>
                            </div>
                          </div>
                          <div className="text-[10px] text-muted uppercase tracking-wide font-semibold mb-1">
                            Drivers
                          </div>
                          <div className="flex flex-col gap-1">
                            {explainability.drivers.slice(0, 5).map((driver) => (
                              <div key={driver} className="text-[10px] text-muted leading-snug">
                                • {humanize(driver)}
                              </div>
                            ))}
                          </div>
                          {explainability.missing_data.length > 0 && (
                            <div className="mt-2">
                              <div className="text-[10px] text-amber-300 uppercase tracking-wide font-semibold mb-1">
                                Missing Data
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {explainability.missing_data.map((item) => (
                                  <span
                                    key={item}
                                    className="px-2 py-0.5 rounded border border-amber-600/35 bg-amber-600/10 text-[10px] text-amber-300"
                                  >
                                    {humanize(item)}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {therapyResult && !therapyResult.error && escalationAlerts.length > 0 && (
                        <div className="ct-neu-cell bg-red-600/10 border border-red-600/35 rounded-[6px] p-2 mb-2">
                          <div className="text-[10px] text-red-300 font-semibold uppercase tracking-wide mb-1">
                            Escalation Alert
                          </div>
                          {escalationAlerts.slice(0, 2).map((alert) => (
                            <div key={alert.id} className="text-[10px] text-red-200 leading-snug mb-1 last:mb-0">
                              • {humanize(alert.title)}: {humanize(alert.message)}
                            </div>
                          ))}
                        </div>
                      )}
                      {therapyResult && !therapyResult.error && medications.length > 0 && (
                        <div className="grid grid-cols-1 gap-2">
                          {medications.slice(0, 5).map((med) => (
                            <div
                              key={`${diagnosisKey(diagnosis)}-${med.nama_obat}-${med.dosis}`}
                              className="neu-list-item rounded-[10px] p-2"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="text-xs font-semibold text-platinum">{med.nama_obat}</div>
                                  <div className="text-[10px] text-muted mt-0.5">
                                    {med.dosis} • {med.aturan_pakai} • {med.durasi || '-'}
                                  </div>
                                </div>
                                <span
                                  className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${
                                    med.safety_check === 'safe'
                                      ? 'border-emerald-600/35 text-emerald-400'
                                      : med.safety_check === 'caution'
                                        ? 'border-amber-600/35 text-amber-400'
                                        : 'border-red-600/35 text-red-400'
                                  }`}
                                >
                                  {med.safety_check.toUpperCase()}
                                </span>
                              </div>
                              <div className="text-[10px] text-muted mt-1 leading-snug">
                                {humanize(med.rationale)}
                              </div>
                              {med.contraindications && med.contraindications.length > 0 && (
                                <div className="text-[10px] text-amber-300 mt-1">
                                  Kontraindikasi: {med.contraindications.map((c) => humanize(c)).join('; ')}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {therapyResult && !therapyResult.error && therapyResult.guidelines.length > 0 && (
                        <div className="ct-neu-cell bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-2 mt-2">
                          <div className="text-[10px] text-muted uppercase tracking-wide font-semibold mb-1">
                            Guideline Notes
                          </div>
                          <div className="flex flex-col gap-1">
                            {therapyResult.guidelines.slice(0, 3).map((guide) => (
                              <div key={guide} className="text-[10px] text-muted leading-snug">
                                • {humanize(guide)}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {therapyResult && !therapyResult.error && medications.length === 0 && (
                        <div className="text-[10px] text-muted">
                          Belum ada paket terapi farmakologi terstruktur untuk diagnosis ini.
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      )}

      <div className="ttv-section p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="text-tiny font-bold text-muted uppercase tracking-wide">
            Uplink RME (Manual per Halaman)
          </div>
          <span
            className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${
              transferUiState === 'success'
                ? 'border-emerald-600/35 text-emerald-300 bg-emerald-600/10'
                : transferUiState === 'partial'
                  ? 'border-amber-600/35 text-amber-300 bg-amber-600/10'
                  : transferUiState === 'running'
                    ? 'border-blue-600/35 text-blue-300 bg-blue-600/10'
                    : transferUiState === 'failed'
                      ? 'border-red-600/35 text-red-300 bg-red-600/10'
                      : 'border-[var(--border-subtle)] text-muted'
            }`}
          >
            {transferUiState.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2 mb-3">
          {TRANSFER_STEP_ORDER.map((step) => {
            const status = transferSteps[step];
            const hasError = status.state === 'failed' || status.state === 'partial';
            return (
              <div
                key={step}
                className={`ct-neu-cell motion-card rounded-[6px] p-2 border ${
                  hasError
                    ? 'border-amber-600/35 bg-amber-600/10'
                    : status.state === 'success'
                      ? 'border-emerald-600/35 bg-emerald-600/10'
                      : status.state === 'running'
                        ? 'border-blue-600/35 bg-blue-600/10'
                        : 'border-[var(--border-subtle)] bg-[var(--surface-primary)]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[11px] font-semibold text-platinum">{stepLabel(step)}</div>
                  <div className="text-[10px] text-muted font-mono">
                    {status.state} • {status.latencyMs}ms • try {status.attempt}
                  </div>
                </div>
                <div className="text-[10px] text-muted mt-1">
                  ok:{status.successCount} fail:{status.failedCount} skip:{status.skippedCount}
                </div>
                {status.reasonCode && (
                  <div className="text-[10px] text-amber-300 mt-1 leading-snug">
                    {REASON_CODE_LABELS[status.reasonCode]}
                  </div>
                )}
                {status.message && (
                  <div className="text-[10px] text-muted mt-1 leading-snug">{status.message}</div>
                )}
              </div>
            );
          })}
        </div>

        {transferReasonCodes.length > 0 && (
          <div className="mb-3 text-[10px] text-muted leading-snug">
            Reason code: {transferReasonCodes.map((code) => REASON_CODE_LABELS[code] || code).join(' | ')}
          </div>
        )}

        {transferError && (
          <div className="mb-3 text-[10px] text-red-300 leading-snug">{transferError}</div>
        )}

        {transferResult && (
          <div className="mb-3 text-[10px] text-muted leading-snug font-mono">
            runId: {transferResult.runId} • total: {transferResult.totalLatencyMs}ms
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              void handleTransferToRME('anamnesa', false);
            }}
            disabled={transferUiState === 'running'}
            className="motion-press px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-blue-600/40 text-blue-300 bg-blue-600/10 hover:bg-blue-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Uplink Anamnesa
          </button>
          <button
            onClick={() => {
              void handleTransferToRME('diagnosa', false);
            }}
            disabled={!hasDiagnosisForTransfer || transferUiState === 'running'}
            className="motion-press px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-cyan-600/40 text-cyan-300 bg-cyan-600/10 hover:bg-cyan-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Uplink Diagnosa
          </button>
          <button
            onClick={() => {
              void handleTransferToRME('resep', false);
            }}
            disabled={!hasResepPayloadReady || transferUiState === 'running'}
            className="motion-press px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-emerald-600/40 text-emerald-300 bg-emerald-600/10 hover:bg-emerald-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Uplink Resep
          </button>
          <button
            onClick={() => {
              void handleTransferToRME(lastTriggeredStep, true);
            }}
            disabled={transferUiState === 'running'}
            className="motion-press px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-amber-600/40 text-amber-300 bg-amber-600/10 hover:bg-amber-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Paksa Rerun Step
          </button>
          <button
            onClick={() => {
              void handleCancelTransfer();
            }}
            disabled={transferUiState !== 'running' || !transferRunId}
            className="motion-press px-3 py-2 text-[11px] font-semibold rounded-[6px] border border-red-600/40 text-red-300 bg-red-600/10 hover:bg-red-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>

        {(!hasDiagnosisForTransfer || !hasResepPayloadReady) && (
          <div className="mt-2 text-[10px] text-muted leading-snug">
            Alur manual: buka halaman Anamnesa lalu klik `Uplink Anamnesa`, pindah ke Diagnosa dan
            pilih diagnosis lalu klik `Uplink Diagnosa`, lalu ke Resep klik `Uplink Resep`.
          </div>
        )}
      </div>

      <div className="bg-amber-700/10 border border-amber-700/30 rounded-[6px] p-3">
        <div className="text-[10px] text-amber-400 font-semibold uppercase tracking-wide mb-1">Clinical Safety Note</div>
        <div className="text-[10px] text-muted leading-relaxed">
          Differential diagnosis adalah dukungan klinis awal, bukan diagnosis final. Konfirmasi dengan anamnesis
          lanjutan, pemeriksaan fisik, dan pemeriksaan penunjang sesuai konteks FKTP.
        </div>
      </div>
    </div>
  );
};
