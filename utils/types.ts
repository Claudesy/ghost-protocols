/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Core data structures for Sentra Assist
// Based on SENTRA-SPEC-001 v1.2.0 Section 11.1 & 17

export type PageType = 'anamnesa' | 'diagnosa' | 'resep' | 'unknown';

export type AturanPakai = '1' | '2' | '3' | '4' | '5';
export type DiagnosaJenis = 'PRIMER' | 'SEKUNDER';
export type DiagnosaKasus = 'BARU' | 'LAMA';
export type Prioritas = '0' | '1';

// Encounter state (Section 11.1)
export interface Encounter {
  id: string; // pelayanan_id
  patient_id: string;
  timestamp: string; // ISO datetime
  dokter: {
    id: string;
    nama: string;
  };
  perawat: {
    id: string;
    nama: string;
  };
  anamnesa: {
    keluhan_utama: string;
    keluhan_tambahan: string;
    lama_sakit: {
      thn: number;
      bln: number;
      hr: number;
    };
    riwayat_penyakit: string | null;
    alergi: {
      obat: string[];
      makanan: string[];
      udara: string[];
      lainnya: string[];
    };
  };
  diagnosa: {
    icd_x: string;
    nama: string;
    jenis: DiagnosaJenis;
    kasus: DiagnosaKasus;
    prognosa: string;
    penyakit_kronis: string[];
  };
  resep: ResepMedication[];
}

// Medication row (Section 6.3)
export interface ResepMedication {
  racikan: string;
  nama_obat: string;
  jumlah: number;
  signa: string;
  aturan_pakai: AturanPakai;
  keterangan: string;
}

// Fill payloads (Section 17.1)
export interface ResepFillPayload {
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
  prioritas: Prioritas;
}

export interface AnamnesaFillPayload {
  keluhan_utama: string;
  keluhan_tambahan: string;
  lama_sakit: {
    thn: number;
    bln: number;
    hr: number;
  };
  riwayat_penyakit: string | null;
  alergi: {
    obat: string[];
    makanan: string[];
    udara: string[];
    lainnya: string[];
  };
}

export interface DiagnosaFillPayload {
  icd_x: string;
  nama: string;
  jenis: DiagnosaJenis;
  kasus: DiagnosaKasus;
  prognosa: string;
  penyakit_kronis: string[];
}

// Fill result (Section 17.2)
export interface FillResult {
  success: Array<{
    field: string;
    value: string;
    method: 'direct' | 'autocomplete';
  }>;
  failed: Array<{
    field: string;
    error: string;
  }>;
  skipped: Array<{
    field: string;
    reason: 'readonly' | 'csrf' | 'empty';
  }>;
}

// Page detection result
export interface PageReadyInfo {
  pageType: PageType;
  pelayananId: string | null;
  url: string;
}

// Scrape request/result
export interface ScrapeRequest {
  pageType: PageType;
  fields?: string[];
}

export interface ScrapePayload {
  pageType: PageType;
  data: Record<string, unknown>;
  timestamp: string;
}

// Field mapping configuration
export interface FieldConfig {
  selector: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'checkbox' | 'autocomplete';
  required?: boolean;
  readonly?: boolean;
}

export interface PageFieldMap {
  [fieldName: string]: FieldConfig;
}
