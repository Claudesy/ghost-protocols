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
import { fillResepForm, scrapeResepForm, initResepPage } from '@/lib/handlers/page-resep';
import type { PageReadyInfo, ResepFillPayload } from '@/utils/types';

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

      if (href.includes('/resep/') || href.includes('/terapi/') || href.includes('prescription')) {
        return 'resep';
      }

      return null;
    };

    // Initialize content script
    const init = () => {
      debug('Initializing content script');

      // Check which page we're on
      currentPage = getCurrentPage();
      debug('Current page detected:', currentPage);

      // Initialize page-specific handlers
      if (currentPage === 'resep') {
        initResepPage();
      }

      // Extract pelayananId from URL if present
      const getPelayananId = (): string | null => {
        const match = window.location.href.match(/\/(\d+)(?:\/|$)/);
        return match ? match[1] : null;
      };

      // Notify background script that we're ready
      sendMessage('pageReady', {
        pageType: (currentPage || 'unknown') as PageReadyInfo['pageType'],
        pelayananId: getPelayananId(),
        url: window.location.href,
      });

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
          // Route to page-specific handler
          if (currentPage === 'resep' && payload.type === 'resep') {
            const result = await fillResepForm(payload.encounter as unknown as ResepFillPayload);
            return result;
          }

          // Fallback to legacy handler for other pages (reads from storage)
          const result = await executePulseFill();
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
            case 'resep':
              scrapedData = await scrapeResepForm();
              break;
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

    // Set up @webext-core/messaging handlers
    // Note: Using type assertion to bypass strict typing for dynamic handler registration
    (['execFill', 'execScrape', 'getPageInfo'] as const).forEach((key) => {
      if (key in messageHandlers) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onMessage(key as any, messageHandlers[key] as any);
        debug(`Registered handler for ${key}`);
      }
    });

    // Native message listener for background → content communication
    // This handles direct messages from background script via browser.tabs.sendMessage
    browser.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      const msg = message as { type?: string; data?: unknown };
      debug('Native message received:', msg);

      if (msg.type === 'execFill' && msg.data) {
        Promise.resolve(messageHandlers.execFill(msg.data))
          .then((result) => {
            debug('Fill result:', result);
            sendResponse(result);
          })
          .catch((error) => {
            debug('Fill error:', error);
            sendResponse({ success: [], failed: [{ field: 'all', error: String(error) }], skipped: [] });
          });
        return true; // Keep channel open for async response
      }

      if (msg.type === 'execScrape' && msg.data) {
        Promise.resolve(messageHandlers.execScrape(msg.data))
          .then((result) => sendResponse(result))
          .catch((error) => sendResponse({ success: false, error: String(error) }));
        return true;
      }

      return false;
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
