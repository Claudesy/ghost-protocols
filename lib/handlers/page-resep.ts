/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Sentra Assist - Resep Page Handler
 * Fill cascade and scraping for ePuskesmas Resep form
 * Based on PRD Section 10.1: Fill Order Cascade
 */

import {
  fillTextField,
  fillNumberField,
  fillSelect,
  fillAutocomplete,
} from '@/lib/filler/filler-core';
import { waitForElement, getInputValue } from '@/lib/scraper/dom-utils';
import type { ResepFillPayload, FillResult, AturanPakai } from '@/utils/types';
import {
  RESEP_FIELDS,
  getResepRowSelectors,
  AUTOCOMPLETE_OPTIONS,
  ATURAN_PAKAI_OPTIONS,
  ADD_ROW_BUTTON_SELECTORS,
} from '@/data/field-mappings';

// =============================================================================
// TIMING CONSTANTS (PRD Section 10.1)
// =============================================================================
const TIMING = {
  STATIC_FIELD: 0,
  AJAX_DISPLAY: 800,
  RACIKAN: 200,
  OBAT_NAMA_AJAX: 1000,
  STOCK_FETCH_WAIT: 300,
  SIGNA_AJAX: 600,
  SIGNA_SETTLE: 200,
  ATURAN_PAKAI: 0,
  KETERANGAN: 0,
  ROW_GAP: 300,
  PRIORITAS_FINAL: 0,
} as const;

// =============================================================================
// HELPERS
// =============================================================================
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// =============================================================================
// MAIN FILL FUNCTION
// =============================================================================

/**
 * Fill Resep form with payload data
 * Follows 10-step fill order cascade from PRD Section 10.1
 */
export async function fillResepForm(payload: ResepFillPayload): Promise<FillResult> {
  const result: FillResult = {
    success: [],
    failed: [],
    skipped: [],
  };

  const addSuccess = (field: string, value: string, method: 'direct' | 'autocomplete') => {
    result.success.push({ field, value, method });
  };

  const addFailed = (field: string, error: string) => {
    result.failed.push({ field, error });
  };

  const addSkipped = (field: string, reason: 'readonly' | 'csrf' | 'empty') => {
    result.skipped.push({ field, reason });
  };

  console.log('[ResepHandler] Starting fill cascade...');
  const startTime = Date.now();

  try {
    // =========================================================================
    // STEP 1: Static fields (0ms)
    // =========================================================================
    if (payload.static.no_resep) {
      const res = await fillTextField(RESEP_FIELDS.no_resep.selector, payload.static.no_resep);
      res.success
        ? addSuccess('no_resep', payload.static.no_resep, 'direct')
        : addFailed('no_resep', res.error || 'Element not found');
    }

    if (payload.static.alergi) {
      const res = await fillTextField(RESEP_FIELDS.alergi.selector, payload.static.alergi);
      res.success
        ? addSuccess('alergi', payload.static.alergi, 'direct')
        : addFailed('alergi', res.error || 'Element not found');
    }

    // =========================================================================
    // STEP 2: AJAX display fields (500-1000ms)
    // =========================================================================
    await sleep(TIMING.AJAX_DISPLAY);

    if (payload.ajax.ruangan) {
      const res = await fillAutocomplete(
        RESEP_FIELDS.ruangan.selector,
        payload.ajax.ruangan,
        AUTOCOMPLETE_OPTIONS.ruangan
      );
      res.success
        ? addSuccess('ruangan', String(res.value), 'autocomplete')
        : addFailed('ruangan', res.error || 'Autocomplete failed');
    }

    if (payload.ajax.dokter) {
      const res = await fillAutocomplete(
        RESEP_FIELDS.dokter_nama_bpjs.selector,
        payload.ajax.dokter,
        AUTOCOMPLETE_OPTIONS.dokter
      );
      res.success
        ? addSuccess('dokter', String(res.value), 'autocomplete')
        : addFailed('dokter', res.error || 'Autocomplete failed');
    }

    if (payload.ajax.perawat) {
      const res = await fillAutocomplete(
        RESEP_FIELDS.perawat_nama.selector,
        payload.ajax.perawat,
        AUTOCOMPLETE_OPTIONS.perawat
      );
      res.success
        ? addSuccess('perawat', String(res.value), 'autocomplete')
        : addFailed('perawat', res.error || 'Autocomplete failed');
    }

    // =========================================================================
    // STEP 3-9: Per-row medication fill
    // =========================================================================
    const totalRows = payload.medications.length;

    for (let rowIdx = 0; rowIdx < totalRows; rowIdx++) {
      const med = payload.medications[rowIdx];
      const sel = getResepRowSelectors(rowIdx);
      const rowNum = rowIdx + 1;

      console.log(`[ResepHandler] Processing row ${rowNum}/${totalRows}: ${med.nama_obat}`);

      // STEP 3: Racikan (200ms wait, filters available drugs)
      if (med.racikan) {
        await sleep(TIMING.RACIKAN);
        const res = await fillSelect(sel.obat_racikan, med.racikan);
        res.success
          ? addSuccess(`row${rowNum}_racikan`, med.racikan, 'direct')
          : addFailed(`row${rowNum}_racikan`, res.error || 'Select failed');
      }

      // STEP 3.5: Jumlah Permintaan (before drug selection)
      if (med.jumlah_permintaan !== undefined && med.jumlah_permintaan > 0) {
        const res = await fillNumberField(sel.obat_jumlah_permintaan, med.jumlah_permintaan);
        res.success
          ? addSuccess(`row${rowNum}_jumlah_permintaan`, String(med.jumlah_permintaan), 'direct')
          : addFailed(`row${rowNum}_jumlah_permintaan`, res.error || 'Number fill failed');
      }

      // STEP 4: Obat Nama AJAX (500-1000ms, triggers stock fetch)
      if (med.nama_obat) {
        await sleep(TIMING.OBAT_NAMA_AJAX);
        const res = await fillAutocomplete(sel.obat_nama, med.nama_obat, AUTOCOMPLETE_OPTIONS.obat);
        res.success
          ? addSuccess(`row${rowNum}_obat_nama`, String(res.value), 'autocomplete')
          : addFailed(`row${rowNum}_obat_nama`, res.error || 'Obat autocomplete failed');

        // Extra wait for stock fetch to complete
        await sleep(TIMING.STOCK_FETCH_WAIT);
      }

      // STEP 5: Jumlah (0ms, no dependencies)
      if (med.jumlah !== undefined && med.jumlah > 0) {
        const res = await fillNumberField(sel.obat_jumlah, med.jumlah);
        res.success
          ? addSuccess(`row${rowNum}_jumlah`, String(med.jumlah), 'direct')
          : addFailed(`row${rowNum}_jumlah`, res.error || 'Number fill failed');
      }

      // STEP 6: Signa AJAX (500ms, may auto-populate Aturan Pakai)
      let signaSetAturanPakai = false;
      if (med.signa) {
        await sleep(TIMING.SIGNA_AJAX);
        const res = await fillAutocomplete(sel.obat_signa, med.signa, AUTOCOMPLETE_OPTIONS.signa);
        res.success
          ? addSuccess(`row${rowNum}_signa`, String(res.value), 'autocomplete')
          : addFailed(`row${rowNum}_signa`, res.error || 'Signa autocomplete failed');

        // Check if signa auto-set aturan_pakai
        await sleep(TIMING.SIGNA_SETTLE);
        const aturanEl = document.querySelector(sel.aturan_pakai) as HTMLSelectElement | null;
        if (aturanEl && aturanEl.value && aturanEl.value !== '') {
          signaSetAturanPakai = true;
          console.log(`[ResepHandler] Signa auto-set aturan_pakai to: ${aturanEl.value}`);
        }
      }

      // STEP 7: Aturan Pakai (0ms, skip if set by Signa)
      if (med.aturan_pakai && !signaSetAturanPakai) {
        const res = await fillSelect(sel.aturan_pakai, med.aturan_pakai);
        res.success
          ? addSuccess(`row${rowNum}_aturan_pakai`, ATURAN_PAKAI_OPTIONS[med.aturan_pakai], 'direct')
          : addFailed(`row${rowNum}_aturan_pakai`, res.error || 'Select failed');
      } else if (signaSetAturanPakai) {
        addSkipped(`row${rowNum}_aturan_pakai`, 'empty');
      }

      // STEP 8: Keterangan (0ms, free text notes)
      if (med.keterangan) {
        const res = await fillTextField(sel.obat_keterangan, med.keterangan);
        res.success
          ? addSuccess(`row${rowNum}_keterangan`, med.keterangan, 'direct')
          : addFailed(`row${rowNum}_keterangan`, res.error || 'Text fill failed');
      }

      // STEP 9: Wait before next row + ensure row exists
      if (rowIdx < totalRows - 1) {
        await sleep(TIMING.ROW_GAP);
        await ensureNextRowExists(rowIdx + 1);
      }
    }

    // =========================================================================
    // STEP 10: Set Prioritas (final field)
    // =========================================================================
    if (payload.prioritas) {
      const res = await fillSelect(RESEP_FIELDS.prioritas.selector, payload.prioritas);
      res.success
        ? addSuccess('prioritas', payload.prioritas === '1' ? 'CITO' : 'Normal', 'direct')
        : addFailed('prioritas', res.error || 'Select failed');
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
    });
    return result;
  }
}

// =============================================================================
// HELPER: Ensure medication row exists (add if needed)
// =============================================================================
async function ensureNextRowExists(rowIndex: number): Promise<void> {
  const sel = getResepRowSelectors(rowIndex);
  const existingRow = document.querySelector(sel.obat_nama);

  if (existingRow) {
    return;
  }

  console.log(`[ResepHandler] Adding new medication row ${rowIndex + 1}`);

  for (const btnSelector of ADD_ROW_BUTTON_SELECTORS) {
    const btn = document.querySelector(btnSelector) as HTMLElement | null;
    if (btn) {
      btn.click();
      await sleep(200);

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

export interface ScrapedResepData {
  static: {
    no_resep: string;
    alergi: string;
  };
  ajax: {
    ruangan: string;
    dokter: string;
    perawat: string;
  };
  medications: Array<{
    racikan: string;
    jumlah_permintaan: number;
    nama_obat: string;
    jumlah: number;
    signa: string;
    aturan_pakai: AturanPakai;
    keterangan: string;
  }>;
  prioritas: '0' | '1';
}

/**
 * Scrape current values from Resep form
 */
export async function scrapeResepForm(): Promise<ScrapedResepData> {
  console.log('[ResepHandler] Scraping resep form...');

  await waitForElement(RESEP_FIELDS.alergi.selector, 3000);

  const data: ScrapedResepData = {
    static: {
      no_resep: getInputValue(RESEP_FIELDS.no_resep.selector),
      alergi: getInputValue(RESEP_FIELDS.alergi.selector),
    },
    ajax: {
      ruangan: getInputValue(RESEP_FIELDS.ruangan.selector),
      dokter: getInputValue(RESEP_FIELDS.dokter_nama_bpjs.selector),
      perawat: getInputValue(RESEP_FIELDS.perawat_nama.selector),
    },
    medications: [],
    prioritas:
      ((document.querySelector(RESEP_FIELDS.prioritas.selector) as HTMLSelectElement | null)
        ?.value as '0' | '1') || '0',
  };

  // Scrape medication rows
  const maxRows = 20;

  for (let rowIndex = 0; rowIndex < maxRows; rowIndex++) {
    const sel = getResepRowSelectors(rowIndex);
    const obatNamaElement = document.querySelector(sel.obat_nama);

    if (!obatNamaElement) {
      break;
    }

    const namaObat = getInputValue(sel.obat_nama);
    if (!namaObat) {
      break;
    }

    const med = {
      racikan: (document.querySelector(sel.obat_racikan) as HTMLSelectElement | null)?.value || '',
      jumlah_permintaan: parseInt(getInputValue(sel.obat_jumlah_permintaan)) || 0,
      nama_obat: namaObat,
      jumlah: parseInt(getInputValue(sel.obat_jumlah)) || 0,
      signa: getInputValue(sel.obat_signa),
      aturan_pakai:
        ((document.querySelector(sel.aturan_pakai) as HTMLSelectElement | null)?.value ||
          '2') as AturanPakai,
      keterangan: getInputValue(sel.obat_keterangan),
    };

    data.medications.push(med);
  }

  console.log(`[ResepHandler] Scraped ${data.medications.length} medication rows`);
  return data;
}

// =============================================================================
// INITIALIZATION
// =============================================================================

/**
 * Initialize Resep page handlers
 * Called from content script when page is detected as resep
 */
export function initResepPage(): void {
  console.log('[ResepHandler] Page handler initialized');
}
