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

type TabType = 'ttv' | 'emergency' | 'developer' | 'agent';
type ViewState = 'main' | 'trajectory' | 'differential';
type AuthState = 'checking' | 'locked' | 'authenticated';

interface AuthUserCredential {
  username: string;
  displayName: string;
  salt: string;
  passwordHash: string;
}

interface AuthSession {
  username: string;
  displayName: string;
  authenticatedAt: number;
  expiresAt: number;
}

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

const AUTH_USERS_KEY = 'sentra.auth.users.v1';
const AUTH_SESSION_KEY = 'sentra.auth.session.v1';
const AUTH_SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const DEFAULT_AUTH_USERS: AuthUserCredential[] = [
  {
    username: 'chief',
    displayName: 'Chief',
    salt: 'sentra-chief-v1',
    passwordHash: '3d780091e09bfce6cfa9bfbfabaaa655f370b7f1a50435d88a1f7f082ddc4a51',
  },
];

function normalizeUsername(value: string): string {
  return value.trim().toLowerCase();
}

function isValidAuthUserCredential(value: unknown): value is AuthUserCredential {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<AuthUserCredential>;
  return (
    typeof candidate.username === 'string' &&
    typeof candidate.displayName === 'string' &&
    typeof candidate.salt === 'string' &&
    typeof candidate.passwordHash === 'string'
  );
}

function isValidAuthSession(value: unknown): value is AuthSession {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<AuthSession>;
  return (
    typeof candidate.username === 'string' &&
    typeof candidate.displayName === 'string' &&
    typeof candidate.authenticatedAt === 'number' &&
    typeof candidate.expiresAt === 'number'
  );
}

async function sha256Hex(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function hashPasswordWithSalt(password: string, salt: string): Promise<string> {
  return sha256Hex(`${salt}:${password}`);
}

async function ensureAuthUsers(): Promise<AuthUserCredential[]> {
  try {
    const stored = await chrome.storage.local.get(AUTH_USERS_KEY);
    const users = stored?.[AUTH_USERS_KEY];
    if (Array.isArray(users)) {
      const normalized = users.filter(isValidAuthUserCredential);
      if (normalized.length > 0) return normalized;
    }
  } catch (error) {
    console.error('[SidePanel] Failed to read auth users:', error);
  }

  try {
    await chrome.storage.local.set({ [AUTH_USERS_KEY]: DEFAULT_AUTH_USERS });
  } catch (error) {
    console.error('[SidePanel] Failed to initialize auth users:', error);
  }
  return DEFAULT_AUTH_USERS;
}

async function restoreAuthSession(): Promise<AuthSession | null> {
  try {
    const stored = await chrome.storage.local.get(AUTH_SESSION_KEY);
    const session = stored?.[AUTH_SESSION_KEY];
    if (!isValidAuthSession(session)) return null;
    if (session.expiresAt <= Date.now()) {
      await chrome.storage.local.remove(AUTH_SESSION_KEY);
      return null;
    }
    return session;
  } catch (error) {
    console.error('[SidePanel] Failed to restore auth session:', error);
    return null;
  }
}

function App() {
  const [authState, setAuthState] = useState<AuthState>('checking');
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

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

  useEffect(() => {
    let cancelled = false;

    const bootstrapAuth = async () => {
      await ensureAuthUsers();
      const session = await restoreAuthSession();
      if (cancelled) return;

      if (session) {
        setAuthSession(session);
        setAuthState('authenticated');
        return;
      }

      setAuthSession(null);
      setAuthState('locked');
    };

    void bootstrapAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError('');

    const username = normalizeUsername(usernameInput);
    const password = passwordInput.trim();

    if (!username || !password) {
      setAuthError('Username dan password wajib diisi.');
      return;
    }

    setIsAuthenticating(true);
    try {
      const users = await ensureAuthUsers();
      const matchedUser = users.find((user) => normalizeUsername(user.username) === username);
      if (!matchedUser) {
        setAuthError('Username atau password tidak valid.');
        return;
      }

      const passwordHash = await hashPasswordWithSalt(password, matchedUser.salt);
      if (passwordHash !== matchedUser.passwordHash) {
        setAuthError('Username atau password tidak valid.');
        return;
      }

      const now = Date.now();
      const nextSession: AuthSession = {
        username: matchedUser.username,
        displayName: matchedUser.displayName,
        authenticatedAt: now,
        expiresAt: now + AUTH_SESSION_TTL_MS,
      };

      await chrome.storage.local.set({ [AUTH_SESSION_KEY]: nextSession });
      setPasswordInput('');
      setAuthSession(nextSession);
      setAuthState('authenticated');
      setViewState('main');
      setActiveTab('ttv');
    } catch (error) {
      console.error('[SidePanel] Login failed:', error);
      setAuthError('Gagal memproses login. Coba lagi.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = async () => {
    try {
      await chrome.storage.local.remove(AUTH_SESSION_KEY);
    } catch (error) {
      console.error('[SidePanel] Failed to clear auth session:', error);
    }
    setAuthSession(null);
    setAuthState('locked');
    setPasswordInput('');
    setAuthError('');
    setViewState('main');
    setActiveTab('ttv');
  };

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

  if (authState === 'checking') {
    return (
      <div
        className="doctor-static-ui w-full min-h-screen p-6 flex items-center justify-center"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,53,0.04) 0%, transparent 60%), linear-gradient(180deg, #1e1e24 0%, #16161a 100%)',
        }}
      >
        <div className="neu-card p-5 text-center">
          <p className="text-small text-muted">Memeriksa sesi login...</p>
        </div>
      </div>
    );
  }

  if (authState === 'locked') {
    return (
      <div
        className="doctor-static-ui w-full min-h-screen p-6 flex items-center justify-center"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,53,0.04) 0%, transparent 60%), linear-gradient(180deg, #1e1e24 0%, #16161a 100%)',
        }}
      >
        <form onSubmit={handleLogin} className="neu-card p-5 w-full max-w-[360px] space-y-4" aria-label="Form login Sentra Assist">
          <div>
            <h2 className="text-title mb-1">Sentra Assist Login</h2>
            <p className="text-small text-muted">
              Masuk dengan akun terotorisasi untuk membuka panel klinis.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="sentra-login-username" className="text-small text-muted block">
              Username
            </label>
            <input
              id="sentra-login-username"
              type="text"
              autoComplete="username"
              value={usernameInput}
              onChange={(event) => setUsernameInput(event.target.value)}
              className="w-full rounded-lg border border-carbon-700/60 bg-carbon-900/80 px-3 py-2 text-small text-platinum focus:outline-none focus:border-cyan-500/60"
              aria-label="Username"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="sentra-login-password" className="text-small text-muted block">
              Password
            </label>
            <input
              id="sentra-login-password"
              type="password"
              autoComplete="current-password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              className="w-full rounded-lg border border-carbon-700/60 bg-carbon-900/80 px-3 py-2 text-small text-platinum focus:outline-none focus:border-cyan-500/60"
              aria-label="Password"
            />
          </div>

          {authError && (
            <div className="rounded-lg border border-critical/50 bg-critical/10 px-3 py-2 text-small text-critical">
              {authError}
            </div>
          )}

          <button
            type="submit"
            disabled={isAuthenticating}
            className="w-full rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-2 text-small font-semibold text-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isAuthenticating ? 'Memverifikasi...' : 'Login'}
          </button>

          <p className="text-micro text-muted leading-relaxed">
            Default credential: <code>chief</code> / <code>Sentra@2026!</code>
          </p>
        </form>
      </div>
    );
  }

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
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleLogout}
          className="rounded-lg border border-carbon-700/60 bg-carbon-900/70 px-3 py-1.5 text-[11px] text-muted hover:text-platinum"
          aria-label="Logout"
        >
          Logout {authSession?.displayName ? `(${authSession.displayName})` : ''}
        </button>
      </div>

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
            onClick={() => setActiveTab('developer')}
            className={`motion-press flex-1 py-2 px-2 rounded-lg text-body relative ${
              activeTab === 'developer'
                ? 'neu-tab-active text-platinum font-semibold'
                : 'neu-tab text-muted font-medium'
            }`}
          >
            Developer
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
        <div className={activeTab === 'developer' ? 'tab-panel-active' : 'tab-panel-hidden'}>
          <DeveloperTools />
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

// Developer Tools Component
function DeveloperTools() {
  const [lastExecuted, setLastExecuted] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const runCommand = async (command: string, label: string) => {
    setIsExecuting(true);
    setLastExecuted(label);

    console.log(`[Developer] Requesting execution: ${command}`);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.info(`AGENT_ACTION_REQUIRED: ${command}`);

      if (typeof chrome !== 'undefined' && chrome.runtime?.sendMessage) {
        chrome.runtime.sendMessage({ type: 'DEV_COMMAND_TRIGGER', command, label });
      }
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="developer-tools space-y-4">
      <div className="emergency-header">
        <h2>Developer Tools</h2>
        <span className="emergency-count">v1.0</span>
      </div>

      <div className="neu-card p-4 space-y-4">
        <div>
          <h3 className="text-body font-medium text-platinum mb-2">Documentation</h3>
          <p className="text-small text-muted mb-4 text-pretty">
            Otomatisasi dokumentasi TSDoc dan TypeDoc untuk project ini.
          </p>

          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => runCommand('npm run docs:auto', 'Auto-Document')}
              disabled={isExecuting}
              className="w-full py-3 px-4 rounded-xl text-body font-medium neu-tab flex items-center justify-between"
              style={{ background: 'var(--carbon-800)', border: '1px solid var(--carbon-700)' }}
            >
              <span>📝 Auto-Document</span>
              <code className="text-micro bg-carbon-900 px-2 py-1 rounded" style={{ textTransform: 'none', fontWeight: 500 }}>docs:auto</code>
            </button>

            <button
              onClick={() => runCommand('npm run docs:all', 'Generate All Docs')}
              disabled={isExecuting}
              className="w-full py-3 px-4 rounded-xl text-body font-medium neu-tab flex items-center justify-between"
              style={{ background: 'var(--carbon-800)', border: '1px solid var(--carbon-700)' }}
            >
              <span>📚 Generate Full Docs</span>
              <code className="text-micro bg-carbon-900 px-2 py-1 rounded" style={{ textTransform: 'none', fontWeight: 500 }}>docs:all</code>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-carbon-700/40">
          <h3 className="text-body font-medium text-platinum mb-2">
            Prompt Presets (via settings.json)
          </h3>
          <p className="text-small text-muted mb-4 text-pretty">
            Presets ini ditarik dari konfigurasi global Antigravity.
          </p>
          <div className="grid grid-cols-1 gap-2">
            {['clinical_cdss', 'ui_vibe_reviewer', 'architect_refactor'].map((preset) => (
              <button
                key={preset}
                onClick={() => runCommand(`Invoke Antigravity with ${preset}`, `Preset: ${preset}`)}
                className="w-full py-2 px-3 rounded-lg text-small text-muted bg-carbon-900/50 border border-carbon-700/30 flex items-center justify-between group"
              >
                <span>{preset.replace(/_/g, ' ')}</span>
                <span className="opacity-0">⚡</span>
              </button>
            ))}
          </div>
        </div>

        {lastExecuted && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-small text-emerald-400 font-medium">
              {isExecuting ? '⏳ Sedang menjalankan...' : `✅ Berhasil memicu: ${lastExecuted}`}
            </p>
            <p className="text-micro text-muted mt-1 italic" style={{ textTransform: 'none', fontWeight: 400 }}>
              (Antigravity akan mengeksekusi di terminal)
            </p>
          </div>
        )}
      </div>

      <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
        <p className="text-micro text-amber-500/70 leading-relaxed" style={{ textTransform: 'none', fontWeight: 400 }}>
          <strong>Note:</strong> Tombol di atas akan mengirimkan sinyal ke Antigravity untuk
          menjalankan command di terminal local kamu.
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
          <h2 style={{ color: '#F59E0B' }}>Sentra Assist — Runtime Error</h2>
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
