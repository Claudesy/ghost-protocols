# GEMINI.md - Sentra Assist Context

## ⚡ Project Identity: Sentra Assist

**Sentra Assist** is a Chrome Extension that acts as a Clinical Decision Support System (CDSS) for the ePuskesmas ("ePus Klaster") Electronic Medical Record system. It is designed to augment the clinician's workflow by scraping patient data, analyzing it locally, and providing actionable clinical alerts (e.g., drug interactions, sepsis warnings) via a side panel.

**Mission:** Prevent preventable deaths through faster, safer clinical decisions at the Puskesmas level.
**Target System:** ePuskesmas (kotakediri.epuskesmas.id)

---

## 🛠️ Tech Stack

- **Framework:** [WXT](https://wxt.dev) (Vite-powered Chrome Extension Framework)
- **Runtime:** Chrome Manifest V3
- **Language:** TypeScript 5.8+ (Strict Mode)
- **UI Library:** React 18.3+
- **Styling:** Tailwind CSS 3.4+ (Custom Design Tokens)
- **State Management:** Zustand + `chrome.storage.local`
- **Messaging:** `@webext-core/messaging` (Type-safe messaging)
- **Testing:** Vitest (Unit), Playwright (E2E)
- **Package Manager:** npm (Project contains `package-lock.json`)

---

## 🏗️ Architecture

The extension follows the standard WXT/MV3 architecture:

1.  **Side Panel (UI):**
    *   React application hosted in the Chrome Side Panel.
    *   Primary interface for alerts, CDSS recommendations, and auto-fill controls.
    *   Located in `entrypoints/sidepanel/`.

2.  **Content Scripts (Scraper/Filler):**
    *   Runs in the context of the ePuskesmas web page (Isolated World).
    *   **Detector:** Identifies the current page type (Anamnesa, Diagnosa, Resep).
    *   **Scraper:** Extracts data from the DOM (e.g., patient age, vitals).
    *   **Filler:** Injects data into form fields (e.g., prescription auto-fill).
    *   Located in `entrypoints/epuskesmas.content/`.

3.  **Background Service Worker (Orchestrator):**
    *   Handles message routing between Content Scripts and Side Panel.
    *   Manages site-locking the side panel to specific domains.
    *   Located in `entrypoints/background.ts`.

4.  **Storage:**
    *   Uses `chrome.storage.local` to persist "Encounter" state across page navigations (24h TTL).
    *   Shared source of truth for the current patient session.

---

## 🚀 Key Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with Hot Module Replacement (HMR). Opens Chrome automatically. |
| `npm run build` | Build the extension for production (minified). Outputs to `.output/`. |
| `npm run zip` | Package the extension into a `.zip` file for Web Store submission. |
| `npm run typecheck` | Run TypeScript compiler check (no emit). |
| `npm run lint` | Run ESLint to check for code quality issues. |
| `npm run test` | Run unit tests with Vitest. |
| `npm run test:e2e` | Run end-to-end tests with Playwright. |
| `npm run quality` | **The Guardian:** Runs typecheck, lint, and tests. **MUST PASS before commit.** |

---

## 📏 Development Conventions

### Code Style
- **TypeScript:** Strict mode is mandatory. No `any`. Use explicit interfaces for all data structures.
- **React:** Functional components only. Named exports. Hooks for logic reuse.
- **Naming:** `camelCase` for variables/functions, `PascalCase` for components/interfaces.
- **Imports:** Use named imports. absolute paths (e.g., `@/components/...`) where configured.

### Design System (Immutable)
- **Tokens:** Colors, spacing, and typography are defined in `AGENTS.md` and `tailwind.config.ts`.
- **Colors:** Use semantic names (e.g., `text-primary`, `bg-surface`) instead of hex codes.
- **Dark Mode:** The UI is "Dark Mode First". Light mode is not supported.

### Clinical Safety & Security
- **Advisory Only:** CDSS is a support tool, not an automated actor. Never auto-submit clinical forms.
- **Data Privacy:** Patient PII (Personally Identifiable Information) must **NEVER** leave the user's browser.
- **Scraping:** DOM scrapers must be robust with fallback selectors. Always validate scraped data types.

### Git Workflow
- **Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`, `docs:`).
- **Safety Gate:** Always run `npm run quality` before pushing changes.

---

## 📂 Directory Structure

```text
D:\sentrasolutions\assist\
├── .cursor/rules/             # AI Coding Rules (MDC)
├── .taskmaster/docs/          # Product Requirements (PRD)
├── components/                # Reusable React components
│   └── clinical/              # Clinical-specific components (Alerts, Recommendations)
├── entrypoints/               # WXT Entry Points
│   ├── background.ts          # Service Worker
│   ├── content.ts             # Main Content Script
│   ├── epuskesmas.content/    # ePuskesmas-specific logic
│   └── sidepanel/             # React UI Application
├── lib/                       # Core Logic
│   ├── api/                   # API Utilities
│   ├── cdss/                  # Clinical Decision Support Logic
│   ├── filler/                # Form Auto-fill Logic
│   └── scraper/               # DOM Scraping Logic
├── utils/                     # Shared Utilities (Messaging, Storage)
├── wxt.config.ts              # WXT Configuration
└── package.json               # Dependencies & Scripts
```
