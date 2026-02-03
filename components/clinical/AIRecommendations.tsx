/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * AI Recommendations Display Component
 * Shows diagnosis suggestions and medication recommendations from Sentra AI
 *
 * @module components/clinical/AIRecommendations
 */

import { memo, useState, useCallback } from 'react';
import {
  Stethoscope,
  Pill,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Loader2,
  Sparkles,
} from 'lucide-react';
import type {
  DiagnosisSuggestion,
  MedicationRecommendation,
  CDSSResponse,
} from '@/types/api';

// =============================================================================
// TYPES
// =============================================================================

export interface AIRecommendationsProps {
  /** CDSS response data */
  data: CDSSResponse | null;
  /** Loading state */
  isLoading?: boolean;
  /** Error message */
  error?: string | null;
  /** Callback when diagnoses are selected */
  onSelectDiagnoses?: (diagnoses: DiagnosisSuggestion[]) => void;
  /** Callback when medications are selected */
  onSelectMedications?: (medications: MedicationRecommendation[]) => void;
  /** Callback to trigger AI request */
  onRequestAI?: () => void;
  /** Custom class name */
  className?: string;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const AIRecommendations = memo(function AIRecommendations({
  data,
  isLoading = false,
  error = null,
  onSelectDiagnoses,
  onSelectMedications,
  onRequestAI,
  className = '',
}: AIRecommendationsProps) {
  const [selectedDiagnoses, setSelectedDiagnoses] = useState<Set<string>>(new Set());
  const [selectedMeds, setSelectedMeds] = useState<Set<number>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['diagnosis', 'medications'])
  );

  // Toggle section expansion
  const toggleSection = useCallback((section: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  }, []);

  // Handle diagnosis selection
  const handleDiagnosisSelect = useCallback(
    (icdCode: string) => {
      setSelectedDiagnoses((prev) => {
        const next = new Set(prev);
        if (next.has(icdCode)) {
          next.delete(icdCode);
        } else {
          next.add(icdCode);
        }
        return next;
      });
    },
    []
  );

  // Handle medication selection
  const handleMedSelect = useCallback((index: number) => {
    setSelectedMeds((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  // Apply selected diagnoses
  const handleApplyDiagnoses = useCallback(() => {
    if (!data?.diagnosis_suggestions) return;

    const selected = data.diagnosis_suggestions.filter((d) =>
      selectedDiagnoses.has(d.icd_x)
    );
    onSelectDiagnoses?.(selected);
  }, [data, selectedDiagnoses, onSelectDiagnoses]);

  // Apply selected medications
  const handleApplyMedications = useCallback(() => {
    if (!data?.medication_recommendations) return;

    const selected = data.medication_recommendations.filter((_, i) =>
      selectedMeds.has(i)
    );
    onSelectMedications?.(selected);
  }, [data, selectedMeds, onSelectMedications]);

  // No data state - show request button
  if (!data && !isLoading && !error) {
    return (
      <div className={`p-4 ${className}`}>
        <button
          onClick={onRequestAI}
          disabled={!onRequestAI}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-5 h-5" />
          Get AI Recommendations
        </button>
        <p className="mt-2 text-xs text-center text-gray-500">
          Analyze symptoms and get evidence-based suggestions
        </p>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="mt-3 text-sm text-gray-400">Analyzing patient data...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="flex items-start gap-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-critical flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-red-200">{error}</p>
            {onRequestAI && (
              <button
                onClick={onRequestAI}
                className="mt-2 text-xs text-primary hover:underline"
              >
                Try again
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Mock Badge */}
      {data?.meta?.is_mock && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-900/20 border border-amber-500/30 rounded-lg text-xs text-amber-300">
          <Info className="w-3.5 h-3.5" />
          Using mock data (backend not connected)
        </div>
      )}

      {/* Diagnosis Suggestions Section */}
      {data?.diagnosis_suggestions && data.diagnosis_suggestions.length > 0 && (
        <Section
          title="Diagnosis Suggestions"
          icon={<Stethoscope className="w-4 h-4" />}
          isExpanded={expandedSections.has('diagnosis')}
          onToggle={() => toggleSection('diagnosis')}
          badge={`${selectedDiagnoses.size}/${data.diagnosis_suggestions.length}`}
        >
          <div className="space-y-2">
            {data.diagnosis_suggestions.map((diagnosis) => (
              <DiagnosisCard
                key={diagnosis.icd_x}
                diagnosis={diagnosis}
                isSelected={selectedDiagnoses.has(diagnosis.icd_x)}
                onSelect={() => handleDiagnosisSelect(diagnosis.icd_x)}
              />
            ))}
          </div>
          {onSelectDiagnoses && selectedDiagnoses.size > 0 && (
            <button
              onClick={handleApplyDiagnoses}
              className="mt-3 w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary text-sm rounded-lg transition-colors"
            >
              Apply Selected Diagnoses ({selectedDiagnoses.size})
            </button>
          )}
        </Section>
      )}

      {/* Medication Recommendations Section */}
      {data?.medication_recommendations && data.medication_recommendations.length > 0 && (
        <Section
          title="Medication Recommendations"
          icon={<Pill className="w-4 h-4" />}
          isExpanded={expandedSections.has('medications')}
          onToggle={() => toggleSection('medications')}
          badge={`${selectedMeds.size}/${data.medication_recommendations.length}`}
        >
          <div className="space-y-2">
            {data.medication_recommendations.map((med, index) => (
              <MedicationCard
                key={`${med.nama_obat}-${index}`}
                medication={med}
                isSelected={selectedMeds.has(index)}
                onSelect={() => handleMedSelect(index)}
              />
            ))}
          </div>
          {onSelectMedications && selectedMeds.size > 0 && (
            <button
              onClick={handleApplyMedications}
              className="mt-3 w-full py-2 bg-safe/20 hover:bg-safe/30 text-safe text-sm rounded-lg transition-colors"
            >
              Apply Selected Medications ({selectedMeds.size})
            </button>
          )}
        </Section>
      )}

      {/* Clinical Guidelines Section */}
      {data?.clinical_guidelines && data.clinical_guidelines.length > 0 && (
        <Section
          title="Clinical Guidelines"
          icon={<Info className="w-4 h-4" />}
          isExpanded={expandedSections.has('guidelines')}
          onToggle={() => toggleSection('guidelines')}
        >
          <ul className="space-y-1.5">
            {data.clinical_guidelines.map((guideline, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <span className="text-info mt-0.5">•</span>
                {guideline}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
});

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  badge?: string;
  children: React.ReactNode;
}

const Section = memo(function Section({
  title,
  icon,
  isExpanded,
  onToggle,
  badge,
  children,
}: SectionProps) {
  return (
    <div className="bg-bg-surface rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 hover:bg-bg-raised transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2 text-sm font-medium text-gray-200">
          {icon}
          {title}
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="text-xs text-gray-400 bg-bg-primary px-2 py-0.5 rounded">
              {badge}
            </span>
          )}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </button>
      {isExpanded && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
});

// =============================================================================
// DIAGNOSIS CARD
// =============================================================================

interface DiagnosisCardProps {
  diagnosis: DiagnosisSuggestion;
  isSelected: boolean;
  onSelect: () => void;
}

const DiagnosisCard = memo(function DiagnosisCard({
  diagnosis,
  isSelected,
  onSelect,
}: DiagnosisCardProps) {
  const { icd_x, nama, confidence, rationale } = diagnosis;
  const confidencePercent = Math.round(confidence * 100);

  const confidenceColor =
    confidence >= 0.8
      ? 'text-safe'
      : confidence >= 0.6
        ? 'text-caution'
        : 'text-gray-400';

  return (
    <label
      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? 'bg-primary/20 border border-primary/40'
          : 'bg-bg-raised border border-transparent hover:border-gray-700'
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="mt-1 w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary focus:ring-offset-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <code className="text-xs font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">
            {icd_x}
          </code>
          <span className={`text-xs font-mono ${confidenceColor}`}>
            {confidencePercent}%
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-200">{nama}</p>
        <p className="mt-1 text-xs text-gray-500">{rationale}</p>
      </div>
    </label>
  );
});

// =============================================================================
// MEDICATION CARD
// =============================================================================

interface MedicationCardProps {
  medication: MedicationRecommendation;
  isSelected: boolean;
  onSelect: () => void;
}

const MedicationCard = memo(function MedicationCard({
  medication,
  isSelected,
  onSelect,
}: MedicationCardProps) {
  const {
    nama_obat,
    dosis,
    aturan_pakai,
    durasi,
    rationale,
    safety_check,
    contraindications,
  } = medication;

  const safetyStyles = {
    safe: { icon: CheckCircle2, color: 'text-safe', bg: 'bg-safe/10' },
    caution: { icon: AlertTriangle, color: 'text-caution', bg: 'bg-caution/10' },
    contraindicated: { icon: AlertTriangle, color: 'text-critical', bg: 'bg-critical/10' },
  };

  const safety = safetyStyles[safety_check] || safetyStyles.safe;
  const SafetyIcon = safety.icon;

  return (
    <label
      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? 'bg-safe/10 border border-safe/40'
          : 'bg-bg-raised border border-transparent hover:border-gray-700'
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="mt-1 w-4 h-4 rounded border-gray-600 text-safe focus:ring-safe focus:ring-offset-0"
      />
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-sm text-gray-200 font-mono">
            {nama_obat}
          </span>
          <span className={`flex items-center gap-1 text-xs ${safety.color} ${safety.bg} px-1.5 py-0.5 rounded`}>
            <SafetyIcon className="w-3 h-3" />
            {safety_check === 'safe' ? 'Safe' : safety_check === 'caution' ? 'Caution' : 'Risk'}
          </span>
        </div>

        {/* Details */}
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
          <div>
            <span className="text-gray-500">Dosis:</span>{' '}
            <span className="text-gray-300 font-mono">{dosis}</span>
          </div>
          <div>
            <span className="text-gray-500">Aturan:</span>{' '}
            <span className="text-gray-300">{aturan_pakai}</span>
          </div>
          {durasi && (
            <div>
              <span className="text-gray-500">Durasi:</span>{' '}
              <span className="text-gray-300">{durasi}</span>
            </div>
          )}
        </div>

        {/* Rationale */}
        <p className="mt-2 text-xs text-gray-500">{rationale}</p>

        {/* Contraindications */}
        {contraindications && contraindications.length > 0 && (
          <div className="mt-2 text-xs text-caution">
            {contraindications.map((c, i) => (
              <p key={i}>• {c}</p>
            ))}
          </div>
        )}
      </div>
    </label>
  );
});

// =============================================================================
// EXPORTS
// =============================================================================

export default AIRecommendations;
