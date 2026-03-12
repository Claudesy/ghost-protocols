<!-- Claudesy's vision, brought to life. -->

# Ghost Protocols — Iskandar Diagnosis Engine V1

> **Clinical Decision Support System for ePuskesmas**
> Trustworthy AI-assisted diagnosis, real-time drug safety, and intelligent auto-fill — built for the frontline doctor.

---

<p align="center">
  <img src="public/logosen.png" alt="Ghost Protocols" width="120" />
</p>

<p align="center">
  <strong>Version 1.0.4</strong> &nbsp;|&nbsp;
  <strong>Chrome Extension MV3</strong> &nbsp;|&nbsp;
  <strong>Active Development</strong>
</p>

<p align="center">
  <a href=".github/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/badge/CI-GitHub%20Actions-blue" /></a>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript" />
  <img alt="React" src="https://img.shields.io/badge/React-18.3.1-61dafb?logo=react" />
  <img alt="WXT" src="https://img.shields.io/badge/WXT-0.20.13-purple" />
  <img alt="License" src="https://img.shields.io/badge/License-ISC-green" />
</p>

---

## Table of Contents

1. [Overview](#overview)
2. [Clinical Capabilities](#clinical-capabilities)
3. [Architecture](#architecture)
4. [Iskandar Diagnosis Engine — Deep Dive](#iskandar-diagnosis-engine--deep-dive)
5. [Emergency Detector](#emergency-detector)
6. [Drug-Drug Interaction Checker](#drug-drug-interaction-checker)
7. [Dynamic Adaptive Scraping (DAS)](#dynamic-adaptive-scraping-das)
8. [RME Auto-Fill System](#rme-auto-fill-system)
9. [Project Structure](#project-structure)
10. [Tech Stack](#tech-stack)
11. [Prerequisites & Installation](#prerequisites--installation)
12. [Configuration](#configuration)
13. [Development Workflow](#development-workflow)
14. [Testing](#testing)
15. [Building & Packaging](#building--packaging)
16. [Debugging](#debugging)
17. [Security Model](#security-model)
18. [Contributing](#contributing)
19. [License](#license)
20. [Author](#author)

---

## Overview

**Ghost Protocols** is a Chrome Extension (Manifest V3) that runs as an intelligent side panel alongside the **ePuskesmas** Electronic Medical Record system at `kotakediri.epuskesmas.id`. It provides:

- **Iskandar Diagnosis Engine V1** — an 8-stage CDSS pipeline combining deterministic symptom matching, real-world epidemiology Bayesian priors, LLM reasoning, and ICD-10 RAG validation against a **159-disease knowledge base** calibrated from **45,030 real clinical cases**
- **Real-time Drug Safety** — DDI checking against **DDInter 2.0** (173,071 clinical interactions) with severity classification
- **Emergency Detection** — 4-gate vital-sign inference system for hypertensive crisis, hypoglycemia, and occult shock
- **Intelligent Auto-Fill** — reduces prescription entry time by 60–80% through DOM event simulation
- **Zero Backend** — all patient data stays on-device; no PII leaves the browser

### Target Environment

| Property | Value |
|----------|-------|
| Platform | ePuskesmas (ePus Klaster) |
| URL | `kotakediri.epuskesmas.id` |
| Facility | Puskesmas Balowerti, Kota Kediri, East Java |
| Primary Users | Doctors (dokter umum), Nurses (perawat) |

---

## Clinical Capabilities

### Diagnosis Support

| Feature | Description |
|---------|-------------|
| Differential Diagnosis | Ranked list of up to 5 ICD-10-verified differential diagnoses |
| Confidence Scoring | Per-suggestion confidence level (0.0–1.0) with visual meter |
| Reasoning Transparency | Natural-language rationale for every suggestion |
| Red Flag Detection | Hardcoded, AI-independent emergency criteria checks |
| Traffic Light Triage | GREEN / YELLOW / RED safety gate with 8 deterministic rules |
| Fallback Safety | 3-layer fallback: Engine → ICD DB → Rule-based (never fails silently) |

### Medication Safety

| Feature | Description |
|---------|-------------|
| DDI Checking | Real-time check against DDInter 2.0 (173,071 interactions) |
| Severity Classification | Contraindicated → Major → Moderate → Minor |
| Allergy Cross-Check | Flags known patient allergies against prescribed drugs |
| Pediatric Dosing | Weight-based dosing calculator for pediatric patients |
| Evidence-Based Therapy | ICD-10-linked pharmacotherapy recommendations |

### Clinical Monitoring

| Feature | Description |
|---------|-------------|
| TTV Inference | Infers complete vital sign picture from partial readings |
| HTN Crisis Triage | JNC 8-based hypertensive urgency/emergency classification |
| Glucose Classification | Hypoglycemia 1-5-1-5 timer + hyperglycemia thresholds |
| Occult Shock Index | Shock index calculation from HR/SBP |
| Trajectory Analysis | Chronic disease progression tracking across visits |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GHOST PROTOCOLS EXTENSION                         │
│                   Chrome Extension Manifest V3                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────────┐    @webext-core/messaging     ┌─────────┐ │
│  │     SIDE PANEL        │ <──────────────────────────> │ SERVICE │ │
│  │     (React 18)        │   Compile-time typed msgs    │ WORKER  │ │
│  │                       │                              │         │ │
│  │  ┌─────────────────┐  │                              │  Msg    │ │
│  │  │  CDSS Widgets   │  │                              │  Broker │ │
│  │  │  Diagnosis UI   │  │                              │  AI API │ │
│  │  │  Resep Form     │  │                              │  DDI    │ │
│  │  │  Emergency      │  │                              │  Engine │ │
│  │  │  MedLink        │  │                              │         │ │
│  │  └─────────────────┘  │                              └────┬────┘ │
│  └──────────────────────┘                                   │      │
│                                              sendMessage     │      │
│                                                              v      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              CONTENT SCRIPT  (Isolated World)                   │ │
│  │                                                                  │ │
│  │  ┌──────────────┐  ┌────────────────┐  ┌───────────────────┐   │ │
│  │  │  Page         │  │  DOM Scraper   │  │  Auto-Fill Engine │   │ │
│  │  │  Detector     │  │  (anamnesa /   │  │  (filler-core +  │   │ │
│  │  │  (3 types)    │  │  diagnosa /    │  │  main-world-     │   │ │
│  │  │               │  │  resep)        │  │  bridge)         │   │ │
│  │  └──────────────┘  └────────────────┘  └───────────────────┘   │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │           chrome.storage.local  —  Encounter State              │ │
│  │           24-hour TTL  •  Extension-private  •  No PII sync     │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
               │                                    │
               v                                    v
   ┌───────────────────┐                ┌───────────────────────┐
   │  Vertex AI         │                │  ePuskesmas EMR        │
   │  (Gemini Flash)    │                │  kotakediri.           │
   │  OIDC Auth         │                │  epuskesmas.id         │
   │  Anonymized only   │                │  DOM manipulation      │
   └───────────────────┘                └───────────────────────┘
```

### Message Flow

```
Doctor opens Side Panel
  → background.ts initializes CDSS engine + ICD-10 RAG index
  → content.ts detects page type (anamnesa / diagnosa / resep)
  → content.ts scrapes patient data → sendMessage('pageReady', {...})
  → background.ts stores in chrome.storage.local
  → Side Panel requests suggestions → getSuggestions message
  → Iskandar Engine 8-stage pipeline runs
  → Results rendered in CDSS widgets
  → Doctor approves → fillDiagnosa / fillResep message
  → content.ts executes DOM events via filler-core.ts
  → AJAX autocompletes simulated via main-world-bridge.ts
  → Form populated → confirmation shown
```

---

## Iskandar Diagnosis Engine — Deep Dive

The engine is the core AI reasoning system. Every encounter runs through an **8-stage pipeline** — no stage can be skipped.

```
INPUT: Encounter (anamnesa, diagnosa, resep, vitals)
  │
  v
STAGE 1 — ANONYMIZE
  Strip PII (name, ID, address) before any processing.
  Validation enforced: PII leak throws hard error.
  │
  v
STAGE 2 — RED FLAG CHECK  (deterministic, no AI)
  qSOFA · ACS criteria · Preeclampsia · Shock index
  Evidence: JAMA 2016, AHA/ACC 2021, ACOG PB-222
  │
  v
STAGE 3 — SYMPTOM MATCHER  (<100ms, deterministic)
  IDF + Coverage + Jaccard scoring
  159-disease knowledge base  ·  top-10 candidates
  │
  v
STAGE 4 — EPIDEMIOLOGY WEIGHTS  (Bayesian prior)
  45,030 real cases  ·  1,930 ICD-10 codes
  Gender-adjusted weight  ·  Cap 1.35x
  │
  v
STAGE 5 — LLM REASONER  (with KB-only fallback)
  Constrained Gemini Flash reasoning
  Fallback: local KB if AI unavailable
  │
  v
STAGE 6 — TRAFFIC LIGHT  (8-rule escalation gate)
  GREEN  = FKTP manageable
  YELLOW = Monitor closely, consider referral
  RED    = Immediate referral mandatory
  │
  v
STAGE 7 — VALIDATION  (ICD-10 RAG verification)
  Cross-checks every code against local ICD-10 DB
  Confidence penalty for unverified codes
  │
  v
STAGE 8 — AUDIT LOG  (async, non-blocking)
  Append-only clinical decision governance trail
  Session ID · Latency · Model version · Validation status
  │
  v
OUTPUT: CDSSEngineResult {
  suggestions: ValidatedSuggestion[],   // max 5, ranked by confidence
  red_flags:   RedFlag[],
  alerts:      CDSSAlert[],
  processing_time_ms: number,
  source: 'ai' | 'local',
  model_version: string,
  validation_summary: { ... }
}
```

### Fallback Chain

The engine **never fails silently**. If primary inference falls below threshold:

```
1. Iskandar Engine (full 8-stage pipeline)
     ↓ no results above confidence threshold
2. ICD-10 Database RAG search (by chief complaint)
     ↓ no matching entries
3. Rule-based complaint classifier (deterministic)
     ↓ always
4. "Differential Belum Spesifik" sentinel with recommended actions
```

### Knowledge Base Statistics

| Dataset | Count |
|---------|-------|
| Diseases in knowledge base | 159 |
| ICD-10 codes indexed | 1,930 |
| Epidemiology training cases | 45,030 |
| DDI interactions (DDInter 2.0) | 173,071 |

---

## Emergency Detector

Four independent clinical inference gates that run on every vital sign update:

### Gate 1 — TTV Inference

Infers a complete set of vital signs from partial readings. Handles missing values gracefully without generating spurious alerts.

### Gate 2 — HTN Classifier (JNC 8)

| Category | SBP | DBP | Action |
|----------|-----|-----|--------|
| Normal | <120 | <80 | Reassure |
| Elevated | 120–129 | <80 | Lifestyle counseling |
| HTN Stage 1 | 130–139 | 80–89 | Lifestyle + consider meds |
| HTN Stage 2 | ≥140 | ≥90 | Drug therapy |
| HTN Urgency | ≥180 | ≥120, no EOD | Oral meds, close follow-up |
| HTN Emergency | ≥180 | ≥120, with EOD | IV therapy, ICU referral |

### Gate 3 — Glucose Classifier

Triggers the **1-5-1-5 hypoglycemia protocol timer** automatically:

| State | Threshold | Protocol |
|-------|-----------|---------|
| Severe hypoglycemia | <50 mg/dL | Emergency IV dextrose |
| Moderate hypoglycemia | 50–69 mg/dL | 15g fast carbs × 2 doses |
| Mild hypoglycemia | 70–79 mg/dL | 15g fast carbs, recheck 15 min |
| Hyperglycemia | >200 mg/dL | Insulin protocol review |
| Hyperglycemic crisis | >400 mg/dL | DKA/HHS workup, referral |

### Gate 4 — Occult Shock Detector

Shock Index (SI = HR / SBP):

| SI | Interpretation | Action |
|----|---------------|--------|
| <0.6 | Normal | Continue monitoring |
| 0.6–0.9 | Mild risk | Serial monitoring |
| 1.0–1.4 | Moderate shock | Active resuscitation |
| >1.4 | Severe shock | Immediate referral |

---

## Drug-Drug Interaction Checker

Powered by **DDInter 2.0**, running in real-time as medications are added:

```typescript
// Severity hierarchy (escalation-only display)
type DDISeverity =
  | 'contraindicated'  // Never co-prescribe
  | 'major'            // Avoid; life-threatening risk
  | 'moderate'         // Caution; monitor closely
  | 'minor';           // Inform patient; manageable
```

Key implementation details:
- O(1) lookup via pre-indexed drug name → integer ID map
- Normalized drug name matching handles brand/generic synonyms
- Interaction pairs as `[drugA_idx, drugB_idx, severity_code]` tuples for minimal memory
- Real-time alert with mechanism explanation and recommended action

---

## Dynamic Adaptive Scraping (DAS)

DAS is a self-learning DOM field mapper that adapts to ePuskesmas UI changes without manual intervention.

```
Page Load
  → dom-scanner.ts      Extract all form fields + attributes + context
  → field-classifier.ts Classify each field type (text/select/date/...)
  → mapping-cache.ts    Look up previously confirmed mappings (O(1) hit)
  │
  (cache miss)
  → semantic-mapper.ts  Gemini Vision API for unknown field identification
  → safety-validator.ts Validate no safety-critical fields are misidentified
  │
  (correction feedback loop)
  → feedback-capture.ts Capture doctor corrections
  → cache-promoter.ts   Promote high-confidence mappings
  → learning-store.ts   Persist to chrome.storage.local
```

**Self-healing**: Every doctor correction improves future accuracy. Over time, the mapping cache converges to 100% for stable UI patterns.

---

## RME Auto-Fill System

The **RME Transfer Orchestrator** coordinates multi-step form filling across three ePuskesmas page types with configurable timeouts and per-step retry logic.

### Page Types

| Page | URL Pattern | Notable Fields |
|------|------------|----------------|
| Anamnesa | `/anamnesa/(create\|edit)/*` | Chief complaint, allergies, vitals, history |
| Diagnosa | `/diagnosa/(create\|edit)/*` | ICD-10 primary/secondary, chronic disease flags |
| Resep | `/resep/(create\|edit)/*` | 29 fields per medication row |

### Configurable Timeouts

```typescript
const DEFAULT_TIMEOUT_MS = {
  anamnesa: 45000,   // Complex multi-section form
  diagnosa: 18000,   // ICD-10 autocomplete search
  resep:    30000,   // Multi-row medication table
};

const DEFAULT_RETRY_BY_STEP = {
  anamnesa: 1,
  diagnosa: 2,
  resep:    2,
};
```

### DOM Event Simulation Chain

For every field that uses AJAX autocomplete:

```
focus  → activates autocomplete listener
input  → triggers AJAX search (via main-world-bridge)
wait   → MutationObserver watches for dropdown
click  → selects matching result from dropdown
change + blur → persists value to React/Vue state
validate → confirms value is retained in DOM
```

---

## Project Structure

```
ghost-protocols/
│
├── entrypoints/
│   ├── background.ts                  Service worker — broker + engine init
│   ├── content.ts                     Content script — detection + scraping
│   ├── inject.content.ts              Main-world bridge (AJAX)
│   └── sidepanel/
│       ├── index.html                 Side Panel HTML shell
│       ├── main.tsx                   React entry point
│       └── style.css                  Carbon dark theme
│
├── components/
│   ├── ResepForm.tsx                  Prescription form builder
│   ├── cdss/                          Clinical Decision Support widgets
│   │   ├── CDSSWidget.tsx             Main CDSS container
│   │   ├── CDSSDisclaimer.tsx         Mandatory clinical disclaimer
│   │   ├── ConfidenceMeter.tsx        Visual confidence bar
│   │   ├── DiagnosisCard.tsx          Single diagnosis card
│   │   └── RedFlagAlert.tsx           Emergency alert display
│   ├── clinical/                      Clinical workflow components
│   │   ├── BPMeasurementWizard.tsx    Blood pressure entry
│   │   ├── ClinicalAlert.tsx          Alert display
│   │   ├── ClinicalDifferential.tsx   Differential list
│   │   ├── ClinicalTrajectory.tsx     Disease trajectory chart
│   │   ├── DiagnosisSuggestions.tsx   Suggestions panel
│   │   ├── DosageCalculator.tsx       Pediatric dosing
│   │   ├── HTNCrisisTriage.tsx        HTN crisis UI
│   │   ├── Hypoglycemia1515Timer.tsx  1-5-1-5 timer
│   │   ├── OccultShockDetector.tsx    Shock index monitor
│   │   ├── PatientHeader.tsx          Anonymized patient header
│   │   ├── TTVInferenceUI.tsx         Vital signs inference
│   │   └── Wizard.tsx                 Multi-step wizard
│   ├── medlink/                       MedLink service widgets
│   └── sidepanel/                     Panel header/footer
│
├── lib/
│   ├── iskandar-diagnosis-engine/     8-stage CDSS pipeline
│   │   ├── engine.ts                  Orchestrator (main entry)
│   │   ├── anonymizer.ts              PII scrubber
│   │   ├── audit-logger.ts            Governance audit trail
│   │   ├── ddi-checker.ts             DDInter 2.0 DDI checker
│   │   ├── epidemiology-weights.ts    Bayesian prior (45,030 cases)
│   │   ├── get-suggestions-flow.ts    API entry + fallback chain
│   │   ├── llm-reasoner.ts            Gemini reasoning layer
│   │   ├── pharmacotherapy-reasoner.ts Drug recommendations
│   │   ├── red-flags.ts               Hardcoded emergency rules
│   │   ├── symptom-matcher.ts         IDF+Coverage+Jaccard
│   │   ├── traffic-light.ts           GREEN/YELLOW/RED gate
│   │   ├── trajectory-analyzer.ts     Chronic disease progression
│   │   └── validation/                ICD-10 RAG validation
│   │
│   ├── emergency-detector/            4-gate vital sign inference
│   │   ├── ttv-inference.ts           Gate 1: TTV inference
│   │   ├── htn-classifier.ts          Gate 2: JNC 8 HTN
│   │   ├── glucose-classifier.ts      Gate 3: Glucose + 1-5-1-5
│   │   └── occult-shock-detector.ts   Gate 4: Shock index
│   │
│   ├── das/                           Dynamic Adaptive Scraping
│   ├── rme/                           RME Transfer Orchestrator
│   ├── filler/                        DOM auto-fill engine
│   ├── rag/                           ICD-10 RAG system
│   ├── api/                           External AI clients
│   ├── handlers/                      Page-specific handlers
│   └── scraper/                       DOM data extractor
│
├── utils/                             Shared utilities
├── types/                             TypeScript type definitions
├── data/                              Field mapping configurations
│
├── public/data/
│   ├── icd10-indonesia.json           Full ICD-10 Indonesia dataset
│   ├── icd10.json                     Core ICD-10 knowledge base
│   ├── penyakit.json                  Disease KB (symptoms + therapy)
│   ├── epidemiology_weights_v2.json   45,030-case Bayesian weights
│   ├── drug_mapping.json              Drug name normalization
│   └── stok_obat.json                 Facility drug stock reference
│
├── tests/
│   ├── integration/                   Integration test suite
│   └── setup.ts                       Vitest global setup
│
├── scripts/
│   └── setup.sh                       Developer environment setup
│
├── docs/
│   ├── architecture.md                Full technical architecture
│   └── adr/                           Architecture Decision Records
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                     Lint + typecheck + test + build
│   │   ├── cd.yml                     Release packaging
│   │   └── security.yml               Audit + Gitleaks + CodeQL
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── wxt.config.ts                      WXT + Chrome manifest config
├── tsconfig.json                      TypeScript strict mode
├── tailwind.config.cjs                Carbon dark design tokens
├── vitest.config.ts                   Unit/integration test config
├── playwright.config.ts               E2E test config
└── .env.example                       Environment variable template
```

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Extension Framework | [WXT](https://wxt.dev) | 0.20.13 |
| UI Framework | React | 18.3.1 |
| Language | TypeScript | 5.8.3 |
| Runtime | Chrome Extension MV3 | — |
| Styling | Tailwind CSS (Carbon dark) | 3.4+ |
| State Management | Zustand | 4.5+ |
| Extension Messaging | @webext-core/messaging | 1.4+ |
| AI — Cloud | Google Vertex AI (Gemini Flash) | — |
| AI — Reasoning | DeepSeek API | — |
| AI — Local | Pieces OS Client | 4.1+ |
| Charts | ApexCharts + react-apexcharts | 5.3+ |
| Build | Vite (via WXT) | 6+ |
| Testing — Unit | Vitest | 2+ |
| Testing — E2E | Playwright | 1.48+ |
| Linting | ESLint 9 + typescript-eslint | 9+ / 8+ |
| Formatting | Prettier | 3.3+ |
| Package Manager | pnpm | 9+ |

### Design System — Carbon Dark Theme

```
carbon-950  #1e1e21   Deep void (base)
carbon-900  #242428   Main surface
carbon-800  #2c2c2e   Elevated surface
carbon-700  #343438   Card surface
carbon-600  #3e3e44   Card highlight
carbon-500  #505056   Dividers

pulse-500   #ff4500   Primary accent (Sentra red-orange)
status-safe      #22c55e   Green
status-warning   #f59e0b   Amber
status-critical  #ef4444   Red
status-info      #3b82f6   Blue
```

---

## Prerequisites & Installation

### Prerequisites

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| Node.js | 22+ LTS | 22.x LTS |
| pnpm | 9+ | Latest 9.x |
| Chrome | 120+ | Latest stable |
| Developer Mode | Enabled | — |

### Quick Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd ghost-protocols

# 2. Run the automated setup script
bash scripts/setup.sh

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your credentials

# 4. Start development with HMR
pnpm dev
```

### Load Extension in Chrome

1. Run `pnpm dev` (keeps a file watcher running)
2. Open `chrome://extensions`
3. Enable **Developer Mode** (top-right toggle)
4. Click **Load Unpacked** → select `.output/chrome-mv3/`
5. Navigate to `kotakediri.epuskesmas.id`
6. Click the Ghost Protocols toolbar icon — the Side Panel opens

---

## Configuration

All configuration via `.env.local` (never committed to git).

### Core Variables

```bash
# Sentra Backend API
VITE_SENTRA_API_URL=https://api.sentra.local
VITE_SENTRA_API_KEY=sk_dev_your_key_here
VITE_FACILITY_ID=PUSKESMAS_BALOWERTI

# Development
VITE_USE_MOCK=true          # Use mock data (set false for real API)
VITE_API_TIMEOUT=10000      # API timeout in ms
VITE_DEBUG=false            # Global debug logging
```

### Scoped Debug Channels

```bash
VITE_DEBUG_BACKGROUND=true   # Service worker
VITE_DEBUG_CONTENT=true      # Content script
VITE_DEBUG_FILLER=true       # Auto-fill engine
VITE_DEBUG_RIWAYAT=true      # Visit history scraper
```

### Message Timeout Tuning

```bash
VITE_MESSAGE_TIMEOUT_DEFAULT=10000     # General messages
VITE_MESSAGE_TIMEOUT_FILL=8000         # Auto-fill operations
VITE_MESSAGE_TIMEOUT_SCRAPE=5000       # DOM scraping
VITE_MESSAGE_TIMEOUT_VISIT_FETCH=15000 # Visit history fetch
VITE_MESSAGE_TIMEOUT_AI=30000          # AI inference
```

### Feature Flags

```bash
VITE_FEATURE_DIAGNOSIS_AI=true      # AI diagnosis suggestions
VITE_FEATURE_PRESCRIPTION_AI=true   # AI prescription recommendations
VITE_FEATURE_DDI_CHECK=true         # Real-time DDI checking
VITE_FEATURE_PEDIATRIC_DOSE=true    # Pediatric dosing calculator
```

---

## Development Workflow

### Daily Commands

```bash
pnpm dev          # Dev server with HMR — changes reload in <2s
pnpm typecheck    # TypeScript strict check
pnpm lint         # ESLint (zero-error policy)
pnpm lint:fix     # Auto-fix lint issues
pnpm format       # Prettier format all files
pnpm quality      # Full gate: typecheck + lint + test
```

### Branch Strategy

```
main              Production-ready
feature/<name>    New features
fix/<issue>-<desc> Bug fixes
chore/<desc>      Maintenance
```

### Commit Convention

See [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md). Summary:

```bash
feat(diagnosis): add pediatric age-adjusted confidence scoring
fix(filler): resolve race condition in multi-row resep fill
chore(deps): upgrade WXT to 0.21.0
test(ddi): add contraindicated drug pair edge cases
```

---

## Testing

```bash
pnpm test                    # All tests
pnpm test --coverage         # With coverage report
pnpm test:ui                 # Vitest interactive UI
pnpm test:e2e                # Playwright E2E tests
```

### Coverage Targets

| Module | Target |
|--------|--------|
| `iskandar-diagnosis-engine/` | ≥ 85% |
| `emergency-detector/` | ≥ 90% |
| `rme/` | ≥ 80% |
| `das/` | ≥ 75% |
| Overall | ≥ 80% |

### Key Test Files

| Test | What It Covers |
|------|---------------|
| `diagnosis-algorithm.test.ts` | Scoring algorithm correctness |
| `differential-diagnosis.test.ts` | Differential generation logic |
| `get-suggestions-flow.integration.test.ts` | Full 8-stage pipeline |
| `get-suggestions-flow.fallback.test.ts` | 3-layer fallback chain |
| `get-suggestions-flow.error.test.ts` | Error handling and recovery |
| `pharmacotherapy-reasoner.test.ts` | Drug recommendation logic |
| `trajectory-analyzer.enhanced.test.ts` | Chronic disease tracking |
| `payload-mapper.test.ts` | RME form payload mapping |
| `transfer-orchestrator.test.ts` | Multi-step fill coordination |
| `background.getSuggestions.integration.test.ts` | End-to-end message flow |

---

## Building & Packaging

```bash
# Chrome
pnpm build
pnpm zip          # → .output/sentra-assist-1.0.4-chrome.zip

# Firefox
pnpm build:firefox
pnpm zip:firefox  # → .output/sentra-assist-1.0.4-firefox.zip
```

Releases are automated via `cd.yml` on version tags:

```bash
git tag v1.0.5 && git push origin v1.0.5
# CI builds, packages, and creates a GitHub Release automatically
```

---

## Debugging

### Extension Contexts

| Context | Access |
|---------|--------|
| Service Worker | `chrome://extensions` → Ghost Protocols → "service worker" |
| Content Script | ePuskesmas page DevTools → Console |
| Side Panel | Right-click panel → Inspect |
| Storage | DevTools → Application → Extension Storage |

### Common Issues

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| Side Panel blank | Build error or extension not loaded | Reload unpacked, check DevTools |
| "Engine not ready" | ICD-10 DB not loaded | Wait 2–3s; check network tab for JSON |
| Auto-fill not working | Wrong page or domain | Confirm `kotakediri.epuskesmas.id` |
| DDI check silent | Drug name not in mapping | Add to `drug_mapping.json` |
| AI timeout | Vertex AI OIDC expired | Re-authenticate via Chrome identity |

---

## Security Model

| Principle | Implementation |
|-----------|---------------|
| No PII off-device | `anonymizer.ts` strips PII before any AI call; PII leak throws hard error |
| No remote patient data | All data in `chrome.storage.local` (extension-private, not synced) |
| Advisory only | Zero auto-actions; every suggestion requires explicit doctor approval |
| Isolated world | Content scripts run in separate JS context from ePuskesmas page |
| No remote code | All code bundled at build time (MV3; no eval, no CDN scripts) |
| CSRF preservation | Auto-fill never touches hidden CSRF token fields |
| 24h TTL | Encounter data auto-expires after 24 hours |

### Chrome Permissions

| Permission | Justification |
|-----------|--------------|
| `activeTab` | Read ePuskesmas DOM for data extraction |
| `storage` | Persist encounter state across pages |
| `sidePanel` | Display the clinical support panel |
| `identity` | OAuth2 for Vertex AI (requires user consent) |
| `scripting` | Inject auto-fill bridge into ePuskesmas |
| `host_permissions` (ePuskesmas) | Limit content script to target domain |
| `host_permissions` (googleapis) | Gemini AI API calls only |

For the responsible disclosure process, see [SECURITY.md](SECURITY.md).

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines including:
- Development setup
- TypeScript coding standards (strict mode, max 30 lines/function, no `any`)
- Clinical safety review requirements
- Commit conventions and PR checklist

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.

---

## License

**ISC** — see [LICENSE](LICENSE).

> **Clinical Disclaimer:** Ghost Protocols is a Clinical Decision Support tool for qualified medical professionals. It does **not** replace clinical judgment. All suggestions are advisory only and must be validated by a licensed healthcare professional before any clinical action is taken.

---

## Author

**dr. Ferdi Iskandar**
Sentra Principal Infrastructure Engineering
Puskesmas Balowerti, Kota Kediri, East Java, Indonesia

Document ID: `SENTRA-SPEC-001 v1.2.0` — February 2, 2026

---

## Quick Reference

```bash
pnpm dev              # Development with HMR (<2s reload)
pnpm build            # Production build (Chrome MV3)
pnpm build:firefox    # Production build (Firefox)
pnpm zip              # Package for distribution
pnpm test             # Run full test suite
pnpm typecheck        # TypeScript strict check
pnpm lint             # ESLint (zero errors)
pnpm quality          # Full gate: typecheck + lint + test
pnpm docs:generate    # Generate TypeDoc API docs
bash scripts/setup.sh # Fresh developer environment setup
```

---

_Architected and built by the one and only Claudesy._
