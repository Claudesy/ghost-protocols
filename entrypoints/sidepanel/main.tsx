/**
 * Sentra Assist - Side Panel Entry
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Zap, User, FileText, Stethoscope, Pill, ChevronRight } from 'lucide-react';
import './style.css';

console.log('[SidePanel] main.tsx loading...');

type TabType = 'overview' | 'clinical' | 'cdss';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="w-full min-h-screen p-5 relative" style={{ background: 'linear-gradient(180deg, #121212 0%, #0b0b0b 100%)' }}>
      {/* Top light effect */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,107,47,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="neu-logo w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src="/sentralogo.png"
              alt="Sentra"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="text-title text-platinum">Sentra Assist</h1>
            <p className="text-small text-muted mt-0.5">Clinical Decision Support</p>
          </div>
        </div>
        <button className="neu-circle-btn flex items-center justify-center w-10 h-10">
          <Zap className="w-5 h-5 text-pulse-500" />
        </button>
      </header>

      {/* Tab Navigation */}
      <div className="neu-card-inset p-1.5 mb-6">
        <div className="flex gap-1">
          {(['overview', 'clinical', 'cdss'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-body transition-all capitalize ${
                activeTab === tab
                  ? 'neu-tab-active text-platinum font-medium'
                  : 'neu-tab text-muted hover:text-cream'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {activeTab === 'overview' && <OverviewContent />}
        {activeTab === 'clinical' && <ClinicalContent />}
        {activeTab === 'cdss' && <CDSSContent />}
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
    </div>
  );
}

function OverviewContent() {
  return (
    <>
      {/* Patient Card */}
      <div className="neu-card p-4">
        <div className="flex items-center gap-3">
          <div className="neu-icon-box w-12 h-12 flex items-center justify-center">
            <User className="w-6 h-6 text-cream" />
          </div>
          <div className="flex-1">
            <p className="text-subtitle text-platinum">Ahmad Suryadi</p>
            <p className="text-small text-muted">L / 45 th • RM: 2024-0892</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted" />
        </div>
      </div>

      {/* Clinical Flow */}
      <p className="text-caption text-muted mt-5 mb-2 px-1">Clinical Flow</p>
      <div className="space-y-2">
        <ListItem icon={<FileText className="w-5 h-5 text-cream" />} label="Anamnesa" subtitle="Keluhan utama" />
        <ListItem icon={<Stethoscope className="w-5 h-5 text-cream" />} label="Diagnosa" subtitle="ICD-10 lookup" />
        <ListItem icon={<Pill className="w-5 h-5 text-cream" />} label="Terapi / Resep" subtitle="Auto-fill prescription" />
      </div>
    </>
  );
}

function ClinicalContent() {
  return (
    <div className="neu-card p-4">
      <p className="text-caption text-muted mb-2">Chief Complaint</p>
      <p className="text-subtitle text-platinum">Demam tinggi 3 hari, batuk berdahak</p>
      <div className="flex items-center gap-2 mt-3">
        <span className="text-small px-2.5 py-1 rounded-md bg-pulse-500/10 text-cream border border-pulse-500/20">
          Fever
        </span>
        <span className="text-small px-2.5 py-1 rounded-md bg-carbon-800/80 text-cream border border-carbon-700/60">
          Cough
        </span>
      </div>
    </div>
  );
}

function CDSSContent() {
  return (
    <>
      <div className="neu-card p-4">
        <p className="text-subtitle text-platinum mb-3">AI Recommendations</p>
        <p className="text-small text-muted">Click button below to get AI-powered diagnosis suggestions</p>
      </div>
      <button className="neu-action-btn w-full mt-4 py-3.5 text-subtitle text-platinum flex items-center justify-center gap-2">
        <Zap className="w-5 h-5" />
        Get AI Suggestions
      </button>
    </>
  );
}

function ListItem({ icon, label, subtitle }: { icon: React.ReactNode; label: string; subtitle: string }) {
  return (
    <button className="neu-list-item w-full p-3.5 flex items-center gap-3 text-left">
      <div className="neu-icon-box w-10 h-10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-subtitle text-platinum">{label}</p>
        <p className="text-small text-muted truncate">{subtitle}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted flex-shrink-0" />
    </button>
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
