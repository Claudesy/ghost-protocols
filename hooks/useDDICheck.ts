/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Real-time Drug-Drug Interaction Check Hook
 * Debounced DDI checking as medications are added/modified
 *
 * @module hooks/useDDICheck
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { sendMessage } from '@/utils/messaging';
import type { DrugInteraction, CDSSAlert, DDISeverity } from '@/types/api';

// =============================================================================
// TYPES
// =============================================================================

export interface DDICheckResult {
  /** Detected interactions */
  interactions: DrugInteraction[];
  /** Generated alerts from interactions */
  alerts: CDSSAlert[];
  /** Whether any blocking interactions exist */
  hasBlockingInteractions: boolean;
  /** Loading state */
  isLoading: boolean;
  /** Error message if check failed */
  error: string | null;
}

interface DDICache {
  drugs: string[];
  result: DrugInteraction[];
  timestamp: number;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const DEBOUNCE_MS = 500;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// =============================================================================
// HOOK
// =============================================================================

/**
 * Hook for real-time drug-drug interaction checking
 *
 * @param drugs - Array of drug names to check
 * @param options - Configuration options
 * @returns DDI check result with interactions, alerts, and status
 *
 * @example
 * ```tsx
 * const { interactions, alerts, isLoading, hasBlockingInteractions } = useDDICheck(
 *   ['Aspirin', 'Warfarin'],
 *   { enabled: true }
 * );
 * ```
 */
export function useDDICheck(
  drugs: string[],
  options: { enabled?: boolean } = {}
): DDICheckResult {
  const { enabled = true } = options;

  const [interactions, setInteractions] = useState<DrugInteraction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cache reference for avoiding duplicate requests
  const cacheRef = useRef<DDICache | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Check if cache is valid for given drugs
   */
  const isCacheValid = useCallback((drugList: string[]): boolean => {
    if (!cacheRef.current) return false;

    const { drugs: cachedDrugs, timestamp } = cacheRef.current;

    // Check TTL
    if (Date.now() - timestamp > CACHE_TTL_MS) return false;

    // Check if drugs match (order-independent)
    if (drugList.length !== cachedDrugs.length) return false;

    const sortedNew = [...drugList].sort();
    const sortedCached = [...cachedDrugs].sort();

    return sortedNew.every((drug, i) => drug === sortedCached[i]);
  }, []);

  /**
   * Perform the DDI check
   */
  const checkDDI = useCallback(async (drugList: string[]) => {
    // Skip if less than 2 drugs (no interaction possible)
    if (drugList.length < 2) {
      setInteractions([]);
      setError(null);
      return;
    }

    // Check cache first
    if (isCacheValid(drugList)) {
      setInteractions(cacheRef.current!.result);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await sendMessage('checkInteractions', drugList);

      if (result.success && result.data) {
        setInteractions(result.data);

        // Update cache
        cacheRef.current = {
          drugs: drugList,
          result: result.data,
          timestamp: Date.now(),
        };
      } else {
        setError(result.error?.message || 'DDI check failed');
        setInteractions([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setInteractions([]);
    } finally {
      setIsLoading(false);
    }
  }, [isCacheValid]);

  /**
   * Debounced check trigger
   */
  useEffect(() => {
    if (!enabled) {
      setInteractions([]);
      return;
    }

    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Set new debounce
    debounceRef.current = setTimeout(() => {
      checkDDI(drugs);
    }, DEBOUNCE_MS);

    // Cleanup
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [drugs, enabled, checkDDI]);

  /**
   * Convert interactions to CDSS alerts
   */
  const alerts: CDSSAlert[] = interactions.map((interaction) => ({
    level: getAlertLevel(interaction.severity),
    type: 'ddi' as const,
    message: `${interaction.drug_a} + ${interaction.drug_b}: ${interaction.description}`,
    action_required: interaction.severity === 'contraindicated' || interaction.severity === 'major',
    alert_id: `ddi-${interaction.drug_a}-${interaction.drug_b}`,
  }));

  /**
   * Check for blocking interactions
   */
  const hasBlockingInteractions = interactions.some(
    (i) => i.severity === 'contraindicated' || i.severity === 'major'
  );

  return {
    interactions,
    alerts,
    hasBlockingInteractions,
    isLoading,
    error,
  };
}

// =============================================================================
// HELPERS
// =============================================================================

function getAlertLevel(severity: DDISeverity): CDSSAlert['level'] {
  switch (severity) {
    case 'contraindicated':
    case 'major':
      return 'critical';
    case 'moderate':
      return 'warning';
    case 'minor':
    default:
      return 'info';
  }
}

/**
 * Manual DDI check function (for one-off checks)
 */
export async function checkDrugInteractions(
  drugs: string[]
): Promise<DrugInteraction[]> {
  if (drugs.length < 2) return [];

  try {
    const result = await sendMessage('checkInteractions', drugs);
    return result.success && result.data ? result.data : [];
  } catch {
    return [];
  }
}

/**
 * Get severity label in Indonesian
 */
export function getSeverityLabel(severity: DDISeverity): string {
  const labels: Record<DDISeverity, string> = {
    contraindicated: 'KONTRAINDIKASI',
    major: 'MAYOR',
    moderate: 'MODERAT',
    minor: 'MINOR',
  };
  return labels[severity];
}

/**
 * Get severity color for UI
 */
export function getSeverityColor(severity: DDISeverity): string {
  const colors: Record<DDISeverity, string> = {
    contraindicated: 'text-red-500',
    major: 'text-red-400',
    moderate: 'text-amber-500',
    minor: 'text-cyan-500',
  };
  return colors[severity];
}
