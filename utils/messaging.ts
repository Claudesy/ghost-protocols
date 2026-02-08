/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Typed messaging definitions for Sentra Assist
// Based on SENTRA-SPEC-001 v1.2.0 Section 4.4
// Uses @webext-core/messaging for compile-time type safety

import type { CDSSEngineStatus } from '@/lib/cdss/engine';
import type {
  APIResponse,
  CDSSAlert,
  CDSSResponse,
  DiagnosisRequestContext,
  DrugInteraction,
  PediatricDose,
  PediatricDoseRequest,
  PrescriptionRequestContext,
} from '@/types/api';
import { defineExtensionMessaging } from '@webext-core/messaging';
import type {
  AnamnesaFillPayload,
  DiagnosaFillPayload,
  Encounter,
  FillResult,
  PageReadyInfo,
  ResepFillPayload,
  ScrapePayload,
  ScrapeRequest,
} from './types';

// Message protocol interface
// All messages between Panel ↔ Worker ↔ Content
interface ProtocolMap {
  // ========================================
  // Panel → Worker → Content (Fill Commands)
  // ========================================
  fillResep(data: ResepFillPayload): Promise<FillResult>;
  fillAnamnesa(data: AnamnesaFillPayload): Promise<FillResult>;
  fillDiagnosa(data: DiagnosaFillPayload): Promise<FillResult>;

  // ========================================
  // Content → Worker (Status Updates)
  // ========================================
  pageReady(info: PageReadyInfo): Promise<void>;
  scrapeResult(data: ScrapePayload): Promise<void>;
  updateEncounter(data: Partial<Encounter>): Promise<void>;

  // ========================================
  // Worker → Content (Direct Commands)
  // ========================================
  execFill(cmd: {
    pageType: 'resep' | 'anamnesa' | 'diagnosa';
    payload: ResepFillPayload | AnamnesaFillPayload | DiagnosaFillPayload;
  }): Promise<FillResult>;
  execScrape(req: ScrapeRequest): Promise<ScrapePayload>;

  // ========================================
  // Worker → Panel (State Updates)
  // ========================================
  encounterUpdated(data: Encounter): Promise<void>;

  // ========================================
  // Panel → Worker (CDSS AI Requests)
  // ========================================
  getSuggestions(context: DiagnosisRequestContext): Promise<APIResponse<CDSSResponse>>;
  getRecommendations(context: PrescriptionRequestContext): Promise<APIResponse<CDSSResponse>>;
  checkInteractions(drugs: string[]): Promise<APIResponse<DrugInteraction[]>>;
  checkAllergies(context: {
    medications: string[];
    allergies: string[];
  }): Promise<APIResponse<CDSSAlert[]>>;
  calculatePediatricDose(context: PediatricDoseRequest): Promise<APIResponse<PediatricDose>>;

  // ========================================
  // Panel → Worker (CDSS Engine Status)
  // ========================================
  getCDSSStatus(data: undefined): Promise<CDSSEngineStatus>;
  initializeCDSS(data: undefined): Promise<boolean>;

  // ========================================
  // Panel → Worker → Content (Diagnostic)
  // ========================================
  scanFields(data: undefined): Promise<{
    success: boolean;
    error?: string;
    fields: Array<{
      tag: string;
      type: string;
      name: string;
      id: string;
      placeholder: string;
      className: string;
    }>;
  }>;

  // Panel → Worker → Content (Medical History Scan)
  scanMedicalHistory(data: undefined): Promise<{
    success: boolean;
    error?: string;
    history: Array<{
      code: string;
      description: string;
      shortLabel: string;
    }>;
  }>;

  // Panel → Worker → Content (Visit History Scan)
  scanVisitHistory(data: undefined): Promise<{
    success: boolean;
    error?: string;
    diagnostics?: string[];
    visits: Array<{
      encounter_id: string;
      date: string;
      vitals: {
        sbp: number;
        dbp: number;
        hr: number;
        rr: number;
        temp: number;
        glucose: number;
      };
      keluhan_utama: string;
      diagnosa: { icd_x: string; nama: string } | null;
    }>;
  }>;

  // Content → Worker → Panel (Visit History Scraped Acknowledgment)
  visitHistoryScraped(data: {
    visits: Array<{
      encounter_id: string;
      date: string;
      vitals: {
        sbp: number;
        dbp: number;
        hr: number;
        rr: number;
        temp: number;
        glucose: number;
      };
      keluhan_utama: string;
      diagnosa: { icd_x: string; nama: string } | null;
    }>;
    timestamp: number;
    patientRM: string;
  }): Promise<void>;
}

// Export typed messaging functions
export const { sendMessage, onMessage } = defineExtensionMessaging<ProtocolMap>();

// Type guards for message validation
export function isResepPayload(payload: unknown): payload is ResepFillPayload {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'static' in payload &&
    'ajax' in payload &&
    'medications' in payload
  );
}

/**
 * isAnamnesaPayload
 *
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isAnamnesaPayload(payload: unknown): payload is AnamnesaFillPayload {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'keluhan_utama' in payload &&
    'alergi' in payload
  );
}

/**
 * isDiagnosaPayload
 *
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function isDiagnosaPayload(payload: unknown): payload is DiagnosaFillPayload {
  return (
    typeof payload === 'object' && payload !== null && 'icd_x' in payload && 'jenis' in payload
  );
}
