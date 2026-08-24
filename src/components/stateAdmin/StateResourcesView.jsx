import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Syringe, 
  Truck, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Download,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function StateResourcesView() {
  const { addNotification } = useApp();

  const stockpiles = [
    { name: "FMD Trivalent Vaccine", stock: "850,000 Doses", centralDepot: "Central Vaccine Institute, Aundh, Pune", status: "Adequate (3.5 Months Reserve)" },
    { name: "LSD Goat Pox Live Vaccine", stock: "420,000 Doses", centralDepot: "State Serum Institute, Nagpur", status: "Elevated Dispatch" },
    { name: "PPR Live Vaccine (Sheep/Goat)", stock: "600,000 Doses", centralDepot: "Regional Biologicals Depot, Chhatrapati Sambhajinagar", status: "Adequate" },
    { name: "HS / Blackquarter Combined", stock: "350,000 Doses", centralDepot: "DIS Central Depot, Pune", status: "Adequate" }
  ];

  const handleDisburseBudget = (dept) => {
    addNotification("💵 State Disaster Fund Released", `Disbursed ₹50 Lakhs emergency contingency to ${dept}.`, "success");
    alert(`₹50 Lakhs emergency fund released to ${dept}!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-purple-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-purple-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>State Strategic Inventory & Logistics Command</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Resources & Emergency Stockpiles</h2>
          <p className="text-xs text-purple-200 mt-0.5">
            Central Biologicals Depots, Mobile Clinic Fleet & Disaster Contingency Funds
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
          <div>
            <span className="text-slate-400 block text-[10px]">Contingency Reserve</span>
            <span className="font-black text-emerald-400 text-sm">₹15.00 Crore Active</span>
          </div>
        </div>
      </div>

      {/* Stockpiles List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">STATEWIDE STRATEGIC VACCINE RESERVES</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stockpiles.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-2.5">
                <span className="font-mono text-xs font-bold text-[#073B32] bg-[#D9F1E8] px-2.5 py-1 rounded-xl">
                  {s.stock}
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {s.status}
                </span>
              </div>

              <div>
                <h4 className="font-black text-base text-[#0A1020]">{s.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{s.centralDepot}</p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => handleDisburseBudget(s.name)}
                  className="px-4 py-2 bg-[#073B32] hover:bg-[#052923] text-white font-bold rounded-xl text-xs shadow-xs transition"
                >
                  Allocate Regional Batch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
