/**
 * Sentra Assist - Side Panel Entry
 * Updated with TTV Inference UI + Emergency Dashboard
 */

import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { TTVInferenceUI, type ScreeningAlert } from '@/components/clinical/TTVInferenceUI';
import './style.css';

console.log('[SidePanel] main.tsx loading...');

type TabType = 'ttv' | 'emergency';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('ttv');
  const [emergencyAlerts, setEmergencyAlerts] = useState<ScreeningAlert[]>([]);

  // Check if there's any critical/high alert
  const hasEmergency = emergencyAlerts.some(
    (alert) => alert.severity === 'critical' || alert.severity === 'high'
  );

  // Mock patient data
  const mockPatient = {
    name: 'Ahmad Suryadi',
    gender: 'L' as const,
    age: 45,
    rm: '2024-0892',
  };

  const handleTTVComplete = (data: any) => {
    console.log('[SidePanel] TTV Data:', data);
    // TODO: Send to ePuskesmas
  };

  // Callback to receive alerts from TTVInferenceUI
  const handleAlertsChange = useCallback((alerts: ScreeningAlert[]) => {
    setEmergencyAlerts(alerts);
  }, []);

  return (
    <div
      className="w-full min-h-screen p-5 relative"
      style={{ background: 'linear-gradient(180deg, #121212 0%, #0b0b0b 100%)' }}
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
            <img src="/sentra.png" alt="Sentra" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h1 className="text-title text-platinum">Sentra Assist</h1>
            <p className="text-small text-muted mt-0.5">Clinical Decision Support</p>
          </div>
        </div>
        <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
          <img src="/docsy.png" alt="Docsy" className="w-14 h-14 object-contain" />
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
            {hasEmergency && (
              <span className="emergency-dot" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {activeTab === 'ttv' && (
          <TTVInferenceUI
            patientName={mockPatient.name}
            patientGender={mockPatient.gender}
            patientAge={mockPatient.age}
            patientRM={mockPatient.rm}
            onComplete={handleTTVComplete}
            onAlertsChange={handleAlertsChange}
            showMaskedName={false}
          />
        )}
        {activeTab === 'emergency' && (
          <EmergencyDashboard alerts={emergencyAlerts} />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t border-carbon-700/60">
        <div className="flex items-center justify-between text-small text-muted">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pulse-500" />
            <span>Connected</span>
          </div>
          <span>Puskesmas Balowerti</span>
        </div>
      </footer>

      {/* Disclaimer */}
      <div className="mt-6 p-3 rounded-lg bg-carbon-800/50 border border-carbon-700/40">
        <p className="text-xs text-muted leading-relaxed">
          <span className="text-caution font-medium">Disclaimer: Beta Testing Phase</span>
          <br /><br />
          This device is a pre-release prototype currently undergoing controlled beta testing.
          Its use is strictly supervised and authorized by Sentra. The product is not yet finalized,
          and its performance, features, and safety are subject to change. Users acknowledge that
          they are participating in a testing phase and may encounter unforeseen errors or instability.
          Sentra is not liable for any direct or indirect consequences arising from the use of this
          device during this trial period. All feedback and usage data will be collected to improve
          the final product.
        </p>
      </div>
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
        {alert.recommendations.slice(0, 3).map((rec, idx) => (
          <div key={idx} className="emergency-rec-item">→ {rec}</div>
        ))}
      </div>
    </div>
  );
}

// Mount React
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
