// Designed and constructed by Claudesy.
import fs from 'fs';
import path from 'path';
import '@testing-library/jest-dom';

// Mock chrome global for tests running in jsdom (Chrome Extension API).
// Required because background.ts registers chrome.runtime.onMessage listeners
// at module initialization time, which runs during integration test imports.
if (typeof (globalThis as Record<string, unknown>)['chrome'] === 'undefined') {
  (globalThis as Record<string, unknown>)['chrome'] = {
    runtime: {
      onMessage: { addListener: () => {}, removeListener: () => {} },
      lastError: undefined as { message: string } | undefined,
      sendMessage: () => {},
      getManifest: () => ({ version: '1.0.0', manifest_version: 3, name: 'Test' }),
    },
    identity: {
      getAuthToken: (_options: unknown, callback: (token?: string) => void) =>
        callback(undefined),
    },
    scripting: {
      executeScript: async () => [],
    },
  };
}

// Mock fetch for /data/*.json files used by the diagnosis engine in tests.
// Node.js fetch requires absolute URLs; relative paths from the extension context
// are intercepted here and served directly from the public/data directory.
const publicDataRoot = path.resolve(__dirname, '../public/data');
const originalFetch = globalThis.fetch;
(globalThis as unknown as Record<string, unknown>)['fetch'] = async (
  url: string | URL | Request,
  init?: RequestInit,
): Promise<Response> => {
  const urlStr = url instanceof Request ? url.url : String(url);
  const match = urlStr.match(/^\/data\/([^?#]+\.json)$/);
  if (match) {
    try {
      const filePath = path.join(publicDataRoot, match[1]);
      const content = fs.readFileSync(filePath, 'utf-8');
      return new Response(content, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      return new Response('{}', { status: 404 });
    }
  }
  return originalFetch(url as Parameters<typeof fetch>[0], init);
};

