/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Typed messaging definitions for Sentra Assist
// Based on SENTRA-SPEC-001 v1.2.0 Section 4.4
// Uses @webext-core/messaging for compile-time type safety

import { defineExtensionMessaging } from '@webext-core/messaging';
import type {
  ResepFillPayload,
  AnamnesaFillPayload,
  DiagnosaFillPayload,
  FillResult,
  PageReadyInfo,
  ScrapePayload,
  ScrapeRequest,
  Encounter,
} from './types';
import type {
  CDSSResponse,
  DiagnosisRequestContext,
  PrescriptionRequestContext,
  DrugInteraction,
  CDSSAlert,
  PediatricDose,
  PediatricDoseRequest,
  APIResponse,
} from '@/types/api';

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
  checkAllergies(context: { medications: string[]; allergies: string[] }): Promise<APIResponse<CDSSAlert[]>>;
  calculatePediatricDose(context: PediatricDoseRequest): Promise<APIResponse<PediatricDose>>;
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

export function isAnamnesaPayload(payload: unknown): payload is AnamnesaFillPayload {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'keluhan_utama' in payload &&
    'alergi' in payload
  );
}

export function isDiagnosaPayload(payload: unknown): payload is DiagnosaFillPayload {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'icd_x' in payload &&
    'jenis' in payload
  );
}
