import React, { useState } from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Map, 
  TrendingUp, 
  Users, 
  Syringe, 
  Clock, 
  AlertTriangle, 
  Download, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import StatCard from '../common/StatCard';
import RiskBadge from '../common/RiskBadge';

export default function StateAdminDashboard() {
  const { stateDistricts, t, addNotification } = useApp();
  const [selectedDistrict, setSelectedDistrict] = useState(stateDistricts[0]);
  const [filterRisk, setFilterRisk] = useState('all');

  const filteredDistricts = stateDistricts.filter(d => filterRisk === 'all' || d.risk === filterRisk);

  const handleDispatchStateResource = (dist) => {
    addNotification("🚚 State Emergency Logistics Dispatched", `Allocated 10,000 vaccine doses & 2 Mobile Poly-Clinics to ${dist.district}.`, "alert");
    alert(`State Emergency Logistics Dispatched: ₹25 Lakhs Contingency & 10,000 Ring Vaccine Doses released to ${dist.district} District Collectorate!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* 1. Header: State Command Directorate Banner (Section 30) */}
      <div className="p-6 bg-gradient-to-r from-purple-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-purple-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>State Directorate of Animal Husbandry • Maharashtra Command</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Maharashtra Animal Health Intelligence</h2>
          <p className="text-xs text-purple-200 mt-0.5">
            Supervising 36 Districts • 3,240,000 Cattle & Small Ruminants Monitored
          </p>
        </div>

        <button 
          onClick={() => alert("Exporting Maharashtra State Comprehensive Surveillance Brief (PDF)")}
          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export State Intelligence Brief (PDF)</span>
        </button>
      </div>

      {/* 2. Section 31: STATE INTELLIGENCE STRATEGIC DECISION SUPPORT QUESTIONS */}
      <div className="p-5 bg-[#0A1020] text-white rounded-3xl border border-slate-800 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="font-black text-xs uppercase tracking-wider text-slate-100">
              STATE STRATEGIC DECISION SUPPORT QUESTIONS
            </h3>
          </div>
          <span className="text-xs font-bold text-red-400 bg-red-950 px-2.5 py-0.5 rounded-full border border-red-800">
            4 Emerging Clusters Detected
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Question 1 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">WHERE IS RISK RISING?</span>
            <p className="font-black text-red-400 text-sm">Pune, Ahmednagar, Solapur</p>
            <p className="text-[11px] text-slate-400">Sugarcane vector fly surge (+28%)</p>
          </div>

          {/* Question 2 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">WHERE IS VACCINATION LAGGING?</span>
            <p className="font-black text-amber-400 text-sm">7 Sub-District Blocks</p>
            <p className="text-[11px] text-slate-400">Sambhajinagar (72%), Nanded (73%)</p>
          </div>

          {/* Question 3 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">DEPLOYMENT PRIORITIES</span>
            <p className="font-black text-teal-400 text-sm">4 Priority Regions</p>
            <p className="text-[11px] text-slate-400">Mobile Polyclinic dispatches ready</p>
          </div>

          {/* Question 4 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">DISEASE SIGNALS RISING</span>
            <p className="font-black text-purple-300 text-sm">LSD, FMD, PPR</p>
            <p className="text-[11px] text-slate-400">Pre-monsoon ring vaccination active</p>
          </div>
        </div>
      </div>

      {/* 3. Section 30: MAIN HERO — LARGE MAHARASHTRA RISK MAP & DISTRICT COMPARISON */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Maharashtra District Risk Map (5 cols) */}
        <div className="lg:col-span-5 bg-[#0A1020] text-white rounded-3xl border border-slate-800 p-5 shadow-md flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-purple-400" />
              <h3 className="font-extrabold text-sm text-slate-100">Maharashtra 36-District Heatmap</h3>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Risk Intensity Tiers</span>
          </div>

          {/* SVG Map of Maharashtra Districts */}
          <div className="h-64 flex items-center justify-center relative my-2">
            <svg viewBox="0 0 500 350" className="w-full h-full">
              <path 
                d="M 80 120 L 180 40 L 320 60 L 440 100 L 480 190 L 400 290 L 260 320 L 140 290 L 60 210 Z" 
                fill="#0f172a" 
                stroke="#334155" 
                strokeWidth="2" 
                strokeDasharray="3 3" 
              />

              {/* Pune (Critical 🔴) */}
              <polygon 
                points="170,170 240,160 250,220 180,230" 
                fill="#7f1d1d" 
                stroke="#ef4444" 
                strokeWidth="2" 
                className="cursor-pointer hover:opacity-80 transition" 
                onClick={() => setSelectedDistrict(stateDistricts[0])} 
              />
              <text x="195" y="195" fill="#ffffff" fontSize="11" fontWeight="bold">Pune</text>

              {/* Ahmednagar (Elevated 🟠) */}
              <polygon 
                points="190,110 270,100 280,160 200,170" 
                fill="#7c2d12" 
                stroke="#ea580c" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:opacity-80 transition" 
                onClick={() => setSelectedDistrict(stateDistricts[1])} 
              />
              <text x="215" y="135" fill="#fed7aa" fontSize="10">Ahmednagar</text>

              {/* Solapur (Elevated 🟠) */}
              <polygon 
                points="250,220 330,210 340,280 260,290" 
                fill="#7c2d12" 
                stroke="#ea580c" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:opacity-80 transition" 
                onClick={() => setSelectedDistrict(stateDistricts[2])} 
              />
              <text x="280" y="250" fill="#fed7aa" fontSize="10">Solapur</text>

              {/* Satara (Low 🟢) */}
              <polygon 
                points="140,230 200,230 190,290 130,280" 
                fill="#064e3b" 
                stroke="#10b981" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:opacity-80 transition" 
                onClick={() => setSelectedDistrict(stateDistricts[4])} 
              />
              <text x="145" y="260" fill="#a7f3d0" fontSize="9">Satara</text>

              {/* Kolhapur (Low 🟢) */}
              <polygon 
                points="130,280 190,290 180,330 120,320" 
                fill="#064e3b" 
                stroke="#10b981" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:opacity-80 transition" 
                onClick={() => setSelectedDistrict(stateDistricts[6])} 
              />
              <text x="135" y="310" fill="#a7f3d0" fontSize="9">Kolhapur</text>

              {/* Nashik (Watch 🟡) */}
              <polygon 
                points="130,70 200,60 190,120 120,130" 
                fill="#78350f" 
                stroke="#f59e0b" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:opacity-80 transition" 
                onClick={() => setSelectedDistrict(stateDistricts[5])} 
              />
              <text x="145" y="95" fill="#fde68a" fontSize="9">Nashik</text>
            </svg>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-2xl border border-slate-800 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Critical (🔴)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Elevated (🟠)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Watch (🟡)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Low (🟢)</span>
          </div>
        </div>

        {/* Right: DISTRICT COMPARISON TABLE (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
            <div>
              <h3 className="font-black text-sm text-[#0A1020]">DISTRICT COMPARISON & SURVEILLANCE RANKING</h3>
              <p className="text-xs text-slate-500">Live risk intensity across Maharashtra</p>
            </div>

            <select
              value={filterRisk}
              onChange={e => setFilterRisk(e.target.value)}
              className="px-3 py-1.5 border border-[#ECE6D6] rounded-xl text-xs bg-[#F6F3EA] font-bold text-slate-800"
            >
              <option value="all">All Risk Levels</option>
              <option value="CRITICAL">Critical (🔴)</option>
              <option value="HIGH">Elevated (🟠)</option>
              <option value="MEDIUM">Watch (🟡)</option>
              <option value="LOW">Low (🟢)</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                  <th className="py-2.5 px-3">District</th>
                  <th className="py-2.5 px-3">Risk Tier</th>
                  <th className="py-2.5 px-3">Active Clusters</th>
                  <th className="py-2.5 px-3">Vac Coverage</th>
                  <th className="py-2.5 px-3">Response Velocity</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE6D6]">
                {filteredDistricts.map((d) => (
                  <tr 
                    key={d.district}
                    onClick={() => setSelectedDistrict(d)}
                    className="hover:bg-purple-50/40 cursor-pointer transition"
                  >
                    <td className="py-3 px-3 font-bold text-[#0A1020]">{d.district}</td>
                    <td className="py-3 px-3"><RiskBadge level={d.risk} size="sm" /></td>
                    <td className="py-3 px-3 font-bold text-slate-800">
                      {d.activeClusters > 0 ? (
                        <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded font-bold">
                          {d.activeClusters} Clusters ({d.activeCases} Cases)
                        </span>
                      ) : (
                        <span className="text-slate-500 font-normal">0 Clusters</span>
                      )}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{d.vacCoverage}%</td>
                    <td className="py-3 px-3 text-slate-600 font-mono">{d.avgResponse}</td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDispatchStateResource(d);
                        }}
                        className="px-2.5 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-[11px] font-bold transition"
                      >
                        Dispatch Resource
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
