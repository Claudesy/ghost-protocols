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
import type { Encounter, PageReadyInfo } from '~/utils/types';
import { SentraAPI } from '@/lib/api/sentra-api';

// =============================================================================
// SIDE PANEL HELPER
// Chrome's sidePanel API is not in webextension-polyfill
// Access it directly from chrome object with fallback
// =============================================================================
function getSidePanel(): typeof chrome.sidePanel | undefined {
  const chromeGlobal = (globalThis as unknown as { chrome?: typeof chrome }).chrome;
  const browserGlobal = (globalThis as unknown as { browser?: typeof chrome }).browser;
  return chromeGlobal?.sidePanel || browserGlobal?.sidePanel;
}

export default defineBackground(() => {
  console.log('[Background] Sentra Assist service worker initialized');

  // ========================================
  // Side Panel Setup - SIMPLIFIED FOR DEBUG
  // ========================================
  const sidePanel = getSidePanel();
  console.log('[Background] sidePanel object:', sidePanel);
  console.log('[Background] chrome object:', typeof chrome !== 'undefined' ? 'exists' : 'undefined');

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
  onMessage('pageReady', async (info: PageReadyInfo) => {
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
  onMessage('scrapeResult', async (data) => {
    console.log('[Background] Scrape result received:', data);

    const encounter = await getEncounter();
    if (!encounter) {
      console.warn('[Background] No encounter to update');
      return;
    }

    // Merge scraped data into encounter
    const updated: Partial<Encounter> = {};

    if (data.pageType === 'anamnesa') {
      updated.anamnesa = data.data as Encounter['anamnesa'];
    } else if (data.pageType === 'diagnosa') {
      updated.diagnosa = data.data as Encounter['diagnosa'];
    } else if (data.pageType === 'resep') {
      updated.resep = data.data as Encounter['resep'];
    }

    await updateEncounter(updated);
    console.log('[Background] Encounter updated from scrape');
  });

  // Panel → Worker: Fill command
  onMessage('fillResep', async (payload) => {
    console.log('[Background] Fill Resep request');

    // Get active tab
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (!tabs[0]?.id) {
      return {
        success: [],
        failed: [{ field: 'all', error: 'No active tab' }],
        skipped: [],
      };
    }

    // Forward to content script
    try {
      const result = await sendMessage('execFill', {
        pageType: 'resep',
        payload,
      }, tabs[0].id);
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

  // Panel → Worker: Get diagnosis suggestions
  onMessage('getSuggestions', async (context) => {
    console.log('[Background] AI Diagnosis suggestion request');

    try {
      const result = await SentraAPI.suggestDiagnosis(context);
      console.log('[Background] Diagnosis suggestions received:', result.success);
      return result;
    } catch (error) {
      console.error('[Background] Diagnosis suggestion failed:', error);
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  });

  // Panel → Worker: Get prescription recommendations
  onMessage('getRecommendations', async (context) => {
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
  onMessage('checkInteractions', async (drugs) => {
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
  onMessage('checkAllergies', async (context) => {
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
  onMessage('calculatePediatricDose', async (context) => {
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

  console.log('[Background] Message handlers registered (including CDSS API)');
});
