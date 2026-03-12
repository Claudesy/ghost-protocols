# Sentra Assist — Iskandar Diagnosis Engine V1

**Document ID**: SENTRA-SPEC-001 v1.2.0  
**Version**: 1.0.0  
**Status**: Active Development  
**Author**: dr. Ferdi Iskandar, Sentra Principal Infrastructure Engineering  
**Date**: February 2, 2026

---

## Abstract

Sentra Assist is a Chrome Extension implementing a Clinical Decision Support System (CDSS) layer on top of the ePuskesmas Electronic Medical Record platform. Powered by the Iskandar Diagnosis Engine V1, the system operates entirely client-side via DOM instrumentation — requiring no backend, no proxy, and no modification to the host EMR application. The architecture is designed for zero-footprint integration: the extension mounts a React-based Side Panel, injects a content script into the host page's isolated world, and coordinates state through a typed messaging layer backed by `chrome.storage.local`.

This document serves as the primary technical reference for engineers contributing to or auditing the Sentra Assist codebase.

---

## Table of Contents

1. [Project Scope](#1-project-scope)
2. [Target Deployment Environment](#2-target-deployment-environment)
3. [System Architecture](#3-system-architecture)
4. [Technology Stack](#4-technology-stack)
5. [Repository Structure](#5-repository-structure)
6. [Getting Started](#6-getting-started)
7. [Build Pipeline](#7-build-pipeline)
8. [Core Subsystems](#8-core-subsystems)
9. [Security Model](#9-security-model)
10. [Development Workflow](#10-development-workflow)
11. [Debugging Reference](#11-debugging-reference)
12. [Phase Roadmap](#12-phase-roadmap)
13. [Contributing](#13-contributing)
14. [License](#14-license)

---

## 1. Project Scope

Sentra Assist targets three primary clinical workflows executed daily within the ePuskesmas (ePus Klaster) EMR:

- **Anamnesa** — structured intake of chief complaint and allergy history
- **Diagnosa** — ICD-10 code selection and chronic disease flagging
- **Resep** — multi-row prescription entry with AJAX autocomplete fields

The engine introduces a 60–80% reduction in manual prescription entry time through predictive auto-fill, cross-page encounter state propagation, and — in later phases — rule-based clinical decision alerts covering drug-drug interactions, allergy contraindications, and pediatric dosing boundaries.

---

## 2. Target Deployment Environment

| Attribute         | Value                                              |
|-------------------|----------------------------------------------------|
| Platform          | ePuskesmas (ePus Klaster)                          |
| Host URL          | Configured via `wxt.config.ts` (internal)          |
| Facility          | Puskesmas Balowerti, Kota Kediri, East Java        |
| Target Users      | Licensed Physicians and Nursing Staff              |
| Browser Runtime   | Chrome 114+ (Manifest V3)                          |
| Extension Context | Side Panel + Content Script (Isolated World)       |

---

## 3. System Architecture

```
+-------------------------------------------------+
|   WXT + VITE BUILD SYSTEM                       |
|   Auto-manifest generation, HMR, TypeScript     |
+------------------------+------------------------+
                         |
         +---------------+----------------+
         |                                |
+--------+-------+            +-----------+---------+
|   SIDE PANEL   |            |   SERVICE WORKER    |
|   React 18     | <---------> |   Message Broker    |
|   Typed IPC    |            |   Site-lock guard   |
+----------------+            +-----------+---------+
                                          |
                              chrome.tabs.sendMessage
                                          |
                              +-----------v---------+
                              |   CONTENT SCRIPT    |
                              |   Isolated World    |
                              |                     |
                              |   Page Detector     |
                              |   DOM Scraper       |
                              |   Event Dispatcher  |
                              |   Auto-fill Engine  |
                              +---------------------+
                                          |
                              +-----------v---------+
                              |  chrome.storage     |
                              |  .local             |
                              |  Encounter State    |
                              |  24h TTL            |
                              +---------------------+
```

### Communication Model

All inter-component communication is mediated through `@webext-core/messaging`, which enforces compile-time type safety on message payloads. No raw `chrome.runtime.sendMessage` calls exist in the codebase; every message channel is declared as a typed contract in `utils/messaging.ts` and validated at both sender and receiver boundaries.

### State Persistence

Encounter data is serialized and stored in `chrome.storage.local` under a schema-versioned key. A 24-hour TTL prevents stale patient data from persisting across shifts. The storage layer in `utils/storage.ts` wraps all read/write operations with typed getters and setters derived from the `Encounter` interface.

---

## 4. Technology Stack

| Layer              | Technology                         | Version   |
|--------------------|------------------------------------|-----------|
| Extension Framework| WXT                                | 0.20.13   |
| Build Tool         | Vite (via WXT)                     | latest    |
| Language           | TypeScript (strict mode)           | 5.8+      |
| UI Runtime         | React                              | 18.3+     |
| Extension Manifest | Chrome Manifest V3                 | —         |
| Messaging          | @webext-core/messaging             | latest    |
| Package Manager    | npm                                | 18+       |
| Node Requirement   | Node.js                            | 18+       |

TypeScript strict mode is enforced project-wide. Implicit `any` is disallowed. All DOM interactions are typed against the Chrome Extension API typings.

---

## 5. Repository Structure

```
sentra-assist/
|
|-- wxt.config.ts                    # WXT + Vite configuration, manifest declarations
|-- tsconfig.json                    # TypeScript strict config
|-- package.json                     # Dependencies and npm scripts
|
|-- entrypoints/
|   |-- background.ts                # Service worker: message broker, site-lock enforcement
|   |-- sidepanel/
|   |   |-- index.html               # HTML shell for Side Panel
|   |   |-- main.tsx                 # React DOM entry point
|   |   |-- App.tsx                  # Root component, tab router
|   |   `-- style.css                # Clinical UI theme
|   `-- epuskesmas.content/
|       |-- index.ts                 # Content script entry: lifecycle and listener registration
|       `-- detector.ts              # URL-pattern-based page type classifier
|
|-- utils/
|   |-- types.ts                     # Core TypeScript interfaces (Encounter, ResepItem, etc.)
|   |-- messaging.ts                 # Typed message channel declarations
|   `-- storage.ts                   # chrome.storage.local abstraction layer
|
|-- lib/
|   `-- iskandar-diagnosis-engine/   # Iskandar Diagnosis Engine V1 core modules
|
|-- data/
|   `-- field-mappings.ts            # DOM field configuration registry (Phase 2+)
|
|-- public/
|   `-- icons/                       # Extension icon assets (Phase 7)
|
`-- .taskmaster/
    `-- docs/
        `-- prd.txt                  # Canonical Product Requirements Document
```

---

## 6. Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (bundled with Node.js)
- Google Chrome 114+ with Developer Mode enabled in `chrome://extensions`

### Local Development Setup

```bash
# Navigate to the project root
cd sentra-assist

# Install all dependencies
npm install

# Launch development build with Hot Module Replacement
npm run dev
```

WXT will automatically open Chrome with the extension loaded as an unpacked extension. Navigate to the configured target EMR host to activate the Side Panel and content script injection.

Expected console output on a target page:

```
[Sentra/Content] Page detected: anamnesa | pelayananId: 12345
[Sentra/Background] Side Panel unlocked for tab 1
```

---

## 7. Build Pipeline

```bash
# Production build (minified, MV3-compliant)
npm run build

# Package for Chrome Web Store submission
npm run zip

# Firefox-compatible development build
npm run dev:firefox
```

| Command            | Output Path                                      |
|--------------------|--------------------------------------------------|
| `npm run build`    | `.output/chrome-mv3/` (Load Unpacked target)     |
| `npm run zip`      | `.output/sentra-assist-1.0.0-chrome.zip`         |

WXT handles manifest auto-generation from `wxt.config.ts` declarations. No manual `manifest.json` editing is required.

---

## 8. Core Subsystems

### 8.1 Page Detector (`entrypoints/epuskesmas.content/detector.ts`)

Classifies the current ePuskesmas page by evaluating the URL against three RegExp patterns:

| Page Type  | URL Pattern                        |
|------------|------------------------------------|
| `anamnesa` | `/anamnesa/(create\|edit)/*`        |
| `diagnosa` | `/diagnosa/(create\|edit)/*`        |
| `resep`    | `/resep/(create\|edit)/*`           |

On classification, the content script dispatches a `pageReady` message to the service worker containing the detected page type and extracted `pelayananId`.

### 8.2 Encounter State Schema

```typescript
interface Encounter {
  id: string;                // Unique pelayanan_id from URL
  patient_id: string;
  anamnesa: {
    chief_complaint: string;
    allergies: string[];
    vital_signs: VitalSigns;
  };
  diagnosa: {
    icd10_codes: ICD10Entry[];
    chronic_diseases: string[];
  };
  resep: ResepItem[];        // Array of medication entries
}
```

All fields are fully typed. The storage layer enforces schema versioning and TTL expiration on every read operation.

### 8.3 Typed Messaging Contracts (`utils/messaging.ts`)

```typescript
// Defined message channels (compile-time enforced)
sendMessage('fillResep', { resepItems: ResepItem[] });
sendMessage('scrapeAnamnesa', { pelayananId: string });
sendMessage('pageReady', { pageType: PageType; pelayananId: string });
```

Unrecognized message types are rejected at the TypeScript compilation stage, not at runtime. This eliminates an entire class of inter-component integration bugs common in untyped Chrome Extension messaging.

### 8.4 Auto-fill Engine (Phase 2 — `lib/iskandar-diagnosis-engine/filler-core.ts`)

The auto-fill engine dispatches synthetic DOM events to ePuskesmas form fields, simulating the exact browser event sequence required to trigger ePuskesmas's AJAX autocomplete listeners:

1. `focus` — activates the field
2. `input` — triggers AJAX search with the medication name
3. `keydown` (ArrowDown + Enter) — selects the first autocomplete result
4. `change` — commits the selection and propagates to dependent fields

This approach requires no modification to the host application and is resilient to ePuskesmas frontend updates that do not alter the event contract of the form fields.

---

## 9. Security Model

| Control                  | Implementation                                                  |
|--------------------------|-----------------------------------------------------------------|
| Isolated World           | Content script JS context is fully isolated from page scripts   |
| No Remote Code Execution | All code bundled at build time; no eval, no remote imports      |
| Host Permission Scoping  | `host_permissions` restricted to the configured EMR host only   |
| Storage Isolation        | `chrome.storage.local` is extension-private; inaccessible to the host page |
| CSRF Preservation        | Auto-fill engine never targets hidden CSRF token fields         |
| Typed Contracts          | Message schema validation eliminates injection via malformed payloads |

The extension does not transmit any patient data to external endpoints. All state is local to the browser session and expires within 24 hours.

---

## 10. Development Workflow

### Standard Iteration Cycle

```
npm run dev
    |
    +-- Chrome opens with extension loaded
    |
    +-- Navigate to the target EMR host/{target-page}
    |
    +-- Edit source file
    |
    +-- HMR auto-reloads affected entrypoints (< 2 seconds)
    |
    +-- Verify console output and Side Panel state
    |
    +-- Commit
```

### Environment Variables

| Variable                             | Effect                                              |
|--------------------------------------|-----------------------------------------------------|
| `VITE_DEBUG=true`                    | Enables verbose logging across all entrypoints      |
| `VITE_DEBUG_BACKGROUND`              | Scoped logging for service worker                   |
| `VITE_DEBUG_CONTENT`                 | Scoped logging for content script                   |
| `VITE_DEBUG_RIWAYAT`                 | Scoped logging for visit history module             |
| `VITE_MESSAGE_TIMEOUT_DEFAULT`       | Default IPC message timeout (ms)                    |
| `VITE_MESSAGE_TIMEOUT_FILL`          | Timeout for auto-fill operations                    |
| `VITE_MESSAGE_TIMEOUT_SCRAPE`        | Timeout for DOM scrape operations                   |
| `VITE_MESSAGE_TIMEOUT_VISIT_FETCH`   | Timeout for visit data retrieval                    |
| `VITE_MESSAGE_TIMEOUT_AI`            | Timeout for CDSS inference calls                   |

---

## 11. Debugging Reference

| Target                | Access Method                                                     |
|-----------------------|-------------------------------------------------------------------|
| Service Worker logs   | `chrome://extensions` > Sentra Assist > "service worker" link     |
| Content Script logs   | DevTools on the ePuskesmas page > Console tab                     |
| Side Panel logs       | Right-click the Side Panel > Inspect                              |
| Storage state         | DevTools > Application > Storage > Extension Storage              |
| Message traffic       | DevTools > Network (filter: `chrome-extension://`)                |

---

## 12. Phase Roadmap

### Phase 1 — Foundation (Complete)

- WXT project scaffold with React template
- TypeScript strict mode, all core interfaces
- Service worker with side panel site-lock enforcement
- Content script with URL-pattern page classifier
- Typed messaging infrastructure (`@webext-core/messaging`)
- Storage layer with `Encounter` schema and TTL
- Side Panel React UI with tab navigation
- Clinical UI theme

**Definition of Done (verified)**:
- `npm run dev` launches Chrome with extension loaded
- Side Panel activates only on the configured EMR host
- Console confirms page detection on target URL patterns
- Zero TypeScript compilation errors
- HMR cycle completes in under 2 seconds

---

### Phase 2 — Prescription Auto-Fill (Weeks 2–3)

- Implement `filler-core.ts` event dispatch engine
- AJAX autocomplete simulation for medication search fields
- Dynamic medication row creation and population
- Resep DOM field mapping registry (29 fields)
- Side Panel Resep form builder with live preview

---

### Phase 3 — Cross-Page Persistence (Weeks 4–5)

- DOM scraper modules for all three page types
- Anamnesa and Diagnosa field mapping registry
- Cross-page allergy propagation to Resep contraindication layer

---

### Phase 4 — Full Panel UI (Weeks 6–7)

- Complete Anamnesa, Diagnosa, and Resep tab forms
- Undo stack for auto-fill operations
- Field highlighting for filled elements
- Structured error reporting with user-facing retry interface

---

### Phase 5 — CDSS Phase 1 (Weeks 8–9)

- Drug allergy alert system
- Duplicate medication detection within a single encounter
- Chronic disease contraindication rule engine

---

### Phase 6 — CDSS Phase 2 (Weeks 10–11)

- Drug-Drug Interaction database integration
- ICD-10 suggestion from symptom keyword extraction
- Pediatric weight-based dosing calculator

---

### Phase 7 — Production Hardening (Week 12+)

- Extension icon asset production
- Chrome Web Store listing and review submission
- Multi-facility configuration system
- User onboarding documentation and training materials

---

## 13. Contributing

Sentra Assist is an internal Sentra Infrastructure project. All contributions must conform to the following engineering standards:

- **Specification-driven development**: all features must be traceable to a PRD entry in `.taskmaster/docs/prd.txt`
- **TypeScript strict mode**: `noImplicitAny`, `strictNullChecks`, and `strictFunctionTypes` are non-negotiable
- **No raw messaging**: all IPC must use the typed channel declared in `utils/messaging.ts`
- **Branch isolation**: each task executes in a dedicated Git branch; no direct commits to `main`
- **Zero fabricated state**: no hardcoded mock data may be merged into any non-test module

---

## 14. License

**INTERNAL — Sentra Infrastructure**

This software is proprietary and confidential. Unauthorized distribution, reproduction, or deployment outside of Puskesmas Balowerti, Kota Kediri, is prohibited.

---

## References

- WXT Framework Documentation: https://wxt.dev
- Chrome Extension Manifest V3: https://developer.chrome.com/docs/extensions/mv3/
- @webext-core/messaging: https://webext-core.aklinker1.io/guide/messaging/
- Full PRD: `.taskmaster/docs/prd.txt`
- Original Project Specification: `Sentra_Assist_Project_Spec.pdf`

---

*Sentra Assist is developed and maintained by dr. Ferdi Iskandar under the Sentra Healthcare Artificial Intelligence engineering division. Document ID: SENTRA-SPEC-001 v1.2.0.*
# Sentra Assist — Iskandar Diagnosis Engine V1

**Document ID**: SENTRA-SPEC-001 v1.2.0  
**Version**: 1.0.0  
**Status**: Active Development  
**Author**: dr. Ferdi Iskandar, Sentra Principal Infrastructure Engineering  
**Date**: February 2, 2026

---

## Abstract

Sentra Assist is a Chrome Extension implementing a Clinical Decision Support System (CDSS) layer on top of the ePuskesmas Electronic Medical Record platform. Powered by the Iskandar Diagnosis Engine V1, the system operates entirely client-side via DOM instrumentation — requiring no backend, no proxy, and no modification to the host EMR application. The architecture is designed for zero-footprint integration: the extension mounts a React-based Side Panel, injects a content script into the host page's isolated world, and coordinates state through a typed messaging layer backed by `chrome.storage.local`.

This document serves as the primary technical reference for engineers contributing to or auditing the Sentra Assist codebase.

---

## Table of Contents

1. [Project Scope](#1-project-scope)
2. [Target Deployment Environment](#2-target-deployment-environment)
3. [System Architecture](#3-system-architecture)
4. [Technology Stack](#4-technology-stack)
5. [Repository Structure](#5-repository-structure)
6. [Getting Started](#6-getting-started)
7. [Build Pipeline](#7-build-pipeline)
8. [Core Subsystems](#8-core-subsystems)
9. [Security Model](#9-security-model)
10. [Development Workflow](#10-development-workflow)
11. [Debugging Reference](#11-debugging-reference)
12. [Phase Roadmap](#12-phase-roadmap)
13. [Contributing](#13-contributing)
14. [License](#14-license)

---

## 1. Project Scope

Sentra Assist targets three primary clinical workflows executed daily within the ePuskesmas (ePus Klaster) EMR:

- **Anamnesa** — structured intake of chief complaint and allergy history
- **Diagnosa** — ICD-10 code selection and chronic disease flagging
- **Resep** — multi-row prescription entry with AJAX autocomplete fields

The engine introduces a 60–80% reduction in manual prescription entry time through predictive auto-fill, cross-page encounter state propagation, and — in later phases — rule-based clinical decision alerts covering drug-drug interactions, allergy contraindications, and pediatric dosing boundaries.

---

## 2. Target Deployment Environment

| Attribute         | Value                                              |
|-------------------|----------------------------------------------------|
| Platform          | ePuskesmas (ePus Klaster)                          |
| Host URL          | Configured via `wxt.config.ts` (internal)          |
| Facility          | Puskesmas Balowerti, Kota Kediri, East Java        |
| Target Users      | Licensed Physicians and Nursing Staff              |
| Browser Runtime   | Chrome 114+ (Manifest V3)                          |
| Extension Context | Side Panel + Content Script (Isolated World)       |

---

## 3. System Architecture

```
+-------------------------------------------------+
|   WXT + VITE BUILD SYSTEM                       |
|   Auto-manifest generation, HMR, TypeScript     |
+------------------------+------------------------+
                         |
         +---------------+----------------+
         |                                |
+--------+-------+            +-----------+---------+
|   SIDE PANEL   |            |   SERVICE WORKER    |
|   React 18     | <---------> |   Message Broker    |
|   Typed IPC    |            |   Site-lock guard   |
+----------------+            +-----------+---------+
                                          |
                              chrome.tabs.sendMessage
                                          |
                              +-----------v---------+
                              |   CONTENT SCRIPT    |
                              |   Isolated World    |
                              |                     |
                              |   Page Detector     |
                              |   DOM Scraper       |
                              |   Event Dispatcher  |
                              |   Auto-fill Engine  |
                              +---------------------+
                                          |
                              +-----------v---------+
                              |  chrome.storage     |
                              |  .local             |
                              |  Encounter State    |
                              |  24h TTL            |
                              +---------------------+
```

### Communication Model

All inter-component communication is mediated through `@webext-core/messaging`, which enforces compile-time type safety on message payloads. No raw `chrome.runtime.sendMessage` calls exist in the codebase; every message channel is declared as a typed contract in `utils/messaging.ts` and validated at both sender and receiver boundaries.

### State Persistence

Encounter data is serialized and stored in `chrome.storage.local` under a schema-versioned key. A 24-hour TTL prevents stale patient data from persisting across shifts. The storage layer in `utils/storage.ts` wraps all read/write operations with typed getters and setters derived from the `Encounter` interface.

---

## 4. Technology Stack

| Layer              | Technology                         | Version   |
|--------------------|------------------------------------|-----------|
| Extension Framework| WXT                                | 0.20.13   |
| Build Tool         | Vite (via WXT)                     | latest    |
| Language           | TypeScript (strict mode)           | 5.8+      |
| UI Runtime         | React                              | 18.3+     |
| Extension Manifest | Chrome Manifest V3                 | —         |
| Messaging          | @webext-core/messaging             | latest    |
| Package Manager    | npm                                | 18+       |
| Node Requirement   | Node.js                            | 18+       |

TypeScript strict mode is enforced project-wide. Implicit `any` is disallowed. All DOM interactions are typed against the Chrome Extension API typings.

---

## 5. Repository Structure

```
sentra-assist/
|
|-- wxt.config.ts                    # WXT + Vite configuration, manifest declarations
|-- tsconfig.json                    # TypeScript strict config
|-- package.json                     # Dependencies and npm scripts
|
|-- entrypoints/
|   |-- background.ts                # Service worker: message broker, site-lock enforcement
|   |-- sidepanel/
|   |   |-- index.html               # HTML shell for Side Panel
|   |   |-- main.tsx                 # React DOM entry point
|   |   |-- App.tsx                  # Root component, tab router
|   |   `-- style.css                # Clinical UI theme
|   `-- epuskesmas.content/
|       |-- index.ts                 # Content script entry: lifecycle and listener registration
|       `-- detector.ts              # URL-pattern-based page type classifier
|
|-- utils/
|   |-- types.ts                     # Core TypeScript interfaces (Encounter, ResepItem, etc.)
|   |-- messaging.ts                 # Typed message channel declarations
|   `-- storage.ts                   # chrome.storage.local abstraction layer
|
|-- lib/
|   `-- iskandar-diagnosis-engine/   # Iskandar Diagnosis Engine V1 core modules
|
|-- data/
|   `-- field-mappings.ts            # DOM field configuration registry (Phase 2+)
|
|-- public/
|   `-- icons/                       # Extension icon assets (Phase 7)
|
`-- .taskmaster/
    `-- docs/
        `-- prd.txt                  # Canonical Product Requirements Document
```

---

## 6. Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (bundled with Node.js)
- Google Chrome 114+ with Developer Mode enabled in `chrome://extensions`

### Local Development Setup

```bash
# Navigate to the project root
cd sentra-assist

# Install all dependencies
npm install

# Launch development build with Hot Module Replacement
npm run dev
```

WXT will automatically open Chrome with the extension loaded as an unpacked extension. Navigate to the configured target EMR host to activate the Side Panel and content script injection.

Expected console output on a target page:

```
[Sentra/Content] Page detected: anamnesa | pelayananId: 12345
[Sentra/Background] Side Panel unlocked for tab 1
```

---

## 7. Build Pipeline

```bash
# Production build (minified, MV3-compliant)
npm run build

# Package for Chrome Web Store submission
npm run zip

# Firefox-compatible development build
npm run dev:firefox
```

| Command            | Output Path                                      |
|--------------------|--------------------------------------------------|
| `npm run build`    | `.output/chrome-mv3/` (Load Unpacked target)     |
| `npm run zip`      | `.output/sentra-assist-1.0.0-chrome.zip`         |

WXT handles manifest auto-generation from `wxt.config.ts` declarations. No manual `manifest.json` editing is required.

---

## 8. Core Subsystems

### 8.1 Page Detector (`entrypoints/epuskesmas.content/detector.ts`)

Classifies the current ePuskesmas page by evaluating the URL against three RegExp patterns:

| Page Type  | URL Pattern                        |
|------------|------------------------------------|
| `anamnesa` | `/anamnesa/(create\|edit)/*`        |
| `diagnosa` | `/diagnosa/(create\|edit)/*`        |
| `resep`    | `/resep/(create\|edit)/*`           |

On classification, the content script dispatches a `pageReady` message to the service worker containing the detected page type and extracted `pelayananId`.

### 8.2 Encounter State Schema

```typescript
interface Encounter {
  id: string;                // Unique pelayanan_id from URL
  patient_id: string;
  anamnesa: {
    chief_complaint: string;
    allergies: string[];
    vital_signs: VitalSigns;
  };
  diagnosa: {
    icd10_codes: ICD10Entry[];
    chronic_diseases: string[];
  };
  resep: ResepItem[];        // Array of medication entries
}
```

All fields are fully typed. The storage layer enforces schema versioning and TTL expiration on every read operation.

### 8.3 Typed Messaging Contracts (`utils/messaging.ts`)

```typescript
// Defined message channels (compile-time enforced)
sendMessage('fillResep', { resepItems: ResepItem[] });
sendMessage('scrapeAnamnesa', { pelayananId: string });
sendMessage('pageReady', { pageType: PageType; pelayananId: string });
```

Unrecognized message types are rejected at the TypeScript compilation stage, not at runtime. This eliminates an entire class of inter-component integration bugs common in untyped Chrome Extension messaging.

### 8.4 Auto-fill Engine (Phase 2 — `lib/iskandar-diagnosis-engine/filler-core.ts`)

The auto-fill engine dispatches synthetic DOM events to ePuskesmas form fields, simulating the exact browser event sequence required to trigger ePuskesmas's AJAX autocomplete listeners:

1. `focus` — activates the field
2. `input` — triggers AJAX search with the medication name
3. `keydown` (ArrowDown + Enter) — selects the first autocomplete result
4. `change` — commits the selection and propagates to dependent fields

This approach requires no modification to the host application and is resilient to ePuskesmas frontend updates that do not alter the event contract of the form fields.

---

## 9. Security Model

| Control                  | Implementation                                                  |
|--------------------------|-----------------------------------------------------------------|
| Isolated World           | Content script JS context is fully isolated from page scripts   |
| No Remote Code Execution | All code bundled at build time; no eval, no remote imports      |
| Host Permission Scoping  | `host_permissions` restricted to the configured EMR host only   |
| Storage Isolation        | `chrome.storage.local` is extension-private; inaccessible to the host page |
| CSRF Preservation        | Auto-fill engine never targets hidden CSRF token fields         |
| Typed Contracts          | Message schema validation eliminates injection via malformed payloads |

The extension does not transmit any patient data to external endpoints. All state is local to the browser session and expires within 24 hours.

---

## 10. Development Workflow

### Standard Iteration Cycle

```
npm run dev
    |
    +-- Chrome opens with extension loaded
    |
    +-- Navigate to the target EMR host/{target-page}
    |
    +-- Edit source file
    |
    +-- HMR auto-reloads affected entrypoints (< 2 seconds)
    |
    +-- Verify console output and Side Panel state
    |
    +-- Commit
```

### Environment Variables

| Variable                             | Effect                                              |
|--------------------------------------|-----------------------------------------------------|
| `VITE_DEBUG=true`                    | Enables verbose logging across all entrypoints      |
| `VITE_DEBUG_BACKGROUND`              | Scoped logging for service worker                   |
| `VITE_DEBUG_CONTENT`                 | Scoped logging for content script                   |
| `VITE_DEBUG_RIWAYAT`                 | Scoped logging for visit history module             |
| `VITE_MESSAGE_TIMEOUT_DEFAULT`       | Default IPC message timeout (ms)                    |
| `VITE_MESSAGE_TIMEOUT_FILL`          | Timeout for auto-fill operations                    |
| `VITE_MESSAGE_TIMEOUT_SCRAPE`        | Timeout for DOM scrape operations                   |
| `VITE_MESSAGE_TIMEOUT_VISIT_FETCH`   | Timeout for visit data retrieval                    |
| `VITE_MESSAGE_TIMEOUT_AI`            | Timeout for CDSS inference calls                   |

---

## 11. Debugging Reference

| Target                | Access Method                                                     |
|-----------------------|-------------------------------------------------------------------|
| Service Worker logs   | `chrome://extensions` > Sentra Assist > "service worker" link     |
| Content Script logs   | DevTools on the ePuskesmas page > Console tab                     |
| Side Panel logs       | Right-click the Side Panel > Inspect                              |
| Storage state         | DevTools > Application > Storage > Extension Storage              |
| Message traffic       | DevTools > Network (filter: `chrome-extension://`)                |

---

## 12. Phase Roadmap

### Phase 1 — Foundation (Complete)

- WXT project scaffold with React template
- TypeScript strict mode, all core interfaces
- Service worker with side panel site-lock enforcement
- Content script with URL-pattern page classifier
- Typed messaging infrastructure (`@webext-core/messaging`)
- Storage layer with `Encounter` schema and TTL
- Side Panel React UI with tab navigation
- Clinical UI theme

**Definition of Done (verified)**:
- `npm run dev` launches Chrome with extension loaded
- Side Panel activates only on the configured EMR host
- Console confirms page detection on target URL patterns
- Zero TypeScript compilation errors
- HMR cycle completes in under 2 seconds

---

### Phase 2 — Prescription Auto-Fill (Weeks 2–3)

- Implement `filler-core.ts` event dispatch engine
- AJAX autocomplete simulation for medication search fields
- Dynamic medication row creation and population
- Resep DOM field mapping registry (29 fields)
- Side Panel Resep form builder with live preview

---

### Phase 3 — Cross-Page Persistence (Weeks 4–5)

- DOM scraper modules for all three page types
- Anamnesa and Diagnosa field mapping registry
- Cross-page allergy propagation to Resep contraindication layer

---

### Phase 4 — Full Panel UI (Weeks 6–7)

- Complete Anamnesa, Diagnosa, and Resep tab forms
- Undo stack for auto-fill operations
- Field highlighting for filled elements
- Structured error reporting with user-facing retry interface

---

### Phase 5 — CDSS Phase 1 (Weeks 8–9)

- Drug allergy alert system
- Duplicate medication detection within a single encounter
- Chronic disease contraindication rule engine

---

### Phase 6 — CDSS Phase 2 (Weeks 10–11)

- Drug-Drug Interaction database integration
- ICD-10 suggestion from symptom keyword extraction
- Pediatric weight-based dosing calculator

---

### Phase 7 — Production Hardening (Week 12+)

- Extension icon asset production
- Chrome Web Store listing and review submission
- Multi-facility configuration system
- User onboarding documentation and training materials

---

## 13. Contributing

Sentra Assist is an internal Sentra Infrastructure project. All contributions must conform to the following engineering standards:

- **Specification-driven development**: all features must be traceable to a PRD entry in `.taskmaster/docs/prd.txt`
- **TypeScript strict mode**: `noImplicitAny`, `strictNullChecks`, and `strictFunctionTypes` are non-negotiable
- **No raw messaging**: all IPC must use the typed channel declared in `utils/messaging.ts`
- **Branch isolation**: each task executes in a dedicated Git branch; no direct commits to `main`
- **Zero fabricated state**: no hardcoded mock data may be merged into any non-test module

---

## 14. License

**INTERNAL — Sentra Infrastructure**

This software is proprietary and confidential. Unauthorized distribution, reproduction, or deployment outside of Puskesmas Balowerti, Kota Kediri, is prohibited.

---

## References

- WXT Framework Documentation: https://wxt.dev
- Chrome Extension Manifest V3: https://developer.chrome.com/docs/extensions/mv3/
- @webext-core/messaging: https://webext-core.aklinker1.io/guide/messaging/
- Full PRD: `.taskmaster/docs/prd.txt`
- Original Project Specification: `Sentra_Assist_Project_Spec.pdf`

---

*Sentra Assist is developed and maintained by dr. Ferdi Iskandar under the Sentra Healthcare Artificial Intelligence engineering division. Document ID: SENTRA-SPEC-001 v1.2.0.*
