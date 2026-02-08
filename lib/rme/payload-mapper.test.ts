import { describe, expect, it } from 'vitest';
import { buildRMETransferPayload, mapPregnancyStatusToBoolean } from '@/lib/rme/payload-mapper';

describe('RME payload mapper', () => {
  it('maps unknown pregnancy status to is_pregnant=false with explicit reason', () => {
    const pregnancy = mapPregnancyStatusToBoolean('P', null);

    expect(pregnancy.is_pregnant).toBe(false);
    expect(pregnancy.reasonCode).toBe('PREGNANCY_UNKNOWN_DEFAULT_FALSE');
  });

  it('builds payload with triad warning when regimen role is incomplete', () => {
    const mapped = buildRMETransferPayload({
      keluhanUtama: 'Batuk berdahak',
      patientGender: 'P',
      pregnancyStatus: false,
      allergies: ['Obat'],
      diagnosis: {
        icd_x: 'J06.9',
        nama: 'ISPA',
      },
      medications: [
        {
          nama_obat: 'Paracetamol 500mg',
          dosis: '3x1',
          aturan_pakai: 'Sesudah makan',
          durasi: '3 hari',
          rationale: 'Simptomatik',
          safety_check: 'safe',
          contraindications: [],
        },
        {
          nama_obat: 'Vitamin C 500mg',
          dosis: '1x1',
          aturan_pakai: 'Sesudah makan',
          durasi: '5 hari',
          rationale: 'Supportive',
          safety_check: 'safe',
          contraindications: [],
        },
      ],
    });

    expect(mapped.payload.anamnesa.is_pregnant).toBe(false);
    expect(mapped.payload.resep).not.toBeNull();
    expect(mapped.payload.resep?.medications.length).toBe(2);
    expect(mapped.reasonCodes).toContain('RESEP_TRIAD_INCOMPLETE');
  });

  it('marks resep empty after safety filter when all meds are contraindicated', () => {
    const mapped = buildRMETransferPayload({
      keluhanUtama: 'Nyeri dada',
      patientGender: 'L',
      diagnosis: {
        icd_x: 'I20.9',
        nama: 'Suspek angina',
      },
      medications: [
        {
          nama_obat: 'Captopril 12.5mg',
          dosis: '2x1',
          aturan_pakai: 'Sesudah makan',
          durasi: '5 hari',
          rationale: 'Should be blocked',
          safety_check: 'contraindicated',
          contraindications: ['Pregnancy'],
        },
      ],
    });

    expect(mapped.payload.resep).toBeNull();
    expect(mapped.reasonCodes).toContain('RESEP_EMPTY_AFTER_SAFETY');
    expect(mapped.reasonCodes).toContain('RESEP_PAYLOAD_EMPTY');
  });
});
