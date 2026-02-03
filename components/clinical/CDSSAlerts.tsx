/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * CDSS Alert Display Component
 * Shows clinical alerts with severity-based styling
 *
 * @module components/clinical/CDSSAlerts
 */

import { memo, useState, useCallback } from 'react';
import { AlertTriangle, AlertCircle, Info, X, ChevronDown, ChevronUp } from 'lucide-react';
import type { CDSSAlert } from '@/types/api';

// =============================================================================
// TYPES
// =============================================================================

export interface CDSSAlertsProps {
  /** Array of alerts to display */
  alerts: CDSSAlert[];
  /** Callback when an alert is dismissed */
  onDismiss?: (alertId: string) => void;
  /** Callback when user acknowledges critical alert */
  onAcknowledge?: (alertId: string) => void;
  /** Whether to show dismiss buttons */
  dismissible?: boolean;
  /** Maximum alerts to show before collapsing */
  maxVisible?: number;
  /** Custom class name */
  className?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const CDSSAlerts = memo(function CDSSAlerts({
  alerts,
  onDismiss,
  onAcknowledge,
  dismissible = true,
  maxVisible = 5,
  className = '',
}: CDSSAlertsProps) {
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter out dismissed alerts
  const visibleAlerts = alerts.filter(
    (alert) => !alert.alert_id || !dismissedIds.has(alert.alert_id)
  );

  // Sort by severity (critical first)
  const sortedAlerts = [...visibleAlerts].sort((a, b) => {
    const order = { critical: 0, warning: 1, info: 2 };
    return order[a.level] - order[b.level];
  });

  // Count by severity
  const criticalCount = sortedAlerts.filter((a) => a.level === 'critical').length;
  const warningCount = sortedAlerts.filter((a) => a.level === 'warning').length;
  const infoCount = sortedAlerts.filter((a) => a.level === 'info').length;

  // Alerts to show
  const alertsToShow = isExpanded ? sortedAlerts : sortedAlerts.slice(0, maxVisible);
  const hasMore = sortedAlerts.length > maxVisible;

  const handleDismiss = useCallback(
    (alertId: string) => {
      setDismissedIds((prev) => new Set([...prev, alertId]));
      onDismiss?.(alertId);
    },
    [onDismiss]
  );

  const handleAcknowledge = useCallback(
    (alertId: string) => {
      onAcknowledge?.(alertId);
      handleDismiss(alertId);
    },
    [onAcknowledge, handleDismiss]
  );

  if (sortedAlerts.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-2 ${className}`} role="alert" aria-live="polite">
      {/* Summary Header */}
      {sortedAlerts.length > 1 && (
        <div className="flex items-center justify-between px-3 py-2 bg-bg-surface rounded-lg">
          <div className="flex items-center gap-3 text-sm">
            {criticalCount > 0 && (
              <span className="flex items-center gap-1 text-critical">
                <AlertTriangle className="w-4 h-4" />
                {criticalCount}
              </span>
            )}
            {warningCount > 0 && (
              <span className="flex items-center gap-1 text-caution">
                <AlertCircle className="w-4 h-4" />
                {warningCount}
              </span>
            )}
            {infoCount > 0 && (
              <span className="flex items-center gap-1 text-info">
                <Info className="w-4 h-4" />
                {infoCount}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400">
            {sortedAlerts.length} alert{sortedAlerts.length > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Alert List */}
      <div className="space-y-2">
        {alertsToShow.map((alert, index) => (
          <AlertCard
            key={alert.alert_id || `alert-${index}`}
            alert={alert}
            onDismiss={dismissible ? handleDismiss : undefined}
            onAcknowledge={handleAcknowledge}
          />
        ))}
      </div>

      {/* Expand/Collapse Button */}
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full gap-2 py-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show {sortedAlerts.length - maxVisible} more alerts
            </>
          )}
        </button>
      )}
    </div>
  );
});

// =============================================================================
// ALERT CARD COMPONENT
// =============================================================================

interface AlertCardProps {
  alert: CDSSAlert;
  onDismiss?: (alertId: string) => void;
  onAcknowledge?: (alertId: string) => void;
}

const AlertCard = memo(function AlertCard({
  alert,
  onDismiss,
  onAcknowledge,
}: AlertCardProps) {
  const { level, type, message, action_required, alert_id } = alert;

  const levelStyles = {
    critical: {
      bg: 'bg-red-900/30',
      border: 'border-red-500/50',
      icon: AlertTriangle,
      iconColor: 'text-critical',
      textColor: 'text-red-200',
    },
    warning: {
      bg: 'bg-amber-900/20',
      border: 'border-amber-500/40',
      icon: AlertCircle,
      iconColor: 'text-caution',
      textColor: 'text-amber-200',
    },
    info: {
      bg: 'bg-cyan-900/20',
      border: 'border-cyan-500/30',
      icon: Info,
      iconColor: 'text-info',
      textColor: 'text-cyan-200',
    },
  };

  const styles = levelStyles[level];
  const Icon = styles.icon;

  const typeLabels: Record<string, string> = {
    allergy: 'ALERGI',
    ddi: 'INTERAKSI OBAT',
    dosing: 'DOSIS',
    guideline: 'PANDUAN',
    chronic_disease: 'PENYAKIT KRONIS',
    vital_sign: 'TANDA VITAL',
    sepsis_warning: 'PERINGATAN SEPSIS',
  };

  return (
    <div
      className={`relative flex items-start gap-3 p-3 rounded-lg border ${styles.bg} ${styles.border}`}
      role="alert"
      aria-label={`${level} alert: ${message}`}
    >
      {/* Icon */}
      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${styles.iconColor}`} />

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Type Badge */}
        <span className={`text-xs font-mono uppercase tracking-wider ${styles.iconColor}`}>
          {typeLabels[type] || type.toUpperCase()}
        </span>

        {/* Message */}
        <p className={`mt-1 text-sm ${styles.textColor}`}>{message}</p>

        {/* Action Required Button */}
        {action_required && level === 'critical' && (
          <button
            onClick={() => alert_id && onAcknowledge?.(alert_id)}
            className="mt-2 px-3 py-1 text-xs font-medium bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded transition-colors"
          >
            Acknowledge
          </button>
        )}
      </div>

      {/* Dismiss Button */}
      {onDismiss && alert_id && !action_required && (
        <button
          onClick={() => onDismiss(alert_id)}
          className="p-1 text-gray-400 hover:text-gray-300 rounded transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
});

// =============================================================================
// EXPORTS
// =============================================================================

export default CDSSAlerts;
