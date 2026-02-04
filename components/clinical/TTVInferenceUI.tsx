/**
 * TTV Inference UI Component
 *
 * Gate 1: Vital Signs + Anamnesa with AI Narrative Generation
 * Two-column layout: Vital Signs (left) | Symptoms + AI Narrative (right)
 *
 * Uses integrated clinical decision workflow:
 * - Gate 2: HTN Classification (FKTP 2024)
 * - Gate 3: Glucose Classification (PERKENI 2024)
 * - Gate 4: Occult Shock Detection (MSF Guidelines)
 *
 * @module components/clinical/TTVInferenceUI
 */

import React, { useCallback, useEffect, useState } from 'react';
import { generateNarrative, getSuggestions } from '../../lib/inference/narrative-generator';
import { PatientHeader } from './PatientHeader';

// Clinical Decision Workflow Imports
import {
  classifyBloodGlucose,
  type GlucoseClassification,
  type GlucoseData,
} from '../../lib/inference/glucose-classifier';
import {
  BP_THRESHOLDS,
  classifyHypertension,
  getHTNSeverity,
  type BPMeasurementSession,
  type HTNClassification,
} from '../../lib/inference/htn-classifier';
import {
  calculateMAP,
  detectOccultShock,
  integratedTTVWorkflow,
  type ClinicalDecision,
  type OccultShockResult,
} from '../../lib/inference/occult-shock-detector';

// ============================================================================
// TYPES
// ============================================================================

export interface TTVInferenceUIProps {
  patientName: string;
  patientGender: 'L' | 'P';
  patientAge: number;
  patientRM: string;
  onComplete: (data: TTVInferenceData) => void;
  onCancel?: () => void;
  showMaskedName?: boolean;
  onAlertsChange?: (alerts: ScreeningAlert[]) => void;
}

// Screening Alert Types (Integrated with Clinical Decision Workflow)
export interface ScreeningAlert {
  id: string;
  gate: 'GATE_2_HTN' | 'GATE_3_GLUCOSE' | 'GATE_4_OCCULT_SHOCK' | 'STANDARD_WORKFLOW';
  type:
    | 'ht_crisis'
    | 'ht_urgency'
    | 'hypoglycemia'
    | 'hyperglycemia'
    | 'occult_shock'
    | 'declining';
  severity: 'critical' | 'high' | 'warning';
  title: string;
  reasoning: string;
  recommendations: string[];
  // Additional clinical data
  clinicalData?: {
    map?: number;
    delta_sbp?: number;
    baseline_bp?: { sbp: number; dbp: number };
  };
}

/**
 * TTVInferenceData interface
 * 
 * @remarks
 * TODO: Add type description and property documentation
 * Auto-generated on 2026-02-04
 */

export interface TTVInferenceData {
  vital_signs: {
    sbp: number;
    dbp: number;
    hr: number;
    rr: number;
    temp: number;
  };
  anamnesa: {
    keluhan_utama: string;
    lama_sakit: string;
    is_akut: boolean;
  };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const TTVInferenceUI: React.FC<TTVInferenceUIProps> = ({
  patientName,
  patientGender,
  patientAge,
  patientRM,
  onComplete,
  showMaskedName = false,
  onAlertsChange,
}) => {
  // Vital Signs State
  const [sbp, setSBP] = useState<string>('');
  const [dbp, setDBP] = useState<string>('');
  const [hr, setHR] = useState<string>('');
  const [rr, setRR] = useState<string>('');
  const [temp, setTemp] = useState<string>('');
  const [glucose, setGlucose] = useState<string>('');

  // AutoSen preset selection
  const [autosenPreset, setAutosenPreset] = useState<'normal' | 'ht'>('normal');

  // Anamnesa State
  const [symptomText, setSymptomText] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Alergi State (multi-select chips)
  const [allergies, setAllergies] = useState<string[]>([]);
  const allergyOptions = ['Obat', 'Makanan', 'Udara Dingin', 'Debu', 'Tidak Ada'];

  const toggleAllergy = (allergy: string) => {
    if (allergy === 'Tidak Ada') {
      // If "Tidak Ada" selected, clear all others
      setAllergies(['Tidak Ada']);
    } else {
      // If other selected, remove "Tidak Ada" and toggle
      setAllergies((prev) => {
        const filtered = prev.filter((a) => a !== 'Tidak Ada');
        if (filtered.includes(allergy)) {
          return filtered.filter((a) => a !== allergy);
        }
        return [...filtered, allergy];
      });
    }
  };

  // TTV Presets with realistic variation
  const generateTTVValues = useCallback((preset: 'normal' | 'ht') => {
    const randomInRange = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    if (preset === 'normal') {
      return {
        sbp: randomInRange(110, 125).toString(),
        dbp: randomInRange(70, 82).toString(),
        hr: randomInRange(72, 88).toString(),
        rr: randomInRange(16, 20).toString(),
        temp: (36 + Math.random() * 0.6).toFixed(1),
        glucose: randomInRange(85, 110).toString(),
      };
    } else {
      // Hypertension preset
      return {
        sbp: randomInRange(145, 165).toString(),
        dbp: randomInRange(92, 105).toString(),
        hr: randomInRange(80, 95).toString(),
        rr: randomInRange(18, 22).toString(),
        temp: (36.2 + Math.random() * 0.5).toFixed(1),
        glucose: randomInRange(100, 130).toString(),
      };
    }
  }, []);

  // AutoSen handler - auto-fill TTV values
  const handleAutoSen = useCallback(() => {
    const values = generateTTVValues(autosenPreset);
    setSBP(values.sbp);
    setDBP(values.dbp);
    setHR(values.hr);
    setRR(values.rr);
    setTemp(values.temp);
    setGlucose(values.glucose);
  }, [autosenPreset, generateTTVValues]);

  // AI Narrative State
  const [narrative, setNarrative] = useState({
    keluhan_utama: '',
    lama_sakit: '',
    is_akut: true,
    confidence: 0,
  });

  // Real-time narrative generation
  useEffect(() => {
    if (symptomText.trim()) {
      const generated = generateNarrative(symptomText, {
        includeAssociatedSymptoms: true,
      });
      setNarrative(generated);
    } else {
      setNarrative({
        keluhan_utama: '',
        lama_sakit: '',
        is_akut: true,
        confidence: 0,
      });
    }
  }, [symptomText]);

  // ==========================================================================
  // SCREENING GATES - Integrated Clinical Decision Workflow
  // Uses: htn-classifier.ts, glucose-classifier.ts, occult-shock-detector.ts
  // ==========================================================================
  useEffect(() => {
    const alerts: ScreeningAlert[] = [];
    const sbpNum = parseInt(sbp) || 0;
    const dbpNum = parseInt(dbp) || 0;
    const glucoseNum = parseInt(glucose) || 0;

    // CRITICAL: Check for HTN Crisis even if only SBP is entered
    // SBP ≥180 alone is dangerous and requires immediate attention
    if (sbpNum >= BP_THRESHOLDS.CRISIS.sbp) {
      const map = dbpNum > 0 ? calculateMAP(sbpNum, dbpNum) : Math.round(sbpNum / 3);
      alerts.push({
        id: 'gate2-htn-crisis-sbp-only',
        gate: 'GATE_2_HTN',
        type: sbpNum >= 220 ? 'ht_crisis' : 'ht_urgency',
        severity: sbpNum >= 220 ? 'critical' : 'high',
        title: sbpNum >= 220 ? '🚑 HTN EMERGENCY - RUJUK IGD' : '🚨 HTN URGENCY - CAPTOPRIL SL',
        reasoning: `SBP ${sbpNum} mmHg ≥${BP_THRESHOLDS.CRISIS.sbp} - ${sbpNum >= 220 ? 'EMERGENCY LEVEL' : 'Crisis level'}. ${dbpNum > 0 ? `DBP ${dbpNum} mmHg.` : 'Lengkapi DBP untuk assessment lengkap.'}`,
        recommendations:
          sbpNum >= 220
            ? [
                '🚑 IMMEDIATE ER REFERRAL',
                'IV access (2 lines)',
                'Continuous monitoring',
                'Call ambulance',
                'Do NOT give oral antihypertensives',
              ]
            : [
                '🚨 Captopril 12.5mg SL now',
                'Reassess BP in 30 min',
                'Repeat Captopril if DBP >100 (max 25mg total)',
                'Monitor for hypoperfusion',
              ],
        clinicalData: { map },
      });
    }

    // Skip further processing if no complete vital signs
    if (!sbpNum || !dbpNum) {
      if (onAlertsChange) onAlertsChange(alerts);
      return;
    }

    // ========================================================================
    // STEP 1: Run Integrated TTV Workflow (Priority Router)
    // Priority: Hypoglycemia > Occult Shock > HTN Crisis > Hyperglycemia
    // ========================================================================
    const clinicalDecision: ClinicalDecision = integratedTTVWorkflow({
      glucose: glucoseNum || undefined,
      bp: { sbp: sbpNum, dbp: dbpNum },
      known_htn: false, // TODO: Get from patient history
      has_acute_symptoms: false, // TODO: Get from anamnesa
      has_crisis_signs: false, // TODO: Get from symptoms
      bp_history: [], // TODO: Get from storage
    });

    // ========================================================================
    // STEP 2: Process based on routed gate
    // ========================================================================

    // GATE 3: Glucose Classification (PERKENI 2024)
    if (glucoseNum > 0) {
      const glucoseData: GlucoseData = {
        gds: glucoseNum,
        sample_type: 'capillary',
        has_classic_symptoms: false,
      };
      const glucoseResult: GlucoseClassification = classifyBloodGlucose(glucoseData);

      if (glucoseResult.category === 'HYPOGLYCEMIA_CRISIS') {
        alerts.push({
          id: 'gate3-hypoglycemia',
          gate: 'GATE_3_GLUCOSE',
          type: 'hypoglycemia',
          severity: 'critical',
          title: '⚡ HIPOGLIKEMIA - PRIORITAS 1',
          reasoning: glucoseResult.reasoning,
          recommendations: glucoseResult.recommendations,
        });
      } else if (glucoseResult.category === 'HYPERGLYCEMIA_CRISIS') {
        alerts.push({
          id: 'gate3-hyperglycemia-crisis',
          gate: 'GATE_3_GLUCOSE',
          type: 'hyperglycemia',
          severity: 'critical',
          title: '🚑 KRISIS HIPERGLIKEMIA (DKA/HHS)',
          reasoning: glucoseResult.reasoning,
          recommendations: glucoseResult.recommendations,
        });
      } else if (glucoseResult.category === 'DIABETES_CONFIRMED' && glucoseNum >= 200) {
        alerts.push({
          id: 'gate3-hyperglycemia',
          gate: 'GATE_3_GLUCOSE',
          type: 'hyperglycemia',
          severity: 'high',
          title: '⚠️ HIPERGLIKEMIA',
          reasoning: glucoseResult.reasoning,
          recommendations: glucoseResult.recommendations,
        });
      }
    }

    // GATE 4: Occult Shock Detection (MSF Guidelines)
    if (clinicalDecision.gate === 'GATE_4_OCCULT_SHOCK') {
      const shockResult: OccultShockResult = detectOccultShock({
        vitals: {
          current_sbp: sbpNum,
          current_dbp: dbpNum,
          glucose: glucoseNum || undefined,
        },
        last_3_visits: [], // TODO: Get from patient history
        symptoms: {
          dizziness: false,
          presyncope: false,
          syncope: false,
          weakness: false,
        },
        known_htn: false,
      });

      if (shockResult.risk_level === 'CRITICAL' || shockResult.risk_level === 'HIGH') {
        alerts.push({
          id: 'gate4-occult-shock',
          gate: 'GATE_4_OCCULT_SHOCK',
          type: 'occult_shock',
          severity: shockResult.risk_level === 'CRITICAL' ? 'critical' : 'high',
          title: '🚨 OCCULT SHOCK - INVESTIGASI',
          reasoning: shockResult.triggers.join('; '),
          recommendations: shockResult.recommendations,
          clinicalData: {
            map: shockResult.map,
            delta_sbp: shockResult.delta_sbp,
            baseline_bp: shockResult.baseline_bp,
          },
        });
      }
    }

    // GATE 2: HTN Classification (FKTP 2024)
    // Skip if already have HTN crisis alert from early check (SBP-only)
    const hasEarlyHTNAlert = alerts.some((a) => a.id === 'gate2-htn-crisis-sbp-only');

    if (
      !hasEarlyHTNAlert &&
      (sbpNum >= BP_THRESHOLDS.CRISIS.sbp || dbpNum >= BP_THRESHOLDS.CRISIS.dbp)
    ) {
      // Create BP session for classification
      const bpSession: BPMeasurementSession = {
        readings: [{ sbp: sbpNum, dbp: dbpNum }],
        final_bp: { sbp: sbpNum, dbp: dbpNum },
        measurement_quality: 'acceptable',
      };

      const htnResult: HTNClassification = classifyHypertension(bpSession);
      const map = calculateMAP(sbpNum, dbpNum);

      if (htnResult.type === 'HTN_EMERGENCY') {
        alerts.push({
          id: 'gate2-htn-emergency',
          gate: 'GATE_2_HTN',
          type: 'ht_crisis',
          severity: 'critical',
          title: '🚑 HTN EMERGENCY - RUJUK IGD',
          reasoning: htnResult.reasoning,
          recommendations: htnResult.recommendations,
          clinicalData: { map },
        });
      } else if (htnResult.type === 'HTN_URGENCY') {
        alerts.push({
          id: 'gate2-htn-urgency',
          gate: 'GATE_2_HTN',
          type: 'ht_urgency',
          severity: 'high',
          title: '🚨 HTN URGENCY - CAPTOPRIL SL',
          reasoning: htnResult.reasoning,
          recommendations: htnResult.recommendations,
          clinicalData: { map },
        });
      }
    } else if (!hasEarlyHTNAlert) {
      // Standard HTN classification for non-crisis
      const severity = getHTNSeverity({ sbp: sbpNum, dbp: dbpNum });
      if (severity === 'stage2') {
        alerts.push({
          id: 'gate2-htn-stage2',
          gate: 'GATE_2_HTN',
          type: 'ht_urgency',
          severity: 'warning',
          title: '⚠️ HIPERTENSI STAGE 2',
          reasoning: `TD ${sbpNum}/${dbpNum} mmHg - Stage 2 Hypertension (≥160/100)`,
          recommendations: [
            'Evaluasi gejala target organ damage',
            'Pertimbangkan dual antihypertensive therapy',
            'Follow-up 2-4 minggu',
          ],
          clinicalData: { map: calculateMAP(sbpNum, dbpNum) },
        });
      }
    }

    // Notify parent of alerts change (for Emergency tab blinking)
    if (onAlertsChange) {
      onAlertsChange(alerts);
    }
  }, [sbp, dbp, glucose, onAlertsChange]);

  // Autocomplete suggestions
  const handleSymptomChange = useCallback((value: string) => {
    setSymptomText(value);

    // Get last word for suggestions
    const words = value.split(/[,;\n]/);
    const lastWord = words[words.length - 1].trim();

    if (lastWord.length >= 2) {
      const newSuggestions = getSuggestions(lastWord);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    const words = symptomText.split(/[,;\n]/);
    words[words.length - 1] = suggestion;
    const newText = words.join(', ');
    setSymptomText(newText + ', ');
    setShowSuggestions(false);
  };

  const handleComplete = () => {
    const data: TTVInferenceData = {
      vital_signs: {
        sbp: parseInt(sbp),
        dbp: parseInt(dbp),
        hr: parseInt(hr),
        rr: parseInt(rr),
        temp: parseFloat(temp),
      },
      anamnesa: {
        keluhan_utama: narrative.keluhan_utama,
        lama_sakit: narrative.lama_sakit,
        is_akut: narrative.is_akut,
      },
    };

    onComplete(data);
  };

  const isFormValid =
    sbp && dbp && hr && rr && temp && glucose && narrative.keluhan_utama.length > 0;

  return (
    <div className="ttv-inference-ui">
      {/* Patient Header */}
      <PatientHeader
        name={patientName}
        gender={patientGender}
        age={patientAge}
        rmNumber={patientRM}
        masked={showMaskedName}
      />

      {/* Main Content: Two Columns */}
      <div className="ttv-content">
        {/* LEFT COLUMN: Vital Signs */}
        <div className="ttv-section">
          <div className="ttv-section-header">
            <h3 className="ttv-section-title">Vital Signs</h3>
            <div className="ttv-autosen-controls">
              <select
                className="ttv-autosen-select"
                value={autosenPreset}
                onChange={(e) => setAutosenPreset(e.target.value as 'normal' | 'ht')}
              >
                <option value="normal">Normal</option>
                <option value="ht">HT</option>
              </select>
              <button onClick={handleAutoSen} className="ttv-autosen-btn">
                AutoSen
              </button>
            </div>
          </div>

          <div className="ttv-vital-form">
            {/* Row 1: Blood Pressure + Glucose */}
            <div className="ttv-vital-row">
              <div className="ttv-form-group">
                <label className="ttv-label">Tekanan Darah:</label>
                <div className="ttv-bp-input">
                  <input
                    type="number"
                    value={sbp}
                    onChange={(e) => setSBP(e.target.value)}
                    placeholder="120"
                    className="ttv-input-small"
                    min="50"
                    max="300"
                  />
                  <span className="ttv-separator">/</span>
                  <input
                    type="number"
                    value={dbp}
                    onChange={(e) => setDBP(e.target.value)}
                    placeholder="80"
                    className="ttv-input-small"
                    min="30"
                    max="200"
                  />
                  <span className="ttv-unit">mmHg</span>
                </div>
              </div>

              <div className="ttv-form-group">
                <label className="ttv-label">Gula Darah:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={glucose}
                    onChange={(e) => setGlucose(e.target.value)}
                    placeholder="100"
                    className="ttv-input"
                    min="20"
                    max="600"
                  />
                  <span className="ttv-unit">mg/dL</span>
                </div>
              </div>
            </div>

            {/* Row 2: HR + RR + Temp */}
            <div className="ttv-vital-row ttv-vital-row-3">
              <div className="ttv-form-group">
                <label className="ttv-label">Nadi:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={hr}
                    onChange={(e) => setHR(e.target.value)}
                    placeholder="80"
                    className="ttv-input"
                    min="40"
                    max="200"
                  />
                  <span className="ttv-unit">x/mnt</span>
                </div>
              </div>

              <div className="ttv-form-group">
                <label className="ttv-label">Pernapasan:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={rr}
                    onChange={(e) => setRR(e.target.value)}
                    placeholder="20"
                    className="ttv-input"
                    min="8"
                    max="60"
                  />
                  <span className="ttv-unit">x/mnt</span>
                </div>
              </div>

              <div className="ttv-form-group">
                <label className="ttv-label">Suhu:</label>
                <div className="ttv-input-with-unit">
                  <input
                    type="number"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    placeholder="36.5"
                    className="ttv-input"
                    min="35"
                    max="42"
                    step="0.1"
                  />
                  <span className="ttv-unit">°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Anamnesa + AI Narrative */}
        <div className="ttv-right-column">
          <div className="ttv-section">
            <h3 className="ttv-section-title">Anamnesa</h3>

            {/* Symptom Input */}
            <div className="ttv-symptom-input-container">
              <label className="ttv-label">Gejala / Keluhan:</label>
              <div className="ttv-autocomplete-wrapper">
                <div className="ttv-textarea-container">
                  <span className="ttv-prompt-indicator">&gt;</span>
                  <textarea
                    value={symptomText}
                    onChange={(e) => handleSymptomChange(e.target.value)}
                    placeholder="Ketik gejala (misal: demam, batuk, lemas)..."
                    className="ttv-textarea"
                    rows={4}
                  />
                </div>

                {/* Autocomplete Suggestions */}
                {showSuggestions && (
                  <div className="ttv-suggestions">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="ttv-suggestion-item"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="ttv-hint">
                Pisahkan gejala dengan koma. Autocomplete akan muncul saat mengetik.
              </p>
            </div>

            {/* AI Generated Narrative */}
            {narrative.keluhan_utama && (
              <div className="ttv-ai-narrative">
                <div className="ttv-ai-header">
                  <h4 className="ttv-ai-title">Sentra Agent Narrative</h4>
                  <span className="ttv-ai-badge">{narrative.is_akut ? 'Akut' : 'Kronik'}</span>
                </div>

                <div className="ttv-ai-content">
                  <div className="ttv-ai-field">
                    <label>Keluhan Utama:</label>
                    <p>{narrative.keluhan_utama}</p>
                  </div>

                  <div className="ttv-ai-field">
                    <label>Lama Sakit:</label>
                    <p>{narrative.lama_sakit}</p>
                  </div>
                </div>

                <div className="ttv-ai-confidence">
                  <span className="ttv-confidence-label">Confidence:</span>
                  <div className="ttv-confidence-bar">
                    <div
                      className="ttv-confidence-fill"
                      style={{ width: `${narrative.confidence * 100}%` }}
                    />
                  </div>
                  <span className="ttv-confidence-value">
                    {Math.round(narrative.confidence * 100)}%
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Alergi Section */}
        <div className="ttv-section">
          <div className="ttv-section-header">
            <h3 className="ttv-section-title">Riwayat Alergi</h3>
          </div>
          <div className="ttv-allergy-chips">
            {allergyOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleAllergy(option)}
                className={`ttv-allergy-chip ${allergies.includes(option) ? 'ttv-allergy-chip-active' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="ttv-actions">
        <button
          onClick={handleComplete}
          disabled={!isFormValid}
          className="ttv-btn ttv-btn-primary ttv-btn-uplink"
        >
          Uplink Sentra Network
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// STYLES
// ============================================================================

export const ttvInferenceUIStyles = `
.ttv-inference-ui {
  background: var(--surface-primary);
  min-height: 100vh;
  width: 100%;
}

.ttv-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 16px;
}

.ttv-section {
  background: var(--surface-secondary);
  border-radius: 6px;
  padding: 16px;
  border: 1px solid var(--border-subtle);
}

.ttv-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.ttv-autosen-controls {
  display: flex;
  gap: 6px;
  align-items: center;
}

.ttv-autosen-btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.ttv-autosen-btn:hover {
  background: var(--accent-hover);
}

.ttv-autosen-select {
  background: var(--surface-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.ttv-vital-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ttv-vital-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.ttv-vital-row:last-child {
  grid-template-columns: 1fr 1fr 1fr;
}

.ttv-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ttv-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ttv-bp-input {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ttv-input-with-unit {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 0 10px;
  transition: border-color 0.2s;
}

.ttv-input-with-unit:focus-within {
  border-color: var(--accent-primary);
}

.ttv-input {
  flex: 1;
  background: none;
  border: none;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  outline: none;
}

.ttv-input-small {
  width: 70px;
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s;
  text-align: center;
}

.ttv-input-small:focus {
  border-color: var(--accent-primary);
}

.ttv-separator {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-tertiary);
}

.ttv-unit {
  font-size: 11px;
  color: var(--text-tertiary);
  font-weight: 600;
}

.ttv-symptom-input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ttv-autocomplete-wrapper {
  position: relative;
}

.ttv-textarea {
  width: 100%;
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 12px;
  font-size: 13px;
  color: var(--text-primary);
  font-family: inherit;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
  min-height: 80px;
}

.ttv-textarea:focus {
  border-color: var(--accent-primary);
}

.ttv-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--surface-primary);
  border: 1px solid var(--accent-primary);
  border-radius: 4px;
  margin-top: 4px;
  max-height: 180px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.ttv-suggestion-item {
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  text-align: left;
  font-size: 12px;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-suggestion-item:last-child {
  border-bottom: none;
}

.ttv-suggestion-item:hover {
  background: var(--surface-hover);
}

.ttv-hint {
  font-size: 11px;
  color: var(--text-tertiary);
  margin: 0;
  font-style: italic;
}

.ttv-ai-narrative {
  background: var(--surface-primary);
  border: 1px solid var(--accent-primary);
  border-radius: 4px;
  padding: 12px;
  margin-top: 12px;
}

.ttv-ai-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-subtle);
}

.ttv-ai-title {
  flex: 1;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ttv-ai-badge {
  background: var(--accent-primary);
  color: white;
  padding: 4px 10px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.ttv-ai-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ttv-ai-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ttv-ai-field label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ttv-ai-field p {
  font-size: 13px;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.6;
}

.ttv-ai-confidence {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--border-subtle);
}

.ttv-confidence-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.ttv-confidence-bar {
  flex: 1;
  height: 6px;
  background: var(--surface-tertiary);
  border-radius: 3px;
  overflow: hidden;
}

.ttv-confidence-fill {
  height: 100%;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.ttv-confidence-value {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-primary);
  min-width: 35px;
  text-align: right;
}

.ttv-actions {
  display: flex;
  gap: 10px;
  padding: 0 16px 16px;
  position: sticky;
  bottom: 0;
  background: var(--surface-primary);
  border-top: 1px solid var(--border-subtle);
  padding-top: 12px;
  margin-top: 8px;
}

.ttv-btn {
  flex: 1;
  padding: 11px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  letter-spacing: 0.2px;
}

.ttv-btn-primary {
  background: var(--accent-primary);
  color: white;
}

.ttv-btn-primary:hover:not(:disabled) {
  background: var(--accent-hover);
}

.ttv-btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ttv-btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
}

.ttv-btn-secondary:hover {
  background: var(--surface-secondary);
}
`;
