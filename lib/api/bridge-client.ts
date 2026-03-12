// Designed and constructed by Claudesy.
/**
 * Sentra Assist — Dashboard Bridge Client
 * Polls the Puskesmas Dashboard Bridge API for pending transfer requests.
 * Also supports outbound consult: Assist → Dashboard (Send to Doctor).
 *
 * Flow (inbound): Dashboard → Bridge API → Assist polls → auto-fill ePuskesmas
 * Flow (outbound): Assist → POST /api/consult → Dashboard → Doctor
 */

import { createLogger } from '~/utils/logger';
import type { RMETransferPayload, RMETransferResult } from '~/utils/types';

const log = createLogger('BridgeClient', 'background');

// ============================================================================
// TYPES
// ============================================================================

export interface BridgeEntry {
  id: string;
  status: string;
  createdAt: string;
  createdBy: string;
  pelayananId: string;
  patientName?: string;
  hasAnamnesa: boolean;
  hasDiagnosa: boolean;
  hasResep: boolean;
}

/**
 * BridgeEntryDetail interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-03-12
 */

export interface BridgeEntryDetail {
  id: string;
  status: string;
  createdAt: string;
  createdBy: string;
  pelayananId: string;
  patientName?: string;
  payload: RMETransferPayload;
}

interface BridgeListResponse {
  ok: boolean;
  items: BridgeEntry[];
  count: number;
  error?: string;
}

interface BridgeDetailResponse {
  ok: boolean;
  entry: BridgeEntryDetail;
  error?: string;
}

interface BridgePatchResponse {
  ok: boolean;
  entry: { id: string; status: string };
  error?: string;
}

// ============================================================================
// CONFIG
// ============================================================================

const STORAGE_KEY = 'sentra:bridge-config';

/**
 * BridgeConfig interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-03-12
 */

export interface BridgeConfig {
  dashboardUrl: string;
  authToken: string;
  enabled: boolean;
  pollIntervalMinutes: number;
}

const DEFAULT_CONFIG: BridgeConfig = {
  dashboardUrl: 'http://localhost:7000',
  authToken: '',
  enabled: false,
  pollIntervalMinutes: 0.5,
};

/**
 * getBridgeConfig
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function getBridgeConfig(): Promise<BridgeConfig> {
  try {
    const raw = await browser.storage.local.get(STORAGE_KEY);
    const stored = raw[STORAGE_KEY] as Partial<BridgeConfig> | undefined;
    if (!stored) return DEFAULT_CONFIG;
    return { ...DEFAULT_CONFIG, ...stored };
  } catch (e) {
    log.warn('[BridgeClient] Failed to load config, using defaults:', e);
    return DEFAULT_CONFIG;
  }
}

/**
 * saveBridgeConfig
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function saveBridgeConfig(config: Partial<BridgeConfig>): Promise<BridgeConfig> {
  const current = await getBridgeConfig();
  const updated = { ...current, ...config };
  await browser.storage.local.set({ [STORAGE_KEY]: updated });
  log.debug('[BridgeClient] Config saved', { enabled: updated.enabled, url: updated.dashboardUrl });
  return updated;
}

// ============================================================================
// HTTP CLIENT
// ============================================================================

async function bridgeFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const config = await getBridgeConfig();
  if (!config.dashboardUrl || !config.authToken) {
    throw new Error('Bridge belum dikonfigurasi. Set dashboardUrl dan authToken.');
  }

  const url = `${config.dashboardUrl.replace(/\/$/, '')}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Crew-Access-Token': config.authToken,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Bridge API ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

// ============================================================================
// PUBLIC API
// ============================================================================

export async function fetchPendingEntries(): Promise<BridgeEntry[]> {
  const res = await bridgeFetch<BridgeListResponse>('/api/emr/bridge?status=pending&limit=5');
  if (!res.ok) throw new Error(res.error || 'Failed to fetch pending entries');
  return res.items;
}

/**
 * fetchEntryDetail
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function fetchEntryDetail(id: string): Promise<BridgeEntryDetail> {
  const res = await bridgeFetch<BridgeDetailResponse>(`/api/emr/bridge/${id}`);
  if (!res.ok) throw new Error(res.error || 'Failed to fetch entry detail');
  return res.entry;
}

/**
 * claimEntry
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function claimEntry(id: string): Promise<void> {
  const res = await bridgeFetch<BridgePatchResponse>(`/api/emr/bridge/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ action: 'claim', claimedBy: 'assist-extension' }),
  });
  if (!res.ok) throw new Error(res.error || 'Failed to claim entry');
}

/**
 * reportProcessing
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function reportProcessing(id: string): Promise<void> {
  await bridgeFetch<BridgePatchResponse>(`/api/emr/bridge/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ action: 'processing' }),
  });
}

/**
 * reportComplete
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function reportComplete(id: string, result: RMETransferResult): Promise<void> {
  await bridgeFetch<BridgePatchResponse>(`/api/emr/bridge/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ action: 'complete', result }),
  });
}

/**
 * reportFailed
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function reportFailed(id: string, error: string, result?: RMETransferResult): Promise<void> {
  await bridgeFetch<BridgePatchResponse>(`/api/emr/bridge/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ action: 'fail', error, result }),
  });
}

// ============================================================================
// SEND TO DOCTOR — Outbound consult from Assist → Intelligence Dashboard
// ============================================================================

export interface OnlineDoctor {
  id: string;
  name: string;
  role: string;
  poli?: string;
}

interface OnlineDoctorsResponse {
  ok: boolean;
  doctors: OnlineDoctor[];
  error?: string;
}

/**
 * ConsultPayload interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-03-12
 */

export interface ConsultPayload {
  patient: {
    name: string;
    age: number;
    gender: string;
    rm: string;
  };
  ttv: {
    sbp: string;
    dbp: string;
    hr: string;
    rr: string;
    temp: string;
    spo2: string;
    glucose: string;
  };
  keluhan_utama: string;
  risk_factors: string[];
  anthropometrics: {
    tinggi: number;
    berat: number;
    imt: number;
    hasil_imt: string;
    lingkar_perut: number;
  };
  penyakit_kronis: string[];
  target_doctor_id: string;
  sent_at: string;
}

interface ConsultResponse {
  ok: boolean;
  consultId?: string;
  error?: string;
}

/**
 * getOnlineDoctors
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function getOnlineDoctors(): Promise<OnlineDoctor[]> {
  const res = await bridgeFetch<OnlineDoctorsResponse>('/api/doctors/online');
  if (!res.ok) throw new Error(res.error || 'Failed to fetch online doctors');
  return res.doctors;
}

/**
 * sendConsultToDoctor
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-03-12
 */

export async function sendConsultToDoctor(payload: ConsultPayload): Promise<string> {
  const res = await bridgeFetch<ConsultResponse>('/api/consult', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(res.error || 'Failed to send consult');
  return res.consultId ?? '';
}
