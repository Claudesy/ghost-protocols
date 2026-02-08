/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Service Worker (Background Script)
// Based on SENTRA-SPEC-001 v1.2.0 Section 4.3
// Handles: message routing, state management, side panel site-lock, CDSS API routing

import { SentraAPI } from '@/lib/api/sentra-api';
import { getCDSSEngineStatus, initCDSSEngine, runDiagnosisEngine } from '@/lib/cdss';
import type {
  AllergyCheckRequest,
  DiagnosisRequestContext,
  PediatricDoseRequest,
  PrescriptionRequestContext,
} from '@/types/api';
import { onMessage, sendMessage } from '~/utils/messaging';
import {
  createEmptyEncounter,
  getEncounter,
  saveEncounter,
  updateEncounter,
} from '~/utils/storage';
import type { Encounter, PageReadyInfo, ScrapePayload } from '~/utils/types';

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

  console.log(
    '[Background] chrome object:',
    typeof (globalThis as any).chrome !== 'undefined' ? 'exists' : 'undefined'
  );

  if (sidePanel?.setPanelBehavior) {
    sidePanel
      .setPanelBehavior({ openPanelOnActionClick: true })
      .then(() => console.log('[Background] setPanelBehavior SUCCESS'))
      .catch((e: unknown) => console.error('[Background] setPanelBehavior FAILED:', e));
  } else {
    console.error('[Background] sidePanel API not available');
    console.error(
      '[Background] globalThis.chrome?.sidePanel:',
      (globalThis as any).chrome?.sidePanel
    );
    console.error(
      '[Background] globalThis.browser?.sidePanel:',
      (globalThis as any).browser?.sidePanel
    );
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
  onMessage('fillResep', async (message) => {
    // Extract actual payload from message.data (webext-core/messaging wraps it)
    const resepPayload = message.data;
    console.log('[Background] Fill Resep request:', resepPayload);

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
          encounter: resepPayload,
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

  // Panel → Worker: Fill Anamnesa command (TTV + Keluhan)
  onMessage('fillAnamnesa', async (message) => {
    // Extract actual payload from message.data (webext-core/messaging wraps it)
    const anamnesaPayload = message.data;
    console.log('[Background] Fill Anamnesa request:', anamnesaPayload);

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

    console.log('[Background] Forwarding Anamnesa fill to tab:', tabId);

    // Forward to content script using native tabs.sendMessage
    try {
      const result = await browser.tabs.sendMessage(tabId, {
        type: 'execFill',
        data: {
          type: 'anamnesa',
          encounter: anamnesaPayload,
        },
      });
      console.log('[Background] Anamnesa fill result:', result);
      return result;
    } catch (error) {
      console.error('[Background] Anamnesa fill failed:', error);
      return {
        success: [],
        failed: [{ field: 'all', error: String(error) }],
        skipped: [],
      };
    }
  });

  // Panel → Worker: Fill Diagnosa command
  onMessage('fillDiagnosa', async (message) => {
    // Extract actual payload from message.data (webext-core/messaging wraps it)
    const diagnosaPayload = message.data;
    console.log('[Background] Fill Diagnosa request:', diagnosaPayload);

    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const tabId = tabs[0]?.id;

    if (!tabId) {
      return {
        success: [],
        failed: [{ field: 'all', error: 'No active tab' }],
        skipped: [],
      };
    }

    try {
      const result = await browser.tabs.sendMessage(tabId, {
        type: 'execFill',
        data: {
          type: 'diagnosa',
          encounter: diagnosaPayload,
        },
      });
      return result;
    } catch (error) {
      return {
        success: [],
        failed: [{ field: 'all', error: String(error) }],
        skipped: [],
      };
    }
  });

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
      // If encounter storage is missing keluhan but context has it, inject from context
      if (!encounter.anamnesa?.keluhan_utama && context.keluhan_utama) {
        console.log('[Background] Injecting keluhan_utama from request context into encounter');
        if (!encounter.anamnesa) {
          encounter.anamnesa = {
            keluhan_utama: context.keluhan_utama,
            keluhan_tambahan: '',
            lama_sakit: { thn: 0, bln: 0, hr: 0 },
            riwayat_penyakit: null,
            alergi: { obat: [], makanan: [], udara: [], lainnya: [] },
          };
        } else {
          encounter.anamnesa.keluhan_utama = context.keluhan_utama;
        }
        await saveEncounter(encounter);
      }

      if (!encounter.anamnesa?.keluhan_utama) {
        console.warn('[Background] Encounter missing keluhan_utama and no context fallback');
        return {
          success: false,
          error: {
            code: 'MISSING_DATA',
            message: 'Keluhan utama tidak tersedia. Isi keluhan di form anamnesa.',
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
  // Field Diagnostic Handler
  // ========================================

  // Panel → Worker: Scan fields on current page
  onMessage('scanFields', async () => {
    console.log('[Background] Scan fields request');

    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const tabId = tabs[0]?.id;

    if (!tabId) {
      return { success: false, error: 'No active tab', fields: [] };
    }

    try {
      const result = await browser.tabs.sendMessage(tabId, {
        type: 'scanFields',
      });
      console.log('[Background] Scan result:', result);
      return result;
    } catch (error) {
      console.error('[Background] Scan failed:', error);
      return { success: false, error: String(error), fields: [] };
    }
  });

  // Panel → Content: Scan medical history from page
  onMessage('scanMedicalHistory', async () => {
    console.log('[Background] Scan medical history request');

    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const tabId = tabs[0]?.id;

    if (!tabId) {
      return { success: false, error: 'No active tab', history: [] };
    }

    try {
      const result = await browser.tabs.sendMessage(tabId, {
        type: 'scanMedicalHistory',
      });
      console.log('[Background] Medical history result:', result);
      return result;
    } catch (error) {
      console.error('[Background] Medical history scan failed:', error);
      return { success: false, error: String(error), history: [] };
    }
  });

  // Panel → Content: Scan visit history from ePuskesmas page
  onMessage('scanVisitHistory', async () => {
    const bgDiag: string[] = [];
    const d = (msg: string) => {
      bgDiag.push(msg);
      console.log('[BG:scanVisitHistory]', msg);
    };

    // 3-strategy tab finding (same robust approach as scanMedicalHistory)
    let tabId: number | undefined;
    let tabUrl = 'unknown';

    // Strategy 1: Active tab if it's ePuskesmas
    const activeTabs = await browser.tabs.query({ active: true, currentWindow: true });
    d(`S1: activeTabs=${activeTabs.length} url=${activeTabs[0]?.url?.slice(0, 60) || 'none'}`);
    if (activeTabs[0]?.url?.includes('epuskesmas.id')) {
      tabId = activeTabs[0].id;
      tabUrl = activeTabs[0].url || 'unknown';
      d(`S1_HIT: epuskesmas tab=${tabId}`);
    }

    // Strategy 2: Search ALL tabs for ePuskesmas
    if (!tabId) {
      const epTabs = await browser.tabs.query({ url: '*://*.epuskesmas.id/*' });
      d(`S2: epuskesmas tabs found=${epTabs.length}`);
      if (epTabs[0]?.id) {
        tabId = epTabs[0].id;
        tabUrl = epTabs[0].url || 'unknown';
        d(`S2_HIT: tab=${tabId} url=${tabUrl.slice(0, 60)}`);
      }
    }

    // Strategy 3: Fallback to any active tab
    if (!tabId && activeTabs[0]?.id) {
      tabId = activeTabs[0].id;
      tabUrl = activeTabs[0].url || 'unknown';
      d(`S3_FALLBACK: tab=${tabId}`);
    }

    if (!tabId) {
      d('NO_TAB: all 3 strategies failed');
      return { success: false, error: 'No ePuskesmas tab found', visits: [], diagnostics: bgDiag };
    }

    try {
      d(`SEND: tab=${tabId} url=${tabUrl.slice(0, 60)}`);
      const result = await browser.tabs.sendMessage(tabId, {
        type: 'scanVisitHistory',
        timestamp: Date.now(),
      });
      d(`RECV: success=${result?.success} visits=${result?.visits?.length ?? 0}`);
      return {
        ...result,
        diagnostics: [...bgDiag, ...(result?.diagnostics || [])],
      };
    } catch (error) {
      d(`SEND_ERROR: ${String(error)}`);
      return {
        success: false,
        error: String(error),
        visits: [],
        diagnostics: [...bgDiag, 'Content script unreachable or threw'],
      };
    }
  });

  // Content → Worker → Panel: Visit history scraped acknowledgment
  onMessage('visitHistoryScraped', async (message) => {
    const data = message.data;
    console.log(`[Background] visitHistoryScraped received: ${data.visits?.length || 0} visits`);

    try {
      // Forward to side panel
      await sendMessage('visitHistoryScraped', data);
      console.log('[Background] visitHistoryScraped forwarded to panel');
    } catch (error) {
      console.error('[Background] Failed to forward visitHistoryScraped:', error);
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
        model: 'gemini-1.5-flash-002',
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

  // ========================================
  // NATIVE MESSAGE LISTENER (for sidepanel native chrome.runtime.sendMessage)
  // ========================================
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const msg = message as { type?: string; data?: unknown };
    console.log('[Background] Native message received:', msg.type, 'from:', sender.url);

    // Handle scanFields
    if (msg.type === 'scanFields') {
      (async () => {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const tabId = tabs[0]?.id;
        if (!tabId) {
          sendResponse({ success: false, error: 'No active tab', fields: [] });
          return;
        }
        try {
          const result = await browser.tabs.sendMessage(tabId, { type: 'scanFields' });
          sendResponse(result);
        } catch (error) {
          sendResponse({ success: false, error: String(error), fields: [] });
        }
      })();
      return true; // Keep channel open for async
    }

    // Handle scanMedicalHistory
    if (msg.type === 'scanMedicalHistory') {
      (async () => {
        console.log('[Background] scanMedicalHistory received');

        // Try multiple strategies to find ePuskesmas tab
        let tabId: number | undefined;

        // Strategy 1: Active tab in current window
        const activeTabs = await browser.tabs.query({ active: true, currentWindow: true });
        if (activeTabs[0]?.url?.includes('epuskesmas.id')) {
          tabId = activeTabs[0].id;
          console.log('[Background] Found ePuskesmas in active tab:', tabId);
        }

        // Strategy 2: Search all tabs for ePuskesmas
        if (!tabId) {
          const allTabs = await browser.tabs.query({ url: '*://*.epuskesmas.id/*' });
          if (allTabs[0]?.id) {
            tabId = allTabs[0].id;
            console.log('[Background] Found ePuskesmas tab by URL:', tabId);
          }
        }

        // Strategy 3: Fall back to any active tab
        if (!tabId && activeTabs[0]?.id) {
          tabId = activeTabs[0].id;
          console.log('[Background] Fallback to active tab:', tabId);
        }

        if (!tabId) {
          console.error('[Background] No ePuskesmas tab found');
          sendResponse({ success: false, error: 'No ePuskesmas tab found', history: [] });
          return;
        }

        try {
          console.log('[Background] Sending scanMedicalHistory to tab:', tabId);
          const result = await browser.tabs.sendMessage(tabId, { type: 'scanMedicalHistory' });
          console.log('[Background] scanMedicalHistory result:', result);
          sendResponse(result);
        } catch (error) {
          console.error('[Background] scanMedicalHistory failed:', error);
          sendResponse({ success: false, error: String(error), history: [] });
        }
      })();
      return true; // Keep channel open for async
    }

    // Handle fillAnamnesa
    if (msg.type === 'fillAnamnesa') {
      (async () => {
        console.log('🔴🔴🔴 SENTRA DEBUG: Background received fillAnamnesa');
        console.log('[Background] Native fillAnamnesa request:', msg.data);
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const tabId = tabs[0]?.id;
        console.log('🔴🔴🔴 SENTRA DEBUG: Active tab ID:', tabId);
        if (!tabId) {
          console.log('🔴🔴🔴 SENTRA DEBUG: No active tab found!');
          sendResponse({
            success: [],
            failed: [{ field: 'all', error: 'No active tab' }],
            skipped: [],
          });
          return;
        }
        try {
          console.log('🔴🔴🔴 SENTRA DEBUG: Sending execFill to tab', tabId);
          const result = await browser.tabs.sendMessage(tabId, {
            type: 'execFill',
            data: { type: 'anamnesa', encounter: msg.data },
          });
          console.log('🔴🔴🔴 SENTRA DEBUG: Content script returned:', result);
          console.log('[Background] Native fillAnamnesa result:', result);
          sendResponse(result);
        } catch (error) {
          console.error('[Background] Native fillAnamnesa failed:', error);
          sendResponse({
            success: [],
            failed: [{ field: 'all', error: String(error) }],
            skipped: [],
          });
        }
      })();
      return true; // Keep channel open for async
    }

    // Handle triggerRiwayatClick — calls showRiwayatPelayanan() in page's MAIN world
    // Content script cannot call page functions due to isolated world + CSP blocking
    // chrome.scripting.executeScript with world: 'MAIN' is the official bypass
    if (msg.type === 'triggerRiwayatClick') {
      const { dataId } = msg as { type: string; dataId: string };
      (async () => {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const tabId = tabs[0]?.id;
        if (!tabId) {
          sendResponse({ success: false, error: 'No active tab' });
          return;
        }
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const chrome = (globalThis as any).chrome;
          await chrome.scripting.executeScript({
            target: { tabId },
            world: 'MAIN',
            func: (id: string) => {
              const el = document.querySelector(`a[data-id="${id}"]`);
              if (el && typeof (window as any).showRiwayatPelayanan === 'function') {
                (window as any).showRiwayatPelayanan(el);
              }
            },
            args: [dataId],
          });
          console.log(`[Background] triggerRiwayatClick executed for data-id=${dataId}`);
          sendResponse({ success: true });
        } catch (error) {
          console.error('[Background] triggerRiwayatClick failed:', error);
          sendResponse({ success: false, error: String(error) });
        }
      })();
      return true;
    }

    return false; // Not handled
  });

  console.log('[Background] Message handlers registered (including CDSS Engine + Native listener)');
});
