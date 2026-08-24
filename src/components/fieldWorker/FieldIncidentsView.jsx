import React, { useState } from 'react';
import { 
  Activity, 
  PlusCircle, 
  AlertTriangle, 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Skull, 
  FileText,
  Sparkles,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function FieldIncidentsView() {
  const { cases, reportMortality, addNotification } = useApp();

  const [search, setSearch] = useState('');
  const [filterRisk, setFilterRisk] = useState('all');
  const [showMortalityModal, setShowMortalityModal] = useState(false);
  const [showIncidentModal, setShowIncidentModal] = useState(false);

  // Mortality Form State
  const [mortalityCount, setMortalityCount] = useState(1);
  const [species, setSpecies] = useState('Sheep / Goat (मेंढी/शेळी)');
  const [village, setVillage] = useState('Gunawadi');
  const [suspectedCause, setSuspectedCause] = useState('Suspected Enterotoxaemia / PPR');

  const filteredCases = cases.filter(c => {
    const matchesSearch = c.caseId.toLowerCase().includes(search.toLowerCase()) ||
                          c.farmerName.toLowerCase().includes(search.toLowerCase()) ||
                          c.village.toLowerCase().includes(search.toLowerCase()) ||
                          c.suspectedDisease.toLowerCase().includes(search.toLowerCase());
    const matchesRisk = filterRisk === 'all' || c.riskLevel === filterRisk;
    return matchesSearch && matchesRisk;
  });

  const handleLogMortality = (e) => {
    e.preventDefault();
    reportMortality({
      count: mortalityCount,
      species: species,
      village: village,
      suspectedCause: suspectedCause
    });

    setShowMortalityModal(false);
    alert(`Mortality alert for ${mortalityCount} ${species} in ${village} dispatched to District Taskforce!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-red-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-red-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-red-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span>Field Surveillance Incident Tracker</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Incident Reports & Field Alerts</h2>
          <p className="text-xs text-red-200 mt-0.5">
            Realtime Sickness, Clustering & Mortality Surveillance in Baramati Sector
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowMortalityModal(true)}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs font-black shadow-md transition flex items-center gap-2 border border-red-400"
          >
            <Skull className="w-4 h-4" />
            <span>+ Log Sudden Mortality</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by case ID, village, or disease..."
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
            <option value="CRITICAL">Critical Alerts</option>
            <option value="HIGH">High Risk</option>
            <option value="MEDIUM">Medium Risk</option>
            <option value="LOW">Low Risk</option>
          </select>
        </div>
      </div>

      {/* Incident List */}
      <div className="space-y-4">
        {filteredCases.map((c) => (
          <div
            key={c.caseId}
            className="bg-white p-5 rounded-3xl border border-[#ECE6D6] hover:border-[#073B32] transition shadow-xs flex flex-col justify-between space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-black text-[#073B32] bg-[#D9F1E8] px-2.5 py-1 rounded-xl">
                  {c.caseId}
                </span>
                <RiskBadge level={c.riskLevel} size="sm" />
                <span className="text-xs text-slate-500 font-bold">{c.reportedAt}</span>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Assigned Vet: <strong className="text-[#073B32]">{c.assignedVet || 'Dr. Anand Deshmukh'}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8 space-y-1">
                <h3 className="font-black text-base text-[#0A1020]">
                  {c.species} ({c.breed || 'Indigenous'}) — {c.suspectedDisease}
                </h3>
                <p className="text-xs text-slate-600">
                  Farmer: <strong>{c.farmerName}</strong> • Village: <strong>{c.village}</strong> • Signs: {c.symptoms.join(', ')}
                </p>
              </div>

              <div className="md:col-span-4 flex items-center justify-end gap-3 text-xs">
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Risk Score</span>
                  <span className="text-base font-black text-red-700 font-mono">{c.riskScore}/100</span>
                </div>
                <button
                  onClick={() => alert(`Opening incident dossier for ${c.caseId}...`)}
                  className="px-4 py-2 bg-[#073B32] hover:bg-[#052923] text-white font-bold rounded-xl shadow-xs transition"
                >
                  View Dossier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Log Sudden Mortality Modal */}
      {showMortalityModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <div className="flex items-center gap-2 text-red-700">
              <Skull className="w-5 h-5" />
              <h3 className="text-xl font-black">Log Sudden Mortality Event (मृत्यू नोंदणी)</h3>
            </div>
            <form onSubmit={handleLogMortality} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mortality Count (मृत संख्या)</label>
                  <input
                    type="number"
                    min={1}
                    value={mortalityCount}
                    onChange={e => setMortalityCount(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Species</label>
                  <select
                    value={species}
                    onChange={e => setSpecies(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  >
                    <option value="Poultry (कोंबड्या)">Poultry (कोंबड्या)</option>
                    <option value="Sheep / Goat (मेंढी/शेळी)">Sheep / Goat (मेंढी/शेळी)</option>
                    <option value="Cattle / Cow (गाय)">Cattle / Cow (गाय)</option>
                    <option value="Buffalo (म्हैस)">Buffalo (म्हैस)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Village Location</label>
                <select
                  value={village}
                  onChange={e => setVillage(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                >
                  <option value="Khedgaon">Khedgaon</option>
                  <option value="Malegaon Budruk">Malegaon Budruk</option>
                  <option value="Gunawadi">Gunawadi</option>
                  <option value="Kurkumbh">Kurkumbh</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Suspected Cause / Clinical Picture</label>
                <input
                  type="text"
                  value={suspectedCause}
                  onChange={e => setSuspectedCause(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowMortalityModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-700 text-white font-bold rounded-xl shadow-xs"
                >
                  Trigger Outbreak Alert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
