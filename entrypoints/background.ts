/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Service Worker (Background Script)
// Based on SENTRA-SPEC-001 v1.2.0 Section 4.3
// Handles: message routing, state management, side panel site-lock, CDSS API routing

import { onMessage, sendMessage } from '~/utils/messaging';
import {
  getEncounter,
  saveEncounter,
  updateEncounter,
  createEmptyEncounter,
} from '~/utils/storage';
import type { Encounter, PageReadyInfo, ScrapePayload } from '~/utils/types';
import { SentraAPI } from '@/lib/api/sentra-api';
import type {
  DiagnosisRequestContext,
  PrescriptionRequestContext,
  AllergyCheckRequest,
  PediatricDoseRequest,
} from '@/types/api';
import {
  runDiagnosisEngine,
  initCDSSEngine,
  getCDSSEngineStatus,
} from '@/lib/cdss';

// =============================================================================
// SIDE PANEL HELPER
// Chrome's sidePanel API is not in webextension-polyfill
// Access it directly from chrome/browser object with fallback
// =============================================================================
interface SidePanelAPI {
  setPanelBehavior: (options: { openPanelOnActionClick: boolean }) => Promise<void>;
}

function getSidePanel(): SidePanelAPI | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chromeGlobal = (globalThis as any).chrome;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const browserGlobal = (globalThis as any).browser;
  return chromeGlobal?.sidePanel || browserGlobal?.sidePanel;
}

export default defineBackground(() => {
  console.log('[Background] Sentra Assist service worker initialized');

  // ========================================
  // CDSS Engine Initialization
  // ========================================

  // Initialize CDSS engine (async, non-blocking)
  initCDSSEngine()
    .then((ready) => {
      console.log('[Background] CDSS Engine initialized:', ready ? 'SUCCESS' : 'FAILED');
    })
    .catch((error) => {
      console.error('[Background] CDSS Engine initialization error:', error);
    });

  // ========================================
  // Side Panel Setup - SIMPLIFIED FOR DEBUG
  // ========================================
  const sidePanel = getSidePanel();
  console.log('[Background] sidePanel object:', sidePanel);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.log('[Background] chrome object:', typeof (globalThis as any).chrome !== 'undefined' ? 'exists' : 'undefined');

  if (sidePanel?.setPanelBehavior) {
    sidePanel
      .setPanelBehavior({ openPanelOnActionClick: true })
      .then(() => console.log('[Background] setPanelBehavior SUCCESS'))
      .catch((e: unknown) => console.error('[Background] setPanelBehavior FAILED:', e));
  } else {
    console.error('[Background] sidePanel API not available');
    console.error('[Background] globalThis.chrome?.sidePanel:', (globalThis as any).chrome?.sidePanel);
    console.error('[Background] globalThis.browser?.sidePanel:', (globalThis as any).browser?.sidePanel);
  }

  // ========================================
  // Message Handlers
  // ========================================

  // Content → Worker: Page ready notification
  onMessage('pageReady', async (message) => {
    // Extract data from message - @webext-core/messaging passes data directly
    const info = message.data as PageReadyInfo;
    console.log('[Background] Page ready:', info);

    // Load or create encounter for this pelayanan_id
    if (info.pelayananId) {
      let encounter = await getEncounter();

      // Create new encounter if pelayanan_id changed
      if (!encounter || encounter.id !== info.pelayananId) {
        console.log('[Background] Creating new encounter:', info.pelayananId);
        encounter = createEmptyEncounter(info.pelayananId, 'PATIENT_TBD');
        await saveEncounter(encounter);
      }
    }

    try {
      await sendMessage('pageReady', info);
    } catch (error) {
      console.warn('[Background] Failed to forward pageReady to panel:', error);
    }
  });

  // Content → Worker: Scrape result
  onMessage('scrapeResult', async (message) => {
    // Extract data from message
    const scrapeData = message.data as ScrapePayload;
    console.log('[Background] Scrape result received:', scrapeData);

    const encounter = await getEncounter();
    if (!encounter) {
      console.warn('[Background] No encounter to update');
      return;
    }

    // Merge scraped data into encounter
    const updated: Partial<Encounter> = {};

    if (scrapeData.pageType === 'anamnesa' && scrapeData.data) {
      updated.anamnesa = scrapeData.data as unknown as Encounter['anamnesa'];
    } else if (scrapeData.pageType === 'diagnosa' && scrapeData.data) {
      updated.diagnosa = scrapeData.data as unknown as Encounter['diagnosa'];
    } else if (scrapeData.pageType === 'resep' && scrapeData.data) {
      updated.resep = scrapeData.data as unknown as Encounter['resep'];
    }

    await updateEncounter(updated);
    console.log('[Background] Encounter updated from scrape');
  });

  // Panel → Worker: Fill command
  onMessage('fillResep', async (payload) => {
    console.log('[Background] Fill Resep request:', payload);

    // Get active tab
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const tabId = tabs[0]?.id;

    if (!tabId) {
      console.error('[Background] No active tab found');
      return {
        success: [],
        failed: [{ field: 'all', error: 'No active tab' }],
        skipped: [],
      };
    }

    console.log('[Background] Forwarding to tab:', tabId);

    // Forward to content script using native tabs.sendMessage
    try {
      const result = await browser.tabs.sendMessage(tabId, {
        type: 'execFill',
        data: {
          type: 'resep',
          encounter: payload,
        },
      });
      console.log('[Background] Fill result:', result);
      return result;
    } catch (error) {
      console.error('[Background] Fill failed:', error);
      return {
        success: [],
        failed: [{ field: 'all', error: String(error) }],
        skipped: [],
      };
    }
  });

  // Similar handlers for fillAnamnesa and fillDiagnosa would follow

  // ========================================
  // CDSS AI API Handlers
  // ========================================

  // Panel → Worker: Get diagnosis suggestions (REAL CDSS ENGINE)
  onMessage('getSuggestions', async (message) => {
    // Extract context from message
    const context = message.data as DiagnosisRequestContext;
    console.log('[Background] AI Diagnosis suggestion request');

    try {
      // Get current encounter
      const encounter = await getEncounter();

      if (!encounter) {
        console.warn('[Background] No active encounter');
        // Fallback to mock API if no encounter
        const result = await SentraAPI.suggestDiagnosis(context);
        return result;
      }

      // Ensure encounter has anamnesa data for AI analysis
      if (!encounter.anamnesa?.keluhan_utama) {
        console.warn('[Background] Encounter missing keluhan_utama');
        return {
          success: false,
          error: {
            code: 'MISSING_DATA',
            message: 'Keluhan utama tidak tersedia. Scrape halaman anamnesa terlebih dahulu.',
          },
        };
      }

      // Run REAL CDSS Engine
      console.log('[Background] Running CDSS Engine for encounter:', encounter.id);
      const engineResult = await runDiagnosisEngine(encounter);

      // Transform engine result to API response format
      return {
        success: true,
        data: {
          diagnosis_suggestions: engineResult.suggestions.map((s, index) => ({
            rank: index + 1,
            icd_x: s.icd10_code,
            nama: s.diagnosis_name,
            confidence: s.confidence,
            rationale: s.reasoning,
            red_flags: s.red_flags || [],
          })),
          medication_recommendations: [], // TODO: Implement separately
          alerts: engineResult.alerts.map((a) => ({
            id: a.id,
            type: a.type,
            severity: a.severity,
            title: a.title,
            message: a.message,
            icd_codes: a.icd_codes,
            action: a.action,
          })),
          meta: {
            processing_time_ms: engineResult.processing_time_ms,
            model_version: engineResult.model_version,
            timestamp: new Date().toISOString(),
            is_mock: engineResult.source === 'local',
          },
        },
      };
    } catch (error) {
      console.error('[Background] CDSS Engine failed:', error);
      return {
        success: false,
        error: {
          code: 'ENGINE_ERROR',
          message: error instanceof Error ? error.message : 'Unknown engine error',
        },
      };
    }
  });

  // Panel → Worker: Get prescription recommendations
  onMessage('getRecommendations', async (message) => {
    const context = message.data as PrescriptionRequestContext;
    console.log('[Background] AI Prescription recommendation request');

    try {
      const result = await SentraAPI.recommendPrescription(context);
      console.log('[Background] Prescription recommendations received:', result.success);
      return result;
    } catch (error) {
      console.error('[Background] Prescription recommendation failed:', error);
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  });

  // Panel → Worker: Check drug interactions
  onMessage('checkInteractions', async (message) => {
    const drugs = message.data as string[];
    console.log('[Background] DDI check request for:', drugs);

    try {
      const result = await SentraAPI.checkDrugInteractions({ drugs });
      console.log('[Background] DDI check completed:', result.success);
      return result;
    } catch (error) {
      console.error('[Background] DDI check failed:', error);
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  });

  // Panel → Worker: Check allergy contraindications
  onMessage('checkAllergies', async (message) => {
    const context = message.data as AllergyCheckRequest;
    console.log('[Background] Allergy check request');

    try {
      const result = await SentraAPI.checkAllergies(context);
      console.log('[Background] Allergy check completed:', result.success);
      return result;
    } catch (error) {
      console.error('[Background] Allergy check failed:', error);
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  });

  // Panel → Worker: Calculate pediatric dose
  onMessage('calculatePediatricDose', async (message) => {
    const context = message.data as PediatricDoseRequest;
    console.log('[Background] Pediatric dose calculation request');

    try {
      const result = await SentraAPI.calculatePediatricDose(context);
      console.log('[Background] Pediatric dose calculated:', result.success);
      return result;
    } catch (error) {
      console.error('[Background] Pediatric dose calculation failed:', error);
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  });

  // ========================================
  // CDSS Engine Status Handlers
  // ========================================

  // Panel → Worker: Get CDSS status
  onMessage('getCDSSStatus', async () => {
    console.log('[Background] CDSS status request');

    try {
      const status = await getCDSSEngineStatus();
      console.log('[Background] CDSS status:', status);
      return status;
    } catch (error) {
      console.error('[Background] CDSS status check failed:', error);
      return {
        ready: false,
        icd10_count: 0,
        model: 'deepseek-r1-0528',
        audit_entries: 0,
        last_error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  });

  // Panel → Worker: Initialize CDSS (manual trigger)
  onMessage('initializeCDSS', async () => {
    console.log('[Background] CDSS initialization request');

    try {
      const ready = await initCDSSEngine();
      console.log('[Background] CDSS initialized:', ready);
      return ready;
    } catch (error) {
      console.error('[Background] CDSS initialization failed:', error);
      return false;
    }
  });

  console.log('[Background] Message handlers registered (including CDSS Engine)');
});
