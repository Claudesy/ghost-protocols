/**
 * Resep Page Handler
 * Handles auto-fill for Resep/Prescription form in ePuskesmas
 */

import {
  ADD_ROW_BUTTON_SELECTORS,
  ATURAN_PAKAI_OPTIONS,
  getResepRowSelectors,
  RESEP_FIELDS,
} from '@/data/field-mappings';
import type { FillResult } from '@/lib/filler/filler-core';
import {
  fillAutocomplete,
  fillCheckbox,
  fillSelect,
  fillTextField,
} from '@/lib/filler/filler-core';
import { waitForElement } from '@/lib/scraper/dom-utils';
import type { ResepFillPayload, ResepMedication } from '@/utils/types';

// =============================================================================
// TIMING CONSTANTS (PRD Section 10.1)
// =============================================================================
const DELAY_BETWEEN_ROWS = 800; // ms
const DELAY_AFTER_ADD_ROW = 1200; // ms
const DELAY_STOCK_CHECK = 1500; // ms (Critical for stock fetch)
const DELAY_SIGNA_LOOKUP = 1000; // ms (Wait for signa ID resolution)

interface ScrapedResepData {
  medications: ResepMedication[];
  alergi?: string;
  berat_badan?: string;
  tinggi_badan?: string;
}

// =============================================================================
// MAIN FILL FUNCTION - CASCADING ROW FILLER
// =============================================================================

/**
 * Fill Resep form with medication list
 * Implements strict cascading timing to handle dynamic row addition and AJAX
 */
export async function fillResepForm(payload: ResepFillPayload): Promise<{
  success: FillResult[];
  failed: FillResult[];
  skipped: string[];
}> {
  console.log('[ResepHandler] Starting fill cascade...');

  const result = {
    success: [] as FillResult[],
    failed: [] as FillResult[],
    skipped: [] as string[],
  };

  const startTime = Date.now();
  const totalRows = payload.medications.length;

  try {
    // 0. Fill Global Fields (Alergi, BB, TB) if present
    if (payload.alergi) {
      await fillTextField(RESEP_FIELDS.alergi.selector, payload.alergi);
    }
    if (payload.berat_badan) {
      await fillTextField(RESEP_FIELDS.berat_badan.selector, String(payload.berat_badan));
    }
    if (payload.tinggi_badan) {
      await fillTextField(RESEP_FIELDS.tinggi_badan.selector, String(payload.tinggi_badan));
    }

    // Iterate through medications
    for (let i = 0; i < totalRows; i++) {
      const med = payload.medications[i];
      const rowIdx = i; // 0-based index
      const sel = getResepRowSelectors(rowIdx);
      const rowNum = rowIdx + 1;

      console.log(`[ResepHandler] Processing row ${rowNum}/${totalRows}: ${med.nama_obat}`);

      // STEP 1: Ensure Row Exists
      if (rowIdx > 0) {
        await ensureRowExists(rowIdx);
        await new Promise((resolve) => setTimeout(resolve, DELAY_AFTER_ADD_ROW));
      }

      // STEP 2: Fill Nama Obat (Autocomplete - Critical)
      // Must wait for stock fetch after selection
      const namaResult = await fillAutocomplete(sel.obat_nama, med.nama_obat, {
        timeout: 2000,
        typeDelay: 50,
      });

      if (!namaResult.success) {
        result.failed.push(namaResult);
        console.warn(`[ResepHandler] Failed to fill nama_obat for row ${rowNum}`);
        continue; // Skip rest of this row if main field fails
      }
      result.success.push(namaResult);

      // CRITICAL WAIT: Stock fetch AJAX
      await new Promise((resolve) => setTimeout(resolve, DELAY_STOCK_CHECK));

      // STEP 3: Racikan (200ms wait, filters available drugs)
      if (med.racikan) {
        await fillCheckbox(sel.racikan, true);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      // STEP 4: Jumlah
      if (med.jumlah) {
        const jumResult = await fillTextField(sel.jumlah, String(med.jumlah));
        if (jumResult.success) result.success.push(jumResult);
        else result.failed.push(jumResult);
      }

      // STEP 5: Signa 1 (Kali Sehari)
      if (med.signa1) {
        const s1Result = await fillTextField(sel.signa1, String(med.signa1));
        if (s1Result.success) result.success.push(s1Result);
      }

      // STEP 6: Signa 2 (Jumlah Satuan)
      if (med.signa2) {
        const s2Result = await fillTextField(sel.signa2, String(med.signa2));
        if (s2Result.success) result.success.push(s2Result);
      }

      // STEP 7: Signa (Aturan Pakai - Dropdown/Text)
      // Wait for signa1/signa2 logic to potentially auto-select rules
      await new Promise((resolve) => setTimeout(resolve, DELAY_SIGNA_LOOKUP));

      if (med.aturan_pakai) {
        // Try filling as select first (standard behavior)
        let signaResult = await fillSelect(sel.aturan_pakai, med.aturan_pakai);

        // Fallback: If text doesn't match option value, try mapping
        if (!signaResult.success) {
          // Attempt to map common terms (e.g. "Sesudah makan" -> "1")
          const mappedValue = ATURAN_PAKAI_OPTIONS[med.aturan_pakai.toLowerCase()];
          if (mappedValue) {
            signaResult = await fillSelect(sel.aturan_pakai, mappedValue);
          }
        }

        if (signaResult.success) {
          result.success.push(signaResult);
        } else {
          // If select fails, check if it was auto-set by signa1/2
          let signaSetAturanPakai = false;
          const aturanEl = document.querySelector(sel.aturan_pakai) as HTMLSelectElement | null;
          if (aturanEl && aturanEl.value && aturanEl.value !== '') {
            signaSetAturanPakai = true;
            console.log(`[ResepHandler] Signa auto-set aturan_pakai to: ${aturanEl.value}`);
          }

          if (!signaSetAturanPakai) {
            result.failed.push({
              field: sel.aturan_pakai,
              value: med.aturan_pakai,
              method: 'select',
              error: 'Option not found and not auto-set',
            });
          }
        }
      }

      // STEP 8: Keterangan (Optional)
      if (med.keterangan) {
        const ketResult = await fillTextField(sel.keterangan, med.keterangan);
        if (ketResult.success) result.success.push(ketResult);
      }

      // STEP 9: BMHP Checkbox
      if (med.bmhp) {
        await fillCheckbox(sel.bmhp, true);
      }

      // STEP 10: Row Delay
      if (i < totalRows - 1) {
        await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_ROWS));
      }
    }

    const duration = Date.now() - startTime;
    console.log(`[ResepHandler] Fill cascade complete in ${duration}ms`);
    console.log(
      `[ResepHandler] Results: ${result.success.length} success, ${result.failed.length} failed, ${result.skipped.length} skipped`
    );

    return result;
  } catch (error) {
    console.error('[ResepHandler] Fill cascade error:', error);
    result.failed.push({
      field: 'cascade',
      error: error instanceof Error ? error.message : 'Unknown error',
      value: '',
      method: 'cascade',
    });
    return result;
  }
}

// =============================================================================
// HELPER: DYNAMIC ROW ADDITION
// =============================================================================

async function ensureRowExists(rowIndex: number): Promise<void> {
  const sel = getResepRowSelectors(rowIndex);
  const rowEl = document.querySelector(sel.obat_nama);

  if (rowEl) {
    // Row already exists
    return;
  }

  console.log(`[ResepHandler] Adding new medication row ${rowIndex + 1}`);

  for (const btnSelector of ADD_ROW_BUTTON_SELECTORS) {
    const btn = document.querySelector(btnSelector) as HTMLElement | null;
    if (btn) {
      btn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newRow = document.querySelector(sel.obat_nama);
      if (newRow) {
        console.log(`[ResepHandler] Row ${rowIndex + 1} added successfully`);
        return;
      }
    }
  }

  console.warn(`[ResepHandler] Could not add row ${rowIndex + 1} - add button not found`);
}

// =============================================================================
// SCRAPE FUNCTION
// =============================================================================

/**
 * Scrape current values from Resep form
 */
export async function scrapeResepForm(): Promise<ScrapedResepData> {
  console.log('[ResepHandler] Scraping resep form...');

  await waitForElement(RESEP_FIELDS.alergi.selector, 3000);

  const data: ScrapedResepData = {
    medications: [],
  };

  // Global fields
  const alergiEl = document.querySelector(RESEP_FIELDS.alergi.selector) as HTMLInputElement;
  if (alergiEl) data.alergi = alergiEl.value;

  const bbEl = document.querySelector(RESEP_FIELDS.berat_badan.selector) as HTMLInputElement;
  if (bbEl) data.berat_badan = bbEl.value;

  const tbEl = document.querySelector(RESEP_FIELDS.tinggi_badan.selector) as HTMLInputElement;
  if (tbEl) data.tinggi_badan = tbEl.value;

  // Scrape rows (limit 20 for safety)
  for (let i = 0; i < 20; i++) {
    const sel = getResepRowSelectors(i);
    const namaEl = document.querySelector(sel.obat_nama) as HTMLInputElement;

    if (!namaEl) break; // End of rows

    // If row exists but is empty/hidden, check if it has value
    // (Some interfaces keep 10 rows but visible=false, check offsetParent)
    if (namaEl.offsetParent === null && namaEl.value === '') continue;

    const med: ResepMedication = {
      nama_obat: namaEl.value,
    };

    const jumEl = document.querySelector(sel.jumlah) as HTMLInputElement;
    if (jumEl && jumEl.value) med.jumlah = Number(jumEl.value);

    const s1El = document.querySelector(sel.signa1) as HTMLInputElement;
    if (s1El && s1El.value) med.signa1 = Number(s1El.value);

    const s2El = document.querySelector(sel.signa2) as HTMLInputElement;
    if (s2El && s2El.value) med.signa2 = s2El.value;

    const ruleEl = document.querySelector(sel.aturan_pakai) as HTMLSelectElement;
    if (ruleEl && ruleEl.value) med.aturan_pakai = ruleEl.value;

    const ketEl = document.querySelector(sel.keterangan) as HTMLInputElement;
    if (ketEl && ketEl.value) med.keterangan = ketEl.value;

    data.medications.push(med);
  }

  console.log(`[ResepHandler] Scraped ${data.medications.length} medication rows`);
  return data;
}

// =============================================================================
// PAGE INITIALIZATION
// =============================================================================

/**
 * Called from content script when page is detected as resep
 */
export function initResepPage(): void {
  console.log('[ResepHandler] Page handler initialized');
}
