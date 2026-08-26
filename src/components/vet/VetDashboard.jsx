import React, { useState } from 'react';
import { 
  Stethoscope, 
  Search, 
  Filter, 
  AlertTriangle, 
  Clock, 
  FileText, 
  TestTube2, 
  Building2, 
  Syringe, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Activity
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import CaseDetailDrawer from './CaseDetailDrawer';
import StatCard from '../common/StatCard';
import RiskBadge from '../common/RiskBadge';

export default function VetDashboard() {
  const { cases, setSelectedCase, selectedCase } = useApp();
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCases = cases.filter(c => {
    const matchesRisk = filterLevel === 'all' || c.riskLevel === filterLevel;
    const matchesSearch = c.caseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.suspectedDisease.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  const urgentCases = cases.filter(c => c.riskLevel === 'CRITICAL' || c.riskLevel === 'HIGH');
  const primarySignalCase = cases[0]; // #PS-2026-004281 (Gauri / Ramesh Patil)

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* 1. Header: Baramati Veterinary Network Clinical Banner (Section 22) */}
      <div className="p-6 bg-gradient-to-r from-[#073B32] via-[#0A1020] to-[#050811] text-white rounded-3xl shadow-sm border border-[#073B32] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Clinical Intelligence • Baramati Taluka Vet Hospital</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Baramati Veterinary Network</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Supervising 14 Village Aid Centers • Dr. Anand Deshmukh, Lead Veterinary Officer
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="bg-slate-900/90 px-3.5 py-2 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
            <div>
              <span className="text-slate-400 block text-[10px]">Active Cases</span>
              <span className="font-black text-white text-base">128 Cases</span>
            </div>
            <div className="border-l border-slate-800 pl-3">
              <span className="text-slate-400 block text-[10px]">Urgent Signals</span>
              <span className="font-black text-red-400 text-base">4 Urgent</span>
            </div>
            <div className="border-l border-slate-800 pl-3">
              <span className="text-slate-400 block text-[10px]">Labs Pending</span>
              <span className="font-black text-amber-400 text-base">3 Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Highlighted Clinical Signal Hero: Case #PS-2026-004281 */}
      {primarySignalCase && (
        <div 
          onClick={() => setSelectedCase(primarySignalCase)}
          className="bg-gradient-to-r from-red-950 via-slate-900 to-[#0A1020] text-white p-5 rounded-3xl border-2 border-red-800 shadow-xl cursor-pointer hover:border-red-600 transition"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-900/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider">
                ACTIVE CLINICAL SIGNAL #{primarySignalCase.caseId}
              </span>
              <RiskBadge level={primarySignalCase.riskLevel} size="sm" />
            </div>
            <span className="text-xs text-slate-400">{primarySignalCase.reportedAt}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-3">
            <div className="md:col-span-8 space-y-1">
              <h3 className="text-lg sm:text-xl font-black text-white">
                {primarySignalCase.species} ({primarySignalCase.breed}) — {primarySignalCase.suspectedDisease}
              </h3>
              <p className="text-xs text-red-200">
                Farmer: <strong>{primarySignalCase.farmerName}</strong> • Village: <strong>{primarySignalCase.village}</strong> • Signs: {primarySignalCase.symptoms.join(', ')}
              </p>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black shadow-md flex items-center gap-2 transition">
                <Sparkles className="w-4 h-4" />
                <span>Open Clinical Workspace →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Section 23: DENSE CLINICAL CASES TABLE */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
          <div>
            <h3 className="font-black text-base text-[#0A1020]">Cases Requiring Clinical Attention</h3>
            <p className="text-xs text-slate-500">Live surveillance cases reported across Baramati sector</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search case, animal, village..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none focus:border-[#149A84] w-48 sm:w-64"
              />
            </div>

            <select
              value={filterLevel}
              onChange={e => setFilterLevel(e.target.value)}
              className="px-3 py-1.5 border border-[#ECE6D6] rounded-xl text-xs bg-[#F6F3EA] font-bold text-slate-800"
            >
              <option value="all">All Tiers</option>
              <option value="CRITICAL">Critical</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>
        </div>

        {/* Dense Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                <th className="py-3 px-3">Priority</th>
                <th className="py-3 px-3">Case ID</th>
                <th className="py-3 px-3">Animal</th>
                <th className="py-3 px-3">Village</th>
                <th className="py-3 px-3">Observed Signals</th>
                <th className="py-3 px-3">Risk Score</th>
                <th className="py-3 px-3">Reported</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECE6D6]">
              {filteredCases.map((c) => (
                <tr 
                  key={c.caseId}
                  onClick={() => setSelectedCase(c)}
                  className="hover:bg-[#D9F1E8]/30 cursor-pointer transition"
                >
                  <td className="py-3 px-3">
                    <RiskBadge level={c.riskLevel} size="sm" />
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-[#073B32]">
                    {c.caseId}
                  </td>
                  <td className="py-3 px-3 font-extrabold text-[#0A1020]">
                    {c.species} <span className="text-slate-500 font-normal">({c.farmerName})</span>
                  </td>
                  <td className="py-3 px-3 text-slate-700">{c.village}</td>
                  <td className="py-3 px-3 text-slate-600 max-w-xs truncate">
                    {c.symptoms.join(', ')}
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-mono font-black text-red-700 bg-red-50 px-2 py-0.5 rounded">
                      {c.riskScore}/100
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-500">{c.reportedAt}</td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCase(c);
                      }}
                      className="px-3 py-1 bg-[#073B32] hover:bg-[#052923] text-white rounded-lg text-[11px] font-bold transition"
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

      {/* 3-Column Clinical Case Workspace Drawer (Section 24) */}
      {selectedCase && (
        <CaseDetailDrawer 
          caseData={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </div>
  );
}
