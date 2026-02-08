/**
 * Normalization helpers for DOM scraping output.
 */

export const cleanText = (value: string | null | undefined): string =>
  (value || '').replace(/\s+/g, ' ').trim();

export const toInt = (value: string | null | undefined): number => {
  if (!value) return 0;
  const normalized = value.replace(',', '.').replace(/[^\d.-]/g, '');
  const parsed = Number.parseInt(normalized, 10);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const toFloat = (value: string | null | undefined): number => {
  if (!value) return 0;
  const normalized = value.replace(',', '.').replace(/[^\d.-]/g, '');
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

