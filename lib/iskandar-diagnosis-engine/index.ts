/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * CDSS Module Public API
 * Clinical Decision Support System for Sentra Assist
 *
 * @module lib/iskandar-diagnosis-engine
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
// Iskandar Diagnosis Engine V1 MODULE EXPORTS
// =============================================================================

export {
  matchSymptoms,
  getKBDiseaseCount,
  clearMatcherCache,
} from './symptom-matcher';

export type { MatcherInput, MatchedCandidate } from './symptom-matcher';

export {
  getEpidemiologyWeight,
  applyEpidemiologyWeights,
  getLocalEpidemiologyContext,
  getEpidemiologyMeta,
} from './epidemiology-weights';

export type { EpiWeightResult } from './epidemiology-weights';

export { classifyTrafficLight } from './traffic-light';

export type {
  TrafficLightLevel,
  TrafficLightInput,
  TrafficLightOutput,
} from './traffic-light';

export { runLLMReasoning } from './llm-reasoner';

export type {
  ReasonerInput,
  ReasonerOutput,
} from './llm-reasoner';

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

// =============================================================================
// CHRONIC DISEASE CLASSIFIER EXPORTS
// =============================================================================

export {
  classifyChronicDisease,
  getBadgeConfig,
  getBadgeConfigForDisease,
  isChronicDisease,
  getSupportedDiseaseTypes,
  getDiseaseFullName,
  ChronicDiseaseType,
} from './chronic-disease-classifier';

export type {
  ChronicDiseaseSeverity,
  ChronicDiseaseClassification,
  BadgeConfig,
} from './chronic-disease-classifier';

// =============================================================================
// DDI (DRUG-DRUG INTERACTION) CHECKER EXPORTS
// =============================================================================

export {
  loadDDIDatabase,
  getDDIStatus,
  checkDrugInteractions,
  hasBlockingInteractions,
  getSeverityLabel,
  getSeverityColor,
} from './ddi-checker';
