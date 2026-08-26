import React, { useState } from 'react';
import { 
  MapPin, 
  Layers, 
  Filter, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle, 
  Crosshair, 
  Building2, 
  Syringe, 
  TestTube2, 
  Sparkles,
  Info,
  Maximize2,
  X,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function GISDiseaseMap({ showInspector = true }) {
  const { hotspots, cases, t, addNotification } = useApp();
  
  const [selectedHotspot, setSelectedHotspot] = useState(hotspots[0] || null);
  const [activeLayers, setActiveLayers] = useState({
    hotspots: true,
    hospitals: true,
    labs: true,
    quarantine: true,
    camps: true
  });
  const [diseaseFilter, setDiseaseFilter] = useState('all');
  const [selectedBlock, setSelectedBlock] = useState('Baramati');

  const toggleLayer = (layerKey) => {
    setActiveLayers({ ...activeLayers, [layerKey]: !activeLayers[layerKey] });
  };

  const handleDeployRRT = (hotspot) => {
    addNotification("🚨 Rapid Response Team Deployed", `RRT & Ring Vaccination dispatched to ${hotspot.name} (${hotspot.villagesAffected.join(', ')}).`, "alert");
    alert(`Rapid Response Veterinary Mobile Unit & 2,000 Ring Vaccine doses dispatched to ${hotspot.name}!`);
  };

  return (
    <div className="space-y-4">
      {/* Map Control Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-100 text-indigo-800 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900">{t.gisMapTitle || "GIS Outbreak Map"}</h3>
            <p className="text-[11px] text-slate-500">Live Spatial Clustering & Outbreak Early Warning</p>
          </div>
        </div>

        {/* Layer Toggles */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            onClick={() => toggleLayer('hotspots')}
            className={`px-2.5 py-1 rounded-lg border font-semibold transition flex items-center gap-1 text-[11px] ${
              activeLayers.hotspots ? 'bg-red-600 text-white border-red-600' : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
          >
            <span>🔴 Hotspots</span>
          </button>
          <button
            onClick={() => toggleLayer('hospitals')}
            className={`px-2.5 py-1 rounded-lg border font-semibold transition flex items-center gap-1 text-[11px] ${
              activeLayers.hospitals ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
          >
            <span>🏥 Hospitals</span>
          </button>
          <button
            onClick={() => toggleLayer('labs')}
            className={`px-2.5 py-1 rounded-lg border font-semibold transition flex items-center gap-1 text-[11px] ${
              activeLayers.labs ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
          >
            <span>🧪 Labs</span>
          </button>
          <button
            onClick={() => toggleLayer('camps')}
            className={`px-2.5 py-1 rounded-lg border font-semibold transition flex items-center gap-1 text-[11px] ${
              activeLayers.camps ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
          >
            <span>💉 Camps</span>
          </button>
        </div>
      </div>

      {/* Main Map Visual Canvas */}
      <div className={showInspector ? "grid grid-cols-1 xl:grid-cols-12 gap-4 items-start" : "w-full"}>
        {/* Interactive Pune District SVG Map */}
        <div className={`${showInspector ? "xl:col-span-8" : "w-full"} bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-5 text-white relative min-h-[440px] flex flex-col justify-between overflow-hidden shadow-md`}>
          {/* Map Title overlay */}
          <div className="flex flex-wrap items-center justify-between gap-2 z-10">
            <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono">
              <span className="text-slate-400">District:</span> <strong className="text-emerald-400">Pune (पुणे)</strong> | <span className="text-slate-400">Total Blocks:</span> 13
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-red-300 font-bold">4 Active Outbreak Rings</span>
            </div>
          </div>

          {/* SVG Map of Pune District with 13 Blocks */}
          <div className="relative w-full h-[320px] sm:h-[350px] my-2 flex items-center justify-center">
            <svg viewBox="0 0 800 500" className="w-full h-full max-h-[360px]">
              <defs>
                <radialGradient id="hotspotGradRed" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#ef4444" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="hotspotGradAmber" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* District Background Outline */}
              <path 
                d="M 120 180 L 220 70 L 400 60 L 580 120 L 710 240 L 730 380 L 590 460 L 410 440 L 260 410 L 140 330 Z" 
                fill="#0f172a" 
                stroke="#334155" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
              />

              {/* Block 1: Junnar */}
              <polygon points="260,70 380,60 370,140 250,130" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="290" y="105" fill="#94a3b8" fontSize="11" fontWeight="bold">Junnar</text>

              {/* Block 2: Ambegaon */}
              <polygon points="230,130 350,140 340,190 220,180" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="250" y="165" fill="#94a3b8" fontSize="10">Ambegaon</text>

              {/* Block 3: Khed */}
              <polygon points="220,180 340,190 350,240 210,240" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="260" y="215" fill="#94a3b8" fontSize="10">Khed</text>

              {/* Block 4: Shirur (Moderate Hotspot) */}
              <polygon points="350,140 520,130 540,230 350,240" fill="#334155" stroke="#64748b" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="410" y="190" fill="#cbd5e1" fontSize="12" fontWeight="bold">Shirur</text>

              {/* Block 5: Haveli / Pune City */}
              <polygon points="210,240 370,240 370,310 220,310" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="260" y="280" fill="#94a3b8" fontSize="11" fontWeight="bold">Haveli (Pune)</text>

              {/* Block 6: Daund (Critical Hotspot) */}
              <polygon points="370,240 540,230 560,330 380,330" fill="#2d1a24" stroke="#e11d48" strokeWidth="2" className="hover:fill-rose-950 cursor-pointer transition" />
              <text x="440" y="285" fill="#fda4af" fontSize="12" fontWeight="bold">Daund</text>

              {/* Block 7: Purandar */}
              <polygon points="220,310 380,310 370,380 230,370" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="270" y="345" fill="#94a3b8" fontSize="10">Purandar</text>

              {/* Block 8: Baramati (PRIMARY DEMO CRITICAL HOTSPOT) */}
              <polygon 
                points="380,310 560,330 580,430 390,420" 
                fill="#3f1219" 
                stroke="#ef4444" 
                strokeWidth="2.5" 
                className="hover:fill-red-950 cursor-pointer transition" 
                onClick={() => setSelectedHotspot(hotspots[0])}
              />
              <text x="450" y="375" fill="#fecaca" fontSize="14" fontWeight="bold">Baramati</text>
              <text x="440" y="392" fill="#f87171" fontSize="10" fontStyle="italic">(Khedgaon Focus)</text>

              {/* Block 9: Indapur */}
              <polygon 
                points="560,330 700,280 720,400 580,430" 
                fill="#332a15" 
                stroke="#f59e0b" 
                strokeWidth="1.5" 
                className="hover:fill-amber-950 cursor-pointer transition" 
                onClick={() => setSelectedHotspot(hotspots[1] || hotspots[0])}
              />
              <text x="610" y="370" fill="#fde68a" fontSize="12" fontWeight="bold">Indapur</text>

              {/* Block 10: Bhor */}
              <polygon points="140,330 230,370 210,430 130,390" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="160" y="380" fill="#94a3b8" fontSize="10">Bhor</text>

              {/* Block 11: Maval & Mulshi */}
              <polygon points="120,180 220,180 210,310 120,270" fill="#1e293b" stroke="#475569" strokeWidth="1.5" className="hover:fill-slate-700 cursor-pointer transition" />
              <text x="145" y="245" fill="#94a3b8" fontSize="10">Maval/Mulshi</text>

              {/* Vector Data: Pulsing Cluster Rings */}
              {activeLayers.hotspots && (
                <>
                  {/* Baramati Hotspot */}
                  <circle cx="480" cy="380" r="45" fill="url(#hotspotGradRed)" className="animate-pulse" />
                  <circle cx="480" cy="380" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                  <text x="495" y="385" fill="#fee2e2" fontSize="11" fontWeight="bold">7 Cases (LSD Cluster)</text>

                  {/* Daund Hotspot */}
                  <circle cx="460" cy="285" r="32" fill="url(#hotspotGradRed)" />
                  <circle cx="460" cy="285" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="475" y="288" fill="#fee2e2" fontSize="10">3 Cases</text>

                  {/* Indapur Hotspot */}
                  <circle cx="630" cy="365" r="30" fill="url(#hotspotGradAmber)" />
                  <circle cx="630" cy="365" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="645" y="365" fill="#fef08a" fontSize="10">4 Cases (PPR)</text>
                </>
              )}

              {/* Testing Labs Markers */}
              {activeLayers.labs && (
                <g>
                  <circle cx="290" cy="270" r="6" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="302" y="273" fill="#e9d5ff" fontSize="9" fontWeight="bold">🧪 Pune Regional Lab</text>
                </g>
              )}

              {/* Veterinary Hospitals */}
              {activeLayers.hospitals && (
                <g>
                  <circle cx="470" cy="395" r="6" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="482" y="398" fill="#bfdbfe" fontSize="9" fontWeight="bold">🏥 Baramati Hospital</text>
                </g>
              )}
            </svg>
          </div>

          {/* Map Legend Bar */}
          <div className="bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] gap-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Critical Cluster</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Moderate Alert</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> BSL-2/3 Lab</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Vet Hospital</span>
            </div>
            <span className="text-slate-400 font-mono text-[10px]">WGS84 EPSG:4326</span>
          </div>
        </div>

        {/* Hotspot Inspector Panel */}
        {showInspector && (
          <div className="xl:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                  <h4 className="font-extrabold text-sm text-slate-900">Cluster Inspection</h4>
                </div>
                <RiskBadge level={selectedHotspot?.riskLevel || "CRITICAL"} size="sm" />
              </div>

              {selectedHotspot ? (
                <div className="space-y-3 text-xs">
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">{selectedHotspot.name}</h5>
                    <p className="text-slate-500">Block: {selectedHotspot.block} • Radius: {selectedHotspot.radiusKm} km</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-xl border border-red-200 space-y-1.5 text-red-950">
                    <div className="flex justify-between">
                      <span>Active Suspected Cases:</span>
                      <strong className="text-red-900 text-sm">{selectedHotspot.activeCases}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Affected Villages:</span>
                      <strong>{selectedHotspot.villagesAffected?.join(', ') || "Khedgaon"}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Disease:</span>
                      <strong className="text-red-900">{selectedHotspot.suspectedDisease}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Vector Fly Risk Index:</span>
                      <strong>{selectedHotspot.vectorRisk}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Vaccination Deficit:</span>
                      <strong className="text-amber-800">{selectedHotspot.vaccinationDeficit}</strong>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 space-y-1">
                    <p className="font-bold text-slate-900">Surveillance Status:</p>
                    <p className="text-[11px] text-slate-600">{selectedHotspot.rrtStatus}</p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-500">Click on any hotspot cluster on the map to inspect.</p>
              )}
            </div>

            {/* Quick Outbreak Mitigation CTAs */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => handleDeployRRT(selectedHotspot)}
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>{t.deployRRT || "Deploy Rapid Response Team"}</span>
              </button>

              <button
                onClick={() => alert(`Broadcasting Ring SMS Advisory to all 1,420 livestock farmers in ${selectedHotspot?.block || 'Baramati'} block!`)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold text-xs transition text-center"
              >
                Broadcast Farmer Ring SMS Advisory
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
