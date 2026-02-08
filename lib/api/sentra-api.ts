/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Sentra API Client
 * CDSS Backend Integration with Mock Support
 *
 * @module lib/api/sentra-api
 * @version 1.0.0
 */

import type {
  CDSSResponse,
  DiagnosisRequestContext,
  PrescriptionRequestContext,
  DDICheckRequest,
  AllergyCheckRequest,
  PediatricDoseRequest,
  DrugInteraction,
  CDSSAlert,
  PediatricDose,
  APIResponse,
  APIError,
} from '@/types/api';

import {
  buildMockDiagnosisResponse,
  buildMockPrescriptionResponse,
  checkMockDDI,
  generateAllergyAlerts,
  generateVitalSignAlerts,
  generateSepsisAlert,
  generateChronicDiseaseAlerts,
  generatePediatricAlert,
  generateGeriatricAlert,
  combineAndSortAlerts,
} from './mocks';

// Import DDInter-based DDI checker (173K+ interactions)
import { checkDrugInteractions as checkDDInterInteractions, loadDDIDatabase } from '@/lib/cdss/ddi-checker';

// =============================================================================
// CONFIGURATION
// =============================================================================

const API_BASE = import.meta.env.VITE_SENTRA_API_URL || 'https://api.sentra.local';
const API_KEY = import.meta.env.VITE_SENTRA_API_KEY || '';
const FACILITY_ID = import.meta.env.VITE_FACILITY_ID || 'PUSKESMAS_DEFAULT';
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000', 10);
const DEBUG = import.meta.env.VITE_DEBUG === 'true';

// Feature flags
const FEATURE_DIAGNOSIS_AI = import.meta.env.VITE_FEATURE_DIAGNOSIS_AI !== 'false';
const FEATURE_PRESCRIPTION_AI = import.meta.env.VITE_FEATURE_PRESCRIPTION_AI !== 'false';
const FEATURE_DDI_CHECK = import.meta.env.VITE_FEATURE_DDI_CHECK !== 'false';
const FEATURE_PEDIATRIC_DOSE = import.meta.env.VITE_FEATURE_PEDIATRIC_DOSE !== 'false';

// =============================================================================
// LOGGING
// =============================================================================

function log(message: string, data?: unknown): void {
  if (DEBUG) {
    console.log(`[SentraAPI] ${message}`, data || '');
  }
}

// =============================================================================
// HTTP CLIENT
// =============================================================================

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  timeout?: number;
}

async function fetchWithTimeout<T>(
  endpoint: string,
  options: FetchOptions
): Promise<APIResponse<T>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeout || API_TIMEOUT);

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        'X-Facility-ID': FACILITY_ID,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: {
          code: `HTTP_${response.status}`,
          message: response.statusText,
          details: errorData,
        },
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error && error.name === 'AbortError') {
      return {
        success: false,
        error: {
          code: 'TIMEOUT',
          message: 'Request timeout - API tidak merespon dalam waktu yang ditentukan',
        },
      };
    }

    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
}

// =============================================================================
// RETRY LOGIC
// =============================================================================

async function withRetry<T>(
  operation: () => Promise<APIResponse<T>>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<APIResponse<T>> {
  let lastError: APIError | undefined;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const result = await operation();

    if (result.success) {
      return result;
    }

    lastError = result.error;

    // Don't retry on client errors (4xx)
    if (result.error?.code?.startsWith('HTTP_4')) {
      return result;
    }

    if (attempt < maxRetries) {
      log(`Retry attempt ${attempt + 1}/${maxRetries} after ${delayMs}ms`);
      await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
    }
  }

  return { success: false, error: lastError };
}

// =============================================================================
// API METHODS
// =============================================================================

/**
 * Sentra API Client
 * Provides CDSS capabilities with automatic mock fallback
 */
export const SentraAPI = {
  /**
   * Check if mock mode is enabled
   */
  isMockMode(): boolean {
    return USE_MOCK;
  },

  /**
   * Get diagnosis suggestions based on chief complaint
   */
  async suggestDiagnosis(context: DiagnosisRequestContext): Promise<APIResponse<CDSSResponse>> {
    if (!FEATURE_DIAGNOSIS_AI) {
      return {
        success: false,
        error: { code: 'FEATURE_DISABLED', message: 'Diagnosis AI feature is disabled' },
      };
    }

    log('suggestDiagnosis', context);

    // Use mock if enabled
    if (USE_MOCK) {
      log('Using mock response for diagnosis');
      const mockResponse = buildMockDiagnosisResponse(context.keluhan_utama);

      // Add age-based alerts
      const alerts: CDSSAlert[] = [...mockResponse.alerts];

      const pediatricAlert = generatePediatricAlert(context.patient_age);
      if (pediatricAlert) alerts.push(pediatricAlert);

      const geriatricAlert = generateGeriatricAlert(context.patient_age);
      if (geriatricAlert) alerts.push(geriatricAlert);

      // Add vital sign alerts if provided
      if (context.vital_signs) {
        const vitalAlerts = generateVitalSignAlerts(context.vital_signs);
        alerts.push(...vitalAlerts);

        const sepsisAlert = generateSepsisAlert(context.vital_signs);
        if (sepsisAlert) alerts.push(sepsisAlert);
      }

      // Add chronic disease alerts
      if (context.chronic_diseases) {
        const chronicAlerts = generateChronicDiseaseAlerts(context.chronic_diseases);
        alerts.push(...chronicAlerts);
      }

      mockResponse.alerts = combineAndSortAlerts(alerts);

      return { success: true, data: mockResponse };
    }

    // Real API call
    return withRetry(() =>
      fetchWithTimeout<CDSSResponse>('/v1/cdss/diagnose', {
        method: 'POST',
        body: context,
      })
    );
  },

  /**
   * Get prescription recommendations based on diagnosis
   */
  async recommendPrescription(
    context: PrescriptionRequestContext
  ): Promise<APIResponse<CDSSResponse>> {
    if (!FEATURE_PRESCRIPTION_AI) {
      return {
        success: false,
        error: { code: 'FEATURE_DISABLED', message: 'Prescription AI feature is disabled' },
      };
    }

    log('recommendPrescription', context);

    // Use mock if enabled
    if (USE_MOCK) {
      log('Using mock response for prescription');
      const mockResponse = buildMockPrescriptionResponse(
        context.icd_x,
        context.alergi,
        context.penyakit_kronis
      );

      // Add age-based alerts
      const pediatricAlert = generatePediatricAlert(context.patient_age);
      if (pediatricAlert) mockResponse.alerts.push(pediatricAlert);

      const geriatricAlert = generateGeriatricAlert(context.patient_age);
      if (geriatricAlert) mockResponse.alerts.push(geriatricAlert);

      // Check DDI for recommended medications
      if (context.current_medications && context.current_medications.length > 0) {
        const allDrugs = [
          ...context.current_medications,
          ...mockResponse.medication_recommendations.map((m) => m.nama_obat),
        ];
        const interactions = checkMockDDI(allDrugs);

        if (interactions.length > 0) {
          mockResponse.drug_interactions = interactions;
          interactions.forEach((i) => {
            if (i.severity === 'contraindicated' || i.severity === 'major') {
              mockResponse.alerts.push({
                id: `ddi-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                type: 'ddi',
                severity: 'emergency',
                title: 'Interaksi Obat Berbahaya',
                message: `INTERAKSI OBAT: ${i.drug_a} + ${i.drug_b} - ${i.description}`,
                action: 'Ganti salah satu obat atau konsultasi apoteker',
              });
            } else if (i.severity === 'moderate') {
              mockResponse.alerts.push({
                id: `ddi-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                type: 'ddi',
                severity: 'medium',
                title: 'Interaksi Obat Moderat',
                message: `Interaksi: ${i.drug_a} + ${i.drug_b} - ${i.recommendation}`,
              });
            }
          });
        }
      }

      mockResponse.alerts = combineAndSortAlerts(mockResponse.alerts);

      return { success: true, data: mockResponse };
    }

    // Real API call
    return withRetry(() =>
      fetchWithTimeout<CDSSResponse>('/v1/cdss/prescribe', {
        method: 'POST',
        body: context,
      })
    );
  },

  /**
   * Check drug-drug interactions
   * Uses DDInter 2.0 database (173K+ interactions) for local checking
   */
  async checkDrugInteractions(
    request: DDICheckRequest
  ): Promise<APIResponse<DrugInteraction[]>> {
    if (!FEATURE_DDI_CHECK) {
      return {
        success: false,
        error: { code: 'FEATURE_DISABLED', message: 'DDI check feature is disabled' },
      };
    }

    log('checkDrugInteractions', request);

    // Always use DDInter database (173K+ interactions) for comprehensive coverage
    // This replaces the old 30-entry mock with clinical-grade data
    try {
      await loadDDIDatabase(); // Ensure database is loaded
      const result = await checkDDInterInteractions(request.drugs);

      log(`DDI check: ${result.stats.total} interactions found (${result.stats.major} major, ${result.stats.moderate} moderate)`);

      return {
        success: true,
        data: result.interactions,
      };
    } catch (error) {
      log('DDInter check failed, falling back to mock:', error);

      // Fallback to old mock if DDInter fails
      const interactions = checkMockDDI(request.drugs);
      return { success: true, data: interactions };
    }
  },

  /**
   * Check allergy contraindications
   */
  async checkAllergies(request: AllergyCheckRequest): Promise<APIResponse<CDSSAlert[]>> {
    log('checkAllergies', request);

    // Use mock if enabled
    if (USE_MOCK) {
      log('Using mock response for allergy check');
      const alerts = generateAllergyAlerts(
        request.medications.map((m) => ({
          nama_obat: m,
          dosis: '',
          aturan_pakai: 'Sesudah makan' as const,
          rationale: '',
          safety_check: 'safe' as const,
        })),
        request.allergies
      );
      return { success: true, data: alerts };
    }

    // Real API call
    return withRetry(() =>
      fetchWithTimeout<CDSSAlert[]>('/v1/cdss/check-allergy', {
        method: 'POST',
        body: request,
      })
    );
  },

  /**
   * Calculate pediatric dose
   */
  async calculatePediatricDose(
    request: PediatricDoseRequest
  ): Promise<APIResponse<PediatricDose>> {
    if (!FEATURE_PEDIATRIC_DOSE) {
      return {
        success: false,
        error: { code: 'FEATURE_DISABLED', message: 'Pediatric dose feature is disabled' },
      };
    }

    log('calculatePediatricDose', request);

    // Use mock if enabled
    if (USE_MOCK) {
      log('Using mock response for pediatric dose');

      // Simple Clark's rule calculation
      const adultDose = 500; // Assume 500mg adult dose
      const childDose = (request.patient_weight_kg / 70) * adultDose;

      const mockDose: PediatricDose = {
        drug: request.drug,
        recommended_dose: `${Math.round(childDose)}mg`,
        max_dose: `${Math.round(childDose * 1.5)}mg`,
        formulation: 'Sirup 125mg/5mL',
        method: 'weight_based',
        warnings:
          request.patient_age_months < 24
            ? ['Konsultasikan dengan dokter anak untuk usia < 2 tahun']
            : undefined,
      };

      return { success: true, data: mockDose };
    }

    // Real API call
    return withRetry(() =>
      fetchWithTimeout<PediatricDose>('/v1/cdss/pediatric-dose', {
        method: 'POST',
        body: request,
      })
    );
  },

  /**
   * Health check for API availability
   */
  async healthCheck(): Promise<boolean> {
    if (USE_MOCK) {
      return true;
    }

    try {
      const response = await fetchWithTimeout<{ status: string }>('/health', {
        method: 'GET',
        timeout: 5000,
      });
      return response.success && response.data?.status === 'ok';
    } catch {
      return false;
    }
  },
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Map aturan pakai text to ePuskesmas dropdown value
 */
export function mapAturanPakaiToValue(text: string): string {
  const mapping: Record<string, string> = {
    'Sebelum makan': '1',
    'Sesudah makan': '2',
    'Pemakaian luar': '3',
    'Jika diperlukan': '4',
    'Saat makan': '5',
  };
  return mapping[text] || '2'; // Default: Sesudah makan
}

/**
 * Calculate medication quantity from dosage and duration
 */
export function calculateQuantity(dosis: string, durasi?: string): number {
  // Parse "3x1" = 3 times per day, 1 tablet per dose
  const dosisMatch = dosis.match(/(\d+)\s*x\s*(\d+)/);
  const durasiMatch = durasi?.match(/(\d+)/);

  if (!dosisMatch) return 10; // Default

  const timesPerDay = parseInt(dosisMatch[1], 10);
  const tabletsPerDose = parseInt(dosisMatch[2], 10);
  const days = durasiMatch ? parseInt(durasiMatch[1], 10) : 3;

  return timesPerDay * tabletsPerDose * days;
}

// Export types for convenience
export type { CDSSResponse, DiagnosisRequestContext, PrescriptionRequestContext };
