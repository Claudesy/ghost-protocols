# Sentra Assist — Panduan Keamanan dan Tanggung Jawab

**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Penulis**: dr. Ferdi Iskandar  
**Target Pembaca**: Legal, Regulator, Pimpinan Fasilitas, Dokter

---

## Prinsip Assistive AI

### Definisi

Sentra Assist adalah **Assistive AI**, yaitu sistem kecerdasan buatan yang:

- ✅ **Membantu** dokter dalam pengambilan keputusan
- ✅ **Memberikan saran** berdasarkan evidence
- ✅ **Mendeteksi** risiko dan red flags
- ❌ **TIDAK** membuat keputusan final secara otonom
- ❌ **TIDAK** menggantikan penilaian klinis dokter

### Perbedaan dengan Autonomous AI

| Aspek               | Assistive AI (Sentra Assist) | Autonomous AI |
| ------------------- | ---------------------------- | ------------- |
| **Keputusan Final** | Dokter                       | Sistem        |
| **Tanggung Jawab**  | Dokter                       | Sistem        |
| **Supervisi**       | Wajib                        | Tidak wajib   |
| **Verifikasi**      | Wajib                        | Opsional      |
| **Accountability**  | Dokter                       | Sistem        |

> [!IMPORTANT]
> **Sentra Assist adalah Assistive AI, BUKAN Autonomous AI.**
>
> Dokter **WAJIB** memverifikasi setiap saran sistem sebelum diterapkan pada pasien.

---

## Model Human-in-the-Loop

### Prinsip Kerja

```
┌─────────────────────────────────────────┐
│  HUMAN (Dokter) = Decision Maker        │
│  AI (Sentra Assist) = Advisor           │
└─────────────────────────────────────────┘

Alur Keputusan:
1. AI memberikan saran
2. Dokter mengevaluasi saran
3. Dokter membuat keputusan final
4. Dokter bertanggung jawab penuh
```

### Implementasi

1. **Setiap saran sistem** harus di-review oleh dokter
2. **Tidak ada auto-execute** — Sistem tidak pernah melakukan tindakan tanpa konfirmasi dokter
3. **Verifikasi wajib** — Dokter harus verifikasi data yang di-auto-fill sebelum simpan
4. **Override capability** — Dokter dapat mengabaikan saran sistem kapan saja
5. **Dokumentasi wajib** — Dokter harus mendokumentasikan keputusan yang berbeda dari saran sistem

---

## Clinical Disclaimer

> [!CAUTION]
> **DISCLAIMER KLINIS RESMI**
>
> Sentra Assist adalah alat bantu keputusan klinis (Clinical Decision Support System). Sistem ini **TIDAK** menggantikan penilaian klinis dokter.
>
> ### Tanggung Jawab Dokter
>
> Dokter yang menggunakan Sentra Assist bertanggung jawab penuh atas:
>
> - Verifikasi akurasi data yang di-auto-fill oleh sistem
> - Keputusan diagnosis final
> - Pemilihan terapi dan obat
> - Keputusan rujukan
> - Semua aspek medikolegal terkait perawatan pasien
>
> ### Batasan Tanggung Jawab Sistem
>
> Pengembang dan operator sistem **TIDAK** bertanggung jawab atas:
>
> - Kesalahan diagnosis akibat ketergantungan berlebihan pada sistem
> - Kerugian pasien akibat misuse atau abuse sistem
> - Kegagalan teknis sistem (downtime, bug, error)
> - Ketidakakuratan data atau saran yang diberikan sistem
>
> ### Kewajiban Pengguna
>
> Dengan menggunakan Sentra Assist, dokter **SETUJU** untuk:
>
> - Memverifikasi setiap saran sistem sebelum diterapkan
> - Menggunakan clinical judgment sebagai keputusan final
> - Mendokumentasikan alasan jika tidak mengikuti saran sistem
> - Melaporkan error atau ketidakakuratan sistem ke IT support

---

## Risiko Misuse dan Mitigasi

### Risiko 1: Over-Reliance (Ketergantungan Berlebihan)

**Deskripsi**: Dokter terlalu percaya pada saran sistem tanpa verifikasi

**Dampak**:

- Missed diagnosis pada kasus kompleks
- Kesalahan terapi
- Kerugian pasien

**Mitigasi**:

1. ✅ **Training wajib** sebelum menggunakan sistem
2. ✅ **Reminder** di UI: "Verifikasi setiap saran"
3. ✅ **Confidence score** untuk setiap saran (0-100%)
4. ✅ **Dokumentasi wajib** jika mengikuti saran sistem
5. ✅ **Audit trail** untuk monitoring

### Risiko 2: Misinterpretation (Salah Interpretasi)

**Deskripsi**: Dokter salah memahami saran atau confidence score

**Dampak**:

- Keputusan klinis yang tidak tepat
- False sense of security

**Mitigasi**:

1. ✅ **User Guide** dengan contoh kasus nyata
2. ✅ **Interpretasi confidence score** di dokumentasi
3. ✅ **Reasoning** untuk setiap saran diagnosis
4. ✅ **Red flags** ditampilkan dengan jelas
5. ✅ **Training** interpretasi hasil AI

### Risiko 3: Input Error (Kesalahan Input)

**Deskripsi**: Data TTV atau keluhan salah input → saran salah

**Dampak**:

- Saran diagnosis tidak relevan
- Red flags false positive/negative

**Mitigasi**:

1. ✅ **Validasi input** di UI (range check untuk TTV)
2. ✅ **Konfirmasi** sebelum submit data
3. ✅ **Review data** sebelum analisis
4. ✅ **Edit capability** untuk koreksi data
5. ✅ **Warning** jika data di luar range normal

### Risiko 4: Technical Failure (Kegagalan Teknis)

**Deskripsi**: Sistem down, bug, atau error

**Dampak**:

- Workflow terganggu
- Data hilang
- Saran tidak akurat

**Mitigasi**:

1. ✅ **Fallback manual** — Dokter tetap bisa bekerja tanpa sistem
2. ✅ **Local storage** — Data tersimpan lokal (tidak hilang jika server down)
3. ✅ **Error handling** — Error ditampilkan dengan jelas
4. ✅ **IT support** — Hotline untuk troubleshooting
5. ✅ **Backup workflow** — Prosedur manual jika sistem down

### Risiko 5: Privacy Breach (Pelanggaran Privasi)

**Deskripsi**: Data pasien bocor atau disalahgunakan

**Dampak**:

- Pelanggaran privasi pasien
- Sanksi legal
- Kehilangan kepercayaan

**Mitigasi**:

1. ✅ **Local storage only** — Data tidak dikirim ke server eksternal
2. ✅ **Anonymization** — PII dihapus sebelum dikirim ke LLM
3. ✅ **Encryption** — Data di-encrypt saat transit
4. ✅ **24-hour TTL** — Data otomatis dihapus setelah 24 jam
5. ✅ **Audit trail** — Semua akses data tercatat

---

## Konsep Kill-Switch

### Definisi

**Kill-switch** adalah mekanisme untuk **menonaktifkan sistem secara cepat** jika terjadi masalah kritis.

### Trigger Kondisi

Kill-switch diaktifkan jika:

1. **Critical Bug** — Bug yang menyebabkan saran diagnosis berbahaya
2. **Data Breach** — Kebocoran data pasien terdeteksi
3. **Regulatory Issue** — Perintah dari regulator untuk menghentikan sistem
4. **Safety Concern** — Laporan multiple adverse events terkait sistem

### Mekanisme

1. **IT Admin** dapat menonaktifkan ekstensi secara remote
2. **Dinkes** dapat memerintahkan shutdown sistem
3. **Developer** dapat push update untuk disable fitur tertentu
4. **User** dapat uninstall ekstensi kapan saja

### Prosedur

```
1. Trigger terdeteksi
2. IT Admin/Dinkes membuat keputusan shutdown
3. Notifikasi dikirim ke semua pengguna
4. Sistem dinonaktifkan (ekstensi disabled)
5. Investigasi dilakukan
6. Perbaikan diimplementasikan
7. Testing dilakukan
8. Sistem diaktifkan kembali (jika aman)
```

---

## Escalation Protocol

### Kapan Harus Escalate?

Dokter **WAJIB** escalate (rujuk atau konsultasi) jika:

1. ✅ **Red flag terdeteksi** oleh sistem
2. ✅ **Confidence score sangat rendah** (<40%) untuk semua saran
3. ✅ **Gejala tidak cocok** dengan saran diagnosis
4. ✅ **Kasus terlalu kompleks** untuk layanan primer
5. ✅ **Kondisi memburuk** meskipun sudah terapi sesuai saran

### Prosedur Escalation

#### Level 1: Konsultasi Internal

**Trigger**: Confidence score 40-60%, gejala tidak jelas

**Tindakan**:

1. Konsultasi dengan dokter senior di Puskesmas
2. Review ulang anamnesis dan pemeriksaan fisik
3. Pertimbangkan pemeriksaan penunjang

#### Level 2: Rujukan Elektif

**Trigger**: Diagnosis memerlukan pemeriksaan penunjang yang tidak tersedia

**Tindakan**:

1. Stabilisasi kondisi pasien
2. Rujuk ke RS dengan surat rujukan lengkap
3. Jadwalkan follow-up

#### Level 3: Rujukan Segera

**Trigger**: Red flag terdeteksi, kondisi emergensi

**Tindakan**:

1. **Stabilisasi** (O2, IV, obat emergensi)
2. **Hubungi ambulans** atau RS tujuan
3. **Rujuk SEGERA** dengan pendampingan
4. **Dokumentasi** lengkap

---

## Audit Trail dan Accountability

### Apa yang Dicatat?

Sistem mencatat:

1. **Diagnosis Request** — Timestamp, input data, model version
2. **Suggestions Displayed** — Diagnosis yang disarankan, confidence score
3. **User Action** — Diagnosis yang dipilih, apakah mengikuti saran atau tidak
4. **Red Flags** — Red flags yang terdeteksi
5. **DDI Warnings** — Interaksi obat yang terdeteksi
6. **System Errors** — Error yang terjadi

### Tujuan Audit Trail

- ✅ **Accountability** — Siapa yang bertanggung jawab atas keputusan
- ✅ **Quality Assurance** — Monitoring akurasi sistem
- ✅ **Improvement** — Identifikasi area yang perlu diperbaiki
- ✅ **Legal Protection** — Bukti jika terjadi sengketa medikolegal

### Akses Audit Trail

- **Dokter**: Dapat melihat audit trail pasien yang dirawatnya
- **Kepala Puskesmas**: Dapat melihat audit trail semua dokter
- **Dinkes**: Dapat melihat audit trail agregat (tanpa PII)
- **Developer**: Dapat melihat audit trail untuk debugging (dengan anonymization)

### Retention Policy

- **Active Data**: 24 jam di local storage
- **Audit Log**: 1 tahun di server (anonymized)
- **Aggregated Stats**: Permanent (untuk research)

---

## Governance Framework

### Roles dan Responsibilities

| Role                   | Tanggung Jawab                                  |
| ---------------------- | ----------------------------------------------- |
| **Dokter**             | Verifikasi saran, keputusan klinis, dokumentasi |
| **Kepala Puskesmas**   | Supervisi, monitoring, quality assurance        |
| **Dinkes Kota Kediri** | Regulatory oversight, policy, governance        |
| **IT Support**         | Maintenance, troubleshooting, security          |
| **Developer**          | Development, bug fix, improvement               |

### Escalation Hierarchy

```
Level 1: Dokter → Kepala Puskesmas
Level 2: Kepala Puskesmas → Dinkes
Level 3: Dinkes → Kemenkes (jika diperlukan)
```

### Reporting Mechanism

- **Bug Report**: bugs@sentra.id
- **Safety Concern**: safety@sentra.id
- **Privacy Issue**: privacy@sentra.id
- **General Feedback**: feedback@sentra.id

---

## Compliance dan Regulasi

### Regulatory Framework

- **Kemenkes**: Prinsip CDSS sesuai rekomendasi Kemenkes
- **Dinkes Kota Kediri**: Deployment di bawah supervisi Dinkes
- **Puskesmas**: Implementasi sesuai SOP Puskesmas

### Standards dan Guidelines

- **ICD-10**: Kode diagnosis sesuai standar WHO
- **FKTP 2024**: Protokol klinis sesuai panduan FKTP
- **PERKENI 2024**: Guideline DM sesuai PERKENI
- **MSF**: Guideline klinis sesuai MSF (untuk kasus tertentu)

### Informed Consent

> [!NOTE]
> **Informed Consent Pasien**
>
> Pasien **TIDAK** perlu memberikan informed consent khusus untuk penggunaan Sentra Assist, karena:
>
> - Sistem adalah alat bantu dokter, bukan tindakan medis langsung pada pasien
> - Keputusan final tetap di tangan dokter
> - Data pasien tidak dikirim ke pihak ketiga (kecuali anonymized untuk LLM)
>
> Namun, **disarankan** untuk menginformasikan pasien bahwa:
>
> - Puskesmas menggunakan sistem CDSS untuk membantu diagnosis
> - Data pasien dilindungi dan hanya digunakan untuk keperluan medis

---

## Kesimpulan

Sentra Assist dirancang dengan **safety-first principle** dan **human-in-the-loop model**. Sistem ini adalah **alat bantu**, bukan pengganti dokter.

### Prinsip Utama

1. **Dokter tetap pengendali penuh** — Keputusan final ada pada dokter
2. **Verifikasi wajib** — Setiap saran harus diverifikasi
3. **Transparency** — Setiap saran dilengkapi reasoning
4. **Accountability** — Audit trail untuk governance
5. **Safety gates** — Multi-layer protection untuk patient safety

### Kewajiban Pengguna

- ✅ Verifikasi setiap saran sistem
- ✅ Gunakan clinical judgment
- ✅ Dokumentasikan keputusan
- ✅ Laporkan error atau safety concern
- ✅ Ikuti training dan SOP

### Hak Pengguna

- ✅ Override saran sistem kapan saja
- ✅ Akses audit trail pasien yang dirawat
- ✅ Laporkan feedback dan improvement
- ✅ Uninstall sistem kapan saja

---

**Untuk pertanyaan legal atau compliance, hubungi**:  
**Email**: legal@sentra.id  
**Phone**: [Nomor Legal Department]

---

**Dokumen ini disusun oleh**: dr. Ferdi Iskandar  
**Versi**: 1.0.0  
**Tanggal**: 11 Februari 2026  
**Untuk**: Legal, Regulator, Pimpinan Fasilitas, Dinkes Kota Kediri
