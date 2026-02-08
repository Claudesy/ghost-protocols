/**
 * Runtime debug flags for targeted diagnostics.
 */

const toBool = (value: unknown): boolean => String(value).toLowerCase() === 'true';

export const isGlobalDebugEnabled = (): boolean => toBool(import.meta.env.VITE_DEBUG);

export const isRiwayatDebugEnabled = (): boolean =>
  toBool(import.meta.env.VITE_DEBUG_RIWAYAT) || isGlobalDebugEnabled();

export const riwayatDebugLog = (...args: unknown[]): void => {
  if (isRiwayatDebugEnabled()) console.log(...args);
};

export const riwayatDebugWarn = (...args: unknown[]): void => {
  if (isRiwayatDebugEnabled()) console.warn(...args);
};

