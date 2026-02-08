# ⚡ Sentra Assist - ePuskesmas CDSS Widget

**Version**: 1.0.0 (Phase 1 Complete)  
**Status**: Active Development  
**Spec**: SENTRA-SPEC-001 v1.2.0

---

## 🎯 Overview

Sentra Assist is a Chrome Extension that provides Clinical Decision Support System (CDSS) capabilities for the ePuskesmas Electronic Medical Record system. Built with [WXT](https://wxt.dev) framework, it offers:

- ⚡ **60-80% faster prescription entry** through intelligent auto-fill
- 🔄 **Cross-page data persistence** via chrome.storage.local
- 🎯 **Type-safe messaging** with @webext-core/messaging
- 🏥 **Zero backend** - entirely client-side DOM manipulation

### Target System
- **Platform**: ePuskesmas (ePus Klaster) at kotakediri.epuskesmas.id
- **Facility**: Puskesmas Balowerti, Kota Kediri, East Java
- **Users**: Doctors and Nurses

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│   WXT + VITE BUILD SYSTEM               │
│   Auto-manifest • HMR • TypeScript      │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  @webext-core  ┌────────┐│
│  │  SIDE    │  /messaging    │SERVICE ││
│  │  PANEL   │ ────────────── │WORKER  ││
│  │  (React) │  typed msgs    │        ││
│  └──────────┘ ────────────── └────┬───┘│
│                                    │    │
│          chrome.tabs.sendMessage   │    │
│                                    ▼    │
│  ┌─────────────────────────────────────┐│
│  │  CONTENT SCRIPT (Isolated World)    ││
│  │  • Page detector                    ││
│  │  • DOM scraper                      ││
│  │  • Event dispatcher                 ││
│  │  • Auto-fill engine                 ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  chrome.storage.local               ││
│  │  Encounter state (24h TTL)          ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

### Tech Stack
- **Framework**: WXT 0.20.13 (Vite-powered extension framework)
- **Language**: TypeScript 5.8+
- **UI**: React 18.3+
- **Runtime**: Chrome Extension Manifest V3
- **Messaging**: @webext-core/messaging (compile-time type safety)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Chrome 114+ with Developer Mode enabled

### Installation

```bash
# Clone or navigate to project directory
cd sentra-assist

# Install dependencies
npm install

# Start development mode with HMR
npm run dev
```

Chrome will open automatically with the extension loaded. Navigate to **kotakediri.epuskesmas.id** to see the Side Panel appear.

### Build for Production

```bash
# Build minified extension
npm run build

# Package for Chrome Web Store
npm run zip
```

Output: `.output/chrome-mv3/` (Load Unpacked) and `.output/sentra-assist-1.0.0-chrome.zip` (Web Store)

---

## 📁 Project Structure

```
sentra-assist/
├── wxt.config.ts              ← WXT + Vite configuration
├── tsconfig.json              ← TypeScript config
├── package.json               ← Dependencies & scripts
│
├── entrypoints/
│   ├── background.ts          ← Service worker (message broker)
│   ├── sidepanel/             ← Side Panel UI
│   │   ├── index.html         ← HTML shell
│   │   ├── main.tsx           ← React entry
│   │   ├── App.tsx            ← Main component
│   │   └── style.css          ← UI styles
│   └── epuskesmas.content/    ← Content script
│       ├── index.ts           ← Entry point
│       └── detector.ts        ← Page type detection
│
├── utils/
│   ├── types.ts               ← TypeScript interfaces
│   ├── messaging.ts           ← Typed message contracts
│   └── storage.ts             ← chrome.storage wrapper
│
├── data/
│   └── field-mappings.ts      ← Field configs (TODO)
│
├── public/
│   └── icons/                 ← Extension icons (TODO)
│
└── .taskmaster/
    └── docs/
        └── prd.txt            ← Full PRD for task-master
```

---

## 🎯 Phase 1 Status (✅ COMPLETE)

### Implemented
- [x] WXT project scaffold with React template
- [x] TypeScript strict mode with all core types
- [x] Service worker with side panel site-lock
- [x] Content script with page type detection
- [x] Typed messaging contracts (@webext-core/messaging)
- [x] Storage layer with Encounter schema
- [x] Side Panel React UI with tab navigation
- [x] Professional medical theme CSS

### Definition of Done
- ✅ `npm run dev` opens Chrome with extension loaded
- ✅ Side Panel appears only on kotakediri.epuskesmas.id
- ✅ Console shows "page detected" on target pages
- ✅ TypeScript compiles with no errors
- ✅ HMR works on all entrypoints (< 2s reload)

---

## 🗺️ Roadmap

### Phase 2: Resep Auto-Fill (Week 2-3)
- Event dispatch engine (filler-core.ts)
- AJAX autocomplete simulation
- Dynamic medication row handling
- Resep field mapping (29 fields)
- Side Panel Resep form builder

### Phase 3: Cross-Page Persistence (Week 4-5)
- DOM scraper for all 3 page types
- Anamnesa & Diagnosa field mappings
- Cross-page data propagation (alergi → resep)

### Phase 4: Full Panel UI (Week 6-7)
- Complete all 3 tab forms
- Undo capability & field highlighting
- Error reporting with retry

### Phase 5: CDSS Phase 1 (Week 8-9)
- Drug allergy alerts
- Duplicate medication detection
- Chronic disease contraindication check

### Phase 6: CDSS Phase 2 (Week 10-11)
- Drug-Drug Interaction database
- ICD-10 suggestion from symptoms
- Pediatric dosing calculator

### Phase 7: Production (Week 12+)
- Extension icons
- Chrome Web Store listing
- Multi-facility configuration
- User training & onboarding

---

## 🧪 Development Workflow

### Daily Iteration
1. `npm run dev` - HMR active
2. Chrome opens with extension
3. Navigate to test environment
4. Edit code → save → auto-reload (< 2s)
5. Test → verify → commit

### Testing
```bash
# Manual testing only at this stage
# Navigate to: kotakediri.epuskesmas.id/anamnesa/create/123
# Open DevTools → check console logs
# Open Side Panel → verify tabs load
```

### Debugging
- **Service Worker**: Chrome → Extensions → Sentra Assist → "service worker" link
- **Content Script**: DevTools on ePuskesmas page → Console tab
- **Side Panel**: Right-click panel → Inspect
- **Scoped logs**: set `VITE_DEBUG=true` or channel-specific flags (`VITE_DEBUG_BACKGROUND`, `VITE_DEBUG_CONTENT`, `VITE_DEBUG_RIWAYAT`)
- **Tab messaging timeout tuning**: adjust `VITE_MESSAGE_TIMEOUT_DEFAULT`, `VITE_MESSAGE_TIMEOUT_FILL`, `VITE_MESSAGE_TIMEOUT_SCRAPE`, `VITE_MESSAGE_TIMEOUT_VISIT_FETCH`, `VITE_MESSAGE_TIMEOUT_AI`

---

## 📖 Key Concepts

### Encounter State
All patient encounter data persists in chrome.storage.local with a 24-hour TTL:
```typescript
interface Encounter {
  id: string;              // pelayanan_id
  patient_id: string;
  anamnesa: { ... };       // Chief complaint, allergies
  diagnosa: { ... };       // ICD-X, chronic diseases
  resep: [ ... ];          // Medications
}
```

### Typed Messaging
All component communication uses compile-time type-safe messages:
```typescript
// Panel → Worker → Content
sendMessage('fillResep', payload);

// Content → Worker
sendMessage('pageReady', { pageType, pelayananId });
```

### Page Types
Three target pages with URL patterns:
- **Anamnesa**: `/anamnesa/(create|edit)/*`
- **Diagnosa**: `/diagnosa/(create|edit)/*`
- **Resep**: `/resep/(create|edit)/*`

---

## 🛡️ Security Model

- **Isolated World**: Content scripts run in separate JS context
- **No Remote Code**: All code bundled at build time (MV3 compliance)
- **Permission Scoping**: host_permissions limited to kotakediri.epuskesmas.id only
- **Storage Isolation**: chrome.storage.local is extension-private
- **CSRF Preservation**: Never modifies hidden CSRF token fields
- **Typed Contracts**: TypeScript prevents message format errors

---

## 📚 Documentation

- **Full Spec**: `.taskmaster/docs/prd.txt` (comprehensive PRD)
- **Original PDF**: `Sentra_Assist_Project_Spec.pdf` (source document)
- **WXT Docs**: https://wxt.dev
- **Chrome Extension Docs**: https://developer.chrome.com/docs/extensions/mv3/

---

## 🤝 Contributing

This is an internal Sentra Infrastructure project. Development follows:
1. Structured specifications (PRD-driven)
2. TypeScript strict mode (no implicit any)
3. Task-master workflow for complex features
4. Git branch-based development with isolated task contexts

---

## 📝 License

**INTERNAL — Sentra Infrastructure**  
Proprietary software for Puskesmas Balowerti, Kota Kediri.

---

## 👤 Author

**dr. Ferdi Iskandar** (Sentra Principal Infrastructure Engineering)  
**Document ID**: SENTRA-SPEC-001 v1.2.0  
**Date**: February 2, 2026

---

**Quick Commands**:
```bash
npm run dev          # Development with HMR
npm run build        # Production build
npm run zip          # Package for Web Store
npm run dev:firefox  # Test in Firefox
```

**Status**: ✅ Phase 1 Complete — Ready for Phase 2
