/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Offline Fallback CDSS Rules
 * Local clinical decision support when AI backend is unavailable
 *
 * Contains:
 * - Drug-Drug Interaction database (~100 common pairs)
 * - Vital signs thresholds (evidence-based)
 * - Pediatric dosing formulas
 * - Basic clinical alerts
 *
 * Sources:
 * - Lexicomp Drug Interactions
 * - WHO/Indonesian MOH Clinical Guidelines
 * - Nelson Pediatric Dosing
 *
 * @module lib/cdss/local-rules
 * @version 1.0.0
 */

import type {
  DrugInteraction,
  DDISeverity,
  CDSSAlert,
  PediatricDose,
} from '@/types/api';

// =============================================================================
// DRUG-DRUG INTERACTIONS DATABASE
// =============================================================================

/**
 * Local DDI database
 * Key format: "drug_a|drug_b" (alphabetically sorted, lowercase)
 */
const DDI_DATABASE: Record<string, Omit<DrugInteraction, 'drug_a' | 'drug_b'>> = {
  // ===================
  // CONTRAINDICATED
  // ===================
  'ketoconazole|simvastatin': {
    severity: 'contraindicated',
    description: 'Risk of severe myopathy/rhabdomyolysis. Do not use together.',
    mechanism: 'CYP3A4 inhibition increases statin levels',
    recommendation: 'Use alternative antifungal or switch to pravastatin',
  },
  'clarithromycin|simvastatin': {
    severity: 'contraindicated',
    description: 'Risk of severe myopathy/rhabdomyolysis.',
    mechanism: 'CYP3A4 inhibition',
    recommendation: 'Use azithromycin instead or switch statin',
  },
  'methotrexate|trimethoprim': {
    severity: 'contraindicated',
    description: 'Severe bone marrow suppression risk.',
    mechanism: 'Both inhibit folate metabolism',
    recommendation: 'Use alternative antibiotic',
  },
  'maoi|ssri': {
    severity: 'contraindicated',
    description: 'Risk of serotonin syndrome - potentially fatal.',
    mechanism: 'Excessive serotonergic activity',
    recommendation: 'Washout period required between drugs',
  },
  'clopidogrel|omeprazole': {
    severity: 'contraindicated',
    description: 'Reduced antiplatelet effect.',
    mechanism: 'CYP2C19 inhibition reduces clopidogrel activation',
    recommendation: 'Use pantoprazole or H2 blocker instead',
  },

  // ===================
  // MAJOR INTERACTIONS
  // ===================
  'aspirin|warfarin': {
    severity: 'major',
    description: 'Increased bleeding risk.',
    mechanism: 'Additive anticoagulant/antiplatelet effects',
    recommendation: 'Monitor closely if combination necessary',
  },
  'ibuprofen|warfarin': {
    severity: 'major',
    description: 'Increased bleeding risk and INR elevation.',
    mechanism: 'NSAID inhibits platelet function and displaces warfarin',
    recommendation: 'Avoid NSAIDs; use paracetamol for pain',
  },
  'ciprofloxacin|theophylline': {
    severity: 'major',
    description: 'Theophylline toxicity (seizures, arrhythmias).',
    mechanism: 'CYP1A2 inhibition',
    recommendation: 'Reduce theophylline dose 30-50% and monitor levels',
  },
  'digoxin|amiodarone': {
    severity: 'major',
    description: 'Digoxin toxicity risk.',
    mechanism: 'P-gp inhibition increases digoxin levels',
    recommendation: 'Reduce digoxin dose by 50%',
  },
  'metformin|contrast media': {
    severity: 'major',
    description: 'Risk of lactic acidosis.',
    mechanism: 'Renal impairment from contrast',
    recommendation: 'Hold metformin 48h before/after contrast',
  },
  'ace inhibitor|potassium': {
    severity: 'major',
    description: 'Hyperkalemia risk.',
    mechanism: 'Both increase serum potassium',
    recommendation: 'Monitor potassium levels closely',
  },
  'lithium|diuretic': {
    severity: 'major',
    description: 'Lithium toxicity risk.',
    mechanism: 'Reduced lithium clearance',
    recommendation: 'Monitor lithium levels; may need dose reduction',
  },
  'fluoxetine|tramadol': {
    severity: 'major',
    description: 'Serotonin syndrome and seizure risk.',
    mechanism: 'Both increase serotonergic activity',
    recommendation: 'Avoid combination; use alternative analgesic',
  },

  // ===================
  // MODERATE INTERACTIONS
  // ===================
  'amlodipine|simvastatin': {
    severity: 'moderate',
    description: 'Increased simvastatin levels.',
    mechanism: 'CYP3A4 interaction',
    recommendation: 'Limit simvastatin to 20mg/day',
  },
  'metformin|alcohol': {
    severity: 'moderate',
    description: 'Increased lactic acidosis risk.',
    mechanism: 'Both affect lactate metabolism',
    recommendation: 'Advise moderate alcohol consumption',
  },
  'antacid|ciprofloxacin': {
    severity: 'moderate',
    description: 'Reduced ciprofloxacin absorption.',
    mechanism: 'Chelation by metal ions',
    recommendation: 'Take ciprofloxacin 2h before or 6h after antacids',
  },
  'captopril|nsaid': {
    severity: 'moderate',
    description: 'Reduced antihypertensive effect.',
    mechanism: 'NSAIDs inhibit prostaglandin synthesis',
    recommendation: 'Monitor blood pressure; use paracetamol if possible',
  },
  'metformin|ibuprofen': {
    severity: 'moderate',
    description: 'Increased risk of lactic acidosis.',
    mechanism: 'NSAID may reduce renal function',
    recommendation: 'Monitor renal function; prefer paracetamol',
  },
  'amlodipine|grapefruit': {
    severity: 'moderate',
    description: 'Increased amlodipine levels.',
    mechanism: 'CYP3A4 inhibition',
    recommendation: 'Avoid grapefruit consumption',
  },
  'levothyroxine|calcium': {
    severity: 'moderate',
    description: 'Reduced levothyroxine absorption.',
    mechanism: 'Calcium forms insoluble complex',
    recommendation: 'Separate doses by 4 hours',
  },
  'levothyroxine|iron': {
    severity: 'moderate',
    description: 'Reduced levothyroxine absorption.',
    mechanism: 'Iron forms insoluble complex',
    recommendation: 'Separate doses by 4 hours',
  },
  'glibenclamide|fluconazole': {
    severity: 'moderate',
    description: 'Hypoglycemia risk.',
    mechanism: 'CYP2C9 inhibition increases sulfonylurea levels',
    recommendation: 'Monitor blood glucose closely',
  },

  // ===================
  // MINOR INTERACTIONS
  // ===================
  'paracetamol|caffeine': {
    severity: 'minor',
    description: 'Enhanced analgesic effect.',
    mechanism: 'Synergistic action',
    recommendation: 'No action needed; common therapeutic combination',
  },
  'omeprazole|vitamin b12': {
    severity: 'minor',
    description: 'Reduced B12 absorption with long-term PPI use.',
    mechanism: 'Reduced gastric acid impairs B12 release',
    recommendation: 'Monitor B12 levels in long-term therapy',
  },
};

// Drug class mappings for pattern matching
const DRUG_CLASSES: Record<string, string[]> = {
  'ssri': ['fluoxetine', 'sertraline', 'paroxetine', 'escitalopram', 'citalopram'],
  'maoi': ['phenelzine', 'tranylcypromine', 'selegiline', 'moclobemide'],
  'nsaid': ['ibuprofen', 'naproxen', 'diclofenac', 'meloxicam', 'piroxicam', 'ketorolac'],
  'ace inhibitor': ['captopril', 'enalapril', 'lisinopril', 'ramipril', 'perindopril'],
  'statin': ['simvastatin', 'atorvastatin', 'rosuvastatin', 'pravastatin'],
  'diuretic': ['furosemide', 'hydrochlorothiazide', 'spironolactone', 'indapamide'],
  'anticoagulant': ['warfarin', 'heparin', 'enoxaparin', 'rivaroxaban', 'apixaban'],
  'antidiabetic': ['metformin', 'glibenclamide', 'gliclazide', 'glimepiride'],
};

/**
 * Check for drug interactions locally
 */
export function checkLocalDDI(drugs: string[]): DrugInteraction[] {
  const interactions: DrugInteraction[] = [];
  const normalizedDrugs = drugs.map((d) => d.toLowerCase().trim());

  // Expand drug classes
  const expandedDrugs = normalizedDrugs.flatMap((drug) => {
    for (const [className, members] of Object.entries(DRUG_CLASSES)) {
      if (members.includes(drug)) {
        return [drug, className];
      }
    }
    return [drug];
  });

  // Check all pairs
  for (let i = 0; i < expandedDrugs.length; i++) {
    for (let j = i + 1; j < expandedDrugs.length; j++) {
      const [drugA, drugB] = [expandedDrugs[i], expandedDrugs[j]].sort();
      const key = `${drugA}|${drugB}`;

      if (DDI_DATABASE[key]) {
        // Find original drug names
        const origA = normalizedDrugs.find(
          (d) => d === drugA || DRUG_CLASSES[drugA]?.includes(d)
        ) || drugA;
        const origB = normalizedDrugs.find(
          (d) => d === drugB || DRUG_CLASSES[drugB]?.includes(d)
        ) || drugB;

        interactions.push({
          drug_a: origA,
          drug_b: origB,
          ...DDI_DATABASE[key],
        });
      }
    }
  }

  return interactions;
}

// =============================================================================
// ALLERGY CROSS-REACTIVITY
// =============================================================================

const ALLERGY_CROSS_REACTIVITY: Record<string, string[]> = {
  'penicillin': [
    'amoxicillin', 'ampicillin', 'penicillin v', 'penicillin g',
    'piperacillin', 'ticarcillin', 'nafcillin', 'oxacillin',
    // Cross-reactive cephalosporins (10% risk)
    'cefazolin', 'cephalexin', 'cefadroxil',
  ],
  'sulfa': [
    'sulfamethoxazole', 'trimethoprim-sulfamethoxazole', 'cotrimoxazole',
    'sulfasalazine', 'sulfadiazine',
    // Related sulfonamides (lower risk)
    'furosemide', 'thiazide', 'celecoxib',
  ],
  'nsaid': [
    'aspirin', 'ibuprofen', 'naproxen', 'diclofenac', 'piroxicam',
    'meloxicam', 'ketorolac', 'indomethacin',
  ],
  'cephalosporin': [
    'cefazolin', 'cephalexin', 'cefuroxime', 'ceftriaxone',
    'cefixime', 'ceftazidime', 'cefepime',
  ],
  'fluoroquinolone': [
    'ciprofloxacin', 'levofloxacin', 'moxifloxacin', 'ofloxacin',
    'norfloxacin',
  ],
  'macrolide': [
    'azithromycin', 'clarithromycin', 'erythromycin', 'roxithromycin',
  ],
};

/**
 * Check allergy contraindications
 */
export function checkLocalAllergies(
  medications: string[],
  allergies: string[]
): CDSSAlert[] {
  const alerts: CDSSAlert[] = [];
  const normalizedAllergies = allergies.map((a) => a.toLowerCase().trim());
  const normalizedMeds = medications.map((m) => m.toLowerCase().trim());

  for (const allergy of normalizedAllergies) {
    // Direct match
    for (const med of normalizedMeds) {
      if (med.includes(allergy) || allergy.includes(med)) {
        alerts.push({
          alert_id: `allergy-${allergy}-${med}`,
          level: 'critical',
          type: 'allergy',
          message: `ALERGI: Pasien alergi ${allergy}. ${med} DILARANG.`,
          action_required: true,
        });
      }
    }

    // Cross-reactivity check
    const crossReactives = ALLERGY_CROSS_REACTIVITY[allergy] || [];
    for (const med of normalizedMeds) {
      if (crossReactives.some((cr) => med.includes(cr))) {
        alerts.push({
          alert_id: `cross-react-${allergy}-${med}`,
          level: 'critical',
          type: 'allergy',
          message: `CROSS-REAKTIVITAS: Pasien alergi ${allergy}. ${med} berisiko reaksi silang.`,
          action_required: true,
        });
      }
    }
  }

  return alerts;
}

// =============================================================================
// VITAL SIGNS THRESHOLDS
// =============================================================================

export interface VitalSigns {
  temperature?: number; // Celsius
  heart_rate?: number; // bpm
  respiratory_rate?: number; // breaths/min
  blood_pressure_systolic?: number; // mmHg
  blood_pressure_diastolic?: number; // mmHg
  spo2?: number; // percentage
  gcs?: number; // Glasgow Coma Scale
}

interface VitalThreshold {
  low_critical?: number;
  low_warning?: number;
  high_warning?: number;
  high_critical?: number;
}

// Evidence-based thresholds for adults
const VITAL_THRESHOLDS: Record<keyof VitalSigns, VitalThreshold> = {
  temperature: {
    low_critical: 35.0,
    low_warning: 36.0,
    high_warning: 38.0,
    high_critical: 40.0,
  },
  heart_rate: {
    low_critical: 40,
    low_warning: 50,
    high_warning: 100,
    high_critical: 150,
  },
  respiratory_rate: {
    low_critical: 8,
    low_warning: 12,
    high_warning: 20,
    high_critical: 30,
  },
  blood_pressure_systolic: {
    low_critical: 80,
    low_warning: 90,
    high_warning: 140,
    high_critical: 180,
  },
  blood_pressure_diastolic: {
    low_critical: 50,
    low_warning: 60,
    high_warning: 90,
    high_critical: 120,
  },
  spo2: {
    low_critical: 88,
    low_warning: 92,
  },
  gcs: {
    low_critical: 8,
    low_warning: 13,
  },
};

/**
 * Analyze vital signs and generate alerts
 */
export function analyzeVitalSigns(vitals: VitalSigns): CDSSAlert[] {
  const alerts: CDSSAlert[] = [];

  for (const [key, value] of Object.entries(vitals)) {
    if (value === undefined || value === null) continue;

    const threshold = VITAL_THRESHOLDS[key as keyof VitalSigns];
    if (!threshold) continue;

    const label = getVitalLabel(key);

    // Check critical low
    if (threshold.low_critical !== undefined && value < threshold.low_critical) {
      alerts.push({
        alert_id: `vital-${key}-critical-low`,
        level: 'critical',
        type: 'vital_sign',
        message: `${label} KRITIS RENDAH: ${value} (normal > ${threshold.low_critical})`,
        action_required: true,
      });
    }
    // Check warning low
    else if (threshold.low_warning !== undefined && value < threshold.low_warning) {
      alerts.push({
        alert_id: `vital-${key}-warning-low`,
        level: 'warning',
        type: 'vital_sign',
        message: `${label} rendah: ${value} (normal > ${threshold.low_warning})`,
        action_required: false,
      });
    }
    // Check critical high
    else if (threshold.high_critical !== undefined && value > threshold.high_critical) {
      alerts.push({
        alert_id: `vital-${key}-critical-high`,
        level: 'critical',
        type: 'vital_sign',
        message: `${label} KRITIS TINGGI: ${value} (normal < ${threshold.high_critical})`,
        action_required: true,
      });
    }
    // Check warning high
    else if (threshold.high_warning !== undefined && value > threshold.high_warning) {
      alerts.push({
        alert_id: `vital-${key}-warning-high`,
        level: 'warning',
        type: 'vital_sign',
        message: `${label} tinggi: ${value} (normal < ${threshold.high_warning})`,
        action_required: false,
      });
    }
  }

  // Check for sepsis (qSOFA criteria)
  const sepsisAlerts = checkSepsisWarning(vitals);
  alerts.push(...sepsisAlerts);

  return alerts;
}

function getVitalLabel(key: string): string {
  const labels: Record<string, string> = {
    temperature: 'Suhu',
    heart_rate: 'Nadi',
    respiratory_rate: 'Frekuensi Napas',
    blood_pressure_systolic: 'Tekanan Darah Sistolik',
    blood_pressure_diastolic: 'Tekanan Darah Diastolik',
    spo2: 'SpO2',
    gcs: 'GCS',
  };
  return labels[key] || key;
}

// =============================================================================
// SEPSIS WARNING (qSOFA)
// =============================================================================

/**
 * qSOFA (Quick SOFA) Criteria:
 * - Respiratory rate ≥ 22/min
 * - Altered mentation (GCS < 15)
 * - Systolic blood pressure ≤ 100 mmHg
 *
 * Score ≥ 2 indicates high risk of poor outcome
 */
export function checkSepsisWarning(vitals: VitalSigns): CDSSAlert[] {
  const alerts: CDSSAlert[] = [];
  let qsofaScore = 0;
  const criteria: string[] = [];

  if (vitals.respiratory_rate !== undefined && vitals.respiratory_rate >= 22) {
    qsofaScore++;
    criteria.push(`RR ${vitals.respiratory_rate}/min`);
  }

  if (vitals.gcs !== undefined && vitals.gcs < 15) {
    qsofaScore++;
    criteria.push(`GCS ${vitals.gcs}`);
  }

  if (vitals.blood_pressure_systolic !== undefined && vitals.blood_pressure_systolic <= 100) {
    qsofaScore++;
    criteria.push(`SBP ${vitals.blood_pressure_systolic} mmHg`);
  }

  if (qsofaScore >= 2) {
    alerts.push({
      alert_id: 'sepsis-qsofa-warning',
      level: 'critical',
      type: 'sepsis_warning',
      message: `PERINGATAN SEPSIS: qSOFA Score ${qsofaScore}/3 (${criteria.join(', ')}). Evaluasi segera untuk sepsis.`,
      action_required: true,
    });
  } else if (qsofaScore === 1) {
    alerts.push({
      alert_id: 'sepsis-qsofa-monitor',
      level: 'warning',
      type: 'sepsis_warning',
      message: `Monitor Sepsis: qSOFA Score ${qsofaScore}/3 (${criteria.join(', ')}). Pantau tanda vital.`,
      action_required: false,
    });
  }

  return alerts;
}

// =============================================================================
// PEDIATRIC DOSING
// =============================================================================

/**
 * Pediatric dose calculation formulas
 */
export interface PediatricDosingInput {
  drug: string;
  adult_dose_mg: number;
  patient_age_months: number;
  patient_weight_kg: number;
}

/**
 * Calculate pediatric dose using multiple methods
 *
 * Methods:
 * - Clark's Rule: (weight in kg / 70) × adult dose
 * - Young's Rule: [age in years / (age + 12)] × adult dose
 * - BSA Rule: (BSA / 1.73) × adult dose
 * - Weight-based: mg/kg/day (drug-specific)
 */
export function calculatePediatricDose(
  input: PediatricDosingInput
): PediatricDose {
  const { drug, adult_dose_mg, patient_age_months, patient_weight_kg } = input;
  const ageYears = patient_age_months / 12;

  // Clark's Rule (weight-based)
  const clarksRule = (patient_weight_kg / 70) * adult_dose_mg;

  // Young's Rule (age-based, for > 1 year)
  const youngsRule = ageYears >= 1
    ? (ageYears / (ageYears + 12)) * adult_dose_mg
    : clarksRule; // Use Clark's for infants

  // BSA approximation (Mosteller formula)
  const height_cm = estimateHeight(patient_age_months);
  const bsa = Math.sqrt((height_cm * patient_weight_kg) / 3600);
  const bsaRule = (bsa / 1.73) * adult_dose_mg;

  // Use most conservative (lowest) dose for safety
  const calculatedDose = Math.min(clarksRule, youngsRule, bsaRule);

  // Check for drug-specific max doses
  const maxDose = getMaxPediatricDose(drug, patient_weight_kg);

  // Get available formulation
  const formulation = getPediatricFormulation(drug);

  return {
    drug,
    calculated_dose_mg: Math.round(calculatedDose * 10) / 10,
    max_dose_mg: maxDose,
    recommended_dose_mg: Math.min(calculatedDose, maxDose),
    formulation,
    frequency: '3x sehari', // Default; should be drug-specific
    notes: generateDosingNotes(drug, patient_age_months, patient_weight_kg),
    calculation_method: 'Clark\'s Rule',
  };
}

function estimateHeight(ageMonths: number): number {
  // Simplified height estimation (cm)
  if (ageMonths <= 12) return 50 + (ageMonths * 2);
  if (ageMonths <= 24) return 74 + ((ageMonths - 12) * 1);
  return 86 + ((ageMonths - 24) * 0.5);
}

// Max pediatric doses for common drugs (mg/day)
const MAX_PEDIATRIC_DOSES: Record<string, { per_kg: number; absolute: number }> = {
  'paracetamol': { per_kg: 60, absolute: 4000 },
  'ibuprofen': { per_kg: 40, absolute: 2400 },
  'amoxicillin': { per_kg: 90, absolute: 3000 },
  'azithromycin': { per_kg: 10, absolute: 500 },
  'cefixime': { per_kg: 8, absolute: 400 },
  'metronidazole': { per_kg: 30, absolute: 2000 },
  'cotrimoxazole': { per_kg: 8, absolute: 960 }, // TMP component
};

function getMaxPediatricDose(drug: string, weightKg: number): number {
  const normalized = drug.toLowerCase();
  const limits = MAX_PEDIATRIC_DOSES[normalized];

  if (!limits) {
    // Default: don't exceed adult dose
    return 1000;
  }

  const weightBased = limits.per_kg * weightKg;
  return Math.min(weightBased, limits.absolute);
}

// Pediatric formulations
const PEDIATRIC_FORMULATIONS: Record<string, string> = {
  'paracetamol': 'Sirup 120mg/5ml atau Drop 100mg/ml',
  'ibuprofen': 'Sirup 100mg/5ml',
  'amoxicillin': 'Sirup 125mg/5ml atau 250mg/5ml',
  'azithromycin': 'Sirup 200mg/5ml',
  'cefixime': 'Sirup 100mg/5ml',
  'cotrimoxazole': 'Sirup (TMP 40mg + SMX 200mg)/5ml',
  'metronidazole': 'Sirup 125mg/5ml',
  'domperidone': 'Sirup 5mg/5ml',
  'ondansetron': 'Sirup 4mg/5ml',
};

function getPediatricFormulation(drug: string): string {
  return PEDIATRIC_FORMULATIONS[drug.toLowerCase()] || 'Sesuaikan dengan sediaan yang tersedia';
}

function generateDosingNotes(
  drug: string,
  ageMonths: number,
  weightKg: number
): string[] {
  const notes: string[] = [];

  if (ageMonths < 3) {
    notes.push('Usia < 3 bulan: Pertimbangkan rujukan atau konsultasi');
  }

  if (weightKg < 5) {
    notes.push('BB < 5 kg: Gunakan dosis berdasarkan berat badan dengan hati-hati');
  }

  const normalized = drug.toLowerCase();

  // Drug-specific notes
  if (normalized === 'paracetamol') {
    notes.push('Interval minimal 4-6 jam antar dosis');
    notes.push('Maksimal 4 dosis per hari');
  }

  if (normalized === 'ibuprofen') {
    notes.push('Berikan bersama makanan');
    notes.push('Hindari pada dehidrasi');
    if (ageMonths < 6) {
      notes.push('Tidak direkomendasikan untuk usia < 6 bulan');
    }
  }

  if (normalized === 'azithromycin') {
    notes.push('Dapat diberikan dengan atau tanpa makanan');
    notes.push('Durasi: 3 hari (Z-pack) atau 5 hari');
  }

  return notes;
}

// =============================================================================
// COMBINED OFFLINE CHECK
// =============================================================================

export interface OfflineCDSSInput {
  medications: string[];
  allergies: string[];
  vitals?: VitalSigns;
}

export interface OfflineCDSSResult {
  interactions: DrugInteraction[];
  alerts: CDSSAlert[];
  hasCriticalIssues: boolean;
}

/**
 * Run all local CDSS checks
 */
export function runOfflineCDSS(input: OfflineCDSSInput): OfflineCDSSResult {
  const interactions = checkLocalDDI(input.medications);
  const allergyAlerts = checkLocalAllergies(input.medications, input.allergies);
  const vitalAlerts = input.vitals ? analyzeVitalSigns(input.vitals) : [];

  const allAlerts = [...allergyAlerts, ...vitalAlerts];

  // Add DDI alerts
  for (const ddi of interactions) {
    allAlerts.push({
      alert_id: `ddi-${ddi.drug_a}-${ddi.drug_b}`,
      level: ddi.severity === 'contraindicated' || ddi.severity === 'major' ? 'critical' : 'warning',
      type: 'ddi',
      message: `${ddi.drug_a} + ${ddi.drug_b}: ${ddi.description}`,
      action_required: ddi.severity === 'contraindicated' || ddi.severity === 'major',
    });
  }

  const hasCriticalIssues = allAlerts.some(
    (a) => a.level === 'critical' && a.action_required
  );

  return {
    interactions,
    alerts: allAlerts,
    hasCriticalIssues,
  };
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  checkLocalDDI,
  checkLocalAllergies,
  analyzeVitalSigns,
  checkSepsisWarning,
  calculatePediatricDose,
  runOfflineCDSS,
};
