# Sentra Assist — Panduan Update dan Perubahan

**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Penulis**: dr. Ferdi Iskandar  
**Target Pembaca**: Pengguna Existing Sentra Assist

---

## Tujuan Dokumen

Panduan ini membantu pengguna existing **beradaptasi dengan perubahan** setelah update sistem Sentra Assist. Setiap update akan disertai dengan:

1. **Version number** — Untuk tracking perubahan
2. **Release notes** — Apa yang berubah
3. **Migration guide** — Langkah adaptasi (jika ada breaking changes)
4. **Workflow impact** — Dampak terhadap workflow harian

---

## Cara Membaca Version Updates

### Semantic Versioning

Sentra Assist menggunakan **Semantic Versioning** (MAJOR.MINOR.PATCH):

```
Contoh: 1.2.3
         │ │ │
         │ │ └─ PATCH: Bug fix, no breaking changes
         │ └─── MINOR: New features, backward compatible
         └───── MAJOR: Breaking changes, requires adaptation
```

### Interpretasi

| Version Change    | Arti             | Dampak Workflow | Tindakan                       |
| ----------------- | ---------------- | --------------- | ------------------------------ |
| **1.0.0 → 1.0.1** | Bug fix          | Minimal         | Tidak perlu adaptasi           |
| **1.0.0 → 1.1.0** | New features     | Ringan          | Baca release notes             |
| **1.0.0 → 2.0.0** | Breaking changes | Signifikan      | **Wajib baca migration guide** |

---

## Checklist Setelah Update

Setiap kali Sentra Assist update, lakukan:

### Checklist Umum

- [ ] **Baca release notes** — Pahami apa yang berubah
- [ ] **Cek version number** — Apakah MAJOR, MINOR, atau PATCH?
- [ ] **Test di kasus sederhana** — Coba workflow normal dengan kasus ISPA sederhana
- [ ] **Verifikasi auto-fill** — Pastikan uplink diagnosis dan resep masih berfungsi
- [ ] **Cek red flags** — Pastikan deteksi red flags masih akurat
- [ ] **Review DDI checker** — Pastikan interaksi obat masih terdeteksi

### Checklist untuk MAJOR Update (Breaking Changes)

- [ ] **Baca migration guide** — Ikuti langkah migrasi
- [ ] **Backup data** — Export data penting jika ada
- [ ] **Training refresh** — Ikuti training singkat jika disediakan
- [ ] **Update SOP** — Sesuaikan SOP Puskesmas jika workflow berubah
- [ ] **Informasikan tim** — Beritahu dokter lain tentang perubahan

---

## Awareness Dampak Workflow

### Perubahan yang Tidak Berdampak Workflow

**Contoh**:

- Bug fix pada UI
- Peningkatan performance
- Update database obat
- Perbaikan typo di dokumentasi

**Tindakan**: Tidak perlu adaptasi, lanjutkan workflow normal

---

### Perubahan yang Berdampak Ringan

**Contoh**:

- Penambahan fitur baru (opsional)
- Perubahan tampilan UI (minor)
- Penambahan diagnosis baru di knowledge base

**Tindakan**:

1. Baca release notes
2. Coba fitur baru (opsional)
3. Lanjutkan workflow normal

---

### Perubahan yang Berdampak Signifikan

**Contoh**:

- Perubahan algoritma diagnosis
- Perubahan threshold red flags
- Perubahan auto-fill logic
- Perubahan struktur data

**Tindakan**:

1. **Wajib baca migration guide**
2. **Test di kasus dummy** sebelum digunakan di pasien riil
3. **Verifikasi akurasi** saran diagnosis
4. **Update SOP** jika diperlukan
5. **Laporkan issue** jika ada masalah

---

## Migration Guide Template

Setiap MAJOR update akan disertai migration guide dengan format:

### 1. Apa yang Berubah?

**Deskripsi perubahan** — Penjelasan singkat apa yang berubah

**Alasan perubahan** — Mengapa perubahan ini diperlukan

**Dampak** — Apa dampaknya terhadap workflow

### 2. Langkah Migrasi

**Step-by-step** — Langkah adaptasi yang harus dilakukan

**Contoh kasus** — Contoh sebelum dan sesudah perubahan

### 3. Breaking Changes

**Fitur yang dihapus** — Fitur yang tidak lagi tersedia

**Fitur yang berubah** — Fitur yang berubah cara kerjanya

**Alternatif** — Cara mencapai hasil yang sama dengan cara baru

### 4. Testing Checklist

**Checklist** — Apa yang harus dicek setelah migrasi

---

## Contoh: Migration Guide V1.0 → V2.0 (Hypothetical)

> [!NOTE]
> Ini adalah contoh hypothetical untuk ilustrasi. V2.0 belum dirilis.

### Apa yang Berubah?

**Perubahan**: Algoritma diagnosis berubah dari **IDF-only** ke **Hybrid (IDF + Bayesian + LLM)**

**Alasan**: Meningkatkan akurasi diagnosis dengan memasukkan epidemiologi lokal

**Dampak**:

- Confidence score dapat berubah untuk diagnosis yang sama
- Urutan ranking diagnosis dapat berubah
- Diagnosis yang sebelumnya tidak muncul, sekarang mungkin muncul

### Langkah Migrasi

#### Step 1: Update Ekstensi

1. Chrome akan auto-update ekstensi
2. Atau manual: `chrome://extensions` → Update

#### Step 2: Clear Cache

1. Buka `chrome://settings/clearBrowserData`
2. Pilih "Cached images and files"
3. Klik "Clear data"

#### Step 3: Test di Kasus Dummy

1. Buat encounter dummy dengan gejala: "Demam 3 hari, batuk"
2. Klik "Analisis Trajektori"
3. Review saran diagnosis
4. **Verifikasi**: Apakah saran masih relevan?

#### Step 4: Verifikasi Auto-Fill

1. Pilih diagnosis
2. Klik "Uplink Diagnosa"
3. **Verifikasi**: Apakah auto-fill masih berfungsi?

### Breaking Changes

**Fitur yang dihapus**:

- ❌ Tidak ada fitur yang dihapus

**Fitur yang berubah**:

- ⚠️ **Confidence score** — Skala berubah dari 0-1 ke 0-100%
- ⚠️ **Ranking** — Urutan diagnosis dapat berubah

**Alternatif**:

- Tidak ada, sistem otomatis menggunakan skala baru

### Testing Checklist

- [ ] Saran diagnosis masih relevan
- [ ] Confidence score dalam range 0-100%
- [ ] Auto-fill diagnosis masih berfungsi
- [ ] Red flags masih terdeteksi
- [ ] DDI checker masih berfungsi

---

## Notifikasi Update

### Cara Mengetahui Ada Update

1. **Chrome auto-update** — Ekstensi otomatis update di background
2. **Notifikasi di Side Panel** — Banner muncul jika ada update penting
3. **Email dari IT Support** — Untuk MAJOR update
4. **Announcement di Puskesmas** — Untuk breaking changes

### Cara Cek Version Saat Ini

1. Buka Side Panel Sentra Assist
2. Klik icon **Settings** (⚙️) di pojok kanan atas
3. Lihat **Version Number** di bagian bawah

Atau:

1. Buka `chrome://extensions`
2. Cari "Sentra Assist"
3. Lihat version number di bawah nama ekstensi

---

## Rollback Policy

### Kapan Rollback Diperlukan?

Rollback (kembali ke versi sebelumnya) diperlukan jika:

1. **Critical bug** terdeteksi di versi baru
2. **Akurasi menurun** signifikan
3. **Workflow terganggu** parah
4. **Safety concern** muncul

### Cara Rollback

> [!CAUTION]
> Rollback hanya dapat dilakukan oleh **IT Admin**, bukan user individual.

**Prosedur**:

1. Laporkan issue ke IT Support (bugs@sentra.id)
2. IT Admin evaluasi severity
3. Jika critical, IT Admin push rollback ke semua user
4. User akan menerima notifikasi rollback
5. Ekstensi otomatis downgrade ke versi sebelumnya

---

## FAQ Update

### Q: Apakah data saya hilang setelah update?

**A**: Tidak. Data di local storage (24 jam TTL) tetap tersimpan. Namun, disarankan untuk **simpan data ke ePuskesmas** sesegera mungkin sebelum update MAJOR.

### Q: Apakah saya harus training ulang setelah update?

**A**:

- **PATCH update**: Tidak perlu
- **MINOR update**: Baca release notes saja
- **MAJOR update**: Disarankan ikuti training refresh (jika disediakan)

### Q: Bagaimana jika saya tidak setuju dengan perubahan?

**A**: Anda dapat:

1. Laporkan feedback ke feedback@sentra.id
2. Request rollback (jika critical)
3. Uninstall ekstensi (tidak disarankan)

### Q: Apakah update otomatis atau manual?

**A**: **Otomatis**. Chrome akan auto-update ekstensi di background. Anda tidak perlu melakukan apa-apa.

### Q: Bagaimana jika update gagal?

**A**:

1. Coba manual update: `chrome://extensions` → Update
2. Jika masih gagal, uninstall dan reinstall ekstensi
3. Jika masih gagal, hubungi IT Support

### Q: Apakah saya bisa skip update?

**A**: **Tidak disarankan**. Update biasanya berisi bug fix dan security patch. Jika Anda skip update, sistem dapat menjadi tidak stabil atau tidak aman.

---

## Changelog (Riwayat Perubahan)

### V1.0.0 (11 Februari 2026) — Initial Release

**New Features**:

- ✅ Diagnosis differential (159 penyakit)
- ✅ Red flags detection (8 kondisi)
- ✅ Clinical trajectory analysis
- ✅ DDI checker (173K interaksi)
- ✅ Auto-fill diagnosis dan resep

**Known Issues**:

- ⚠️ Auto-fill dapat gagal jika ePuskesmas update struktur form
- ⚠️ Trajektori kurang akurat untuk pasien baru (visitCount = 1)

---

### V1.0.1 (Planned) — Bug Fix

**Bug Fixes**:

- 🐛 Fix auto-fill gagal pada field "Prognosis"
- 🐛 Fix red flag false positive untuk TD borderline
- 🐛 Fix DDI checker tidak mendeteksi interaksi obat herbal

**Improvements**:

- ⚡ Performance improvement untuk symptom matcher
- ⚡ UI responsiveness improvement

**Breaking Changes**: Tidak ada

---

### V1.1.0 (Planned) — New Features

**New Features**:

- ✨ Pediatric dosing calculator
- ✨ Allergy alerts
- ✨ Chronic disease management dashboard

**Improvements**:

- ⚡ Confidence score calibration
- ⚡ Epidemiology weights update (data terbaru)

**Breaking Changes**: Tidak ada

---

### V2.0.0 (Planned) — Major Update

**New Features**:

- ✨ Expanded knowledge base (300+ penyakit)
- ✨ Multi-facility support
- ✨ Integration dengan MedLink Platform

**Breaking Changes**:

- ⚠️ Confidence score skala berubah 0-1 → 0-100%
- ⚠️ API contract berubah (untuk developer)
- ⚠️ Storage schema berubah (data lama tidak kompatibel)

**Migration Required**: **YA** — Wajib baca migration guide

---

## Kontak Update dan Support

**Untuk pertanyaan tentang update**:

- Email: updates@sentra.id

**Untuk bug report**:

- Email: bugs@sentra.id

**Untuk feedback**:

- Email: feedback@sentra.id

**Untuk training refresh**:

- Email: training@sentra.id

---

## Kesimpulan

Update adalah bagian normal dari lifecycle software. Dengan mengikuti panduan ini, Anda dapat:

1. ✅ Memahami apa yang berubah
2. ✅ Beradaptasi dengan perubahan
3. ✅ Meminimalkan disruption workflow
4. ✅ Melaporkan issue jika ada

> [!TIP]
> **Best Practice**: Selalu baca release notes setiap update, meskipun hanya PATCH update. Ini membantu Anda tetap up-to-date dengan sistem.

---

**Dokumen ini disusun oleh**: dr. Ferdi Iskandar  
**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Untuk**: Pengguna Existing Sentra Assist, Puskesmas Kota Kediri
