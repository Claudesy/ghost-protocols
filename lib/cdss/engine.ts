/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * CDSS Engine Orchestrator
 * Main entry point for Clinical Decision Support System
 *
 * @module lib/cdss/engine
 * @version 1.0.0
 *
 * ARCHITECTURE:
 * 1. Anonymize (NEVER skip) → Strip PII before any processing
 * 2. Red Flag Check (FIRST) → Hardcoded rules, no API dependency
 * 3. v3 Inference Engine → Core risk/syndrome inference
 * 4. Validation Pipeline → 5-layer verification (with conservative degraded mode)
 * 5. Audit Log → Append-only trail (async, non-blocking)
 */

import type { AlertSeverity, CDSSAlertType, DiagnosisRequestContext } from '@/types/api';
import type { Encounter } from '~/utils/types';
import type { RedFlag } from './red-flags';
import type { ValidatedSuggestion, ValidationResult } from './validation/types';

import type { AnonymizedClinicalContext } from '@/lib/api/deepseek-types';
import { anonymize, validateAnonymization } from './anonymizer';
import {
  auditLogger,
  logDiagnosisRequest,
  logEngineError,
  logSuggestionDisplayed,
} from './audit-logger';
import { runRedFlagChecksFromContext } from './red-flags';
import { runValidationPipeline } from './validation';
import { runV3InferenceFromEncounter } from './v3-adapter';

// =============================================================================
// TYPES
// =============================================================================

/**
 * CDSS Engine Result
 * Final output after all processing layers
 */
export interface CDSSEngineResult {
  /** Validated diagnosis suggestions */
  suggestions: ValidatedSuggestion[];

  /** Red flags detected (hardcoded rules) */
  red_flags: RedFlag[];

  /** Clinical alerts for UI display */
  alerts: CDSSAlert[];

  /** Total processing time in milliseconds */
  processing_time_ms: number;

  /** Source of suggestions */
  source: 'ai' | 'local' | 'error';

  /** Model version used */
  model_version: string;

  /** Validation result summary */
  validation_summary: {
    total_raw: number;
    total_validated: number;
    unverified_codes: string[];
    warnings: string[];
  };
}

/**
 * Clinical alert for UI display
 * Uses CDSSAlertType from types/api.ts for consistency
 */
export interface CDSSAlert {
  /** Unique alert ID */
  id: string;

  /** Alert type */
  type: CDSSAlertType;

  /** Severity level */
  severity: AlertSeverity;

  /** Alert title */
  title: string;

  /** Alert message */
  message: string;

  /** Related ICD-10 codes */
  icd_codes?: string[];

  /** Recommended action */
  action?: string;
}

/**
 * Engine configuration
 */
export interface CDSSEngineConfig {
  /** Enable AI inference (can be disabled for testing) */
  enableAI: boolean;

  /** Maximum suggestions to return */
  maxSuggestions: number;

  /** Minimum confidence threshold */
  minConfidence: number;

  /** Timeout for API calls in milliseconds */
  apiTimeout: number;

  /** Enable audit logging */
  enableAudit: boolean;
}

/**
 * Default engine configuration
 */
export const DEFAULT_ENGINE_CONFIG: CDSSEngineConfig = {
  enableAI: true,
  maxSuggestions: 5,
  minConfidence: 0.15,
  apiTimeout: 60000,
  enableAudit: true,
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Generate unique alert ID
 */
function generateAlertId(): string {
  return `alert-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Generate session ID from encounter
 */
function generateSessionId(encounter: Encounter): string {
  // Use encounter ID if available, otherwise generate from timestamp
  if (encounter.id) {
    return `session-${encounter.id}`;
  }
  return `session-${Date.now()}`;
}

/**
 * Map RedFlag severity to CDSSAlert severity
 */
function mapRedFlagSeverity(severity: RedFlag['severity']): CDSSAlert['severity'] {
  const severityMap: Record<RedFlag['severity'], CDSSAlert['severity']> = {
    emergency: 'emergency',
    urgent: 'high',
    warning: 'medium',
  };
  return severityMap[severity];
}

/**
 * Convert red flags to alerts
 */
function redFlagsToAlerts(redFlags: RedFlag[]): CDSSAlert[] {
  return redFlags.map((flag) => ({
    id: generateAlertId(),
    type: 'red_flag' as const,
    severity: mapRedFlagSeverity(flag.severity),
    title: flag.condition,
    message: flag.criteria_met.join('; '), // Use criteria_met as message
    icd_codes: flag.icd_codes,
    action: flag.action,
  }));
}

/**
 * Generate alerts from validation result
 */
function validationToAlerts(validation: ValidationResult): CDSSAlert[] {
  const alerts: CDSSAlert[] = [];

  // Unverified codes warning
  if (validation.unverified_codes.length > 0) {
    alerts.push({
      id: generateAlertId(),
      type: 'validation_warning',
      severity: 'medium',
      title: 'Kode ICD-10 Tidak Terverifikasi',
      message: `${validation.unverified_codes.length} kode tidak ditemukan di database lokal`,
      icd_codes: validation.unverified_codes,
    });
  }

  // Validation warnings
  for (const warning of validation.warnings) {
    alerts.push({
      id: generateAlertId(),
      type: 'validation_warning',
      severity: 'low',
      title: 'Peringatan Validasi',
      message: warning,
    });
  }

  return alerts;
}

// =============================================================================
// MAIN ENGINE
// =============================================================================

/**
 * Run CDSS Diagnosis Engine
 *
 * This is the main entry point for clinical decision support.
 * It orchestrates all processing layers in sequence:
 *
 * 1. ANONYMIZE — Strip all PII before processing
 * 2. RED FLAGS — Check hardcoded safety rules (no API)
 * 3. V3 INFERENCE — Run v3 adapter for risk/syndrome output
 * 4. VALIDATION — 5-layer verification pipeline
 * 5. AUDIT — Log for governance (async)
 *
 * @param encounter - Patient encounter data
 * @param config - Engine configuration
 * @returns CDSS result with suggestions and alerts
 */
export async function runDiagnosisEngine(
  encounter: Encounter,
  config: CDSSEngineConfig = DEFAULT_ENGINE_CONFIG,
  requestContext?: DiagnosisRequestContext,
): Promise<CDSSEngineResult> {
  const startTime = Date.now();
  const sessionId = generateSessionId(encounter);
  const alerts: CDSSAlert[] = [];

  // =========================================================================
  // STEP 1: ANONYMIZE (CRITICAL — NEVER SKIP)
  // =========================================================================

  const anonymizedContext = anonymize(encounter);
  const effectiveContext = mergeRequestContext(anonymizedContext, requestContext);

  if (config.enableAudit) {
    logDiagnosisRequest({
      session_id: sessionId,
      input_context: JSON.stringify(effectiveContext),
      model_version: 'sentra-inference-v3.0.0',
    }).catch(console.error);
  }

  // Validate anonymization (paranoid check)
  const anonValidation = validateAnonymization(effectiveContext);
  if (!anonValidation.valid) {
    console.error(
      '[CDSS Engine] CRITICAL: Anonymization validation failed!',
      anonValidation.violations
    );
    throw new Error(`PII leak detected: ${anonValidation.violations.join(', ')}`);
  }

  // =========================================================================
  // STEP 2: RED FLAG CHECK (FIRST — NO API DEPENDENCY)
  // =========================================================================

  const redFlags = runRedFlagChecksFromContext(effectiveContext);

  if (redFlags.length > 0) {
    console.warn(`[CDSS Engine] ${redFlags.length} red flag(s) detected!`);
    alerts.push(...redFlagsToAlerts(redFlags));
  }

  // =========================================================================
  // STEP 3: V3 INFERENCE ENGINE (NO LEGACY RUNTIME)
  // =========================================================================
  const v3Result = runV3InferenceFromEncounter(encounter, effectiveContext, redFlags);
  const validationContext = {
    patient_age: effectiveContext.usia_tahun,
    patient_gender: effectiveContext.jenis_kelamin,
    is_pregnant: effectiveContext.is_pregnant || false,
    keluhan_utama: effectiveContext.keluhan_utama,
    existing_red_flags: redFlags,
  };
  let validationResult: ValidationResult;

  try {
    validationResult = await runValidationPipeline(v3Result.rawSuggestions, validationContext);
  } catch (error) {
    if (config.enableAudit) {
      logEngineError({
        session_id: sessionId,
        error_message: error instanceof Error ? error.message : 'Unknown validation error',
        error_code: 'V3_VALIDATION_FAILED',
      }).catch(console.error);
    }
    alerts.push({
      id: generateAlertId(),
      type: 'validation_warning',
      severity: 'high',
      title: 'Validasi Klinis Terdegradasi',
      message:
        'Pipeline validasi tidak tersedia penuh. Tampilkan hasil v3 secara konservatif dan konfirmasi klinis manual.',
      action: 'Verifikasi ulang diagnosis sebelum keputusan terapi.',
    });
    validationResult = buildConservativeValidationFallback(v3Result.rawSuggestions);
  }

  alerts.push(...v3Result.alerts);
  alerts.push(...validationToAlerts(validationResult));

  // Filter by confidence and limit
  const filteredSuggestions = validationResult.filtered_suggestions
    .filter((s) => s.confidence >= config.minConfidence)
    .slice(0, config.maxSuggestions);

  // Add low confidence alert if applicable
  if (filteredSuggestions.length > 0) {
    const avgConfidence =
      filteredSuggestions.reduce((sum, s) => sum + s.confidence, 0) / filteredSuggestions.length;
    if (avgConfidence < 0.4) {
      alerts.push({
        id: generateAlertId(),
        type: 'low_confidence',
        severity: 'info',
        title: 'Kepercayaan Rendah',
        message:
          'Saran diagnosis memiliki tingkat kepercayaan rendah. Pertimbangkan anamnesis tambahan.',
      });
    }
  }

  // =========================================================================
  // STEP 6: AUDIT LOG (ASYNC, NON-BLOCKING)
  // =========================================================================

  const processingTime = Date.now() - startTime;

  if (config.enableAudit) {
    logSuggestionDisplayed({
      session_id: sessionId,
      suggestions: filteredSuggestions.map((s) => ({
        icd10_code: s.icd10_code,
        confidence: s.confidence,
      })),
      red_flag_count: redFlags.length,
      model_version: v3Result.modelVersion,
      latency_ms: processingTime,
      validation_status: validationResult.valid
        ? 'PASS'
        : validationResult.layer_passed >= 3
          ? 'WARN'
          : 'FAIL',
    }).catch(console.error);
  }

  return {
    suggestions: filteredSuggestions,
    red_flags: redFlags,
    alerts,
    processing_time_ms: processingTime,
    source: v3Result.source,
    model_version: v3Result.modelVersion,
    validation_summary: {
      total_raw: v3Result.rawSuggestions.length,
      total_validated: filteredSuggestions.length,
      unverified_codes: validationResult.unverified_codes,
      warnings: [...validationResult.warnings, ...v3Result.dataQualityWarnings],
    },
  };
}

function buildConservativeValidationFallback(
  rawSuggestions: Array<{
    rank: number;
    diagnosis_name: string;
    icd10_code: string;
    confidence: number;
    reasoning: string;
    red_flags?: string[];
    recommended_actions?: string[];
  }>,
): ValidationResult {
  const filtered_suggestions = rawSuggestions.slice(0, 5).map((suggestion, index) => ({
    ...suggestion,
    rank: suggestion.rank || index + 1,
    confidence: Math.min(0.5, suggestion.confidence),
    rag_verified: false,
    confidence_adjusted: true,
    original_confidence: suggestion.confidence,
    validation_flags: [
      {
        type: 'warning' as const,
        code: 'VALIDATION_DEGRADED',
        message: 'Pipeline validasi penuh tidak tersedia, confidence diturunkan konservatif.',
      },
    ],
    red_flags: suggestion.red_flags || [],
    recommended_actions: suggestion.recommended_actions || [],
  }));

  return {
    valid: false,
    layer_passed: 1,
    filtered_suggestions,
    unverified_codes: filtered_suggestions.map((s) => s.icd10_code),
    red_flags: [],
    warnings: ['Validation pipeline degraded: menggunakan fallback konservatif v3.'],
    layer_results: [
      {
        layer: 1,
        name: 'Syntax Validation',
        passed: true,
        affected_count: filtered_suggestions.length,
        details: ['Fallback konservatif aktif, validasi lanjutan tidak dijalankan.'],
      },
    ],
  };
}

function mergeRequestContext(
  anonymizedContext: AnonymizedClinicalContext,
  requestContext?: DiagnosisRequestContext,
): AnonymizedClinicalContext {
  if (!requestContext) return anonymizedContext;

  const hasMeaningfulRequestContext =
    Boolean(requestContext.keluhan_utama?.trim()) ||
    Boolean(requestContext.keluhan_tambahan?.trim()) ||
    (Number.isFinite(requestContext.patient_age) && requestContext.patient_age > 0) ||
    Boolean(requestContext.vital_signs) ||
    Boolean(requestContext.allergies?.length) ||
    Boolean(requestContext.chronic_diseases?.length);

  if (!hasMeaningfulRequestContext) {
    return anonymizedContext;
  }

  const mappedGender = requestContext.patient_gender === 'F' ? 'P' : 'L';
  const mergedVitals = requestContext.vital_signs
    ? {
        ...anonymizedContext.vital_signs,
        ...requestContext.vital_signs,
      }
    : anonymizedContext.vital_signs;

  return {
    ...anonymizedContext,
    keluhan_utama: requestContext.keluhan_utama || anonymizedContext.keluhan_utama,
    keluhan_tambahan:
      requestContext.keluhan_tambahan ?? anonymizedContext.keluhan_tambahan,
    usia_tahun:
      Number.isFinite(requestContext.patient_age) && requestContext.patient_age > 0
        ? requestContext.patient_age
        : anonymizedContext.usia_tahun,
    jenis_kelamin: requestContext.patient_gender ? mappedGender : anonymizedContext.jenis_kelamin,
    vital_signs: mergedVitals,
    allergies:
      requestContext.allergies && requestContext.allergies.length > 0
        ? requestContext.allergies
        : anonymizedContext.allergies,
    chronic_diseases:
      requestContext.chronic_diseases && requestContext.chronic_diseases.length > 0
        ? requestContext.chronic_diseases
        : anonymizedContext.chronic_diseases,
  };
}

// =============================================================================
// STATUS & DIAGNOSTICS
// =============================================================================

/**
 * CDSS Engine status
 */
export interface CDSSEngineStatus {
  ready: boolean;
  icd10_count: number;
  model: string;
  audit_entries: number;
  last_error?: string;
}

/**
 * Get CDSS engine status
 */
export async function getCDSSEngineStatus(): Promise<CDSSEngineStatus> {
  try {
    // Import here to avoid circular dependency
    const { icd10DB } = await import('@/lib/rag/icd10-db');
    const stats = await icd10DB.getStats();
    const auditCount = await auditLogger.getEntryCount();

    return {
      ready: stats.total_entries > 0,
      icd10_count: stats.total_entries,
      model: 'sentra-inference-v3.0.0',
      audit_entries: auditCount,
    };
  } catch (error) {
    return {
      ready: false,
      icd10_count: 0,
      model: 'sentra-inference-v3.0.0',
      audit_entries: 0,
      last_error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Initialize CDSS engine
 * Call this on extension startup
 */
export async function initCDSSEngine(): Promise<boolean> {
  try {
    console.log('[CDSS Engine] Initializing...');

    // Ensure ICD-10 database is loaded
    const { ensureICD10DataLoaded } = await import('@/lib/rag');
    await ensureICD10DataLoaded((progress) => {
      console.log(`[CDSS Engine] ICD-10 loading: ${progress.phase} (${progress.progress}%)`);
    });

    // Initialize audit logger
    await auditLogger.init();

    const status = await getCDSSEngineStatus();
    console.log(`[CDSS Engine] Ready. ICD-10 codes: ${status.icd10_count}`);

    return status.ready;
  } catch (error) {
    console.error('[CDSS Engine] Initialization failed:', error);
    return false;
  }
}

// Types already exported with their definitions above
