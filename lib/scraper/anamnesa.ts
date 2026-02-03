/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

import { EncounterData } from '@/types.ts';
import { getInputValue, getTextContent, waitForElement } from '@/lib/scraper/dom-utils.ts';

export const scrapeAnamnesa = async (): Promise<Partial<EncounterData>> => {
  console.log('[Scraper] Analyzing Anamnesa Page...');
  
  await waitForElement('#form-anamnesa-container');

  const data: Partial<EncounterData> = {
    patientId: getTextContent('.patient-info .id-label'),
    timestamp: new Date().toISOString(),
    complaint: getInputValue('textarea[name="keluhan_utama"]'),
    history: [
      getInputValue('textarea[name="riwayat_penyakit"]'),
      getInputValue('textarea[name="riwayat_alergi"]'),
    ].filter(Boolean),
  };

  return data;
};
