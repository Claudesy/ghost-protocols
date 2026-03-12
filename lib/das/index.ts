// Designed and constructed by Claudesy.
/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Data Ascension System (DAS)
 *
 * AI-Powered Intelligent Form Mapping for Sentra Assist
 *
 * DAS provides adaptive form field detection and mapping capabilities,
 * replacing brittle hardcoded DOM selectors with intelligent field recognition.
 *
 * ## Architecture
 *
 * ```
 * ┌─────────────────────────────────────────────────┐
 * │  Layer 1: Static Cache (Fast, Offline)          │
 * │  Layer 2: DOM Scanner (Runtime Analysis)        │
 * │  Layer 3: AI Semantic Mapper (Gemini Vision)    │
 * │  Layer 4: Learning Feedback Loop                │
 * └─────────────────────────────────────────────────┘
 * ```
 *
 * ## Phase 1 Implementation (Current)
 *
 * - DOM Scanner: Extract field signatures from pages
 * - Field Classifier: Categorize fields for safety
 * - Pattern Matching: ePuskesmas-specific field detection
 *
 * @module lib/das
 * @version 1.0.0
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type {
  // Phase 1 types
  FieldSignature,
  FieldType,
  FieldAttributes,
  FieldContext,
  FieldPosition,
  ScanResult,
  ScanOptions,
  ClinicalFieldCategory,
  FieldMappingHint,
  // Phase 2 types
  PageType,
  MappingContext,
  MappingRequest,
  FieldMapping,
  MappingAction,
  MappingResult,
  MapperOptions,
  MappingCacheEntry,
  CacheStats,
  ValidationResult,
  // Phase 3 types
  FillOutcome,
  LearningEntry,
  MappingStats,
  PromotionCriteria,
  LearningStoreConfig,
  LearningAnalytics,
} from './types';

// Phase 3 type re-export from cache-promoter
export type { PromotionResult, SystemHealthReport } from './cache-promoter';

// ============================================================================
// DOM SCANNER EXPORTS
// ============================================================================

export {
  scanPageFields,
  classifyFieldType,
  computeUniqueSelector,
  getFieldAttributes,
  findAssociatedLabel,
  extractContext,
  getFieldPosition,
  serializeForLogging,
  isInteractiveField,
} from './dom-scanner';

// ============================================================================
// FIELD CLASSIFIER EXPORTS
// ============================================================================

export {
  classifyClinicalField,
  requiresHumanConfirmation,
  requiresStaticMapping,
  matchEpuskesmasField,
  getSelectorsForPayloadKey,
  EPUSKESMAS_FIELD_PATTERNS,
} from './field-classifier';

// ============================================================================
// PHASE 2: SEMANTIC MAPPER EXPORTS
// ============================================================================

export {
  mapPayloadToFields,
  quickMap,
  mapFresh,
  reportFillResult,
  previewMapping,
} from './semantic-mapper';

// ============================================================================
// PHASE 2: GEMINI VISION EXPORTS
// ============================================================================

export {
  mapFieldsWithGemini,
  mapFieldsHeuristic,
} from './gemini-vision';

// ============================================================================
// PHASE 2: MAPPING CACHE EXPORTS
// ============================================================================

export {
  computePageHash,
  getCachedMapping,
  setCachedMapping,
  updateCacheResult,
  clearCache,
  getCacheStats,
  restoreMappingsFromCache,
} from './mapping-cache';

// ============================================================================
// PHASE 2: SAFETY VALIDATOR EXPORTS
// ============================================================================

export {
  validateMappings,
  classifyClinicalCategory,
  isCriticalField,
  enforceConfidenceThresholds,
  filterAutoFillable,
  filterNeedsConfirmation,
  generateValidationSummary,
} from './safety-validator';

// ============================================================================
// PHASE 3: LEARNING STORE EXPORTS
// ============================================================================

export {
  initLearningStore,
  recordLearning,
  getLearningEntries,
  getMappingStats,
  getAllMappingStats,
  checkPromotionEligibility,
  getPromotionCandidates,
  getLearningAnalytics,
  cleanupOldEntries,
  clearLearningStore,
  closeLearningStore,
} from './learning-store';

// ============================================================================
// PHASE 3: FEEDBACK CAPTURE EXPORTS
// ============================================================================

export {
  trackFilledField,
  trackBatchFill,
  reportFillSuccess,
  reportFillFailed,
  reportMappingRejected,
  reportBatchSuccess,
  cancelAllTracking,
  setPageContext,
  getTrackingStatus,
} from './feedback-capture';

// ============================================================================
// PHASE 3: CACHE PROMOTER EXPORTS
// ============================================================================

export {
  executePromotion,
  getSystemHealth,
  runMaintenance,
  resetDAS,
  startScheduledMaintenance,
  stopScheduledMaintenance,
} from './cache-promoter';

// ============================================================================
// CONVENIENCE FUNCTIONS
// ============================================================================

import { scanPageFields, serializeForLogging } from './dom-scanner';
import { classifyClinicalField, matchEpuskesmasField } from './field-classifier';
import type { FieldSignature, ScanOptions, ClinicalFieldCategory } from './types';

/**
 * Scan page and return simplified field list for debugging
 *
 * @param options - Scan options
 * @returns Array of simplified field objects
 */
export function scanAndSimplify(options?: ScanOptions): object[] {
  const result = scanPageFields(options);
  return result.fields.map(serializeForLogging);
}

/**
 * Scan page and classify all fields by clinical category
 *
 * @param options - Scan options
 * @returns Object with fields grouped by category
 */
export function scanAndClassify(options?: ScanOptions): Record<ClinicalFieldCategory, FieldSignature[]> {
  const result = scanPageFields(options);

  const grouped: Record<ClinicalFieldCategory, FieldSignature[]> = {
    vital_signs: [],
    medication: [],
    allergy: [],
    patient_id: [],
    diagnosis: [],
    general: [],
  };

  for (const field of result.fields) {
    const hint = classifyClinicalField(field);
    grouped[hint.category].push(field);
  }

  return grouped;
}

/**
 * Scan page and match fields to ePuskesmas payload keys
 *
 * @param options - Scan options
 * @returns Map of payload key → field signature
 */
export function scanAndMatchEpuskesmas(options?: ScanOptions): Map<string, FieldSignature> {
  const result = scanPageFields(options);
  const matched = new Map<string, FieldSignature>();

  for (const field of result.fields) {
    const payloadKey = matchEpuskesmasField(field);
    if (payloadKey) {
      matched.set(payloadKey, field);
    }
  }

  return matched;
}

/**
 * Get summary statistics from a page scan
 *
 * @param options - Scan options
 * @returns Scan statistics
 */
export function getScanStats(options?: ScanOptions): {
  totalFields: number;
  byType: Record<string, number>;
  byCategory: Record<string, number>;
  matchedToEpuskesmas: number;
  scanDuration: number;
} {
  const result = scanPageFields(options);

  const byType: Record<string, number> = {};
  const byCategory: Record<string, number> = {};
  let matchedCount = 0;

  for (const field of result.fields) {
    // Count by type
    byType[field.fieldType] = (byType[field.fieldType] || 0) + 1;

    // Count by category
    const hint = classifyClinicalField(field);
    byCategory[hint.category] = (byCategory[hint.category] || 0) + 1;

    // Count ePuskesmas matches
    if (matchEpuskesmasField(field)) {
      matchedCount++;
    }
  }

  return {
    totalFields: result.fields.length,
    byType,
    byCategory,
    matchedToEpuskesmas: matchedCount,
    scanDuration: result.scanDuration,
  };
}
