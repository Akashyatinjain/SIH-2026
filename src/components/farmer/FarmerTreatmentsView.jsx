import React from 'react';
import { 
  Pill, 
  Stethoscope, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Sparkles,
  PhoneCall,
  Download,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FarmerTreatmentsView() {
  const { cases, addNotification } = useApp();

  const treatments = [
    {
      id: "RX-2026-091",
      animal: "Ganga (Gir Cow - MH-PUN-0241)",
      condition: "Suspected Lumpy Skin Disease (Nodular Pyrexia)",
      prescribedBy: "Dr. Anand Deshmukh",
      hospital: "Baramati Taluka Hospital",
      date: "24 Feb 2026",
      status: "Active (Day 1/5)",
      drugs: [
        { name: "Flunixin Meglumine (Anti-inflammatory/Pyretic)", dose: "15 ml Intramuscular", timing: "Once Daily for 3 Days" },
        { name: "Enrofloxacin 10% (Broad spectrum antibacterial)", dose: "20 ml Intramuscular", timing: "Once Daily for 5 Days" },
        { name: "TopiCure Ayurvedic Skin Spray", dose: "Apply to all skin lumps", timing: "Twice Daily until healing" }
      ],
      instructions: "Keep in isolated dry shed. Feed green maize & fresh warm gruel. Do not lance skin nodules."
    },
    {
      id: "RX-2026-074",
      animal: "Kaveri (Murrah Buffalo - MH-PUN-0109)",
      condition: "Sub-clinical Mastitis (Left Hind Quarter)",
      prescribedBy: "Dr. Anand Deshmukh",
      hospital: "Baramati Taluka Hospital",
      date: "18 Feb 2026",
      status: "Completing (Day 4/5)",
      drugs: [
        { name: "Ceftiofur Sodium Intra-mammary Infusion", dose: "1 tube per affected quarter", timing: "After complete stripping" },
        { name: "Meloxicam + Paracetamol Bolus", dose: "2 bolus orally", timing: "Twice daily after feed" }
      ],
      instructions: "Completely strip milk before applying intramammary tube. Teat dipping with 0.5% povidone iodine."
    }
  ];

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-blue-950 via-[#0A1020] to-[#050811] text-white rounded-3xl shadow-sm border border-blue-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-blue-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Digital e-Prescription & Treatment Records</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Active Treatments (उपचार व औषधोपचार)</h2>
          <p className="text-xs text-blue-200 mt-0.5">
            Verified veterinary prescriptions issued for Ramesh Patil's herd
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
          <Pill className="w-5 h-5 text-emerald-400" />
          <div>
            <span className="text-slate-400 block text-[10px]">Active Regimens</span>
            <span className="font-black text-white text-sm">2 Ongoing Treatments</span>
          </div>
        </div>
      </div>

      {/* Active Prescription Cards */}
      <div className="space-y-5">
        {treatments.map((rx) => (
          <div 
            key={rx.id}
            className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
              <div>
                <span className="font-mono text-xs font-bold text-slate-500 block">{rx.id}</span>
                <h3 className="text-lg font-black text-[#0A1020]">{rx.animal}</h3>
                <p className="text-xs text-red-700 font-bold">Diagnosed: {rx.condition}</p>
              </div>

              <div className="text-right text-xs">
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold rounded-full inline-block mb-1">
                  {rx.status}
                </span>
                <p className="text-slate-500 font-mono">Issued on {rx.date}</p>
              </div>
            </div>

            {/* Prescribed Drug Regimen Table */}
            <div className="space-y-2">
              <h4 className="font-black text-xs uppercase tracking-wider text-slate-700">
                Prescribed Drug Regimen:
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                      <th className="py-2.5 px-3">Medication & Formulation</th>
                      <th className="py-2.5 px-3">Dosage & Route</th>
                      <th className="py-2.5 px-3">Timing / Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ECE6D6]">
                    {rx.drugs.map((drug, i) => (
                      <tr key={i} className="hover:bg-[#F6F3EA]/50">
                        <td className="py-2.5 px-3 font-bold text-[#0A1020]">{drug.name}</td>
                        <td className="py-2.5 px-3 text-slate-700">{drug.dose}</td>
                        <td className="py-2.5 px-3 text-slate-600">{drug.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Instructions & Doctor Signature */}
            <div className="p-3 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-700 block">Doctor's Special Instructions:</span>
                <p className="text-slate-600">{rx.instructions}</p>
              </div>

              <div className="shrink-0 text-right sm:border-l border-[#ECE6D6] sm:pl-4">
                <span className="text-slate-500 text-[10px] block">Attending Veterinarian:</span>
                <span className="font-black text-[#073B32]">{rx.prescribedBy}</span>
                <p className="text-[10px] text-slate-400">{rx.hospital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
