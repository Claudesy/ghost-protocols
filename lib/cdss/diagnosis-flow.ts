/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Diagnosis Suggestion Flow Orchestrator
 * Coordinates AI diagnosis suggestions based on patient symptoms
 *
 * Flow:
 * 1. Extract keluhan from Anamnesa (scrape or encounter state)
 * 2. Build patient context (age, gender, allergies, chronic diseases)
 * 3. Send to Sentra AI via background worker
 * 4. Return formatted suggestions for UI display
 *
 * @module lib/cdss/diagnosis-flow
 * @version 1.0.0
 */

import { sendMessage } from '@/utils/messaging';
import { getEncounter } from '@/utils/storage';
import type { Encounter } from '@/utils/types';
import type {
  CDSSResponse,
  DiagnosisSuggestion,
  DiagnosisRequestContext,
  CDSSAlert,
  APIResponse,
} from '@/types/api';

// =============================================================================
// TYPES
// =============================================================================

export interface DiagnosisFlowInput {
  /** Override keluhan utama (if not using encounter state) */
  keluhan_utama?: string;
  /** Override keluhan tambahan */
  keluhan_tambahan?: string;
  /** Patient age in years */
  patient_age?: number;
  /** Patient gender */
  patient_gender?: 'M' | 'F';
  /** Known allergies */
  allergies?: string[];
  /** Chronic diseases */
  chronic_diseases?: string[];
  /** Vital signs data */
  vital_signs?: {
    temperature?: number;
    heart_rate?: number;
    blood_pressure_systolic?: number;
    blood_pressure_diastolic?: number;
    respiratory_rate?: number;
    spo2?: number;
  };
}

export interface DiagnosisFlowResult {
  success: boolean;
  suggestions: DiagnosisSuggestion[];
  alerts: CDSSAlert[];
  clinical_guidelines: string[];
  /** Source of data: 'ai' | 'local' | 'cache' */
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
  result: DiagnosisFlowResult;
  timestamp: number;
}

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const diagnosisCache = new Map<string, CacheEntry>();

function generateCacheKey(context: DiagnosisRequestContext): string {
  return `${context.keluhan_utama}|${context.patient_age}|${context.patient_gender}`.toLowerCase();
}

function getCachedResult(key: string): DiagnosisFlowResult | null {
  const entry = diagnosisCache.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    diagnosisCache.delete(key);
    return null;
  }

  return { ...entry.result, source: 'cache' };
}

function setCachedResult(key: string, result: DiagnosisFlowResult): void {
  diagnosisCache.set(key, {
    key,
    result,
    timestamp: Date.now(),
  });
}

// =============================================================================
// MAIN FLOW
// =============================================================================

/**
 * Execute diagnosis suggestion flow
 *
 * @param input - Optional overrides for patient context
 * @returns Diagnosis suggestions with alerts and guidelines
 *
 * @example
 * ```ts
 * // Using encounter state
 * const result = await executeDiagnosisFlow();
 *
 * // With explicit input
 * const result = await executeDiagnosisFlow({
 *   keluhan_utama: 'Demam 3 hari, batuk',
 *   patient_age: 45,
 *   patient_gender: 'M',
 * });
 * ```
 */
export async function executeDiagnosisFlow(
  input: DiagnosisFlowInput = {}
): Promise<DiagnosisFlowResult> {
  const startTime = Date.now();

  try {
    // Step 1: Build context from encounter + input overrides
    const context = await buildDiagnosisContext(input);

    // Validate required fields
    if (!context.keluhan_utama || context.keluhan_utama.trim() === '') {
      return {
        success: false,
        suggestions: [],
        alerts: [],
        clinical_guidelines: [],
        source: 'local',
        duration: Date.now() - startTime,
        error: 'Keluhan utama tidak boleh kosong',
      };
    }

    // Step 2: Check cache
    const cacheKey = generateCacheKey(context);
    const cachedResult = getCachedResult(cacheKey);
    if (cachedResult) {
      console.log('[DiagnosisFlow] Cache hit');
      return {
        ...cachedResult,
        duration: Date.now() - startTime,
      };
    }

    // Step 3: Call AI via background worker
    console.log('[DiagnosisFlow] Requesting AI suggestions...');
    const response = await sendMessage('getSuggestions', context);

    // Step 4: Process response
    if (response.success && response.data) {
      const result: DiagnosisFlowResult = {
        success: true,
        suggestions: response.data.diagnosis_suggestions || [],
        alerts: response.data.alerts || [],
        clinical_guidelines: response.data.clinical_guidelines || [],
        source: response.data.meta?.is_mock ? 'local' : 'ai',
        duration: Date.now() - startTime,
      };

      // Cache successful result
      setCachedResult(cacheKey, result);

      console.log('[DiagnosisFlow] Success:', result.suggestions.length, 'suggestions');
      return result;
    }

    // API returned error
    console.error('[DiagnosisFlow] API error:', response.error);
    return {
      success: false,
      suggestions: [],
      alerts: [],
      clinical_guidelines: [],
      source: 'local',
      duration: Date.now() - startTime,
      error: response.error?.message || 'Gagal mendapat saran diagnosis',
    };
  } catch (error) {
    console.error('[DiagnosisFlow] Error:', error);
    return {
      success: false,
      suggestions: [],
      alerts: [],
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
 * Build diagnosis request context from encounter state and input overrides
 */
async function buildDiagnosisContext(
  input: DiagnosisFlowInput
): Promise<DiagnosisRequestContext> {
  // Try to get encounter data
  let encounter: Encounter | null = null;
  try {
    encounter = await getEncounter();
  } catch (e) {
    console.warn('[DiagnosisFlow] Could not load encounter:', e);
  }

  // Extract allergies from encounter
  const encounterAllergies: string[] = [];
  if (encounter?.anamnesa?.alergi) {
    const { obat, makanan, udara, lainnya } = encounter.anamnesa.alergi;
    encounterAllergies.push(...obat, ...makanan, ...udara, ...lainnya);
  }

  // Build context with input overrides taking precedence
  const context: DiagnosisRequestContext = {
    keluhan_utama:
      input.keluhan_utama ||
      encounter?.anamnesa?.keluhan_utama ||
      '',

    keluhan_tambahan:
      input.keluhan_tambahan ||
      encounter?.anamnesa?.keluhan_tambahan,

    patient_age: input.patient_age || 30, // Default age

    patient_gender: input.patient_gender || 'M', // Default gender

    allergies:
      input.allergies ||
      (encounterAllergies.length > 0 ? encounterAllergies : undefined),

    chronic_diseases:
      input.chronic_diseases ||
      encounter?.diagnosa?.penyakit_kronis,

    vital_signs: input.vital_signs,
  };

  return context;
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Filter suggestions by minimum confidence threshold
 */
export function filterByConfidence(
  suggestions: DiagnosisSuggestion[],
  minConfidence: number = 0.5
): DiagnosisSuggestion[] {
  return suggestions.filter((s) => s.confidence >= minConfidence);
}

/**
 * Sort suggestions by confidence (highest first)
 */
export function sortByConfidence(
  suggestions: DiagnosisSuggestion[]
): DiagnosisSuggestion[] {
  return [...suggestions].sort((a, b) => b.confidence - a.confidence);
}

/**
 * Get top N suggestions
 */
export function getTopSuggestions(
  suggestions: DiagnosisSuggestion[],
  n: number = 5
): DiagnosisSuggestion[] {
  return sortByConfidence(suggestions).slice(0, n);
}

/**
 * Check if any suggestion matches a specific ICD-10 code pattern
 */
export function hasDiagnosisPattern(
  suggestions: DiagnosisSuggestion[],
  pattern: RegExp
): boolean {
  return suggestions.some((s) => pattern.test(s.icd_x));
}

/**
 * Get critical alerts that require action
 */
export function getCriticalAlerts(alerts: CDSSAlert[]): CDSSAlert[] {
  return alerts.filter((a) => a.level === 'critical' && a.action_required);
}

/**
 * Clear diagnosis cache
 */
export function clearDiagnosisCache(): void {
  diagnosisCache.clear();
  console.log('[DiagnosisFlow] Cache cleared');
}

// =============================================================================
// EXPORTS
// =============================================================================

export default executeDiagnosisFlow;
