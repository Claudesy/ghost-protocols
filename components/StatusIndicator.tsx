/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

import React, { memo } from 'react';
import { Activity, ShieldCheck, ZapOff } from 'lucide-react';

interface StatusProps {
  state: 'idle' | 'connected' | 'error';
  label: string;
}

/**
 * @component StatusIndicator
 * @description Displays the current system status with Neumorphic styling.
 * @rule rerender-memo - Optimized to prevent unnecessary re-renders.
 */
export const StatusIndicator = memo(({ state, label }: StatusProps) => {
  const statusStyles = {
    idle: "text-sentra-400 bg-sentra-900 border-sentra-800 shadow-neu-flat",
    connected: "text-green-400 bg-sentra-900 border-green-900/30 shadow-pulse-glow",
    error: "text-pulse-500 bg-sentra-900 border-pulse-900/30 shadow-neu-pressed",
  };

  const Icon = state === 'connected' ? Activity : state === 'error' ? ZapOff : ShieldCheck;

  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${statusStyles[state]}`}>
      <div className={`p-2 rounded-full ${state === 'connected' ? 'bg-green-500/10' : 'bg-sentra-800'}`}>
        <Icon className={`w-5 h-5 ${state === 'connected' ? 'animate-pulse-slow' : ''}`} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] text-sentra-500 font-black">Pulse Node</span>
        <span className="text-sm font-display font-bold text-platinum tracking-tight">{label}</span>
      </div>
    </div>
  );
});

StatusIndicator.displayName = 'StatusIndicator';
