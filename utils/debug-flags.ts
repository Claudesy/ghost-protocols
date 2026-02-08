/**
 * Runtime debug flags for targeted diagnostics.
 */

import { isDebugScopeEnabled, logger } from './logger';

export const isGlobalDebugEnabled = (): boolean => isDebugScopeEnabled('global');

export const isRiwayatDebugEnabled = (): boolean =>
  isDebugScopeEnabled('riwayat');

export const riwayatDebugLog = (...args: unknown[]): void => {
  if (isRiwayatDebugEnabled()) logger.riwayat(...args);
};

export const riwayatDebugWarn = (...args: unknown[]): void => {
  if (isRiwayatDebugEnabled()) logger.warn(...args);
};
