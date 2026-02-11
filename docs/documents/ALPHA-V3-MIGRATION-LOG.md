# ALPHA v3 Migration Log

## 2026-02-06

### Scope
- Enforce diagnosis runtime to v3-only.
- Remove legacy fallback call paths in active diagnosis flow.
- Add integration tests for `getSuggestions -> runDiagnosisEngine(v3)`.
- Prepare release gate document for technical + clinical sign-off.

### Changes Completed
- Updated `lib/cdss/engine.ts`:
  - Removed legacy runtime fallback path (RAG/Vertex fallback branch).
  - Kept v3 path as primary/only diagnosis runtime.
  - Added conservative internal degraded-validation fallback (still v3-only).
- Updated `entrypoints/background.ts`:
  - `getSuggestions` no longer falls back to `SentraAPI.suggestDiagnosis`.
  - If encounter missing, create transient encounter and continue v3 flow.
- Updated `entrypoints/content.ts`:
  - Removed fallback to legacy `executePulseFill` for unsupported fill type.
  - Return explicit ALPHA v3-only error for unsupported type.
- Added/updated tests:
  - `entrypoints/background.getSuggestions.integration.test.ts`
  - `lib/cdss/get-suggestions-flow.integration.test.ts`
  - `lib/cdss/get-suggestions-flow.error.test.ts`
- Added release gate doc:
  - `docs/documents/ALPHA-V3-RELEASE-GATE.md`

### Verification
- Command:
  - `npx vitest run --config vitest.unit.config.ts lib/cdss/get-suggestions-flow.integration.test.ts lib/cdss/get-suggestions-flow.error.test.ts entrypoints/background.getSuggestions.integration.test.ts`
- Result:
  - `3 passed files`
  - `7 passed tests`

### Current Status
- Technical runtime gate: `READY`
- Clinical sign-off: `PENDING`
- ALPHA tag: `BLOCKED` until clinical and owner approvals are filled.

