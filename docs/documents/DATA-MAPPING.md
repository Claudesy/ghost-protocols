# Data Mapping Analysis — Sentra Assist CDSS

**Document ID:** SENTRA-ASSIST-DATA-MAPPING-001
**Status:** ANALYSIS COMPLETE
**Date:** 2026-02-03
**Author:** Claude (Principal Architect)

---

## 1. Data Inventory

| File | Size | Records | Purpose |
|------|------|---------|---------|
| `icd10.json` | 2.5 MB | 18,543 | Full ICD-10 e-Klaim BPJS |
| `penyakit.json` | 240 KB | 144 | 144 Penyakit Puskesmas (PPK IDI + KKI) |
| `drug_mapping.json` | 16 KB | 75 | Generic drug name → stock mapping |
| `stok_obat.json` | 77 KB | 277 | Puskesmas Balowerti inventory |
| `icd10-indonesia.json` | 22 KB | 107 | **DEPRECATED** — sample file, replace with penyakit.json |

---

## 2. Data Structures

### 2.1 icd10.json (Full BPJS e-Klaim)

```typescript
{
  _metadata: { version, description, total_records, last_updated },
  icd10: [
    {
      kode: string;      // "A00.0"
      nama_en: string;   // "Cholera due to vibrio..."
      version: string;   // "ICD10_2010"
    }
  ]
}
```

**GAP:** No Indonesian translation (`nama_id`)

### 2.2 penyakit.json (144 Diagnosa Puskesmas) ⭐ PRIMARY

```typescript
{
  _metadata: { version, description, last_updated },
  penyakit: [
    {
      id: string;              // "DIS-001"
      kki_no: number;          // 1-144
      nama: string;            // "Kejang demam" (Indonesian)
      nama_en: string;         // "CONVULSIONS, NOT ELSEWHERE CLA"
      icd10: string;           // "R56"
      kompetensi: string;      // "4A" (all are 4A)
      body_system: string;     // "SISTEM SARAF"
      can_refer: boolean;      // false = handle at Puskesmas
      definisi: string;        // Clinical definition
      gejala_klinis: string[]; // Symptoms
      pemeriksaan_fisik: string[]; // Physical exam
      diagnosis_banding: string[]; // Differential diagnosis
      komplikasi: string[];    // Complications
      red_flags: string[];     // ⚠️ RED FLAGS!
      terapi: Array<{          // Treatment
        obat: string;
        dosis: string;
        frek: string;
      }>;
      kriteria_rujukan: string; // Referral criteria
      source: string;          // "PPK IDI 2013 + 144 Diagnosis KKI"
    }
  ]
}
```

### 2.3 drug_mapping.json

```typescript
{
  _metadata: { ... },
  mappings: [
    {
      generik: string;      // "Paracetamol"
      alias: string[];      // ["PCT", "Acetaminophen"]
      stok_match: string[]; // ["Parasetamol"] → matches stok_obat
      kategori: string;     // "Analgesik-Antipiretik"
    }
  ]
}
```

### 2.4 stok_obat.json

```typescript
{
  _metadata: { puskesmas: "BALOWERTI", total_items: 277, ... },
  stok_obat: [
    {
      id: string;           // "OBT-0001"
      kode_obat: string;    // "21018"
      nama_obat: string;    // "Paracetamol tablet 500 mg"
      kelompok: string;     // "OBAT" | "BMHP"
      satuan: string;       // "Tablet"
      harga_beli: number;
      harga_jual: number;
      stok_tersedia: number;
      status: string;       // "tersedia" | "habis"
    }
  ]
}
```

---

## 3. Body System Distribution

| Body System | Count | Percentage |
|-------------|-------|------------|
| SISTEM INTEGUMEN | 45 | 31% |
| SISTEM INDERA | 22 | 15% |
| SALURAN PENCERNAAN | 19 | 13% |
| SISTEM REPRODUKSI | 14 | 10% |
| SISTEM RESPIRASI | 10 | 7% |
| SISTEM ENDOKRIN | 9 | 6% |
| SISTEM SARAF | 7 | 5% |
| HEMATOLOGI DAN IMUNOLOGI | 6 | 4% |
| SISTEM GINJAL | 5 | 3% |
| PSIKIATRI | 2 | 1% |
| SISTEM MUSKULOSKELETAL | 2 | 1% |
| FORENSIK DAN MEDIKOLEGAL | 2 | 1% |
| KARDIOVASKULAR | 1 | 1% |
| **TOTAL** | **144** | **100%** |

---

## 4. Data Quality Issues

### 4.1 CRITICAL — ICD-10 Code Error

| Disease | Current Code | Correct Code | Issue |
|---------|--------------|--------------|-------|
| Kandidiasis mulut | `B3` | `B37.0` | Incomplete code |

**Action:** Fix in `penyakit.json`

### 4.2 MODERATE — Missing Indonesian Translation in icd10.json

The full ICD-10 database (`icd10.json`) only has English names. For CDSS, we primarily use `penyakit.json` which has Indonesian names, so this is acceptable for now.

### 4.3 LOW — Drug Mapping Coverage

- Drug mappings: 75 generics
- Estimated coverage: ~80% of common prescriptions
- Some terapi entries have placeholder dosing ("Sesuai PPK")

---

## 5. Integration Mapping

### 5.1 CDSS RAG Database

**Source:** `penyakit.json` (144 diagnosa)
**Target:** IndexedDB RAG

```
penyakit.json → lib/rag/icd10-loader.ts → IndexedDB
```

**Transform mapping:**

| penyakit.json | ICD10Entry (RAG) |
|---------------|------------------|
| `icd10` | `code` |
| `nama_en` | `name_en` |
| `nama` | `name_id` |
| `body_system` | → derive `chapter` |
| `icd10.substring(0,3)` | `category` |
| `gejala_klinis` | → extract `keywords` |
| hardcode 0.8 | `commonality` (Puskesmas focus) |
| `true` | `is_leaf` |

### 5.2 Red Flags Integration

**Source:** `penyakit.json` → `red_flags[]`
**Target:** `lib/cdss/red-flags.ts`

The `penyakit.json` already contains `red_flags` per disease. These can supplement our hardcoded safety rules.

### 5.3 Prescription Integration

```
User selects diagnosis → lookup penyakit.json → get terapi[]
terapi.obat → drug_mapping.json → stok_match[]
stok_match → stok_obat.json → availability check
```

---

## 6. Action Items

### P0 — Critical

1. **[BUG] Fix B3 → B37.0** in `penyakit.json`
2. **[REFACTOR] Replace `icd10-indonesia.json`** with transformed `penyakit.json`

### P1 — High Priority

3. **[ENHANCE] Update RAG loader** to consume `penyakit.json` structure
4. **[ENHANCE] Import disease-specific red flags** from `penyakit.json`
5. **[ENHANCE] Import `gejala_klinis`** as searchable keywords

### P2 — Medium Priority

6. **[FEATURE] Drug recommendation** using `terapi[]` field
7. **[FEATURE] Stock availability check** via `stok_obat.json`
8. **[FEATURE] Referral decision support** using `kriteria_rujukan`

### P3 — Future

9. **[ENHANCE] Add Indonesian translations** to full `icd10.json`
10. **[FEATURE] Multi-Puskesmas stock** management

---

## 7. Recommended Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    penyakit.json                        │
│              (144 Diagnosa Puskesmas)                   │
│  ┌──────────┬──────────┬──────────┬──────────────────┐ │
│  │ ICD-10   │ Gejala   │ Red Flags│ Terapi           │ │
│  └────┬─────┴────┬─────┴────┬─────┴────┬─────────────┘ │
└───────┼──────────┼──────────┼──────────┼───────────────┘
        │          │          │          │
        ▼          ▼          ▼          ▼
   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────────┐
   │RAG DB  │ │Keywords│ │Safety  │ │Prescription│
   │(Index) │ │(Search)│ │Rules   │ │Recommender │
   └────────┘ └────────┘ └────────┘ └────────────┘
        │          │          │          │
        └──────────┴──────────┴──────────┘
                       │
                       ▼
              ┌────────────────┐
              │  CDSS Engine   │
              │ (Orchestrator) │
              └────────────────┘
```

---

## 8. Summary

**EXCELLENT NEWS:** The `penyakit.json` file is a gold mine! It contains:

- ✅ 144 diseases handled at Puskesmas (Kompetensi 4A)
- ✅ Indonesian AND English names
- ✅ Clinical definitions and symptoms
- ✅ Red flags per disease
- ✅ Treatment recommendations
- ✅ Referral criteria
- ✅ Source: PPK IDI 2013 + 144 Diagnosis KKI (authoritative)

**Next Step:** Transform `penyakit.json` to replace `icd10-indonesia.json` as the primary RAG data source.

---

*"Setiap Nyawa Berharga — Every Life Matters"*
