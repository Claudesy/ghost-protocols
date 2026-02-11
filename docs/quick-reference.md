# Sentra Assist — Quick Reference

**Versi**: 1.0.0 | **Tanggal**: 11 Februari 2026 | **Penulis**: dr. Ferdi Iskandar

---

## Ringkasan Fitur

| Fitur                      | Fungsi                                              | Akses         |
| -------------------------- | --------------------------------------------------- | ------------- |
| **Anamnesis Assistant**    | Auto-scraping TTV & keluhan dari ePuskesmas         | Tab Anamnesis |
| **Diagnosis Differential** | Saran diagnosis dari 159 penyakit (Iskandar Engine) | Tab Diagnosis |
| **Clinical Trajectory**    | Analisis pola vital signs, deteksi perburukan       | Tab Diagnosis |
| **Red Flags Detection**    | Deteksi kondisi emergensi otomatis                  | Tab Diagnosis |
| **Prescription Auto-Fill** | Auto-fill resep ke ePuskesmas                       | Tab Resep     |
| **DDI Checker**            | Cek interaksi obat (173K+ interaksi)                | Tab Resep     |

---

## Workflow Cepat

```
1. Login ePuskesmas → Buka halaman Anamnesis
2. Isi TTV & keluhan → Sentra Assist auto-read
3. Klik "Analisis Trajektori" → Review traffic light
4. Klik "Lanjut ke Diagnosis" → Pilih diagnosis
5. Klik "Uplink Diagnosa" → Verifikasi → Simpan
6. Buka halaman Resep → Pilih obat
7. Klik "Uplink Resep" → Verifikasi → Simpan
```

---

## Indikator Status

| Simbol                 | Arti               | Tindakan                            |
| ---------------------- | ------------------ | ----------------------------------- |
| 🟢 **GREEN**           | Kondisi stabil     | Lanjutkan perawatan rutin           |
| 🟡 **AMBER**           | Monitor ketat      | Pertimbangkan pemeriksaan penunjang |
| 🔴 **RED**             | Rujukan segera     | Stabilisasi + rujuk                 |
| 🟢 **Profile OK**      | Sistem siap        | -                                   |
| 🟠 **Profile Warning** | Data belum lengkap | Lengkapi data                       |
| 🔴 **Profile Error**   | Error sistem       | Refresh halaman                     |

---

## Red Flags (Kondisi Emergensi)

| Kondisi                  | Kriteria                             | Tindakan                               |
| ------------------------ | ------------------------------------ | -------------------------------------- |
| **Syok**                 | TD sistolik <90 mmHg + takikardi     | Stabilisasi + rujuk SEGERA             |
| **Sindrom Koroner Akut** | Nyeri dada + hipotensi/takikardi     | O2 + IV + Aspirin + rujuk              |
| **Stroke Akut**          | Defisit neurologis akut              | Stabilisasi + rujuk <4.5 jam           |
| **Krisis Hipertensi**    | TD ≥180/120 + gejala organ target    | Turunkan TD bertahap + rujuk           |
| **Hipoglikemia Berat**   | GDS <50 mg/dL + penurunan kesadaran  | Dextrose 40% IV + monitor              |
| **Sepsis**               | SIRS + hipotensi + organ dysfunction | Resusitasi cairan + antibiotik + rujuk |

---

## Interpretasi Confidence Score

| Score       | Arti               | Tindakan                             |
| ----------- | ------------------ | ------------------------------------ |
| **80-100%** | Sangat yakin       | Pertimbangkan kuat, tetap verifikasi |
| **60-79%**  | Cukup yakin        | Cocokkan dengan clinical judgment    |
| **40-59%**  | Kurang yakin       | Gunakan sebagai referensi saja       |
| **<40%**    | Sangat tidak yakin | Abaikan atau cari second opinion     |

---

## DDI Severity Levels

| Level               | Arti                   | Tindakan                                   |
| ------------------- | ---------------------- | ------------------------------------------ |
| **Minor**           | Interaksi ringan       | Boleh dilanjutkan, monitor pasien          |
| **Moderate**        | Interaksi sedang       | Pertimbangkan alternatif atau adjust dosis |
| **Major**           | Interaksi berat        | Hindari kombinasi jika memungkinkan        |
| **Contraindicated** | Kontraindikasi absolut | **JANGAN** kombinasikan                    |

---

## Auto-Fill Fields

### Diagnosis

| Field               | Sumber Data                                 | Auto-Detect |
| ------------------- | ------------------------------------------- | ----------- |
| **ICD-X**           | Pilihan user                                | ✅          |
| **Nama Diagnosis**  | Database ICD-10                             | ✅          |
| **Jenis**           | Urutan diagnosis (1st=PRIMER, 2nd=SEKUNDER) | ✅          |
| **Kasus**           | Visit count (>1=LAMA, 1=BARU)               | ✅          |
| **Prognosis**       | Trajektori klinis                           | ✅          |
| **Penyakit Kronis** | ICD-10 pattern matching (11 penyakit)       | ✅          |

### Resep

| Field            | Sumber Data                            | Auto-Detect |
| ---------------- | -------------------------------------- | ----------- |
| **Nama Obat**    | Pilihan user + autocomplete simulation | ✅          |
| **Jumlah**       | Input user                             | ✅          |
| **Satuan**       | Database obat                          | ✅          |
| **Aturan Pakai** | Input user                             | ✅          |

---

## Troubleshooting 1-Liner

| Masalah                 | Solusi                                                 |
| ----------------------- | ------------------------------------------------------ |
| Side Panel tidak muncul | Refresh halaman atau klik ikon ekstensi                |
| Uplink gagal            | Refresh → tunggu form loaded → coba lagi               |
| Data hilang             | Input ulang (tidak dapat di-recover)                   |
| Diagnosis tidak relevan | Perbaiki input keluhan, tambahkan detail               |
| Red flag false positive | Verifikasi TTV → evaluasi klinis → abaikan jika stabil |
| Sistem lambat           | Tutup tab lain → clear cache → restart browser         |
| DDI warning muncul      | Review severity → ganti obat atau adjust dosis         |

---

## Keyboard Shortcuts

| Shortcut         | Fungsi                          |
| ---------------- | ------------------------------- |
| **Ctrl+Shift+S** | Buka Side Panel (jika tertutup) |
| **Tab**          | Navigasi antar field            |
| **Enter**        | Submit form (hati-hati!)        |
| **Esc**          | Tutup modal/alert               |

---

## Do & Don't

### ✅ DO

- Verifikasi data auto-fill
- Gunakan clinical judgment
- Dokumentasikan keputusan
- Perhatikan red flags
- Review DDI warnings

### ❌ DON'T

- Percaya 100% tanpa verifikasi
- Abaikan red flags tanpa evaluasi
- Gunakan untuk kasus emergensi
- Screenshot data pasien
- Skip verifikasi

---

## Kontak Cepat

| Keperluan          | Kontak             |
| ------------------ | ------------------ |
| **Bantuan Teknis** | support@sentra.id  |
| **Feedback**       | feedback@sentra.id |
| **Bug Report**     | bugs@sentra.id     |

---

## Disclaimer

> **Sentra Assist adalah alat bantu, BUKAN pengganti dokter.**  
> Keputusan akhir ada pada dokter yang merawat.

---

**dr. Ferdi Iskandar** | Puskesmas Kota Kediri | 11 Februari 2026
