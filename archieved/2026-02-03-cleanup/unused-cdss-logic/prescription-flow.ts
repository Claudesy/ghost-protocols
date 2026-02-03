/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Prescription Recommendation Flow Orchestrator
 * Coordinates AI medication recommendations based on diagnosis
 *
 * Flow:
 * 1. Get selected diagnosis (ICD-10 code)
 * 2. Build patient context (age, weight, allergies, chronic diseases, current meds)
 * 3. Send to Sentra AI via background worker
 * 4. Process safety checks and DDI
 * 5. Return formatted recommendations for UI
 * 6. Convert selected medications to ResepFillPayload
 *
 * @module lib/cdss/prescription-flow
 * @version 1.0.0
 */

import { sendMessage } from '@/utils/messaging';
import { getEncounter } from '@/utils/storage';
import type { Encounter, ResepMedication, AturanPakai } from '@/utils/types';
import type {
  CDSSResponse,
  MedicationRecommendation,
  PrescriptionRequestContext,
  CDSSAlert,
  DrugInteraction,
  APIResponse,
} from '@/types/api';

// =============================================================================
// TYPES
// =============================================================================

export interface PrescriptionFlowInput {
  /** ICD-10 code of selected diagnosis */
  icd_x: string;
  /** Diagnosis name */
  diagnosis_name?: string;
  /** Patient age in years */
  patient_age?: number;
  /** Patient weight in kg */
  patient_weight?: number;
  /** Patient gender */
  patient_gender?: 'M' | 'F';
  /** Known allergies */
  allergies?: string[];
  /** Chronic diseases */
  chronic_diseases?: string[];
  /** Current medications (for DDI check) */
  current_medications?: string[];
  /** Renal function (eGFR) for dose adjustment */
  renal_function?: number;
  /** Hepatic function status */
  hepatic_impairment?: boolean;
}

export interface PrescriptionFlowResult {
  success: boolean;
  recommendations: MedicationRecommendation[];
  alerts: CDSSAlert[];
  drug_interactions: DrugInteraction[];
  clinical_guidelines: string[];
  /** Source: 'ai' | 'local' | 'cache' */
  source: 'ai' | 'local' | 'cache';
  /** Processing time in ms */
  duration: number;
  /** Error message if failed */
  error?: string;
}

// =============================================================================
// CACHE
// =============================================================================

interface CacheEntry {
  key: string;
  result: PrescriptionFlowResult;
  timestamp: number;
}

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const prescriptionCache = new Map<string, CacheEntry>();

function generateCacheKey(context: PrescriptionRequestContext): string {
  const allergiesKey = context.alergi.sort().join(',');
  return `${context.icd_x}|${context.patient_age}|${allergiesKey}`.toLowerCase();
}

function getCachedResult(key: string): PrescriptionFlowResult | null {
  const entry = prescriptionCache.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    prescriptionCache.delete(key);
    return null;
  }

  return { ...entry.result, source: 'cache' };
}

function setCachedResult(key: string, result: PrescriptionFlowResult): void {
  prescriptionCache.set(key, {
    key,
    result,
    timestamp: Date.now(),
  });
}

// =============================================================================
// MAIN FLOW
// =============================================================================

/**
 * Execute prescription recommendation flow
 *
 * @param input - Diagnosis and patient context
 * @returns Medication recommendations with safety info
 *
 * @example
 * ```ts
 * const result = await executePrescriptionFlow({
 *   icd_x: 'J06.9',
 *   diagnosis_name: 'ISPA',
 *   patient_age: 45,
 *   allergies: ['Penicillin'],
 * });
 *
 * if (result.success) {
 *   // Display recommendations
 *   result.recommendations.forEach(med => {
 *     console.log(med.nama_obat, med.dosis);
 *   });
 * }
 * ```
 */
export async function executePrescriptionFlow(
  input: PrescriptionFlowInput
): Promise<PrescriptionFlowResult> {
  const startTime = Date.now();

  try {
    // Validate required field
    if (!input.icd_x || input.icd_x.trim() === '') {
      return {
        success: false,
        recommendations: [],
        alerts: [],
        drug_interactions: [],
        clinical_guidelines: [],
        source: 'local',
        duration: Date.now() - startTime,
        error: 'Kode ICD-10 tidak boleh kosong',
      };
    }

    // Step 1: Build context from encounter + input
    const context = await buildPrescriptionContext(input);

    // Step 2: Check cache
    const cacheKey = generateCacheKey(context);
    const cachedResult = getCachedResult(cacheKey);
    if (cachedResult) {
      console.log('[PrescriptionFlow] Cache hit');
      return {
        ...cachedResult,
        duration: Date.now() - startTime,
      };
    }

    // Step 3: Call AI via background worker
    console.log('[PrescriptionFlow] Requesting AI recommendations...');
    const response = await sendMessage('getRecommendations', context);

    // Step 4: Process response
    if (response.success && response.data) {
      // Run additional DDI check if current medications provided
      let drugInteractions: DrugInteraction[] =
        response.data.drug_interactions || [];

      if (
        input.current_medications &&
        input.current_medications.length > 0 &&
        response.data.medication_recommendations
      ) {
        const newMeds = response.data.medication_recommendations.map(
          (m) => m.nama_obat
        );
        const allMeds = [...input.current_medications, ...newMeds];

        if (allMeds.length >= 2) {
          const ddiResult = await checkDrugInteractions(allMeds);
          drugInteractions = [...drugInteractions, ...ddiResult];
        }
      }

      const result: PrescriptionFlowResult = {
        success: true,
        recommendations: response.data.medication_recommendations || [],
        alerts: response.data.alerts || [],
        drug_interactions: drugInteractions,
        clinical_guidelines: response.data.clinical_guidelines || [],
        source: response.data.meta?.is_mock ? 'local' : 'ai',
        duration: Date.now() - startTime,
      };

      // Cache successful result
      setCachedResult(cacheKey, result);

      console.log(
        '[PrescriptionFlow] Success:',
        result.recommendations.length,
        'recommendations'
      );
      return result;
    }

    // API returned error
    console.error('[PrescriptionFlow] API error:', response.error);
    return {
      success: false,
      recommendations: [],
      alerts: [],
      drug_interactions: [],
      clinical_guidelines: [],
      source: 'local',
      duration: Date.now() - startTime,
      error: response.error?.message || 'Gagal mendapat rekomendasi obat',
    };
  } catch (error) {
    console.error('[PrescriptionFlow] Error:', error);
    return {
      success: false,
      recommendations: [],
      alerts: [],
      drug_interactions: [],
      clinical_guidelines: [],
      source: 'local',
      duration: Date.now() - startTime,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// =============================================================================
// CONTEXT BUILDER
// =============================================================================

/**
 * Build prescription request context from encounter and input
 */
async function buildPrescriptionContext(
  input: PrescriptionFlowInput
): Promise<PrescriptionRequestContext> {
  // Try to get encounter data
  let encounter: Encounter | null = null;
  try {
    encounter = await getEncounter();
  } catch (e) {
    console.warn('[PrescriptionFlow] Could not load encounter:', e);
  }

  // Extract allergies from encounter
  const encounterAllergies: string[] = [];
  if (encounter?.anamnesa?.alergi) {
    const { obat } = encounter.anamnesa.alergi;
    encounterAllergies.push(...obat);
  }

  // Build context
  const context: PrescriptionRequestContext = {
    icd_x: input.icd_x,
    diagnosis_name: input.diagnosis_name,
    patient_age: input.patient_age || 30,
    patient_weight: input.patient_weight,
    patient_gender: input.patient_gender || 'M',
    alergi: input.allergies || encounterAllergies,
    penyakit_kronis:
      input.chronic_diseases ||
      encounter?.diagnosa?.penyakit_kronis ||
      [],
    current_medications: input.current_medications,
    renal_function: input.renal_function,
    hepatic_impairment: input.hepatic_impairment,
  };

  return context;
}

// =============================================================================
// DDI CHECK
// =============================================================================

/**
 * Check drug interactions for a list of medications
 */
async function checkDrugInteractions(
  drugs: string[]
): Promise<DrugInteraction[]> {
  if (drugs.length < 2) return [];

  try {
    const response = await sendMessage('checkInteractions', drugs);
    if (response.success && response.data) {
      return response.data;
    }
    return [];
  } catch (e) {
    console.warn('[PrescriptionFlow] DDI check failed:', e);
    return [];
  }
}

// =============================================================================
// CONVERSION TO RESEP FORMAT
// =============================================================================

/**
 * Aturan pakai text to code mapping
 */
const ATURAN_PAKAI_MAP: Record<string, AturanPakai> = {
  'sebelum makan': '1',
  'sesudah makan': '2',
  'pemakaian luar': '3',
  'jika diperlukan': '4',
  'saat makan': '5',
  // Fallback patterns
  'sebelum': '1',
  'sesudah': '2',
  'luar': '3',
  'prn': '4',
  'saat': '5',
};

/**
 * Convert AI recommendation to ResepMedication format
 *
 * @param recommendation - AI medication recommendation
 * @param quantity - Override quantity (optional)
 * @returns Formatted medication for Resep form
 */
export function toResepMedication(
  recommendation: MedicationRecommendation,
  quantity?: number
): ResepMedication {
  // Parse aturan pakai text to code
  let aturanPakaiCode: AturanPakai = '2'; // Default: sesudah makan
  const aturanText = recommendation.aturan_pakai.toLowerCase();

  for (const [pattern, code] of Object.entries(ATURAN_PAKAI_MAP)) {
    if (aturanText.includes(pattern)) {
      aturanPakaiCode = code;
      break;
    }
  }

  // Calculate quantity from dosing regimen and duration
  const calculatedQty = quantity || calculateQuantity(
    recommendation.dosis,
    recommendation.durasi
  );

  return {
    racikan: '', // Non-racikan
    nama_obat: recommendation.nama_obat,
    jumlah: calculatedQty,
    signa: recommendation.dosis,
    aturan_pakai: aturanPakaiCode,
    keterangan: recommendation.rationale || '',
  };
}

/**
 * Convert multiple recommendations to ResepMedication array
 */
export function toResepMedications(
  recommendations: MedicationRecommendation[]
): ResepMedication[] {
  return recommendations.map((r) => toResepMedication(r));
}

/**
 * Calculate medication quantity from dosis and duration
 *
 * @example
 * calculateQuantity('3x1', '5 hari') // → 15
 * calculateQuantity('2x500mg', '7 hari') // → 14
 */
export function calculateQuantity(dosis: string, durasi?: string): number {
  // Parse frequency from dosis (e.g., "3x1" → 3 times/day, 1 unit/dose)
  const dosisMatch = dosis.match(/(\d+)\s*x\s*(\d+)/i);
  if (!dosisMatch) {
    return 10; // Default quantity
  }

  const timesPerDay = parseInt(dosisMatch[1], 10);
  const unitsPerDose = parseInt(dosisMatch[2], 10);

  // Parse days from duration (e.g., "5 hari" → 5)
  let days = 3; // Default: 3 days
  if (durasi) {
    const durasiMatch = durasi.match(/(\d+)/);
    if (durasiMatch) {
      days = parseInt(durasiMatch[1], 10);
    }
  }

  return timesPerDay * unitsPerDose * days;
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Filter recommendations by safety status
 */
export function filterBySafety(
  recommendations: MedicationRecommendation[],
  allowedStatuses: Array<'safe' | 'caution'> = ['safe', 'caution']
): MedicationRecommendation[] {
  return recommendations.filter((r) =>
    allowedStatuses.includes(r.safety_check)
  );
}

/**
 * Get contraindicated medications
 */
export function getContraindicated(
  recommendations: MedicationRecommendation[]
): MedicationRecommendation[] {
  return recommendations.filter((r) => r.safety_check === 'contraindicated');
}

/**
 * Check if any recommendation has blocking alerts
 */
export function hasBlockingAlerts(alerts: CDSSAlert[]): boolean {
  return alerts.some((a) => a.level === 'critical' && a.action_required);
}

/**
 * Check if any major drug interactions exist
 */
export function hasMajorInteractions(
  interactions: DrugInteraction[]
): boolean {
  return interactions.some(
    (i) => i.severity === 'contraindicated' || i.severity === 'major'
  );
}

/**
 * Get all blocked medications (contraindicated + major DDI)
 */
export function getBlockedMedications(
  recommendations: MedicationRecommendation[],
  interactions: DrugInteraction[]
): string[] {
  const blocked = new Set<string>();

  // Add contraindicated
  recommendations
    .filter((r) => r.safety_check === 'contraindicated')
    .forEach((r) => blocked.add(r.nama_obat));

  // Add medications involved in major interactions
  interactions
    .filter((i) => i.severity === 'contraindicated' || i.severity === 'major')
    .forEach((i) => {
      blocked.add(i.drug_a);
      blocked.add(i.drug_b);
    });

  return Array.from(blocked);
}

/**
 * Clear prescription cache
 */
export function clearPrescriptionCache(): void {
  prescriptionCache.clear();
  console.log('[PrescriptionFlow] Cache cleared');
}

// =============================================================================
// EXPORTS
// =============================================================================

export default executePrescriptionFlow;
