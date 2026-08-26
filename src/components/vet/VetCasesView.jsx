import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Stethoscope,
  ChevronRight,
  PlusCircle,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import CaseDetailDrawer from './CaseDetailDrawer';
import RiskBadge from '../common/RiskBadge';

export default function VetCasesView() {
  const { cases, setSelectedCase, selectedCase } = useApp();

  const [search, setSearch] = useState('');
  const [filterRisk, setFilterRisk] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCases = cases.filter(c => {
    const matchesSearch = c.caseId.toLowerCase().includes(search.toLowerCase()) ||
                          c.farmerName.toLowerCase().includes(search.toLowerCase()) ||
                          c.village.toLowerCase().includes(search.toLowerCase()) ||
                          c.suspectedDisease.toLowerCase().includes(search.toLowerCase());
    const matchesRisk = filterRisk === 'all' || c.riskLevel === filterRisk;
    const matchesStatus = filterStatus === 'all' || c.status === filterStatus;
    return matchesSearch && matchesRisk && matchesStatus;
  });

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-blue-950 via-[#073B32] to-[#0A1020] text-white rounded-3xl shadow-sm border border-blue-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-blue-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Clinical Case Management System</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">All Clinical Cases (रुग्ण नोंदवही)</h2>
          <p className="text-xs text-blue-200 mt-0.5">
            Active Veterinary Dossiers • Baramati Sector & Adjoining Talukas
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
          <div>
            <span className="text-slate-400 block text-[10px]">Active Registry</span>
            <span className="font-black text-white text-sm">128 Clinical Cases</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Case ID, Farmer, Village, or Disease..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none focus:border-[#149A84]"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterRisk}
            onChange={e => setFilterRisk(e.target.value)}
            className="px-3 py-2 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none"
          >
            <option value="all">All Tiers</option>
            <option value="CRITICAL">Critical Priority</option>
            <option value="HIGH">High Priority</option>
            <option value="MEDIUM">Medium Priority</option>
            <option value="LOW">Low Priority</option>
          </select>

          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="under_review">Under Review</option>
            <option value="assigned">Assigned</option>
            <option value="sample_pending">Sample Pending</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-3">
          <h3 className="font-black text-base text-[#0A1020]">Active Clinical Surveillance Cases</h3>
          <span className="text-xs text-slate-500 font-mono">{filteredCases.length} Matching Cases</span>
        </div>

        {/* Mobile Cards View (Visible on < md) */}
        <div className="block md:hidden space-y-3">
          {filteredCases.map((c) => (
            <div
              key={c.caseId}
              onClick={() => setSelectedCase(c)}
              className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] hover:border-[#073B32] transition space-y-2.5 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RiskBadge level={c.riskLevel} size="sm" />
                  <span className="font-mono font-bold text-xs text-[#073B32]">{c.caseId}</span>
                </div>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-700 uppercase">
                  {c.status.replace('_', ' ')}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#0A1020]">
                  {c.species} <span className="text-slate-500 font-normal text-xs">({c.animalId})</span>
                </h4>
                <p className="text-xs text-red-800 font-semibold mt-0.5">{c.suspectedDisease}</p>
                <p className="text-[11px] text-slate-600 mt-1">
                  <strong>Farmer:</strong> {c.farmerName} • {c.village}, {c.block}
                </p>
              </div>

              <div className="pt-2 border-t border-[#ECE6D6] flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-slate-500 text-[10px] block">Risk Score:</span>
                  <span className="font-mono font-black text-red-700 text-sm">{c.riskScore} / 100</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCase(c);
                  }}
                  className="px-3 py-1.5 bg-[#073B32] text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1"
                >
                  <span>Open Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View (Visible on >= md) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                <th className="py-3 px-3">Priority</th>
                <th className="py-3 px-3">Case ID</th>
                <th className="py-3 px-3">Animal Tag</th>
                <th className="py-3 px-3">Farmer & Village</th>
                <th className="py-3 px-3">Suspected Syndrome</th>
                <th className="py-3 px-3">Risk Score</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECE6D6]">
              {filteredCases.map((c) => (
                <tr 
                  key={c.caseId}
                  onClick={() => setSelectedCase(c)}
                  className="hover:bg-[#D9F1E8]/20 cursor-pointer transition"
                >
                  <td className="py-3 px-3">
                    <RiskBadge level={c.riskLevel} size="sm" />
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-[#073B32]">
                    {c.caseId}
                  </td>
                  <td className="py-3 px-3 font-bold text-[#0A1020]">
                    {c.species} <span className="text-slate-400 font-normal">({c.animalId})</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-bold text-slate-800">{c.farmerName}</span>
                    <span className="text-slate-500 block text-[11px]">{c.village}, {c.block}</span>
                  </td>
                  <td className="py-3 px-3 text-slate-700 font-medium max-w-xs truncate">
                    {c.suspectedDisease}
                  </td>
                  <td className="py-3 px-3 font-mono font-black text-red-700">
                    {c.riskScore}/100
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-700 uppercase">
                      {c.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCase(c);
                      }}
                      className="px-3 py-1.5 bg-[#073B32] hover:bg-[#052923] text-white rounded-xl text-[11px] font-bold shadow-xs transition"
                    >
                      Open Case
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Case Detail Workspace Drawer */}
      {selectedCase && (
        <CaseDetailDrawer 
          caseData={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </div>
  );
}
