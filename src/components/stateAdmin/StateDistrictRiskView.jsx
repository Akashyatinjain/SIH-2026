import React, { useState } from 'react';
import { 
  Layers, 
  MapPin, 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Building2,
  DollarSign,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function StateDistrictRiskView() {
  const { stateDistricts, addNotification } = useApp();

  const [search, setSearch] = useState('');
  const [filterRisk, setFilterRisk] = useState('all');

  const filtered = stateDistricts.filter(d => {
    const matchesSearch = d.district.toLowerCase().includes(search.toLowerCase());
    const matchesRisk = filterRisk === 'all' || d.risk === filterRisk;
    return matchesSearch && matchesRisk;
  });

  const handleDispatchFunds = (dist) => {
    addNotification("💰 State Emergency Contingency Released", `Allocated ₹25 Lakhs Disaster Contingency to ${dist.district} District Collectorate.`, "alert");
    alert(`₹25 Lakhs State Emergency Contingency released to ${dist.district} District Collectorate!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-purple-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-purple-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>State Directorate Epidemiological Heatmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Maharashtra 36-District Risk Rankings</h2>
          <p className="text-xs text-purple-200 mt-0.5">
            Realtime Risk Index, Mortality Deviation & Resource Allocation Matrix
          </p>
        </div>

        <button
          onClick={() => alert("Downloading State 36-District Surveillance Brief (PDF)...")}
          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-xs font-bold transition flex items-center gap-2 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export State Brief (PDF)</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search district name..."
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
            <option value="all">All 36 Districts</option>
            <option value="CRITICAL">Critical (🔴)</option>
            <option value="HIGH">Elevated (🟠)</option>
            <option value="MEDIUM">Watch (🟡)</option>
            <option value="LOW">Low (🟢)</option>
          </select>
        </div>
      </div>

      {/* 36 Districts Table */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-3">
          <h3 className="font-black text-base text-[#0A1020]">District Surveillance & Risk Ranking</h3>
          <span className="text-xs text-slate-500 font-mono">{filtered.length} Districts Displayed</span>
        </div>

        {/* Mobile & Tablet Cards View (Visible on < xl) */}
        <div className="block xl:hidden space-y-3">
          {filtered.map((d) => (
            <div
              key={d.district}
              className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-black text-sm text-[#0A1020]">{d.district} District</h4>
                <RiskBadge level={d.risk} size="sm" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-xl border border-[#ECE6D6]">
                <div>
                  <span className="text-slate-400 text-[10px] block">Monitored Livestock:</span>
                  <span className="font-bold text-[#0A1020]">{d.livestock}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Vaccine Coverage:</span>
                  <span className="font-bold text-emerald-800">{d.vacCoverage}%</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Active Outbreaks:</span>
                  <span className="font-bold text-red-700">{d.activeClusters} Clusters ({d.activeCases} Cases)</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Response Velocity:</span>
                  <span className="font-bold text-slate-700">{d.avgResponse}</span>
                </div>
              </div>

              <button
                onClick={() => handleDispatchFunds(d)}
                className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Release ₹25 Lakhs Contingency Buffer</span>
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table View (Visible on >= xl) */}
        <div className="hidden xl:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                <th className="py-2.5 px-3">District</th>
                <th className="py-2.5 px-3">Risk Tier</th>
                <th className="py-2.5 px-3">Livestock</th>
                <th className="py-2.5 px-3">Active Clusters</th>
                <th className="py-2.5 px-3">Coverage</th>
                <th className="py-2.5 px-3">7-Day Deaths</th>
                <th className="py-2.5 px-3">Response Velocity</th>
                <th className="py-2.5 px-3 text-right">Emergency Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECE6D6]">
              {filtered.map((d) => (
                <tr key={d.district} className="hover:bg-purple-50/30 transition">
                  <td className="py-2.5 px-3 font-black text-[#0A1020] whitespace-nowrap">{d.district}</td>
                  <td className="py-2.5 px-3"><RiskBadge level={d.risk} size="sm" /></td>
                  <td className="py-2.5 px-3 font-semibold text-slate-800 whitespace-nowrap">{d.livestock}</td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    {d.activeClusters > 0 ? (
                      <span className="text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full font-bold text-[11px]">
                        {d.activeClusters} Clusters ({d.activeCases})
                      </span>
                    ) : (
                      <span className="text-slate-500 font-normal text-[11px]">0 Clusters</span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 font-semibold text-slate-800 whitespace-nowrap">{d.vacCoverage}%</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700 whitespace-nowrap">{d.mortality7d}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-600 whitespace-nowrap">{d.avgResponse}</td>
                  <td className="py-2.5 px-3 text-right whitespace-nowrap">
                    <button
                      onClick={() => handleDispatchFunds(d)}
                      className="px-3 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-[11px] font-bold transition shadow-xs"
                    >
                      Release ₹25L
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
