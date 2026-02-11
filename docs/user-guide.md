# Panduan Penggunaan Sentra Assist

## Onboarding untuk Pengguna Baru

**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Penulis**: dr. Ferdi Iskandar  
**Target**: Dokter dan Tenaga Kesehatan Puskesmas Kota Kediri (Pengguna Baru)

---

## Selamat Datang di Sentra Assist!

Panduan ini akan membantu Anda memulai menggunakan Sentra Assist dengan cepat dan efektif. Kami akan memandu Anda melalui **skenario klinis nyata** langkah demi langkah.

> [!NOTE]
> Panduan ini fokus pada **workflow praktis**. Untuk penjelasan teknis lengkap, lihat [User Manual](./user-manual.md).

---

## Checklist Pra-Penggunaan

Sebelum mulai, pastikan:

- [ ] Ekstensi Sentra Assist sudah terinstall di Chrome
- [ ] Anda sudah login ke kotakediri.epuskesmas.id
- [ ] Side Panel Sentra Assist muncul di sisi kanan layar
- [ ] Anda memahami bahwa sistem ini adalah **alat bantu**, bukan pengganti dokter

> [!IMPORTANT]
> Jika Side Panel tidak muncul, klik ikon Sentra Assist di toolbar Chrome atau refresh halaman.

---

## Skenario 1: Pasien Baru dengan Keluhan Demam

### Konteks Klinis

**Pasien**: Tn. A, 35 tahun, datang dengan keluhan demam 3 hari  
**Tujuan**: Input anamnesis, dapatkan saran diagnosis, entry resep

### Langkah 1: Input Anamnesis di ePuskesmas

1. **Buka halaman Anamnesis** di ePuskesmas
2. **Isi data pasien** seperti biasa:
   - Tekanan Darah: 120/80 mmHg
   - Nadi: 88 x/menit
   - Suhu: 38.5°C
   - RR: 20 x/menit
   - SpO2: 98%
3. **Isi Keluhan Utama**: "Demam 3 hari"
4. **Isi Keluhan Tambahan**: "Batuk kering, nyeri tenggorokan, lemas"

> [!TIP]
> Sentra Assist **otomatis membaca** data yang Anda input di ePuskesmas. Tidak perlu input ulang di Side Panel.

### Langkah 2: Analisis Trajektori

1. **Buka Side Panel** → Tab **Diagnosis**
2. **Klik "Analisis Trajektori"**
3. **Review hasil**:
   - Trend: Stable (karena pasien baru, belum ada data historis)
   - Risk Level: Low
   - Traffic Light: 🟢 GREEN
   - Visit Count: 1 (pasien baru)

**Interpretasi**: Kondisi stabil, tidak ada red flags, lanjutkan ke diagnosis diferensial.

### Langkah 3: Lihat Saran Diagnosis

1. **Klik "Lanjut ke Diagnosis Diferensial"**
2. **Review top 5 diagnosis**:

| Rank | Diagnosis       | ICD-10 | Confidence | Reasoning                                |
| ---- | --------------- | ------ | ---------- | ---------------------------------------- |
| 1    | Faringitis Akut | J02.9  | 78%        | Demam + nyeri tenggorokan + batuk kering |
| 2    | ISPA            | J06.9  | 72%        | Gejala respiratori atas                  |
| 3    | Tonsilitis Akut | J03.9  | 65%        | Demam + nyeri tenggorokan                |
| 4    | Influenza       | J11.1  | 58%        | Demam + lemas + batuk                    |
| 5    | Common Cold     | J00    | 52%        | Gejala ringan respiratori                |

### Langkah 4: Pilih Diagnosis

**Clinical Judgment**: Setelah pemeriksaan fisik, Anda melihat faring hiperemis tanpa eksudat → **Faringitis Akut** (J02.9)

1. **Klik diagnosis "Faringitis Akut"** di list
2. **Klik "Uplink Diagnosa"**

### Langkah 5: Verifikasi Auto-Fill

Sistem akan auto-fill di ePuskesmas:

- ✅ ICD-X: J02.9
- ✅ Nama: Faringitis Akut
- ✅ Jenis: PRIMER (karena diagnosis pertama)
- ✅ Kasus: BARU (karena visitCount = 1)
- ✅ Prognosis: Bonam (Baik) — dari trajektori
- ✅ Penyakit Kronis: (tidak ada)

**VERIFIKASI**: Pastikan semua data benar sebelum klik "Tambah" di ePuskesmas.

### Langkah 6: Entry Resep

1. **Buka halaman Resep** di ePuskesmas
2. **Buka Side Panel** → Tab **Resep**
3. **Pilih obat**:
   - Paracetamol 500mg
   - Amoxicillin 500mg
   - Lozenges
4. **Atur dosis dan aturan pakai**
5. **Klik "Uplink Resep"**
6. **Verifikasi** data di ePuskesmas
7. **Simpan**

### Langkah 7: Selesai

✅ Anamnesis tersimpan  
✅ Diagnosis tersimpan  
✅ Resep tersimpan  
✅ Pasien selesai dilayani

**Waktu yang dihemat**: ~3-5 menit per pasien

---

## Skenario 2: Pasien Lama dengan Hipertensi

### Konteks Klinis

**Pasien**: Ny. B, 55 tahun, kontrol rutin Hipertensi  
**Riwayat**: Sudah 5x kunjungan sebelumnya  
**Tujuan**: Monitor trajektori, deteksi perburukan

### Langkah 1: Input TTV

1. **Buka halaman Anamnesis**
2. **Isi TTV**:
   - TD: 160/95 mmHg (meningkat dari kunjungan sebelumnya: 140/90)
   - Nadi: 92 x/menit
   - Suhu: 36.8°C
   - RR: 18 x/menit
   - SpO2: 97%
3. **Keluhan**: "Pusing, tengkuk terasa berat"

### Langkah 2: Analisis Trajektori

1. **Klik "Analisis Trajektori"**
2. **Review hasil**:
   - Trend: **Deteriorating** ⚠️ (TD naik dari kunjungan sebelumnya)
   - Risk Level: **Moderate**
   - Traffic Light: 🟡 **AMBER**
   - Visit Count: 6
   - Urgency: Urgent

**Interpretasi**: Kondisi memburuk, perlu monitor ketat dan adjustment terapi.

### Langkah 3: Review Alert

Sistem menampilkan alert:

> ⚠️ **Perhatian: Monitor Ketat Diperlukan**
>
> Tekanan darah meningkat dari kunjungan sebelumnya. Pertimbangkan adjustment dosis antihipertensi atau pemeriksaan penunjang.

### Langkah 4: Clinical Decision

**Keputusan Anda**:

- Naikkan dosis Amlodipine dari 5mg → 10mg
- Edukasi diet rendah garam
- Kontrol 1 minggu lagi

### Langkah 5: Entry Diagnosis

1. **Pilih diagnosis**: Hipertensi Esensial (I10)
2. **Klik "Uplink Diagnosa"**
3. **Verifikasi auto-fill**:
   - ICD-X: I10
   - Jenis: PRIMER
   - Kasus: **LAMA** (visitCount > 1) ✅
   - Prognosis: **Dubia Ad Sanam/Bonam** (karena deteriorating tapi moderate risk)
   - Penyakit Kronis: **Hipertensi** ✅ (auto-checked)

### Langkah 6: Entry Resep

1. **Pilih obat**: Amlodipine 10mg (dosis dinaikkan)
2. **Uplink Resep**
3. **Simpan**

### Langkah 7: Dokumentasi

**Catat di rekam medis**:

> "TD meningkat dari 140/90 → 160/95. CDSS mendeteksi trajektori deteriorating (AMBER). Keputusan: naikkan Amlodipine 5mg → 10mg. Kontrol 1 minggu."

---

## Skenario 3: Kasus dengan Red Flag

### Konteks Klinis

**Pasien**: Tn. C, 60 tahun, nyeri dada  
**Tujuan**: Deteksi red flag, escalation protocol

### Langkah 1: Input Data

1. **TTV**:
   - TD: 90/60 mmHg (hipotensi)
   - Nadi: 110 x/menit (takikardi)
   - Suhu: 36.5°C
   - RR: 24 x/menit
   - SpO2: 94% (borderline)
2. **Keluhan**: "Nyeri dada kiri menjalar ke lengan, keringat dingin"

### Langkah 2: Red Flag Detection

Sistem **LANGSUNG** menampilkan alert:

> 🔴 **RED FLAG: RUJUKAN SEGERA DIREKOMENDASIKAN**
>
> **Kondisi Terdeteksi**: Kemungkinan Sindrom Koroner Akut
>
> **Kriteria**:
>
> - Nyeri dada dengan karakteristik cardiac
> - Hipotensi (TD sistolik < 100 mmHg)
> - Takikardi (Nadi > 100 x/menit)
>
> **Tindakan**: Stabilisasi (O2, akses IV, EKG jika tersedia) dan rujuk SEGERA ke RS dengan fasilitas Cath Lab.

### Langkah 3: Clinical Action

**JANGAN** lanjutkan ke diagnosis diferensial. **SEGERA**:

1. ✅ Pasang O2 nasal kanul 3-4 lpm
2. ✅ Pasang akses IV
3. ✅ Berikan Aspirin 160mg (jika tidak ada kontraindikasi)
4. ✅ Hubungi ambulans
5. ✅ Rujuk ke RS

### Langkah 4: Dokumentasi

**Catat di rekam medis**:

> "Pasien datang dengan nyeri dada tipikal + hipotensi + takikardi. CDSS mendeteksi red flag Sindrom Koroner Akut. Tindakan: stabilisasi awal (O2, IV, Aspirin 160mg) dan rujuk SEGERA ke RSUD."

> [!CAUTION]
> **Red Flag = Prioritas Tertinggi**
>
> Jika red flag muncul, **HENTIKAN** workflow normal dan fokus pada stabilisasi + rujukan. Jangan buang waktu untuk entry diagnosis lengkap di ePuskesmas.

---

## Skenario 4: Kasus dengan Drug-Drug Interaction

### Konteks Klinis

**Pasien**: Ny. D, 50 tahun, DM + Hipertensi  
**Obat saat ini**: Metformin, Captopril  
**Keluhan baru**: Nyeri sendi

### Langkah 1: Entry Diagnosis

Diagnosis: Arthritis (M19.9)

### Langkah 2: Pilih Obat

Anda ingin meresepkan **Ibuprofen 400mg** untuk nyeri sendi.

### Langkah 3: DDI Alert

Sistem menampilkan warning:

> ⚠️ **INTERAKSI OBAT TERDETEKSI**
>
> **Obat**: Ibuprofen + Captopril
>
> **Severity**: **MAJOR**
>
> **Deskripsi**: NSAID dapat mengurangi efek antihipertensi ACE inhibitor dan meningkatkan risiko gagal ginjal akut.
>
> **Rekomendasi**:
>
> - Hindari kombinasi jika memungkinkan
> - Alternatif: Paracetamol untuk nyeri
> - Jika tetap diberikan: Monitor fungsi ginjal dan TD ketat

### Langkah 4: Clinical Decision

**Keputusan Anda**: Ganti Ibuprofen → **Paracetamol 500mg**

1. **Batalkan** Ibuprofen
2. **Pilih** Paracetamol
3. **Uplink Resep**
4. **Simpan**

### Langkah 5: Dokumentasi

**Catat**:

> "Awalnya akan meresepkan Ibuprofen, tapi CDSS mendeteksi interaksi MAJOR dengan Captopril. Keputusan: ganti dengan Paracetamol 500mg."

---

## Do & Don't List

### ✅ DO (Lakukan)

- ✅ **Verifikasi** setiap data yang di-auto-fill sebelum simpan
- ✅ **Gunakan clinical judgment** — sistem hanya referensi
- ✅ **Dokumentasikan** keputusan Anda di rekam medis
- ✅ **Laporkan** bug atau error ke IT support
- ✅ **Update** data TTV jika ada perubahan
- ✅ **Perhatikan** red flags dan traffic light
- ✅ **Review** DDI warnings sebelum resep obat
- ✅ **Simpan** data di ePuskesmas sesegera mungkin (jangan delay >24 jam)

### ❌ DON'T (Jangan)

- ❌ **Jangan** percaya 100% pada saran sistem tanpa verifikasi
- ❌ **Jangan** abaikan red flags tanpa evaluasi klinis
- ❌ **Jangan** gunakan untuk kasus emergensi yang butuh tindakan segera
- ❌ **Jangan** screenshot Side Panel yang berisi data pasien
- ❌ **Jangan** share data diagnosis ke pihak tidak berwenang
- ❌ **Jangan** gunakan untuk diagnosis penyakit langka (di luar 159 KB)
- ❌ **Jangan** skip verifikasi data auto-fill
- ❌ **Jangan** lupa dokumentasikan keputusan Anda

---

## Checklist Pasca-Penggunaan

Setelah selesai melayani pasien, pastikan:

- [ ] Semua data sudah tersimpan di ePuskesmas
- [ ] Diagnosis sudah diverifikasi dan sesuai clinical judgment
- [ ] Resep sudah dicek untuk DDI
- [ ] Jika ada red flag, sudah ditindaklanjuti (rujuk/monitor)
- [ ] Dokumentasi klinis sudah lengkap
- [ ] Pasien sudah diberi edukasi
- [ ] Follow-up sudah dijadwalkan (jika perlu)

---

## Tips untuk Pengguna Baru

### 1. Mulai dari Kasus Sederhana

**Minggu pertama**: Gunakan untuk kasus rutin (ISPA, Hipertensi, DM)  
**Minggu kedua**: Mulai gunakan untuk kasus lebih kompleks  
**Minggu ketiga**: Sudah terbiasa, workflow lebih cepat

### 2. Jangan Terburu-buru

**Fase learning**: Butuh waktu ~2-3 minggu untuk terbiasa  
**Setelah terbiasa**: Hemat waktu 3-5 menit per pasien

### 3. Manfaatkan Trajektori untuk Pasien Lama

Trajektori paling berguna untuk:

- Pasien dengan penyakit kronis
- Pasien dengan riwayat kunjungan >3x
- Deteksi perburukan kondisi

### 4. Percaya Clinical Judgment Anda

Jika saran sistem tidak masuk akal → **abaikan**.  
Anda adalah dokter, sistem hanya alat bantu.

### 5. Laporkan Feedback

Jika menemukan:

- Diagnosis yang tidak relevan
- Red flag false positive
- Bug atau error
- Saran improvement

→ Laporkan ke IT support untuk perbaikan sistem.

---

## Troubleshooting Cepat

| Masalah                 | Solusi Cepat                                         |
| ----------------------- | ---------------------------------------------------- |
| Side Panel tidak muncul | Refresh halaman atau klik ikon ekstensi              |
| Uplink gagal            | Refresh halaman, tunggu form fully loaded, coba lagi |
| Data hilang             | Input ulang (data tidak dapat di-recover)            |
| Diagnosis tidak relevan | Perbaiki input keluhan, tambahkan detail             |
| Red flag false positive | Verifikasi TTV, evaluasi klinis, abaikan jika stabil |
| Sistem lambat           | Tutup tab lain, clear cache, restart browser         |

---

## Kontak Dukungan

**Bantuan Teknis**: support@sentra.id  
**Feedback**: feedback@sentra.id  
**Bug Report**: bugs@sentra.id

---

## Disclaimer

> [!CAUTION]
> **Sentra Assist adalah alat bantu, BUKAN pengganti dokter.**
>
> Keputusan akhir diagnosis, terapi, dan tindakan medis sepenuhnya berada di tangan dokter yang merawat. Dokter bertanggung jawab penuh atas semua aspek medikolegal terkait perawatan pasien.

---

**Selamat menggunakan Sentra Assist!**

Jika ada pertanyaan, jangan ragu untuk menghubungi tim support kami.

---

**Dokumen ini disusun oleh**: dr. Ferdi Iskandar  
**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Untuk**: Puskesmas Kota Kediri, Dinas Kesehatan Kota Kediri
