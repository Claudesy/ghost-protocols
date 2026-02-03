/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Sentra Assist - Main Content Script
 * Runs on ePuskesmas pages, handles DOM operations
 *
 * Message Protocol (aligned with utils/messaging.ts):
 * - execFill: Execute auto-fill on current page
 * - execScrape: Scrape data from current page
 * - pageReady: Notify background that page is ready
 */

import { onMessage, sendMessage } from '@/utils/messaging';
import { scrapeAnamnesa } from '@/lib/scraper/anamnesa';
import { executePulseFill } from '@/lib/filler/core';
import { saveEncounter } from '@/utils/storage';
import type { FillResult, PageReadyInfo } from '@/utils/types';

export default defineContentScript({
  matches: ['*://*.epuskesmas.id/*'],
  main() {
    // Page state
    let currentPage: string | null = null;
    let isReady = false;

    // Debug logging
    const debug = (msg: string, data?: unknown) => {
      console.log(`[SentraContent] ${msg}`, data ? data : '');
    };

    // Get current page type
    const getCurrentPage = (): string | null => {
      const href = window.location.href;

      if (href.includes('/anamnesa/') || href.includes('anamnesis')) {
        return 'anamnesa';
      }

      if (href.includes('/soap/') || href.includes('soap')) {
        return 'soap';
      }

      if (href.includes('/prescription/') || href.includes('resep')) {
        return 'prescription';
      }

      return null;
    };

    // Initialize content script
    const init = () => {
      debug('Initializing content script');

      // Check which page we're on
      currentPage = getCurrentPage();
      debug('Current page detected:', currentPage);

      // Notify background script that we're ready
      sendMessage('pageReady', {
        page: currentPage,
        url: window.location.href,
        title: document.title,
      } as PageReadyInfo);

      isReady = true;
    };

    // Message handlers
    const messageHandlers: Record<string, (data: unknown) => unknown> = {
      execFill: async (data: unknown) => {
        const payload = data as { type: string; encounter: Record<string, unknown> };
        debug('Received execFill', payload);

        if (!currentPage) {
          return { success: false, error: 'Unknown page type' };
        }

        try {
          const result = await executePulseFill(currentPage, payload.encounter);

          // Save encounter data after fill
          if (result.success && payload.encounter.patientMr) {
            await saveEncounter(payload.encounter);
          }

          return result;
        } catch (error) {
          debug('Fill error:', error);
          return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
      },

      execScrape: async (data: unknown) => {
        const payload = data as { type: string };
        debug('Received execScrape', payload);

        if (!currentPage) {
          return { success: false, error: 'Unknown page type' };
        }

        try {
          let scrapedData = {};

          switch (currentPage) {
            case 'anamnesa':
              scrapedData = await scrapeAnamnesa();
              break;
            default:
              return { success: false, error: `Scraping not implemented for ${currentPage}` };
          }

          return { success: true, data: scrapedData };
        } catch (error) {
          debug('Scrape error:', error);
          return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
      },

      getPageInfo: () => {
        return {
          page: currentPage,
          url: window.location.href,
          title: document.title,
          isReady,
        };
      },
    };

    // Set up message handlers
    Object.keys(messageHandlers).forEach((key) => {
      onMessage(key, messageHandlers[key]);
      debug(`Registered handler for ${key}`);
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    debug('Content script loaded and waiting for messages');
  },
});
