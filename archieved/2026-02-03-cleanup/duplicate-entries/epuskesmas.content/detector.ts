/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Page Type Detector
// Based on SENTRA-SPEC-001 v1.2.0 Section 5.2
// Identifies ePuskesmas page type from URL pattern

import type { PageType } from '~/utils/types';

// URL pattern matchers (Section 5.2)
const PAGE_PATTERNS = {
  anamnesa: /\/anamnesa\/(create|edit)\//,
  diagnosa: /\/diagnosa\/(create|edit)\//,
  resep: /\/resep\/(create|edit)\//,
};

/**
 * Detect page type from URL
 * @param url Current page URL
 * @returns PageType or 'unknown' if not a target page
 */
export function detectPage(url: string): PageType {
  for (const [pageType, pattern] of Object.entries(PAGE_PATTERNS)) {
    if (pattern.test(url)) {
      return pageType as PageType;
    }
  }
  return 'unknown';
}

/**
 * Extract pelayanan_id from URL
 * Assumes pattern: /page-type/action/PELAYANAN_ID
 * @param url Current page URL
 * @returns pelayanan_id or null if not found
 */
export function getPelayananId(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/').filter(Boolean);
    
    // Expected pattern: anamnesa/create/123 or resep/edit/456
    if (pathSegments.length >= 3) {
      const possibleId = pathSegments[2];
      // Validate it looks like a numeric ID
      if (/^\d+$/.test(possibleId)) {
        return possibleId;
      }
    }
    
    return null;
  } catch (error) {
    console.error('[Detector] Failed to parse URL:', error);
    return null;
  }
}

/**
 * Check if current page is a target page
 * @returns true if page is anamnesa/diagnosa/resep
 */
export function isTargetPage(): boolean {
  return detectPage(window.location.href) !== 'unknown';
}

/**
 * Wait for DOM to be ready
 * @param selector Optional selector to wait for
 * @param timeout Max wait time in ms
 */
export function waitForDOM(selector?: string, timeout = 5000): Promise<Element | null> {
  return new Promise((resolve) => {
    if (selector) {
      // Wait for specific element
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          observer.disconnect();
          resolve(el);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeout);
    } else {
      // Wait for document.readyState === 'complete'
      if (document.readyState === 'complete') {
        resolve(null);
      } else {
        window.addEventListener('load', () => resolve(null), { once: true });
        setTimeout(() => resolve(null), timeout);
      }
    }
  });
}
