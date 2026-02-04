/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

import { useState } from 'react';
import { Plus, Trash2, Zap, Check, X, AlertCircle } from 'lucide-react';
import { sendMessage } from '@/utils/messaging';
import type { ResepFillPayload, FillResult, AturanPakai, Prioritas } from '@/utils/types';

interface MedicationRow {
  id: string;
  racikan: string;
  jumlah_permintaan: number;
  nama_obat: string;
  jumlah: number;
  signa: string;
  aturan_pakai: AturanPakai;
  keterangan: string;
}

interface FillStatus {
  loading: boolean;
  result: FillResult | null;
  error: string | null;
}

const ATURAN_PAKAI_OPTIONS: Record<AturanPakai, string> = {
  '1': 'Sebelum Makan',
  '2': 'Sesudah Makan',
  '3': 'Pemakaian Luar',
  '4': 'Jika Diperlukan',
  '5': 'Saat Makan',
};

const createEmptyMedication = (): MedicationRow => ({
  id: crypto.randomUUID(),
  racikan: '',
  jumlah_permintaan: 0,
  nama_obat: '',
  jumlah: 1,
  signa: '',
  aturan_pakai: '2',
  keterangan: '',
});

/**
 * ResepForm
 * 
 * @remarks
 * TODO: Add detailed description, parameters, and examples
 * Auto-generated on 2026-02-04
 */

export function ResepForm() {
  const [medications, setMedications] = useState<MedicationRow[]>([createEmptyMedication()]);
  const [alergi, setAlergi] = useState('');
  const [ruangan, setRuangan] = useState('APOTEK');
  const [dokter, setDokter] = useState('');
  const [perawat, setPerawat] = useState('');
  const [prioritas, setPrioritas] = useState<Prioritas>('0');
  const [status, setStatus] = useState<FillStatus>({ loading: false, result: null, error: null });

  const addMedication = () => {
    setMedications([...medications, createEmptyMedication()]);
  };

  const removeMedication = (id: string) => {
    if (medications.length > 1) {
      setMedications(medications.filter((m) => m.id !== id));
    }
  };

  const updateMedication = (id: string, field: keyof MedicationRow, value: string | number) => {
    setMedications(
      medications.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handleFill = async () => {
    setStatus({ loading: true, result: null, error: null });

    const payload: ResepFillPayload = {
      static: {
        no_resep: '',
        alergi,
      },
      ajax: {
        ruangan,
        dokter,
        perawat,
      },
      medications: medications.map((m) => ({
        racikan: m.racikan,
        jumlah_permintaan: m.jumlah_permintaan,
        nama_obat: m.nama_obat,
        jumlah: m.jumlah,
        signa: m.signa,
        aturan_pakai: m.aturan_pakai,
        keterangan: m.keterangan,
      })),
      prioritas,
    };

    try {
      console.log('[ResepForm] Sending fillResep:', payload);
      const result = await sendMessage('fillResep', payload);
      console.log('[ResepForm] Fill result:', result);
      setStatus({ loading: false, result, error: null });
    } catch (error) {
      console.error('[ResepForm] Fill error:', error);
      setStatus({ loading: false, result: null, error: String(error) });
    }
  };

  return (
    <div className="space-y-4">
      {/* AJAX Fields */}
      <div className="neu-card p-4 space-y-3">
        <p className="text-caption text-muted mb-2">Provider Info</p>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Ruangan"
            value={ruangan}
            onChange={(e) => setRuangan(e.target.value)}
            className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
          />
          <input
            type="text"
            placeholder="Dokter"
            value={dokter}
            onChange={(e) => setDokter(e.target.value)}
            className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
          />
        </div>
        <input
          type="text"
          placeholder="Perawat"
          value={perawat}
          onChange={(e) => setPerawat(e.target.value)}
          className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
        />
        <textarea
          placeholder="Alergi (pisah dengan koma)"
          value={alergi}
          onChange={(e) => setAlergi(e.target.value)}
          className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg resize-none"
          rows={2}
        />
      </div>

      {/* Medications */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <p className="text-caption text-muted">Medications</p>
          <button
            onClick={addMedication}
            className="neu-circle-btn w-8 h-8 flex items-center justify-center"
          >
            <Plus className="w-4 h-4 text-pulse-500" />
          </button>
        </div>

        {medications.map((med, idx) => (
          <div key={med.id} className="neu-card p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-small text-muted">Obat #{idx + 1}</span>
              {medications.length > 1 && (
                <button
                  onClick={() => removeMedication(med.id)}
                  className="text-critical hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <input
              type="text"
              placeholder="Nama Obat *"
              value={med.nama_obat}
              onChange={(e) => updateMedication(med.id, 'nama_obat', e.target.value)}
              className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
            />

            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Jumlah"
                value={med.jumlah || ''}
                onChange={(e) => updateMedication(med.id, 'jumlah', parseInt(e.target.value) || 0)}
                className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
                min={1}
              />
              <input
                type="text"
                placeholder="Signa (1x1)"
                value={med.signa}
                onChange={(e) => updateMedication(med.id, 'signa', e.target.value)}
                className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
              />
            </div>

            <select
              value={med.aturan_pakai}
              onChange={(e) => updateMedication(med.id, 'aturan_pakai', e.target.value)}
              className="neu-input w-full px-3 py-2 text-small text-platinum bg-carbon-900 rounded-lg"
            >
              {Object.entries(ATURAN_PAKAI_OPTIONS).map(([val, label]) => (
                <option key={val} value={val}>
                  {label}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Keterangan (opsional)"
              value={med.keterangan}
              onChange={(e) => updateMedication(med.id, 'keterangan', e.target.value)}
              className="neu-input w-full px-3 py-2 text-small text-platinum bg-transparent rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Priority */}
      <div className="neu-card p-4">
        <p className="text-caption text-muted mb-2">Prioritas</p>
        <div className="flex gap-2">
          <button
            onClick={() => setPrioritas('0')}
            className={`flex-1 py-2 rounded-lg text-small transition-all ${
              prioritas === '0'
                ? 'neu-tab-active text-platinum'
                : 'neu-tab text-muted'
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setPrioritas('1')}
            className={`flex-1 py-2 rounded-lg text-small transition-all ${
              prioritas === '1'
                ? 'bg-critical/20 text-critical border border-critical/30'
                : 'neu-tab text-muted'
            }`}
          >
            CITO
          </button>
        </div>
      </div>

      {/* Fill Button */}
      <button
        onClick={handleFill}
        disabled={status.loading || medications.every((m) => !m.nama_obat)}
        className="neu-action-btn w-full py-3.5 text-subtitle text-platinum flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.loading ? (
          <>
            <div className="w-5 h-5 border-2 border-pulse-500 border-t-transparent rounded-full animate-spin" />
            Filling...
          </>
        ) : (
          <>
            <Zap className="w-5 h-5" />
            Fill Prescription
          </>
        )}
      </button>

      {/* Result Feedback */}
      {status.result && (
        <div className="neu-card p-4 space-y-2">
          <p className="text-caption text-muted">Fill Result</p>
          <div className="flex gap-4 text-small">
            <div className="flex items-center gap-1.5 text-safe">
              <Check className="w-4 h-4" />
              <span>{status.result.success.length} success</span>
            </div>
            {status.result.failed.length > 0 && (
              <div className="flex items-center gap-1.5 text-critical">
                <X className="w-4 h-4" />
                <span>{status.result.failed.length} failed</span>
              </div>
            )}
            {status.result.skipped.length > 0 && (
              <div className="flex items-center gap-1.5 text-caution">
                <AlertCircle className="w-4 h-4" />
                <span>{status.result.skipped.length} skipped</span>
              </div>
            )}
          </div>
        </div>
      )}

      {status.error && (
        <div className="neu-card p-4 border border-critical/30 bg-critical/5">
          <p className="text-small text-critical">{status.error}</p>
        </div>
      )}
    </div>
  );
}
