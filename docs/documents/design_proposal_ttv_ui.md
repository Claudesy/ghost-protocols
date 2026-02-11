# Proposal UI Modernization: Assist Side Panel

**Status:** Draft Propose  
**Target:** `TTVInferenceUI.tsx` & `tailwind.config.ts`  
**Author:** Jen (Antigravity Design)  
**Date:** 09 Feb 2026

---

## 1. Analisis Situasi

Saat ini UI menggunakan tema **"Realistic Carbon"**.

- **Karakteristik:** Berat, industrial, menggunakan gradien "raised/pressed" (skeuomorphic halus), dan warna dasar abu-abu gelap (`#1e1e21`).
- **Masalah:** Terasa agak "tebal/kuno" untuk standar modern AI interface yang biasanya mengejar estetika _fluid_, _lightweight_, dan _ethereal_.
- **Goal:** Menciptakan tampilan yang lebih **Modern, Trusted, & AI-Native**.

## 2. Usulan Konsep Desain

Berikut adalah 3 arah desain (Direction) yang saya usulkan. Masing-masing memiliki karakter unik.

### Konsep A: "Deep Nebula" (Modern AI Glassmorphism)

_Vibe: Futuristic, Intelligent, Fluid._
Tema ini menggunakan pendekatan "Glassmorphism" yang lebih halus dengan background deep blue-slate, bukan abu-abu mati. Memberikan kesan _high-tech_ dan _AI-driven_.

- **Base:** Deep Midnight Slate (Bukan hitam pekat, tapi ada _hint_ biru/ungu sangat gelap). `bg-slate-900`
- **Surface:** Translucent panel dengan border tipis (1px) dan _background blur_. `bg-slate-800/50 backdrop-blur-md`
- **Accent:** Electric Violet (`#8b5cf6`) & Cyber Cyan (`#06b6d4`).
- **Shadow:** _Glow_ halus, bukan shadow hitam biasa. `shadow-glow-cyan`
- **Font:** Inter/Geist (Modern Sans).

**Kelebihan:** Sangat "WOW" secara visual, terasa canggih.
**Kekurangan:** Perlu tuning contrast agar tetap _accessible_ untuk data medis.

**Palette Preview:**

```typescript
colors: {
  background: '#0f172a', // Slate 900+
  surface: {
    base: '#1e293b',     // Slate 800
    highlight: '#334155', // Slate 700
  },
  accent: {
    primary: '#8b5cf6',   // Violet
    secondary: '#06b6d4', // Cyan
  },
  text: {
    primary: '#f8fafc',
    secondary: '#94a3b8',
  }
}
```

---

### Konsep B: "Serene Clinical" (Clean & Trustworthy)

_Vibe: Professional, Calm, Clear._
Tema ini memprioritaskan "Cleanliness". Menggunakan warna dasar yang sangat gelap (Gunmetal) dengan kartu-kartu yang kontras namun _flat_. Menghilangkan gradien bevel, diganti dengan _spacing_ yang lega dan typography yang kuat.

- **Base:** Gunmetal / Deep Teal-Gray (`#111827`).
- **Surface:** Solid card dengan rounded corner yang lebih besar (xl/2xl). `#1f2937`
- **Accent:** Medical Blue (`#3b82f6`) & Emerald Green (`#10b981`). Sangat positif & menenangkan.
- **Style:** Flat design, no noise, no heavy gradients.

**Kelebihan:** Sangat mudah dibaca (high legibility), membangun kepercayaan (trust).
**Kekurangan:** Bisa terasa "sedikit kaku" jika animasi tidak halus.

**Palette Preview:**

```typescript
colors: {
  background: '#111827', // Gray 900 (Cool tone)
  surface: {
    card: '#1f2937',     // Gray 800
    hover: '#374151',    // Gray 700
  },
  accent: {
    primary: '#3b82f6',   // Medical Blue
    success: '#10b981',   // Emerald
    alert: '#ef4444',     // Red
  },
  text: {
    primary: '#ffffff',
    secondary: '#9ca3af',
  }
}
```

---

### Konsep C: "Obsidian Pro" (Linear-Style Productivity)

_Vibe: Precise, Tool-like, High-Density._
Mengambil inspirasi dari _developer tools_ modern (seperti Linear, Vercel). Sangat minimalis. Menggunakan _true black_ dan _border_ sebagai pemisah utama, bukan _background color_.

- **Base:** True Black (`#000000` atau `#09090b`).
- **Surface:** Hampir menyatu dengan background, dipisah oleh border 1px yang halus (`#27272a`).
- **Accent:** Monochrome atau Single Highlight (misal: Amber/Orange).
- **Font:** Monospace untuk angka/data, Sans untuk label.

**Kelebihan:** Informasi sangat padat tapi rapi. Terasa sangat "Pro".
**Kekurangan:** Bisa terasa terlalu "dingin/teknikal" untuk user non-teknis.

**Palette Preview:**

```typescript
colors: {
  background: '#09090b', // Zinc 950
  border: '#27272a',     // Zinc 800
  surface: {
    base: '#000000',
    subtle: '#18181b',   // Zinc 900
  },
  accent: {
    primary: '#f59e0b',   // Amber (Fokus)
  },
  text: {
    primary: '#e4e4e7',
    muted: '#71717a',
  }
}
```

---

## 3. Rekomendasi Jen (The "Mode Beta" Pick)

Saya merekomendasikan **Konsep A: "Deep Nebula"** namun disesuaikan agar tidak terlalu "gaming".

**Alasan:**

1. **Impresi Pertama:** User ingin UI yang "Modern". Glassmorphism + Dark Slate memberikan kesan modernisasi instan dibandingkan "Carbon Style" yang lama.
2. **Konteks AI:** Tema ini sangat cocok dengan identitas "Assist" sebagai AI intelligence.
3. **Fleksibilitas:** Kita bisa mengatur level transparansi agar tetap terbaca (clinical grade) tapi tetap cantik.

## 4. Next Steps (Jika Disetujui)

1. Saya akan update `tailwind.config.ts` dengan palet warna baru (menggantikan `carbon`).
2. Saya akan refactor `TTVInferenceUI.tsx` untuk menghapus class `bg-carbon-*` dan menggantinya dengan semantic tokens baru (misal: `bg-surface-base`, `border-white/10`).
3. Menambahkan mikrok-interaksi (hover glow) untuk menambah kesan hidup.
   (Tunggu instruksi selanjutnya untuk eksekusi).
