/**
 * Patient Header Component
 *
 * Displays patient demographic info with privacy-compliant name masking
 *
 * @module components/clinical/PatientHeader
 */

import React from 'react';
import { formatPatientName } from '../../utils/name-masking';
import {
  classifyChronicDisease,
  type ChronicDiseaseClassification,
} from '../../lib/cdss/chronic-disease-classifier';

// ============================================================================
// TYPES
// ============================================================================

export interface MedicalHistoryItem {
  code: string;           // ICD-10 code (e.g., 'I10')
  description: string;    // Full description
  shortLabel: string;     // Short display label (e.g., 'HT')
}

export type ProfileStatus = 'loading' | 'loaded' | 'error' | 'idle';

export interface PatientHeaderProps {
  name: string;
  gender: 'L' | 'P';
  age: number;
  rmNumber: string;
  masked?: boolean;
  // Extended patient info
  dob?: string;           // Tanggal lahir (DD-MM-YYYY)
  bloodType?: string;     // Golongan darah (A/B/AB/O +/-)
  bpjsStatus?: 'aktif' | 'nonaktif' | 'mandiri' | null;
  kelurahan?: string;     // Alamat kelurahan
  // Medical history
  medicalHistory?: MedicalHistoryItem[];  // Detected from page
  // Refresh callback
  onRefresh?: () => void;
  isLoading?: boolean;
  // Profile status indicator
  profileStatus?: ProfileStatus;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const PatientHeader: React.FC<PatientHeaderProps> = ({
  name,
  age,
  masked = true,
  bpjsStatus,
  kelurahan,
  medicalHistory,
  onRefresh,
  isLoading,
}) => {
  const displayName = formatPatientName(name, { masked });

  // BPJS status display
  const getBpjsLabel = () => {
    if (!bpjsStatus) return null;
    const labels: Record<string, string> = {
      aktif: 'BPJS Aktif',
      nonaktif: 'BPJS Nonaktif',
      mandiri: 'Mandiri',
    };
    return labels[bpjsStatus];
  };

  const bpjsLabel = getBpjsLabel();

  // Simplify kelurahan - remove "Kel. " prefix if present
  const simpleKelurahan = kelurahan?.replace(/^Kel\.\s*/i, '');

  // Classify chronic diseases and deduplicate by type
  const classifyAndDedupe = (): ChronicDiseaseClassification[] => {
    if (!medicalHistory || medicalHistory.length === 0) return [];

    const seen = new Map<string, ChronicDiseaseClassification>();

    for (const item of medicalHistory) {
      const classification = classifyChronicDisease(item.code);
      if (classification && !seen.has(classification.type)) {
        seen.set(classification.type, classification);
      }
    }

    // Sort by severity: critical first, then moderate
    return Array.from(seen.values())
      .sort((a, b) => {
        if (a.severity === 'critical' && b.severity !== 'critical') return -1;
        if (a.severity !== 'critical' && b.severity === 'critical') return 1;
        return 0;
      })
      .slice(0, 3); // Max 3 badges
  };

  const chronicDiseases = classifyAndDedupe();

  return (
    <div className="patient-header-compact">
      <span className="patient-name-compact">{displayName}</span>
      <span className="patient-age-compact">{age} th</span>
      {simpleKelurahan && (
        <span className="patient-location-compact">{simpleKelurahan}</span>
      )}
      {bpjsLabel && (
        <span className={`patient-bpjs-compact ${bpjsStatus === 'aktif' ? 'bpjs-aktif' : bpjsStatus === 'nonaktif' ? 'bpjs-nonaktif' : 'bpjs-mandiri'}`}>
          {bpjsLabel}
        </span>
      )}
      {/* Refresh Button */}
      {onRefresh && (
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="patient-refresh-btn"
          title="Refresh data pasien"
        >
          {isLoading ? '...' : '↻'}
        </button>
      )}
      {/* Chronic Disease Badges - All red */}
      {chronicDiseases.length > 0 && (
        <div className="patient-history-badges">
          {chronicDiseases.map((disease) => (
            <span
              key={disease.type}
              className="history-badge"
              title={`${disease.icdCode}: ${disease.fullName}`}
            >
              {disease.shortLabel}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// STYLES
// ============================================================================

export const patientHeaderStyles = `
/* Compact Patient Header - Single Row Layout */
.patient-header-compact {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 10px 14px;
  background: linear-gradient(145deg, #151515 0%, #1a1a1a 100%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  margin-bottom: 16px;
  box-shadow:
    inset 0 1px 3px rgba(0, 0, 0, 0.4),
    0 1px 0 rgba(255, 255, 255, 0.02);
}

.patient-name-compact {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.3px;
}

.patient-age-compact {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
}

.patient-location-compact {
  font-size: 11px;
  color: var(--text-tertiary);
}

.patient-bpjs-compact {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.patient-bpjs-compact.bpjs-aktif {
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
}

.patient-bpjs-compact.bpjs-nonaktif {
  background: rgba(239, 68, 68, 0.15);
  color: #EF4444;
}

.patient-bpjs-compact.bpjs-mandiri {
  background: rgba(245, 158, 11, 0.15);
  color: #F59E0B;
}

/* Refresh Button */
.patient-refresh-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  margin-left: auto;
}

.patient-refresh-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

.patient-refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Medical History Badges - Pojok Kanan Atas */
.patient-history-badges {
  display: flex;
  gap: 4px;
  margin-left: 8px;
}

/* All chronic disease badges - Red (unified color) */
.history-badge {
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'JetBrains Mono', monospace;
  background: rgba(239, 68, 68, 0.15);
  color: #EF4444;
  border: 1px solid rgba(239, 68, 68, 0.25);
}
`;
