import {
  analyzeTrajectory,
  type RiskLevel,
  type TrajectoryAnalysis,
  type TrendDirection,
  type VitalTrend,
} from '@/lib/cdss/trajectory-analyzer';
import type { VisitRecord } from '@/lib/cdss/visit-history-store';
import { sendMessage } from '@/utils/messaging';
import React, { useEffect, useMemo, useState } from 'react';
import type { ScreeningAlert } from './TTVInferenceUI';
import browser from 'webextension-polyfill';

// Lazy import ApexCharts
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
  improving: '↗',
  declining: '↘',
  stable: '→',
  insufficient_data: '—',
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

        // Capture diagnostics
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

        console.log(`[Trajectory] Analyzing ${allVisits.length} unique visits`);
        setVisitCount(allVisits.length);

        const trajectoryAnalysis = analyzeTrajectory(allVisits);
        console.log(`[Trajectory] ANALYZED: trend=${trajectoryAnalysis.overallTrend}, risk=${trajectoryAnalysis.overallRisk}`);

        setAnalysis(trajectoryAnalysis);
        setPhase('ready');
      } catch (error) {
        if (cancelled) return;
        const errStr = error instanceof Error ? error.message : String(error);
        console.error('[Trajectory] Load error:', errStr);
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

  // Chart config with EXACT TTVInferenceUI aesthetic
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
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: { enabled: true, delay: 150 },
        },
      },
      theme: { mode: 'dark' },
      colors: ['#EC4899', '#A78BFA', '#34D399'], // Pink, Purple, Emerald - more eye-catching
      stroke: { curve: 'smooth', width: 2 },
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.25, opacityTo: 0.05, shadeIntensity: 1 },
      },
      xaxis: {
        categories: bpTrend.dates,
        labels: { style: { colors: '#6B7280', fontSize: '9px', fontFamily: "'JetBrains Mono', monospace" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: '#9CA3AF', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace" } },
      },
      grid: { borderColor: 'rgba(255,255,255,0.06)', strokeDashArray: 4 },
      dataLabels: { enabled: false },
      tooltip: {
        theme: 'dark',
        style: { fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" },
        x: { show: true },
      },
      legend: {
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
      <div className="min-h-screen w-full bg-gradient-to-b from-[#202024] to-[#1a1a1d] p-4">
        {/* Brand Header */}
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="neu-logo w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={browser.runtime.getURL('/sentra.png')}
                alt="Sentra"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-title text-platinum">Sentra Assist</h1>
              <p className="text-small text-muted mt-0.5">Clinical Decision Support</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-left">
              <p className="text-[10px] text-muted leading-tight">Architected by</p>
              <p className="text-[12px] text-platinum font-semibold leading-tight">
                dr Ferdi Iskandar
              </p>
            </div>
            <div className="neu-logo w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={browser.runtime.getURL('/docsy.png')}
                alt="Docsy"
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-3 py-2 text-xs font-semibold text-platinum hover:bg-carbon-800 transition-colors"
          >
            ← Kembali
          </button>
          <h2 className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wide animate-pulse">Clinical Trajectory</h2>
        </div>
        <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-8 flex flex-col items-center justify-center gap-4">
          <div className="w-8 h-8 border-3 border-pulse-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-small text-muted">Menganalisis riwayat kunjungan...</p>
        </div>
      </div>
    );
  }

  // Render: Error
  if (phase === 'error') {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#202024] to-[#1a1a1d] p-4">
        {/* Brand Header */}
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="neu-logo w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={browser.runtime.getURL('/sentra.png')}
                alt="Sentra"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-title text-platinum">Sentra Assist</h1>
              <p className="text-small text-muted mt-0.5">Clinical Decision Support</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-left">
              <p className="text-[10px] text-muted leading-tight">Architected by</p>
              <p className="text-[12px] text-platinum font-semibold leading-tight">
                dr Ferdi Iskandar
              </p>
            </div>
            <div className="neu-logo w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={browser.runtime.getURL('/docsy.png')}
                alt="Docsy"
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-3 py-2 text-xs font-semibold text-platinum hover:bg-carbon-800 transition-colors"
          >
            ← Kembali
          </button>
          <h2 className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wide animate-pulse">Clinical Trajectory</h2>
        </div>
        <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-6 flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-critical/20 border border-critical/50 flex items-center justify-center">
            <span className="text-2xl text-critical">!</span>
          </div>
          <p className="text-small text-critical">{errorMsg || 'Gagal memuat data trajectory'}</p>
          <button
            onClick={() => setPhase('loading')}
            className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-4 py-2 text-xs font-semibold text-platinum hover:bg-carbon-800 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
        {scrapeLog.length > 0 && (
          <div className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] mt-4 p-4">
            <div className="text-tiny font-bold text-caution uppercase tracking-wider mb-2">ERROR DIAGNOSTICS</div>
            {scrapeLog.map((line, i) => (
              <div key={i} className="text-tiny text-muted font-mono mb-1">{line}</div>
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
    <div className="min-h-screen w-full bg-gradient-to-b from-[#202024] to-[#1a1a1d] p-4 flex flex-col gap-4">
      {/* Brand Header */}
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="neu-logo w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src={browser.runtime.getURL('/sentra.png')}
              alt="Sentra"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="text-title text-platinum">Sentra Assist</h1>
            <p className="text-small text-muted mt-0.5">Clinical Decision Support</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-left">
            <p className="text-[10px] text-muted leading-tight">Architected by</p>
            <p className="text-[12px] text-platinum font-semibold leading-tight">
              dr Ferdi Iskandar
            </p>
          </div>
          <div className="neu-logo w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src={browser.runtime.getURL('/docsy.png')}
              alt="Docsy"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Navigation with back button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-3 py-2 text-xs font-semibold text-platinum hover:bg-carbon-800 transition-colors"
        >
          ← Kembali
        </button>
        <div className="flex-1">
          <h2 className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wide animate-pulse">Clinical Trajectory</h2>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="px-2 py-1 text-tiny font-bold uppercase tracking-wide rounded border"
            style={{ color: TREND_COLOR[analysis.overallTrend], borderColor: TREND_COLOR[analysis.overallTrend] }}
          >
            {TREND_ICON[analysis.overallTrend]} {TREND_LABEL[analysis.overallTrend]}
          </span>
          <span className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-2 py-1 text-tiny font-mono text-muted">
            {visitCount} kunjungan
          </span>
        </div>
      </div>

      {/* Current Vitals - Compact 2 Columns */}
      <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-4">
        <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">VITAL SIGNS SAAT INI</h3>
        <div className="grid grid-cols-2 gap-2">
          <VitalCardCompact label="SBP/DBP" value={`${vitals.sbp}/${vitals.dbp}`} unit="mmHg" alert={vitals.sbp >= 140 || vitals.dbp >= 90} />
          <VitalCardCompact label="HR" value={String(vitals.hr)} unit="bpm" alert={vitals.hr > 100 || vitals.hr < 60} />
          <VitalCardCompact label="RR" value={String(vitals.rr)} unit="/min" alert={vitals.rr > 20 || vitals.rr < 12} />
          <VitalCardCompact label="TEMP" value={vitals.temp.toFixed(1)} unit="°C" alert={vitals.temp >= 37.5} />
          {vitals.glucose > 0 && (
            <VitalCardCompact label="GDS" value={String(vitals.glucose)} unit="mg/dL" alert={vitals.glucose >= 200 || vitals.glucose < 70} />
          )}
        </div>
      </div>

      {/* Screening Alerts */}
      {alerts.length > 0 && (
        <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-4">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">SCREENING ALERTS</h3>
          <div className="flex flex-col gap-2">
            {alerts.slice(0, 3).map((alert) => (
              <div key={alert.id} className="flex items-center gap-2 p-2 rounded bg-critical/5 border border-critical/20">
                <span className="text-tiny font-bold text-critical uppercase tracking-wide">{alert.severity}</span>
                <span className="text-small text-platinum">{alert.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trajectory Status */}
      <div
        className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-4 flex items-center gap-3 border-l-4"
        style={{ borderLeftColor: TREND_COLOR[analysis.overallTrend] }}
      >
        <span className="text-2xl" style={{ color: TREND_COLOR[analysis.overallTrend] }}>
          {TREND_ICON[analysis.overallTrend]}
        </span>
        <div className="flex-1">
          <div className="text-small font-bold uppercase tracking-wide" style={{ color: TREND_COLOR[analysis.overallTrend] }}>
            {TREND_LABEL[analysis.overallTrend]}
          </div>
          <div className="text-small text-muted">{analysis.summary}</div>
        </div>
        <span
          className="px-2 py-1 text-tiny font-bold uppercase tracking-wide rounded border"
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
      {chartConfig && (
        <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-4">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">TREND VISUALIZATION</h3>
          <div className="rounded overflow-hidden">
            <React.Suspense fallback={<div className="text-small text-muted p-4">Memuat chart...</div>}>
              <Chart
                options={chartConfig.options}
                series={chartConfig.series}
                type="area"
                height={180}
              />
            </React.Suspense>
          </div>
        </div>
      )}

      {/* Vital Trend Cards */}
      {activeTrends.length > 0 && (
        <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-4">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">VITAL TRENDS</h3>
          <div className="flex flex-col gap-2">
            {activeTrends.map((trend) => (
              <TrendCard key={trend.parameter} trend={trend} />
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {analysis.recommendations.length > 0 && (
        <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-[6px] p-4">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">REKOMENDASI</h3>
          <div className="flex flex-col gap-2">
            {analysis.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded bg-carbon-800/50">
                <span
                  className="text-tiny font-bold uppercase tracking-wide"
                  style={{
                    color:
                      rec.priority === 'high'
                        ? '#EF4444'
                        : rec.priority === 'medium'
                          ? '#F59E0B'
                          : '#6B7280',
                  }}
                >
                  {rec.priority}
                </span>
                <span className="flex-1 text-small text-platinum">{rec.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scraper Diagnostics (only when ≤1 visit) */}
      {scrapeLog.length > 0 && visitCount <= 1 && (
        <div className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-4">
          <div className="text-tiny font-bold text-caution uppercase tracking-wider mb-2">SCRAPER DIAGNOSTICS</div>
          {scrapeLog.map((line, i) => (
            <div key={i} className="text-tiny text-muted font-mono mb-1">{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

// Sub-components

function VitalCard({ label, value, unit, alert }: { label: string; value: string; unit: string; alert: boolean }) {
  return (
    <div className={`neu-card-inset p-3 flex flex-col gap-1 ${alert ? 'border-l-2 border-critical' : ''}`}>
      <span className="text-tiny font-semibold text-muted uppercase tracking-wide">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className={`text-base font-mono font-bold ${alert ? 'text-critical' : 'text-platinum'}`}>
          {value}
        </span>
        <span className="text-tiny font-mono text-muted">{unit}</span>
      </div>
    </div>
  );
}

// Compact horizontal vital card (1 row per vital)
function VitalCardCompact({ label, value, unit, alert }: { label: string; value: string; unit: string; alert: boolean }) {
  return (
    <div className={`bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] px-3 py-2 flex items-center gap-3 ${alert ? 'border-l-2 border-critical' : ''}`}>
      <span className="text-tiny font-semibold text-muted uppercase tracking-wide w-20">{label}</span>
      <div className="flex items-baseline gap-1 flex-1">
        <span className={`text-sm font-mono font-bold ${alert ? 'text-critical' : 'text-platinum'}`}>
          {value}
        </span>
        <span className="text-tiny font-mono text-muted">{unit}</span>
      </div>
    </div>
  );
}

function TrendCard({ trend }: { trend: VitalTrend }) {
  const riskStyle = RISK_STYLE[trend.risk];
  const trendColor = TREND_COLOR[trend.trend];

  return (
    <div className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[6px] p-3 flex items-center gap-3">
      <span className="text-2xl" style={{ color: trendColor }}>{TREND_ICON[trend.trend]}</span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-small font-semibold text-platinum uppercase tracking-wide">{trend.label}</span>
          <span className="text-small font-mono font-bold" style={{ color: trendColor }}>
            {trend.changePercent > 0 ? '+' : ''}{trend.changePercent.toFixed(0)}%
          </span>
        </div>
        <span className="text-tiny text-muted">{trend.note}</span>
      </div>
      <span
        className="px-2 py-1 text-tiny font-bold uppercase tracking-wide rounded border"
        style={{
          color: riskStyle.color,
          background: riskStyle.bg,
          borderColor: riskStyle.border,
        }}
      >
        {trend.risk}
      </span>
    </div>
  );
}
