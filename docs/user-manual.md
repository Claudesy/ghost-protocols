# Panduan Pengguna Sentra Assist

**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Penulis**: dr. Ferdi Iskandar  
**Target Pengguna**: Dokter dan Tenaga Kesehatan Puskesmas Kota Kediri

---

## Daftar Isi

1. [Tentang Sentra Assist](#tentang-sentra-assist)
2. [Instalasi dan Akses](#instalasi-dan-akses)
3. [Antarmuka Pengguna](#antarmuka-pengguna)
4. [Modul-Modul Utama](#modul-modul-utama)
5. [Best Practices](#best-practices)
6. [Kesalahan Umum dan Pencegahan](#kesalahan-umum-dan-pencegahan)
7. [FAQ](#faq)

---

## Tentang Sentra Assist

### Apa itu Sentra Assist?

**Sentra Assist** adalah ekstensi Chrome yang berfungsi sebagai **Clinical Decision Support System (CDSS)** untuk sistem Rekam Medis Elektronik (RME) ePuskesmas Kota Kediri. Sistem ini dirancang untuk membantu dokter dan tenaga kesehatan dalam proses pengambilan keputusan klinis dengan menyediakan:

- Saran diagnosis diferensial berbasis gejala
- Analisis trajektori klinis pasien
- Auto-fill data untuk mempercepat entry resep dan diagnosis
- Deteksi red flags dan peringatan keamanan klinis

### Apa yang BUKAN Sentra Assist?

> [!CAUTION]
> **Sentra Assist adalah alat bantu (assistive tool), BUKAN pengganti keputusan klinis dokter.**

Sentra Assist **TIDAK**:

- Membuat diagnosis final secara otomatis
- Menggantikan penilaian klinis dokter
- Memberikan keputusan terapi tanpa supervisi
- Menjamin akurasi 100% dalam semua kasus
- Menghilangkan tanggung jawab klinis dokter

### Prinsip Kerja

Sentra Assist menggunakan **Iskandar Diagnosis Engine V1**, sebuah mesin CDSS yang menggabungkan:

1. **Deterministic Matching** — Pencocokan gejala dengan database 159 penyakit
2. **Bayesian Prior** — Bobot epidemiologi dari 45.030 kasus riil
3. **LLM Reasoning** — Penalaran AI terbatas (knowledge base only)
4. **Safety Gates** — 8 aturan keamanan untuk escalation
5. **ICD-10 Validation** — Verifikasi kode diagnosis

**Model Kerja**: Human-in-the-loop — Sistem memberikan saran, dokter yang memutuskan.

---

## Instalasi dan Akses

### Persyaratan Sistem

- **Browser**: Google Chrome versi 114 atau lebih baru
- **Sistem Operasi**: Windows, macOS, atau Linux
- **Koneksi Internet**: Diperlukan untuk akses ePuskesmas
- **Akun ePuskesmas**: Akun aktif di kotakediri.epuskesmas.id

### Langkah Instalasi

#### Metode 1: Instalasi dari File (Untuk Pilot Program)

1. **Download file ekstensi** dari administrator IT Puskesmas
2. **Buka Chrome** → Klik menu titik tiga (⋮) → **Extensions** → **Manage Extensions**
3. **Aktifkan Developer Mode** (toggle di pojok kanan atas)
4. **Klik "Load unpacked"**
5. **Pilih folder** `.output/chrome-mv3` dari file yang didownload
6. **Ekstensi terinstall** — Anda akan melihat ikon Sentra Assist di toolbar Chrome

#### Metode 2: Instalasi dari Chrome Web Store (Jika Sudah Tersedia)

1. Buka [Chrome Web Store](https://chrome.google.com/webstore)
2. Cari "Sentra Assist"
3. Klik **Add to Chrome**
4. Konfirmasi permission yang diminta
5. Ekstensi terinstall otomatis

### Verifikasi Instalasi

Setelah instalasi berhasil:

1. Buka [kotakediri.epuskesmas.id](https://kotakediri.epuskesmas.id)
2. Login dengan akun Anda
3. **Side Panel Sentra Assist** akan muncul di sisi kanan layar
4. Jika tidak muncul, klik ikon Sentra Assist di toolbar Chrome

> [!TIP]
> Jika Side Panel tidak muncul, pastikan Anda berada di halaman ePuskesmas yang benar (Anamnesis, Diagnosis, atau Resep).

---

## Antarmuka Pengguna

### Struktur Side Panel

Side Panel Sentra Assist terbagi menjadi **3 tab utama**:

```
┌─────────────────────────────────┐
│  [Anamnesis] [Diagnosis] [Resep]│
├─────────────────────────────────┤
│                                 │
│  Konten tab yang aktif          │
│                                 │
│                                 │
└─────────────────────────────────┘
```

#### Tab Anamnesis

**Fungsi**: Input data vital signs dan keluhan pasien

**Komponen**:

- Input TTV (Tekanan Darah, Nadi, Suhu, RR, SpO2)
- Input Keluhan Utama
- Input Keluhan Tambahan
- Riwayat Penyakit Kronis
- Riwayat Alergi

#### Tab Diagnosis

**Fungsi**: Saran diagnosis diferensial dan analisis trajektori

**Komponen**:

- **Clinical Trajectory** — Analisis pola vital signs
- **Differential Diagnosis** — Saran diagnosis dari Iskandar Engine
- **Red Flags** — Peringatan kondisi emergensi
- **Uplink Button** — Transfer data ke ePuskesmas

#### Tab Resep

**Fungsi**: Auto-fill data resep ke ePuskesmas

**Komponen**:

- Daftar obat yang dipilih
- Aturan pakai
- Jumlah dan satuan
- Uplink Button untuk transfer

### Indikator Status

| Indikator          | Warna     | Arti                            |
| ------------------ | --------- | ------------------------------- |
| **Profile Status** | 🟢 Hijau  | Sistem siap, data terload       |
| **Profile Status** | 🟠 Oranye | Data belum lengkap              |
| **Profile Status** | 🔴 Merah  | Error, perlu refresh            |
| **Traffic Light**  | 🟢 GREEN  | Kondisi stabil                  |
| **Traffic Light**  | 🟡 AMBER  | Monitor ketat diperlukan        |
| **Traffic Light**  | 🔴 RED    | Rujukan segera direkomendasikan |

---

## Modul-Modul Utama

### 1. Anamnesis Assistant

**Tujuan**: Mempercepat input data anamnesis dengan auto-scraping dari ePuskesmas

#### Cara Menggunakan

1. **Buka halaman Anamnesis** di ePuskesmas (`/anamnesa/create/...`)
2. **Isi data di ePuskesmas** seperti biasa (TTV, keluhan, dll)
3. **Sentra Assist otomatis membaca** data yang Anda input
4. **Data tersimpan** di Side Panel untuk digunakan di tab Diagnosis

#### Fitur Utama

- **Auto-scraping TTV** — Membaca vital signs dari form ePuskesmas
- **Persistent Storage** — Data tersimpan selama 24 jam
- **Cross-page Sync** — Data dibawa ke halaman Diagnosis dan Resep

> [!NOTE]
> Data anamnesis disimpan secara lokal di browser Anda, tidak dikirim ke server eksternal.

---

### 2. Diagnosis Differential (Iskandar Engine)

**Tujuan**: Memberikan saran diagnosis diferensial berbasis gejala dan vital signs

#### Cara Menggunakan

##### Langkah 1: Input Data (Tab Anamnesis)

1. Pastikan TTV sudah terisi
2. Isi **Keluhan Utama** (contoh: "Demam 3 hari, batuk")
3. Isi **Keluhan Tambahan** jika ada
4. Klik **"Analisis Trajektori"**

##### Langkah 2: Review Trajektori (Tab Diagnosis)

Sistem akan menampilkan:

- **Trend** — Apakah kondisi membaik, stabil, atau memburuk
- **Risk Level** — Low, Moderate, High, Critical
- **Visit Count** — Jumlah kunjungan pasien (untuk deteksi kasus BARU/LAMA)
- **Urgency** — Immediate, Urgent, Routine

> [!IMPORTANT]
> **Traffic Light System**:
>
> - 🟢 **GREEN**: Kondisi stabil, lanjutkan perawatan rutin
> - 🟡 **AMBER**: Monitor ketat, pertimbangkan pemeriksaan penunjang
> - 🔴 **RED**: Rujukan segera direkomendasikan

##### Langkah 3: Lihat Saran Diagnosis

Klik **"Lanjut ke Diagnosis Diferensial"** untuk melihat:

- **Top 5 Diagnosis** — Diurutkan berdasarkan confidence score
- **ICD-10 Code** — Kode diagnosis standar
- **Confidence Score** — Tingkat kepercayaan (0-100%)
- **Reasoning** — Alasan mengapa diagnosis ini disarankan
- **Red Flags** — Peringatan jika ada
- **Recommended Actions** — Tindakan yang direkomendasikan

##### Langkah 4: Transfer ke ePuskesmas

1. **Pilih diagnosis** yang sesuai dengan penilaian klinis Anda
2. Klik **"Uplink Diagnosa"**
3. Sistem akan auto-fill:
   - ICD-X
   - Nama Diagnosis
   - Jenis (PRIMER/SEKUNDER)
   - Kasus (BARU/LAMA)
   - Prognosis (berdasarkan trajektori)
   - Penyakit Kronis (jika terdeteksi)

> [!WARNING]
> **Selalu verifikasi** data yang di-auto-fill sebelum menyimpan di ePuskesmas. Sistem dapat salah, terutama pada kasus kompleks.

#### Interpretasi Confidence Score

| Score       | Interpretasi       | Tindakan                                  |
| ----------- | ------------------ | ----------------------------------------- |
| **80-100%** | Sangat yakin       | Pertimbangkan kuat, tapi tetap verifikasi |
| **60-79%**  | Cukup yakin        | Cocokkan dengan clinical judgment         |
| **40-59%**  | Kurang yakin       | Gunakan sebagai referensi saja            |
| **< 40%**   | Sangat tidak yakin | Abaikan atau cari second opinion          |

#### Red Flags Detection

Sistem akan otomatis mendeteksi kondisi emergensi berdasarkan:

- **Vital Signs Abnormal** (contoh: TD sistolik > 180 mmHg)
- **Gejala Kritis** (contoh: sesak napas berat, nyeri dada)
- **Kombinasi Berbahaya** (contoh: demam tinggi + penurunan kesadaran)

**Jika Red Flag terdeteksi**:

1. ⚠️ **Alert muncul** di bagian atas Side Panel
2. 🔴 **Traffic Light berubah RED**
3. 📋 **Recommended Action**: Stabilisasi dan rujuk

> [!CAUTION]
> **Red Flags adalah hard-coded rules, bukan AI prediction.** Jika muncul, segera evaluasi pasien dan pertimbangkan rujukan.

---

### 3. Prescription Auto-Fill

**Tujuan**: Mempercepat entry resep dengan auto-fill ke form ePuskesmas

#### Cara Menggunakan

1. **Buka halaman Resep** di ePuskesmas (`/resep/create/...`)
2. **Pilih obat** di Side Panel Sentra Assist (Tab Resep)
3. **Atur dosis dan aturan pakai**
4. Klik **"Uplink Resep"**
5. Sistem akan auto-fill:
   - Nama Obat (dengan autocomplete simulation)
   - Jumlah
   - Satuan
   - Aturan Pakai
   - Keterangan

> [!TIP]
> Auto-fill bekerja dengan mensimulasikan AJAX autocomplete ePuskesmas. Jika gagal, coba refresh halaman dan ulangi.

#### Fitur Drug-Drug Interaction (DDI) Check

Sistem akan otomatis mengecek interaksi obat menggunakan **DDInter 2.0** (173.000+ interaksi).

**Jika interaksi terdeteksi**:

- ⚠️ **Warning muncul** sebelum uplink
- 📋 **Severity**: Minor, Moderate, Major, Contraindicated
- 📝 **Deskripsi**: Apa yang terjadi jika obat dikombinasikan
- 💡 **Rekomendasi**: Alternatif atau monitoring yang diperlukan

**Severity Levels**:

| Level               | Arti                   | Tindakan                                   |
| ------------------- | ---------------------- | ------------------------------------------ |
| **Minor**           | Interaksi ringan       | Boleh dilanjutkan, monitor pasien          |
| **Moderate**        | Interaksi sedang       | Pertimbangkan alternatif atau adjust dosis |
| **Major**           | Interaksi berat        | Hindari kombinasi jika memungkinkan        |
| **Contraindicated** | Kontraindikasi absolut | **JANGAN** kombinasikan                    |

---

### 4. Clinical Trajectory Analysis

**Tujuan**: Menganalisis pola vital signs untuk mendeteksi perburukan atau perbaikan kondisi

#### Cara Kerja

Sistem menganalisis:

1. **Vital Signs** — TTV saat ini vs normal range
2. **Visit History** — Pola TTV dari kunjungan sebelumnya (jika ada)
3. **Chronic Diseases** — Pengaruh penyakit kronis terhadap trajektori
4. **Age & Gender** — Adjustment berdasarkan demografi

#### Output Trajektori

- **Trend**: Improving, Stable, Deteriorating
- **Risk Level**: Low, Moderate, High, Critical
- **Urgency**: Routine, Urgent, Immediate
- **Prognosis Mapping**: Sanam, Bonam, Malam, Dubia Ad Sanam/Bonam, Dubia Ad Malam

#### Kapan Menggunakan

- ✅ Pasien dengan riwayat kunjungan sebelumnya
- ✅ Pasien dengan penyakit kronis (Hipertensi, DM, dll)
- ✅ Pasien dengan TTV abnormal
- ❌ Pasien baru tanpa data historis (trajektori kurang akurat)

---

## Best Practices

### 1. Workflow Optimal

**Urutan penggunaan yang direkomendasikan**:

```
1. Buka ePuskesmas → Login
2. Buka halaman Anamnesis
3. Isi TTV dan keluhan di ePuskesmas
4. Sentra Assist otomatis membaca data
5. Klik "Analisis Trajektori" di Side Panel
6. Review trajektori dan red flags
7. Klik "Lanjut ke Diagnosis Diferensial"
8. Review saran diagnosis
9. Pilih diagnosis yang sesuai clinical judgment
10. Klik "Uplink Diagnosa"
11. Verifikasi data di ePuskesmas
12. Simpan diagnosis
13. Lanjut ke halaman Resep
14. Pilih obat di Side Panel
15. Klik "Uplink Resep"
16. Verifikasi data resep
17. Simpan resep
```

### 2. Kapan Menggunakan Sentra Assist

✅ **Gunakan untuk**:

- Kasus rutin dengan gejala jelas
- Pasien dengan riwayat kunjungan
- Mempercepat entry data resep
- Deteksi red flags awal
- Referensi diagnosis diferensial

❌ **JANGAN gunakan untuk**:

- Kasus emergensi yang memerlukan tindakan segera
- Diagnosis penyakit langka (di luar 159 KB)
- Pasien dengan gejala sangat tidak spesifik
- Kasus medikolegal yang sensitif
- Menggantikan clinical judgment Anda

### 3. Verifikasi Data

> [!IMPORTANT]
> **Selalu verifikasi** setiap data yang di-auto-fill oleh sistem sebelum menyimpan di ePuskesmas.

**Checklist Verifikasi**:

- [ ] ICD-10 code sesuai dengan diagnosis klinis
- [ ] Nama diagnosis benar
- [ ] Jenis (PRIMER/SEKUNDER) sesuai
- [ ] Kasus (BARU/LAMA) sesuai riwayat pasien
- [ ] Prognosis masuk akal
- [ ] Penyakit kronis tercentang dengan benar
- [ ] Obat dan dosis sesuai indikasi
- [ ] Tidak ada interaksi obat berbahaya

### 4. Dokumentasi Klinis

**Catat di rekam medis** jika:

- Anda menggunakan saran diagnosis dari Sentra Assist
- Anda **tidak** mengikuti saran sistem (dan alasannya)
- Red flag terdeteksi tapi Anda memutuskan tidak rujuk (dan alasannya)

**Contoh dokumentasi**:

> "Diagnosis diferensial dari CDSS: ISPA (ICD J06.9, confidence 85%). Setelah evaluasi klinis, diagnosis dikonfirmasi sebagai Faringitis Akut (J02.9). Tidak ada red flags terdeteksi."

### 5. Keamanan Data

- ✅ Data pasien **hanya tersimpan lokal** di browser Anda
- ✅ Data **dihapus otomatis** setelah 24 jam
- ✅ Tidak ada data dikirim ke server eksternal (kecuali untuk LLM reasoning, yang sudah di-anonymize)
- ❌ **JANGAN** screenshot Side Panel yang berisi data pasien
- ❌ **JANGAN** share data diagnosis ke pihak tidak berwenang

---

## Kesalahan Umum dan Pencegahan

### 1. Auto-Fill Gagal

**Gejala**: Klik "Uplink" tapi data tidak terisi di ePuskesmas

**Penyebab**:

- Form ePuskesmas belum fully loaded
- Selector field berubah (update ePuskesmas)
- Browser extension conflict

**Solusi**:

1. Refresh halaman ePuskesmas
2. Tunggu hingga form fully loaded (spinner hilang)
3. Coba uplink lagi
4. Jika masih gagal, isi manual dan laporkan ke IT support

### 2. Diagnosis Tidak Relevan

**Gejala**: Saran diagnosis tidak sesuai dengan gejala pasien

**Penyebab**:

- Input keluhan kurang spesifik
- Gejala tidak ada di knowledge base (159 penyakit)
- Kasus terlalu kompleks untuk sistem

**Solusi**:

1. **Perbaiki input keluhan** — Gunakan istilah medis yang jelas
2. **Tambahkan keluhan tambahan** — Semakin banyak data, semakin akurat
3. **Gunakan clinical judgment** — Sistem hanya referensi, bukan keputusan final
4. Jika diagnosis tetap tidak relevan, **abaikan saran sistem**

### 3. Red Flag False Positive

**Gejala**: Red flag muncul padahal kondisi pasien stabil

**Penyebab**:

- Input TTV salah (typo)
- Threshold red flag terlalu sensitif
- Konteks klinis tidak tertangkap sistem

**Solusi**:

1. **Verifikasi TTV** — Pastikan input benar
2. **Evaluasi klinis pasien** — Jika stabil, abaikan red flag
3. **Dokumentasikan** keputusan Anda di rekam medis
4. Laporkan false positive ke developer untuk improvement

### 4. Side Panel Tidak Muncul

**Gejala**: Setelah login ePuskesmas, Side Panel tidak muncul

**Penyebab**:

- Ekstensi belum terinstall
- Ekstensi di-disable
- Anda tidak berada di halaman yang didukung

**Solusi**:

1. **Cek ekstensi** — Buka `chrome://extensions` dan pastikan Sentra Assist enabled
2. **Refresh halaman** — Tekan Ctrl+R atau F5
3. **Klik ikon ekstensi** di toolbar Chrome
4. **Pastikan URL benar** — Harus di `kotakediri.epuskesmas.id/anamnesa/...`, `/diagnosa/...`, atau `/resep/...`

### 5. Data Hilang Setelah Refresh

**Gejala**: Data yang sudah diinput hilang setelah refresh halaman

**Penyebab**:

- TTL 24 jam sudah habis
- Browser cache di-clear
- Ekstensi di-reinstall

**Solusi**:

1. **Input ulang data** — Data tidak dapat di-recover
2. **Simpan di ePuskesmas** sesegera mungkin setelah input
3. **Jangan delay** lebih dari 24 jam antara anamnesis dan diagnosis

---

## FAQ

### Umum

**Q: Apakah Sentra Assist gratis?**  
A: Ya, untuk pilot program di Puskesmas Kota Kediri. Untuk deployment di luar Kediri, hubungi administrator.

**Q: Apakah data pasien aman?**  
A: Ya. Data hanya tersimpan lokal di browser Anda dan dihapus otomatis setelah 24 jam. Untuk LLM reasoning, data di-anonymize terlebih dahulu (nama, NIK, dll dihapus).

**Q: Apakah bisa digunakan offline?**  
A: Tidak. Sentra Assist memerlukan koneksi internet untuk akses ePuskesmas dan LLM reasoning.

**Q: Apakah bisa digunakan di browser selain Chrome?**  
A: Saat ini hanya mendukung Chrome. Support untuk Edge dan Firefox dalam roadmap.

### Teknis

**Q: Kenapa confidence score rendah?**  
A: Bisa karena:

- Gejala tidak spesifik
- Penyakit tidak ada di knowledge base
- Data TTV tidak lengkap
- Kasus terlalu kompleks

**Q: Apa bedanya PRIMER dan SEKUNDER?**  
A:

- **PRIMER**: Diagnosis utama yang menjadi fokus perawatan
- **SEKUNDER**: Diagnosis penyerta atau komplikasi

Sistem otomatis set diagnosis pertama sebagai PRIMER, diagnosis kedua sebagai SEKUNDER.

**Q: Bagaimana sistem tahu kasus BARU atau LAMA?**  
A: Sistem membaca riwayat kunjungan dari ePuskesmas. Jika `visitCount > 1`, maka LAMA. Jika `visitCount = 1`, maka BARU.

**Q: Apa itu Prognosis "Dubia Ad Sanam"?**  
A: Artinya "meragukan menuju sembuh" — kondisi pasien tidak pasti, tapi cenderung membaik. Sistem mapping otomatis berdasarkan trajektori.

### Klinis

**Q: Apakah saran diagnosis bisa dipercaya 100%?**  
A: **TIDAK**. Sentra Assist adalah alat bantu, bukan pengganti dokter. Selalu gunakan clinical judgment Anda.

**Q: Bagaimana jika diagnosis sistem berbeda dengan penilaian saya?**  
A: **Ikuti penilaian klinis Anda**. Sistem hanya memberikan referensi. Dokumentasikan alasan Anda di rekam medis.

**Q: Apakah sistem bisa mendeteksi semua penyakit?**  
A: Tidak. Sistem hanya mendeteksi **159 penyakit** yang ada di knowledge base. Untuk penyakit langka atau tidak umum, sistem tidak akan memberikan saran.

**Q: Bagaimana jika red flag muncul tapi saya rasa tidak perlu rujuk?**  
A: Red flag adalah **rekomendasi**, bukan keharusan. Jika evaluasi klinis Anda menunjukkan pasien stabil, Anda boleh tidak rujuk. **Dokumentasikan** alasan Anda di rekam medis.

**Q: Apakah sistem bisa digunakan untuk anak-anak?**  
A: Ya, tapi dengan catatan:

- Sistem memiliki **pediatric dosing calculator** (dalam development)
- Threshold vital signs disesuaikan dengan usia
- **Lebih hati-hati** pada anak < 5 tahun

### Troubleshooting

**Q: Uplink gagal terus, apa yang harus dilakukan?**  
A:

1. Refresh halaman ePuskesmas
2. Logout dan login ulang
3. Clear browser cache
4. Reinstall ekstensi
5. Jika masih gagal, hubungi IT support

**Q: Sistem lambat, bagaimana cara mempercepat?**  
A:

1. Tutup tab browser yang tidak digunakan
2. Clear browser cache
3. Pastikan koneksi internet stabil
4. Restart browser

**Q: Data tidak sync antar halaman, kenapa?**  
A: Pastikan:

- Anda menggunakan **encounter ID yang sama** (pelayanan_id)
- Tidak lebih dari 24 jam antara anamnesis dan diagnosis
- Ekstensi tidak di-disable atau di-reinstall

---

## Disclaimer

> [!CAUTION]
> **DISCLAIMER KLINIS**
>
> Sentra Assist adalah alat bantu keputusan klinis (Clinical Decision Support System). Sistem ini **TIDAK** menggantikan penilaian klinis dokter. Keputusan akhir diagnosis, terapi, dan tindakan medis sepenuhnya berada di tangan dokter yang merawat.
>
> Dokter bertanggung jawab penuh atas:
>
> - Verifikasi akurasi data yang di-auto-fill
> - Keputusan diagnosis final
> - Pemilihan terapi dan obat
> - Keputusan rujukan
> - Semua aspek medikolegal terkait perawatan pasien
>
> Pengembang dan operator sistem **TIDAK** bertanggung jawab atas:
>
> - Kesalahan diagnosis akibat ketergantungan pada sistem
> - Kerugian pasien akibat misuse sistem
> - Kegagalan teknis sistem
> - Ketidakakuratan data atau saran yang diberikan sistem

---

## Kontak dan Dukungan

**Untuk bantuan teknis**:

- Email: support@sentra.id
- WhatsApp: [Nomor IT Support Puskesmas]

**Untuk feedback dan saran**:

- Email: feedback@sentra.id

**Untuk pelaporan bug atau error**:

- Email: bugs@sentra.id
- Sertakan screenshot dan deskripsi error

---

**Dokumen ini disusun oleh**: dr. Ferdi Iskandar  
**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Untuk**: Puskesmas Kota Kediri, Dinas Kesehatan Kota Kediri
