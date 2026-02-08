import type { DiagnosisSuggestion } from '@/types/api';
import {
  buildDifferentialInsight,
  extractComplaintSignals,
  type DifferentialInsight,
  type DifferentialVitals,
} from './differential-diagnosis';

export interface DiagnosisAlgorithmInput {
  suggestions: DiagnosisSuggestion[];
  keluhanUtama: string;
  keluhanTambahan?: string;
  vitals: DifferentialVitals;
  maxResults?: number;
}

export type ConfidenceBand = 'very_high' | 'high' | 'moderate' | 'low';

export interface RankedDiagnosis {
  rank: number;
  suggestion: DiagnosisSuggestion;
  diagnosisScore: number; // 0-100
  adjustedConfidence: number; // 0-1
  confidenceBand: ConfidenceBand;
  scoreBreakdown: {
    baseConfidence: number; // 0-100
    symptomFit: number; // 0-100
    vitalFit: number; // 0-100
    safetyPriority: number; // 0-100
  };
  insight: DifferentialInsight;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function round(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function icdPrefix(icd: string): string {
  const normalized = icd.toUpperCase().trim();
  const match = normalized.match(/^[A-Z][0-9]{1,2}/);
  return match ? match[0] : normalized.slice(0, 3);
}

function deriveSymptomFitScore(
  matchedSymptoms: string[],
  complaintSignals: string[],
): number {
  if (complaintSignals.length === 0) return 40;
  if (matchedSymptoms.length === 0) return 15;

  const coverage = matchedSymptoms.length / Math.max(3, complaintSignals.length);
  return round(clamp(coverage * 100, 20, 100), 2);
}

function deriveVitalFitScore(
  suggestion: DiagnosisSuggestion,
  vitals: DifferentialVitals,
): number {
  const prefix = icdPrefix(suggestion.icd_x || '');
  const label = suggestion.nama.toLowerCase();

  let score = 20;
  const hasSevereBp = vitals.sbp >= 180 || vitals.dbp >= 120;
  const hasHighBp = vitals.sbp >= 160 || vitals.dbp >= 100;
  const hasSevereGlucose = vitals.glucose >= 300 || (vitals.glucose > 0 && vitals.glucose < 70);
  const hasFeverishInflammatory =
    vitals.temp >= 38.5 && vitals.hr > 100 && vitals.rr >= 22;
  const hasRespDistress = vitals.rr >= 24 || vitals.hr >= 120;

  if (/^I1[0-6]/.test(prefix) || /(hipertensi|stroke|acs|angina|iskem)/.test(label)) {
    if (hasSevereBp) score += 55;
    else if (hasHighBp) score += 35;
    else score += 10;
  }

  if (/^E1[0-6]/.test(prefix) || /(diabetes|glukosa|hiperglik|hipoglik)/.test(label)) {
    if (hasSevereGlucose) score += 70;
    else if (vitals.glucose >= 200) score += 35;
    else score += 10;
    if (vitals.glucose >= 300) score += 10;
  }

  if (/^J[0-9]/.test(prefix) || /(respir|pneumonia|ispa|bronkit|paru|napas)/.test(label)) {
    if (hasRespDistress) score += 30;
    else if (vitals.rr >= 20) score += 25;
    if (vitals.temp >= 37.8) score += 10;
  }

  if (/^(A|R57|A4)/.test(prefix) || /(sepsis|infeksi sistemik|syok)/.test(label)) {
    if (hasFeverishInflammatory) score += 55;
    else if (vitals.temp >= 38 || vitals.hr >= 100) score += 25;
  }

  return round(clamp(score, 0, 100), 2);
}

function deriveSafetyPriorityScore(
  suggestion: DiagnosisSuggestion,
  insight: DifferentialInsight,
): number {
  let score = 10;

  const redFlagCount = suggestion.red_flags?.length || 0;
  score += redFlagCount * 15;

  if (insight.supportingExamPlan.needLevel === 'required') score += 35;
  else if (insight.supportingExamPlan.needLevel === 'recommended') score += 20;
  else score += 8;

  return round(clamp(score, 0, 100), 2);
}

function confidenceBand(score: number): ConfidenceBand {
  if (score >= 85) return 'very_high';
  if (score >= 70) return 'high';
  if (score >= 50) return 'moderate';
  return 'low';
}

export function runDiagnosisAlgorithm(input: DiagnosisAlgorithmInput): RankedDiagnosis[] {
  const {
    suggestions,
    keluhanUtama,
    keluhanTambahan = '',
    vitals,
    maxResults = 5,
  } = input;

  if (!Array.isArray(suggestions) || suggestions.length === 0) return [];

  const complaintSignals = extractComplaintSignals(keluhanUtama, keluhanTambahan, 10);

  const ranked = suggestions.map((suggestion) => {
    const insight = buildDifferentialInsight({
      suggestion,
      keluhanUtama,
      keluhanTambahan,
      vitals,
    });

    const baseConfidence = round(clamp(suggestion.confidence * 100, 0, 100), 2);
    const symptomFit = deriveSymptomFitScore(insight.matchedSymptoms, complaintSignals);
    const vitalFit = deriveVitalFitScore(suggestion, vitals);
    const safetyPriority = deriveSafetyPriorityScore(suggestion, insight);

    const diagnosisScore = round(
      clamp(
        baseConfidence * 0.45 + symptomFit * 0.25 + vitalFit * 0.2 + safetyPriority * 0.1,
        0,
        100,
      ),
      2,
    );

    const adjustedConfidence = round(clamp(diagnosisScore / 100, 0, 1), 2);

    return {
      rank: 0,
      suggestion,
      diagnosisScore,
      adjustedConfidence,
      confidenceBand: confidenceBand(diagnosisScore),
      scoreBreakdown: {
        baseConfidence,
        symptomFit,
        vitalFit,
        safetyPriority,
      },
      insight,
    };
  });

  return ranked
    .sort((a, b) => b.diagnosisScore - a.diagnosisScore)
    .slice(0, maxResults)
    .map((item, index) => ({
      ...item,
      rank: index + 1,
      suggestion: {
        ...item.suggestion,
        rank: index + 1,
      },
    }));
}
