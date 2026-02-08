/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Confidence Meter Component
 * Visual indicator for diagnosis confidence level
 *
 * @module components/cdss/ConfidenceMeter
 */

import { useMemo } from 'react';

// =============================================================================
// TYPES
// =============================================================================

interface ConfidenceMeterProps {
  /** Confidence value (0.0 - 1.0) */
  confidence: number;

  /** Show percentage label */
  showLabel?: boolean;

  /** Size variant */
  size?: 'sm' | 'md' | 'lg';

  /** Additional CSS classes */
  className?: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const SIZE_CONFIG = {
  sm: { height: 'h-1.5', text: 'text-tiny', labelGap: 'gap-1.5' },
  md: { height: 'h-2', text: 'text-caption', labelGap: 'gap-2' },
  lg: { height: 'h-3', text: 'text-small', labelGap: 'gap-2.5' },
};

const HIGH_CONFIDENCE_THRESHOLD = 0.85;
const MEDIUM_CONFIDENCE_THRESHOLD = 0.65;

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * ConfidenceMeter
 * Displays AI diagnosis confidence as a visual bar
 *
 * Color coding:
 * - High (>=85%): pulse-500 (trust indicator)
 * - Medium (65-84%): caution (review needed)
 * - Low (<65%): muted (limited confidence)
 */
export function ConfidenceMeter({
  confidence,
  showLabel = true,
  size = 'md',
  className = '',
}: ConfidenceMeterProps) {
  // Clamp confidence between 0 and 1
  const clampedConfidence = Math.max(0, Math.min(1, confidence));
  const percentage = Math.round(clampedConfidence * 100);

  // Determine color based on confidence level
  const colorClass = useMemo(() => {
    if (clampedConfidence >= HIGH_CONFIDENCE_THRESHOLD) return 'bg-pulse-500';
    if (clampedConfidence >= MEDIUM_CONFIDENCE_THRESHOLD) return 'bg-caution';
    return 'bg-muted';
  }, [clampedConfidence]);

  // Label color
  const labelColor = useMemo(() => {
    if (clampedConfidence >= HIGH_CONFIDENCE_THRESHOLD) return 'text-pulse-500';
    if (clampedConfidence >= MEDIUM_CONFIDENCE_THRESHOLD) return 'text-caution';
    return 'text-muted';
  }, [clampedConfidence]);

  const sizeConfig = SIZE_CONFIG[size];

  return (
    <div
      className={`flex items-center ${sizeConfig.labelGap} ${className}`}
      role="meter"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Confidence: ${percentage}%`}
    >
      {/* Progress bar */}
      <div className={`flex-1 ${sizeConfig.height} bg-carbon-800 rounded-full overflow-hidden`}>
        <div
          className={`h-full ${colorClass} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage label */}
      {showLabel && (
        <span className={`${sizeConfig.text} ${labelColor} font-mono min-w-[3ch] text-right`}>
          {percentage}%
        </span>
      )}
    </div>
  );
}

// =============================================================================
// EXPORTS
// =============================================================================

export type { ConfidenceMeterProps };
