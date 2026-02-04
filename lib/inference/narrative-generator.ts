/**
 * AI Narrative Generator
 *
 * Generates clinical narrative from symptoms with smart duration logic
 * Real-time updates as user types
 *
 * @module lib/inference/narrative-generator
 */

// ============================================================================
// TYPES
// ============================================================================

export interface SymptomInput {
  text: string;
  severity?: 'ringan' | 'sedang' | 'berat';
  onset?: 'mendadak' | 'bertahap';
  pattern?: 'terus-menerus' | 'hilang-timbul';
}

/**
 * NarrativeOptions interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-02-04
 */

export interface NarrativeOptions {
  includeAssociatedSymptoms?: boolean;
  includeDuration?: boolean;
  formalTone?: boolean;
}

/**
 * GeneratedNarrative interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-02-04
 */

export interface GeneratedNarrative {
  keluhan_utama: string;
  lama_sakit: string;
  is_akut: boolean;
  confidence: number;
}

// ============================================================================
// SYMPTOM CLASSIFICATION
// ============================================================================

/**
 * Common acute symptoms (typically <2 weeks)
 */
const ACUTE_SYMPTOMS = [
  'demam',
  'fever',
  'batuk',
  'cough',
  'pilek',
  'flu',
  'mual',
  'nausea',
  'muntah',
  'vomiting',
  'diare',
  'diarrhea',
  'nyeri perut akut',
  'sakit kepala mendadak',
  'lemas mendadak',
];

/**
 * Chronic symptoms (typically ≥1 month)
 */
const CHRONIC_SYMPTOMS = [
  'hipertensi',
  'hypertension',
  'diabetes',
  'dm',
  'asma',
  'asthma',
  'nyeri sendi kronik',
  'batuk kronik',
  'sesak napas kronik',
  'kelelahan kronik',
];

// ============================================================================
// DURATION LOGIC
// ============================================================================

/**
 * Determine if symptoms are acute or chronic
 *
 * @param symptomText - Symptom description
 * @returns True if acute
 */
export function isAcuteSymptom(symptomText: string): boolean {
  const lowerText = symptomText.toLowerCase();

  // Check for explicit chronic indicators
  if (lowerText.includes('kronik') || lowerText.includes('chronic')) {
    return false;
  }

  // Check for explicit acute indicators
  if (lowerText.includes('akut') || lowerText.includes('mendadak')) {
    return true;
  }

  // Check against known symptom lists
  const hasAcuteSymptom = ACUTE_SYMPTOMS.some((s) => lowerText.includes(s));
  const hasChronicSymptom = CHRONIC_SYMPTOMS.some((s) => lowerText.includes(s));

  if (hasChronicSymptom) return false;
  if (hasAcuteSymptom) return true;

  // Default: assume acute for safety
  return true;
}

/**
 * Generate smart duration based on symptom type
 *
 * Akut: 3-7 hari (random)
 * Kronik: 1-3 tahun (random)
 *
 * @param isAkut - Whether symptoms are acute
 * @returns Duration string
 */
export function generateDuration(isAkut: boolean): string {
  if (isAkut) {
    // Acute: 3-7 days
    const days = Math.floor(Math.random() * 5) + 3; // 3-7
    return `${days} hari`;
  } else {
    // Chronic: 1-3 years
    const years = Math.floor(Math.random() * 3) + 1; // 1-3
    const months = Math.floor(Math.random() * 12); // 0-11

    if (months === 0) {
      return `${years} tahun`;
    } else {
      return `${years} tahun ${months} bulan`;
    }
  }
}

// ============================================================================
// NARRATIVE GENERATION
// ============================================================================

/**
 * Parse symptom text into structured format
 *
 * @param text - Raw symptom text
 * @returns Parsed symptoms
 */
function parseSymptoms(text: string): string[] {
  // Split by common separators
  const separators = /[,;.\n]/g;
  const symptoms = text
    .split(separators)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return symptoms;
}

/**
 * Add severity modifiers to symptoms
 *
 * @param symptom - Base symptom
 * @returns Symptom with severity
 */
function addSeverityModifier(symptom: string): string {
  const lowerSymptom = symptom.toLowerCase();

  // Already has modifier
  if (
    lowerSymptom.includes('ringan') ||
    lowerSymptom.includes('sedang') ||
    lowerSymptom.includes('berat') ||
    lowerSymptom.includes('hebat')
  ) {
    return symptom;
  }

  // Add contextual modifiers
  if (lowerSymptom.includes('demam')) {
    return Math.random() > 0.5 ? `${symptom} tinggi` : symptom;
  }

  if (lowerSymptom.includes('batuk')) {
    return Math.random() > 0.5 ? `${symptom} berdahak` : `${symptom} kering`;
  }

  if (lowerSymptom.includes('nyeri')) {
    return Math.random() > 0.5 ? `${symptom} hebat` : symptom;
  }

  return symptom;
}

/**
 * Generate clinical narrative from symptom text
 *
 * @param symptomText - User input symptoms
 * @param options - Generation options
 * @returns Generated narrative
 */
export function generateNarrative(
  symptomText: string,
  options: NarrativeOptions = {}
): GeneratedNarrative {
  if (!symptomText.trim()) {
    return {
      keluhan_utama: '',
      lama_sakit: '',
      is_akut: true,
      confidence: 0,
    };
  }

  // Parse symptoms
  const symptoms = parseSymptoms(symptomText);

  if (symptoms.length === 0) {
    return {
      keluhan_utama: '',
      lama_sakit: '',
      is_akut: true,
      confidence: 0,
    };
  }

  // Determine if acute or chronic
  const isAkut = isAcuteSymptom(symptomText);

  // Generate duration
  const duration = generateDuration(isAkut);

  // Build narrative
  let narrative = 'Pasien mengeluh ';

  if (symptoms.length === 1) {
    // Single symptom
    const symptom = addSeverityModifier(symptoms[0]);
    narrative += `${symptom} sejak ${duration} yang lalu`;
  } else if (symptoms.length === 2) {
    // Two symptoms
    const s1 = addSeverityModifier(symptoms[0]);
    const s2 = addSeverityModifier(symptoms[1]);
    narrative += `${s1} sejak ${duration} yang lalu, disertai ${s2}`;
  } else {
    // Multiple symptoms
    const primary = addSeverityModifier(symptoms[0]);
    const secondary = symptoms.slice(1, -1).map(addSeverityModifier);
    const last = addSeverityModifier(symptoms[symptoms.length - 1]);

    narrative += `${primary} sejak ${duration} yang lalu, disertai ${secondary.join(', ')}`;

    if (secondary.length > 0) {
      narrative += `, dan ${last}`;
    } else {
      narrative += ` dan ${last}`;
    }
  }

  // Add period
  narrative += '.';

  // Add associated symptoms context
  if (options.includeAssociatedSymptoms) {
    const pattern = Math.random() > 0.5 ? 'terus-menerus' : 'hilang-timbul';
    narrative += ` Keluhan ${pattern}.`;
  }

  return {
    keluhan_utama: narrative,
    lama_sakit: duration,
    is_akut: isAkut,
    confidence: symptoms.length >= 2 ? 0.9 : 0.7,
  };
}

// ============================================================================
// SYMPTOM AUTOCOMPLETE
// ============================================================================

/**
 * Common symptom suggestions for autocomplete
 */
export const COMMON_SYMPTOMS = [
  // Respiratory
  'demam',
  'batuk',
  'batuk berdahak',
  'batuk kering',
  'pilek',
  'sesak napas',
  'nyeri tenggorokan',

  // Gastrointestinal
  'mual',
  'muntah',
  'diare',
  'nyeri perut',
  'kembung',
  'mulas',

  // General
  'lemas',
  'pusing',
  'sakit kepala',
  'nyeri sendi',
  'nyeri otot',

  // Chronic
  'hipertensi',
  'diabetes',
  'asma',
  'kolesterol tinggi',
];

/**
 * Get symptom suggestions based on input
 *
 * @param input - User input
 * @param maxResults - Maximum suggestions
 * @returns Matching suggestions
 */
export function getSuggestions(input: string, maxResults = 5): string[] {
  if (!input.trim()) return [];

  const lowerInput = input.toLowerCase();

  return COMMON_SYMPTOMS.filter((s) => s.toLowerCase().includes(lowerInput)).slice(0, maxResults);
}
