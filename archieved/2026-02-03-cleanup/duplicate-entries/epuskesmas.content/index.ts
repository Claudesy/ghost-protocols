/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Content Script Entry
// Based on SENTRA-SPEC-001 v1.2.0 Section 4.2
// Runs on kotakediri.epuskesmas.id in isolated world

import { detectPage, getPelayananId } from './detector';
import { sendMessage } from '~/utils/messaging';
import type { PageType } from '~/utils/types';

export default defineContentScript({
  matches: ['https://kotakediri.epuskesmas.id/*'],
  runAt: 'document_idle',
  main(ctx) {
    console.log('[Content] Sentra Assist content script loaded');

    // Detect page type
    const pageType: PageType = detectPage(window.location.href);
    console.log('[Content] Detected page type:', pageType);

    if (pageType === 'unknown') {
      console.log('[Content] Not a target page, exiting');
      return;
    }

    // Extract pelayanan_id
    const pelayananId = getPelayananId(window.location.href);
    console.log('[Content] Pelayanan ID:', pelayananId);

    // Report page ready to service worker
    sendMessage('pageReady', {
      pageType,
      pelayananId,
      url: window.location.href,
    }).catch((error) => {
      console.error('[Content] Failed to send pageReady:', error);
    });

    // Initialize page-specific handlers
    // TODO: Call page-specific init functions based on pageType
    console.log('[Content] Page handlers initialization pending');
  },
});
