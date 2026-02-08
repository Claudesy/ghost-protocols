import {
  calculateRisk,
  getPatientContext,
  type PatientDemographics,
  type VitalInput,
} from '@sentra/inference-engine';
import type { AIDiagnosisSuggestion, AnonymizedClinicalContext } from '@/lib/api/deepseek-types';
import type { Encounter } from '~/utils/types';
import type { RedFlag } from './red-flags';
import type { CDSSAlert } from './engine';

export interface V3AdapterResult {
  rawSuggestions: AIDiagnosisSuggestion[];
  alerts: CDSSAlert[];
  modelVersion: string;
  source: 'local';
  dataQualityWarnings: string[];
}

const DEFAULT_VITALS: VitalInput = {
  sbp: 120,
  dbp: 80,
  hr: 80,
  rr: 16,
  spo2: 98,
  temp: 36.8,
  supplementalO2: false,
};

const SYNDROME_META: Record<string, { name: string; icd10: string; actions: string[] }> = {
  SYNDROME_SEPSIS: {
    name: 'Suspek Sepsis',
    icd10: 'A41.9',
    actions: ['Evaluasi segera dengan bundle sepsis', 'Pertimbangkan rujukan emergensi'],
  },
  SYNDROME_SHOCK: {
    name: 'Suspek Syok',
    icd10: 'R57.9',
    actions: ['Stabilisasi hemodinamik segera', 'Prioritaskan rujukan'],
  },
  SYNDROME_RESPIRATORY_FAILURE: {
    name: 'Gagal Napas',
    icd10: 'J96.9',
    actions: ['Optimasi jalan napas dan oksigenasi', 'Aktifkan rujukan emergensi'],
  },
  SYNDROME_PREECLAMPSIA: {
    name: 'Suspek Preeklampsia',
    icd10: 'O14.9',
    actions: ['Monitoring tekanan darah ketat', 'Rujuk ke fasilitas obstetri'],
  },
};

const ALERT_SEVERITY_ORDER: Record<CDSSAlert['severity'], number> = {
  emergency: 0,
  high: 1,
  medium: 2,
  low: 3,
  info: 4,
};

const toNumber = (value: unknown): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
};

const extractVitals = (context: AnonymizedClinicalContext): { vitals: VitalInput; warnings: string[] } => {
  const warnings: string[] = [];
  const input = context.vital_signs;

  const vitals: VitalInput = {
    sbp: toNumber(input?.systolic) ?? DEFAULT_VITALS.sbp,
    dbp: toNumber(input?.diastolic) ?? DEFAULT_VITALS.dbp,
    hr: toNumber(input?.heart_rate) ?? DEFAULT_VITALS.hr,
    rr: toNumber(input?.respiratory_rate) ?? DEFAULT_VITALS.rr,
    spo2: toNumber(input?.spo2) ?? DEFAULT_VITALS.spo2,
    temp: toNumber(input?.temperature) ?? DEFAULT_VITALS.temp,
    gcs: toNumber(input?.gcs),
    supplementalO2: false,
  };

  if (!input) {
    warnings.push('Vital signs tidak tersedia, menggunakan nilai default konservatif.');
  }

  if (toNumber(input?.systolic) === undefined || toNumber(input?.diastolic) === undefined) {
    warnings.push('Tekanan darah tidak lengkap, estimasi default dipakai.');
  }

  return { vitals, warnings };
};

const extractDemographics = (
  _encounter: Encounter,
  context: AnonymizedClinicalContext,
): PatientDemographics => {
  const chronic = context.chronic_diseases?.map((d) => d.toLowerCase()) ?? [];
  return {
    ageYears: Number.isFinite(context.usia_tahun) ? Math.max(0, context.usia_tahun) : 30,
    sex: context.jenis_kelamin === 'P' ? 'FEMALE' : 'MALE',
    isPregnant: Boolean(context.is_pregnant),
    isPostPartum: false,
    hasDiabetes: chronic.some((d) => d.includes('diabetes') || d.includes('dm')),
    hasChronicHypertension: chronic.some((d) => d.includes('hipertensi')),
    hasCOPD: chronic.some((d) => d.includes('copd') || d.includes('ppok')),
    hasHeartFailure: chronic.some((d) => d.includes('heart failure') || d.includes('gagal jantung')),
  };
};

const toSuggestion = (
  syndromeId: string,
  confidence: number,
  reasoning: string,
  rank: number,
  redFlags: RedFlag[],
): AIDiagnosisSuggestion => {
  const meta = SYNDROME_META[syndromeId] ?? {
    name: syndromeId.replace(/^SYNDROME_/, '').replace(/_/g, ' '),
    icd10: 'R69',
    actions: ['Konfirmasi diagnosis dengan pemeriksaan klinis lanjutan'],
  };

  const linkedRedFlags = redFlags
    .filter((flag) => flag.condition.toLowerCase().includes(meta.name.toLowerCase().split(' ')[0]))
    .map((flag) => flag.condition);

  return {
    rank,
    diagnosis_name: meta.name,
    icd10_code: meta.icd10,
    confidence: Math.max(0, Math.min(1, confidence)),
    reasoning,
    red_flags: linkedRedFlags,
    recommended_actions: meta.actions,
  };
};

const deriveAlerts = (
  _redFlags: RedFlag[],
  risk: ReturnType<typeof calculateRisk>,
  warnings: string[],
): CDSSAlert[] => {
  const alerts: CDSSAlert[] = [];

  for (const warning of warnings) {
    alerts.push({
      id: `v3-warn-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type: 'validation_warning',
      severity: 'low',
      title: 'Data Klinis Parsial',
      message: warning,
    });
  }

  if (risk.composite.level === 'CRITICAL') {
    alerts.push({
      id: `v3-risk-${Date.now()}-critical`,
      type: 'sepsis_warning',
      severity: 'emergency',
      title: 'Risiko Klinis Kritis',
      message: 'Skor komposit v3 menandakan kondisi kritis, evaluasi dan rujuk segera.',
      action: 'Aktifkan protokol emergensi dan persiapkan rujukan.',
    });
  } else if (risk.composite.level === 'HIGH') {
    alerts.push({
      id: `v3-risk-${Date.now()}-high`,
      type: 'vital_sign',
      severity: 'high',
      title: 'Risiko Klinis Tinggi',
      message: 'Skor komposit v3 tinggi, butuh evaluasi klinis cepat.',
      action: 'Lakukan reassessment ketat 15-30 menit.',
    });
  }

  if (risk.qsofa.total >= 2) {
    alerts.push({
      id: `v3-qsofa-${Date.now()}`,
      type: 'sepsis_warning',
      severity: 'high',
      title: 'qSOFA Tinggi',
      message: `qSOFA ${risk.qsofa.total}/3 mengarah ke risiko sepsis.`,
      action: 'Pertimbangkan bundle sepsis dan rujuk bila tidak stabil.',
    });
  }

  if (risk.shockIndex.riskLevel === 'CRITICAL') {
    alerts.push({
      id: `v3-shock-${Date.now()}`,
      type: 'vital_sign',
      severity: 'emergency',
      title: 'Shock Index Kritis',
      message: risk.shockIndex.interpretation,
      action: risk.shockIndex.recommendation,
    });
  }

  return alerts.sort((a, b) => ALERT_SEVERITY_ORDER[a.severity] - ALERT_SEVERITY_ORDER[b.severity]);
};

const buildIncompleteDataFallbackSuggestion = (): AIDiagnosisSuggestion => ({
  rank: 1,
  diagnosis_name: 'Data Tidak Cukup untuk Penilaian Klinis',
  icd10_code: 'R69',
  confidence: 0,
  reasoning:
    'Vital signs tidak lengkap. Mohon lengkapi pemeriksaan fisik (TD, nadi, suhu, RR, SpO2) untuk meningkatkan akurasi diagnosis banding.',
  red_flags: ['INSUFFICIENT_DATA'],
  recommended_actions: ['Lengkapi TTV', 'Anamnesis ulang terarah'],
});

export const runV3InferenceFromEncounter = (
  encounter: Encounter,
  context: AnonymizedClinicalContext,
  redFlags: RedFlag[],
): V3AdapterResult => {
  const { vitals, warnings } = extractVitals(context);
  const demographics = extractDemographics(encounter, context);
  const patientContext = getPatientContext(demographics);
  const risk = calculateRisk(vitals, demographics, patientContext);

  const evaluations = [...risk.syndromes.evaluations]
    .sort((a, b) => b.posterior.point - a.posterior.point)
    .slice(0, 5);

  const rawSuggestions = evaluations.map((evaluation, idx) =>
    toSuggestion(
      evaluation.syndromeId,
      evaluation.posterior.point,
      evaluation.explanation,
      idx + 1,
      redFlags,
    ),
  );

  if (rawSuggestions.length === 0) {
    warnings.push(
      'Engine v3 tidak menemukan sindrom dominan dari data saat ini. Safety-net fallback diaktifkan.',
    );
    rawSuggestions.push(buildIncompleteDataFallbackSuggestion());
  }

  const alerts = deriveAlerts(redFlags, risk, warnings);

  return {
    rawSuggestions,
    alerts,
    modelVersion: 'sentra-inference-v3.0.0',
    source: 'local',
    dataQualityWarnings: warnings,
  };
};
