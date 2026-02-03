/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

import React, { useState, useCallback } from 'react';
import { SendHorizonal, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { messaging } from '@/utils/messaging';
import { getActiveEncounter } from '@/utils/storage';

export const EncounterFiller = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handlePulseExecute = useCallback(async () => {
    if (status === 'loading') return;
    
    setStatus('loading');
    try {
      const encounter = await getActiveEncounter();
      
      if (!encounter) {
        console.log("[UI] No data found. Attempting to Scrape first...");
        const scrapeResult = await messaging.sendMessage('SCRAPE_ENCOUNTER', undefined);
        
        if (!scrapeResult.success) {
          throw new Error('Please open Anamnesa page first');
        }
        return handlePulseExecute();
      }

      const fillResult = await messaging.sendMessage('FILL_RESEP', encounter);
      
      if (fillResult.success) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error(fillResult.report || 'Fill failed');
      }

    } catch (error) {
      console.error("[UI] Action Failed:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }, [status]);

  const config = {
    idle: { label: 'EXECUTE PULSE', icon: SendHorizonal, class: 'neu-btn-primary' },
    loading: { label: 'INJECTING...', icon: Loader2, class: 'neu-btn-primary brightness-75' },
    success: { label: 'PULSE SUCCESS', icon: CheckCircle2, class: 'bg-green-600 text-white shadow-lg' },
    error: { label: 'BRIDGE ERROR', icon: AlertCircle, class: 'bg-pulse-700 text-white shadow-lg' },
  };

  const current = config[status];
  const Icon = current.icon;

  return (
    <button
      onClick={handlePulseExecute}
      disabled={status === 'loading'}
      className={`
        w-full group overflow-hidden transition-all duration-300 rounded-xl p-4
        ${current.class}
        ${status === 'loading' ? 'cursor-not-allowed' : 'active:scale-[0.98] shadow-lg'}
      `}
    >
      <div className="flex items-center justify-center gap-3 relative z-10 text-white">
        <Icon className={`w-5 h-5 ${status === 'loading' ? 'animate-spin' : ''}`} />
        <span className="font-display font-black tracking-[0.1em] uppercase text-xs">
          {current.label}
        </span>
      </div>
      
      {status === 'loading' && (
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
      )}
    </button>
  );
};
