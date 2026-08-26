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
  BarChart3,
  Activity,
  ChevronRight,
  Send,
  Crosshair,
  Shield
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function StateAdminDashboard() {
  const { stateDistricts, addNotification } = useApp();
  const [selectedDistrict, setSelectedDistrict] = useState(stateDistricts[0]);
  const [filterRisk, setFilterRisk] = useState('all');

  const filteredDistricts = stateDistricts.filter(d => filterRisk === 'all' || d.risk === filterRisk);

  const handleDispatchStateResource = (dist) => {
    addNotification("🚚 State Emergency Logistics Dispatched", `Allocated 10,000 vaccine doses & 2 Mobile Poly-Clinics to ${dist.district}.`, "alert");
    alert(`State Emergency Logistics Dispatched: ₹25 Lakhs Contingency & 10,000 Ring Vaccine Doses released to ${dist.district} District Collectorate!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020] font-sans">
      {/* 1. Header: State Command Directorate Banner */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-purple-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="truncate">State Directorate of Animal Husbandry • Maharashtra Command</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Maharashtra Animal Health Intelligence</h2>
          <p className="text-xs text-purple-200 mt-0.5">
            Supervising 36 Districts • 3,240,000 Cattle & Small Ruminants Monitored
          </p>
        </div>

        <button 
          onClick={() => alert("Exporting Maharashtra State Comprehensive Surveillance Brief (PDF)...")}
          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shrink-0 self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export State Brief (PDF)</span>
        </button>
      </div>

      {/* 2. STATE INTELLIGENCE STRATEGIC DECISION SUPPORT QUESTIONS */}
      <div className="p-5 bg-[#0A1020] text-white rounded-3xl border border-slate-800 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <h3 className="font-black text-xs uppercase tracking-wider text-slate-100">
              STATE STRATEGIC DECISION SUPPORT QUESTIONS
            </h3>
          </div>
          <span className="text-xs font-bold text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded-full border border-red-800 self-start sm:self-auto">
            4 Emerging Clusters Detected
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Question 1 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">WHERE IS RISK RISING?</span>
            <p className="font-black text-red-400 text-sm">Pune, Ahmednagar, Solapur</p>
            <p className="text-[11px] text-slate-400">Sugarcane vector fly surge (+28%)</p>
          </div>

          {/* Question 2 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">WHERE IS VACCINE LAGGING?</span>
            <p className="font-black text-amber-400 text-sm">7 Sub-District Blocks</p>
            <p className="text-[11px] text-slate-400">Sambhajinagar (72%), Nanded (73%)</p>
          </div>

          {/* Question 3 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">DEPLOYMENT PRIORITIES</span>
            <p className="font-black text-teal-400 text-sm">4 Priority Regions</p>
            <p className="text-[11px] text-slate-400">Mobile Polyclinic dispatches ready</p>
          </div>

          {/* Question 4 */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">DISEASE SIGNALS RISING</span>
            <p className="font-black text-purple-300 text-sm">LSD, FMD, PPR</p>
            <p className="text-[11px] text-slate-400">Pre-monsoon ring vaccination active</p>
          </div>
        </div>
      </div>

      {/* 3. MAIN HERO: FULL MAHARASHTRA 36-DISTRICT SURVEILLANCE RADAR + DISTRICT COMPARISON */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* Left: Comprehensive Animated Maharashtra 36-District Heatmap (5 cols on xl) */}
        <div className="xl:col-span-5 bg-[#0A1020] text-white rounded-3xl border border-slate-800 p-5 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-purple-400" />
              <h3 className="font-extrabold text-sm text-slate-100">Maharashtra 36-District Surveillance Map</h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
              Live Radar
            </span>
          </div>

          {/* SVG Map of Full Maharashtra State */}
          <div className="relative w-full h-[310px] flex items-center justify-center bg-slate-950/60 rounded-2xl border border-slate-800/80 p-2 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none"></div>

            <svg viewBox="0 0 540 380" className="w-full h-full">
              <defs>
                <radialGradient id="punePulseGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="baramatiPulseGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Maharashtra State Outer Border Geometry */}
              <path 
                d="M 60,110 L 140,50 L 250,45 L 340,60 L 460,70 L 510,130 L 480,210 L 420,280 L 320,330 L 220,350 L 120,320 L 70,250 L 50,170 Z" 
                fill="#0b1329" 
                stroke="#1e293b" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
              />

              {/* Division Boundaries */}
              {/* Konkan Coast */}
              <path d="M 55,160 L 75,230 L 95,290 L 120,320" stroke="#334155" strokeWidth="1.5" />
              {/* Vidarbha Split */}
              <path d="M 340,60 L 360,180 L 420,280" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Marathwada Split */}
              <path d="M 220,95 L 240,210 L 320,330" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* FLOWING TRANSMISSION VECTORS (Pune -> Baramati -> Solapur) */}
              <line x1="175" y1="210" x2="225" y2="235" stroke="#ef4444" strokeWidth="2" className="animate-flow-dash" />
              <line x1="225" y1="235" x2="280" y2="265" stroke="#f59e0b" strokeWidth="1.5" className="animate-flow-dash" />

              {/* 1. NORTH MAHARASHTRA: Nashik (Watch 🟡) */}
              <polygon 
                points="115,80 185,70 180,130 110,135" 
                fill={selectedDistrict.district === 'Nashik' ? '#f59e0b' : '#78350f'} 
                stroke="#f59e0b" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:fill-amber-600 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Nashik') || stateDistricts[0])} 
              />
              <text x="125" y="105" fill="#fde68a" fontSize="10" fontWeight="bold">Nashik</text>

              {/* 2. NORTH: Dhule / Jalgaon (Moderate 🟡) */}
              <polygon 
                points="185,70 270,60 265,120 180,130" 
                fill={selectedDistrict.district === 'Jalgaon' ? '#f59e0b' : '#451a03'} 
                stroke="#d97706" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-amber-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Jalgaon') || stateDistricts[0])} 
              />
              <text x="200" y="95" fill="#fed7aa" fontSize="9">Jalgaon</text>

              {/* 3. KONKAN: Mumbai & Thane (Safe 🟢) */}
              <polygon 
                points="65,130 110,135 105,185 60,180" 
                fill="#064e3b" 
                stroke="#10b981" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-emerald-700 transition" 
              />
              <text x="65" y="160" fill="#a7f3d0" fontSize="8" fontWeight="bold">Mumbai/Thane</text>

              {/* 4. WESTERN MH: Pune (CRITICAL 🔴) */}
              <polygon 
                points="145,185 220,175 230,240 155,245" 
                fill={selectedDistrict.district === 'Pune' ? '#b91c1c' : '#7f1d1d'} 
                stroke="#ef4444" 
                strokeWidth="2.5" 
                className="cursor-pointer hover:fill-red-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Pune') || stateDistricts[0])} 
              />
              <circle cx="185" cy="210" r="18" fill="url(#punePulseGlow)" className="animate-ping" />
              <text x="165" y="212" fill="#ffffff" fontSize="12" fontWeight="black">Pune</text>
              <text x="162" y="226" fill="#fca5a5" fontSize="8" fontStyle="italic">(128 Cases)</text>

              {/* 5. WESTERN MH: Ahmednagar (Elevated 🟠) */}
              <polygon 
                points="180,130 265,120 255,185 175,185" 
                fill={selectedDistrict.district === 'Ahmednagar' ? '#ea580c' : '#7c2d12'} 
                stroke="#ea580c" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:fill-orange-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Ahmednagar') || stateDistricts[0])} 
              />
              <text x="190" y="155" fill="#fed7aa" fontSize="9" fontWeight="bold">Ahmednagar</text>

              {/* 6. WESTERN MH: Solapur (Elevated 🟠) */}
              <polygon 
                points="230,240 310,230 320,295 240,305" 
                fill={selectedDistrict.district === 'Solapur' ? '#ea580c' : '#7c2d12'} 
                stroke="#ea580c" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:fill-orange-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Solapur') || stateDistricts[0])} 
              />
              <text x="255" y="270" fill="#fed7aa" fontSize="10" fontWeight="bold">Solapur</text>

              {/* 7. WESTERN MH: Satara (Safe 🟢) */}
              <polygon 
                points="125,245 180,245 170,295 115,290" 
                fill={selectedDistrict.district === 'Satara' ? '#047857' : '#064e3b'} 
                stroke="#10b981" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-emerald-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Satara') || stateDistricts[0])} 
              />
              <text x="130" y="270" fill="#a7f3d0" fontSize="9">Satara</text>

              {/* 8. WESTERN MH: Kolhapur & Sangli (Safe 🟢) */}
              <polygon 
                points="115,290 195,295 180,340 100,335" 
                fill={selectedDistrict.district === 'Kolhapur' ? '#047857' : '#064e3b'} 
                stroke="#10b981" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-emerald-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Kolhapur') || stateDistricts[0])} 
              />
              <text x="120" y="318" fill="#a7f3d0" fontSize="9">Kolhapur/Sangli</text>

              {/* 9. MARATHWADA: Chh. Sambhajinagar (Moderate 🟡) */}
              <polygon 
                points="265,120 340,110 330,180 255,185" 
                fill={selectedDistrict.district?.includes('Sambhajinagar') ? '#d97706' : '#78350f'} 
                stroke="#f59e0b" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:fill-amber-600 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district?.includes('Sambhajinagar')) || stateDistricts[0])} 
              />
              <text x="270" y="145" fill="#fde68a" fontSize="8" fontWeight="bold">Sambhajinagar</text>

              {/* 10. MARATHWADA: Nanded & Latur (Watch 🟡) */}
              <polygon 
                points="330,180 395,175 385,250 310,240" 
                fill={selectedDistrict.district === 'Nanded' ? '#d97706' : '#451a03'} 
                stroke="#b45309" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-amber-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Nanded') || stateDistricts[0])} 
              />
              <text x="330" y="210" fill="#fed7aa" fontSize="9">Nanded/Latur</text>

              {/* 11. VIDARBHA: Amravati & Akola (Safe 🟢) */}
              <polygon 
                points="270,60 380,60 370,130 265,120" 
                fill="#064e3b" 
                stroke="#10b981" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-emerald-700 transition" 
              />
              <text x="295" y="90" fill="#a7f3d0" fontSize="9">Amravati</text>

              {/* 12. VIDARBHA: Nagpur & Wardha (Safe 🟢) */}
              <polygon 
                points="380,60 480,75 465,160 370,130" 
                fill={selectedDistrict.district === 'Nagpur' ? '#047857' : '#064e3b'} 
                stroke="#10b981" 
                strokeWidth="1.5" 
                className="cursor-pointer hover:fill-emerald-700 transition" 
                onClick={() => setSelectedDistrict(stateDistricts.find(d => d.district === 'Nagpur') || stateDistricts[0])} 
              />
              <text x="400" y="105" fill="#a7f3d0" fontSize="10" fontWeight="bold">Nagpur</text>

              {/* 13. VIDARBHA: Chandrapur & Gadchiroli (Safe 🟢) */}
              <polygon 
                points="395,175 465,160 445,260 385,250" 
                fill="#064e3b" 
                stroke="#10b981" 
                strokeWidth="1" 
                className="cursor-pointer hover:fill-emerald-700 transition" 
              />
              <text x="400" y="210" fill="#a7f3d0" fontSize="9">Chandrapur</text>
            </svg>
          </div>

          {/* Map Legend Bar */}
          <div className="bg-slate-900 p-2.5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] gap-2">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Critical</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Elevated</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Moderate</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Safe</span>
          </div>

          {/* Realtime Selected District Inspection Dossier */}
          {selectedDistrict && (
            <div className="p-4 bg-slate-900/95 rounded-2xl border border-purple-800/60 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div>
                  <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                    <Crosshair className="w-4 h-4 text-purple-400" />
                    <span>{selectedDistrict.district} District Dossier</span>
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono">Division: {selectedDistrict.division || 'Western MH'}</p>
                </div>
                <RiskBadge level={selectedDistrict.risk} size="sm" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Monitored Cattle:</span>
                  <span className="font-bold text-white text-xs">{selectedDistrict.livestock}</span>
                </div>

                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Vaccination Coverage:</span>
                  <span className="font-bold text-emerald-400 text-xs">{selectedDistrict.vacCoverage}%</span>
                </div>

                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Active Outbreaks:</span>
                  <span className="font-bold text-red-400 text-xs">{selectedDistrict.activeClusters} Clusters</span>
                </div>

                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Response Velocity:</span>
                  <span className="font-mono font-bold text-slate-300 text-xs">{selectedDistrict.avgResponse}</span>
                </div>
              </div>

              <button
                onClick={() => handleDispatchStateResource(selectedDistrict)}
                className="w-full py-2.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Release ₹25 Lakhs Contingency Buffer</span>
              </button>
            </div>
          )}
        </div>

        {/* Right: DISTRICT COMPARISON & SURVEILLANCE RANKING (7 cols on xl) */}
        <div className="xl:col-span-7 bg-white rounded-3xl border border-[#ECE6D6] p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
            <div>
              <h3 className="font-black text-sm text-[#0A1020]">DISTRICT COMPARISON & SURVEILLANCE RANKING</h3>
              <p className="text-xs text-slate-500">Live risk intensity across 36 districts</p>
            </div>

            <select
              value={filterRisk}
              onChange={e => setFilterRisk(e.target.value)}
              className="px-3 py-1.5 border border-[#ECE6D6] rounded-xl text-xs bg-[#F6F3EA] font-bold text-slate-800 self-start sm:self-auto"
            >
              <option value="all">All Risk Levels</option>
              <option value="CRITICAL">Critical (🔴)</option>
              <option value="HIGH">Elevated (🟠)</option>
              <option value="MEDIUM">Moderate (🟡)</option>
              <option value="LOW">Low (🟢)</option>
            </select>
          </div>

          {/* 1. Mobile Cards View (Visible on screens < md) */}
          <div className="block md:hidden space-y-3">
            {filteredDistricts.map((d) => {
              const isSelected = selectedDistrict?.district === d.district;
              return (
                <div
                  key={d.district}
                  onClick={() => setSelectedDistrict(d)}
                  className={`p-4 rounded-2xl border transition space-y-2.5 cursor-pointer ${
                    isSelected ? 'bg-purple-50/70 border-purple-400 shadow-sm' : 'bg-[#F6F3EA] border-[#ECE6D6]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-sm text-[#0A1020]">{d.district}</h4>
                    <RiskBadge level={d.risk} size="sm" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-xl border border-[#ECE6D6]">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Clusters:</span>
                      <span className={`font-bold ${d.activeClusters > 0 ? 'text-red-700' : 'text-slate-600'}`}>
                        {d.activeClusters > 0 ? `${d.activeClusters} (${d.activeCases} Cases)` : '0 Active'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Vaccine Coverage:</span>
                      <span className="font-bold text-emerald-800">{d.vacCoverage}%</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Livestock:</span>
                      <span className="font-bold text-slate-800">{d.livestock}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Response Velocity:</span>
                      <span className="font-mono text-slate-600">{d.avgResponse}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDispatchStateResource(d);
                    }}
                    className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Dispatch Emergency Resource</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* 2. Desktop Table View (Visible on screens >= md) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                  <th className="py-2.5 px-2.5">District</th>
                  <th className="py-2.5 px-2.5">Risk Tier</th>
                  <th className="py-2.5 px-2.5">Active Outbreaks</th>
                  <th className="py-2.5 px-2.5">Coverage</th>
                  <th className="py-2.5 px-2.5">Response</th>
                  <th className="py-2.5 px-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE6D6]">
                {filteredDistricts.map((d) => {
                  const isSelected = selectedDistrict?.district === d.district;
                  return (
                    <tr 
                      key={d.district}
                      onClick={() => setSelectedDistrict(d)}
                      className={`cursor-pointer transition ${isSelected ? 'bg-purple-100/60 font-semibold' : 'hover:bg-purple-50/40'}`}
                    >
                      <td className="py-2.5 px-2.5 font-bold text-[#0A1020] whitespace-nowrap">
                        {d.district}
                      </td>
                      <td className="py-2.5 px-2.5">
                        <RiskBadge level={d.risk} size="sm" />
                      </td>
                      <td className="py-2.5 px-2.5">
                        {d.activeClusters > 0 ? (
                          <span className="text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap">
                            {d.activeClusters} Clusters ({d.activeCases})
                          </span>
                        ) : (
                          <span className="text-slate-500 font-normal text-[11px]">0 Clusters</span>
                        )}
                      </td>
                      <td className="py-2.5 px-2.5 font-semibold text-slate-800 whitespace-nowrap">
                        <span className={d.vacCoverage < 80 ? "text-amber-700 font-bold" : "text-emerald-700"}>
                          {d.vacCoverage}%
                        </span>
                      </td>
                      <td className="py-2.5 px-2.5 text-slate-600 font-mono text-[11px] whitespace-nowrap">
                        {d.avgResponse}
                      </td>
                      <td className="py-2.5 px-2.5 text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDispatchStateResource(d);
                          }}
                          className="px-2.5 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-[11px] font-bold shadow-xs transition"
                        >
                          Dispatch
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
