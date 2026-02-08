# PROJECT MEMORY - Sentra Assist Chrome Extension

**Last Updated:** 2026-02-05
**Session:** Lingma/Qwen rule authoring & alignment

---

## PROJECT IDENTITY

**Name:** Sentra Assist
**Type:** Chrome Extension (Manifest V3)
**Purpose:** CDSS (Clinical Decision Support System) widget for ePuskesmas EMR
**Mission:** Prevent preventable deaths through faster, safer clinical decisions
**Target:** Puskesmas-level healthcare facilities in Indonesia

---

## TECH STACK

### Core Framework

- **WXT** (v0.20.13) - Chrome Extension framework with HMR
- **React** 18.3.1 + TypeScript 5.8.3
- **Tailwind CSS** 3.4.0 - Design system implementation

### State & Storage

- **Zustand** (installed but not yet used)
- **chrome.storage.local** - Cross-page persistence

### Testing & Quality

- **Vitest** 2.0.0 - Unit tests
- **Playwright** 1.48.0 - E2E tests
- **ESLint** + **Prettier** - Code quality

### Build & Dev

- **pnpm** - Package manager
- **Turborepo-ready** - Monorepo support

---

## ACTIVE ENTRY POINTS (CRITICAL)

### 1. Service Worker

**File:** `entrypoints/background.ts`
**Role:** Message router, CDSS orchestrator, state manager
**Listeners:** pageReady, scrapeResult, fillResep, getSuggestions, etc.

### 2. Content Script

**File:** `entrypoints/content.ts`
**Match:** `*://*.epuskesmas.id/*`
**Role:** DOM scraper, form filler, page detector

### 3. Side Panel UI

**File:** `entrypoints/sidepanel/main.tsx`
**Role:** React UI for clinical alerts and recommendations

---

## ACTIVE MODULES (DO NOT ARCHIVE)

### Form Filling

- `lib/filler/core.ts` - Orchestrator (372 lines)
- `lib/filler/filler-core.ts` - Event dispatcher (582 lines)

### DOM Scraping

- `lib/scraper/anamnesa.ts` - Anamnesa page scraper
- `lib/scraper/dom-utils.ts` - Utility functions

### API Integration

- `lib/api/sentra-api.ts` - Sentra CDSS API client
- `lib/api/mocks/*` - Mock data for testing

### Utilities

- `utils/messaging.ts` - chrome.runtime message passing
- `utils/storage.ts` - chrome.storage wrapper
- `utils/types.ts` - Core type definitions

### Root Types (IMPORTANT!)

- `types.ts` - **STILL IN USE** by anamnesa.ts, sentra-api.ts, messaging.ts
- Contains `EncounterData`, `FillStatus`, `AuditLog` interfaces

---

## CLEANUP COMPLETED (2026-02-03)

### Archived Files

**Location:** `archieved/2026-02-03-cleanup/`

#### Category 1: UI Components (unused-components/)

- StatusIndicator.tsx (42 lines)
- EncounterFiller.tsx (80 lines)
- clinical/AIRecommendations.tsx
- clinical/CDSSAlerts.tsx
- clinical/index.ts

#### Category 2: CDSS Logic (unused-cdss-logic/)

- diagnosis-flow.ts (~100 lines)
- prescription-flow.ts (~100 lines)
- local-rules.ts (~100 lines)
- index.ts

**Note:** `background.ts` uses `lib/api/sentra-api.ts` directly, not these modules.

#### Category 3: Hooks & Utils (unused-hooks-utils/)

- hooks/useDDICheck.ts
- hooks/index.ts
- utils/mock-data.ts

#### Category 4: Duplicate Entries (duplicate-entries/)

- entrypoints/epuskesmas.content/\* (alternate content script)
- entrypoints/sidepanel/App.tsx (29-line debug stub)

**Note:** `main.tsx` is the actual app, not App.tsx.

#### Category 5: Icon Bloat (unused-icons/)

- public/simple-icons/ (1000+ SVG files, ~5MB)

**Note:** Extension only uses sentra.png and sentralogo.png.

### Removed Permanently

- `data/` (empty)
- `.nexus/` (empty legacy)
- `.nexus-sync/` (empty legacy)
- `.taskmaster/` (empty legacy)

---

## ESLINT CONFIG (UPDATED)

### Ignore Patterns Added

```javascript
ignores: [
  '.output/**', // Build output
  '.wxt/**', // WXT cache
  'node_modules/**', // Dependencies
  'dist/**', // Distribution
  'archieved/**', // Archived code
  'public/**', // Third-party assets
  '*.config.js', // Config files
  '*.config.ts',
];
```

**Reason:** Prevent linting build artifacts and third-party code (10,000+ false errors).

---

## PRE-EXISTING ISSUES (NOT FROM CLEANUP)

### TypeScript Errors (27 total)

**Location:** `background.ts`, `content.ts`, `filler/core.ts`

**Common Issues:**

1. Missing `chrome` type definitions (needs @types/chrome)
2. Message type mismatches in handlers
3. Unused variables (\_logError, fillTextField, etc.)
4. Missing `any` type annotations

**Action:** These existed before cleanup. Not blocking. Address in separate PR.

### ESLint Warnings (11 total)

**Locations:** Same files as TypeScript errors

**Common Issues:**

1. `@typescript-eslint/no-explicit-any` (6 errors)
2. `@typescript-eslint/no-unused-vars` (5 errors)

**Action:** Technical debt. Not urgent.

---

## BUILD VERIFICATION ✅

### Output Structure

```
.output/chrome-mv3/
├── background.js (38 KB) ✓
├── content-scripts/
│   └── content.js (31 KB) ✓
├── sidepanel.html ✓
├── manifest.json ✓
├── assets/, chunks/, icons/ ✓
└── plugins/situ-design/ ✓
```

**Total Size:** 7.1 MB (down from 12+ MB)

---

## DESIGN SYSTEM (IMMUTABLE)

### Token Files

**Location:** `src/tokens/` (if exists) or inline in components
**Rule:** NO HARDCODED HEX COLORS

### Color Palette (Dark-Mode-First)

| Token      | Hex     | Usage          |
| ---------- | ------- | -------------- |
| primary    | #3B82F6 | Trust, actions |
| safe       | #10B981 | Normal range   |
| caution    | #F59E0B | Warning        |
| critical   | #EF4444 | Alert          |
| bg.primary | #0F1115 | Deep Abyss     |
| bg.surface | #16181D | Surface        |
| bg.raised  | #1C1F26 | Elevated       |

### Typography

- **Geist** - All UI text
- **JetBrains Mono** - Patient data, ICD codes, lab values

### Neumorphic Shadows

- **Raised:** `4px 4px 8px rgba(0,0,0,0.6), -2px -2px 6px rgba(255,255,255,0.03)`
- **Inset:** `inset 3px 3px 6px rgba(0,0,0,0.6), inset -2px -2px 4px rgba(255,255,255,0.03)`

---

## CODING STANDARDS (NON-NEGOTIABLE)

1. ✅ No hardcoded colors - import from tokens
2. ✅ No `any` type - strict typing
3. ✅ No arbitrary spacing - use base-4
4. ✅ Dark-mode only - no light mode
5. ✅ All interactive elements need `aria-label`
6. ✅ Patient data in logs must be redacted
7. ✅ Run `pnpm quality` before every commit

---

## COMMANDS

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (HMR enabled)
pnpm build            # Production build
pnpm zip              # Package for Chrome Web Store
pnpm typecheck        # TypeScript strict check
pnpm lint             # ESLint check
pnpm test             # Vitest unit tests
pnpm test:e2e         # Playwright E2E tests
pnpm quality          # Run all: typecheck + lint + test
```

---

## SHARED AGENT INTELLIGENCE

### Cross-Agent Protocol (Sync First)

1. **Antigravity (Jen) & Claude Code** MUST read this memory file at the start of every session.
2. Every significant decision or architecture pivot must be logged under "CRITICAL DECISIONS MADE".
3. Update the "NEXT SESSION CHECKLIST" before concluding.

### Pieces MCP Setup for Other Agents (Claude Code, etc.)

- **Installation**: Run `claude mcp add pieces` in the terminal.
- **Role**: Use `pieces-mcp` to retrieve/save clinical snippets.
- **Sync**: Always ask: _"Retrieve clinical snippets related to [Task/Patient] from Pieces"_ to ground the agent before starting clinical work.

### Current Intelligence Sharing

- **Antigravity (Jen)**: Leading high-level architecture reviews and UI/UX consistency according to Sentra UI Tokens.
- **Claude Code**: Utilized for codebase cleanup, optimization, and specific CLI-driven tasks.
- **Shared Context**: Both agents are bound by the **Genesis Protocol** and the **6 Safety Gates**.

---

## CRITICAL DECISIONS MADE

### 1. types.ts Location

**Decision:** Keep `types.ts` at root (not in utils/)
**Reason:** Still imported by anamnesa.ts, sentra-api.ts, messaging.ts
**Impact:** Exploration report was WRONG about this file being unused

### 2. Duplicate Content Scripts

**Decision:** Remove `entrypoints/epuskesmas.content/*`
**Reason:** `content.ts` has broader match pattern and is actively maintained
**Impact:** Prevents WXT auto-detect conflicts

### 3. ESLint Ignore Strategy

**Decision:** Ignore entire `public/**` folder
**Reason:** Contains third-party bundles (situ-design plugins) with 10,000+ lint errors
**Impact:** Clean lint output (11 real errors vs 10,000+ false positives)

### 4. Shared Persistent Memory Protocol (2026-02-06)

**Decision:** Standardize `.claude/PROJECT_MEMORY.md` as the "Shared Consciousness" between Antigravity and Claude Code.
**Reason:** Ensure continuity in session-based learning and mission alignment.

### 5. Lingma/Qwen Rule Set (2026-02-05)

**Decision:** Added `.lingma/rules/mandatory_rules.md` and `.cursor/rules/qwen.mdc` to align Qwen behavior with Sentra Assist safety/UX standards.
**Reason:** Ensure Qwen-based agents honor design tokens, patient safety, and workflow constraints.
**Impact:** Lingma/Cursor sessions using Qwen must load these rules; improves consistency across models.

---

## NEXT SESSION CHECKLIST (HANDOVER)

1. **Verify Shared Memory**: Ask Claude Code to check this file and confirm awareness of the Shared Agent Intelligence section.
2. **Clinical Safety Fixes**: Proceed with adding `@types/chrome` and fixing message type mismatches as planned.
3. **MDC Rules Sync**: Ensure `.cursor/rules/` load the new Qwen rule; replicate to other models if needed.

---

**END OF PROJECT MEMORY**
