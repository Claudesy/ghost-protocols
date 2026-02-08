/**
 * Sentra Assist - Side Panel Entry
 * Updated with TTV Inference UI + Emergency Dashboard
 */

import {
  TTVInferenceUI,
  type AutosenPreset,
  type ScreeningAlert,
} from '@/components/clinical/TTVInferenceUI';
import { ClinicalTrajectory } from '@/components/clinical/ClinicalTrajectory';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// ============================================================================
// PATIENT DATA TYPE
// ============================================================================
interface PatientData {
  name: string;
  gender: 'L' | 'P';
  age: number;
  rm: string;
  dob: string;
  bloodType: string;
  bpjsStatus: 'aktif' | 'nonaktif' | 'mandiri' | null;
  kelurahan: string;
}

console.log('[SidePanel] main.tsx loading...');

type TabType = 'ttv' | 'emergency';
type ViewState = 'main' | 'trajectory';

// ============================================================================
// TTV STATE (Lifted to parent to persist across tab switches)
// ============================================================================
export interface TTVFormState {
  sbp: string;
  dbp: string;
  hr: string;
  rr: string;
  temp: string;
  glucose: string;
  symptomText: string;
  allergies: string[];
  autosenPreset: AutosenPreset;
}

const initialTTVState: TTVFormState = {
  sbp: '',
  dbp: '',
  hr: '',
  rr: '',
  temp: '',
  glucose: '',
  symptomText: '',
  allergies: [],
  autosenPreset: 'normal',
};

// Default patient data (shown while loading)
const defaultPatient: PatientData = {
  name: 'Memuat...',
  gender: 'L',
  age: 0,
  rm: '-',
  dob: '',
  bloodType: '',
  bpjsStatus: null,
  kelurahan: '',
};

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('ttv');
  const [viewState, setViewState] = useState<ViewState>('main');
  const [emergencyAlerts, setEmergencyAlerts] = useState<ScreeningAlert[]>([]);

  // Lifted TTV state - persists across tab switches
  const [ttvState, setTTVState] = useState<TTVFormState>(initialTTVState);

  // Patient data state (fetched from ePuskesmas page)
  const [patientData, setPatientData] = useState<PatientData>(defaultPatient);
  const [isLoadingPatient, setIsLoadingPatient] = useState(true);

  // Check if there's any critical/high alert
  const hasEmergency = emergencyAlerts.some(
    (alert) => alert.severity === 'critical' || alert.severity === 'high'
  );

  // Check if TTV data is sufficient for trajectory
  const hasTTVData = Boolean(ttvState.sbp && ttvState.dbp && ttvState.hr);


  // ========================================
  // Fetch patient data from ePuskesmas page
  // ========================================
  const fetchPatientData = useCallback(async () => {
    console.log('[SidePanel] Fetching patient data...');
    setIsLoadingPatient(true);

    try {
      // Get active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab?.id) {
        console.error('[SidePanel] No active tab found');
        setIsLoadingPatient(false);
        return;
      }

      // Send message to content script
      const response = await chrome.tabs.sendMessage(tab.id, { type: 'getPatientInfo' });
      console.log('[SidePanel] Patient info response:', response);

      if (response?.success && response.patient) {
        const p = response.patient;
        setPatientData({
          name: p.name || 'Tidak ditemukan',
          gender: p.gender || 'L',
          age: p.age || 0,
          rm: p.rm || '-',
          dob: p.dob || '',
          bloodType: '', // Not usually in ePuskesmas header
          bpjsStatus: p.bpjsStatus || null,
          kelurahan: p.kelurahan || '',
        });
      } else {
        console.warn('[SidePanel] Failed to get patient info:', response?.error);
        setPatientData({
          ...defaultPatient,
          name: 'Data tidak ditemukan',
        });
      }
    } catch (error) {
      console.error('[SidePanel] Error fetching patient data:', error);
      setPatientData({
        ...defaultPatient,
        name: 'Error memuat data',
      });
    } finally {
      setIsLoadingPatient(false);
    }
  }, []);

  // Auto-fetch patient data on mount
  useEffect(() => {
    // Small delay to ensure content script is ready
    const timer = setTimeout(() => {
      fetchPatientData();
    }, 500);

    return () => clearTimeout(timer);
  }, [fetchPatientData]);

  const handleTTVComplete = (data: any) => {
    console.log('[SidePanel] TTV Data:', data);
    // TODO: Send to ePuskesmas
  };

  // Callback to receive alerts from TTVInferenceUI
  const handleAlertsChange = useCallback((alerts: ScreeningAlert[]) => {
    console.log(
      '[App] Received alerts:',
      alerts.length,
      alerts.map((a) => a.type)
    );
    setEmergencyAlerts(alerts);
  }, []);

  // Debug: log ttvState changes
  console.log('[App] Current ttvState:', {
    sbp: ttvState.sbp,
    dbp: ttvState.dbp,
    glucose: ttvState.glucose,
  });

  // Trajectory view (full-screen overlay)
  if (viewState === 'trajectory') {
    return (
      <ClinicalTrajectory
        vitals={{
          sbp: parseInt(ttvState.sbp) || 0,
          dbp: parseInt(ttvState.dbp) || 0,
          hr: parseInt(ttvState.hr) || 0,
          rr: parseInt(ttvState.rr) || 0,
          temp: parseFloat(ttvState.temp) || 0,
          glucose: parseInt(ttvState.glucose) || 0,
        }}
        keluhanUtama={ttvState.symptomText || '-'}
        narrative={{
          keluhan_utama: ttvState.symptomText || '-',
          lama_sakit: '',
          is_akut: true,
          confidence: 0.5,
        }}
        alerts={emergencyAlerts}
        patientAge={patientData.age}
        patientGender={patientData.gender}
        patientName={patientData.name}
        patientRM={patientData.rm}
        onBack={() => setViewState('main')}
      />
    );
  }

  return (
    <div
      className="w-full min-h-screen p-5 relative"
      style={{ background: 'linear-gradient(180deg, #202024 0%, #1a1a1d 100%)' }}
    >
      {/* Top light effect */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,107,47,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <header className="flex items-center justify-between mb-6">
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
          <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src={browser.runtime.getURL('/docsy.png')}
              alt="Docsy"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="neu-card-inset p-1.5 mb-6">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab('ttv')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-body transition-all ${
              activeTab === 'ttv'
                ? 'neu-tab-active text-platinum font-medium'
                : 'neu-tab text-muted hover:text-cream'
            }`}
          >
            TTV Inference
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-body transition-all flex items-center justify-center gap-2 ${
              activeTab === 'emergency'
                ? 'neu-tab-active text-platinum font-medium'
                : 'neu-tab text-muted hover:text-cream'
            } ${hasEmergency ? 'emergency-tab-active' : ''}`}
          >
            <span className={hasEmergency ? 'emergency-blink' : ''}>Emergency</span>
            {hasEmergency && <span className="emergency-dot" />}
          </button>
        </div>
      </div>

      {/* Content - Use CSS visibility instead of conditional rendering to preserve state */}
      <div className="space-y-3">
        <div style={{ display: activeTab === 'ttv' ? 'block' : 'none' }}>
          <TTVInferenceUI
            patientName={patientData.name}
            patientGender={patientData.gender}
            patientAge={patientData.age}
            patientRM={patientData.rm}
            patientDOB={patientData.dob}
            patientBloodType={patientData.bloodType}
            patientBPJSStatus={patientData.bpjsStatus}
            patientKelurahan={patientData.kelurahan}
            onComplete={handleTTVComplete}
            onAlertsChange={handleAlertsChange}
            showMaskedName={false}
            ttvState={ttvState}
            onTTVStateChange={setTTVState}
            onRefreshPatient={fetchPatientData}
            isLoadingPatient={isLoadingPatient}
          />
        </div>
        <div style={{ display: activeTab === 'emergency' ? 'block' : 'none' }}>
          <EmergencyDashboard alerts={emergencyAlerts} />
        </div>
      </div>

      {/* Clinical Trajectory Button */}
      {hasTTVData && (
        <button
          onClick={() => setViewState('trajectory')}
          className="w-full mt-4 py-3 px-4 rounded-xl text-body font-medium transition-all"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.1) 100%)',
            border: '1px solid rgba(59,130,246,0.3)',
            color: '#3B82F6',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 16 }}>{'\u2197'}</span>
          Clinical Trajectory
        </button>
      )}

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t border-carbon-700/60">
        <div className="flex items-center justify-between text-small text-muted">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pulse-500" />
            <span>Connected</span>
          </div>
          <span>Puskesmas Balowerti</span>
        </div>
        {/* Alpha Version Disclaimer */}
        <div className="mt-3 text-center space-y-1">
          <div className="text-[10px] text-amber-700/80 font-medium tracking-wide">
            ALPHA VERSION – INTERNAL TESTING
          </div>
          <p className="text-[9px] text-muted/70 leading-tight px-2">
            Warning: This system is under active development. Outputs are not intended and must not
            be relied upon for diagnosis, treatment, or any clinical decision-making. Compliance
            with Indonesian healthcare regulations is a core commitment.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Emergency Dashboard Component
interface EmergencyDashboardProps {
  alerts: ScreeningAlert[];
}

function EmergencyDashboard({ alerts }: EmergencyDashboardProps) {
  const criticalAlerts = alerts.filter((a) => a.severity === 'critical');
  const highAlerts = alerts.filter((a) => a.severity === 'high');
  const warningAlerts = alerts.filter((a) => a.severity === 'warning');

  return (
    <div className="emergency-dashboard">
      {/* Emergency Header */}
      <div className="emergency-header">
        <h2>Emergency Alerts</h2>
        <span className="emergency-count">{alerts.length}</span>
      </div>

      {/* No Alerts State */}
      {alerts.length === 0 && (
        <div className="emergency-empty">
          <p>Tidak ada alert aktif</p>
          <span>Semua vital signs dalam batas normal</span>
        </div>
      )}

      {/* Critical Alerts Section */}
      {criticalAlerts.length > 0 && (
        <div className="emergency-section emergency-section-critical">
          <h3 className="emergency-section-title">
            <span className="emergency-indicator critical" />
            CRITICAL ({criticalAlerts.length})
          </h3>
          <div className="emergency-cards">
            {criticalAlerts.map((alert) => (
              <EmergencyCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      )}

      {/* High Alerts Section */}
      {highAlerts.length > 0 && (
        <div className="emergency-section emergency-section-high">
          <h3 className="emergency-section-title">
            <span className="emergency-indicator high" />
            HIGH PRIORITY ({highAlerts.length})
          </h3>
          <div className="emergency-cards">
            {highAlerts.map((alert) => (
              <EmergencyCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      )}

      {/* Warning Alerts Section */}
      {warningAlerts.length > 0 && (
        <div className="emergency-section emergency-section-warning">
          <h3 className="emergency-section-title">
            <span className="emergency-indicator warning" />
            WARNING ({warningAlerts.length})
          </h3>
          <div className="emergency-cards">
            {warningAlerts.map((alert) => (
              <EmergencyCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      )}

      {/* Clinical Parameters */}
      {alerts.length > 0 && (
        <div className="emergency-diagram-area">
          <h3>Clinical Parameters</h3>
          <div className="diagram-grid">
            <div className="diagram-card">
              <span className="diagram-label">Blood Pressure</span>
              <span className="diagram-value">
                {alerts.find((a) => a.clinicalData?.map)?.clinicalData?.map
                  ? `MAP: ${alerts.find((a) => a.clinicalData?.map)?.clinicalData?.map} mmHg`
                  : '—'}
              </span>
            </div>
            <div className="diagram-card">
              <span className="diagram-label">Glucose</span>
              <span className="diagram-value">
                {alerts.find((a) => a.gate === 'GATE_3_GLUCOSE')
                  ? alerts.find((a) => a.gate === 'GATE_3_GLUCOSE')?.type === 'hypoglycemia'
                    ? 'LOW'
                    : 'HIGH'
                  : '—'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Emergency Card Component
function EmergencyCard({ alert }: { alert: ScreeningAlert }) {
  return (
    <div className={`emergency-card emergency-card-${alert.severity}`}>
      <div className="emergency-card-header">
        <span className="emergency-card-title">{alert.title}</span>
        <span className="emergency-card-gate">{alert.gate.replace(/_/g, ' ')}</span>
      </div>
      <p className="emergency-card-reasoning">{alert.reasoning}</p>
      <div className="emergency-card-recommendations">
        {alert.recommendations.map((rec, idx) => (
          <div
            key={idx}
            className={`emergency-rec-item ${rec.startsWith('━━━') ? 'emergency-rec-section' : ''}`}
          >
            {rec.startsWith('━━━') ? rec : `→ ${rec}`}
          </div>
        ))}
      </div>
    </div>
  );
}

// Error Boundary to catch runtime crashes and SHOW the error
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[SidePanel] React crash:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, color: '#EF4444', background: '#0F1115', fontFamily: 'monospace', fontSize: 12 }}>
          <h2 style={{ color: '#F59E0B' }}>Sentra Assist — Runtime Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>
            {this.state.error?.message}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8, color: '#888', fontSize: 10 }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: 16, padding: '8px 16px', background: '#3B82F6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Mount React
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
