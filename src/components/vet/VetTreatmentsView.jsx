import React, { useState } from 'react';
import { 
  Pill, 
  Stethoscope, 
  PlusCircle, 
  Search, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Send,
  Download
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function VetTreatmentsView() {
  const { addNotification } = useApp();
  const [showRxModal, setShowRxModal] = useState(false);

  const [animalTag, setAnimalTag] = useState('MH-PUN-0241 (Gauri - Gir Cow)');
  const [farmerName, setFarmerName] = useState('Ramesh Patil (+91 98224 51092)');
  const [condition, setCondition] = useState('Lumpy Skin Disease (Nodular Pyrexia Protocol)');
  const [rxText, setRxText] = useState('Flunixin Meglumine 15ml IM OD x 3d + Enrofloxacin 10% 20ml IM OD x 5d + TopiCure spray BD.');

  const prescriptions = [
    {
      id: "RX-2026-091",
      caseId: "PS-2026-004281",
      animal: "MH-PUN-0241 (Gauri - Ramesh Patil)",
      condition: "Suspected Lumpy Skin Disease (Capripoxvirus)",
      date: "24 Feb 2026",
      regimen: "Flunixin Meglumine (anti-inflammatory) + Enrofloxacin 10% + TopiCure spray on skin lumps. Strict barn isolation 21 days.",
      status: "Active Regimen",
      doctor: "Dr. Anand Deshmukh"
    },
    {
      id: "RX-2026-078",
      caseId: "PS-2026-004279",
      animal: "MH-PUN-0782 (Murrah Buffalo - Sanjay Jagtap)",
      condition: "Foot and Mouth Disease (FMD Vesicular Stomatitis)",
      date: "24 Feb 2026",
      regimen: "Glycerine Boric acid oral paint + Flunixin Meglumine + Ceftiofur sodium 1g IM. Soft green gruel feed only.",
      status: "Active Regimen",
      doctor: "Dr. Anand Deshmukh"
    },
    {
      id: "RX-2026-062",
      caseId: "PS-2026-004268",
      animal: "MH-PUN-0312 (Crossbred HF - Tukaram Gaikwad)",
      condition: "Simple Ruminal Acidosis / Indigestion",
      date: "23 Feb 2026",
      regimen: "Rumenotorics (Aniliv / Ruchamax 50g) + Yeast Culture bolus BD x 3d.",
      status: "Completed / Cured",
      doctor: "Dr. Anand Deshmukh"
    }
  ];

  const handleCreateRx = (e) => {
    e.preventDefault();
    addNotification("💊 Digital e-Prescription Dispatched", `Issued e-Prescription for ${animalTag}. Sent to ${farmerName} via SMS & App.`, "success");
    alert(`Digital e-Prescription generated & dispatched to ${farmerName}!`);
    setShowRxModal(false);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-emerald-950 via-[#073B32] to-[#0A1020] text-white rounded-3xl shadow-sm border border-emerald-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Digital Veterinary Drug Formulary & e-Rx</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Treatment & e-Prescription Console</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Prescription Issuance, Antimicrobial Stewardship & Dosage Protocols
          </p>
        </div>

        <button
          onClick={() => setShowRxModal(true)}
          className="px-5 py-3 bg-[#149A84] hover:bg-[#0C7A68] text-white rounded-2xl text-xs font-black shadow-md transition flex items-center gap-2 shrink-0 border border-emerald-400"
        >
          <Pill className="w-4 h-4" />
          <span>+ Issue New e-Prescription</span>
        </button>
      </div>

      {/* Prescriptions List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">ISSUED DIGITAL PRESCRIPTIONS IN SECTOR</h3>

        <div className="space-y-4">
          {prescriptions.map((rx) => (
            <div
              key={rx.id}
              className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#073B32] bg-[#D9F1E8] px-2.5 py-1 rounded-xl">
                    {rx.id}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {rx.status}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">{rx.caseId}</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">{rx.date}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-base text-[#0A1020]">{rx.animal}</h4>
                  <span className="text-xs font-bold text-red-700">{rx.condition}</span>
                </div>

                <div className="p-3.5 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] text-xs font-mono text-slate-800 leading-relaxed">
                  <strong>Rx Regimen:</strong> {rx.regimen}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Prescribed by: <strong>{rx.doctor}</strong></span>
                <button
                  onClick={() => alert(`Printing official digital Rx for ${rx.id} (PDF)...`)}
                  className="font-bold text-[#073B32] hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Rx PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Issue Rx Modal */}
      {showRxModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <h3 className="text-xl font-black text-[#0A1020]">Issue Digital e-Prescription</h3>
            <form onSubmit={handleCreateRx} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Animal Tag</label>
                  <input
                    type="text"
                    value={animalTag}
                    onChange={e => setAnimalTag(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Farmer Contact</label>
                  <input
                    type="text"
                    value={farmerName}
                    onChange={e => setFarmerName(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Diagnosed Condition</label>
                <input
                  type="text"
                  value={condition}
                  onChange={e => setCondition(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Prescription Regimen (Medications, Dosage, Frequency)</label>
                <textarea
                  rows={3}
                  value={rxText}
                  onChange={e => setRxText(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-mono text-xs"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowRxModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#073B32] text-white font-bold rounded-xl shadow-xs"
                >
                  Sign & Dispatch e-Prescription
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
