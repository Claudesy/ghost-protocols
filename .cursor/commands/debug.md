Debug a reported issue in the Sentra Assist Chrome Extension:

## Step 1: Issue Triage
- Ask for: error message, reproduction steps, affected component, and browser version
- Classify severity: CRITICAL (data loss/security) | HIGH (feature broken) | MEDIUM (degraded) | LOW (cosmetic)

## Step 2: Isolate
- Check the browser console in DevTools → Extensions → Sentra Assist (service worker + side panel)
- Identify the error source layer:
  - **Background (service worker):** `src/entrypoints/background/`
  - **Side Panel (React):** `src/entrypoints/sidepanel/`
  - **Content Script:** `src/entrypoints/content/`
  - **Storage:** `src/lib/storage/`
  - **DOM Scraper:** `src/lib/scraper/`

## Step 3: Reproduce
- Write a minimal reproduction in the relevant test file
- If DOM-related, create a mock HTML fixture in `tests/fixtures/`
- Run `pnpm test -- --grep "{related test}"` to confirm failure

## Step 4: Root Cause
- Trace the data flow from trigger to error
- Check: type mismatches, undefined access, race conditions in async Chrome APIs
- For WXT-specific issues, check `wxt.config.ts` and entrypoint metadata

## Step 5: Fix
- Apply minimal fix — prefer single-file changes
- Add regression test covering the exact failure case
- Run `/quality` to verify no side effects

## Step 6: Document
- Output: root cause summary, fix applied, test added, gates affected
