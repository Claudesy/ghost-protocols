import { describe, expect, it } from 'vitest';
import type { Encounter } from '@/utils/types';
import type { AnonymizedClinicalContext } from '@/lib/api/deepseek-types';
import { runV3InferenceFromEncounter } from './v3-adapter';

const baseEncounter: Encounter = {
  id: 'enc-1',
  patient_id: 'p-1',
  timestamp: new Date().toISOString(),
  dokter: { id: 'd-1', nama: 'Dokter A' },
  perawat: { id: 'n-1', nama: 'Perawat B' },
  anamnesa: {
    keluhan_utama: 'demam tinggi dan sesak',
    keluhan_tambahan: 'menggigil',
    lama_sakit: { thn: 0, bln: 0, hr: 2 },
    riwayat_penyakit: null,
    alergi: { obat: [], makanan: [], udara: [], lainnya: [] },
  },
  diagnosa: {
    icd_x: '',
    nama: '',
    jenis: 'PRIMER',
    kasus: 'BARU',
    prognosa: '',
    penyakit_kronis: [],
  },
  resep: [],
};

describe('runV3InferenceFromEncounter', () => {
  it('returns suggestions even when vital signs are missing', () => {
    const context: AnonymizedClinicalContext = {
      keluhan_utama: 'demam tinggi',
      usia_tahun: 44,
      jenis_kelamin: 'L',
    };

    const result = runV3InferenceFromEncounter(baseEncounter, context, []);

    expect(result.modelVersion).toBe('sentra-inference-v3.0.0');
    expect(result.source).toBe('local');
    expect(result.rawSuggestions.length).toBeGreaterThan(0);
    expect(result.dataQualityWarnings.length).toBeGreaterThan(0);
  });

  it('elevates high-risk alerts for severe sepsis-like vitals', () => {
    const context: AnonymizedClinicalContext = {
      keluhan_utama: 'demam menggigil sesak',
      usia_tahun: 45,
      jenis_kelamin: 'L',
      vital_signs: {
        systolic: 85,
        diastolic: 52,
        heart_rate: 132,
        respiratory_rate: 30,
        temperature: 39.3,
        spo2: 91,
        gcs: 14,
      },
    };

    const result = runV3InferenceFromEncounter(baseEncounter, context, []);
    const severeAlerts = result.alerts.filter(
      (alert) => alert.severity === 'emergency' || alert.severity === 'high',
    );

    expect(severeAlerts.length).toBeGreaterThan(0);
  });
});

