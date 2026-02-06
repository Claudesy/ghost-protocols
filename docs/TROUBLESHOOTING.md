# Sentra Assist Troubleshooting Guide

## Overview

Dokumen ini berisi solusi untuk masalah umum yang mungkin ditemui saat mengembangkan Sentra Assist Chrome Extension. Dirancang sebagai referensi untuk semua agent yang bekerja pada proyek ini.

---

## Issue #1: Sidepanel White Screen (Blank)

### Symptoms
- Sidepanel terbuka dengan title bar "Sentra Assist - ePuskesmas CDSS"
- Area content kosong/putih
- Tidak ada error visible di UI

### Root Causes & Solutions

#### Cause A: WXT Dev Server Not Running
**Diagnosis:**
- File `.output/chrome-mv3-dev/sidepanel.html` menunjuk ke `localhost:3000`
- Jika dev server tidak jalan, scripts tidak load

**Solution:**
```bash
pnpm dev
```
Tunggu sampai muncul `✔ Started dev server @ http://localhost:3000`

#### Cause B: Extension Not Reloaded After Dev Server Start
**Solution:**
1. Buka `chrome://extensions`
2. Cari "Sentra Assist"
3. Klik tombol refresh (🔄)
4. Tutup dan buka ulang sidepanel

#### Cause C: React Runtime Error
**Diagnosis:**
React crash tanpa menampilkan error di UI. Error hanya muncul di DevTools Console.

**Debug Steps:**
1. Klik kanan di sidepanel → Inspect
2. Buka tab Console
3. Cari error merah

**Common React Errors:**
| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot read property of undefined` | Data null/undefined | Add optional chaining `?.` |
| `Invalid hook call` | Hook dipanggil di luar component | Pindahkan hook ke dalam function component |
| `Module not found` | Import path salah | Cek path alias di tsconfig.json |

#### Cause D: Import Module Failure
**Diagnosis:**
Module gagal load sebelum React mount. Tidak ada console.log yang muncul.

**Solution:**
Tambahkan numbered debug logs di awal file:
```typescript
console.log('[SidePanel] 1. Script started');
import React from 'react';
console.log('[SidePanel] 2. React imported');
// ... dst
```

#### Cause E: Duplicated Exports Warning
**Diagnosis:**
Vite mendeteksi duplicated exports:
```
WARN Duplicated imports "formatPatientName", the one from "example-documented.ts" has been ignored
```

**Impact:** Usually non-fatal. Vite picks one.

**Solution (Long-term):**
- Rename fungsi yang duplikat
- Hapus file example/demo yang export fungsi dengan nama sama

---

## Issue #2: TypeScript Errors

### Command
```bash
pnpm typecheck
```

### Common Errors

| Error | Fix |
|-------|-----|
| `Type 'any' is not assignable` | Add proper type annotation |
| `Property 'x' does not exist` | Check interface definition |
| `Cannot find module '@/...'` | Verify path alias in tsconfig.json |

---

## Issue #3: ESLint Errors

### Command
```bash
pnpm lint
pnpm lint:fix  # Auto-fix
```

### Common Errors

| Error | Fix |
|-------|-----|
| `@typescript-eslint/no-explicit-any` | Replace `any` with proper type |
| `@typescript-eslint/no-unused-vars` | Remove unused variable or prefix with `_` |
| `@typescript-eslint/no-unused-expressions` | Add semicolon or fix expression |

---

## Issue #4: Build Fails

### Command
```bash
pnpm build
```

### Common Causes

1. **TypeScript errors** - Run `pnpm typecheck` first
2. **Missing dependencies** - Run `pnpm install`
3. **Invalid manifest.json** - Check WXT config

---

## Issue #5: Extension Not Loading in Chrome

### Diagnosis
1. Buka `chrome://extensions`
2. Enable "Developer mode"
3. Cek error message di extension card

### Solutions

| Error | Fix |
|-------|-----|
| "Manifest file missing" | Run `pnpm build` atau `pnpm dev` |
| "Invalid manifest" | Check manifest permissions di wxt.config.ts |
| "Content Security Policy" | Update CSP di manifest |

---

## Issue #6: Hot Reload Not Working

### Symptoms
- Perubahan code tidak reflect di extension
- Perlu manual reload setiap kali

### Solutions
1. Pastikan `pnpm dev` running (bukan `pnpm build`)
2. Hard reload extension: klik refresh button di chrome://extensions
3. Restart dev server: `Ctrl+C` lalu `pnpm dev` lagi

---

## Debug Logging Pattern

Gunakan pattern ini untuk debugging runtime issues:

```typescript
// Di entry point (main.tsx)
console.log('[SidePanel] 1. Script started');

import React from 'react';
console.log('[SidePanel] 2. React imported');

import ReactDOM from 'react-dom/client';
console.log('[SidePanel] 3. ReactDOM imported');

import './style.css';
console.log('[SidePanel] 4. CSS imported');

import { Component } from '@/components/Component';
console.log('[SidePanel] 5. Component imported');

// Mount dengan try-catch
const rootEl = document.getElementById('root');
console.log('[SidePanel] 6. Root element:', rootEl);

if (rootEl) {
  try {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);
    console.log('[SidePanel] 7. Render successful');
  } catch (error) {
    console.error('[SidePanel] ERROR:', error);
    rootEl.innerHTML = `<div style="color:red;padding:20px;">ERROR: ${error}</div>`;
  }
}
```

---

## Quick Commands Reference

```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm build            # Production build

# Quality checks
pnpm typecheck        # TypeScript check
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm quality          # Run all checks

# Testing
pnpm test             # Unit tests
pnpm test:e2e         # E2E tests

# Packaging
pnpm zip              # Package for Chrome Web Store
```

---

## Contact

Jika menemukan issue baru yang tidak ada di dokumen ini:
1. Dokumentasikan steps to reproduce
2. Capture console errors
3. Update dokumen ini dengan solusi

---

*Last updated: 2026-02-04*
*Maintained by: Sentra Genesis Agents*
