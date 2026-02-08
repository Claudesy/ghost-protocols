/**
 * Clinical Trajectory Analyzer
 *
 * Analyzes vital signs trends across multiple visits to detect:
 * - Improving / Declining / Stable trajectories
 * - Uncontrolled chronic conditions
 * - Clinical recommendations based on trend direction
 *
 * References: FKTP 2024 HTN, PERKENI 2024 Glucose, WHO Vital Signs Guidelines
 *
 * @module lib/cdss/trajectory-analyzer
 */

import type { VisitRecord } from './visit-history-store';

// ============================================================================
// TYPES
// ============================================================================

export type TrendDirection = 'improving' | 'declining' | 'stable' | 'insufficient_data';
export type RiskLevel = 'low' | 'moderate' | 'high' | 'critical';

export interface VitalTrend {
  parameter: string;
  label: string;
  unit: string;
  values: number[];
  dates: string[];
  trend: TrendDirection;
  /** Percentage change from first to last visit */
  changePercent: number;
  /** Current value is in normal range */
  isNormal: boolean;
  /** Risk assessment */
  risk: RiskLevel;
  /** Clinical note */
  note: string;
}

export interface TrajectoryAnalysis {
  /** Overall patient trajectory */
  overallTrend: TrendDirection;
  /** Overall risk level */
  overallRisk: RiskLevel;
  /** Individual vital trends */
  vitalTrends: VitalTrend[];
  /** Generated clinical recommendations */
  recommendations: TrajectoryRecommendation[];
  /** Summary sentence for display */
  summary: string;
  /** Number of visits analyzed */
  visitCount: number;
}

export interface TrajectoryRecommendation {
  category: 'improvement' | 'concern' | 'action' | 'monitoring';
  priority: 'high' | 'medium' | 'low';
  text: string;
}

// ============================================================================
// NORMAL RANGES (Clinical Reference)
// ============================================================================

const NORMAL_RANGES = {
  sbp: { min: 90, max: 139, label: 'Tekanan Darah Sistolik', unit: 'mmHg' },
  dbp: { min: 60, max: 89, label: 'Tekanan Darah Diastolik', unit: 'mmHg' },
  hr: { min: 60, max: 100, label: 'Denyut Nadi', unit: 'x/mnt' },
  rr: { min: 12, max: 20, label: 'Laju Pernapasan', unit: 'x/mnt' },
  temp: { min: 36.1, max: 37.5, label: 'Suhu Tubuh', unit: '°C' },
  glucose: { min: 70, max: 199, label: 'Gula Darah Sewaktu', unit: 'mg/dL' },
} as const;

type VitalKey = keyof typeof NORMAL_RANGES;

// ============================================================================
// ANALYSIS FUNCTIONS
// ============================================================================

/**
 * Detect trend direction from a series of values.
 * Uses simple linear regression slope direction.
 */
function detectTrend(values: number[], normalMax: number): TrendDirection {
  if (values.length < 2) return 'insufficient_data';
  if (values.length === 2) {
    const diff = values[1] - values[0];
    const threshold = normalMax * 0.05; // 5% of normal max as significance threshold
    if (Math.abs(diff) < threshold) return 'stable';
    return diff < 0 ? 'improving' : 'declining';
  }

  // Linear regression slope
  const n = values.length;
  const xMean = (n - 1) / 2;
  const yMean = values.reduce((a, b) => a + b, 0) / n;

  let numerator = 0;
  let denominator = 0;
  for (let i = 0; i < n; i++) {
    numerator += (i - xMean) * (values[i] - yMean);
    denominator += (i - xMean) ** 2;
  }

  const slope = denominator !== 0 ? numerator / denominator : 0;
  const threshold = normalMax * 0.03;

  if (Math.abs(slope) < threshold) return 'stable';

  // For BP/glucose: decreasing toward normal = improving
  // Context: most values being high means decreasing = improving
  const lastValue = values[values.length - 1];
  if (lastValue > normalMax) {
    return slope < 0 ? 'improving' : 'declining';
  }
  return slope > 0 ? 'declining' : 'improving';
}

/**
 * Assess risk level for a vital parameter
 */
function assessRisk(key: VitalKey, value: number): RiskLevel {
  const range = NORMAL_RANGES[key];
  if (value === 0) return 'low'; // No data

  switch (key) {
    case 'sbp':
      if (value >= 180) return 'critical';
      if (value >= 160) return 'high';
      if (value >= 140) return 'moderate';
      if (value < 90) return 'high';
      return 'low';
    case 'dbp':
      if (value >= 120) return 'critical';
      if (value >= 100) return 'high';
      if (value >= 90) return 'moderate';
      if (value < 60) return 'moderate';
      return 'low';
    case 'glucose':
      if (value >= 400) return 'critical';
      if (value >= 300) return 'high';
      if (value >= 200) return 'moderate';
      if (value < 70) return 'high';
      return 'low';
    case 'hr':
      if (value > 140 || value < 45) return 'critical';
      if (value > 120 || value < 50) return 'high';
      if (value > 100 || value < 60) return 'moderate';
      return 'low';
    case 'temp':
      if (value >= 40) return 'critical';
      if (value >= 38.5) return 'high';
      if (value >= 37.5) return 'moderate';
      if (value < 36) return 'moderate';
      return 'low';
    default:
      if (value < range.min || value > range.max) return 'moderate';
      return 'low';
  }
}

/**
 * Generate clinical note for a vital trend
 */
function generateNote(key: VitalKey, trend: TrendDirection, lastValue: number, risk: RiskLevel): string {
  const range = NORMAL_RANGES[key];

  if (trend === 'insufficient_data') return 'Data tidak cukup untuk analisis trend.';

  const isHigh = lastValue > range.max;
  const isLow = lastValue < range.min;

  if (trend === 'improving') {
    if (isHigh || isLow) return `${range.label} membaik tapi belum dalam batas normal.`;
    return `${range.label} membaik dan dalam batas normal.`;
  }

  if (trend === 'declining') {
    if (risk === 'critical') return `${range.label} memburuk — perlu intervensi segera.`;
    if (risk === 'high') return `${range.label} memburuk — evaluasi terapi.`;
    return `${range.label} menunjukkan kecenderungan meningkat.`;
  }

  // stable
  if (isHigh || isLow) return `${range.label} stabil tapi di luar batas normal.`;
  return `${range.label} stabil dalam batas normal.`;
}

/**
 * Generate recommendations based on all vital trends
 */
function generateRecommendations(trends: VitalTrend[]): TrajectoryRecommendation[] {
  const recs: TrajectoryRecommendation[] = [];

  for (const t of trends) {
    if (t.values.length === 0 || t.values.every((v) => v === 0)) continue;

    // Critical declining = action required
    if (t.trend === 'declining' && (t.risk === 'critical' || t.risk === 'high')) {
      recs.push({
        category: 'action',
        priority: 'high',
        text: `${t.label}: Trend memburuk (${t.changePercent > 0 ? '+' : ''}${t.changePercent.toFixed(0)}%). Evaluasi ulang terapi dan pertimbangkan rujukan.`,
      });
    }

    // Improving = positive feedback
    if (t.trend === 'improving' && !t.isNormal) {
      recs.push({
        category: 'improvement',
        priority: 'medium',
        text: `${t.label}: Membaik (${t.changePercent > 0 ? '+' : ''}${t.changePercent.toFixed(0)}%). Lanjutkan terapi saat ini. Target: ${NORMAL_RANGES[t.parameter as VitalKey]?.max || 'normal'} ${t.unit}.`,
      });
    }

    // Stable but abnormal = concern
    if (t.trend === 'stable' && !t.isNormal) {
      recs.push({
        category: 'concern',
        priority: 'medium',
        text: `${t.label}: Stabil tapi di luar target. Pertimbangkan eskalasi terapi atau perubahan obat.`,
      });
    }

    // High risk monitoring
    if (t.risk === 'high' || t.risk === 'critical') {
      recs.push({
        category: 'monitoring',
        priority: 'high',
        text: `Monitor ${t.label} lebih ketat. Nilai terakhir: ${t.values[t.values.length - 1]} ${t.unit} (${t.risk}).`,
      });
    }
  }

  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  recs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return recs;
}

// ============================================================================
// MAIN ANALYSIS
// ============================================================================

/**
 * Analyze clinical trajectory from visit records.
 * Visits should be ordered chronologically (oldest first).
 */
export function analyzeTrajectory(visits: VisitRecord[]): TrajectoryAnalysis {
  // Sort chronologically (oldest → newest)
  const sorted = [...visits].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const vitalKeys: VitalKey[] = ['sbp', 'dbp', 'hr', 'rr', 'temp', 'glucose'];
  const vitalTrends: VitalTrend[] = [];

  for (const key of vitalKeys) {
    const range = NORMAL_RANGES[key];
    const values = sorted.map((v) => v.vitals[key]).filter((v) => v > 0);
    const dates = sorted
      .filter((v) => v.vitals[key] > 0)
      .map((v) => {
        const d = new Date(v.timestamp);
        return `${d.getDate()}/${d.getMonth() + 1}`;
      });

    const lastValue = values.length > 0 ? values[values.length - 1] : 0;
    const firstValue = values.length > 0 ? values[0] : 0;
    const changePercent = firstValue > 0 ? ((lastValue - firstValue) / firstValue) * 100 : 0;
    const isNormal = lastValue >= range.min && lastValue <= range.max;
    const trend = detectTrend(values, range.max);
    const risk = assessRisk(key, lastValue);
    const note = generateNote(key, trend, lastValue, risk);

    vitalTrends.push({
      parameter: key,
      label: range.label,
      unit: range.unit,
      values,
      dates,
      trend,
      changePercent,
      isNormal,
      risk,
      note,
    });
  }

  const recommendations = generateRecommendations(vitalTrends);

  // Overall assessment
  const riskLevels = vitalTrends.filter((t) => t.values.length > 0).map((t) => t.risk);
  const overallRisk: RiskLevel = riskLevels.includes('critical')
    ? 'critical'
    : riskLevels.includes('high')
      ? 'high'
      : riskLevels.includes('moderate')
        ? 'moderate'
        : 'low';

  const decliningCount = vitalTrends.filter((t) => t.trend === 'declining').length;
  const improvingCount = vitalTrends.filter((t) => t.trend === 'improving').length;
  const overallTrend: TrendDirection =
    sorted.length < 2
      ? 'insufficient_data'
      : decliningCount > improvingCount
        ? 'declining'
        : improvingCount > decliningCount
          ? 'improving'
          : 'stable';

  // Summary
  const summaryParts: string[] = [];
  if (overallTrend === 'improving') summaryParts.push('Kondisi pasien menunjukkan perbaikan.');
  else if (overallTrend === 'declining') summaryParts.push('Kondisi pasien menunjukkan penurunan.');
  else if (overallTrend === 'stable') summaryParts.push('Kondisi pasien relatif stabil.');
  else summaryParts.push('Data kunjungan belum cukup untuk analisis trend.');

  const abnormals = vitalTrends.filter((t) => !t.isNormal && t.values.length > 0);
  if (abnormals.length > 0) {
    summaryParts.push(
      `Parameter di luar target: ${abnormals.map((t) => t.label).join(', ')}.`
    );
  }

  return {
    overallTrend,
    overallRisk,
    vitalTrends,
    recommendations,
    summary: summaryParts.join(' '),
    visitCount: sorted.length,
  };
}
