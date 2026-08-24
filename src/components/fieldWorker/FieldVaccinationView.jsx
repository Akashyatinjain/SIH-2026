import React, { useState } from 'react';
import { 
  Syringe, 
  PlusCircle, 
  Thermometer, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Calendar,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FieldVaccinationView() {
  const { addNotification } = useApp();
  const [showLogModal, setShowLogModal] = useState(false);

  // Form State
  const [doseCount, setDoseCount] = useState(8);
  const [vaccineType, setVaccineType] = useState('FMD (Foot & Mouth Disease)');
  const [batchId, setBatchId] = useState('FMD-PUN-849');
  const [village, setVillage] = useState('Malegaon Budruk');

  const batches = [
    {
      id: "FMD-PUN-849",
      name: "Trivalent FMD Oil-Adjuvant (Serotypes O, A, Asia-1)",
      expiry: "2027-04-30",
      totalDoses: 500,
      dosesUsed: 382,
      temp: "4.2°C (Optimal)",
      status: "Active Drive"
    },
    {
      id: "LSD-GOV-102",
      name: "Goat Pox Live Vaccine (Uttarkashi Strain for Cattle)",
      expiry: "2026-11-15",
      totalDoses: 400,
      dosesUsed: 260,
      temp: "3.8°C (Optimal)",
      status: "Active Ring Vaccine"
    },
    {
      id: "PPR-IVRI-21",
      name: "PPR Homologous Live Vaccine (Sheep & Goat)",
      expiry: "2027-08-20",
      totalDoses: 300,
      dosesUsed: 195,
      temp: "4.0°C (Optimal)",
      status: "Active Drive"
    }
  ];

  const villageCoverage = [
    { village: "Khedgaon", target: 820, done: 642, percent: 78.4 },
    { village: "Malegaon Budruk", target: 650, done: 424, percent: 65.2 },
    { village: "Gunawadi", target: 480, done: 394, percent: 82.0 }
  ];

  const handleRecordVaccine = (e) => {
    e.preventDefault();
    addNotification("💉 Vaccine Batch Logged", `Logged ${doseCount} doses of ${vaccineType} (Batch #${batchId}) at ${village}.`, "success");
    alert(`Successfully recorded ${doseCount} doses administered in ${village}!`);
    setShowLogModal(false);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-emerald-950 via-[#073B32] to-[#0A1020] text-white rounded-3xl shadow-sm border border-emerald-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>National Livestock Immunization Sentinel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Field Vaccination Drives & Cold-Chain</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Cold Chain Integrity & Batch Administration Tracker • Baramati Sector
          </p>
        </div>

        <button
          onClick={() => setShowLogModal(true)}
          className="px-5 py-3 bg-[#149A84] hover:bg-[#0C7A68] text-white rounded-2xl text-xs font-black shadow-md transition flex items-center gap-2 shrink-0 border border-emerald-400"
        >
          <Syringe className="w-4 h-4" />
          <span>+ Record Doses Administered</span>
        </button>
      </div>

      {/* Cold Chain Sensor Telemetry Box */}
      <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200 shrink-0">
            <Thermometer className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-sm text-[#0A1020]">Portable Cold-Box Telemetry</h3>
              <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                Active 4.2°C
              </span>
            </div>
            <p className="text-xs text-slate-500">Vaccine storage within verified 2°C - 8°C safety window</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
          <span>Battery: <strong>88%</strong></span>
          <span>•</span>
          <span>Last Calibrated: <strong>08:30 AM Today</strong></span>
        </div>
      </div>

      {/* Vaccine Batches & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Active Vaccine Batches (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <h3 className="font-black text-base text-[#0A1020]">ACTIVE FIELD VACCINE INVENTORY</h3>

          <div className="space-y-3">
            {batches.map((b) => (
              <div
                key={b.id}
                className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-2.5">
                  <span className="font-mono text-xs font-bold text-[#073B32] bg-[#D9F1E8] px-2.5 py-1 rounded-xl">
                    Batch #{b.id}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {b.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-[#0A1020]">{b.name}</h4>
                  <p className="text-xs text-slate-500">Valid Until: {b.expiry} • Storage: {b.temp}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600">Doses Used: {b.dosesUsed} / {b.totalDoses}</span>
                    <span className="text-[#073B32]">{Math.round((b.dosesUsed / b.totalDoses) * 100)}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#149A84] h-full rounded-full transition-all" 
                      style={{ width: `${(b.dosesUsed / b.totalDoses) * 100}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Village Target Progress (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-4">
            <h3 className="font-black text-base text-[#0A1020] border-b border-[#ECE6D6] pb-3">
              Sector Village Target Coverage
            </h3>

            <div className="space-y-4">
              {villageCoverage.map((vc) => (
                <div key={vc.village} className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-bold">
                    <span className="text-[#0A1020]">{vc.village}</span>
                    <span className="text-[#073B32]">{vc.percent}% ({vc.done}/{vc.target})</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        vc.percent >= 80 ? 'bg-emerald-600' : 'bg-amber-500'
                      }`} 
                      style={{ width: `${vc.percent}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] text-xs text-slate-600 space-y-1">
              <span className="font-bold text-[#073B32] block">Ring Vaccination Guideline:</span>
              <p>Mandatory 85% coverage required within 5 km radius of Baramati cluster to prevent vector propagation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Record Vaccine Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <h3 className="text-xl font-black text-[#0A1020]">Record Doses Administered in Field</h3>
            <form onSubmit={handleRecordVaccine} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Doses Administered</label>
                  <input
                    type="number"
                    min={1}
                    value={doseCount}
                    onChange={e => setDoseCount(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Select Batch</label>
                  <select
                    value={batchId}
                    onChange={e => setBatchId(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  >
                    <option value="FMD-PUN-849">Batch #FMD-PUN-849</option>
                    <option value="LSD-GOV-102">Batch #LSD-GOV-102</option>
                    <option value="PPR-IVRI-21">Batch #PPR-IVRI-21</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Village Camp</label>
                <select
                  value={village}
                  onChange={e => setVillage(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                >
                  <option value="Khedgaon">Khedgaon</option>
                  <option value="Malegaon Budruk">Malegaon Budruk</option>
                  <option value="Gunawadi">Gunawadi</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#073B32] text-white font-bold rounded-xl shadow-xs"
                >
                  Save to National Registry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
