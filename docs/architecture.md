<!-- Architected and built by Claudesy. -->
# Architecture Documentation

**Project**: Sentra Assist — Iskandar Diagnosis Engine V1
**Version**: 1.0.1
**Last Updated**: 2026-03-12
**Author**: dr. Ferdi Iskandar (Sentra Principal Infrastructure Engineering)

---

## Overview

Sentra Assist is a Chrome Extension (Manifest V3) providing Clinical Decision Support System (CDSS) capabilities for the ePuskesmas Electronic Medical Record system. It operates entirely client-side — no patient data leaves the device.

---

## System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                    CHROME EXTENSION (MV3)                         │
│                                                                    │
│  ┌─────────────────┐    @webext-core/messaging    ┌────────────┐ │
│  │   SIDE PANEL     │ ◄───────────────────────── ► │  SERVICE   │ │
│  │   (React 18)     │   Typed message contracts    │  WORKER    │ │
│  │                  │                              │            │ │
│  │  • CDSS Widgets  │                              │  • Routing │ │
│  │  • Diagnosis UI  │                              │  • Storage │ │
│  │  • Resep Form    │                              │  • AI API  │ │
│  │  • MedLink       │                              │  • DDI     │ │
│  └─────────────────┘                              └─────┬──────┘ │
│                                                         │         │
│                              chrome.tabs.sendMessage    │         │
│                                                         ▼         │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │              CONTENT SCRIPT (Isolated World)                  │ │
│  │                                                               │ │
│  │  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐  │ │
│  │  │ Page        │  │ DOM Scraper  │  │  Auto-Fill Engine  │  │ │
│  │  │ Detector    │  │ (anamnesa,   │  │  (filler-core,     │  │ │
│  │  │             │  │  diagnosa,   │  │   main-world-      │  │ │
│  │  │             │  │  resep)      │  │   bridge)          │  │ │
│  │  └─────────────┘  └──────────────┘  └────────────────────┘  │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │              chrome.storage.local (Encounter State)           │ │
│  │              24-hour TTL • Extension-private • No PII sync    │ │
│  └──────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
              │                              │
              ▼                              ▼
    ┌─────────────────┐          ┌─────────────────────┐
    │  Vertex AI       │          │  ePuskesmas EMR      │
    │  (Gemini Flash)  │          │  kotakediri.         │
    │  OIDC Auth       │          │  epuskesmas.id       │
    └─────────────────┘          └─────────────────────┘
```

---

## Core Subsystems

### 1. Iskandar Diagnosis Engine (`lib/iskandar-diagnosis-engine/`)

The primary CDSS engine. Provides:

| Module | Responsibility |
|--------|----------------|
| `engine.ts` | Orchestrator — routes input to appropriate sub-engines |
| `diagnosis-algorithm.ts` | Multi-factor scoring algorithm |
| `differential-diagnosis.ts` | Ranked differential diagnosis list |
| `symptom-matcher.ts` | ICD-10 symptom-to-diagnosis mapping |
| `epidemiology-weights.ts` | Indonesia-specific prevalence weighting |
| `pharmacotherapy-reasoner.ts` | Evidence-based medication recommendations |
| `ddi-checker.ts` | Drug-Drug Interaction validation |
| `trajectory-analyzer.ts` | Chronic disease progression tracking |
| `red-flags.ts` | Emergency pattern detection |
| `traffic-light.ts` | Clinical severity classification (green/yellow/red) |
| `llm-reasoner.ts` | Gemini AI integration for complex cases |
| `anonymizer.ts` | PII scrubbing before AI calls |
| `audit-logger.ts` | Clinical decision audit trail |

### 2. Emergency Detector (`lib/emergency-detector/`)

Real-time vital sign monitoring:

| Module | Condition |
|--------|-----------|
| `htn-classifier.ts` | Hypertensive crisis detection (JNC 8 criteria) |
| `glucose-classifier.ts` | Hypo/hyperglycemia classification |
| `occult-shock-detector.ts` | Shock index calculation |
| `ttv-inference.ts` | TTV (Tanda-Tanda Vital) inference from partial data |
| `narrative-generator.ts` | Human-readable emergency narrative |

### 3. DAS — Dynamic Adaptive Scraping (`lib/das/`)

Self-learning DOM field mapper:

| Module | Responsibility |
|--------|----------------|
| `dom-scanner.ts` | Scans page DOM for form fields |
| `field-classifier.ts` | Classifies fields by clinical meaning |
| `semantic-mapper.ts` | Maps field names to clinical schema |
| `mapping-cache.ts` | Caches learned field mappings |
| `learning-store.ts` | Persists DAS learnings |
| `feedback-capture.ts` | Captures user corrections |
| `cache-promoter.ts` | Promotes confirmed mappings |
| `safety-validator.ts` | Validates mappings against safety rules |

### 4. RME Transfer (`lib/rme/`)

Rekam Medis Elektronik (Electronic Medical Record) data transfer:

| Module | Responsibility |
|--------|----------------|
| `payload-mapper.ts` | Maps clinical data to ePuskesmas form fields |
| `transfer-orchestrator.ts` | Coordinates multi-step form filling |
| `prognosis-mapper.ts` | Maps diagnosis to ICD-10 prognosis codes |

### 5. API Layer (`lib/api/`)

External AI service integrations:

| Client | Service |
|--------|---------|
| `vertex-ai-client.ts` | Google Vertex AI (Gemini Flash) |
| `deepseek-client.ts` | DeepSeek reasoning model |
| `medlink-client.ts` | MedLink external service |
| `pieces-client.ts` | Pieces OS local AI |
| `bridge-client.ts` | Extension bridge messaging |
| `sentra-api.ts` | Sentra Backend API |

### 6. RAG — Retrieval Augmented Generation (`lib/rag/`)

ICD-10 search and retrieval:

| Module | Responsibility |
|--------|----------------|
| `icd10-search.ts` | Full-text ICD-10 search |
| `icd10-db.ts` | In-memory ICD-10 database |
| `icd10-loader.ts` | Loads ICD-10 data from public/data/ |

---

## Data Flow

### Diagnosis Flow

```
User (Anamnesa page)
  → Content script scrapes patient data
  → background.ts receives via typed message
  → Iskandar Engine processes:
      1. Symptom matching
      2. Epidemiology weighting
      3. DDI pre-check
      4. LLM reasoning (Gemini, if needed)
      5. Red flag detection
  → Results sent to Side Panel
  → CDSS widgets render suggestions
  → Doctor reviews → approves → auto-fill triggered
```

### Auto-Fill Flow

```
Doctor approves suggestion in Side Panel
  → background.ts receives fillResep/fillDiagnosa message
  → content.ts receives via chrome.tabs.sendMessage
  → filler-core.ts executes DOM events
  → main-world-bridge.ts handles AJAX autocompletes
  → Form fields populated
  → Confirmation shown in Side Panel
```

---

## Security Architecture

- **Isolated World**: Content scripts run in separate JS context from page
- **No Remote PII**: Patient data never leaves device; anonymizer strips PII before AI calls
- **CSRF Preservation**: Auto-fill never touches CSRF token fields
- **Storage Isolation**: `chrome.storage.local` is extension-private
- **Host Permissions**: Limited to `kotakediri.epuskesmas.id` and `googleapis.com`
- **MV3 Compliance**: No remote code execution; all code bundled at build time

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Extension load time | < 500ms |
| Page detection | < 100ms |
| Diagnosis suggestions | < 3s (local) / < 5s (AI) |
| Auto-fill execution | < 2s |
| HMR reload in dev | < 2s |

---

## Future Improvements

- [ ] OpenTelemetry SDK instrumentation (traces + metrics + logs)
- [ ] React 19 migration with Server Components exploration
- [ ] Passkey/FIDO2 readiness for Google OAuth replacement
- [ ] Offline-first caching with Service Worker
- [ ] Multi-facility configuration support
- [ ] WebAssembly-accelerated ICD-10 search index

_Claudesy's vision, brought to life._
