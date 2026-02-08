/**
 * TTV Inference UI Component
 *
 * Gate 1: Vital Signs + Anamnesa with AI Narrative Generation
 * Two-column layout: Vital Signs (left) | Symptoms + AI Narrative (right)
 *
 * Uses integrated clinical decision workflow:
 * - Gate 2: HTN Classification (FKTP 2024)
 * - Gate 3: Glucose Classification (PERKENI 2024)
 * - Gate 4: Occult Shock Detection (MSF Guidelines)
 *
 * @module components/clinical/TTVInferenceUI
 */

import React, { useCallback, useEffect, useState } from 'react';
import { piecesClient, type PiecesSnippet } from '../../lib/api';
import { generateNarrative, getSuggestions } from '../../lib/inference/narrative-generator';
import { playNotificationSound } from '../../utils/audio';
import type { AnamnesaFillPayload, FillResult } from '../../utils/types';
import { diagnosisSuggestionsStyles } from './DiagnosisSuggestions';
import { PatientHeader, type MedicalHistoryItem } from './PatientHeader';

// ============================================================================
// NATIVE CHROME MESSAGING (Bypass @webext-core/messaging for reliability)
// ============================================================================
type ScanFieldsResult = {
  success: boolean;
  error?: string;
  fields: Array<{
    tag: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
    className: string;
  }>;
};

// TSX-compatible generic helper (trailing comma prevents JSX parsing conflict)
async function sendNativeMessage<T>(type: string, data: unknown): Promise<T> {
  return new Promise((resolve, reject) => {
    const chromeGlobal = (globalThis as unknown as { chrome?: typeof chrome }).chrome;
    if (!chromeGlobal?.runtime?.sendMessage) {
      reject(new Error('Chrome runtime not available'));
      return;
    }
    chromeGlobal.runtime.sendMessage({ type, data }, (response: T) => {
      if (chromeGlobal.runtime.lastError) {
        reject(new Error(chromeGlobal.runtime.lastError.message));
        return;
      }
      resolve(response);
    });
  });
}

// Clinical Decision Workflow Imports
import {
  classifyBloodGlucose,
  type GlucoseClassification,
  type GlucoseData,
} from '../../lib/inference/glucose-classifier';
import {
  BP_THRESHOLDS,
  classifyHypertension,
  getHTNReasoning,
  getHTNRecommendations,
  getHTNSeverity,
  type BPMeasurementSession,
  type HTNClassification,
} from '../../lib/inference/htn-classifier';
import {
  calculateMAP,
  detectOccultShock,
  integratedTTVWorkflow,
  type ClinicalDecision,
  type OccultShockResult,
} from '../../lib/inference/occult-shock-detector';

// ============================================================================
// TYPES
// ============================================================================

// Lifted TTV Form State (from parent component)
export type AutosenPreset = 'normal' | 'ht' | 'hypo' | 'hyper';

export interface TTVFormState {
  sbp: string;
  dbp: string;
  hr: string;
  rr: string;
  temp: string;
  glucose: string;
  symptomText: string;
  allergies: string[];
  pregnancyStatus: boolean | null;
  autosenPreset: AutosenPreset;
}

export interface TTVInferenceUIProps {
  patientName: string;
  patientGender: 'L' | 'P';
  patientAge: number;
  patientRM: string;
  onComplete: (data: TTVInferenceData) => void;
  onCancel?: () => void;
  showMaskedName?: boolean;
  onAlertsChange?: (alerts: ScreeningAlert[]) => void;
  // Extended patient info
  patientDOB?: string;
  patientBloodType?: string;
  patientBPJSStatus?: 'aktif' | 'nonaktif' | 'mandiri' | null;
  patientKelurahan?: string;
  // Lifted state props (persists across tab switches)
  ttvState?: TTVFormState;
  onTTVStateChange?: (state: TTVFormState) => void;
  // Patient refresh
  onRefreshPatient?: () => void;
  isLoadingPatient?: boolean;
}

// Screening Alert Types (Integrated with Clinical Decision Workflow)
export interface ScreeningAlert {
  id: string;
  gate: 'GATE_2_HTN' | 'GATE_3_GLUCOSE' | 'GATE_4_OCCULT_SHOCK' | 'STANDARD_WORKFLOW';
  type:
    | 'ht_crisis'
    | 'ht_urgency'
    | 'ht_elevated'
    | 'hypoglycemia'
    | 'hyperglycemia'
    | 'occult_shock'
    | 'shock'
    | 'declining';
  severity: 'critical' | 'high' | 'warning';
  title: string;
  reasoning: string;
  recommendations: string[];
  // Additional clinical data
  clinicalData?: {
    map?: number;
    shockIndex?: number;
    delta_sbp?: number;
    baseline_bp?: { sbp: number; dbp: number };
  };
}

/**
 * TTVInferenceData interface
 *
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-02-04
 */

export interface TTVInferenceData {
  vital_signs: {
    sbp: number;
    dbp: number;
    hr: number;
    rr: number;
    temp: number;
  };
  anamnesa: {
    keluhan_utama: string;
    lama_sakit: string;
    is_akut: boolean;
  };
  is_pregnant: boolean | null;
  pregnancyStatus: boolean | null;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const TTVInferenceUI = ({
  patientName,
  patientGender,
  patientAge,
  patientRM,
  onComplete,
  showMaskedName = false,
  onAlertsChange,
  patientDOB,
  patientBloodType,
  patientBPJSStatus,
  patientKelurahan,
  ttvState,
  onTTVStateChange,
  onRefreshPatient,
  isLoadingPatient,
}: TTVInferenceUIProps) => {
  const defaultState: TTVFormState = {
    sbp: '',
    dbp: '',
    hr: '',
    rr: '',
    temp: '',
    glucose: '',
    symptomText: '',
    allergies: [],
    pregnancyStatus: null,
    autosenPreset: 'normal',
  };

  // Use lifted state if provided, otherwise use local state (for backward compatibility)
  const isLifted = Boolean(ttvState && onTTVStateChange);

  // Safe reference to lifted state (with fallback)
  const liftedState = ttvState ?? defaultState;
  const liftedSetter = onTTVStateChange ?? (() => {});

  // CRITICAL: Use refs to avoid stale closure in callbacks
  const liftedStateRef = React.useRef(liftedState);
  const liftedSetterRef = React.useRef(liftedSetter);

  // Keep refs updated
  React.useEffect(() => {
    liftedStateRef.current = liftedState;
    liftedSetterRef.current = liftedSetter;
  }, [liftedState, liftedSetter]);

  console.log('[TTVInferenceUI] Mounting with isLifted:', isLifted, 'ttvState:', ttvState);

  // Local state (only used if lifted state not provided)
  const [localSbp, setLocalSBP] = useState<string>('');
  const [localDbp, setLocalDBP] = useState<string>('');
  const [localHr, setLocalHR] = useState<string>('');
  const [localRr, setLocalRR] = useState<string>('');
  const [localTemp, setLocalTemp] = useState<string>('');
  const [localGlucose, setLocalGlucose] = useState<string>('');
  const [localSymptomText, setLocalSymptomText] = useState<string>('');
  const [localAllergies, setLocalAllergies] = useState<string[]>([]);
  const [localPregnancyStatus, setLocalPregnancyStatus] = useState<boolean | null>(null);
  const [localAutosenPreset, setLocalAutosenPreset] = useState<AutosenPreset>('normal');

  // Derived values - use lifted or local state
  const sbp = isLifted ? liftedState.sbp : localSbp;
  const dbp = isLifted ? liftedState.dbp : localDbp;
  const hr = isLifted ? liftedState.hr : localHr;
  const rr = isLifted ? liftedState.rr : localRr;
  const temp = isLifted ? liftedState.temp : localTemp;
  const glucose = isLifted ? liftedState.glucose : localGlucose;
  const symptomText = isLifted ? liftedState.symptomText : localSymptomText;
  const allergies = isLifted ? liftedState.allergies : localAllergies;
  const pregnancyStatus = isLifted ? liftedState.pregnancyStatus : localPregnancyStatus;
  const autosenPreset = isLifted ? liftedState.autosenPreset : localAutosenPreset;

  // Setter functions that update either lifted or local state
  // CRITICAL: Use refs to get latest state and avoid stale closures
  const setSBP = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, sbp: value });
      } else {
        setLocalSBP(value);
      }
    },
    [isLifted]
  );

  const setDBP = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, dbp: value });
      } else {
        setLocalDBP(value);
      }
    },
    [isLifted]
  );

  const setHR = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, hr: value });
      } else {
        setLocalHR(value);
      }
    },
    [isLifted]
  );

  const setRR = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, rr: value });
      } else {
        setLocalRR(value);
      }
    },
    [isLifted]
  );

  const setTemp = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, temp: value });
      } else {
        setLocalTemp(value);
      }
    },
    [isLifted]
  );

  const setGlucose = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, glucose: value });
      } else {
        setLocalGlucose(value);
      }
    },
    [isLifted]
  );

  const setSymptomText = useCallback(
    (value: string) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, symptomText: value });
      } else {
        setLocalSymptomText(value);
      }
    },
    [isLifted]
  );

  const setAllergies = useCallback(
    (value: string[] | ((prev: string[]) => string[])) => {
      if (isLifted) {
        const newValue =
          typeof value === 'function' ? value(liftedStateRef.current.allergies) : value;
        liftedSetterRef.current({ ...liftedStateRef.current, allergies: newValue });
      } else {
        setLocalAllergies(value);
      }
    },
    [isLifted]
  );

  const setAutosenPreset = useCallback(
    (value: AutosenPreset) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, autosenPreset: value });
      } else {
        setLocalAutosenPreset(value);
      }
    },
    [isLifted]
  );

  const setPregnancyStatus = useCallback(
    (value: boolean | null) => {
      if (isLifted) {
        liftedSetterRef.current({ ...liftedStateRef.current, pregnancyStatus: value });
      } else {
        setLocalPregnancyStatus(value);
      }
    },
    [isLifted]
  );

  // AutoSen animation state (always local - no need to persist)
  const [animatingField, setAnimatingField] = useState<string | null>(null);
  const [isAutoFilling, setIsAutoFilling] = useState(false);

  // Suggestions state (always local)
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Pieces Memory state
  const [piecesAvailable, setPiecesAvailable] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [memorySuggestions, setMemorySuggestions] = useState<PiecesSnippet[]>([]);
  const [showMemory, setShowMemory] = useState(false);
  const [autoContext, setAutoContext] = useState<string>('');
  const [isSearchingMemory, setIsSearchingMemory] = useState(false);

  // Check Pieces availability
  useEffect(() => {
    piecesClient.isAvailable().then(setPiecesAvailable);
  }, []);

  // Auto-Context Recall (LTM)
  useEffect(() => {
    if (!piecesAvailable || symptomText.length < 15) {
      if (autoContext) setAutoContext('');
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingMemory(true);
      try {
        const context = await piecesClient.getRelevantContext(symptomText, patientRM);
        setAutoContext(context);
      } catch (e) {
        console.warn('[Pieces] Auto-recall failed:', e);
      } finally {
        setIsSearchingMemory(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [symptomText, piecesAvailable, patientRM]);

  // Allergy options
  const allergyOptions = ['Obat', 'Makanan', 'Udara Dingin', 'Debu', 'Tidak Ada'];

  const toggleAllergy = (allergy: string) => {
    if (allergy === 'Tidak Ada') {
      // If "Tidak Ada" selected, clear all others
      setAllergies(['Tidak Ada']);
    } else {
      // If other selected, remove "Tidak Ada" and toggle
      setAllergies((prev) => {
        const filtered = prev.filter((a) => a !== 'Tidak Ada');
        if (filtered.includes(allergy)) {
          return filtered.filter((a) => a !== allergy);
        }
        return [...filtered, allergy];
      });
    }
  };

  // TTV Presets with realistic variation
  const generateTTVValues = useCallback((preset: AutosenPreset) => {
    const randomInRange = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    switch (preset) {
      case 'normal':
        return {
          sbp: randomInRange(110, 125).toString(),
          dbp: randomInRange(70, 82).toString(),
          hr: randomInRange(72, 88).toString(),
          rr: randomInRange(16, 20).toString(),
          temp: (36 + Math.random() * 0.6).toFixed(1),
          glucose: randomInRange(85, 110).toString(),
        };

      case 'ht':
        // Hypertension Urgency preset (SBP 180-219)
        return {
          sbp: randomInRange(180, 210).toString(),
          dbp: randomInRange(105, 120).toString(),
          hr: randomInRange(85, 100).toString(),
          rr: randomInRange(18, 24).toString(),
          temp: (36.2 + Math.random() * 0.5).toFixed(1),
          glucose: randomInRange(100, 140).toString(),
        };

      case 'hypo':
        // Hypoglycemia preset (< 70 mg/dL)
        return {
          sbp: randomInRange(90, 110).toString(),
          dbp: randomInRange(55, 70).toString(),
          hr: randomInRange(90, 110).toString(), // Tachycardia from hypoglycemia
          rr: randomInRange(18, 24).toString(),
          temp: (36 + Math.random() * 0.4).toFixed(1),
          glucose: randomInRange(40, 65).toString(), // Critical hypoglycemia
        };

      case 'hyper':
        // Hyperglycemia preset (> 200 mg/dL)
        return {
          sbp: randomInRange(125, 145).toString(),
          dbp: randomInRange(80, 92).toString(),
          hr: randomInRange(85, 100).toString(),
          rr: randomInRange(18, 22).toString(),
          temp: (36.5 + Math.random() * 0.5).toFixed(1),
          glucose: randomInRange(250, 450).toString(), // Significant hyperglycemia
        };

      default:
        return {
          sbp: randomInRange(110, 125).toString(),
          dbp: randomInRange(70, 82).toString(),
          hr: randomInRange(72, 88).toString(),
          rr: randomInRange(16, 20).toString(),
          temp: (36 + Math.random() * 0.6).toFixed(1),
          glucose: randomInRange(85, 110).toString(),
        };
    }
  }, []);

  // AutoSen handler - auto-fill TTV values with sequential animation
  const handleAutoSen = useCallback(() => {
    if (isAutoFilling) return; // Prevent double-click

    const values = generateTTVValues(autosenPreset);
    console.log(
      '[TTVInferenceUI] AutoSen clicked, preset:',
      autosenPreset,
      'values:',
      values,
      'isLifted:',
      isLifted
    );
    setIsAutoFilling(true);

    // For lifted state: batch update all values at once to avoid stale closure issues
    if (isLifted && onTTVStateChange && ttvState) {
      console.log('[TTVInferenceUI] Using batch update for lifted state');
      // Animate fields visually first
      const fieldKeys = ['sbp', 'dbp', 'glucose', 'hr', 'rr', 'temp'];
      const shuffled = [...fieldKeys].sort(() => Math.random() - 0.5);

      shuffled.forEach((key, index) => {
        setTimeout(() => {
          setAnimatingField(key);
          setTimeout(() => setAnimatingField(null), 150);
        }, index * 80);
      });

      // Batch update all values after animation starts
      setTimeout(() => {
        const newState = {
          ...ttvState,
          sbp: values.sbp,
          dbp: values.dbp,
          hr: values.hr,
          rr: values.rr,
          temp: values.temp,
          glucose: values.glucose,
        };
        console.log('[TTVInferenceUI] Batch updating state to:', newState);
        onTTVStateChange(newState);
        setIsAutoFilling(false);
      }, 100);

      return;
    }

    // Local state: sequential fill with animation (original behavior)
    const fields = [
      { key: 'sbp', setter: setLocalSBP, value: values.sbp },
      { key: 'dbp', setter: setLocalDBP, value: values.dbp },
      { key: 'glucose', setter: setLocalGlucose, value: values.glucose },
      { key: 'hr', setter: setLocalHR, value: values.hr },
      { key: 'rr', setter: setLocalRR, value: values.rr },
      { key: 'temp', setter: setLocalTemp, value: values.temp },
    ];

    const shuffled = [...fields].sort(() => Math.random() - 0.5);

    shuffled.forEach((field, index) => {
      setTimeout(() => {
        setAnimatingField(field.key);
        field.setter(field.value);

        setTimeout(() => setAnimatingField(null), 150);

        if (index === shuffled.length - 1) {
          setTimeout(() => setIsAutoFilling(false), 200);
        }
      }, index * 120);
    });
  }, [autosenPreset, generateTTVValues, isAutoFilling, isLifted, ttvState, onTTVStateChange]);

  // AI Narrative State
  const [narrative, setNarrative] = useState({
    keluhan_utama: '',
    lama_sakit: '',
    is_akut: true,
    confidence: 0,
  });

  // Real-time narrative generation
  useEffect(() => {
    if (symptomText.trim()) {
      const generated = generateNarrative(symptomText, {
        includeAssociatedSymptoms: true,
        context: autoContext,
      });
      setNarrative(generated);
    } else {
      setNarrative({
        keluhan_utama: '',
        lama_sakit: '',
        is_akut: true,
        confidence: 0,
      });
    }
  }, [symptomText, autoContext]);

  // ==========================================================================
  // SCREENING GATES - Integrated Clinical Decision Workflow
  // Uses: htn-classifier.ts, glucose-classifier.ts, occult-shock-detector.ts
  // ==========================================================================
  useEffect(() => {
    const alerts: ScreeningAlert[] = [];
    const sbpNum = parseInt(sbp) || 0;
    const dbpNum = parseInt(dbp) || 0;
    const glucoseNum = parseInt(glucose) || 0;
    const hrNum = parseInt(hr) || 0;
    const rrNum = parseInt(rr) || 0;
    const tempNum = parseFloat(temp) || 0;

    // Debug logging
    console.log('[TTVInferenceUI] Alert check triggered:', {
      sbp: sbpNum,
      dbp: dbpNum,
      glucose: glucoseNum,
      isLifted,
    });

    // CRITICAL: Check for HTN Crisis even if only SBP is entered
    // SBP ≥180 alone is dangerous and requires immediate attention
    if (sbpNum >= BP_THRESHOLDS.CRISIS.sbp) {
      const map = dbpNum > 0 ? calculateMAP(sbpNum, dbpNum) : Math.round(sbpNum / 3);
      const effectiveDbp = dbpNum > 0 ? dbpNum : 80; // Default DBP for reasoning if not entered
      const bp = { sbp: sbpNum, dbp: effectiveDbp };
      const htnType = sbpNum >= 220 ? 'HTN_EMERGENCY' : 'HTN_URGENCY';

      alerts.push({
        id: 'gate2-htn-crisis-sbp-only',
        gate: 'GATE_2_HTN',
        type: sbpNum >= 220 ? 'ht_crisis' : 'ht_urgency',
        severity: sbpNum >= 220 ? 'critical' : 'high',
        title: sbpNum >= 220 ? 'HTN EMERGENCY — RUJUK IGD' : 'HTN URGENCY — CAPTOPRIL SL (IGD)',
        reasoning:
          dbpNum > 0
            ? getHTNReasoning(htnType, bp)
            : `SBP ${sbpNum} mmHg ≥${BP_THRESHOLDS.CRISIS.sbp} (crisis-level). Lengkapi DBP untuk assessment lengkap.`,
        recommendations:
          dbpNum > 0
            ? getHTNRecommendations(htnType, bp)
            : sbpNum >= 220
              ? getHTNRecommendations('HTN_EMERGENCY', bp)
              : [
                  'Lengkapi DBP untuk rekomendasi akurat',
                  '━━━ SEMENTARA ━━━',
                  '1. Captopril 12.5 mg SL — NOW',
                  '2. Monitor TD q15 menit',
                  '3. Lengkapi input DBP untuk guardrails',
                ],
        clinicalData: { map },
      });
    }

    // Skip further processing if no complete vital signs
    if (!sbpNum || !dbpNum) {
      if (onAlertsChange) onAlertsChange(alerts);
      return;
    }

    // ========================================================================
    // STEP 1: Run Integrated TTV Workflow (Priority Router)
    // Priority: Hypoglycemia > Occult Shock > HTN Crisis > Hyperglycemia
    // ========================================================================
    const clinicalDecision: ClinicalDecision = integratedTTVWorkflow({
      glucose: glucoseNum || undefined,
      bp: { sbp: sbpNum, dbp: dbpNum },
      known_htn: false, // TODO: Get from patient history
      has_acute_symptoms: false, // TODO: Get from anamnesa
      has_crisis_signs: false, // TODO: Get from symptoms
      bp_history: [], // TODO: Get from storage
    });

    // ========================================================================
    // STEP 2: Process based on routed gate
    // ========================================================================

    // ========================================================================
    // GATE 3: METABOLIC & NEURO (ISPAD Guidelines + GCS Scale)
    // Fokus: Penyelamatan neuron dan regulasi glukosa
    // Referensi: ISPAD Clinical Practice Consensus Guidelines
    // ========================================================================
    if (glucoseNum > 0) {
      const glucoseData: GlucoseData = {
        gds: glucoseNum,
        sample_type: 'capillary',
        has_classic_symptoms: false,
      };
      const glucoseResult: GlucoseClassification = classifyBloodGlucose(glucoseData);

      // DEBUG: Log glucose decision path
      console.log('[GATE 3] Glucose Decision:', {
        glucoseNum,
        category: glucoseResult.category,
        isHypo: glucoseNum < 70,
        isHyperCrisis: glucoseNum >= 400,
        isHyperSignificant: glucoseNum >= 200,
        isHyperModerate: glucoseNum >= 140,
      });

      // CRITICAL: Hypoglycemia (< 70 mg/dL) - ISPAD Rule of 15
      if (glucoseResult.category === 'HYPOGLYCEMIA_CRISIS' || glucoseNum < 70) {
        const isSevere = glucoseNum < 54;
        alerts.push({
          id: 'gate3-hypoglycemia',
          gate: 'GATE_3_GLUCOSE',
          type: 'hypoglycemia',
          severity: 'critical',
          title: isSevere ? 'HIPOGLIKEMIA BERAT — ISPAD PROTOCOL' : 'HIPOGLIKEMIA — RULE OF 15',
          reasoning: `GDS ${glucoseNum} mg/dL ${isSevere ? '<54 (BERAT)' : '<70'}. Ref: ISPAD Clinical Practice Guidelines.`,
          recommendations: isSevere
            ? [
                '━━━ SEVERE HYPOGLYCEMIA ━━━',
                'JIKA PASIEN TIDAK SADAR/KEJANG:',
                '1. Bolus D40% 25ml IV (= 10g glukosa)',
                '   ATAU Glucagon 1mg IM/SC',
                '2. Jangan berikan apapun per oral!',
                '3. Posisi recovery, jaga airway',
                '━━━ SETELAH SADAR ━━━',
                '4. Berikan 15g karbohidrat oral',
                '5. Recheck GDS 15 menit',
                '━━━ MONITORING ━━━',
                'Observasi min 1 jam setelah normoglikemia',
                'Cari penyebab: insulin error, missed meal',
              ]
            : [
                '━━━ RULE OF 15 (ISPAD) ━━━',
                '1. Berikan 15g karbohidrat cepat serap:',
                '   - 3-4 tablet glukosa (15g), ATAU',
                '   - 150 mL jus buah, ATAU',
                '   - 1 sdm madu/gula pasir',
                '2. TUNGGU 15 MENIT',
                '3. Re-check GDS',
                '━━━ JIKA MASIH <70 ━━━',
                '4. ULANGI 15g karbohidrat (max 3x)',
                '━━━ SETELAH GDS >70 ━━━',
                '5. Berikan snack/makanan ringan',
                '━━━ INVESTIGASI ━━━',
                'Penyebab: dosis insulin/OAD, missed meal, exercise',
              ],
        });
      }
      // CRITICAL: Extreme Hyperglycemia (≥ 400 mg/dL) - ISPAD DKA/HHS Protocol
      else if (glucoseNum >= 400) {
        alerts.push({
          id: 'gate3-hyperglycemia-crisis',
          gate: 'GATE_3_GLUCOSE',
          type: 'hyperglycemia',
          severity: 'critical',
          title: 'KRISIS HIPERGLIKEMIA — ISPAD DKA/HHS PROTOCOL',
          reasoning: `GDS ${glucoseNum} mg/dL ≥400. Suspect DKA/HHS. Ref: ISPAD Guidelines.`,
          recommendations: [
            '━━━ PENTING: REHIDRASI DULU! ━━━',
            '⚠️ REHIDRASI SEBELUM INSULIN untuk cegah kolaps vaskular',
            '',
            '━━━ STEP 1: FLUID RESUSCITATION ━━━',
            '1. IV access (2 jalur large-bore)',
            '2. NaCl 0.9% 10-20 ml/kg dalam 1 jam pertama',
            '3. Lanjutkan maintenance sesuai dehidrasi',
            '',
            '━━━ STEP 2: EVALUASI KAD ━━━',
            'Cek keton darah/urin — RISIKO KAD tinggi',
            'Tanyakan: napas Kussmaul, bau aseton, mual/muntah',
            '',
            '━━━ STEP 3: INSULIN (SETELAH REHIDRASI) ━━━',
            'Insulin drip 0.05-0.1 unit/kg/jam',
            'Target penurunan GDS: 50-100 mg/dL/jam',
            '',
            '━━━ LABS ━━━',
            'VBG/ABG, elektrolit, BUN/Cr, osmolalitas',
            '',
            '━━━ RUJUK IGD/ICU ━━━',
          ],
        });
      }
      // HIGH: Significant Hyperglycemia (≥ 200 mg/dL)
      else if (glucoseNum >= 200) {
        alerts.push({
          id: 'gate3-hyperglycemia',
          gate: 'GATE_3_GLUCOSE',
          type: 'hyperglycemia',
          severity: 'high',
          title: 'HIPERGLIKEMIA SIGNIFIKAN',
          reasoning: `GDS ${glucoseNum} mg/dL ≥200 (threshold DM dengan gejala). Ref: PERKENI 2024.`,
          recommendations: [
            '━━━ EVALUASI SEGERA ━━━',
            '1. Tanyakan gejala klasik 3P:',
            '   - Poliuria (sering BAK)',
            '   - Polidipsia (sering haus)',
            '   - Polifagia + BB turun',
            '2. Periksa tanda dehidrasi',
            '3. Periksa status mental',
            '━━━ JIKA 3P (+) ━━━',
            'DM dapat ditegakkan → mulai terapi',
            '━━━ JIKA ASIMPTOMATIK ━━━',
            'Konfirmasi: GDP atau HbA1c',
            '━━━ WASPADA DETERIORASI ━━━',
            'Monitor tanda DKA/HHS',
          ],
        });
      }
      // WARNING: Elevated Glucose (140-199 mg/dL)
      else if (glucoseNum >= 140) {
        alerts.push({
          id: 'gate3-elevated-glucose',
          gate: 'GATE_3_GLUCOSE',
          type: 'hyperglycemia',
          severity: 'warning',
          title: 'GULA DARAH MENINGKAT',
          reasoning: `GDS ${glucoseNum} mg/dL (140-199) = Elevated. Evaluasi prediabetes/DM.`,
          recommendations: [
            '━━━ FOLLOW-UP TESTING ━━━',
            '1. GDP (Gula Darah Puasa)',
            '2. ATAU HbA1c',
            '3. ATAU TTGO',
            '━━━ LIFESTYLE ━━━',
            'Diet rendah GI',
            'Olahraga 150 menit/minggu',
            'Kontrol berat badan',
          ],
        });
      }
    }

    // GATE 4: Occult Shock Detection (MSF Guidelines)
    if (clinicalDecision.gate === 'GATE_4_OCCULT_SHOCK') {
      const shockResult: OccultShockResult = detectOccultShock({
        vitals: {
          current_sbp: sbpNum,
          current_dbp: dbpNum,
          glucose: glucoseNum || undefined,
        },
        last_3_visits: [], // TODO: Get from patient history
        symptoms: {
          dizziness: false,
          presyncope: false,
          syncope: false,
          weakness: false,
        },
        known_htn: false,
      });

      if (shockResult.risk_level === 'CRITICAL' || shockResult.risk_level === 'HIGH') {
        alerts.push({
          id: 'gate4-occult-shock',
          gate: 'GATE_4_OCCULT_SHOCK',
          type: 'occult_shock',
          severity: shockResult.risk_level === 'CRITICAL' ? 'critical' : 'high',
          title: 'OCCULT SHOCK — INVESTIGASI',
          reasoning: shockResult.triggers.join('; '),
          recommendations: shockResult.recommendations,
          clinicalData: {
            map: shockResult.map,
            delta_sbp: shockResult.delta_sbp,
            baseline_bp: shockResult.baseline_bp,
          },
        });
      }
    }

    // ========================================================================
    // GATE 2: HEMODYNAMICS & SHOCK (Surviving Sepsis Campaign + FKTP 2024)
    // Fokus: Mempertahankan perfusi organ vital
    // Referensi: SCCM Surviving Sepsis Campaign International Guidelines
    // ========================================================================
    const hasEarlyHTNAlert = alerts.some((a) => a.id === 'gate2-htn-crisis-sbp-only');
    const map = calculateMAP(sbpNum, dbpNum);
    const shockIndex = hrNum > 0 ? hrNum / sbpNum : 0;

    if (
      !hasEarlyHTNAlert &&
      (sbpNum >= BP_THRESHOLDS.CRISIS.sbp || dbpNum >= BP_THRESHOLDS.CRISIS.dbp)
    ) {
      // Create BP session for classification
      const bpSession: BPMeasurementSession = {
        readings: [{ sbp: sbpNum, dbp: dbpNum }],
        final_bp: { sbp: sbpNum, dbp: dbpNum },
        measurement_quality: 'acceptable',
      };

      const htnResult: HTNClassification = classifyHypertension(bpSession);

      // CRITICAL: HTN Emergency (SBP ≥220 atau DBP ≥120) - Surviving Sepsis
      if (htnResult.type === 'HTN_EMERGENCY' || sbpNum >= 220 || dbpNum >= 120) {
        alerts.push({
          id: 'gate2-htn-emergency',
          gate: 'GATE_2_HTN',
          type: 'ht_crisis',
          severity: 'critical',
          title: 'HTN EMERGENCY — SURVIVING SEPSIS PROTOCOL',
          reasoning: `TD ${sbpNum}/${dbpNum} mmHg (MAP ${map}). Ref: SCCM Surviving Sepsis Campaign.`,
          recommendations: [
            '━━━ IMMEDIATE ACTION ━━━',
            '1. IV Access (2 jalur jika possible)',
            '2. Nicardipine drip 5 mg/jam (titrasi 2.5 mg/jam q15mnt)',
            '   ATAU Labetalol IV 20mg bolus',
            '━━━ GOAL ━━━',
            'Turunkan MAP MAKSIMAL 25% dalam 1 JAM PERTAMA',
            '→ Mencegah stroke iskemik',
            '━━━ MONITORING ━━━',
            'TD kontinyu q5-10 menit',
            'Neuro check: GCS, pupil, motorik',
            '━━━ RUJUK IGD ━━━',
            'SEGERA setelah stabilisasi awal',
          ],
          clinicalData: { map },
        });
      } else if (htnResult.type === 'HTN_URGENCY') {
        alerts.push({
          id: 'gate2-htn-urgency',
          gate: 'GATE_2_HTN',
          type: 'ht_urgency',
          severity: 'high',
          title: 'HTN URGENCY — CAPTOPRIL SL',
          reasoning: htnResult.reasoning,
          recommendations: htnResult.recommendations,
          clinicalData: { map },
        });
      }
    } else if (!hasEarlyHTNAlert) {
      // Standard HTN classification for non-crisis
      const severity = getHTNSeverity({ sbp: sbpNum, dbp: dbpNum });

      if (severity === 'stage2') {
        alerts.push({
          id: 'gate2-htn-stage2',
          gate: 'GATE_2_HTN',
          type: 'ht_urgency',
          severity: 'high',
          title: 'HIPERTENSI STAGE 2',
          reasoning: `TD ${sbpNum}/${dbpNum} mmHg (MAP ${map}) - Stage 2 Hypertension (≥160/100). Ref: FKTP 2024.`,
          recommendations: [
            '━━━ EVALUASI ━━━',
            '1. Tanyakan gejala target organ damage:',
            '   - Nyeri dada, sesak napas (jantung)',
            '   - Sakit kepala hebat, pandangan kabur (otak/mata)',
            '   - Edema tungkai (ginjal)',
            '━━━ TATALAKSANA ━━━',
            '2. Mulai/optimasi dual therapy:',
            '   - CCB (Amlodipine 5-10mg) + ACEi/ARB',
            '   - ATAU CCB + Diuretik',
            '3. Target TD <140/90 dalam 3 bulan',
            '━━━ FOLLOW-UP ━━━',
            'Kontrol 2-4 minggu',
          ],
          clinicalData: { map },
        });
      } else if (severity === 'stage1') {
        // NEW: HTN Stage 1 alert (140-159/90-99)
        alerts.push({
          id: 'gate2-htn-stage1',
          gate: 'GATE_2_HTN',
          type: 'ht_elevated',
          severity: 'warning',
          title: 'HIPERTENSI STAGE 1',
          reasoning: `TD ${sbpNum}/${dbpNum} mmHg (MAP ${map}) - Stage 1 Hypertension (140-159/90-99). Ref: FKTP 2024.`,
          recommendations: [
            '━━━ EVALUASI RISIKO KARDIOVASKULAR ━━━',
            '1. Hitung risiko: usia, DM, dislipidemia, merokok, obesitas',
            '2. Periksa: GDP, profil lipid, kreatinin, urinalisis',
            '━━━ TATALAKSANA ━━━',
            'Jika RISIKO RENDAH:',
            '- Modifikasi gaya hidup 3-6 bulan',
            '- Diet DASH, kurangi garam <5g/hari',
            '- Olahraga 150 menit/minggu',
            'Jika RISIKO TINGGI atau target organ damage:',
            '- Mulai monoterapi: CCB atau ACEi/ARB',
            '━━━ FOLLOW-UP ━━━',
            'Kontrol 1 bulan',
          ],
          clinicalData: { map },
        });
      }
    }

    // HIGH: Shock Index > 0.9 (Surviving Sepsis)
    if (shockIndex > 0.9 && hrNum > 0) {
      alerts.push({
        id: 'gate2-shock-index',
        gate: 'GATE_2_HTN',
        type: 'shock',
        severity: shockIndex > 1.2 ? 'critical' : 'high',
        title: shockIndex > 1.2 ? 'SHOCK INDEX KRITIS' : 'SHOCK INDEX ELEVATED',
        reasoning: `Shock Index = HR/SBP = ${hrNum}/${sbpNum} = ${shockIndex.toFixed(2)} (>0.9 = abnormal, >1.2 = critical). Ref: Surviving Sepsis.`,
        recommendations: [
          '━━━ FLUID CHALLENGE ━━━',
          '1. Bolus cepat 250-500ml Kristaloid (NaCl 0.9% atau RL)',
          '2. Evaluasi respons: TD, HR, urine output',
          '━━━ POSITIONING ━━━',
          'Passive Leg Raise (PLR):',
          '- Elevasi kaki 30-45 derajat',
          '- Autotransfusi darah ke jantung',
          '- Evaluasi TD dalam 1-2 menit',
          '━━━ INVESTIGASI ━━━',
          'Cari penyebab: perdarahan, sepsis, dehidrasi, anafilaksis',
          '━━━ JIKA TIDAK RESPONS ━━━',
          'RUJUK IGD — pertimbangkan vasopressor',
        ],
        clinicalData: { map, shockIndex },
      });
    }

    // ========================================================================
    // GATE 5: CARDIAC RHYTHM (ACLS 2025 Advanced Protocol)
    // Fokus: Stabilisasi kelistrikan jantung
    // Referensi: AHA 2025 Update on ACLS Cardiac Arrest & Arrhythmia
    // ========================================================================

    if (hrNum > 0) {
      // CRITICAL: Severe Bradycardia (HR <45) - ACLS Protocol
      if (hrNum < 45) {
        alerts.push({
          id: 'gate5-critical-bradycardia',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'critical',
          title: 'BRADIKARDIA KRITIS — ACLS PROTOCOL',
          reasoning: `Nadi ${hrNum} x/mnt <45 = Bradikardia kritis. RISIKO cardiac arrest. Ref: AHA ACLS 2025.`,
          recommendations: [
            '━━━ IMMEDIATE ACTION (ACLS) ━━━',
            '1. Atropine 1 mg IV (max 3 mg total)',
            '2. Jika gagal respons → Transcutaneous Pacing (TCP)',
            '3. Alternatif: Dopamine drip 5-20 mcg/kg/min',
            '━━━ MONITORING ━━━',
            'EKG continuous — identifikasi tipe blok',
            'Monitor hemodinamik ketat',
            '━━━ RUJUK IGD ━━━',
            'Siapkan transfer jika tidak respons Atropine',
          ],
        });
      } else if (hrNum < 50) {
        alerts.push({
          id: 'gate5-bradycardia',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'high',
          title: 'BRADIKARDIA — EVALUASI ACLS',
          reasoning: `Nadi ${hrNum} x/mnt <50 = Bradikardia. Evaluasi penyebab dan tanda instabilitas.`,
          recommendations: [
            '━━━ EVALUASI ━━━',
            '1. Cek tanda instabilitas: hipotensi, penurunan kesadaran, nyeri dada',
            '2. EKG 12-Lead → cari AV block',
            '3. Review obat: beta-blocker, CCB, digoxin',
            '━━━ JIKA SIMPTOMATIK ━━━',
            'Atropine 0.5-1 mg IV',
            'Persiapan pacing jika tidak respons',
          ],
        });
      }
      // CRITICAL: Severe Tachycardia (HR >140) - ACLS Protocol
      else if (hrNum > 140) {
        alerts.push({
          id: 'gate5-critical-tachycardia',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'critical',
          title: 'TAKIKARDIA KRITIS — ACLS PROTOCOL',
          reasoning: `Nadi ${hrNum} x/mnt >140 = Takikardia kritis. Evaluasi stabilitas hemodinamik segera. Ref: AHA ACLS 2025.`,
          recommendations: [
            '━━━ HEMODINAMIK TIDAK STABIL ━━━',
            'Synchronized Cardioversion SEGERA',
            '━━━ HEMODINAMIK STABIL ━━━',
            '1. EKG 12-Lead → identifikasi ritme',
            '2. Jika SVT: Vagal maneuver (Valsava/carotid massage)',
            '3. Jika vagal gagal: Adenosine 6mg rapid IV push',
            '━━━ VELOCITY ACTION ━━━',
            'Trend naik >20bpm → Skrining: hipovolemia, nyeri hebat, emboli paru',
          ],
        });
      } else if (hrNum > 120) {
        alerts.push({
          id: 'gate5-tachycardia-high',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'high',
          title: 'TAKIKARDIA SIGNIFIKAN',
          reasoning: `Nadi ${hrNum} x/mnt >120 = Takikardia signifikan. Evaluasi penyebab dan stabilitas.`,
          recommendations: [
            '━━━ EVALUASI SEGERA ━━━',
            '1. Cek hemodinamik (TD, perfusi perifer)',
            '2. EKG 12-Lead → identifikasi ritme (sinus vs SVT vs VT)',
            '3. Cari penyebab: demam, dehidrasi, nyeri, anemia, sepsis',
            '━━━ TATALAKSANA ━━━',
            'Koreksi penyebab dasar (rehidrasi, antipiretik)',
            'Jika SVT stabil: Vagal maneuver',
          ],
        });
      } else if (hrNum > 100) {
        alerts.push({
          id: 'gate5-tachycardia-warning',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'warning',
          title: 'TAKIKARDIA',
          reasoning: `Nadi ${hrNum} x/mnt (>100) = Takikardia ringan. Evaluasi penyebab.`,
          recommendations: [
            'Evaluasi penyebab: aktivitas, kecemasan, demam, dehidrasi',
            'Pertimbangkan EKG jika menetap',
            'Koreksi faktor pencetus',
          ],
        });
      }
    }

    // ========================================================================
    // GATE 6: RESPIRATORY & OXYGENATION (AHA/ERC Guidelines)
    // Fokus: Mencegah Respiratory Arrest
    // Referensi: AHA ACLS Airway Management Standards
    // ========================================================================
    if (rrNum > 0) {
      // CRITICAL: Severe Bradypnea (RR <10) - Risk of Respiratory Arrest
      if (rrNum < 10) {
        alerts.push({
          id: 'gate6-critical-bradypnea',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'critical',
          title: 'BRADIPNEA KRITIS — AIRWAY EMERGENCY',
          reasoning: `RR ${rrNum} x/mnt <10 = RISIKO RESPIRATORY ARREST. Ref: AHA/ERC Airway Guidelines.`,
          recommendations: [
            '━━━ AIRWAY (A) ━━━',
            'Buka jalan napas: Head tilt-chin lift atau Jaw thrust',
            'Suction orofaring jika ada sekret',
            'Cek obstruksi: benda asing/lidah jatuh',
            '━━━ BREATHING (B) ━━━',
            'Oksigenasi agresif via NRM 15 Lpm',
            'Mulai Bag-Valve-Mask (BVM): 1 napas tiap 6 detik',
            '━━━ VELOCITY ACTION ━━━',
            'Siapkan Intubation Kit',
            '━━━ JIKA OVERDOSIS OPIOID ━━━',
            'Naloxone 0.4-2 mg IV/IM/IN',
          ],
        });
      }
      // CRITICAL: Severe Tachypnea (RR >30) - Respiratory Distress
      else if (rrNum > 30) {
        alerts.push({
          id: 'gate6-critical-tachypnea',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'critical',
          title: 'TAKIPNEA KRITIS — RESPIRATORY DISTRESS',
          reasoning: `RR ${rrNum} x/mnt >30 = Respiratory distress berat. RISIKO gagal napas. Ref: AHA/ERC.`,
          recommendations: [
            '━━━ IMMEDIATE ACTION ━━━',
            '1. Oksigenasi: NRM 15 Lpm, target SpO2 ≥94%',
            '2. Posisi Fowler/Semi-Fowler',
            '3. Suction jika ada sekret berlebih',
            '━━━ EVALUASI ━━━',
            'Auskultasi bilateral — wheezing/ronki/silent chest?',
            'Cari tanda distress: retraksi, napas cuping, sianosis',
            '━━━ VELOCITY ACTION (SpO2 drop >3%/5mnt) ━━━',
            'Siapkan Intubation Kit',
            'RUJUK IGD segera',
          ],
        });
      } else if (rrNum > 28) {
        alerts.push({
          id: 'gate6-tachypnea-high',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'high',
          title: 'TAKIPNEA BERAT',
          reasoning: `RR ${rrNum} x/mnt >28 = Takipnea berat. Evaluasi distress respirasi.`,
          recommendations: [
            '━━━ EVALUASI SEGERA ━━━',
            '1. Pulse oximetry — target SpO2 ≥94%',
            '2. Auskultasi paru bilateral',
            '3. Cari tanda distress: retraksi, napas cuping',
            '━━━ TATALAKSANA ━━━',
            'O2 via nasal cannula/simple mask',
            'Pertimbangkan AGD jika available',
            'Rujuk jika tidak membaik',
          ],
        });
      } else if (rrNum > 24) {
        alerts.push({
          id: 'gate6-tachypnea-warning',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'warning',
          title: 'TAKIPNEA',
          reasoning: `RR ${rrNum} x/mnt (>24) = Takipnea. Evaluasi penyebab.`,
          recommendations: [
            'Evaluasi penyebab: demam, nyeri, kecemasan, gangguan paru',
            'Cek saturasi oksigen',
            'Auskultasi paru',
          ],
        });
      }
    }

    // ========================================================================
    // GATE 7: THERMOREGULATION (IDSA Standards)
    // Fokus: Mencegah denaturasi protein dan multi-organ failure
    // Referensi: IDSA Sepsis Management Standards
    // ========================================================================
    if (tempNum > 0) {
      // CRITICAL: Hyperpyrexia (≥40°C) - Risk of Organ Damage
      if (tempNum >= 40) {
        alerts.push({
          id: 'gate7-critical-hyperpyrexia',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'critical',
          title: 'HIPERPIREKSIA — EMERGENSI (IDSA)',
          reasoning: `Suhu ${tempNum}°C ≥40°C = RISIKO denaturasi protein & multi-organ failure. Ref: IDSA Sepsis Guidelines.`,
          recommendations: [
            '━━━ ACTIVE COOLING ━━━',
            '1. Kompres dingin di AKSILA dan INGUINAL',
            '2. Kipas angin / evaporative cooling',
            '3. Paracetamol IV 1g (jika available) atau PO 1g',
            '━━━ SEPSIS WORKUP ━━━',
            'Kultur darah (jika kecurigaan infeksi)',
            'Cek Laktat (jika available)',
            'Cari fokus infeksi',
            '━━━ JIKA HEAT STROKE ━━━',
            'Rapid cooling PRIORITAS UTAMA',
            'IV fluid resuscitation NaCl 0.9%',
            'RUJUK IGD',
          ],
        });
      } else if (tempNum >= 39) {
        alerts.push({
          id: 'gate7-high-fever',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'high',
          title: 'DEMAM TINGGI',
          reasoning: `Suhu ${tempNum}°C (39-39.9°C) = Demam tinggi. Perlu antipiretik dan evaluasi fokus infeksi.`,
          recommendations: [
            '━━━ TATALAKSANA ━━━',
            '1. Antipiretik: Paracetamol 500-1000 mg',
            '2. Hidrasi adekuat',
            '3. Kompres hangat',
            '━━━ EVALUASI ━━━',
            'Cari fokus infeksi (paru, urin, kulit, telinga)',
            'Anamnesis: onset, durasi, gejala penyerta',
          ],
        });
      } else if (tempNum >= 38) {
        alerts.push({
          id: 'gate7-fever',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'warning',
          title: 'DEMAM',
          reasoning: `Suhu ${tempNum}°C (38-38.9°C) = Demam. Evaluasi penyebab infeksi.`,
          recommendations: [
            'Evaluasi penyebab demam',
            'Antipiretik sesuai indikasi',
            'Hidrasi adekuat',
          ],
        });
      }
      // HIGH: Hypothermia (<35°C) - IDSA Sepsis Red Flag
      else if (tempNum < 35) {
        alerts.push({
          id: 'gate7-hypothermia',
          gate: 'STANDARD_WORKFLOW',
          type: 'declining',
          severity: 'high',
          title: 'HIPOTERMIA — SEPSIS RED FLAG (IDSA)',
          reasoning: `Suhu ${tempNum}°C <35°C = Hipotermia. PERHATIAN: Hipotermia + infeksi = SEPSIS. Ref: IDSA.`,
          recommendations: [
            '━━━ ACTIVE WARMING ━━━',
            '1. Selimut penghangat (Forced-air warming jika ada)',
            '2. Infus cairan yang sudah dihangatkan (Fluid warmer)',
            '3. Ruangan hangat',
            '━━━ SEPSIS ALERT ━━━',
            'Hipotermia + tanda infeksi = CURIGA SEPSIS BERAT',
            'Cek tanda infeksi: batuk, nyeri BAK, luka',
            '━━━ EVALUASI ━━━',
            'Cari penyebab: lingkungan, hipotiroid, metabolik',
            'Monitor hemodinamik',
          ],
        });
      }
    }

    // Notify parent of alerts change (for Emergency tab blinking)
    console.log(
      '[TTVInferenceUI] Generated alerts:',
      alerts.map((a) => ({ id: a.id, type: a.type, severity: a.severity }))
    );
    setCurrentAlerts(alerts);
    if (onAlertsChange) {
      onAlertsChange(alerts);
    }
  }, [sbp, dbp, glucose, hr, rr, temp, onAlertsChange]);

  // Autocomplete suggestions
  const handleSymptomChange = useCallback((value: string) => {
    setSymptomText(value);

    // Get last word for suggestions
    const words = value.split(/[,;\n]/);
    const lastWord = words[words.length - 1].trim();

    if (lastWord.length >= 2) {
      const newSuggestions = getSuggestions(lastWord);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    const words = symptomText.split(/[,;\n]/);
    words[words.length - 1] = suggestion;
    const newText = words.join(', ');
    setSymptomText(newText + ', ');
    setShowSuggestions(false);
  };

  const handleSaveToPieces = async () => {
    if (!narrative.keluhan_utama) return;

    setSaveStatus('saving');
    try {
      await piecesClient.saveClinicalSnippet({
        title: `Clinical Insight: ${patientName} (${patientRM})`,
        content: narrative.keluhan_utama,
        classification: 'markdown',
        tags: ['clinical-insight', patientRM, narrative.is_akut ? 'akut' : 'kronik'],
      });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('[TTVInferenceUI] Failed to save to Pieces:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const handleRecallMemory = async () => {
    setShowMemory(!showMemory);
    if (!showMemory && symptomText.length > 2) {
      const response = await piecesClient.searchClinicalMemory(symptomText);
      setMemorySuggestions(response.snippets);
    }
  };

  // Store screening alerts for Clinical Trajectory
  const [, setCurrentAlerts] = useState<ScreeningAlert[]>([]);

  // Uplink status state
  const [uplinkStatus, setUplinkStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );
  const [, setUplinkError] = useState<string | null>(null);

  // Scramble text state for UPLINK button animation
  const [scrambleText, setScrambleText] = useState('UPLINK SENTRA NETWORK');

  // Text scramble effect based on uplink status
  useEffect(() => {
    if (uplinkStatus === 'sending') {
      // Start scramble animation
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
      const targetText = 'SYNCHRONIZING...';
      let frame = 0;

      const interval = setInterval(() => {
        setScrambleText(
          targetText
            .split('')
            .map((char, i) =>
              frame > i * 2 ? char : chars[Math.floor(Math.random() * chars.length)]
            )
            .join('')
        );
        frame++;
        if (frame > targetText.length * 2 + 10) {
          // Keep scrambling after target is revealed
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    } else if (uplinkStatus === 'success') {
      setScrambleText('Sentra-EPUS Synchronized');
    } else if (uplinkStatus === 'error') {
      setScrambleText('SYNC FAILED');
    } else {
      setScrambleText('UPLINK SENTRA NETWORK');
    }
  }, [uplinkStatus]);

  // Medical history state (detected from ePuskesmas page)
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistoryItem[]>([]);

  // Scan medical history on mount with retry
  useEffect(() => {
    console.log('[TTVInferenceUI] useEffect for medical history scan STARTED');

    type ScanHistoryResult = {
      success: boolean;
      history?: MedicalHistoryItem[];
    };

    const scanHistory = async (attempt: number = 1): Promise<void> => {
      console.log(`[TTVInferenceUI] scanHistory called, attempt ${attempt}`);

      const chromeGlobal = (globalThis as unknown as { chrome?: typeof chrome }).chrome;

      // Method 1: Try direct tabs.sendMessage to ePuskesmas tab
      try {
        console.log('[TTVInferenceUI] Method 1: Trying chrome.tabs.query...');
        const tabs = await chromeGlobal?.tabs?.query({ url: '*://*.epuskesmas.id/*' });
        console.log('[TTVInferenceUI] Found tabs:', tabs?.length);

        if (tabs && tabs.length > 0 && tabs[0].id) {
          console.log('[TTVInferenceUI] Sending to tab:', tabs[0].id, tabs[0].url);
          const result = (await chromeGlobal?.tabs?.sendMessage(tabs[0].id, {
            type: 'scanMedicalHistory',
          })) as ScanHistoryResult;
          console.log('[TTVInferenceUI] Direct tab result:', result);

          if (result?.success && result.history && result.history.length > 0) {
            console.log('[TTVInferenceUI] ✓ Medical history detected:', result.history);
            setMedicalHistory(result.history);
            return;
          }
        }
      } catch (e) {
        console.warn('[TTVInferenceUI] Method 1 failed:', e);
      }

      // Method 2: Fallback to runtime.sendMessage (via background)
      try {
        console.log('[TTVInferenceUI] Method 2: Trying runtime.sendMessage...');
        const result = await sendNativeMessage<ScanHistoryResult>('scanMedicalHistory', undefined);
        console.log('[TTVInferenceUI] Runtime result:', result);

        if (result?.success && result.history && result.history.length > 0) {
          console.log('[TTVInferenceUI] ✓ Medical history detected:', result.history);
          setMedicalHistory(result.history);
          return;
        }
      } catch (e) {
        console.warn('[TTVInferenceUI] Method 2 failed:', e);
      }

      // Retry if no history found
      if (attempt < 3) {
        console.log('[TTVInferenceUI] No history found, retrying in 1.5s...');
        setTimeout(() => scanHistory(attempt + 1), 1500);
      } else {
        console.log('[TTVInferenceUI] All attempts exhausted, no medical history found');
      }
    };

    // Initial delay to allow page to fully load
    console.log('[TTVInferenceUI] Setting timer for 800ms...');
    const timer = setTimeout(() => {
      console.log('[TTVInferenceUI] Timer fired, calling scanHistory');
      scanHistory(1);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = async () => {
    const resolvedPregnancyStatus = patientGender === 'L' ? false : pregnancyStatus;

    // Build TTVInferenceData for callback
    const data: TTVInferenceData = {
      vital_signs: {
        sbp: parseInt(sbp),
        dbp: parseInt(dbp),
        hr: parseInt(hr),
        rr: parseInt(rr),
        temp: parseFloat(temp),
      },
      anamnesa: {
        keluhan_utama: narrative.keluhan_utama,
        lama_sakit: narrative.lama_sakit,
        is_akut: narrative.is_akut,
      },
      is_pregnant: resolvedPregnancyStatus,
      pregnancyStatus: resolvedPregnancyStatus,
    };

    // Build AnamnesaFillPayload for content script
    // Random perawat selection
    const perawatOptions = ['JOSEP ARIANTO, A.Md', 'DIAN SUNARDI'];
    const randomPerawat = perawatOptions[Math.floor(Math.random() * perawatOptions.length)];

    // Generate keluhan utama singkat dari symptomText
    const keluhanParts = symptomText.split(/[,;]/);
    const keluhanUtamaSingkat = keluhanParts[0]?.trim() || symptomText.substring(0, 50);

    // Generate keluhan tambahan lengkap (min 3 baris)
    const keluhanTambahanLengkap =
      `${narrative.keluhan_utama}\n` +
      `Keluhan dirasakan sejak ${narrative.lama_sakit}.\n` +
      `Gejala yang dialami: ${symptomText}.\n` +
      `${narrative.is_akut ? 'Kondisi bersifat akut.' : 'Kondisi bersifat kronik.'}`;

    // Generate random alergi yang masuk akal
    const generateRandomAlergi = () => {
      const alergiObat = ['Penisilin', 'Amoxicillin', 'Sulfa', 'NSAID', 'Aspirin'];
      const alergiMakanan = ['Seafood', 'Kacang', 'Telur', 'Susu', 'Gluten'];
      const alergiUdara = ['Debu', 'Dingin', 'Asap rokok', 'Serbuk sari'];

      const hasObat = allergies.includes('Obat');
      const hasMakanan = allergies.includes('Makanan');
      const hasUdara = allergies.includes('Udara Dingin') || allergies.includes('Debu');

      return {
        obat: hasObat ? [alergiObat[Math.floor(Math.random() * alergiObat.length)]] : [],
        makanan: hasMakanan
          ? [alergiMakanan[Math.floor(Math.random() * alergiMakanan.length)]]
          : [],
        udara: hasUdara ? [alergiUdara[Math.floor(Math.random() * alergiUdara.length)]] : [],
        lainnya: [],
      };
    };

    // Generate riwayat penyakit berdasarkan kondisi
    const generateRiwayatPenyakit = () => {
      const sbpNum = parseInt(sbp) || 0;
      const glucoseNum = parseInt(glucose) || 0;

      let sekarang = `Pasien datang dengan keluhan ${keluhanUtamaSingkat}. `;
      sekarang += `TD: ${sbp}/${dbp} mmHg, Nadi: ${hr} x/mnt, RR: ${rr} x/mnt, Suhu: ${temp}°C.`;
      if (glucoseNum > 0) sekarang += ` GDS: ${glucose} mg/dL.`;

      let dahulu = 'Tidak ada riwayat penyakit serius sebelumnya.';
      if (sbpNum >= 140) dahulu = 'Riwayat hipertensi (+), kontrol rutin di Puskesmas.';
      if (glucoseNum >= 140) dahulu = 'Riwayat DM (+), dalam pengobatan OAD.';
      if (sbpNum >= 140 && glucoseNum >= 140)
        dahulu = 'Riwayat hipertensi dan DM (+), kontrol rutin.';

      const keluarga = 'Tidak ada riwayat penyakit keturunan yang signifikan dalam keluarga.';

      return { sekarang, dahulu, keluarga };
    };

    // Generate Periksa Fisik (GCS, Anthropometrics, SpO2, Activity)
    const generatePeriksaFisik = () => {
      const randomInRange = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

      // Indonesian anthropometric averages based on gender
      // Male: Height 165-172cm, Weight 58-72kg, Waist 78-92cm
      // Female: Height 153-160cm, Weight 48-62kg, Waist 68-82cm
      const isMale = patientGender === 'L';
      const tinggi = isMale ? randomInRange(165, 172) : randomInRange(153, 160);
      const berat = isMale ? randomInRange(58, 72) : randomInRange(48, 62);
      const lingkarPerut = isMale ? randomInRange(78, 92) : randomInRange(68, 82);

      // Calculate IMT (BMI)
      const heightM = tinggi / 100;
      const imt = berat / (heightM * heightM);

      // Interpret IMT (Asian criteria - WHO Western Pacific)
      let hasilImt: 'Kurus' | 'Normal' | 'BB Lebih' | 'Obesitas I' | 'Obesitas II' = 'Normal';
      if (imt < 18.5) hasilImt = 'Kurus';
      else if (imt < 23) hasilImt = 'Normal';
      else if (imt < 25) hasilImt = 'BB Lebih';
      else if (imt < 30) hasilImt = 'Obesitas I';
      else hasilImt = 'Obesitas II';

      // SpO2 - Normal range 95-100%
      const saturasi = randomInRange(96, 99);

      // Assessment Fungsional text
      const aktifitasFisikText =
        'Aktivitas fisik pasien dalam batas normal. ' +
        'Pasien mampu mobilisasi mandiri tanpa alat bantu. ' +
        'ADL (Activities of Daily Living) mandiri. ' +
        'Tidak ada keterbatasan fungsi motorik atau sensorik.';

      return {
        // GCS Normal (E4V5M6 = 15)
        gcs_membuka_mata: '4' as const, // Spontan
        gcs_respon_verbal: '5' as const, // Orientasi baik
        gcs_respon_motorik: '6' as const, // Mampu bergerak
        // Anthropometrics
        tinggi,
        berat,
        lingkar_perut: lingkarPerut,
        imt,
        hasil_imt: hasilImt,
        // SpO2
        saturasi,
        // Activity - All Mandiri (0)
        mobilisasi: '0' as const,
        toileting: '0' as const,
        makan_minum: '0' as const,
        mandi: '0' as const,
        berpakaian: '0' as const,
        // Assessment text
        aktifitas_fisik: aktifitasFisikText,
      };
    };

    // Generate Resiko Jatuh based on symptoms
    const generateResikoJatuh = () => {
      const symptoms = symptomText.toLowerCase();
      // Check for fall-risk symptoms: pusing, lemas, sempoyongan, jatuh, vertigo, syncope
      const fallRiskSymptoms = [
        'pusing',
        'lemas',
        'sempoyongan',
        'jatuh',
        'vertigo',
        'pingsan',
        'limbung',
        'oleng',
        'tidak seimbang',
      ];
      const hasFallRisk = fallRiskSymptoms.some((s) => symptoms.includes(s));

      return {
        cara_berjalan: hasFallRisk ? ('1' as const) : ('0' as const), // 1=Ya (sempoyongan), 0=Tidak
        penopang: hasFallRisk ? ('1' as const) : ('0' as const), // 1=Ya (butuh penopang), 0=Tidak
      };
    };

    // Generate Keadaan Fisik based on symptoms (symptom-dependent physical examination)
    const generateKeadaanFisik = () => {
      const symptoms = symptomText.toLowerCase();
      type KeadaanFisikResult = NonNullable<AnamnesaFillPayload['keadaan_fisik']>;
      const result: KeadaanFisikResult = {};

      // Mapping symptom keywords to body areas
      const symptomMap: { keywords: string[]; area: keyof KeadaanFisikResult }[] = [
        {
          keywords: [
            'kepala',
            'pusing',
            'nyeri kepala',
            'sakit kepala',
            'cephalgia',
            'migrain',
            'vertigo',
          ],
          area: 'kepala',
        },
        {
          keywords: ['mata', 'penglihatan', 'buram', 'kabur', 'merah', 'gatal mata'],
          area: 'mata',
        },
        {
          keywords: ['telinga', 'pendengaran', 'berdengung', 'tinnitus', 'nyeri telinga'],
          area: 'telinga',
        },
        {
          keywords: ['hidung', 'pilek', 'bersin', 'sinus', 'mimisan', 'tersumbat'],
          area: 'hidung_sinus',
        },
        {
          keywords: ['mulut', 'tenggorokan', 'sakit tenggorok', 'sulit menelan', 'sariawan'],
          area: 'mulut_bibir',
        },
        { keywords: ['leher', 'kaku kuduk', 'benjolan leher', 'tiroid', 'gondok'], area: 'leher' },
        {
          keywords: ['dada', 'sesak', 'batuk', 'napas', 'paru', 'bronkitis', 'pneumonia', 'asma'],
          area: 'dada_punggung',
        },
        {
          keywords: ['jantung', 'debar', 'berdebar', 'palpitasi', 'nyeri dada'],
          area: 'kardiovaskuler',
        },
        {
          keywords: [
            'perut',
            'mual',
            'muntah',
            'diare',
            'nyeri perut',
            'kembung',
            'maag',
            'gastritis',
            'konstipasi',
          ],
          area: 'abdomen_perut',
        },
        { keywords: ['tangan', 'lengan', 'bahu', 'siku', 'pergelangan'], area: 'ekstremitas_atas' },
        {
          keywords: ['kaki', 'lutut', 'paha', 'betis', 'pergelangan kaki', 'bengkak kaki'],
          area: 'ekstremitas_bawah',
        },
        {
          keywords: ['kulit', 'gatal', 'ruam', 'kemerahan', 'alergi kulit', 'eksim', 'urtikaria'],
          area: 'kulit',
        },
      ];

      // Normal findings templates (best practice clinical documentation)
      const normalFindings = {
        kulit: {
          inspeksi:
            'Kulit berwarna sawo matang, tidak ikterik, tidak sianosis. Tidak ada lesi primer (makula, papula, vesikel) atau sekunder. Tidak ada petekie atau ekimosis.',
          palpasi: 'Turgor kulit baik (<2 detik). Kulit terasa hangat dan lembab. Tidak ada edema.',
        },
        kuku: {
          inspeksi:
            'Kuku jari tangan dan kaki berbentuk normal, tidak ada clubbing. Tidak ada paronychia atau onychomycosis. Capillary refill <2 detik.',
          palpasi: 'Tidak ada nyeri tekan pada nail bed. Tidak ada splinter hemorrhage.',
        },
        kepala: {
          inspeksi:
            'Normocephali, simetris, tidak ada deformitas. Rambut terdistribusi merata, tidak ada alopesia. Kulit kepala bersih, tidak ada lesi, tidak ada tanda trauma.',
          palpasi:
            'Tidak teraba massa atau benjolan. Tidak ada nyeri tekan. Fontanel (jika bayi) datar. Sutura tidak melebar.',
        },
        wajah: {
          inspeksi:
            'Wajah simetris, tidak ada paresis N. VII. Tidak ada edema periorbital atau facial. Ekspresi wajah normal.',
          palpasi:
            'Tidak ada nyeri tekan sinus. Tidak teraba massa atau pembengkakan. Sensibilitas N. V baik.',
        },
        mata: {
          inspeksi:
            'Konjungtiva tidak anemis, sklera tidak ikterik. Pupil isokor, diameter 3mm, refleks cahaya (+/+). Gerakan bola mata baik ke segala arah. Tidak ada ptosis atau nistagmus.',
        },
        telinga: {
          inspeksi:
            'Aurikula simetris bilateral, tidak ada deformitas. Liang telinga bersih, membran timpani intak, refleks cahaya (+). Tidak ada sekret atau serumen impaksi.',
          palpasi:
            'Tidak ada nyeri tekan tragus dan mastoid. Tidak ada pembesaran kelenjar preaurikular.',
        },
        hidung_sinus: {
          inspeksi:
            'Hidung simetris, tidak ada deviasi septum. Mukosa tidak hiperemis, tidak ada sekret. Konka tidak hipertrofi. Tidak ada polip.',
          palpasi_perkusi:
            'Tidak ada nyeri tekan pada area sinus frontalis dan maksilaris. Perkusi sinus tidak nyeri.',
        },
        mulut_bibir: {
          inspeksi_luar:
            'Bibir tidak sianosis, tidak kering. Mukosa mulut lembab, warna pink. Tidak ada angular cheilitis atau herpes labialis.',
          inspeksi_dalam:
            'Gigi geligi dalam kondisi baik, tidak ada karies. Lidah tidak kotor, tidak ada stomatitis. Tonsil T1/T1, tidak hiperemis. Faring tidak hiperemis.',
        },
        leher: {
          inspeksi:
            'Leher simetris, tidak ada massa atau benjolan yang terlihat. Trakea di tengah. JVP tidak meningkat (5+2 cmH2O).',
          auskultasi_karotis:
            'Bruit karotis tidak terdengar bilateral. Pulsasi arteri karotis teraba kuat dan simetris.',
          palpasi_tiroid:
            'Kelenjar tiroid tidak teraba membesar. Tidak ada nodul. Kelenjar limfe servikal tidak teraba.',
          auskultasi_bising: 'Tidak terdengar bruit pada pembuluh darah leher.',
        },
        dada_punggung: {
          inspeksi:
            'Bentuk dada simetris, normochest. Pergerakan dinding dada simetris. Tidak ada retraksi interkostal. RR 18x/menit, reguler.',
          palpasi:
            'Fremitus taktil simetris bilateral. Tidak ada nyeri tekan. Ekspansi dada simetris.',
          perkusi:
            'Sonor di seluruh lapang paru. Batas paru-hepar di ICS VI linea midklavikularis dekstra.',
          auskultasi:
            'Suara napas vesikuler di kedua lapang paru. Tidak ada ronkhi, wheezing, atau stridor.',
        },
        kardiovaskuler: {
          inspeksi: 'Iktus kordis tidak tampak. Tidak ada pulsasi abnormal pada prekordium.',
          palpasi:
            'Iktus kordis teraba di ICS V linea midklavikularis sinistra, tidak kuat angkat. Tidak ada thrill.',
          perkusi:
            'Batas jantung kanan di ICS IV linea parasternalis dekstra. Batas jantung kiri di ICS V linea midklavikularis sinistra.',
          auskultasi:
            'Bunyi jantung I-II reguler, tidak ada murmur, gallop, atau bunyi tambahan. HR 80x/menit.',
        },
        abdomen_perut: {
          inspeksi:
            'Abdomen datar, supel. Tidak ada distensi, tidak ada massa yang terlihat. Tidak ada sikatriks atau striae.',
          auskultasi: 'Bising usus (+) normal 12x/menit. Tidak ada bruit aorta atau renal.',
          perkusi_kuadran: 'Timpani di seluruh kuadran abdomen.',
          perkusi_hepar:
            'Batas hepar dalam batas normal, span 8cm di linea midklavikularis dekstra.',
          perkusi_limfa: 'Traube space timpani. Limpa tidak membesar.',
          perkusi_ginjal: 'Nyeri ketok CVA (-/-) bilateral.',
          palpasi_kuadran:
            'Abdomen supel, tidak ada nyeri tekan, tidak ada defans muskular. Hepar dan lien tidak teraba. Tidak ada massa.',
        },
        ekstremitas_atas: {
          inspeksi:
            'Simetris bilateral, tidak ada deformitas. Tidak ada edema, sianosis, atau clubbing finger. ROM aktif penuh.',
          palpasi:
            'Akral hangat, CRT <2 detik. Pulsasi arteri radialis dan brachialis teraba kuat bilateral. Tidak ada nyeri tekan.',
        },
        ekstremitas_bawah: {
          inspeksi:
            'Simetris bilateral, tidak ada deformitas. Tidak ada edema, varises, atau ulkus. ROM aktif penuh.',
          palpasi:
            'Akral hangat, CRT <2 detik. Pulsasi arteri dorsalis pedis dan tibialis posterior teraba kuat bilateral. Tidak ada pitting edema.',
        },
        dada_aksila: {
          inspeksi_dada:
            'Bentuk mammae simetris bilateral. Tidak ada retraksi atau dimpling. Papilla mammae normal, tidak ada discharge.',
          palpasi_dada:
            "Tidak teraba massa atau benjolan. Tidak ada nyeri tekan. Tidak ada penebalan kulit (peau d'orange).",
          inspeksi_palpasi_aksila:
            'Tidak tampak pembengkakan aksila. Tidak teraba pembesaran kelenjar limfe aksila bilateral.',
        },
      };

      // Check each symptom group and assign findings directly
      for (const group of symptomMap) {
        const hasSymptom = group.keywords.some((k) => symptoms.includes(k));
        if (hasSymptom) {
          const area = group.area;
          // Direct assignment using switch to avoid union type issues
          switch (area) {
            case 'kepala':
              result.kepala = normalFindings.kepala;
              break;
            case 'mata':
              result.mata = normalFindings.mata;
              break;
            case 'telinga':
              result.telinga = normalFindings.telinga;
              break;
            case 'hidung_sinus':
              result.hidung_sinus = normalFindings.hidung_sinus;
              break;
            case 'mulut_bibir':
              result.mulut_bibir = normalFindings.mulut_bibir;
              break;
            case 'leher':
              result.leher = normalFindings.leher;
              break;
            case 'dada_punggung':
              result.dada_punggung = normalFindings.dada_punggung;
              break;
            case 'kardiovaskuler':
              result.kardiovaskuler = normalFindings.kardiovaskuler;
              break;
            case 'abdomen_perut':
              result.abdomen_perut = normalFindings.abdomen_perut;
              break;
            case 'ekstremitas_atas':
              result.ekstremitas_atas = normalFindings.ekstremitas_atas;
              break;
            case 'ekstremitas_bawah':
              result.ekstremitas_bawah = normalFindings.ekstremitas_bawah;
              break;
            case 'kulit':
              result.kulit = normalFindings.kulit;
              break;
          }
        }
      }

      // If no specific symptoms matched, return minimal general examination
      if (Object.keys(result).length === 0) {
        result.kepala = normalFindings.kepala;
        result.dada_punggung = normalFindings.dada_punggung;
        result.abdomen_perut = normalFindings.abdomen_perut;
        result.ekstremitas_atas = normalFindings.ekstremitas_atas;
        result.ekstremitas_bawah = normalFindings.ekstremitas_bawah;
      }

      return result;
    };

    // Generate Lainnya section based on symptoms (therapy recommendations)
    const generateLainnya = (): NonNullable<AnamnesaFillPayload['lainnya']> => {
      const symptoms = symptomText.toLowerCase();

      // Context-aware therapy based on symptoms
      let terapi = 'Simptomatik sesuai keluhan';
      let terapiNonObat =
        'Istirahat cukup, minum air putih minimal 2 liter/hari, pola makan teratur';
      let edukasi =
        'Edukasi pola hidup sehat, makan bergizi seimbang, olahraga teratur 30 menit/hari, tidur cukup 7-8 jam/hari';
      const bmhp = 'Sarung tangan, masker, kapas alkohol';

      // Symptom-specific therapy recommendations
      if (symptoms.includes('demam') || symptoms.includes('panas')) {
        terapi = 'Paracetamol 500mg 3x1 tab (bila demam >38°C), kompres hangat';
        terapiNonObat =
          'Istirahat total, banyak minum air putih 2-3 liter/hari, kompres hangat di dahi dan ketiak';
        edukasi =
          'Edukasi demam: minum obat penurun panas sesuai dosis, kompres hangat (bukan dingin), segera ke faskes bila demam >3 hari atau disertai kejang';
      } else if (
        symptoms.includes('batuk') ||
        symptoms.includes('pilek') ||
        symptoms.includes('flu')
      ) {
        terapi =
          'Ambroxol 30mg 3x1 tab, Pseudoephedrine 60mg 3x1 tab (bila hidung tersumbat), Paracetamol 500mg 3x1 tab (bila demam)';
        terapiNonObat =
          'Istirahat cukup, minum air hangat, hindari minuman dingin dan es, kumur air garam hangat';
        edukasi =
          'Edukasi ISPA: tutup mulut saat batuk/bersin, gunakan masker, cuci tangan rutin, hindari kontak dekat dengan orang lain';
      } else if (
        symptoms.includes('pusing') ||
        symptoms.includes('sakit kepala') ||
        symptoms.includes('nyeri kepala')
      ) {
        terapi =
          'Paracetamol 500mg 3x1 tab, atau Ibuprofen 400mg 2x1 tab setelah makan (bila nyeri berat)';
        terapiNonObat =
          'Istirahat di ruangan gelap dan tenang, hindari layar gadget, pijat ringan pada pelipis, kompres dingin';
        edukasi =
          'Edukasi nyeri kepala: hindari trigger (stress, kurang tidur, terlalu lama di depan layar), makan teratur, tidur cukup 7-8 jam';
      } else if (symptoms.includes('mual') || symptoms.includes('muntah')) {
        terapi =
          'Domperidone 10mg 3x1 tab (sebelum makan), Ondansetron 4mg 2x1 tab (bila muntah berat)';
        terapiNonObat =
          'Makan sedikit tapi sering, hindari makanan berlemak/berminyak, minum air jahe hangat, hindari bau menyengat';
        edukasi =
          'Edukasi mual muntah: makan porsi kecil 5-6x/hari, hindari makanan pedas/asam/berlemak, jangan langsung berbaring setelah makan';
      } else if (symptoms.includes('diare') || symptoms.includes('mencret')) {
        terapi =
          'Oralit 200ml setiap BAB cair, Zinc 20mg 1x1 tab (10 hari), Attapulgite 2 tab tiap BAB (max 12 tab/hari)';
        terapiNonObat =
          'Minum banyak cairan (oralit, air putih, kuah sup), makan bubur/nasi lunak, hindari susu dan makanan berlemak';
        edukasi =
          'Edukasi diare: cuci tangan sebelum makan dan setelah BAB, masak makanan hingga matang, minum air masak, hindari jajanan pinggir jalan';
      } else if (
        symptoms.includes('maag') ||
        symptoms.includes('nyeri ulu hati') ||
        symptoms.includes('lambung')
      ) {
        terapi =
          'Antasida DOEN 3x1 tab (kunyah sebelum makan), Omeprazole 20mg 1x1 caps (pagi sebelum makan)';
        terapiNonObat =
          'Makan teratur 3x/hari, hindari telat makan, kunyah makanan perlahan, hindari makanan pedas/asam/kopi/alkohol';
        edukasi =
          'Edukasi gastritis: makan teratur jangan telat, hindari makanan pemicu (pedas, asam, kopi), kelola stress, jangan langsung tidur setelah makan';
      } else if (
        symptoms.includes('hipertensi') ||
        symptoms.includes('darah tinggi') ||
        symptoms.includes('tensi tinggi')
      ) {
        terapi =
          'Amlodipine 5mg 1x1 tab (pagi), atau Captopril 12.5mg 2x1 tab (bila disertai batuk dari ACE-i sebelumnya ganti ke ARB)';
        terapiNonObat =
          'Diet rendah garam (<5g/hari), kurangi makanan olahan/instan, olahraga aerobik 30 menit 5x/minggu, kelola stress';
        edukasi =
          'Edukasi hipertensi: minum obat teratur jangan putus, kontrol tekanan darah rutin, kurangi garam, hindari rokok dan alkohol, olahraga teratur';
      } else if (
        symptoms.includes('diabetes') ||
        symptoms.includes('gula darah') ||
        symptoms.includes('kencing manis')
      ) {
        terapi =
          'Metformin 500mg 2x1 tab (setelah makan), atau Glimepiride 2mg 1x1 tab (sebelum makan pagi) - sesuai kadar GDS';
        terapiNonObat =
          'Diet DM (karbohidrat kompleks, hindari gula sederhana), olahraga teratur 30 menit/hari, periksa kaki setiap hari';
        edukasi =
          'Edukasi DM: minum obat teratur, diet seimbang rendah gula, olahraga teratur, periksa kaki (cegah luka), kontrol GDS rutin';
      } else if (symptoms.includes('nyeri') || symptoms.includes('sakit')) {
        terapi =
          'Paracetamol 500mg 3x1 tab, atau Natrium Diklofenak 50mg 2x1 tab setelah makan (bila nyeri muskuloskeletal)';
        terapiNonObat =
          'Kompres hangat/dingin sesuai kondisi, istirahat cukup, hindari aktivitas berat yang memicu nyeri';
        edukasi =
          'Edukasi nyeri: minum obat sesuai dosis jangan berlebihan, segera ke faskes bila nyeri tidak membaik atau bertambah berat';
      }

      return {
        terapi,
        terapi_non_obat: terapiNonObat,
        bmhp,
        rencana_tindakan: 'Observasi, kontrol bila keluhan tidak membaik dalam 3 hari',
        merokok: '0' as const,
        konsumsi_alkohol: '0' as const,
        kurang_sayur_buah: '0' as const,
        edukasi,
        askep:
          'Asuhan keperawatan: monitoring tanda vital, pemberian obat sesuai resep, edukasi pasien dan keluarga',
        observasi: 'Observasi keluhan, monitoring tanda vital, evaluasi respon terapi',
        keterangan: 'Pasien kooperatif, KU baik, dapat rawat jalan',
        biopsikososial:
          'Pasien dalam kondisi stabil secara psikososial. Dukungan keluarga baik. Tidak ada tanda-tanda gangguan mood atau kecemasan berlebih.',
        tindakan_keperawatan:
          'Pengkajian keluhan utama, monitoring TTV, pemberian obat sesuai advice dokter, edukasi pasien dan keluarga tentang penyakit dan pengobatan.',
      };
    };

    // Generate Assesmen Nyeri - randomized scale 6-8 for realistic variation
    const generateAssesmenNyeri = (): NonNullable<AnamnesaFillPayload['assesmen_nyeri']> => {
      const symptoms = symptomText.toLowerCase();

      // Check for pain-related keywords
      const painKeywords = [
        'nyeri',
        'sakit',
        'pegal',
        'ngilu',
        'perih',
        'cenat-cenut',
        'kram',
        'pusing',
      ];
      const hasPain = painKeywords.some((k) => symptoms.includes(k));

      // Randomize pain scale 6-8 when pain present (per Chief's request)
      const skala = hasPain ? Math.floor(Math.random() * 3) + 6 : 0; // 6, 7, or 8

      return {
        merasakan_nyeri: hasPain ? ('1' as const) : ('0' as const),
        skala_nyeri: skala,
      };
    };

    const payload: AnamnesaFillPayload = {
      keluhan_utama: keluhanUtamaSingkat, // Singkat
      keluhan_tambahan: keluhanTambahanLengkap, // Lengkap min 3 baris
      lama_sakit: {
        thn: 0,
        bln: 0,
        hr: narrative.is_akut ? 3 : 30,
      },
      ...(typeof resolvedPregnancyStatus === 'boolean'
        ? { is_pregnant: resolvedPregnancyStatus }
        : {}),
      riwayat_penyakit: generateRiwayatPenyakit(),
      alergi: generateRandomAlergi(),
      vital_signs: {
        tekanan_darah_sistolik: parseInt(sbp) || 0,
        tekanan_darah_diastolik: parseInt(dbp) || 0,
        nadi: parseInt(hr) || 0,
        respirasi: parseInt(rr) || 0,
        suhu: parseFloat(temp) || 0,
        gula_darah: parseInt(glucose) || undefined,
        kesadaran: 'COMPOS MENTIS',
      },
      periksa_fisik: generatePeriksaFisik(), // GCS, Anthropometrics, SpO2, Activity
      resiko_jatuh: generateResikoJatuh(), // Fall Risk Assessment (Get Up and Go)
      assesmen_nyeri: generateAssesmenNyeri(), // Pain Assessment
      keadaan_fisik: generateKeadaanFisik(), // Physical Examination (symptom-dependent)
      lainnya: generateLainnya(), // Therapy recommendations, education, lifestyle
      status_psikososial: {
        alat_bantu_aktrifitas: '0', // Tidak
        kendala_komunikasi: '0', // Tidak
        merawat_dirumah: '1', // Ya
        membutuhkan_bantuan: '0', // Tidak
        bahasa_digunakan: 'indonesia',
        tinggal_dengan: 'suami/istri',
        sosial_ekonomi: 'cukup',
        gangguan_jiwa_dimasa_lalu: '0', // Tidak
        status_ekonomi: 'cukup',
        hubungan_keluarga: 'harmonis',
      },
      tenaga_medis: {
        dokter_nama: 'dr. FERDI ANDRISKA SH. MKN. C.LM',
        perawat_nama: randomPerawat,
      },
    };

    console.log('[TTVInferenceUI] Sending Uplink payload:', payload);
    setUplinkStatus('sending');
    setUplinkError(null);

    try {
      // DIAGNOSTIC: First scan all fields on the page
      console.log('[TTVInferenceUI] Scanning fields on ePuskesmas page...');
      const scanResult = await sendNativeMessage<ScanFieldsResult>('scanFields', undefined);
      console.log('[TTVInferenceUI] === FIELD SCAN RESULT ===');
      console.log('[TTVInferenceUI] Fields found:', scanResult?.fields?.length || 0);
      if (scanResult?.fields) {
        scanResult.fields.forEach((f: ScanFieldsResult['fields'][number], i: number) => {
          console.log(
            `[TTVInferenceUI] [${i}] ${f.tag}[name="${f.name}"][id="${f.id}"] type=${f.type} placeholder="${f.placeholder}"`
          );
        });
      }
      console.log('[TTVInferenceUI] === END SCAN ===');

      // Send to background → content script via native Chrome messaging
      const result = await sendNativeMessage<FillResult>('fillAnamnesa', payload);
      console.log('[TTVInferenceUI] Uplink result:', result);

      // Calculate dynamic delay based on actual fields filled
      // Each field: ~100ms inter-field delay + ~800ms highlight animation
      // The filler processes sequentially, so total ≈ fieldCount * 900ms
      const filledCount = (result?.success?.length || 0) + (result?.failed?.length || 0);
      const fillDelay = Math.max(3000, filledCount * 900 + 2000); // min 3s, +2s buffer
      console.log(`[TTVInferenceUI] Waiting ${fillDelay}ms for ${filledCount} field animations...`);

      // Keep 'sending' status active while RME fields are being filled
      await new Promise((resolve) => setTimeout(resolve, fillDelay));

      if (result && Array.isArray(result.success) && result.success.length > 0) {
        // RME filling complete — NOW show success + sound
        setUplinkStatus('success');
        playNotificationSound();
        setTimeout(() => {
          setUplinkStatus('idle');
        }, 2000);
      } else if (result && Array.isArray(result.failed) && result.failed.length > 0) {
        setUplinkStatus('error');
        setUplinkError(result.failed[0]?.error || 'Fill gagal');
        setTimeout(() => {
          setUplinkStatus('idle');
        }, 2000);
      } else {
        // No explicit success/failed arrays — treat as success
        setUplinkStatus('success');
        playNotificationSound();
        setTimeout(() => {
          setUplinkStatus('idle');
        }, 2000);
      }
    } catch (error) {
      console.error('[TTVInferenceUI] Uplink failed:', error);
      setUplinkStatus('error');
      setUplinkError(error instanceof Error ? error.message : 'Koneksi gagal');
      setTimeout(() => {
        setUplinkStatus('idle');
      }, 2000);
    }

    // Also call the original callback
    onComplete(data);
  };

  const isFormValid =
    sbp && dbp && hr && rr && temp && glucose && narrative.keluhan_utama.length > 0;

  // ========================================================================
  // INPUT (vitals + anamnesa + UPLINK)
  // ========================================================================
  return (
    <div className="ttv-inference-ui">
      {/* Patient Header */}
      <PatientHeader
        name={patientName}
        gender={patientGender}
        age={patientAge}
        rmNumber={patientRM}
        masked={showMaskedName}
        dob={patientDOB}
        bloodType={patientBloodType}
        bpjsStatus={patientBPJSStatus}
        kelurahan={patientKelurahan}
        medicalHistory={medicalHistory}
        onRefresh={onRefreshPatient}
        isLoading={isLoadingPatient}
        profileStatus={
          isLoadingPatient
            ? 'loading'
            : patientName &&
                patientName !== 'Memuat...' &&
                patientName !== 'Data tidak ditemukan' &&
                patientName !== 'Error memuat data'
              ? 'loaded'
              : 'idle'
        }
      />

      {/* Main Content: Two Columns */}
      <div className="ttv-content">
        {/* LEFT COLUMN: Vital Signs */}
        <div className="ttv-section glass-card">
          <div className="ttv-section-header">
            <h3 className="ttv-section-title">Vital Signs</h3>
            <div className="ttv-autosen-controls">
              <select
                value={autosenPreset}
                onChange={(e) => setAutosenPreset(e.target.value as AutosenPreset)}
                className="ttv-preset-select"
              >
                <option value="normal">Normal</option>
                <option value="ht">HT Crisis</option>
                <option value="hypo">Hypoglycemia</option>
                <option value="hyper">Hyperglycemia</option>
              </select>
              <button onClick={handleAutoSen} className="ttv-autosen-btn">
                AutoSen
              </button>
            </div>
          </div>

          <div className="ttv-vital-form">
            {/* Row 1: Blood Pressure + Glucose */}
            <div className="ttv-vital-row">
              <div className="ttv-form-group">
                <label
                  className={`ttv-label ${parseInt(sbp) >= 140 || parseInt(dbp) >= 90 ? 'ttv-label-alert' : ''}`}
                >
                  Tekanan Darah:
                </label>
                <div className="ttv-bp-input">
                  <input
                    type="number"
                    value={sbp}
                    onChange={(e) => setSBP(e.target.value)}
                    placeholder="---"
                    className={`ttv-input-small ${animatingField === 'sbp' ? 'ttv-input-flash' : ''}`}
                    min="50"
                    max="300"
                  />
                  <span className="ttv-separator">/</span>
                  <input
                    type="number"
                    value={dbp}
                    onChange={(e) => setDBP(e.target.value)}
                    placeholder="---"
                    className={`ttv-input-small ${animatingField === 'dbp' ? 'ttv-input-flash' : ''}`}
                    min="30"
                    max="200"
                  />
                  <span className="ttv-unit">mmHg</span>
                </div>
              </div>

              <div className="ttv-form-group">
                <label className={`ttv-label ${parseInt(glucose) >= 200 ? 'ttv-label-alert' : ''}`}>
                  Gula Darah:
                </label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={glucose}
                    onChange={(e) => setGlucose(e.target.value)}
                    placeholder="---"
                    className={`ttv-input ${animatingField === 'glucose' ? 'ttv-input-flash' : ''}`}
                    min="20"
                    max="600"
                  />
                  <span className="ttv-unit">mg/dL</span>
                </div>
              </div>
            </div>

            {/* Row 2: HR + RR + Temp */}
            <div className="ttv-vital-row ttv-vital-row-3">
              <div className="ttv-form-group">
                <label className="ttv-label">Nadi:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={hr}
                    onChange={(e) => setHR(e.target.value)}
                    placeholder="---"
                    className={`ttv-input ${animatingField === 'hr' ? 'ttv-input-flash' : ''}`}
                    min="40"
                    max="200"
                  />
                  <span className="ttv-unit">x/mnt</span>
                </div>
              </div>

              <div className="ttv-form-group">
                <label className="ttv-label">Pernapasan:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={rr}
                    onChange={(e) => setRR(e.target.value)}
                    placeholder="---"
                    className={`ttv-input ${animatingField === 'rr' ? 'ttv-input-flash' : ''}`}
                    min="8"
                    max="60"
                  />
                  <span className="ttv-unit">x/mnt</span>
                </div>
              </div>

              <div className="ttv-form-group">
                <label className="ttv-label">Suhu:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    placeholder="--.-"
                    className={`ttv-input ${animatingField === 'temp' ? 'ttv-input-flash' : ''}`}
                    min="35"
                    max="42"
                    step="0.1"
                  />
                  <span className="ttv-unit">°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* GUIDELINES BAR - Di bawah Vital Signs */}
          <div className="clinical-guidelines-bar glass-panel">
            <span className="guidelines-label">Guidelines:</span>
            <span className="protocol-badge">FKTP 2024 HTN</span>
            <span className="protocol-separator">·</span>
            <span className="protocol-badge">PERKENI 2024 Glucose</span>
            <span className="protocol-separator">·</span>
            <span className="protocol-badge">MSF Occult Shock</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Anamnesa + AI Narrative */}
        <div className="ttv-right-column">
          <div className="ttv-section glass-card">
            <h3 className="ttv-section-title">Anamnesa</h3>

            {/* Symptom Input */}
            <div className="ttv-symptom-input-container">
              <label className="ttv-label">Gejala / Keluhan:</label>
              <div className="ttv-autocomplete-wrapper">
                <div className="ttv-textarea-container">
                  <span className="ttv-prompt-indicator">&gt;</span>
                  <textarea
                    value={symptomText}
                    onChange={(e) => handleSymptomChange(e.target.value)}
                    placeholder="Pisahkan gejala dengan koma. Autocomplete akan muncul saat mengetik."
                    className="ttv-textarea"
                    rows={4}
                  />
                  {piecesAvailable && (
                    <button
                      onClick={handleRecallMemory}
                      className={`ttv-recall-btn ${showMemory ? 'active' : ''}`}
                      title="Recall from Pieces Clinical Memory"
                    >
                      <span className="recall-icon">↺</span>
                      Recall
                    </button>
                  )}
                </div>

                {/* Autocomplete Suggestions */}
                {showSuggestions && (
                  <div className="ttv-suggestions">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="ttv-suggestion-item"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}

                {/* Pieces Memory Suggestions */}
                {showMemory && (
                  <div className="ttv-memory-suggestions">
                    <div className="memory-header">Clinical Memory</div>
                    {memorySuggestions.length > 0 ? (
                      memorySuggestions.map((snippet, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSymptomText(symptomText + (symptomText ? ', ' : '') + snippet.title);
                            setShowMemory(false);
                          }}
                          className="ttv-memory-item"
                        >
                          <span className="memory-title">{snippet.title}</span>
                          <span className="memory-preview">
                            {snippet.content?.substring(0, 50)}...
                          </span>
                        </button>
                      ))
                    ) : (
                      <div className="memory-empty">
                        No clinical insights found for this context
                      </div>
                    )}
                  </div>
                )}
              </div>

              <p className="ttv-hint">
                Pisahkan gejala dengan koma. Autocomplete akan muncul saat mengetik.
              </p>
            </div>

            {/* Alergi Section - Moved inside Anamnesa */}
            <div className="ttv-allergy-inline">
              <span className="ttv-allergy-label">Alergi:</span>
              <div className="ttv-allergy-chips-inline">
                {allergyOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleAllergy(option)}
                    className={`ttv-allergy-chip-sm ${allergies.includes(option) ? 'ttv-allergy-chip-active' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="ttv-allergy-inline">
              <span className="ttv-allergy-label">Kehamilan:</span>
              <div className="ttv-allergy-chips-inline">
                {patientGender === 'L' ? (
                  <span className="ttv-allergy-chip-sm ttv-allergy-chip-active">Tidak Hamil (Locked)</span>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setPregnancyStatus(false)}
                      className={`ttv-allergy-chip-sm ${pregnancyStatus === false ? 'ttv-allergy-chip-active' : ''}`}
                    >
                      Tidak Hamil
                    </button>
                    <button
                      type="button"
                      onClick={() => setPregnancyStatus(true)}
                      className={`ttv-allergy-chip-sm ${pregnancyStatus === true ? 'ttv-allergy-chip-active' : ''}`}
                    >
                      Hamil
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* AI Generated Narrative */}
            {narrative.keluhan_utama && (
              <div className="ttv-ai-narrative glass-panel">
                <div className="ttv-ai-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 className="ttv-ai-title">Sentra Agent Narrative</h4>
                    {isSearchingMemory && (
                      <span className="ttv-memory-pulse" title="Searching Local Memory...">
                        <span className="pulse-dot"></span>
                        Auto-Recall...
                      </span>
                    )}
                  </div>
                  <div className="ttv-ai-badges">
                    <span className="ttv-ai-badge">{narrative.is_akut ? 'Akut' : 'Kronik'}</span>
                    {piecesAvailable && (
                      <button
                        onClick={handleSaveToPieces}
                        disabled={saveStatus === 'saving' || saveStatus === 'saved'}
                        className={`ttv-save-pieces-btn ${saveStatus}`}
                      >
                        {saveStatus === 'saving'
                          ? 'Saving...'
                          : saveStatus === 'saved'
                            ? 'Saved to Pieces'
                            : saveStatus === 'error'
                              ? 'Connection Error'
                              : 'Save to Pieces'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="ttv-ai-content">
                  <div className="ttv-ai-field">
                    <label>Keluhan Utama:</label>
                    <p>{narrative.keluhan_utama}</p>
                  </div>

                  <div className="ttv-ai-field">
                    <label>Lama Sakit:</label>
                    <p>{narrative.lama_sakit}</p>
                  </div>
                </div>

                <div className="ttv-ai-confidence">
                  <span className="ttv-confidence-label">Confidence:</span>
                  <div className="ttv-confidence-bar">
                    <div
                      className="ttv-confidence-fill"
                      style={{ width: `${narrative.confidence * 100}%` }}
                    />
                  </div>
                  <span className="ttv-confidence-value">
                    {Math.round(narrative.confidence * 100)}%
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Diagnosis Suggestions - ICD-10 (DISABLED per Chief request) */}
      {/* <div className="ttv-diagnosis-section">
        <DiagnosisSuggestions
          keluhanUtama={narrative.keluhan_utama || symptomText}
          keluhanTambahan=""
          patientAge={patientAge}
          patientGender={patientGender === 'L' ? 'M' : 'F'}
          onFillComplete={(result) => {
            console.log('[TTVInferenceUI] Diagnosis fill result:', result);
            if (result.success) {
              playNotificationSound();
            }
          }}
          isVisible={!!(narrative.keluhan_utama || symptomText)}
        />
      </div> */}

      {/* Action Button */}
      <div className="ttv-actions glass-panel-bottom">
        <button
          onClick={handleComplete}
          disabled={!isFormValid || uplinkStatus === 'sending'}
          className={`ttv-btn ttv-btn-primary ttv-btn-uplink ${uplinkStatus === 'success' ? 'uplink-success' : ''} ${uplinkStatus === 'error' ? 'uplink-error' : ''}`}
        >
          <span className={uplinkStatus === 'sending' ? 'text-scramble' : ''}>{scrambleText}</span>
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// STYLES
// ============================================================================

export const ttvInferenceUIStyles = `
.ttv-inference-ui {
  background: radial-gradient(circle at top left, #1a1c23 0%, #131519 100%);
  min-height: 100vh;
  width: 100%;
}

.ttv-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 16px;
}

.ttv-section {
  background: var(--glass-bg, rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
}

.ttv-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.ttv-autosen-controls {
  display: flex;
  gap: 6px;
  align-items: center;
}

.ttv-autosen-btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.ttv-autosen-btn:hover {
  background: var(--accent-hover);
}

.ttv-autosen-select {
  background: var(--surface-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.ttv-vital-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ttv-vital-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.ttv-vital-row:last-child {
  grid-template-columns: 1fr 1fr 1fr;
}

.ttv-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ttv-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ttv-bp-input {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ttv-input-with-unit {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 0 10px;
  transition: border-color 0.2s;
}

.ttv-input-with-unit:focus-within {
  border-color: var(--accent-primary);
}

.ttv-input {
  flex: 1;
  background: none;
  border: none;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  outline: none;
}

.ttv-input-small {
  width: 70px;
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s;
  text-align: center;
}

.ttv-input-small:focus {
  border-color: var(--accent-primary);
}

.ttv-separator {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-tertiary);
}

.ttv-unit {
  font-size: 11px;
  color: var(--text-tertiary);
  font-weight: 600;
}

.ttv-symptom-input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ttv-autocomplete-wrapper {
  position: relative;
}

.ttv-textarea {
  width: 100%;
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 12px;
  font-size: 13px;
  color: var(--text-primary);
  font-family: inherit;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
  min-height: 80px;
}

.ttv-textarea:focus {
  border-color: var(--accent-primary);
}

.ttv-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--surface-primary);
  border: 1px solid var(--accent-primary);
  border-radius: 4px;
  margin-top: 4px;
  max-height: 180px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.ttv-suggestion-item {
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  text-align: left;
  font-size: 12px;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-suggestion-item:last-child {
  border-bottom: none;
}

.ttv-suggestion-item:hover {
  background: var(--surface-hover);
}

.ttv-hint {
  font-size: 11px;
  color: var(--text-tertiary);
  margin: 0 0 16px 0;
  font-style: italic;
}

.ttv-ai-narrative {
  background: var(--glass-bg, rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(12px);
  border: 1px solid var(--accent-primary);
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}

.ttv-ai-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-ai-title {
  flex: 1;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ttv-ai-badge {
  background: var(--accent-primary);
  color: white;
  padding: 4px 10px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.ttv-ai-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ttv-ai-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ttv-ai-field label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ttv-ai-field p {
  font-size: 13px;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.6;
}

.ttv-ai-confidence {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--border-subtle);
}

.ttv-confidence-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.ttv-confidence-bar {
  flex: 1;
  height: 6px;
  background: var(--surface-tertiary);
  border-radius: 3px;
  overflow: hidden;
}

.ttv-confidence-fill {
  height: 100%;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.ttv-confidence-value {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-primary);
  min-width: 35px;
  text-align: right;
}

.ttv-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px 16px;
  position: sticky;
  bottom: 0;
  background: rgba(22, 24, 29, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  padding-top: 12px;
  margin-top: 8px;
  z-index: 100;
}

.ttv-btn {
  flex: 1;
  padding: 11px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  letter-spacing: 0.2px;
}

.ttv-btn-primary {
  background: var(--accent-primary);
  color: white;
}

.ttv-btn-primary:hover:not(:disabled) {
  background: var(--accent-hover);
}

.ttv-btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ttv-btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
}

.ttv-btn-secondary:hover {
  background: var(--surface-secondary);
}

/* UPLINK Button Styles */
.ttv-btn-uplink {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  font-size: 12px;
  background: linear-gradient(135deg, #EF4444 0%, #F97316 100%);
  border: 1px solid #F97316;
  box-shadow: none;
}

.ttv-btn-uplink:hover:not(:disabled) {
  background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%);
  box-shadow: 0 1px 3px rgba(239, 68, 68, 0.2);
}

.ttv-btn-uplink.uplink-success {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.ttv-btn-uplink.uplink-error {
  background: linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%);
}

/* Text Scramble - NO ANIMATION (professional for doctors) */
.text-scramble {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1.5px;
  /* NO animation, NO glow - clean and professional */
}

/* Progress Indicator - Inside ttv-actions, above button */
.uplink-progress-indicator {
  width: 100%;
  text-align: center;
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.5px;
}

.uplink-progress-indicator .progress-ready {
  color: var(--text-tertiary);
}

.uplink-progress-indicator .progress-sending {
  color: #F97316;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.uplink-progress-indicator .pulse-dot {
  width: 6px;
  height: 6px;
  background: #F97316;
  border-radius: 50%;
  animation: pulse-glow 1s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.uplink-progress-indicator .progress-success {
  color: #10B981;
  font-weight: 600;
}

.uplink-progress-indicator .progress-error {
  color: #EF4444;
}

/* Pieces Integration Styles */
.ttv-recall-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(0, 200, 255, 0.1);
  border: 1px solid rgba(0, 200, 255, 0.3);
  border-radius: 4px;
  color: #00c8ff;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  height: 24px;
}

.ttv-recall-btn:hover {
  background: rgba(0, 200, 255, 0.2);
  border-color: #00c8ff;
}

.ttv-recall-btn.active {
  background: #00c8ff;
  color: #000;
}

.recall-icon {
  font-size: 14px;
}

.ttv-save-pieces-btn {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-secondary);
}

.ttv-save-pieces-btn:hover {
  background: var(--surface-tertiary);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.ttv-save-pieces-btn.saving {
  opacity: 0.7;
  cursor: wait;
}

.ttv-save-pieces-btn.saved {
  background: #10B981;
  color: white;
  border-color: #10B981;
}

.ttv-save-pieces-btn.error {
  background: #EF4444;
  color: white;
  border-color: #EF4444;
}

.ttv-memory-suggestions {
  background: var(--surface-tertiary);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  margin-top: 10px;
  overflow: hidden;
  animation: fadeIn 0.2s ease-out;
}

.memory-header {
  padding: 6px 12px;
  background: rgba(0, 200, 255, 0.1);
  color: #00c8ff;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-memory-item {
  width: 100%;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: background 0.2s;
}

.ttv-memory-item:last-child {
  border-bottom: none;
}

.ttv-memory-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.memory-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
}

.memory-preview {
  font-size: 11px;
  color: var(--text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.memory-empty {
  padding: 16px;
  text-align: center;
  font-size: 12px;
  color: var(--text-tertiary);
  font-style: italic;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.ttv-memory-pulse {
  font-size: 10px;
  color: #00c8ff;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ttv-pulse 2s infinite ease-in-out;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #00c8ff;
  border-radius: 50%;
  box-shadow: 0 0 8px #00c8ff;
}

@keyframes ttv-pulse {
  0% { opacity: 0.3; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.3; transform: scale(0.95); }
}

/* Diagnosis Suggestions Section */
.ttv-diagnosis-section {
  padding: 0 16px;
}

/* Include DiagnosisSuggestions styles */
${diagnosisSuggestionsStyles}
`;
