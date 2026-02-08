/**
 * SIMPLIFIED Diagnosa Handler — MAIN WORLD BRIDGE
 *
 * Uses jQuery via inject.content.ts (main world) to fill ePuskesmas forms.
 * This solves the isolated world problem where native DOM events don't trigger
 * jQuery UI autocomplete handlers and hidden field population.
 */

import { fillViaMainWorld, type MainWorldFieldMapping } from '@/lib/filler/main-world-bridge';
import type { FillResult } from '@/lib/filler/filler-core';
import type { DiagnosaFillPayload } from '@/utils/types';

export async function fillDiagnosaFormSimple(
  payload: DiagnosaFillPayload
): Promise<{
  success: FillResult[];
  failed: FillResult[];
  skipped: string[];
}> {
  console.log('[Diagnosa] Starting MAIN WORLD fill:', payload);

  const fields: MainWorldFieldMapping[] = [];

  // ICD-10 Code — jQuery UI autocomplete (triggers AJAX search + hidden field)
  if (payload.icd_x) {
    fields.push({
      selector: [
        'input[data-for="diagnosa_id"][name="diagnosa_id"]',
        'input[name="diagnosa_id"]',
        'input[name^="Diagnosa["][name$="[diagnosa_id]"]',
      ].join(', '),
      value: payload.icd_x,
      type: 'autocomplete',
      autocompleteTimeout: 5000,
    });
  }

  // Diagnosis Name — jQuery UI autocomplete (paired with ICD code)
  if (payload.nama) {
    fields.push({
      selector: [
        'input[data-for="diagnosa_nama"][name="diagnosa_nama"]',
        'input[name="diagnosa_nama"]',
        'input[name^="Diagnosa["][name$="[diagnosa_nama]"]',
      ].join(', '),
      value: payload.nama,
      type: 'autocomplete',
      autocompleteTimeout: 5000,
    });
  }

  // Jenis (PRIMER/SEKUNDER/KOMPLIKASI) — jQuery .val() + .trigger('change')
  if (payload.jenis) {
    fields.push({
      selector: [
        'select[name="Diagnosa[1][diagnosa_jenis]"]',
        'select[name="Diagnosa[2][diagnosa_jenis]"]',
        'select[name="jenis"]',
        'select[name="jenis_diagnosa"]',
        'select[id*="jenis"]',
      ].join(', '),
      value: payload.jenis,
      type: 'select',
    });
  }

  // Kasus (BARU/LAMA) — jQuery .val() + .trigger('change')
  if (payload.kasus) {
    fields.push({
      selector: [
        'select[name="Diagnosa[1][diagnosa_kasus]"]',
        'select[name="Diagnosa[2][diagnosa_kasus]"]',
        'select[name="kasus"]',
        'select[name="kasus_diagnosa"]',
        'select[id*="kasus"]',
      ].join(', '),
      value: payload.kasus,
      type: 'select',
    });
  }

  // Prognosa (optional)
  if (payload.prognosa) {
    fields.push({
      selector: [
        'select[name="Diagnosa[1][prognosa]"]',
        'select[name="Diagnosa[2][prognosa]"]',
        'select[name="prognosa"]',
        'select[id*="prognosa"]',
      ].join(', '),
      value: payload.prognosa,
      type: 'select',
    });
  }

  // Dokter (optional) — text via jQuery
  if (payload.dokter) {
    fields.push({
      selector: [
        'input[name="dokter_nama"]',
        'input[name="Diagnosa[1][dokter_nama]"]',
        'input[name="dokter_bidan_perawat"]',
      ].join(', '),
      value: payload.dokter,
      type: 'text',
    });
  }

  // Perawat (optional) — text via jQuery
  if (payload.perawat) {
    fields.push({
      selector: [
        'input[name="perawat_nama"]',
        'input[name="Diagnosa[1][perawat_nama]"]',
        'input[name="asisten_nama"]',
      ].join(', '),
      value: payload.perawat,
      type: 'text',
    });
  }

  console.log('[Diagnosa] Sending', fields.length, 'fields to main world bridge');

  // PHASE 1 DIAGNOSTIC: Log detailed payload before sending
  console.log('[Diagnosa] DIAGNOSTIC - Fields to send:', fields);
  fields.forEach((f, idx) => {
    console.log(`[Diagnosa] Field ${idx + 1}/${fields.length}:`, {
      selector: f.selector.substring(0, 100) + (f.selector.length > 100 ? '...' : ''),
      value: f.value,
      type: f.type,
    });
  });

  // Send to main world bridge (inject.content.ts) for jQuery-powered filling
  const result = await fillViaMainWorld(fields, 30000, 200);

  // PHASE 1 DIAGNOSTIC: Log result from bridge
  console.log('[Diagnosa] DIAGNOSTIC - Bridge result:', {
    successCount: result.success.length,
    failedCount: result.failed.length,
  });
  if (result.failed.length > 0) {
    console.error('[Diagnosa] DIAGNOSTIC - Failed fills:', result.failed);
  }

  // Convert MainWorldFillResult to FillResult format for compatibility
  const success: FillResult[] = result.success.map(r => ({
    success: true,
    field: r.field,
    value: r.value,
    method: 'autocomplete' as const,
  }));

  const failed: FillResult[] = result.failed.map(r => ({
    success: false,
    field: r.field,
    value: r.value,
    method: 'autocomplete' as const,
    error: r.error,
  }));

  console.log('[Diagnosa] Result: Success:', success.length, 'Failed:', failed.length);

  return { success, failed, skipped: [] };
}
