import {
  analyzeTrajectory,
  type RiskLevel,
  type TrajectoryAnalysis,
  type TrendDirection,
  type VitalTrend,
} from '@/lib/iskandar-diagnosis-engine/trajectory-analyzer';
import type { VisitRecord } from '@/lib/iskandar-diagnosis-engine/visit-history-store';
import { sendMessage } from '@/utils/messaging';
import React, { useEffect, useMemo, useState } from 'react';
import type { ScreeningAlert } from './TTVInferenceUI';

// Lazy import ApexCharts (avoid SSR issues in extension context)
const Chart = React.lazy(() => import('react-apexcharts'));

export interface ClinicalTrajectoryProps {
  vitals: {
    sbp: number;
    dbp: number;
    hr: number;
    rr: number;
    temp: number;
    glucose: number;
  };
  keluhanUtama: string;
  keluhanTambahan?: string;
  narrative: {
    keluhan_utama: string;
    lama_sakit: string;
    is_akut: boolean;
    confidence: number;
  };
  alerts: ScreeningAlert[];
  patientAge: number;
  patientGender: 'L' | 'P';
  patientName: string;
  patientRM: string;
  encounterId?: string;
  onBack: () => void;
}

type Phase = 'loading' | 'error' | 'ready';

// Visual mappings
const TREND_ICON: Record<TrendDirection, string> = {
  improving: '\u2197',
  declining: '\u2198',
  stable: '\u2192',
  insufficient_data: '\u2014',
};

const TREND_COLOR: Record<TrendDirection, string> = {
  improving: '#10B981',
  declining: '#EF4444',
  stable: '#06B6D4',
  insufficient_data: '#6B7280',
};

const TREND_LABEL: Record<TrendDirection, string> = {
  improving: 'MEMBAIK',
  declining: 'MEMBURUK',
  stable: 'STABIL',
  insufficient_data: 'DATA KURANG',
};

const RISK_STYLE: Record<RiskLevel, { color: string; bg: string; border: string }> = {
  low: { color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
  moderate: { color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)' },
  high: { color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)' },
  critical: { color: '#DC2626', bg: 'rgba(220,38,38,0.15)', border: 'rgba(220,38,38,0.5)' },
};

export const ClinicalTrajectory: React.FC<ClinicalTrajectoryProps> = ({
  vitals,
  keluhanUtama,
  narrative,
  alerts,
  patientAge: _patientAge,
  patientGender: _patientGender,
  patientName,
  patientRM,
  encounterId,
  onBack,
}) => {
  const [phase, setPhase] = useState<Phase>('loading');
  const [analysis, setAnalysis] = useState<TrajectoryAnalysis | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [visitCount, setVisitCount] = useState(0);
  const [scrapeLog, setScrapeLog] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    const loadTrajectory = async () => {
      console.log('[Trajectory] Loading visit history...');
      setPhase('loading');

      try {
        const result = await sendMessage('scanVisitHistory', undefined);
        if (cancelled) return;

        // Capture diagnostics — ALWAYS show something
        const diagLines = result.diagnostics || [];
        if (result.error) {
          diagLines.unshift(`ERROR: ${result.error}`);
        }
        if (diagLines.length === 0) {
          diagLines.push('No diagnostics returned — pipeline may have failed silently');
        }
        setScrapeLog(diagLines);
        console.log('[Trajectory] Diagnostics:\n' + diagLines.join('\n'));
        console.log(`[Trajectory] RECV: ${result.visits?.length ?? 0} visits`);

        const pastVisits: VisitRecord[] = (result.visits || []).map((v) => ({
          patient_id: patientRM,
          encounter_id: v.encounter_id,
          timestamp: v.date,
          vitals: v.vitals,
          keluhan_utama: v.keluhan_utama,
          diagnosa: v.diagnosa || undefined,
          source: 'scrape' as const,
        }));

        const currentVisit: VisitRecord = {
          patient_id: patientRM,
          encounter_id: encounterId || `current-${Date.now()}`,
          timestamp: new Date().toISOString(),
          vitals,
          keluhan_utama: keluhanUtama,
          source: 'uplink',
        };

        const visitMap = new Map<string, VisitRecord>();
        for (const v of pastVisits) visitMap.set(v.encounter_id, v);
        visitMap.set(currentVisit.encounter_id, currentVisit);

        const allVisits = Array.from(visitMap.values()).sort(
          (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );

        setVisitCount(allVisits.length);

        const trajectoryResult = analyzeTrajectory(allVisits);
        console.log(
          `[Trajectory] ANALYZED: trend=${trajectoryResult.overallTrend}, risk=${trajectoryResult.overallRisk}`
        );

        setAnalysis(trajectoryResult);
        setPhase('ready');
      } catch (error) {
        if (cancelled) return;
        console.error('[Trajectory] Error:', error);
        const errStr = error instanceof Error ? error.message : String(error);
        setErrorMsg(errStr);
        setScrapeLog((prev) =>
          prev.length > 0 ? prev : [`PIPELINE_ERROR: ${errStr}`],
        );
        setPhase('error');
      }
    };

    loadTrajectory();
    return () => {
      cancelled = true;
    };
  }, [patientRM, encounterId, vitals, keluhanUtama]);

  // Chart data
  const chartConfig = useMemo(() => {
    if (!analysis) return null;

    const bpTrend = analysis.vitalTrends.find((t) => t.parameter === 'sbp');
    const dbpTrend = analysis.vitalTrends.find((t) => t.parameter === 'dbp');
    const hrTrend = analysis.vitalTrends.find((t) => t.parameter === 'hr');

    if (!bpTrend || bpTrend.values.length === 0) return null;

    const series = [
      { name: 'SBP', data: bpTrend.values },
      { name: 'DBP', data: dbpTrend?.values || [] },
      { name: 'HR', data: hrTrend?.values || [] },
    ].filter((s) => s.data.length > 0);

    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'area',
        height: 180,
        background: 'transparent',
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "'JetBrains Mono', monospace",
      },
      theme: { mode: 'dark' },
      colors: ['#3B82F6', '#06B6D4', '#F59E0B'],
      stroke: { curve: 'smooth', width: 2 },
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.25, opacityTo: 0.05, shadeIntensity: 1 },
      },
      xaxis: {
        categories: bpTrend.dates,
        labels: { style: { colors: '#6B7280', fontSize: '9px' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: '#6B7280', fontSize: '9px' } },
      },
      grid: {
        borderColor: '#2a2d35',
        strokeDashArray: 3,
        padding: { left: 4, right: 4 },
      },
      tooltip: {
        theme: 'dark',
        style: { fontSize: '10px' },
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '10px',
        labels: { colors: '#9CA3AF' },
        markers: { size: 4 },
      },
      annotations: {
        yaxis: [
          {
            y: 140,
            borderColor: 'rgba(239,68,68,0.3)',
            label: {
              text: 'HT',
              style: { color: '#EF4444', background: 'transparent', fontSize: '8px' },
            },
          },
        ],
      },
    };

    return { series, options };
  }, [analysis]);

  // Render: Loading
  if (phase === 'loading') {
    return (
      <div className="ct-container">
        <Header onBack={onBack} />
        <div className="ct-loading">
          <div className="ct-loading-bar">
            <div className="ct-loading-progress" />
          </div>
          <span className="ct-loading-text">Mengambil riwayat kunjungan...</span>
        </div>
      </div>
    );
  }

  // Render: Error
  if (phase === 'error') {
    return (
      <div className="ct-container">
        <Header onBack={onBack} />
        <div className="ct-error" style={{ margin: '12px 16px' }}>
          <span className="ct-error-icon">!</span>
          <span>{errorMsg || 'Gagal memuat data trajectory'}</span>
          <button className="ct-retry-btn" onClick={() => setPhase('loading')}>
            Retry
          </button>
        </div>
        {scrapeLog.length > 0 && (
          <div
            style={{
              margin: '0 16px 12px',
              padding: 10,
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: 8,
              fontSize: 9,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#9CA3AF',
              maxHeight: 200,
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.5,
            }}
          >
            <div style={{ color: '#EF4444', fontWeight: 700, marginBottom: 4, fontSize: 10 }}>
              ERROR DIAGNOSTICS
            </div>
            {scrapeLog.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Render: Ready
  if (!analysis) return null;

  const activeTrends = analysis.vitalTrends.filter(
    (t) => t.values.length > 0 && !t.values.every((v) => v === 0)
  );

  return (
    <div className="ct-container">
      {/* Header */}
      <div className="ct-header">
        <button onClick={onBack} className="ct-back-btn" aria-label="Back">
          <span>&larr;</span>
        </button>
        <div className="ct-header-text">
          <h2 className="ct-title">Clinical Trajectory</h2>
          <span className="ct-subtitle">
            {patientName} &middot; {patientRM}
          </span>
        </div>
        <div className="ct-header-badges">
          <span
            className="ct-badge"
            style={{
              color: TREND_COLOR[analysis.overallTrend],
              borderColor: TREND_COLOR[analysis.overallTrend],
              border: '1px solid',
            }}
          >
            {TREND_ICON[analysis.overallTrend]} {TREND_LABEL[analysis.overallTrend]}
          </span>
          <span className="ct-badge ct-badge-audit">{visitCount} kunjungan</span>
        </div>
      </div>

      {/* Current Vitals Bar */}
      <div className="ct-vitals-bar">
        <VitalItem
          label="SBP/DBP"
          value={`${vitals.sbp}/${vitals.dbp}`}
          alert={vitals.sbp >= 140 || vitals.dbp >= 90}
        />
        <VitalItem label="HR" value={String(vitals.hr)} alert={vitals.hr > 100 || vitals.hr < 60} />
        <VitalItem label="RR" value={String(vitals.rr)} alert={vitals.rr > 20 || vitals.rr < 12} />
        <VitalItem label="TEMP" value={vitals.temp.toFixed(1)} alert={vitals.temp >= 37.5} />
        {vitals.glucose > 0 && (
          <VitalItem
            label="GDS"
            value={String(vitals.glucose)}
            alert={vitals.glucose >= 200 || vitals.glucose < 70}
          />
        )}
      </div>

      {/* Complaint + Acuity */}
      <div className="ct-complaint">
        <span className="ct-complaint-label">Keluhan</span>
        <span className="ct-complaint-text">{keluhanUtama}</span>
        <span className={`ct-acuity ${narrative.is_akut ? 'ct-acuity-akut' : 'ct-acuity-kronik'}`}>
          {narrative.is_akut ? 'AKUT' : 'KRONIK'}
        </span>
      </div>

      {/* Screening Alerts */}
      {alerts.length > 0 && (
        <div className="ct-alerts">
          {alerts.slice(0, 3).map((alert) => (
            <div key={alert.id} className="ct-alert-item">
              <span className="ct-alert-severity">{alert.severity.toUpperCase()}</span>
              <span className="ct-alert-title">{alert.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* Trajectory Status Bar */}
      <div
        className="ct-status-bar"
        style={{ borderLeftColor: TREND_COLOR[analysis.overallTrend] }}
      >
        <span className="ct-status-icon">{TREND_ICON[analysis.overallTrend]}</span>
        <div className="ct-status-text">
          <span className="ct-status-trend" style={{ color: TREND_COLOR[analysis.overallTrend] }}>
            {TREND_LABEL[analysis.overallTrend]}
          </span>
          <span className="ct-status-summary">{analysis.summary}</span>
        </div>
        <span
          className="ct-risk-badge"
          style={{
            color: RISK_STYLE[analysis.overallRisk].color,
            background: RISK_STYLE[analysis.overallRisk].bg,
            borderColor: RISK_STYLE[analysis.overallRisk].border,
          }}
        >
          {analysis.overallRisk.toUpperCase()}
        </span>
      </div>

      {/* Chart */}
      <div className="ct-charts">
        {chartConfig ? (
          <div className="ct-chart-card">
            <React.Suspense
              fallback={
                <div className="ct-loading">
                  <span className="ct-loading-text">Memuat chart...</span>
                </div>
              }
            >
              <Chart
                options={chartConfig.options}
                series={chartConfig.series}
                type="area"
                height={180}
              />
            </React.Suspense>
          </div>
        ) : (
          <div className="ct-empty-chart">Data tidak cukup untuk menampilkan chart trend</div>
        )}
      </div>

      {/* Vital Trend Cards */}
      {activeTrends.length > 0 && (
        <div className="ct-diagnoses-section">
          <h3 className="ct-section-title">Vital Trends</h3>
          {activeTrends.map((trend) => (
            <TrendCard key={trend.parameter} trend={trend} />
          ))}
        </div>
      )}

      {/* Recommendations */}
      {analysis.recommendations.length > 0 && (
        <div className="ct-diagnoses-section">
          <h3 className="ct-section-title">Rekomendasi</h3>
          {analysis.recommendations.map((rec, i) => (
            <div key={i} className="ct-alert-item" style={{ marginBottom: 6 }}>
              <span
                className="ct-alert-severity"
                style={{
                  color:
                    rec.priority === 'high'
                      ? '#EF4444'
                      : rec.priority === 'medium'
                        ? '#F59E0B'
                        : '#6B7280',
                }}
              >
                {rec.priority.toUpperCase()}
              </span>
              <span className="ct-alert-title">{rec.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Scraper Diagnostics — visible when no past visits found */}
      {scrapeLog.length > 0 && visitCount <= 1 && (
        <div
          style={{
            margin: '12px 0',
            padding: 10,
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: 8,
            fontSize: 9,
            fontFamily: "'JetBrains Mono', monospace",
            color: '#9CA3AF',
            maxHeight: 200,
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
          }}
        >
          <div style={{ color: '#F59E0B', fontWeight: 700, marginBottom: 4, fontSize: 10 }}>
            SCRAPER DIAGNOSTICS
          </div>
          {scrapeLog.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

// Sub-components

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="ct-header">
      <button onClick={onBack} className="ct-back-btn" aria-label="Back">
        <span>&larr;</span>
      </button>
      <div className="ct-header-text">
        <h2 className="ct-title">Clinical Trajectory</h2>
        <span className="ct-subtitle">Menganalisis...</span>
      </div>
    </div>
  );
}

function VitalItem({ label, value, alert }: { label: string; value: string; alert: boolean }) {
  return (
    <div className="ct-vital-item">
      <span className="ct-vital-label">{label}</span>
      <span className={`ct-vital-value ${alert ? 'ct-vital-alert' : ''}`}>{value}</span>
    </div>
  );
}

function TrendCard({ trend }: { trend: VitalTrend }) {
  const riskStyle = RISK_STYLE[trend.risk];
  const trendColor = TREND_COLOR[trend.trend];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        marginBottom: 6,
        background: 'var(--surface-secondary, #16181D)',
        border: '1px solid var(--border-subtle, #2a2d35)',
        borderRadius: 8,
      }}
    >
      <span style={{ fontSize: 18, color: trendColor }}>{TREND_ICON[trend.trend]}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              color: 'var(--text-primary, #E5E7EB)',
            }}
          >
            {trend.label}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              color: trendColor,
              fontWeight: 600,
            }}
          >
            {trend.changePercent > 0 ? '+' : ''}
            {trend.changePercent.toFixed(0)}%
          </span>
        </div>
        <span style={{ fontSize: 10, color: 'var(--text-secondary, #9CA3AF)', lineHeight: 1.4 }}>
          {trend.note}
        </span>
      </div>
      <span
        className="ct-risk-badge"
        style={{
          color: riskStyle.color,
          background: riskStyle.bg,
          borderColor: riskStyle.border,
        }}
      >
        {trend.risk.toUpperCase()}
      </span>
    </div>
  );
}

export default ClinicalTrajectory;
