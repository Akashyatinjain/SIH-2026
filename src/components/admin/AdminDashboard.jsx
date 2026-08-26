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
  Radio,
  FileText,
  Layers,
  ArrowRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import GISDiseaseMap from './GISDiseaseMap';
import WeatherCorrelationWidget from './WeatherCorrelationWidget';
import BlockAnalyticsCharts from './BlockAnalyticsCharts';
import AdvisoryStudio from './AdvisoryStudio';
import StatCard from '../common/StatCard';
import RiskBadge from '../common/RiskBadge';

export default function AdminDashboard() {
  const { 
    isAdvisoryStudioOpen, 
    setIsAdvisoryStudioOpen,
    hotspots,
    addNotification
  } = useApp();

  const primaryCluster = hotspots[0] || {
    name: "Baramati Hotspot (Khedgaon Focus)",
    activeCases: 7,
    villagesAffected: ["Khedgaon", "Malegaon Budruk", "Gunawadi"],
    suspectedDisease: "Lumpy Skin Disease (Capripoxvirus)"
  };

  const handleDeployRRT = () => {
    addNotification("🚨 Rapid Response Team Deployed", "Mobile Veterinary Polyclinic & 2,000 Ring Vaccine doses dispatched to Baramati Cluster.", "alert");
    alert("Rapid Response Team & Ring Vaccination Unit dispatched to Baramati (Khedgaon, Malegaon, Gunawadi)!");
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* 1. Header: Pune District Command Banner (Section 27) */}
      <div className="p-6 bg-gradient-to-r from-indigo-950 via-[#0A1020] to-[#050811] text-white rounded-3xl shadow-sm border border-indigo-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-indigo-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span>District Command • Pune Collectorate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Pune District Animal Health Command</h2>
          <p className="text-xs text-indigo-200 mt-0.5">
            Supervising 13 Talukas • 1,420,000 Monitored Cattle & Small Ruminants
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsAdvisoryStudioOpen(true)}
            className="px-4 py-2.5 bg-[#149A84] hover:bg-[#0C7A68] text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
          >
            <Radio className="w-4 h-4 text-emerald-200" />
            <span>Launch Advisory Broadcast Studio</span>
          </button>
        </div>
      </div>

      {/* 2. COMMAND CENTER FIRST VIEWPORT: GIS Map ~60% + Active Outbreak Panel ~40% (Section 27 & 28) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large GIS Map Occupying ~60% (7 cols) */}
        <div className="lg:col-span-7">
          <GISDiseaseMap />
        </div>

        {/* Right Side: ACTIVE RESPONSE EVENT PANEL (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* ACTIVE OUTBREAK RESPONSE CRITICAL EVENT PANEL */}
          <div className="bg-gradient-to-br from-red-950 via-[#0A1020] to-slate-900 text-white p-5 rounded-3xl border-2 border-red-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-red-900/60 pb-3">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                SPATIAL CLUSTER DETECTED
              </span>
              <RiskBadge level="CRITICAL" size="sm" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-white">BARAMATI CLUSTER</h3>
              <p className="text-xs text-red-200 font-medium">{primaryCluster.suspectedDisease}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-slate-900/90 p-3 rounded-2xl border border-red-900/50 text-center text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Suspected</span>
                <span className="font-black text-red-400 text-base">{primaryCluster.activeCases} Cases</span>
              </div>
              <div className="border-x border-slate-800 px-1">
                <span className="text-slate-400 block text-[10px]">Villages</span>
                <span className="font-bold text-white text-xs">3 Affected</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Spatial Risk</span>
                <span className="font-bold text-amber-400 text-xs">High (8.2)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <button
                onClick={handleDeployRRT}
                className="py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black text-xs shadow-md transition flex items-center justify-center gap-1.5"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Deploy Rapid Response Team</span>
              </button>

              <button
                onClick={() => setIsAdvisoryStudioOpen(true)}
                className="py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5"
              >
                <Radio className="w-4 h-4 text-emerald-300" />
                <span>Issue Farmer Advisory</span>
              </button>
            </div>
          </div>

          {/* Section 50: DISTRICT DECISION SUPPORT (Decision-Oriented Cards) */}
          <div className="bg-white rounded-3xl border border-[#ECE6D6] p-5 shadow-xs space-y-3 text-xs">
            <h4 className="font-black text-sm text-[#0A1020] flex items-center gap-2 border-b border-[#ECE6D6] pb-2">
              <Sparkles className="w-4 h-4 text-indigo-700" />
              <span>DISTRICT DECISION SUPPORT (ACTIONABLE SIGNALS)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 bg-red-50 rounded-2xl border border-red-200">
                <span className="font-mono text-[10px] text-red-700 font-extrabold uppercase block">WHERE IS RISK RISING?</span>
                <span className="font-extrabold text-sm text-red-950">Baramati Block</span>
                <p className="text-[11px] text-red-800 mt-0.5">+4 cases in 24h • Vector Index 8.2</p>
              </div>

              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
                <span className="font-mono text-[10px] text-amber-700 font-extrabold uppercase block">WHERE IS VACCINE BELOW TARGET?</span>
                <span className="font-extrabold text-sm text-amber-950">3 Blocks (Daund, Indapur)</span>
                <p className="text-[11px] text-amber-800 mt-0.5">69.8% vs 85% target threshold</p>
              </div>

              <div className="p-3 bg-teal-50 rounded-2xl border border-teal-200">
                <span className="font-mono text-[10px] text-teal-700 font-extrabold uppercase block">WHERE SHOULD FIELD TEAMS GO?</span>
                <span className="font-extrabold text-sm text-teal-950">4 Priority Villages</span>
                <p className="text-[11px] text-teal-800 mt-0.5">Khedgaon, Malegaon, Gunawadi, Patas</p>
              </div>

              <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200">
                <span className="font-mono text-[10px] text-purple-700 font-extrabold uppercase block">WHERE IS MORTALITY ABNORMAL?</span>
                <span className="font-extrabold text-sm text-purple-950">2 Spatial Clusters</span>
                <p className="text-[11px] text-purple-800 mt-0.5">Kurkumbh (Poultry) & Baramati</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Section 29: PRIORITY METRICS & TREND INTELLIGENCE */}
      <div className="space-y-6">
        <WeatherCorrelationWidget />
        <BlockAnalyticsCharts />
      </div>

      {/* Advisory Broadcast Studio Modal */}
      {isAdvisoryStudioOpen && (
        <AdvisoryStudio onClose={() => setIsAdvisoryStudioOpen(false)} />
      )}
    </div>
  );
}
