/**
 * Sentra Assist — MAIN World Bridge Script
 *
 * This content script runs in the PAGE's main world (not isolated).
 * It can directly access ePuskesmas JavaScript functions like showRiwayatPelayanan().
 *
 * Communication with the isolated-world content script (content.ts) is via window.postMessage.
 * Chrome injects this script natively — NOT via <script> tag — so CSP does NOT block it.
 *
 * @module entrypoints/inject.content
 */

import { riwayatDebugLog, riwayatDebugWarn } from '@/utils/debug-flags';

export default defineContentScript({
  matches: ['*://*.epuskesmas.id/*'],
  world: 'MAIN',
  runAt: 'document_idle',

  main() {
    riwayatDebugLog('[SentraMainWorld] Bridge script loaded in MAIN world');

    const getPanelTextLength = (): number => {
      const panel =
        document.querySelector('#modal .modal-form') ||
        document.querySelector('.modal .modal-form') ||
        document.querySelector('#print_area_anamnesa') ||
        document.querySelector('#anamnesa_riwayat');
      return panel?.textContent?.trim().length || 0;
    };

    const getModalFormHtml = (): string => {
      const form =
        document.querySelector('#modal .modal-form') ||
        document.querySelector('.modal .modal-form');
      return (form as HTMLElement | null)?.innerHTML || '';
    };

    // Listen for trigger messages from isolated world content script
    window.addEventListener('message', (event) => {
      // Only accept messages from same window (not iframes)
      if (event.source !== window) return;

      const msg = event.data;
      if (!msg || typeof msg !== 'object') return;

      // ================================================================
      // DIAGNOSTIC: Ping bridge readiness from isolated world
      // ================================================================
      if (msg.type === 'sentra-ping-main-world') {
        const win = window as unknown as Record<string, unknown>;
        const appConfig = (win.AppLayoutConfig as Record<string, unknown> | undefined) || {};
        const urls = (appConfig.urls as Record<string, unknown> | undefined) || {};

        // Attempt to extract URL from function source
        let extractedUrl: string | undefined;
        if (typeof win.showRiwayatPelayanan === 'function') {
          try {
            const fnStr = win.showRiwayatPelayanan.toString();

            // Pattern 1: Object property "url: '...'" (standard $.ajax)
            // supports: url: "foo", url :"foo", url:'foo'
            const matchUrlProp = fnStr.match(/url\s*:\s*(['"`])(.*?)\1/);

            // Pattern 2: $.get('...') or $.post('...')
            // supports: $.get("foo", ...), $.post('foo', ...)
            const matchGet = fnStr.match(/\$\.(?:get|post|ajax)\s*\(\s*(['"`])(.*?)\1/);

            if (matchUrlProp && matchUrlProp[2]) {
              extractedUrl = matchUrlProp[2];
            } else if (matchGet && matchGet[2]) {
              extractedUrl = matchGet[2];
            }

            if (extractedUrl) {
              riwayatDebugLog(`[SentraMainWorld] Extracted URL candidate: ${extractedUrl}`);
            } else {
              riwayatDebugLog(
                `[SentraMainWorld] Regex failed to extract URL from: ${fnStr.substring(0, 100)}...`
              );
            }
          } catch (e) {
            riwayatDebugLog(`[SentraMainWorld] Failed to extract URL: ${e}`);
          }
        }

        window.postMessage(
          {
            type: 'sentra-main-world-ready',
            success: true,
            hasShowRiwayat: typeof win.showRiwayatPelayanan === 'function',
            showRiwayatUrl:
              typeof urls.showRiwayatPelayanan === 'string'
                ? (urls.showRiwayatPelayanan as string)
                : extractedUrl, // Use extracted URL as fallback if config is missing
            hasJQueryAjax: typeof win.$ === 'function',
          },
          '*'
        );
        return;
      }

      // ================================================================
      // TRIGGER: Call showRiwayatPelayanan() for a specific data-id
      // ================================================================
      if (msg.type === 'sentra-trigger-riwayat' && msg.dataId) {
        const dataId = String(msg.dataId);
        riwayatDebugLog(`[SentraMainWorld] Triggering showRiwayatPelayanan for data-id=${dataId}`);

        try {
          const el = document.querySelector(`a[data-id="${dataId}"]`);
          if (!el) {
            riwayatDebugWarn(`[SentraMainWorld] Element a[data-id="${dataId}"] not found`);
            window.postMessage(
              {
                type: 'sentra-riwayat-result',
                dataId,
                success: false,
                error: 'Element not found',
              },
              '*'
            );
            return;
          }

          const anchor = el as HTMLAnchorElement;
          const beforePanelLen = getPanelTextLength();
          const beforeModalHtmlLen = getModalFormHtml().length;

          // Prevent navigation when synthetic click is dispatched.
          const preventNav = (e: MouseEvent): void => {
            if (e.target === anchor || (e.target instanceof Node && anchor.contains(e.target))) {
              e.preventDefault();
              e.stopImmediatePropagation();
            }
          };
          document.addEventListener('click', preventNav, true);

          let methodUsed = 'none';
          const win = window as unknown as Record<string, unknown>;
          const maybeFn = win.showRiwayatPelayanan;
          const hasShowRiwayat = typeof maybeFn === 'function';

          if (hasShowRiwayat) {
            (maybeFn as (node: Element) => void)(anchor);
            methodUsed = 'window.showRiwayatPelayanan(el)';
          } else if (typeof anchor.onclick === 'function') {
            const evt = new PointerEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window,
            });
            anchor.onclick.call(anchor, evt);
            methodUsed = 'anchor.onclick(event)';
          } else {
            methodUsed = 'no-supported-trigger';
          }

          setTimeout(() => {
            document.removeEventListener('click', preventNav, true);
          }, 1100);

          setTimeout(() => {
            const afterPanelLen = getPanelTextLength();
            const modalFormHtml = getModalFormHtml();
            const panelChanged = afterPanelLen > beforePanelLen;
            const modalChanged = modalFormHtml.length > beforeModalHtmlLen;
            riwayatDebugLog(
              `[SentraMainWorld] Trigger done data-id=${dataId} method=${methodUsed} before=${beforePanelLen} after=${afterPanelLen} modalLen=${modalFormHtml.length}`
            );

            window.postMessage(
              {
                type: 'sentra-riwayat-result',
                dataId,
                success: methodUsed !== 'no-supported-trigger',
                methodUsed,
                hasShowRiwayat,
                panelChanged,
                modalChanged,
                beforePanelLen,
                afterPanelLen,
                modalFormHtml,
              },
              '*'
            );
          }, 1200);
        } catch (err) {
          console.error(`[SentraMainWorld] Error calling showRiwayatPelayanan:`, err);
          window.postMessage(
            {
              type: 'sentra-riwayat-result',
              dataId,
              success: false,
              error: String(err),
            },
            '*'
          );
        }
      }
      if (msg.type === 'sentra-native-fetch-request' && msg.dataId) {
        const dataId = String(msg.dataId);
        const puskesmas =
          typeof msg.puskesmas === 'string' && msg.puskesmas.trim().length > 0
            ? msg.puskesmas.trim()
            : undefined;

        const win = window as unknown as Record<string, unknown>;
        const appConfig = (win.AppLayoutConfig as Record<string, unknown> | undefined) || {};
        const urls = (appConfig.urls as Record<string, unknown> | undefined) || {};
        const csrfToken = (appConfig.csrfToken as string | undefined) || '';
        let targetUrl = '';

        // Primary URL source follows ePuskesmas runtime config.
        if (typeof urls.showRiwayatPelayanan === 'string' && urls.showRiwayatPelayanan) {
          targetUrl = urls.showRiwayatPelayanan;
        }

        // Fallback URL extraction from function source.
        if (!targetUrl && typeof win.showRiwayatPelayanan === 'function') {
          try {
            const fnStr = win.showRiwayatPelayanan.toString();
            const matchUrlProp = fnStr.match(/url\s*:\s*(['"`])(.*?)\1/);
            const matchGet = fnStr.match(/\$\.(?:get|post|ajax)\s*\(\s*(['"`])(.*?)\1/);
            if (matchUrlProp?.[2]) targetUrl = matchUrlProp[2];
            else if (matchGet?.[2]) targetUrl = matchGet[2];
          } catch {
            // ignore extraction failure
          }
        }

        if (!targetUrl) {
          window.postMessage(
            {
              type: 'sentra-native-fetch-response',
              dataId,
              success: false,
              error: 'showRiwayatPelayanan URL not found',
            },
            '*'
          );
          return;
        }

        const anchor = document.querySelector(`a[data-id="${dataId}"]`) as HTMLAnchorElement | null;
        const inferredPuskesmas =
          puskesmas || anchor?.getAttribute('data-puskesmas') || anchor?.dataset?.puskesmas || '';
        const requestData: Record<string, string> = { id: dataId };
        if (inferredPuskesmas) requestData.puskesmas = inferredPuskesmas;
        if (csrfToken) requestData._token = csrfToken;

        // Priority: jQuery AJAX to mirror host implementation, fallback native fetch.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (win.$ || win.jQuery) as any;
        if ($ && typeof $.ajax === 'function') {
          $.ajax({
            url: targetUrl,
            type: 'GET',
            data: requestData,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            success: (data: any) => {
              let content = '';
              if (typeof data === 'string') {
                content = data;
              } else if (typeof data === 'object' && data) {
                content =
                  data.form || data.html || data.data || data.content || JSON.stringify(data);
              }

              window.postMessage(
                {
                  type: 'sentra-native-fetch-response',
                  dataId,
                  success: true,
                  content,
                },
                '*'
              );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error: (_xhr: any, status: any, err: any) => {
              window.postMessage(
                {
                  type: 'sentra-native-fetch-response',
                  dataId,
                  success: false,
                  error: `${status || 'ajax-error'}:${String(err || '')}`,
                },
                '*'
              );
            },
          });
        } else {
          const urlObj = new URL(targetUrl, window.location.origin);
          Object.entries(requestData).forEach(([k, v]) => {
            if (v) urlObj.searchParams.set(k, v);
          });

          fetch(urlObj.toString(), { credentials: 'include' })
            .then((r) => r.text())
            .then((text) => {
              window.postMessage(
                {
                  type: 'sentra-native-fetch-response',
                  dataId,
                  success: true,
                  content: text,
                },
                '*'
              );
            })
            .catch((e) => {
              window.postMessage(
                {
                  type: 'sentra-native-fetch-response',
                  dataId,
                  success: false,
                  error: String(e),
                },
                '*'
              );
            });
        }
      }
    });

    riwayatDebugLog(
      '[SentraMainWorld] Bridge ready — listening for sentra-trigger-riwayat messages'
    );
  },
});
