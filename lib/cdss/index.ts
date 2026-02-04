/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * CDSS Module Public API
 * Clinical Decision Support System for Sentra Assist
 *
 * @module lib/cdss
 * @version 1.0.0
 *
 * CORE EXPORTS:
 * - Engine: runDiagnosisEngine, initCDSSEngine, getCDSSEngineStatus
 * - Anonymizer: anonymize, validateAnonymization
 * - Red Flags: runRedFlagChecks, runRedFlagChecksFromContext
 * - Validation: runValidationPipeline
 * - Audit: auditLogger, log* functions
 */

// =============================================================================
// ENGINE EXPORTS (Main Entry Point)
// =============================================================================

export {
  runDiagnosisEngine,
  initCDSSEngine,
  getCDSSEngineStatus,
  DEFAULT_ENGINE_CONFIG,
} from './engine';

export type {
  CDSSEngineResult,
  CDSSAlert,
  CDSSEngineConfig,
  CDSSEngineStatus,
} from './engine';

// =============================================================================
// ANONYMIZER EXPORTS
// =============================================================================

export {
  anonymize,
  redactPII,
  validateAnonymization,
  containsPII,
} from './anonymizer';

// =============================================================================
// RED FLAG EXPORTS
// =============================================================================

export {
  runRedFlagChecks,
  runRedFlagChecksFromContext,
  checkSepsis,
  checkACS,
  checkPreeclampsia,
  checkStroke,
  checkHypoglycemia,
  checkAnaphylaxis,
} from './red-flags';

export type { RedFlag, RedFlagContext } from './red-flags';

// =============================================================================
// VALIDATION EXPORTS
// =============================================================================

export { runValidationPipeline } from './validation';

export type {
  ValidationResult,
  ValidatedSuggestion,
  ValidationFlag,
  ValidationContext,
} from './validation/types';

// =============================================================================
// AUDIT EXPORTS
// =============================================================================

export {
  auditLogger,
  logDiagnosisRequest,
  logSuggestionDisplayed,
  logSuggestionSelected,
  logRedFlagShown,
  logEngineError,
  logFallbackUsed,
} from './audit-logger';

export type { AuditEntry, AuditAction } from './audit-logger';
