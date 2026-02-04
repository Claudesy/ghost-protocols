/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Type-Safe Messaging Protocol
 * Bidirectional communication between Content Script ↔ Background ↔ Side Panel
 *
 * @module utils/messaging-protocol
 */

import type {
  PageType,
  AnamnesaData,
  DiagnosisData,
  TherapyData,
  PatientContext,
} from '@/lib/store';
import type { DiagnosisSuggestion } from '@/types/api';
import type { FillResult } from '@/lib/filler/filler-core';

// =============================================================================
// MESSAGE TYPES
// =============================================================================

/**
 * Content Script → Side Panel: Page detected
 */
export interface PageDetectedMessage {
  type: 'PAGE_DETECTED';
  payload: {
    pageType: PageType;
    pelayananId: string | null;
    url: string;
    timestamp: string;
  };
}

/**
 * Content Script → Side Panel: Data scraped from page
 */
export interface DataScrapedMessage {
  type: 'DATA_SCRAPED';
  payload: {
    pageType: PageType;
    data: AnamnesaData | DiagnosisData | TherapyData | PatientContext;
    timestamp: string;
  };
}

/**
 * Side Panel → Content Script: Request scrape
 */
export interface RequestScrapeMessage {
  type: 'REQUEST_SCRAPE';
  payload: {
    pageType: PageType;
  };
}

/**
 * Side Panel → Content Script: Request form fill
 */
export interface RequestFillMessage {
  type: 'REQUEST_FILL';
  payload: {
    pageType: PageType;
    data: Record<string, unknown>; // Flexible payload for different page types
  };
}

/**
 * Content Script → Side Panel: Fill result
 */
export interface FillResultMessage {
  type: 'FILL_RESULT';
  payload: {
    pageType: PageType;
    results: FillResult[];
    success: boolean;
    timestamp: string;
  };
}

/**
 * Side Panel → Background: Request diagnosis analysis
 */
export interface RequestDiagnosisMessage {
  type: 'REQUEST_DIAGNOSIS';
  payload: {
    complaint: string;
    additionalComplaints?: string;
    patientAge: number;
    patientGender: 'M' | 'F';
    vitals?: Record<string, unknown>;
    allergies?: string[];
    chronicDiseases?: string[];
  };
}

/**
 * Background → Side Panel: Diagnosis result
 */
export interface DiagnosisResultMessage {
  type: 'DIAGNOSIS_RESULT';
  payload: {
    success: boolean;
    recommendations?: DiagnosisSuggestion[];
    error?: string;
    timestamp: string;
  };
}

/**
 * Bidirectional: Error message
 */
export interface ErrorMessage {
  type: 'ERROR';
  payload: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
    timestamp: string;
  };
}

/**
 * Bidirectional: Ping/Pong for connection check
 */
export interface PingMessage {
  type: 'PING';
  payload: {
    sender: 'content' | 'background' | 'sidepanel';
    timestamp: string;
  };
}

/**
 * PongMessage interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-02-04
 */

export interface PongMessage {
  type: 'PONG';
  payload: {
    sender: 'content' | 'background' | 'sidepanel';
    timestamp: string;
  };
}

// =============================================================================
// UNION TYPE
// =============================================================================

export type Message =
  | PageDetectedMessage
  | DataScrapedMessage
  | RequestScrapeMessage
  | RequestFillMessage
  | FillResultMessage
  | RequestDiagnosisMessage
  | DiagnosisResultMessage
  | ErrorMessage
  | PingMessage
  | PongMessage;

// =============================================================================
// TYPE GUARDS
// =============================================================================

export function isPageDetectedMessage(msg: unknown): msg is PageDetectedMessage {
  return typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'PAGE_DETECTED';
}

/**
 * isDataScrapedMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isDataScrapedMessage(msg: unknown): msg is DataScrapedMessage {
  return typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'DATA_SCRAPED';
}

/**
 * isRequestScrapeMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isRequestScrapeMessage(msg: unknown): msg is RequestScrapeMessage {
  return typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'REQUEST_SCRAPE';
}

/**
 * isRequestFillMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isRequestFillMessage(msg: unknown): msg is RequestFillMessage {
  return typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'REQUEST_FILL';
}

/**
 * isFillResultMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isFillResultMessage(msg: unknown): msg is FillResultMessage {
  return typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'FILL_RESULT';
}

/**
 * isRequestDiagnosisMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isRequestDiagnosisMessage(msg: unknown): msg is RequestDiagnosisMessage {
  return (
    typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'REQUEST_DIAGNOSIS'
  );
}

/**
 * isDiagnosisResultMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isDiagnosisResultMessage(msg: unknown): msg is DiagnosisResultMessage {
  return (
    typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'DIAGNOSIS_RESULT'
  );
}

/**
 * isErrorMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isErrorMessage(msg: unknown): msg is ErrorMessage {
  return typeof msg === 'object' && msg !== null && 'type' in msg && msg.type === 'ERROR';
}

// =============================================================================
// MESSAGE BUILDERS
// =============================================================================

export function createPageDetectedMessage(
  pageType: PageType,
  pelayananId: string | null,
  url: string
): PageDetectedMessage {
  return {
    type: 'PAGE_DETECTED',
    payload: {
      pageType,
      pelayananId,
      url,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * createDataScrapedMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createDataScrapedMessage(
  pageType: PageType,
  data: AnamnesaData | DiagnosisData | TherapyData | PatientContext
): DataScrapedMessage {
  return {
    type: 'DATA_SCRAPED',
    payload: {
      pageType,
      data,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * createRequestScrapeMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createRequestScrapeMessage(pageType: PageType): RequestScrapeMessage {
  return {
    type: 'REQUEST_SCRAPE',
    payload: { pageType },
  };
}

/**
 * createRequestFillMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createRequestFillMessage(
  pageType: PageType,
  data: Record<string, unknown>
): RequestFillMessage {
  return {
    type: 'REQUEST_FILL',
    payload: { pageType, data },
  };
}

/**
 * createFillResultMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createFillResultMessage(
  pageType: PageType,
  results: FillResult[],
  success: boolean
): FillResultMessage {
  return {
    type: 'FILL_RESULT',
    payload: {
      pageType,
      results,
      success,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * createRequestDiagnosisMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createRequestDiagnosisMessage(
  complaint: string,
  patientAge: number,
  patientGender: 'M' | 'F',
  options?: {
    additionalComplaints?: string;
    vitals?: Record<string, unknown>;
    allergies?: string[];
    chronicDiseases?: string[];
  }
): RequestDiagnosisMessage {
  return {
    type: 'REQUEST_DIAGNOSIS',
    payload: {
      complaint,
      patientAge,
      patientGender,
      ...options,
    },
  };
}

/**
 * createDiagnosisResultMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createDiagnosisResultMessage(
  success: boolean,
  recommendations?: DiagnosisSuggestion[],
  error?: string
): DiagnosisResultMessage {
  return {
    type: 'DIAGNOSIS_RESULT',
    payload: {
      success,
      recommendations,
      error,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * createErrorMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createErrorMessage(
  code: string,
  message: string,
  details?: Record<string, unknown>
): ErrorMessage {
  return {
    type: 'ERROR',
    payload: {
      code,
      message,
      details,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * createPingMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createPingMessage(sender: 'content' | 'background' | 'sidepanel'): PingMessage {
  return {
    type: 'PING',
    payload: {
      sender,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * createPongMessage
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function createPongMessage(sender: 'content' | 'background' | 'sidepanel'): PongMessage {
  return {
    type: 'PONG',
    payload: {
      sender,
      timestamp: new Date().toISOString(),
    },
  };
}

// =============================================================================
// MESSAGING HELPERS
// =============================================================================

/**
 * Send message to background script
 */
export async function sendToBackground<T = unknown>(message: Message): Promise<T> {
  return new Promise((resolve, reject) => {
    browser.runtime.sendMessage(message, (response) => {
      if (browser.runtime.lastError) {
        reject(new Error(browser.runtime.lastError.message));
      } else {
        resolve(response as T);
      }
    });
  });
}

/**
 * Send message to active tab's content script
 */
export async function sendToContentScript<T = unknown>(message: Message): Promise<T> {
  return new Promise((resolve, reject) => {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]?.id) {
        reject(new Error('No active tab found'));
        return;
      }

      browser.tabs.sendMessage(tabs[0].id, message, (response) => {
        if (browser.runtime.lastError) {
          reject(new Error(browser.runtime.lastError.message));
        } else {
          resolve(response as T);
        }
      });
    });
  });
}

/**
 * Listen for messages with type filtering
 */
export function onMessage<T extends Message>(
  messageType: T['type'],
  handler: (message: T) => void | Promise<void>
): void {
  browser.runtime.onMessage.addListener((message: unknown, _sender, sendResponse) => {
    if (
      typeof message === 'object' &&
      message !== null &&
      'type' in message &&
      message.type === messageType
    ) {
      const result = handler(message as T);

      // Handle async handlers
      if (result instanceof Promise) {
        result
          .then((response) => sendResponse(response))
          .catch((error) => {
            console.error(`[Messaging] Handler error for ${messageType}:`, error);
            sendResponse(createErrorMessage('HANDLER_ERROR', error.message));
          });
        return true; // Keep channel open for async response
      }
    }
  });
}

/**
 * Wait for specific message type with timeout
 */
export function waitForMessage<T extends Message>(
  messageType: T['type'],
  timeoutMs: number = 5000
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Timeout waiting for message: ${messageType}`));
    }, timeoutMs);

    const listener = (message: unknown) => {
      if (
        typeof message === 'object' &&
        message !== null &&
        'type' in message &&
        message.type === messageType
      ) {
        clearTimeout(timeout);
        browser.runtime.onMessage.removeListener(listener);
        resolve(message as T);
      }
    };

    browser.runtime.onMessage.addListener(listener);
  });
}
