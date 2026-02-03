/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * CDSS Module Exports
 * Clinical Decision Support System for Sentra Assist
 *
 * @module lib/cdss
 */

// Flow Orchestrators
export {
  executeDiagnosisFlow,
  filterByConfidence,
  sortByConfidence,
  getTopSuggestions,
  hasDiagnosisPattern,
  getCriticalAlerts,
  clearDiagnosisCache,
  type DiagnosisFlowInput,
  type DiagnosisFlowResult,
} from './diagnosis-flow';

export {
  executePrescriptionFlow,
  toResepMedication,
  toResepMedications,
  calculateQuantity,
  filterBySafety,
  getContraindicated,
  hasBlockingAlerts,
  hasMajorInteractions,
  getBlockedMedications,
  clearPrescriptionCache,
  type PrescriptionFlowInput,
  type PrescriptionFlowResult,
} from './prescription-flow';

// Local Rules (Offline Fallback)
export {
  checkLocalDDI,
  checkLocalAllergies,
  analyzeVitalSigns,
  checkSepsisWarning,
  calculatePediatricDose,
  runOfflineCDSS,
  type VitalSigns,
  type PediatricDosingInput,
  type OfflineCDSSInput,
  type OfflineCDSSResult,
} from './local-rules';
