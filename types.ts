/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

export interface EncounterData {
  patientId: string;
  encounterId?: string;
  timestamp: string;
  
  // Anamnesa Data
  complaint?: string; // Keluhan Utama
  history?: string[]; // Riwayat Penyakit
  allergies?: string[]; // Alergi Obat
  
  // Diagnosa Data
  diagnosis?: {
    code: string; // ICD-X
    name: string;
    type: 'Primary' | 'Secondary';
  }[];
}

export interface FillStatus {
  status: 'idle' | 'scanning' | 'injecting' | 'success' | 'error';
  message?: string;
  progress?: number;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  details: string;
  user: string;
}
