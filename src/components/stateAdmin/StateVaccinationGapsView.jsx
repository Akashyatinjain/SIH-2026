import React from 'react';
import { 
  Syringe, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function StateVaccinationGapsView() {
  const { addNotification } = useApp();

  const laggingBlocks = [
    { district: "Pune", block: "Daund", coverage: 69.8, deficit: "15.2% Deficit", target: "85.0%", pendingDoses: 18000, riskLevel: "HIGH" },
    { district: "Chhatrapati Sambhajinagar", block: "Vaijapur", coverage: 72.0, deficit: "13.0% Deficit", target: "85.0%", pendingDoses: 22000, riskLevel: "HIGH" },
    { district: "Nanded", block: "Mukhed", coverage: 73.6, deficit: "11.4% Deficit", target: "85.0%", pendingDoses: 19500, riskLevel: "HIGH" },
    { district: "Solapur", block: "Pandharpur", coverage: 74.5, deficit: "10.5% Deficit", target: "85.0%", pendingDoses: 24000, riskLevel: "MEDIUM" },
    { district: "Ahmednagar", block: "Shrirampur", coverage: 74.1, deficit: "10.9% Deficit", target: "85.0%", pendingDoses: 16000, riskLevel: "MEDIUM" }
  ];

  const handleAllocateDoses = (block) => {
    addNotification("💉 Ring Vaccine Cargo Allocated", `Allocated 10,000 extra doses to ${block.block} (${block.district}).`, "success");
    alert(`10,000 Ring Vaccine doses dispatched to ${block.block} Taluka Veterinary Unit!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-amber-950 via-[#073B32] to-[#0A1020] text-white rounded-3xl shadow-sm border border-amber-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-amber-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Statewide Immunization Gap & Deficit Surveillance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Vaccination Deficit & Gap Analysis</h2>
          <p className="text-xs text-amber-200 mt-0.5">
            Sub-District Blocks Below 85% Herd Immunity Threshold
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
          <div>
            <span className="text-slate-400 block text-[10px]">Lagging Units</span>
            <span className="font-black text-amber-400 text-sm">7 Sub-Districts Below Target</span>
          </div>
        </div>
      </div>

      {/* Lagging Blocks List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">CRITICAL IMMUNIZATION GAP REGIONS</h3>

        <div className="space-y-4">
          {laggingBlocks.map((b, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
                <div className="flex items-center gap-2.5">
                  <h4 className="font-black text-base text-[#0A1020]">{b.block} Block</h4>
                  <span className="text-xs text-slate-500 font-bold">({b.district} District)</span>
                  <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                    {b.deficit}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-700">Target: {b.target}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-8 space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Current Coverage: <strong>{b.coverage}%</strong></span>
                    <span className="text-amber-800 font-mono">Pending: {b.pendingDoses.toLocaleString()} Livestock</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-500 h-full rounded-full transition-all" 
                      style={{ width: `${b.coverage}%` }} 
                    />
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-end">
                  <button
                    onClick={() => handleAllocateDoses(b)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#073B32] hover:bg-[#052923] text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <Syringe className="w-4 h-4 text-emerald-300" />
                    <span>Allocate 10k Ring Vaccines</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
