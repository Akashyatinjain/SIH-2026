import React from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  MapPin, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  Radio,
  ArrowRight,
  Flame,
  Bug
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { geographicHotspots } from '../../data/mockData';

export default function FarmerAlertsView() {
  const { setIsIVROpen, addNotification } = useApp();
  const primaryHotspot = geographicHotspots[0];

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-red-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-red-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-red-300 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Active Epidemiological Early Warning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Local Disease Alerts (स्थानिक धोके)</h2>
          <p className="text-xs text-red-200 mt-0.5">
            Surveillance radius: 15 km around Khedgaon Village Unit
          </p>
        </div>

        <button
          onClick={() => setIsIVROpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs font-bold shadow-md transition flex items-center gap-2 shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call 1800-180-1551 Helpline</span>
        </button>
      </div>

      {/* Critical Proximity Alert Card */}
      <div className="bg-gradient-to-br from-red-900/10 via-white to-white p-6 rounded-3xl border-2 border-red-300 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
            <span className="font-mono text-xs font-black text-red-700 uppercase">
              HIGH PROXIMITY RISK — 8 KM RADIUS
            </span>
          </div>
          <span className="text-xs text-slate-500 font-bold">Updated 15 mins ago</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black text-red-950">
            Lumpy Skin Disease (LSD) Cluster in Malegaon / Baramati Belt
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            A cluster of 7 suspected nodular fever cases has been recorded across 3 adjoining villages (Malegaon Budruk, Khedgaon, Gunawadi). Vector fly population (Stomoxys) is elevated due to recent sugarcane harvests.
          </p>
        </div>

        {/* Vector Risk & Rapid Response Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-red-50 rounded-2xl border border-red-200">
            <span className="text-red-800 font-bold block text-[10px] uppercase">Suspected Cases</span>
            <span className="text-lg font-black text-red-900">{primaryHotspot.activeCases} Reported</span>
          </div>
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <span className="text-amber-800 font-bold block text-[10px] uppercase">Vector Fly Risk</span>
            <span className="text-lg font-black text-amber-900">HIGH (Index 8.2)</span>
          </div>
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <span className="text-emerald-800 font-bold block text-[10px] uppercase">Response Status</span>
            <span className="text-xs font-bold text-emerald-950 block mt-1">Rapid Response Unit Deployed</span>
          </div>
        </div>
      </div>

      {/* Mandatory Bio-Security Checklist for Cattle Owners */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <h3 className="font-black text-base text-[#0A1020] border-b border-[#ECE6D6] pb-3 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#073B32]" />
          <span>Mandatory Farm Biosecurity Actions (शेतकऱ्यांसाठी प्रतिबंधात्मक उपाय)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1">
            <h4 className="font-bold text-[#073B32] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1. Strict Stall Isolation</span>
            </h4>
            <p className="text-slate-600">
              Immediately separate any cow showing fever or skin nodules from the main herd into a dry, sanitized stall.
            </p>
          </div>

          <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1">
            <h4 className="font-bold text-[#073B32] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>2. Vector Control (Neem Spray)</span>
            </h4>
            <p className="text-slate-600">
              Spray cattle shed with 5% Neem extract or Deltamethrin 1.25% to eliminate biting stable flies, mosquitoes, and ticks.
            </p>
          </div>

          <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1">
            <h4 className="font-bold text-[#073B32] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>3. Lime Dusting (Chuna)</span>
            </h4>
            <p className="text-slate-600">
              Spread dry slaked lime powder around shed perimeter and disinfect water troughs with 1% potassium permanganate.
            </p>
          </div>

          <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1">
            <h4 className="font-bold text-[#073B32] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>4. Stop Common Grazing</span>
            </h4>
            <p className="text-slate-600">
              Avoid sending cattle to community pastures or local livestock weekly bazaars until cluster containment is notified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
