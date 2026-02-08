/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Sentra Assist - Filler Orchestrator
 * Coordinates the auto-fill process for ePuskesmas forms
 */

import { getEncounter } from '@/utils/storage.ts';
import {
  fillFields,
  type FillResult,
  type FieldMapping,
} from '@/lib/filler/filler-core.ts';

/**
 * PulseFillResult interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-02-04
 */

export interface PulseFillResult {
  success: boolean;
  filled: FillResult[];
  failed: FillResult[];
  skipped: string[];
  duration: number;
}

/**
 * Execute Pulse Fill - Main orchestrator
 * Reads encounter data from storage and fills the current form
 */
export const executePulseFill = async (): Promise<PulseFillResult> => {
  const startTime = Date.now();
  console.log('[Filler] Initializing Pulse Sequence...');

  const result: PulseFillResult = {
    success: false,
    filled: [],
    failed: [],
    skipped: [],
    duration: 0,
  };

  try {
    // 1. Get encounter data from storage
    const encounter = await getEncounter();
    if (!encounter) {
      throw new Error('No active encounter data found in storage!');
    }

    console.log('[Filler] Encounter data loaded:', encounter);

    // 2. Detect current page type
    const pageType = detectPageType();
    console.log(`[Filler] Detected page: ${pageType}`);

    // 3. Build field mappings based on page type
    const fieldMappings = buildFieldMappings(encounter, pageType);

    if (fieldMappings.length === 0) {
      console.warn('[Filler] No field mappings for this page type');
      result.skipped.push('No mappings available');
      result.duration = Date.now() - startTime;
      return result;
    }

    // 4. Execute fill with 100ms delay between fields
    const fillResults = await fillFields(fieldMappings, 100);

    // 5. Categorize results
    for (const r of fillResults) {
      if (r.success) {
        result.filled.push(r);
      } else {
        result.failed.push(r);
      }
    }

    result.success = result.failed.length === 0;
    result.duration = Date.now() - startTime;

    console.log(`[Filler] Pulse Sequence Complete in ${result.duration}ms`);
    console.log(`[Filler] Filled: ${result.filled.length}, Failed: ${result.failed.length}`);

    return result;

  } catch (error) {
    console.error('[Filler] Pulse Sequence Failed:', error);
    result.failed.push({
      success: false,
      field: 'orchestrator',
      value: '',
      method: 'direct',
      error: String(error),
    });
    result.duration = Date.now() - startTime;
    return result;
  }
};

/**
 * Detect current ePuskesmas page type from URL
 */
function detectPageType(): 'anamnesa' | 'diagnosa' | 'resep' | 'unknown' {
  const url = window.location.pathname.toLowerCase();

  if (url.includes('/anamnesa/')) return 'anamnesa';
  if (url.includes('/diagnosa/')) return 'diagnosa';
  if (url.includes('/resep/') || url.includes('/terapi/')) return 'resep';

  return 'unknown';
}

/**
 * Build field mappings based on encounter data and page type
 */
function buildFieldMappings(encounter: any, pageType: string): FieldMapping[] {
  const mappings: FieldMapping[] = [];

  switch (pageType) {
    case 'resep':
      mappings.push(...buildResepMappings(encounter));
      break;

    case 'diagnosa':
      mappings.push(...buildDiagnosaMappings(encounter));
      break;

    case 'anamnesa':
      mappings.push(...buildAnamnesaMappings(encounter));
      break;

    default:
      console.warn(`[Filler] Unknown page type: ${pageType}`);
  }

  return mappings;
}

/**
 * Build field mappings for Resep page
 */
function buildResepMappings(encounter: any): FieldMapping[] {
  const mappings: FieldMapping[] = [];

  // Alergi field
  if (encounter.anamnesa?.alergi?.obat?.length > 0) {
    mappings.push({
      selector: 'textarea[name="alergi"], input[name="alergi"]',
      value: encounter.anamnesa.alergi.obat.join(', '),
      type: 'textarea',
    });
  }

  // Dokter autocomplete
  if (encounter.dokter?.nama) {
    mappings.push({
      selector: 'input[name="dokter"], input[name="dokter_nama"]',
      value: encounter.dokter.nama,
      type: 'autocomplete',
      autocompleteOptions: { timeout: 1500 },
    });
  }

  // Ruangan autocomplete
  if (encounter.ruangan) {
    mappings.push({
      selector: 'input[name="ruangan"]',
      value: encounter.ruangan,
      type: 'autocomplete',
      autocompleteOptions: { timeout: 1000 },
    });
  }

  // Medications - loop through each
  if (encounter.resep && Array.isArray(encounter.resep)) {
    for (let i = 0; i < encounter.resep.length; i++) {
      const med = encounter.resep[i];
      const rowIndex = i + 1;

      // Obat autocomplete
      if (med.nama_obat) {
        mappings.push({
          selector: `input[name="obat_nama[${i}]"], input[name="obat[${rowIndex}][nama]"], .medication-row:nth-child(${rowIndex}) input[name*="obat"]`,
          value: med.nama_obat,
          type: 'autocomplete',
          autocompleteOptions: { timeout: 1500 },
        });
      }

      // Jumlah
      if (med.jumlah) {
        mappings.push({
          selector: `input[name="jumlah[${i}]"], input[name="obat[${rowIndex}][jumlah]"], .medication-row:nth-child(${rowIndex}) input[name*="jumlah"]`,
          value: med.jumlah,
          type: 'number',
        });
      }

      // Aturan pakai
      if (med.aturan_pakai) {
        mappings.push({
          selector: `select[name="aturan_pakai[${i}]"], select[name="obat[${rowIndex}][aturan]"]`,
          value: med.aturan_pakai,
          type: 'select',
        });
      }

      // Signa autocomplete
      if (med.signa) {
        mappings.push({
          selector: `input[name="signa[${i}]"], input[name="obat[${rowIndex}][signa]"]`,
          value: med.signa,
          type: 'autocomplete',
          autocompleteOptions: { timeout: 1000 },
        });
      }
    }
  }

  return mappings;
}

/**
 * Build field mappings for Diagnosa page
 */
function buildDiagnosaMappings(encounter: any): FieldMapping[] {
  const mappings: FieldMapping[] = [];

  // Diagnosis codes
  if (encounter.diagnosa && Array.isArray(encounter.diagnosa)) {
    for (let i = 0; i < encounter.diagnosa.length; i++) {
      const dx = encounter.diagnosa[i];

      if (dx.kode_icd) {
        mappings.push({
          selector: `input[name="diagnosa[${i}]"], input[name="icd10[${i}]"]`,
          value: dx.kode_icd,
          type: 'autocomplete',
          autocompleteOptions: { timeout: 1500 },
        });
      }
    }
  }

  return mappings;
}

/**
 * Build field mappings for Anamnesa page
 */
function buildAnamnesaMappings(encounter: any): FieldMapping[] {
  const mappings: FieldMapping[] = [];

  // Keluhan utama
  if (encounter.anamnesa?.keluhan_utama) {
    mappings.push({
      selector: 'textarea[name="keluhan_utama"], textarea[name="keluhan"]',
      value: encounter.anamnesa.keluhan_utama,
      type: 'textarea',
    });
  }

  // Riwayat penyakit
  if (encounter.anamnesa?.riwayat_penyakit) {
    mappings.push({
      selector: 'textarea[name="riwayat_penyakit"]',
      value: encounter.anamnesa.riwayat_penyakit,
      type: 'textarea',
    });
  }

  // Vital signs
  if (encounter.vital_signs) {
    const vs = encounter.vital_signs;

    if (vs.tekanan_darah_sistolik) {
      mappings.push({
        selector: 'input[name="td_sistolik"], input[name="sistolik"]',
        value: vs.tekanan_darah_sistolik,
        type: 'number',
      });
    }

    if (vs.tekanan_darah_diastolik) {
      mappings.push({
        selector: 'input[name="td_diastolik"], input[name="diastolik"]',
        value: vs.tekanan_darah_diastolik,
        type: 'number',
      });
    }

    if (vs.suhu) {
      mappings.push({
        selector: 'input[name="suhu"]',
        value: vs.suhu,
        type: 'number',
      });
    }

    if (vs.nadi) {
      mappings.push({
        selector: 'input[name="nadi"]',
        value: vs.nadi,
        type: 'number',
      });
    }

    if (vs.respirasi) {
      mappings.push({
        selector: 'input[name="respirasi"], input[name="rr"]',
        value: vs.respirasi,
        type: 'number',
      });
    }

    // Gula darah (GDS)
    if (vs.gula_darah) {
      mappings.push({
        selector: 'input[name="gula_darah"], input[name="gds"], input[name="glukosa"]',
        value: vs.gula_darah,
        type: 'number',
      });
    }
  }

  // Alergi fields
  if (encounter.anamnesa?.alergi) {
    const alergi = encounter.anamnesa.alergi;
    const allAllergies = [
      ...(alergi.obat || []),
      ...(alergi.makanan || []),
      ...(alergi.udara || []),
      ...(alergi.lainnya || []),
    ].filter(Boolean);

    if (allAllergies.length > 0) {
      mappings.push({
        selector: 'textarea[name="alergi"], input[name="alergi"]',
        value: allAllergies.join(', '),
        type: 'textarea',
      });
    }
  }

  return mappings;
}

/**
 * Fill a single medication row (for dynamic row adding)
 */
export async function fillMedicationRow(
  medication: {
    nama_obat: string;
    jumlah: number;
    satuan?: string;
    aturan_pakai?: string;
    signa?: string;
  },
  rowIndex: number = 0
): Promise<FillResult[]> {
  const mappings: FieldMapping[] = [];

  if (medication.nama_obat) {
    mappings.push({
      selector: `input[name*="obat"][name*="nama"], .medication-row:nth-child(${rowIndex + 1}) input[name*="obat"]`,
      value: medication.nama_obat,
      type: 'autocomplete',
      autocompleteOptions: { timeout: 1500 },
    });
  }

  if (medication.jumlah) {
    mappings.push({
      selector: `input[name*="jumlah"], .medication-row:nth-child(${rowIndex + 1}) input[name*="jumlah"]`,
      value: medication.jumlah,
      type: 'number',
    });
  }

  if (medication.aturan_pakai) {
    mappings.push({
      selector: `select[name*="aturan"], .medication-row:nth-child(${rowIndex + 1}) select`,
      value: medication.aturan_pakai,
      type: 'select',
    });
  }

  if (medication.signa) {
    mappings.push({
      selector: `input[name*="signa"], .medication-row:nth-child(${rowIndex + 1}) input[name*="signa"]`,
      value: medication.signa,
      type: 'autocomplete',
      autocompleteOptions: { timeout: 1000 },
    });
  }

  return fillFields(mappings, 150);
}
