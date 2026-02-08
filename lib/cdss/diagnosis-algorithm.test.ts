import { describe, expect, it } from 'vitest';
import type { DiagnosisSuggestion } from '@/types/api';
import { runDiagnosisAlgorithm } from './diagnosis-algorithm';

const vitalsCriticalMetabolic = {
  sbp: 168,
  dbp: 102,
  hr: 114,
  rr: 24,
  temp: 38.6,
  glucose: 338,
};

const baseSuggestions: DiagnosisSuggestion[] = [
  {
    rank: 1,
    icd_x: 'J06.9',
    nama: 'ISPA',
    confidence: 0.84,
    rationale: 'Batuk pilek dan nyeri tenggorokan.',
    red_flags: [],
    recommended_actions: ['Terapi simptomatik'],
  },
  {
    rank: 2,
    icd_x: 'E11.65',
    nama: 'Diabetes melitus tipe 2 dengan hiperglikemia',
    confidence: 0.72,
    rationale: 'Poliuria, polidipsia, dan gula darah tinggi.',
    red_flags: ['hiperglikemia_berat'],
    recommended_actions: ['Verifikasi glukosa dan tata laksana korektif'],
  },
  {
    rank: 3,
    icd_x: 'I10',
    nama: 'Hipertensi esensial',
    confidence: 0.69,
    rationale: 'Tekanan darah meningkat berulang.',
    red_flags: [],
    recommended_actions: ['Kontrol tekanan darah'],
  },
];

describe('runDiagnosisAlgorithm', () => {
  it('returns empty array on empty suggestions', () => {
    const result = runDiagnosisAlgorithm({
      suggestions: [],
      keluhanUtama: 'demam',
      vitals: vitalsCriticalMetabolic,
    });

    expect(result).toEqual([]);
  });

  it('prioritizes diagnosis that fits symptom + vital context', () => {
    const result = runDiagnosisAlgorithm({
      suggestions: baseSuggestions,
      keluhanUtama: 'Sering kencing, haus terus, lemas, mual',
      keluhanTambahan: 'demam',
      vitals: vitalsCriticalMetabolic,
    });

    expect(result[0]?.suggestion.icd_x).toBe('E11.65');
    expect(result[0]?.diagnosisScore).toBeGreaterThan(result[1]?.diagnosisScore ?? 0);
    expect(result[0]?.scoreBreakdown.vitalFit).toBeGreaterThan(60);
  });

  it('keeps score in 0..100 and adjustedConfidence in 0..1', () => {
    const result = runDiagnosisAlgorithm({
      suggestions: baseSuggestions,
      keluhanUtama: 'Batuk pilek',
      vitals: {
        sbp: 118,
        dbp: 74,
        hr: 82,
        rr: 18,
        temp: 36.8,
        glucose: 102,
      },
    });

    for (const item of result) {
      expect(item.diagnosisScore).toBeGreaterThanOrEqual(0);
      expect(item.diagnosisScore).toBeLessThanOrEqual(100);
      expect(item.adjustedConfidence).toBeGreaterThanOrEqual(0);
      expect(item.adjustedConfidence).toBeLessThanOrEqual(1);
    }
  });

  it('respects maxResults', () => {
    const result = runDiagnosisAlgorithm({
      suggestions: baseSuggestions,
      keluhanUtama: 'demam',
      vitals: vitalsCriticalMetabolic,
      maxResults: 2,
    });

    expect(result).toHaveLength(2);
    expect(result[0].rank).toBe(1);
    expect(result[1].rank).toBe(2);
  });
});
