/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Mock Encounter Data for Development Testing
 * Use this to test filler without real ePuskesmas data
 */

import type { Encounter, ResepFillPayload, AturanPakai } from './types';

export const mockEncounter: Encounter = {
  id: 'PLY-2026-00123',
  patient_id: 'RM-2024-0892',
  timestamp: new Date().toISOString(),

  dokter: {
    id: 'DKT-001',
    nama: 'dr. Ahmad Fauzi, Sp.PD',
  },

  perawat: {
    id: 'PRW-001',
    nama: 'Ns. Siti Aminah',
  },

  anamnesa: {
    keluhan_utama: 'Demam tinggi 3 hari, batuk berdahak, nyeri tenggorokan',
    keluhan_tambahan: 'Mual, nafsu makan menurun, badan lemas',
    lama_sakit: { thn: 0, bln: 0, hr: 3 },
    riwayat_penyakit: 'Diabetes Mellitus Type 2 sejak 2020, terkontrol dengan Metformin',
    alergi: {
      obat: ['Penicillin', 'Amoxicillin'],
      makanan: ['Seafood'],
      udara: [],
      lainnya: [],
    },
  },

  diagnosa: {
    icd_x: 'J06.9',
    nama: 'Infeksi Saluran Pernapasan Akut (ISPA)',
    jenis: 'PRIMER',
    kasus: 'BARU',
    prognosa: 'Dubia ad Bonam',
    penyakit_kronis: ['E11.9'], // DM Type 2
  },

  resep: [
    {
      racikan: '',
      nama_obat: 'Paracetamol 500mg',
      jumlah: 10,
      signa: '3 kali sehari 1 tablet',
      aturan_pakai: '3' as AturanPakai,
      keterangan: 'Diminum setelah makan',
    },
    {
      racikan: '',
      nama_obat: 'Ambroxol 30mg',
      jumlah: 10,
      signa: '3 kali sehari 1 tablet',
      aturan_pakai: '3' as AturanPakai,
      keterangan: '',
    },
    {
      racikan: '',
      nama_obat: 'Vitamin C 500mg',
      jumlah: 10,
      signa: '1 kali sehari 1 tablet',
      aturan_pakai: '1' as AturanPakai,
      keterangan: '',
    },
  ],
};

/**
 * Extended data not in Encounter type but useful for form filling
 */
export const mockExtendedData = {
  ruangan: 'Poli Umum',
  vital_signs: {
    tekanan_darah_sistolik: 130,
    tekanan_darah_diastolik: 85,
    nadi: 88,
    suhu: 38.2,
    respirasi: 20,
  },
};

/**
 * Save mock encounter to storage for testing
 */
export async function seedMockEncounter(): Promise<boolean> {
  try {
    const { saveEncounter } = await import('./storage');
    return await saveEncounter(mockEncounter);
  } catch (error) {
    console.error('[Mock] Failed to seed encounter:', error);
    return false;
  }
}

/**
 * Mock resep payload for fill testing
 */
export const mockResepPayload: ResepFillPayload = {
  static: {
    no_resep: 'RSP-2026-00456',
    alergi: mockEncounter.anamnesa.alergi.obat.join(', '),
  },
  ajax: {
    ruangan: mockExtendedData.ruangan,
    dokter: mockEncounter.dokter.nama,
    perawat: mockEncounter.perawat.nama,
  },
  medications: mockEncounter.resep.map((med) => ({
    racikan: med.racikan,
    jumlah_permintaan: med.jumlah,
    nama_obat: med.nama_obat,
    jumlah: med.jumlah,
    signa: med.signa,
    aturan_pakai: med.aturan_pakai,
    keterangan: med.keterangan,
  })),
  prioritas: '0',
};
