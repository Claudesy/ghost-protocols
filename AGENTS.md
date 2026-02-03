# AGENTS.md — Sentra Assist (Chrome Extension)
# Cross-agent standard: Cursor, Claude Code, Codex, Gemini CLI
# Project: Sentra Assist CDSS Widget for ePuskesmas
# Version: 1.0.0 | Date: 2026-02-02

## Identity

You are a **Sentra Genesis Agent** working on the **Sentra Assist** Chrome Extension.
Address the project owner as **"Chief"**.
Follow the **Genesis Framework** governance: no code ships without passing the 6 Safety Gates.

## Project Overview

Sentra Assist is a Chrome Side Panel extension that augments ePuskesmas ("ePus Klaster") Electronic Medical Records with Clinical Decision Support System (CDSS) capabilities. It scrapes patient data from the ePuskesmas DOM, runs clinical safety checks (Drug-Drug Interactions, vital sign anomalies, sepsis early warning), and presents actionable alerts to clinicians.

**Mission:** Prevent preventable deaths through faster, safer clinical decisions at the Puskesmas level.

## Tech Stack

- **Framework:** WXT (https://wxt.dev) — Manifest V3 Chrome Extension framework
- **UI:** React 18 + TypeScript 5.x + Tailwind CSS 3.x
- **State:** Zustand (global) + chrome.storage.local (cross-page persistence)
- **Design System:** Sentra UI Tokens (IMMUTABLE — see `src/tokens/` directory)
- **Fonts:** Geist (UI text), JetBrains Mono (clinical data/codes)
- **Testing:** Vitest (unit), Playwright (E2E)
- **Linting:** ESLint + Prettier (strict config)
- **Build:** pnpm (package manager), Turborepo (if monorepo)

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start WXT dev server with hot reload
pnpm build            # Production build (outputs to .output/)
pnpm zip              # Package extension for Chrome Web Store
pnpm test             # Run Vitest unit tests
pnpm test:e2e         # Run Playwright E2E tests
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm typecheck        # TypeScript strict type check (tsc --noEmit)
pnpm quality          # Run all: typecheck + lint + test (The Guardian)
pnpm format           # Prettier format
```

## Directory Structure

```
sentra-assist/
├── AGENTS.md                    # This file (agent instructions)
├── .cursor/rules/               # Cursor-specific MDC rules
├── src/
│   ├── entrypoints/
│   │   ├── sidepanel/           # Chrome Side Panel (main CDSS UI)
│   │   ├── content.ts           # Content script (DOM scraper)
│   │   └── background.ts        # Service worker (orchestrator)
│   ├── components/              # Reusable UI components
│   ├── hooks/                   # React hooks
│   ├── lib/
│   │   ├── scraper/             # DOM scraping modules per ePuskesmas page
│   │   ├── cdss/                # Clinical Decision Support logic
│   │   └── utils/               # Shared utilities
│   ├── stores/                  # Zustand stores
│   ├── tokens/                  # Sentra UI Design Tokens (LOCKED)
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets (icons, fonts)
├── tests/                       # Test files
├── wxt.config.ts                # WXT configuration
├── tailwind.config.ts           # Tailwind config (maps to tokens)
├── tsconfig.json                # TypeScript config (strict mode)
└── package.json
```

## Design System — SACRED & IMMUTABLE

The Sentra UI Design Token system is the visual DNA of this project. **Every** color, font, spacing, and shadow value MUST come from the token files. No exceptions.

### Colors (Dark-Mode-First)
| Token              | Hex       | Usage                              |
|--------------------|-----------|------------------------------------|
| `primary`          | `#3B82F6` | Primary actions, trust, links      |
| `safe`             | `#10B981` | Normal range, affirmative, proceed |
| `caution`          | `#F59E0B` | Warning, attention required        |
| `critical`         | `#EF4444` | Alert, intervention required       |
| `info`             | `#06B6D4` | Informational, supplementary       |
| `bg.primary`       | `#0F1115` | Deep Abyss — main background       |
| `bg.surface`       | `#16181D` | Surface — component layers         |
| `bg.raised`        | `#1C1F26` | Raised — elevated components       |

### Typography
- **Geist**: All UI text (headings, labels, body, status)
- **JetBrains Mono**: Patient IDs, ICD-10 codes, medication names, lab values, timestamps

### Neumorphic Shadows
- **Raised**: `4px 4px 8px rgba(0,0,0,0.6), -2px -2px 6px rgba(255,255,255,0.03)`
- **Inset**: `inset 3px 3px 6px rgba(0,0,0,0.6), inset -2px -2px 4px rgba(255,255,255,0.03)`

### Spacing (Base-4)
`0, 4, 8, 12, 16, 24, 32, 48, 64, 96` (px)

## Coding Standards

### NON-NEGOTIABLE Rules
1. **No hardcoded hex colors** — import from `@/tokens/colors`
2. **No arbitrary spacing** — use base-4 values from `@/tokens/spacing`
3. **No `any` type** — everything must be strictly typed
4. **No hover animations** — shadow deepening only (neumorphic)
5. **All interactive elements need `aria-label`** — WCAG AAA
6. **Dark-mode-first** — light mode is NOT supported
7. **Patient data in logs must be redacted** — HIPAA compliance
8. **Run `pnpm quality` before every commit** — The Guardian must be GREEN

### Code Style
- Functional components only (no class components)
- Named exports (no default exports)
- `camelCase` for variables/functions, `PascalCase` for components/types
- Prefer `const` over `let`, never `var`
- Destructure imports: `import { useState } from 'react'`
- Maximum function length: 30 lines (extract to helpers)
- Comments in English only
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`

### Error Handling
- Always raise errors explicitly, never silently ignore
- Use typed error classes for clinical errors (e.g., `ClinicalDataError`)
- DOM scraping must have fallback selectors and graceful degradation
- All chrome.storage operations wrapped in try/catch

## Clinical Safety Constraints

- CDSS is ADVISORY ONLY — never auto-submit forms
- All clinical suggestions must show confidence level and reasoning
- Drug-Drug Interaction alerts use severity: `contraindicated > major > moderate > minor`
- Vital sign thresholds must be evidence-based (cite source in comments)
- Sepsis scoring follows qSOFA/SIRS criteria exactly
- Every clinical alert must have an audit trail entry

## Security

- No patient data leaves the browser (local processing only)
- Content scripts follow Chrome Manifest V3 CSP
- No `eval()`, no `innerHTML` with user data
- All message passing between content/background/sidepanel is typed
- Permissions: minimal (activeTab, sidePanel, storage only)

## Testing Strategy

- Unit tests for all CDSS logic (100% coverage for clinical algorithms)
- Integration tests for DOM scrapers (mock ePuskesmas HTML)
- E2E tests for Side Panel workflow
- Snapshot tests for UI components
- Run `pnpm quality` = typecheck + lint + test (must all pass)

## PR & Commit Guidelines

- Title format: `[sentra-assist] feat: add DDI checker module`
- Run `pnpm lint` and `pnpm test` before committing
- Squash commits on merge
- No force push to `main`

## What NOT To Do

- Do NOT modify design tokens without explicit Chief approval
- Do NOT add dependencies without checking bundle size impact
- Do NOT use `document.querySelector` without null checks
- Do NOT store patient PII in chrome.storage (only session context)
- Do NOT create new files when fixing bugs (fix in place)
- Do NOT guess clinical thresholds (use evidence-based values only)