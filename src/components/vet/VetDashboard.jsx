import React, { useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  ShieldAlert, 
  TestTube2, 
  Clock, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  MapPin, 
  FileText,
  Hospital,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import CaseDetailDrawer from './CaseDetailDrawer';
import RiskBadge from '../common/RiskBadge';

export default function VetDashboard() {
  const { cases, setSelectedCaseForDrawer, selectedCaseForDrawer, t } = useApp();
  const [filterRisk, setFilterRisk] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const activeSignalCase = cases.find(c => c.caseId === "PS-2026-004281") || cases[0];

  const filteredCases = cases.filter(c => {
    const matchesRisk = filterRisk === 'all' || c.riskLevel === filterRisk;
    const matchesSearch = c.caseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.suspectedDisease.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  return (
    <div className="space-y-6 text-slate-100">
      {/* 1. Header: Professional Clinical Command Console */}
      <div className="p-5 bg-midnight rounded-2xl border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300 border border-blue-500/20 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>Clinical Intelligence Workspace</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">Baramati Taluka Veterinary Hospital</h2>
          <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
            <span>Doctor: Dr. Anand Deshmukh, B.V.Sc</span>
            <span>•</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-tealBrand" /> Baramati Sector 2</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 text-right text-xs">
            <span className="text-slate-400 block text-[10px]">Triage Queue:</span>
            <span className="font-mono font-bold text-amber-400 text-sm">{cases.length} Active Cases</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN DASHBOARD: ONE LARGE INTELLIGENCE OVERVIEW */}
      {activeSignalCase && (
        <div className="bg-gradient-to-br from-slate-950 via-midnight to-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
            <span className="font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              ACTIVE CLINICAL SIGNAL OVERVIEW
            </span>
            <span className="text-slate-400 font-mono">Signal Reference: {activeSignalCase.caseId}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Area: Large Risk Score & Suspected Diagnosis (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <RiskBadge level={activeSignalCase.riskLevel} size="lg" />
                <span className="text-xs font-mono bg-red-950 text-red-300 px-3 py-1 rounded-full border border-red-800 font-bold">
                  Score: {activeSignalCase.riskScore} / 100
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeSignalCase.suspectedDisease}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Flagged by AI Decision Engine due to fever, nodular skin lesions, and spatial proximity to 2 active cases in Malegaon.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setSelectedCaseForDrawer(activeSignalCase)}
                  className="px-6 py-3 bg-tealBrand hover:bg-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Launch AI Triage & Differential Diagnosis</span>
                </button>
              </div>
            </div>

            {/* Right Area: Case Metadata Box (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Patient Metadata</span>
              <div className="space-y-2 divide-y divide-slate-800 text-slate-300">
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400">Animal & Tag:</span>
                  <span className="font-mono font-bold text-white">{activeSignalCase.species} ({activeSignalCase.animalId})</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">Owner & Phone:</span>
                  <span className="font-bold text-white">{activeSignalCase.farmerName} ({activeSignalCase.farmerPhone})</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">Village Location:</span>
                  <span className="font-bold text-emerald-400">{activeSignalCase.village}, Baramati</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">Time Since Report:</span>
                  <span className="font-mono font-bold text-amber-400">15 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. CASES REQUIRING ACTION (Professional Table) */}
      <div className="bg-midnight rounded-2xl border border-slate-800 p-5 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-extrabold text-sm text-white">CASES REQUIRING CLINICAL ACTION</h3>
            <p className="text-xs text-slate-400">Triage queue sorted by risk score priority</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search case, farmer, or disease..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-tealBrand"
              />
            </div>

            <select
              value={filterRisk}
              onChange={e => setFilterRisk(e.target.value)}
              className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-semibold"
            >
              <option value="all">All Risk Tiers</option>
              <option value="CRITICAL">🔴 Critical Risk</option>
              <option value="HIGH">🟠 High Risk</option>
              <option value="MEDIUM">🟡 Medium Risk</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/80 text-slate-400 font-bold border-b border-slate-800">
                <th className="py-3 px-3">Case Reference</th>
                <th className="py-3 px-3">Risk Index</th>
                <th className="py-3 px-3">Farmer & Location</th>
                <th className="py-3 px-3">Suspected Syndrome</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {filteredCases.map((c) => (
                <tr 
                  key={c.caseId}
                  onClick={() => setSelectedCaseForDrawer(c)}
                  className="hover:bg-slate-900/90 cursor-pointer transition"
                >
                  <td className="py-3 px-3 font-mono font-bold text-white">
                    {c.caseId}
                  </td>
                  <td className="py-3 px-3">
                    <RiskBadge level={c.riskLevel} size="sm" />
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-white">{c.farmerName}</div>
                    <div className="text-[10px] text-slate-400">{c.village}, Baramati</div>
                  </td>
                  <td className="py-3 px-3 text-slate-200">
                    {c.suspectedDisease}
                  </td>
                  <td className="py-3 px-3">
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCaseForDrawer(c);
                      }}
                      className="px-3 py-1 bg-tealBrand hover:bg-teal-600 text-white font-bold text-[11px] rounded-lg transition"
                    >
                      Investigate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. EMERGING PATTERNS (Chart + Cluster Summary) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-midnight rounded-2xl border border-slate-800 space-y-3">
          <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-tealBrand" />
            <span>Emerging Vector & Disease Patterns</span>
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Stomoxys fly density in Khedgaon sugarcane sector has surged 28% following recent unseasonal rains. High correlation with Capripoxvirus Transmission.
          </p>
        </div>

        <div className="p-5 bg-midnight rounded-2xl border border-slate-800 space-y-3">
          <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Active Outbreak Cluster Summary</span>
          </h4>
          <div className="p-3 bg-red-950/40 rounded-xl border border-red-900/50 text-xs text-red-200">
            <strong>Baramati Cluster #3:</strong> 8 cases confirmed in 5km radius across Khedgaon & Malegaon Budruk. Mandatory ring vaccination dispatches active.
          </div>
        </div>
      </div>

      {/* Case Detail Drawer */}
      {selectedCaseForDrawer && (
        <CaseDetailDrawer 
          caseData={selectedCaseForDrawer}
          onClose={() => setSelectedCaseForDrawer(null)}
        />
      )}
    </div>
  );
}
