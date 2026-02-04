/**
 * Patient Header Component
 *
 * Displays patient demographic info with privacy-compliant name masking
 *
 * @module components/clinical/PatientHeader
 */

import React from 'react';
import { formatPatientName, getInitials } from '../../utils/name-masking';

// ============================================================================
// TYPES
// ============================================================================

export interface PatientHeaderProps {
  name: string;
  gender: 'L' | 'P';
  age: number;
  rmNumber: string;
  masked?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const PatientHeader: React.FC<PatientHeaderProps> = ({
  name,
  gender,
  age,
  rmNumber,
  masked = true,
}) => {
  const displayName = formatPatientName(name, { masked });
  const initials = getInitials(name);
  const genderLabel = gender === 'L' ? 'L' : 'P';

  return (
    <div className="patient-header">
      <div className="patient-header-content">
        <div className="patient-avatar">
          <span className="patient-avatar-text">{initials}</span>
        </div>
        <div className="patient-info">
          <h2 className="patient-name">{displayName}</h2>
          <div className="patient-details">
            <span className="patient-gender">{genderLabel}</span>
            <span className="patient-separator">•</span>
            <span className="patient-age">{age} th</span>
            <span className="patient-separator">•</span>
            <span className="patient-rm">{rmNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// STYLES
// ============================================================================

export const patientHeaderStyles = `
.patient-header {
  background: var(--surface-secondary);
  border-bottom: 2px solid var(--accent-primary);
  padding: 16px 24px;
  margin-bottom: 24px;
}

.patient-header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.patient-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.patient-details {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.patient-gender,
.patient-age,
.patient-rm {
  font-weight: 500;
}

.patient-separator {
  color: var(--text-tertiary);
}

.patient-rm {
  color: var(--accent-primary);
  font-weight: 600;
}
`;
