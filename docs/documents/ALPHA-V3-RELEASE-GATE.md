# ALPHA v3 Release Gate

Tanggal: 2026-02-06  
Scope: Assist ALPHA harus 100% runtime diagnosis v3 (tanpa legacy runtime fallback)

## 1) Runtime Gate (Mandatory)

- `PASS`: `entrypoints/background.ts` handler `getSuggestions` hanya memanggil `runGetSuggestionsFlow`.
- `PASS`: saat encounter kosong, sistem membuat transient encounter v3 (`createEmptyEncounter`) lalu tetap jalankan flow v3.
- `PASS`: `entrypoints/content.ts` tidak lagi fallback ke `executePulseFill` untuk unknown fill type.
- `PASS`: `lib/cdss/engine.ts` tidak lagi memiliki fallback runtime ke jalur legacy RAG/Vertex.
- `PASS`: saat validasi penuh gagal, engine tetap di jalur v3 dengan fallback konservatif internal (confidence diturunkan + warning klinis).

## 2) Test Gate (Mandatory)

Jalankan:

```bash
npx vitest run --config vitest.unit.config.ts lib/cdss/get-suggestions-flow.integration.test.ts lib/cdss/get-suggestions-flow.error.test.ts entrypoints/background.getSuggestions.integration.test.ts
```

Expected:

- `PASS`: `lib/cdss/get-suggestions-flow.integration.test.ts`
- `PASS`: `lib/cdss/get-suggestions-flow.error.test.ts`
- `PASS`: `entrypoints/background.getSuggestions.integration.test.ts`

## 3) Clinical Safety Gate (Mandatory, Human Sign-off)

- Review skenario kritis: sepsis.
- Review skenario kritis: preeclampsia.
- Review skenario kritis: shock.
- Review skenario kritis: respiratory failure.
- Verifikasi wording rekomendasi operasional Puskesmas.
- Verifikasi red-flag emergency tetap prioritas teratas.

## 4) Sign-off Blockers Before Tag

- `REQUIRED`: Sign-off klinis internal oleh Chief.
- `REQUIRED`: Sign-off implementasi task list oleh Jen.
- `REQUIRED`: Tidak ada call path runtime diagnosis yang mengarah ke legacy engine.
- `REQUIRED`: Test gate pada section 2 hijau.

## 5) Approval Record

- Technical owner: ____________________ (tanggal: __________)
- Clinical owner: ____________________ (tanggal: __________)
- Product owner: ____________________ (tanggal: __________)

Status saat file dibuat:

- Technical gate: `READY`
- Clinical sign-off: `PENDING`
- Release tag `ALPHA`: `BLOCKED` sampai semua approval terisi
