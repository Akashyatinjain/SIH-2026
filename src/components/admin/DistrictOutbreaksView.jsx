import React, { useState } from 'react';
import { 
  ShieldAlert, 
  MapPin, 
  PlusCircle, 
  Radio, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { geographicHotspots } from '../../data/mockData';
import RiskBadge from '../common/RiskBadge';

export default function DistrictOutbreaksView() {
  const { hotspots, addNotification, setIsAdvisoryStudioOpen } = useApp();
  const clusters = hotspots || geographicHotspots;

  const [selectedCluster, setSelectedCluster] = useState(clusters[0]);

  const handleDeployRRT = (cluster) => {
    addNotification("🚨 Rapid Response Team Deployed", `Mobile Poly-Clinic dispatched to ${cluster.name}.`, "alert");
    alert(`Rapid Response Team dispatched to ${cluster.name}! Containment protocols active.`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-red-950 via-[#0A1020] to-[#050811] text-white rounded-3xl shadow-sm border border-red-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-red-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>District Epidemiological Containment Command</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Spatial Outbreak Clusters & Zones</h2>
          <p className="text-xs text-red-200 mt-0.5">
            Surveillance & Ring Containment perimeters across 13 Talukas of Pune
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-red-900 text-xs flex items-center gap-3">
          <div>
            <span className="text-slate-400 block text-[10px]">Active Clusters</span>
            <span className="font-black text-red-400 text-sm">4 Monitored Zones</span>
          </div>
        </div>
      </div>

      {/* Outbreak Clusters List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">ACTIVE DISTRICT HOTSPOT CLUSTERS</h3>

        <div className="space-y-4">
          {clusters.map((h) => (
            <div
              key={h.id}
              className="bg-white p-6 rounded-3xl border-2 border-[#ECE6D6] hover:border-red-500 transition shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-xl border border-red-200">
                    {h.id}
                  </span>
                  <RiskBadge level={h.riskLevel} size="sm" />
                  <span className="text-xs font-mono font-bold text-slate-500">{h.block} Taluka</span>
                </div>
                <span className="text-xs text-slate-500">{h.lastReported}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-8 space-y-2">
                  <h4 className="font-black text-lg text-[#0A1020]">{h.name}</h4>
                  <p className="text-xs text-red-700 font-bold">Suspected: {h.suspectedDisease}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-slate-600 pt-1">
                    <span><strong>Villages:</strong> {h.villagesAffected.join(', ')}</span>
                    <span>•</span>
                    <span><strong>Species:</strong> {h.speciesAffected.join(', ')}</span>
                    <span>•</span>
                    <span><strong>Vector Index:</strong> {h.vectorRisk}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-end gap-2 text-xs">
                  <button
                    onClick={() => handleDeployRRT(h)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-md transition"
                  >
                    Deploy RRT Unit
                  </button>
                  <button
                    onClick={() => setIsAdvisoryStudioOpen(true)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#073B32] hover:bg-[#052923] text-white font-bold rounded-xl shadow-xs transition"
                  >
                    Broadcast Advisory
                  </button>
                </div>
              </div>

              <div className="p-3 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] flex items-center justify-between text-xs text-slate-700">
                <span>RRT Status: <strong>{h.rrtStatus}</strong></span>
                <span className="font-mono font-bold text-[#073B32]">Vaccine Deficit: {h.vaccinationDeficit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
