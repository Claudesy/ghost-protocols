/**
 * Sentra Assist - Side Panel Entry
 * Updated with TTV Inference UI + Emergency Dashboard
 */

import { ClinicalDifferential } from '@/components/clinical/ClinicalDifferential';
import { ClinicalTrajectory } from '@/components/clinical/ClinicalTrajectory';
import {
  TTVInferenceUI,
  type AutosenPreset,
  type ScreeningAlert,
  type TTVInferenceData,
} from '@/components/clinical/TTVInferenceUI';
import { SidePanelHeader } from '@/components/sidepanel/SidePanelHeader';
import { SidePanelFooter } from '@/components/sidepanel/SidePanelFooter';
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

type TabType = 'ttv' | 'emergency' | 'agent';
type ViewState = 'main' | 'trajectory' | 'differential';

// ============================================================================
// TTV STATE (Lifted to parent to persist across tab switches)
// ============================================================================
export interface TTVFormState {
  sbp: string;
  dbp: string;
  hr: string;
  rr: string;
  temp: string;
  spo2: string; // ✅ SPO2 field
  glucose: string;
  symptomText: string;
  allergies: string[];
  pregnancyStatus: boolean | null;
  autosenPreset: AutosenPreset;
}

const initialTTVState: TTVFormState = {
  sbp: '',
  dbp: '',
  hr: '',
  rr: '',
  temp: '',
  spo2: '', // ✅ SPO2 initial value
  glucose: '',
  symptomText: '',
  allergies: [],
  pregnancyStatus: null,
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

  // Trajectory state - passed from ClinicalTrajectory to ClinicalDifferential
  const [trajectoryData, setTrajectoryData] = useState<import('@/lib/iskandar-diagnosis-engine/trajectory-analyzer').TrajectoryAnalysis | undefined>(undefined);
  const [visitCount, setVisitCount] = useState<number>(0);

  // Check if there's any critical/high alert
  const hasEmergency = emergencyAlerts.some(
    (alert) => alert.severity === 'critical' || alert.severity === 'high'
  );

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

  const handleTTVComplete = (data: TTVInferenceData) => {
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
    pregnancyStatus: ttvState.pregnancyStatus,
  });

  // Trajectory view (full-screen overlay)
  if (viewState === 'trajectory') {
    return (
      <div className="view-transition">
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
          onNextDifferential={(trajectory, count) => {
            setTrajectoryData(trajectory);
            setVisitCount(count);
            setViewState('differential');
          }}
        />
      </div>
    );
  }

  // Differential diagnosis view (full-screen overlay)
  if (viewState === 'differential') {
    return (
      <div className="view-transition">
        <ClinicalDifferential
          keluhanUtama={ttvState.symptomText || '-'}
          keluhanTambahan=""
          patientAge={patientData.age}
          patientGender={patientData.gender}
          patientRM={patientData.rm}
          allergies={ttvState.allergies}
          confirmedPregnancyStatus={patientData.gender === 'L' ? false : ttvState.pregnancyStatus}
          vitals={{
            sbp: parseInt(ttvState.sbp) || 0,
            dbp: parseInt(ttvState.dbp) || 0,
            hr: parseInt(ttvState.hr) || 0,
            rr: parseInt(ttvState.rr) || 0,
            temp: parseFloat(ttvState.temp) || 0,
            glucose: parseInt(ttvState.glucose) || 0,
          }}
          trajectory={trajectoryData}
          hasVisitHistory={visitCount > 1}
          onBack={() => setViewState('main')}
        />
      </div>
    );
  }

  return (
    <div
      key={`main-${activeTab}`}
      className="doctor-static-ui view-transition w-full min-h-screen p-6 relative"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,53,0.04) 0%, transparent 60%), linear-gradient(180deg, #1e1e24 0%, #16161a 100%)',
      }}
    >
      {/* Ambient glow effect */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 55% at 50% -12%, rgba(255,107,53,0.06) 0%, rgba(74,158,255,0.02) 40%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Header */}
      <SidePanelHeader variant="full" />

      {/* Tab Navigation */}
      <div className="neu-card-inset p-1.5 mb-7 relative z-10">
        <div className="flex gap-1.5">
          <button
            onClick={() => setActiveTab('ttv')}
            className={`motion-press flex-1 py-2 px-2 rounded-lg text-body relative ${
              activeTab === 'ttv'
                ? 'neu-tab-active text-platinum font-semibold'
                : 'neu-tab text-muted font-medium'
            }`}
          >
            VS Inference
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`motion-press flex-1 py-2 px-2 rounded-lg text-body flex items-center justify-center gap-2 relative ${
              activeTab === 'emergency'
                ? 'neu-tab-active text-platinum font-semibold'
                : 'neu-tab text-muted font-medium'
            } ${hasEmergency ? 'emergency-tab-active' : ''}`}
          >
            <span className={hasEmergency ? 'emergency-blink' : ''}>Emergency</span>
            {hasEmergency && <span className="emergency-dot" />}
          </button>
          <button
            onClick={() => setActiveTab('agent')}
            className={`motion-press flex-1 py-2 px-2 rounded-lg text-body relative ${
              activeTab === 'agent'
                ? 'neu-tab-active text-platinum font-semibold'
                : 'neu-tab text-muted font-medium'
            }`}
          >
            Agent
          </button>
        </div>
      </div>

      {/* Content - Use CSS visibility instead of conditional rendering to preserve state */}
      <div
        className="space-y-3"
        style={{
          position: 'relative',
          zIndex: 10,
          isolation: 'isolate',
          minHeight: 'fit-content',
          paddingBottom: '20px',
        }}
      >
        <div className={activeTab === 'ttv' ? 'tab-panel-active' : 'tab-panel-hidden'}>
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
            onNavigateToTrajectory={() => setViewState('trajectory')}
          />
        </div>
        <div className={activeTab === 'emergency' ? 'tab-panel-active' : 'tab-panel-hidden'}>
          <EmergencyDashboard alerts={emergencyAlerts} />
        </div>
        <div className={activeTab === 'agent' ? 'tab-panel-active' : 'tab-panel-hidden'}>
          <AgentPanel />
        </div>
      </div>

      {/* Footer */}
      <SidePanelFooter variant="full" institutionName="Puskesmas Balowerti" />
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

// Agent Panel Component
function AgentPanel() {
  return (
    <div className="agent-panel space-y-4">
      <div className="emergency-header">
        <h2>Agent</h2>
        <span className="emergency-count">AI</span>
      </div>

      <div className="neu-card p-4 space-y-4">
        <div>
          <h3 className="text-title mb-2">Sentra Agent</h3>
          <p className="text-body text-muted">
            AI-powered clinical assistant for automated workflows and intelligent decision support.
          </p>
        </div>

        <div className="emergency-empty">
          <p>Agent features coming soon...</p>
          <span>Advanced AI capabilities for clinical automation</span>
        </div>
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
        <div
          style={{
            padding: 20,
            color: '#EF4444',
            background: '#0F1115',
            fontFamily: 'monospace',
            fontSize: 12,
          }}
        >
          <h2 style={{ color: '#F59E0B' }}>Ghost Protocols — Runtime Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{this.state.error?.message}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8, color: '#888', fontSize: 10 }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: '8px 16px',
              background: '#3B82F6',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
            }}
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
