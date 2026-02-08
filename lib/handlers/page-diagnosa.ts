/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Diagnosa Page Handler
 * Handles auto-fill for Diagnosa/ICD-10 form in ePuskesmas
 *
 * Uses DAS (Data Ascension System) for intelligent field mapping:
 * - Layer 1: Check cache (<50ms)
 * - Layer 2: DOM Scanner (if cache miss)
 * - Layer 3: Gemini Vision semantic mapping
 * - Layer 4: Learning from user corrections
 *
 * Fill Fields:
 * 1. ICD-10 Code (text/autocomplete)
 * 2. Diagnosis Name (text)
 * 3. Jenis Diagnosa (PRIMER/SEKUNDER)
 * 4. Kasus (BARU/LAMA)
 * 5. Prognosa (optional textarea)
 */

import { mapPayloadToFields } from '@/lib/das';
import { fillFields, type FieldMapping, type FillResult } from '@/lib/filler/filler-core';
import type { DiagnosaFillPayload } from '@/utils/types';

// ============================================================================
// DIAGNOSA PAYLOAD TO DAS MAPPING
// ============================================================================

/**
 * Map DiagnosaFillPayload to generic key-value for DAS
 * DAS expects a flat Record<string, unknown>
 */
function buildDASPayload(payload: DiagnosaFillPayload): Record<string, unknown> {
  const dasPayload: Record<string, unknown> = {};

  if (payload.icd_x) {
    dasPayload['icd_x'] = payload.icd_x;
    dasPayload['icd10'] = payload.icd_x; // Alternative key
    dasPayload['kode_diagnosa'] = payload.icd_x; // Alternative key
  }

  if (payload.nama) {
    dasPayload['nama_diagnosa'] = payload.nama;
    dasPayload['diagnosis_name'] = payload.nama; // Alternative key
  }

  if (payload.jenis) {
    dasPayload['jenis_diagnosa'] = payload.jenis;
    dasPayload['jenis'] = payload.jenis;
  }

  if (payload.kasus) {
    dasPayload['kasus_diagnosa'] = payload.kasus;
    dasPayload['kasus'] = payload.kasus;
  }

  if (payload.prognosa) {
    dasPayload['prognosa'] = payload.prognosa;
    dasPayload['prognosis'] = payload.prognosa; // Alternative key
  }

  return dasPayload;
}

// ============================================================================
// JENIS & KASUS VALUE MAPPING
// ============================================================================

/**
 * Map PRIMER/SEKUNDER to ePuskesmas dropdown values
 */
const JENIS_VALUE_MAP: Record<string, string[]> = {
  PRIMER: ['1', 'PRIMER', 'primer', 'P'],
  SEKUNDER: ['2', 'SEKUNDER', 'sekunder', 'S'],
};

/**
 * Map BARU/LAMA to ePuskesmas dropdown values
 */
const KASUS_VALUE_MAP: Record<string, string[]> = {
  BARU: ['1', 'BARU', 'baru', 'B'],
  LAMA: ['2', 'LAMA', 'lama', 'L'],
};

/**
 * Try to find matching select option value
 */
function findSelectValue(element: HTMLSelectElement, possibleValues: string[]): string | null {
  for (const opt of Array.from(element.options)) {
    const optValue = opt.value.toUpperCase();
    const optText = opt.text.toUpperCase();

    for (const val of possibleValues) {
      if (optValue === val.toUpperCase() || optText.includes(val.toUpperCase())) {
        return opt.value;
      }
    }
  }
  return possibleValues[0]; // Default to first value
}

// ============================================================================
// FALLBACK SELECTORS (if DAS fails)
// ============================================================================

const FALLBACK_SELECTORS = {
  icd_x: [
    // Primary target from live ePuskesmas (editable autocomplete field)
    'input[data-for="diagnosa_id"][name="diagnosa_id"]:not([readonly]):not([disabled])',
    // Live ePuskesmas variants (confirmed)
    'input[name="Diagnosa[1][diagnosa_id]"]',
    'input[name="Diagnosa[2][diagnosa_id]"]',
    'input[name^="Diagnosa["][name$="[diagnosa_id]"]:not([readonly]):not([disabled])',
    'input[name="diagnosa_id"]:not([readonly]):not([disabled])',
    'input[name="Diagnosa[icd_x]"]',
    'input[name="Diagnosa[kode]"]',
    'input[name="icd10"]',
    'input[name="icd_code"]',
    'input[name="kode_diagnosa"]',
    'input#icd-input',
    'input.icd-autocomplete',
    'input[id*="icd"]',
    'input[name*="icd"]',
  ],
  nama: [
    // Primary target from live ePuskesmas (paired with diagnosa_id autocomplete)
    'input[data-for="diagnosa_nama"][name="diagnosa_nama"]:not([readonly]):not([disabled])',
    // Live ePuskesmas variants (confirmed)
    'input[name="Diagnosa[1][diagnosa_nama]"]',
    'input[name="Diagnosa[2][diagnosa_nama]"]',
    'input[name^="Diagnosa["][name$="[diagnosa_nama]"]:not([readonly]):not([disabled])',
    'input[name="diagnosa_nama"]:not([readonly]):not([disabled])',
    'input[name="Diagnosa[nama]"]',
    'input[name="diagnosis_name"]',
    'input[name="nama_diagnosa"]',
    'textarea[name="Diagnosa[nama]"]',
    'input[id*="nama_diagnosa"]',
  ],
  jenis: [
    'select[data-for="diagnosa_jenis"][name="Diagnosa[1][diagnosa_jenis]"]:not([disabled])',
    // Live ePuskesmas variants (confirmed)
    'select[name="Diagnosa[1][diagnosa_jenis]"]',
    'select[name="Diagnosa[2][diagnosa_jenis]"]',
    'select[name^="Diagnosa["][name$="[diagnosa_jenis]"]:not([disabled])',
    'select[name="Diagnosa[jenis]"]',
    'select[name="jenis_diagnosa"]',
    'select[name="jenis"]',
    'select#jenis-diagnosa',
    'select[id*="jenis"]',
  ],
  kasus: [
    'select[data-for="diagnosa_kasus"][name="Diagnosa[1][diagnosa_kasus]"]:not([disabled])',
    // Live ePuskesmas variants (confirmed)
    'select[name="Diagnosa[1][diagnosa_kasus]"]',
    'select[name="Diagnosa[2][diagnosa_kasus]"]',
    'select[name^="Diagnosa["][name$="[diagnosa_kasus]"]:not([disabled])',
    'select[name="Diagnosa[kasus]"]',
    'select[name="kasus_diagnosa"]',
    'select[name="kasus"]',
    'select#kasus-diagnosa',
    'select[id*="kasus"]',
  ],
  prognosa: [
    // Live ePuskesmas variants (confirmed)
    'select#prognosa',
    'select[name="prognosa"]',
    'select[name^="Diagnosa["][name$="[prognosa]"]',
    'textarea[name="Diagnosa[prognosa]"]',
    'textarea[name="prognosa"]',
    'input[name="Diagnosa[prognosa]"]',
    'input[name="prognosa"]',
  ],
} as const;

function findSelectorByFallback(selectors: readonly string[]): string | null {
  for (const sel of selectors) {
    const candidates = Array.from(document.querySelectorAll(sel));
    for (const el of candidates) {
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        if (el.readOnly || el.disabled) {
          continue;
        }
      } else if (el instanceof HTMLSelectElement) {
        if (el.disabled) {
          continue;
        }
      }

      if (el instanceof HTMLElement) {
        const token = `sentra-dx-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        el.setAttribute('data-sentra-target', token);
        return `[data-sentra-target="${token}"]`;
      }
    }
  }
  return null;
}

function resolvePreferredDiagnosaSelector(payloadKey: string, fallbackSelector: string): string {
  const key = payloadKey.toLowerCase();
  if (key.includes('icd') || key.includes('kode_diagnosa')) {
    return findSelectorByFallback(FALLBACK_SELECTORS.icd_x) || fallbackSelector;
  }
  if (key.includes('nama_diagnosa') || key === 'nama' || key.includes('diagnosis_name')) {
    return findSelectorByFallback(FALLBACK_SELECTORS.nama) || fallbackSelector;
  }
  if (key.includes('jenis')) {
    return findSelectorByFallback(FALLBACK_SELECTORS.jenis) || fallbackSelector;
  }
  if (key.includes('kasus')) {
    return findSelectorByFallback(FALLBACK_SELECTORS.kasus) || fallbackSelector;
  }
  if (key.includes('prognosa') || key.includes('prognosis')) {
    return findSelectorByFallback(FALLBACK_SELECTORS.prognosa) || fallbackSelector;
  }
  return fallbackSelector;
}

// ============================================================================
// MAIN FILL FUNCTION
// ============================================================================

/**
 * Fill Diagnosa form with ICD-10 data
 * Uses DAS for intelligent field mapping with fallback to static selectors
 *
 * @param payload - DiagnosaFillPayload from sidepanel
 * @returns Fill result with success/failed/skipped arrays
 */
export async function fillDiagnosaForm(payload: DiagnosaFillPayload): Promise<{
  success: FillResult[];
  failed: FillResult[];
  skipped: string[];
}> {
  console.log('[Diagnosa Handler] Starting fill with DAS integration');
  console.log('[Diagnosa Handler] Payload:', payload);

  const mappings: FieldMapping[] = [];
  const skipped: string[] = [];

  try {
    // ========================================
    // STRATEGY 1: Use DAS for intelligent mapping
    // ========================================
    const dasPayload = buildDASPayload(payload);
    console.log('[Diagnosa Handler] DAS payload:', dasPayload);

    const dasResult = await mapPayloadToFields(dasPayload, {
      pageType: 'unknown', // DAS will auto-detect
      minConfidence: 0.75, // Lower threshold for diagnosa fields
    });

    console.log('[Diagnosa Handler] DAS result:', {
      mappings: dasResult.mappings.length,
      unmapped: dasResult.unmapped,
      fromCache: dasResult.fromCache,
      latencyMs: dasResult.latencyMs,
    });

    // Convert DAS mappings to filler-core format
    for (const mapping of dasResult.mappings) {
      const fieldType = mapping.targetField.fieldType;
      let fillType: FieldMapping['type'] = 'text';

      // Map DAS field type to filler-core type
      switch (fieldType) {
        case 'select':
          fillType = 'select';
          break;
        case 'textarea':
          fillType = 'textarea';
          break;
        case 'checkbox':
          fillType = 'checkbox';
          break;
        case 'number':
          fillType = 'number';
          break;
        default:
          fillType = 'text';
      }

      // Get value from payload
      let value = dasPayload[mapping.payloadKey];
      const payloadKeyLower = mapping.payloadKey.toLowerCase();
      const preferredSelector = resolvePreferredDiagnosaSelector(
        mapping.payloadKey,
        mapping.targetField.selector
      );

      if (
        payloadKeyLower.includes('icd') ||
        payloadKeyLower.includes('kode_diagnosa') ||
        payloadKeyLower.includes('nama_diagnosa') ||
        payloadKeyLower === 'nama' ||
        payloadKeyLower.includes('diagnosis_name')
      ) {
        // SAFE MODE: Use simple text filling instead of complex autocomplete simulation
        fillType = 'text';
      }

      // Special handling for jenis/kasus dropdowns
      if (fillType === 'select' && mapping.targetField.tagName === 'SELECT') {
        const selectEl = document.querySelector(preferredSelector) as HTMLSelectElement;
        if (selectEl) {
          if (mapping.payloadKey.includes('jenis') && payload.jenis) {
            value = findSelectValue(selectEl, JENIS_VALUE_MAP[payload.jenis] || [payload.jenis]);
          } else if (mapping.payloadKey.includes('kasus') && payload.kasus) {
            value = findSelectValue(selectEl, KASUS_VALUE_MAP[payload.kasus] || [payload.kasus]);
          }
        }
      }

      if (value !== undefined && value !== null) {
        mappings.push({
          selector: preferredSelector,
          value: value as string | number | boolean,
          type: fillType,
        });
      }
    }

    // ========================================
    // STRATEGY 2: Fallback for unmapped fields
    // ========================================
    if (dasResult.unmapped.length > 0) {
      console.log('[Diagnosa Handler] Using fallback for unmapped fields:', dasResult.unmapped);

      // ICD-X field
      if (payload.icd_x && !mappings.some((m) => m.selector.includes('icd'))) {
        const icdSelector = findSelectorByFallback(FALLBACK_SELECTORS.icd_x);
        if (icdSelector) {
          mappings.push({
            selector: icdSelector,
            value: payload.icd_x,
            type: 'text',
          });
        } else {
          skipped.push('icd_x: Element not found');
        }
      }

      // Nama diagnosa field
      if (payload.nama && !mappings.some((m) => m.selector.includes('nama'))) {
        const namaSelector = findSelectorByFallback(FALLBACK_SELECTORS.nama);
        if (namaSelector) {
          mappings.push({
            selector: namaSelector,
            value: payload.nama,
            type: 'text',
          });
        } else {
          skipped.push('nama: Element not found');
        }
      }

      // Jenis diagnosa field
      if (payload.jenis && !mappings.some((m) => m.selector.includes('jenis'))) {
        const jenisSelector = findSelectorByFallback(FALLBACK_SELECTORS.jenis);
        if (jenisSelector) {
          const jenisEl = document.querySelector(jenisSelector) as HTMLSelectElement | null;
          if (!jenisEl) {
            skipped.push('jenis: Element not found');
          } else {
            const jenisValue = findSelectValue(
              jenisEl,
              JENIS_VALUE_MAP[payload.jenis] || [payload.jenis]
            );
            mappings.push({
              selector: jenisSelector,
              value: jenisValue || payload.jenis,
              type: 'select',
            });
          }
        } else {
          skipped.push('jenis: Element not found');
        }
      }

      // Kasus field
      if (payload.kasus && !mappings.some((m) => m.selector.includes('kasus'))) {
        const kasusSelector = findSelectorByFallback(FALLBACK_SELECTORS.kasus);
        if (kasusSelector) {
          const kasusEl = document.querySelector(kasusSelector) as HTMLSelectElement | null;
          if (!kasusEl) {
            skipped.push('kasus: Element not found');
          } else {
            const kasusValue = findSelectValue(
              kasusEl,
              KASUS_VALUE_MAP[payload.kasus] || [payload.kasus]
            );
            mappings.push({
              selector: kasusSelector,
              value: kasusValue || payload.kasus,
              type: 'select',
            });
          }
        } else {
          skipped.push('kasus: Element not found');
        }
      }

      // Prognosa field (optional)
      if (payload.prognosa && !mappings.some((m) => m.selector.includes('prognosa'))) {
        const progSelector = findSelectorByFallback(FALLBACK_SELECTORS.prognosa);
        if (progSelector) {
          const progEl = document.querySelector(progSelector);
          mappings.push({
            selector: progSelector,
            value: payload.prognosa,
            type: progEl instanceof HTMLSelectElement ? 'select' : 'textarea',
          });
        }
        // Don't add to skipped - prognosa is optional
      }
    }

    console.log('[Diagnosa Handler] Final mappings:', mappings.length);
    console.log('[Diagnosa Handler] Skipped:', skipped);
  } catch (error) {
    console.error('[Diagnosa Handler] DAS error, using pure fallback:', error);

    // Pure fallback mode
    if (payload.icd_x) {
      const selector = findSelectorByFallback(FALLBACK_SELECTORS.icd_x);
      if (selector) {
        mappings.push({
          selector,
          value: payload.icd_x,
          type: 'text',
        });
      }
    }
    if (payload.nama) {
      const selector = findSelectorByFallback(FALLBACK_SELECTORS.nama);
      if (selector) {
        mappings.push({
          selector,
          value: payload.nama,
          type: 'text',
        });
      }
    }
    if (payload.jenis) {
      const selector = findSelectorByFallback(FALLBACK_SELECTORS.jenis);
      if (selector) {
        const jenisEl = document.querySelector(selector) as HTMLSelectElement | null;
        if (jenisEl) {
          const jenisValue = findSelectValue(
            jenisEl,
            JENIS_VALUE_MAP[payload.jenis] || [payload.jenis]
          );
          mappings.push({ selector, value: jenisValue || payload.jenis, type: 'select' });
        }
      }
    }
    if (payload.kasus) {
      const selector = findSelectorByFallback(FALLBACK_SELECTORS.kasus);
      if (selector) {
        const kasusEl = document.querySelector(selector) as HTMLSelectElement | null;
        if (kasusEl) {
          const kasusValue = findSelectValue(
            kasusEl,
            KASUS_VALUE_MAP[payload.kasus] || [payload.kasus]
          );
          mappings.push({ selector, value: kasusValue || payload.kasus, type: 'select' });
        }
      }
    }
    if (payload.prognosa) {
      const selector = findSelectorByFallback(FALLBACK_SELECTORS.prognosa);
      if (selector) {
        const progEl = document.querySelector(selector);
        mappings.push({
          selector,
          value: payload.prognosa,
          type: progEl instanceof HTMLSelectElement ? 'select' : 'textarea',
        });
      }
    }
  }

  // ========================================
  // EXECUTE FILL
  // ========================================
  if (mappings.length === 0) {
    console.warn('[Diagnosa Handler] No fields to fill');
    return {
      success: [],
      failed: [
        {
          success: false,
          field: 'all',
          value: '',
          method: 'direct',
          error: 'No fields found to fill',
        },
      ],
      skipped,
    };
  }

  const fillResults = await fillFields(mappings, 100);

  // Categorize results
  const success: FillResult[] = [];
  const failed: FillResult[] = [];
  const normalizedSkipped = [...skipped];

  for (const r of fillResults) {
    if (r.success) {
      success.push(r);
      continue;
    }
    const errorText = String(r.error || '').toLowerCase();
    if (
      errorText.includes('readonly') ||
      errorText.includes('read only') ||
      errorText.includes('disabled') ||
      errorText.includes('csrf') ||
      errorText.includes('protected')
    ) {
      normalizedSkipped.push(`${r.field}: ${r.error || 'readonly/protected field'}`);
      continue;
    }
    failed.push(r);
  }

  console.log('[Diagnosa Handler] Fill complete:', {
    success: success.length,
    failed: failed.length,
    skipped: normalizedSkipped.length,
  });

  return { success, failed, skipped: normalizedSkipped };
}

// ============================================================================
// PAGE INITIALIZATION
// ============================================================================

/**
 * Initialize diagnosa page handler
 * Called when content script detects diagnosa page
 */
export function initDiagnosaPage(): void {
  console.log('[Diagnosa Handler] Page initialized with DAS integration');

  // Pre-warm DAS cache by scanning fields
  setTimeout(async () => {
    try {
      const { scanPageFields } = await import('@/lib/das');
      const result = scanPageFields({ includeHidden: false });
      console.log('[Diagnosa Handler] Pre-scan found', result.fields.length, 'fields');
    } catch (error) {
      console.warn('[Diagnosa Handler] Pre-scan failed:', error);
    }
  }, 500);
}

// ============================================================================
// SCRAPE FUNCTION (optional - for later)
// ============================================================================

/**
 * Scrape diagnosa form data from page
 * @returns Scraped diagnosa data
 */
export async function scrapeDiagnosaForm(): Promise<Partial<DiagnosaFillPayload>> {
  console.log('[Diagnosa Handler] Scraping diagnosa form...');

  const result: Partial<DiagnosaFillPayload> = {};

  // Try to get ICD-X
  for (const sel of FALLBACK_SELECTORS.icd_x) {
    const el = document.querySelector(sel) as HTMLInputElement;
    if (el && el.value) {
      result.icd_x = el.value;
      break;
    }
  }

  // Try to get nama
  for (const sel of FALLBACK_SELECTORS.nama) {
    const el = document.querySelector(sel) as HTMLInputElement | HTMLTextAreaElement;
    if (el && el.value) {
      result.nama = el.value;
      break;
    }
  }

  // Try to get jenis
  for (const sel of FALLBACK_SELECTORS.jenis) {
    const el = document.querySelector(sel) as HTMLSelectElement;
    if (el && el.value) {
      // Map back to PRIMER/SEKUNDER
      const val = el.value.toUpperCase();
      if (val === '1' || val === 'PRIMER' || val === 'P') {
        result.jenis = 'PRIMER';
      } else if (val === '2' || val === 'SEKUNDER' || val === 'S') {
        result.jenis = 'SEKUNDER';
      }
      break;
    }
  }

  // Try to get kasus
  for (const sel of FALLBACK_SELECTORS.kasus) {
    const el = document.querySelector(sel) as HTMLSelectElement;
    if (el && el.value) {
      // Map back to BARU/LAMA
      const val = el.value.toUpperCase();
      if (val === '1' || val === 'BARU' || val === 'B') {
        result.kasus = 'BARU';
      } else if (val === '2' || val === 'LAMA' || val === 'L') {
        result.kasus = 'LAMA';
      }
      break;
    }
  }

  // Try to get prognosa
  for (const sel of FALLBACK_SELECTORS.prognosa) {
    const el = document.querySelector(sel) as HTMLInputElement | HTMLTextAreaElement;
    if (el && el.value) {
      result.prognosa = el.value;
      break;
    }
  }

  console.log('[Diagnosa Handler] Scraped data:', result);
  return result;
}
