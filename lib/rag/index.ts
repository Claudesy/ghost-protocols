/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * RAG Module Public API
 * ICD-10 Database and Search for CDSS
 *
 * @module lib/rag
 * @version 1.0.0
 */

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type {
  ICD10Entry,
  ICD10Chapter,
  ICD10RawData,
  RAGSearchResult,
  RAGSearchOptions,
  RAGMatchType,
  RAGDatabaseStatus,
  RAGDatabaseStats,
  LoaderProgress,
  LoaderProgressCallback,
  // Penyakit.json types (144 Penyakit Puskesmas)
  PenyakitRawData,
  PenyakitDatabase,
  TerapiEntry,
} from './types';

export {
  DEFAULT_SEARCH_OPTIONS,
  PUSKESMAS_COMMON_CODES,
  SYMPTOM_KEYWORDS,
  isICD10Entry,
  isRAGSearchResult,
  isValidICD10Code,
} from './types';

// =============================================================================
// DATABASE EXPORTS
// =============================================================================

export {
  icd10DB,
  initICD10Database,
  isICD10DatabaseReady,
} from './icd10-db';

// =============================================================================
// LOADER EXPORTS
// =============================================================================

export {
  ICD10Loader,
  loadICD10Data,
  needsDataLoad,
  ensureICD10DataLoaded,
} from './icd10-loader';

// =============================================================================
// SEARCH EXPORTS
// =============================================================================

export {
  searchICD10,
  searchForDiagnosisSuggestions,
  verifyICD10Codes,
  getICD10Details,
  buildRAGContext,
  buildDetailedRAGContext,
} from './icd10-search';
