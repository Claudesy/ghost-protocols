/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Mock CDSS Alerts
 * Generic clinical alerts for various scenarios
 *
 * @module lib/api/mocks/alerts-mock
 */

import type { CDSSAlert, VitalSigns } from '@/types/api';

// =============================================================================
// VITAL SIGN THRESHOLDS
// Evidence-based thresholds for alert generation
// =============================================================================

interface VitalThreshold {
  low?: number;
  high?: number;
  criticalLow?: number;
  criticalHigh?: number;
}

const VITAL_THRESHOLDS: Record<keyof VitalSigns, VitalThreshold> = {
  systolic: { low: 90, high: 140, criticalLow: 80, criticalHigh: 180 },
  diastolic: { low: 60, high: 90, criticalLow: 50, criticalHigh: 120 },
  heart_rate: { low: 60, high: 100, criticalLow: 40, criticalHigh: 150 },
  respiratory_rate: { low: 12, high: 20, criticalLow: 8, criticalHigh: 30 },
  temperature: { low: 36.0, high: 37.5, criticalLow: 35.0, criticalHigh: 40.0 },
  spo2: { low: 95, criticalLow: 90 },
  gcs: { low: 15, criticalLow: 8 },
};

// =============================================================================
// ALERT GENERATORS
// =============================================================================

/**
 * Generate vital sign alerts based on measurements
 */
export function generateVitalSignAlerts(vitals: VitalSigns): CDSSAlert[] {
  const alerts: CDSSAlert[] = [];

  // Blood Pressure
  if (vitals.systolic !== undefined) {
    const threshold = VITAL_THRESHOLDS.systolic;
    if (vitals.systolic >= threshold.criticalHigh!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `HIPERTENSI KRISIS: Sistolik ${vitals.systolic} mmHg - rujuk segera`,
        action_required: true,
        alert_id: `vital-sys-${Date.now()}`,
      });
    } else if (vitals.systolic >= threshold.high!) {
      alerts.push({
        level: 'warning',
        type: 'vital_sign',
        message: `Tekanan darah sistolik tinggi: ${vitals.systolic} mmHg`,
        action_required: false,
      });
    } else if (vitals.systolic <= threshold.criticalLow!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `HIPOTENSI BERAT: Sistolik ${vitals.systolic} mmHg - evaluasi syok`,
        action_required: true,
        alert_id: `vital-sys-${Date.now()}`,
      });
    }
  }

  // Heart Rate
  if (vitals.heart_rate !== undefined) {
    const threshold = VITAL_THRESHOLDS.heart_rate;
    if (vitals.heart_rate >= threshold.criticalHigh!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `TAKIKARDIA BERAT: HR ${vitals.heart_rate} bpm - evaluasi aritmia`,
        action_required: true,
        alert_id: `vital-hr-${Date.now()}`,
      });
    } else if (vitals.heart_rate >= threshold.high!) {
      alerts.push({
        level: 'warning',
        type: 'vital_sign',
        message: `Takikardia: HR ${vitals.heart_rate} bpm`,
        action_required: false,
      });
    } else if (vitals.heart_rate <= threshold.criticalLow!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `BRADIKARDIA BERAT: HR ${vitals.heart_rate} bpm - evaluasi konduksi`,
        action_required: true,
        alert_id: `vital-hr-${Date.now()}`,
      });
    }
  }

  // SpO2
  if (vitals.spo2 !== undefined) {
    const threshold = VITAL_THRESHOLDS.spo2;
    if (vitals.spo2 <= threshold.criticalLow!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `HIPOKSIA BERAT: SpO2 ${vitals.spo2}% - berikan oksigen segera`,
        action_required: true,
        alert_id: `vital-spo2-${Date.now()}`,
      });
    } else if (vitals.spo2 <= threshold.low!) {
      alerts.push({
        level: 'warning',
        type: 'vital_sign',
        message: `Hipoksia ringan: SpO2 ${vitals.spo2}%`,
        action_required: false,
      });
    }
  }

  // Temperature
  if (vitals.temperature !== undefined) {
    const threshold = VITAL_THRESHOLDS.temperature;
    if (vitals.temperature >= threshold.criticalHigh!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `HIPERTERMIA: Suhu ${vitals.temperature}°C - cooling segera`,
        action_required: true,
        alert_id: `vital-temp-${Date.now()}`,
      });
    } else if (vitals.temperature >= threshold.high!) {
      alerts.push({
        level: 'info',
        type: 'vital_sign',
        message: `Demam: Suhu ${vitals.temperature}°C`,
        action_required: false,
      });
    } else if (vitals.temperature <= threshold.criticalLow!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `HIPOTERMIA: Suhu ${vitals.temperature}°C - rewarming diperlukan`,
        action_required: true,
        alert_id: `vital-temp-${Date.now()}`,
      });
    }
  }

  // GCS
  if (vitals.gcs !== undefined) {
    const threshold = VITAL_THRESHOLDS.gcs;
    if (vitals.gcs <= threshold.criticalLow!) {
      alerts.push({
        level: 'critical',
        type: 'vital_sign',
        message: `PENURUNAN KESADARAN: GCS ${vitals.gcs} - evaluasi neurologis segera`,
        action_required: true,
        alert_id: `vital-gcs-${Date.now()}`,
      });
    } else if (vitals.gcs < threshold.low!) {
      alerts.push({
        level: 'warning',
        type: 'vital_sign',
        message: `Kesadaran menurun: GCS ${vitals.gcs}`,
        action_required: false,
      });
    }
  }

  return alerts;
}

/**
 * Generate qSOFA sepsis warning alerts
 * qSOFA criteria: RR >= 22, SBP <= 100, altered mental status
 */
export function generateSepsisAlert(vitals: VitalSigns): CDSSAlert | null {
  let qsofaScore = 0;

  if (vitals.respiratory_rate && vitals.respiratory_rate >= 22) qsofaScore++;
  if (vitals.systolic && vitals.systolic <= 100) qsofaScore++;
  if (vitals.gcs && vitals.gcs < 15) qsofaScore++;

  if (qsofaScore >= 2) {
    return {
      level: 'critical',
      type: 'sepsis_warning',
      message: `PERINGATAN SEPSIS: qSOFA Score ${qsofaScore}/3 - evaluasi infeksi dan pertimbangkan rujukan`,
      action_required: true,
      alert_id: `sepsis-${Date.now()}`,
    };
  }

  return null;
}

/**
 * Generate chronic disease management alerts
 */
export function generateChronicDiseaseAlerts(diseases: string[]): CDSSAlert[] {
  const alerts: CDSSAlert[] = [];

  diseases.forEach((disease) => {
    const diseaseLower = disease.toLowerCase();

    if (diseaseLower.includes('diabetes') || diseaseLower.includes('dm')) {
      alerts.push({
        level: 'info',
        type: 'chronic_disease',
        message: 'Pasien DM - periksa GDS dan evaluasi komplikasi secara berkala',
        action_required: false,
      });
    }

    if (diseaseLower.includes('hipertensi') || diseaseLower.includes('htn')) {
      alerts.push({
        level: 'info',
        type: 'chronic_disease',
        message: 'Pasien Hipertensi - monitor TD dan evaluasi kepatuhan minum obat',
        action_required: false,
      });
    }

    if (diseaseLower.includes('asma') || diseaseLower.includes('ppok') || diseaseLower.includes('copd')) {
      alerts.push({
        level: 'info',
        type: 'chronic_disease',
        message: 'Pasien penyakit respiratori kronik - hindari beta blocker non-selektif',
        action_required: false,
      });
    }

    if (diseaseLower.includes('ginjal') || diseaseLower.includes('ckd') || diseaseLower.includes('renal')) {
      alerts.push({
        level: 'warning',
        type: 'chronic_disease',
        message: 'Pasien CKD - sesuaikan dosis obat yang dieliminasi ginjal',
        action_required: false,
      });
    }

    if (diseaseLower.includes('hati') || diseaseLower.includes('hepar') || diseaseLower.includes('liver')) {
      alerts.push({
        level: 'warning',
        type: 'chronic_disease',
        message: 'Pasien gangguan hati - hindari obat hepatotoksik',
        action_required: false,
      });
    }
  });

  return alerts;
}

/**
 * Generate pediatric dosing alert for children
 */
export function generatePediatricAlert(ageYears: number): CDSSAlert | null {
  if (ageYears < 12) {
    return {
      level: 'warning',
      type: 'dosing',
      message: `Pasien pediatrik (${ageYears} tahun) - gunakan kalkulator dosis pediatrik`,
      action_required: false,
    };
  }
  return null;
}

/**
 * Generate elderly patient alert
 */
export function generateGeriatricAlert(ageYears: number): CDSSAlert | null {
  if (ageYears >= 65) {
    return {
      level: 'info',
      type: 'dosing',
      message: `Pasien geriatri (${ageYears} tahun) - pertimbangkan penurunan dosis dan polifarmasi`,
      action_required: false,
    };
  }
  return null;
}

/**
 * Combine all alerts and sort by severity
 */
export function combineAndSortAlerts(alerts: CDSSAlert[]): CDSSAlert[] {
  const severityOrder: Record<string, number> = {
    critical: 0,
    warning: 1,
    info: 2,
  };

  return alerts.sort((a, b) => severityOrder[a.level] - severityOrder[b.level]);
}
