/**
 * Sentra Assist — Dashboard Bridge Poller
 * Uses Chrome Alarms API to periodically poll for pending transfers.
 * Integrates with RMETransferOrchestrator to execute auto-fill.
 */

import { createLogger } from '~/utils/logger';
import {
  fetchPendingEntries,
  fetchEntryDetail,
  claimEntry,
  reportProcessing,
  reportComplete,
  reportFailed,
  getBridgeConfig,
  type BridgeEntry,
} from './bridge-client';
import type { RMETransferResult } from '~/utils/types';

const log = createLogger('BridgePoller', 'background');

const ALARM_NAME = 'sentra-bridge-poll';
let isPolling = false;
let listenerRegistered = false;

export type BridgeTransferExecutor = (
  entryId: string,
  pelayananId: string,
  payload: import('~/utils/types').RMETransferPayload,
) => Promise<RMETransferResult>;

let registeredExecutor: BridgeTransferExecutor | null = null;

/**
 * Register the transfer executor function.
 * Called from background.ts to wire up the RMETransferOrchestrator.
 */
export function registerBridgeExecutor(executor: BridgeTransferExecutor): void {
  registeredExecutor = executor;
  log.debug('[BridgePoller] Transfer executor registered');
}

/**
 * Start bridge polling using Chrome Alarms API.
 */
export async function startBridgePoller(): Promise<void> {
  const config = await getBridgeConfig();
  if (!config.enabled) {
    log.debug('[BridgePoller] Bridge disabled, skipping alarm setup');
    return;
  }

  const periodInMinutes = Math.max(0.5, config.pollIntervalMinutes || 0.5);

  await browser.alarms.create(ALARM_NAME, {
    delayInMinutes: 0.1,
    periodInMinutes,
  });

  if (!listenerRegistered) {
    browser.alarms.onAlarm.addListener((alarm) => {
      if (alarm.name === ALARM_NAME) {
        pollOnce().catch((err) => log.error('[BridgePoller] Poll error:', err));
      }
    });
    listenerRegistered = true;
  }

  log.debug(`[BridgePoller] Started — polling every ${periodInMinutes} minutes`);
}

/**
 * Stop bridge polling.
 */
export async function stopBridgePoller(): Promise<void> {
  await browser.alarms.clear(ALARM_NAME);
  log.debug('[BridgePoller] Stopped');
}

/**
 * Single poll cycle: fetch pending → claim → execute → report.
 */
async function pollOnce(): Promise<void> {
  // Atomic check to prevent race condition
  if (isPolling) {
    log.debug('[BridgePoller] Poll already in progress, skipping');
    return;
  }
  isPolling = true;

  const config = await getBridgeConfig();
  if (!config.enabled || !config.authToken) {
    isPolling = false;
    return;
  }
  try {
    const pending = await fetchPendingEntries();
    if (pending.length === 0) return;

    log.debug(`[BridgePoller] Found ${pending.length} pending entries`);

    // Process one at a time to avoid overwhelming ePuskesmas
    const entry = pending[0];
    await processEntry(entry);
  } catch (error) {
    log.error('[BridgePoller] Poll failed:', error);
  } finally {
    isPolling = false;
  }
}

async function processEntry(entry: BridgeEntry): Promise<void> {
  if (!registeredExecutor) {
    log.error('[BridgePoller] No transfer executor registered');
    return;
  }

  try {
    // Step 1: Claim the entry
    await claimEntry(entry.id);
    log.debug(`[BridgePoller] Claimed entry ${entry.id} (${entry.patientName || entry.pelayananId})`);

    // Step 2: Fetch full payload
    const detail = await fetchEntryDetail(entry.id);

    // Step 3: Report processing
    await reportProcessing(entry.id);

    // Step 4: Execute transfer via registered executor
    const result = await registeredExecutor(
      entry.id,
      entry.pelayananId,
      detail.payload,
    );

    // Step 5: Report result
    if (result.state === 'success' || result.state === 'partial') {
      await reportComplete(entry.id, result);
      log.debug(`[BridgePoller] Entry ${entry.id} completed: ${result.state}`);
    } else {
      const errorMsg = result.reasonCodes.join(', ') || 'Transfer failed';
      await reportFailed(entry.id, errorMsg, result);
      log.warn(`[BridgePoller] Entry ${entry.id} failed: ${errorMsg}`);
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    log.error(`[BridgePoller] Entry ${entry.id} error:`, errorMsg);
    try {
      await reportFailed(entry.id, errorMsg);
    } catch {
      log.error(`[BridgePoller] Failed to report failure for ${entry.id}`);
    }
  }
}

/**
 * Manually trigger a single poll (for testing / UI button).
 */
export async function triggerManualPoll(): Promise<{ found: number; processed: boolean; error?: string }> {
  const config = await getBridgeConfig();
  if (!config.enabled) return { found: 0, processed: false, error: 'Bridge disabled' };
  if (!config.authToken) return { found: 0, processed: false, error: 'No auth token' };

  try {
    const pending = await fetchPendingEntries();
    if (pending.length === 0) return { found: 0, processed: false };

    await processEntry(pending[0]);
    return { found: pending.length, processed: true };
  } catch (error) {
    return { found: 0, processed: false, error: error instanceof Error ? error.message : String(error) };
  }
}
