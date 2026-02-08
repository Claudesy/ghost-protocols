import type { MedicationRecommendation } from '@/types/api';
import type {
  AnamnesaFillPayload,
  AturanPakai,
  DiagnosaFillPayload,
  RMETransferPayload,
  RMETransferReasonCode,
  ResepFillPayload,
} from '@/utils/types';

type TriadRole = 'utama' | 'adjuvant' | 'vitamin';

export interface RMETransferMapperInput {
  keluhanUtama: string;
  keluhanTambahan?: string;
  patientGender: 'L' | 'P';
  pregnancyStatus?: boolean | null;
  allergies?: string[];
  vitalSigns?: {
    sbp?: number;
    dbp?: number;
    hr?: number;
    rr?: number;
    temp?: number;
    glucose?: number;
  };
  diagnosis?: Partial<DiagnosaFillPayload> | null;
  medications?: MedicationRecommendation[];
  tenagaMedis?: {
    dokterNama?: string;
    perawatNama?: string;
    ruangan?: string;
  };
}

export interface PregnancyMappingResult {
  is_pregnant: boolean;
  reasonCode?: RMETransferReasonCode;
}

const VITAMIN_KEYWORDS = ['vitamin', 'ascorb', 'multivit', 'b complex', 'zinc'];
const ADJUVANT_KEYWORDS = [
  'paracetamol',
  'acetaminophen',
  'cetirizine',
  'ctm',
  'domperidone',
  'ambroxol',
  'oralit',
  'omeprazole',
  'attapulgite',
];

const ATURAN_PAKAI_MAP: Record<string, AturanPakai> = {
  'sebelum makan': '1',
  'sesudah makan': '2',
  'pemakaian luar': '3',
  'jika diperlukan': '4',
  'saat makan': '5',
};

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

function classifyRole(medicationName: string): TriadRole {
  const name = normalizeText(medicationName);
  if (VITAMIN_KEYWORDS.some((keyword) => name.includes(keyword))) return 'vitamin';
  if (ADJUVANT_KEYWORDS.some((keyword) => name.includes(keyword))) return 'adjuvant';
  return 'utama';
}

function mapAturanPakai(value: string): AturanPakai {
  const normalized = normalizeText(value);
  return ATURAN_PAKAI_MAP[normalized] || '2';
}

function estimateQuantity(dosis: string, durasi?: string): number {
  const doseMatch = dosis.match(/(\d+)\s*x\s*(\d+)?/i);
  const timesPerDay = doseMatch ? Math.max(1, Number(doseMatch[1])) : 2;
  const unitPerDose = doseMatch?.[2] ? Math.max(1, Number(doseMatch[2])) : 1;

  const durationMatch = (durasi || '').match(/(\d+)\s*(hari|day)/i);
  const days = durationMatch ? Math.max(1, Number(durationMatch[1])) : 3;

  const estimated = timesPerDay * unitPerDose * days;
  return Math.min(60, Math.max(1, estimated));
}

function normalizeAllergies(allergies: string[]): AnamnesaFillPayload['alergi'] {
  const result: AnamnesaFillPayload['alergi'] = {
    obat: [],
    makanan: [],
    udara: [],
    lainnya: [],
  };

  for (const rawItem of allergies) {
    const item = rawItem.trim();
    if (!item || item.toLowerCase() === 'tidak ada') continue;

    if (item.toLowerCase() === 'obat') {
      result.obat.push('Alergi obat (dilaporkan)');
      continue;
    }
    if (item.toLowerCase() === 'makanan') {
      result.makanan.push('Alergi makanan (dilaporkan)');
      continue;
    }
    if (item.toLowerCase().includes('debu') || item.toLowerCase().includes('udara')) {
      result.udara.push(item);
      continue;
    }
    result.lainnya.push(item);
  }

  return result;
}

export function mapPregnancyStatusToBoolean(
  patientGender: 'L' | 'P',
  pregnancyStatus?: boolean | null,
): PregnancyMappingResult {
  if (patientGender === 'L') {
    return { is_pregnant: false };
  }
  if (typeof pregnancyStatus === 'boolean') {
    return { is_pregnant: pregnancyStatus };
  }
  return {
    is_pregnant: false,
    reasonCode: 'PREGNANCY_UNKNOWN_DEFAULT_FALSE',
  };
}

function buildAnamnesaPayload(input: RMETransferMapperInput): {
  payload: AnamnesaFillPayload;
  reasonCodes: RMETransferReasonCode[];
} {
  const reasonCodes: RMETransferReasonCode[] = [];
  const pregnancy = mapPregnancyStatusToBoolean(input.patientGender, input.pregnancyStatus);
  if (pregnancy.reasonCode) reasonCodes.push(pregnancy.reasonCode);

  const keluhanUtama = input.keluhanUtama.trim() || 'Keluhan belum diisi';
  const vital = input.vitalSigns;

  const payload: AnamnesaFillPayload = {
    keluhan_utama: keluhanUtama,
    keluhan_tambahan: input.keluhanTambahan?.trim() || keluhanUtama,
    lama_sakit: { thn: 0, bln: 0, hr: 1 },
    is_pregnant: pregnancy.is_pregnant,
    alergi: normalizeAllergies(input.allergies || []),
    ...(vital
      ? {
          vital_signs: {
            tekanan_darah_sistolik: vital.sbp || 0,
            tekanan_darah_diastolik: vital.dbp || 0,
            nadi: vital.hr || 0,
            respirasi: vital.rr || 0,
            suhu: vital.temp || 0,
            gula_darah: vital.glucose,
            kesadaran: 'COMPOS MENTIS' as const,
          },
        }
      : {}),
    ...(input.tenagaMedis?.dokterNama || input.tenagaMedis?.perawatNama
      ? {
          tenaga_medis: {
            dokter_nama: input.tenagaMedis?.dokterNama || '',
            perawat_nama: input.tenagaMedis?.perawatNama || '',
          },
        }
      : {}),
  };

  return { payload, reasonCodes };
}

function buildDiagnosaPayload(
  diagnosis?: Partial<DiagnosaFillPayload> | null,
): DiagnosaFillPayload | null {
  if (!diagnosis?.icd_x?.trim()) return null;
  return {
    icd_x: diagnosis.icd_x.trim().toUpperCase(),
    nama: diagnosis.nama?.trim() || diagnosis.icd_x.trim().toUpperCase(),
    jenis: diagnosis.jenis || 'PRIMER',
    kasus: diagnosis.kasus || 'BARU',
    prognosa: diagnosis.prognosa || '',
    penyakit_kronis: diagnosis.penyakit_kronis || [],
  };
}

function buildResepPayload(input: RMETransferMapperInput): {
  payload: ResepFillPayload | null;
  reasonCodes: RMETransferReasonCode[];
  triadMissingRoles: TriadRole[];
} {
  const reasonCodes: RMETransferReasonCode[] = [];
  const medications = input.medications || [];
  const safeMedications = medications.filter((item) => item.safety_check !== 'contraindicated');

  if (medications.length > 0 && safeMedications.length === 0) {
    reasonCodes.push('RESEP_EMPTY_AFTER_SAFETY');
  }
  if (safeMedications.length === 0) {
    reasonCodes.push('RESEP_PAYLOAD_EMPTY');
    return { payload: null, reasonCodes, triadMissingRoles: ['utama', 'adjuvant', 'vitamin'] };
  }

  const roles = {
    utama: 0,
    adjuvant: 0,
    vitamin: 0,
  };

  const mappedRows: ResepFillPayload['medications'] = safeMedications.slice(0, 5).map((med) => {
    const role = classifyRole(med.nama_obat);
    roles[role] += 1;
    const estimatedQty = estimateQuantity(med.dosis, med.durasi);
    return {
      racikan: '0',
      jumlah_permintaan: estimatedQty,
      nama_obat: med.nama_obat,
      jumlah: estimatedQty,
      signa: med.dosis || '1x1',
      aturan_pakai: mapAturanPakai(med.aturan_pakai),
      keterangan: med.rationale || '',
    };
  });

  const triadMissingRoles = (Object.keys(roles) as TriadRole[]).filter((key) => roles[key] === 0);
  if (triadMissingRoles.length > 0) {
    reasonCodes.push('RESEP_TRIAD_INCOMPLETE');
  }

  const allergySummary = normalizeAllergies(input.allergies || []);
  const allergyText = [...allergySummary.obat, ...allergySummary.makanan, ...allergySummary.udara]
    .filter(Boolean)
    .join(', ');
  const timestampToken = new Date().toISOString().replace(/\D/g, '').slice(0, 14);

  return {
    payload: {
      static: {
        no_resep: `AUTO-${timestampToken}`,
        alergi: allergyText,
      },
      ajax: {
        ruangan: input.tenagaMedis?.ruangan || 'POLI UMUM',
        dokter: input.tenagaMedis?.dokterNama || '',
        perawat: input.tenagaMedis?.perawatNama || '',
      },
      medications: mappedRows,
      prioritas: '0',
    },
    reasonCodes,
    triadMissingRoles,
  };
}

export function buildRMETransferPayload(input: RMETransferMapperInput): {
  payload: RMETransferPayload;
  reasonCodes: RMETransferReasonCode[];
} {
  const reasonCodes = new Set<RMETransferReasonCode>();
  const anamnesa = buildAnamnesaPayload(input);
  anamnesa.reasonCodes.forEach((code) => reasonCodes.add(code));

  const diagnosa = buildDiagnosaPayload(input.diagnosis);
  if (!diagnosa) reasonCodes.add('DIAGNOSA_PAYLOAD_EMPTY');

  const resep = buildResepPayload(input);
  resep.reasonCodes.forEach((code) => reasonCodes.add(code));

  const payload: RMETransferPayload = {
    anamnesa: anamnesa.payload,
    diagnosa,
    resep: resep.payload,
    meta: {
      reasonCodes: Array.from(reasonCodes),
      triadComplete: resep.triadMissingRoles.length === 0,
      triadMissingRoles: resep.triadMissingRoles,
    },
  };

  return {
    payload,
    reasonCodes: Array.from(reasonCodes),
  };
}
