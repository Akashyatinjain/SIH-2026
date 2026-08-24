import React, { useState } from 'react';
import { 
  ShieldAlert, 
  PlusCircle, 
  MapPin, 
  Calendar, 
  Clock, 
  PhoneCall, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  Stethoscope, 
  Sparkles, 
  Camera, 
  Mic, 
  ArrowRight,
  TrendingUp,
  Activity,
  Heart
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ReportSickAnimalWizard from './ReportSickAnimalWizard';
import AnimalProfileModal from '../common/AnimalProfileModal';
import RiskBadge from '../common/RiskBadge';

export default function FarmerDashboard() {
  const { 
    animals, 
    cases, 
    isReportModalOpen, 
    setIsReportModalOpen, 
    selectedAnimalForModal, 
    setSelectedAnimalForModal,
    advisories,
    setIsIVROpen,
    t,
    hotspots
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview');

  const myAnimals = animals.filter(a => a.owner.includes("Ramesh Patil") || true).slice(0, 5);
  const myReports = cases.filter(c => c.farmerName.includes("Ramesh") || true).slice(0, 3);
  const activeHotspot = hotspots[0];

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* 1. Large Personalized Hero (Section 13) */}
      <div className="p-6 bg-gradient-to-r from-[#073B32] via-[#095B4E] to-[#0A1020] text-white rounded-3xl shadow-sm border border-[#073B32] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Khedgaon • Baramati • Pune</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Namaste, Ramesh</h2>
          <p className="text-xs text-emerald-200">
            PashuSuraksha ID: <span className="font-mono font-bold text-white">MH-FAR-88219</span> • Village Unit 4
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsIVROpen(true)}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
            <span>Voice Helpline (1800-180-1551)</span>
          </button>
        </div>
      </div>

      {/* 2. Rich Herd Health Composition (Section 13) */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
          <div>
            <h3 className="font-black text-base text-[#0A1020] flex items-center gap-2">
              <span>HERD HEALTH MONITORED</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                24 Total Animals
              </span>
            </h3>
            <p className="text-xs text-slate-500">Live health telemetry across your livestock</p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> 21 Healthy
            </span>
            <span className="flex items-center gap-1.5 text-amber-700">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> 2 Under Treatment
            </span>
            <span className="flex items-center gap-1.5 text-red-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> 1 Attention Due
            </span>
          </div>
        </div>

        {/* Visual Herd Distribution Status Bar */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
            <div className="bg-emerald-600 h-full transition-all" style={{ width: '87.5%' }} title="21 Healthy" />
            <div className="bg-amber-500 h-full transition-all" style={{ width: '8.3%' }} title="2 Under Treatment" />
            <div className="bg-red-500 h-full transition-all" style={{ width: '4.2%' }} title="1 Attention Required" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
            {myAnimals.map((animal) => (
              <div 
                key={animal.id}
                onClick={() => setSelectedAnimalForModal(animal)}
                className="p-3 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] hover:border-[#149A84] cursor-pointer transition shadow-xs flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-500">{animal.id.split('-').pop()}</span>
                  <span className={`w-2 h-2 rounded-full ${
                    animal.healthStatus === 'healthy' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#0A1020] truncate">{animal.name}</h4>
                  <p className="text-[11px] text-slate-500 truncate">{animal.species}</p>
                </div>
                <div className="text-[10px] font-bold text-[#073B32]">View Passport →</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Section 14: PRIMARY ACTION — Bold Coral/Red Surface */}
      <div 
        onClick={() => setIsReportModalOpen(true)}
        className="p-6 bg-gradient-to-br from-[#D84F45] via-red-600 to-[#0A1020] rounded-3xl text-white shadow-lg cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-0.5 border border-red-400 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
          <div className="md:col-span-8 space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EMERGENCY OR SICKNESS REPORTING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Report Sick Animal</h3>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Report symptoms in under 60 seconds. Instant AI risk assessment and automatic notification to Dr. Anand Deshmukh.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-bold text-white">
              <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5" /> Photo Upload</span>
              <span className="flex items-center gap-1"><Mic className="w-3.5 h-3.5" /> Voice Memo</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Auto-GPS</span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-end">
            <button className="px-6 py-3.5 bg-white text-red-700 font-black rounded-2xl text-xs sm:text-sm shadow-md flex items-center gap-2 hover:bg-red-50 transition">
              <span>Start Report Wizard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 4. Section 15: Farmer Live Information (4 Contextual Blocks) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Block A: Local Health Signal */}
        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 text-red-600">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>LOCAL HEALTH SIGNAL</span>
            </span>
            <span className="font-mono">8 km away</span>
          </div>
          <h4 className="font-black text-sm text-[#0A1020]">LSD Suspect Activity</h4>
          <p className="text-xs text-slate-600">
            3 cases reported in nearby Malegaon village. Precautionary ring advisory active.
          </p>
          <div className="pt-1 text-[11px] font-bold text-[#073B32]">View Biosecurity Rules →</div>
        </div>

        {/* Block B: Next Vaccination */}
        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 text-[#149A84]">
              <Calendar className="w-3.5 h-3.5" />
              <span>NEXT VACCINATION</span>
            </span>
            <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Due in 12 Days</span>
          </div>
          <h4 className="font-black text-sm text-[#0A1020]">FMD Biannual Booster</h4>
          <p className="text-xs text-slate-600">
            Khedgaon Gram Panchayat Camp this Saturday. 100% free under NADCP.
          </p>
          <div className="pt-1 text-[11px] font-bold text-[#073B32]">Camp Details →</div>
        </div>

        {/* Block C: Your Veterinarian */}
        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 text-blue-700">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>YOUR VETERINARIAN</span>
            </span>
            <span className="text-emerald-700 font-bold">Available Today</span>
          </div>
          <h4 className="font-black text-sm text-[#0A1020]">Dr. Anand Deshmukh</h4>
          <p className="text-xs text-slate-600">
            Baramati Taluka Hospital • Response radius 15 km
          </p>
          <div className="pt-1 text-[11px] font-bold text-[#073B32]">+91 94220 12345</div>
        </div>

        {/* Block D: Assigned Field Worker */}
        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 text-teal-700">
              <Activity className="w-3.5 h-3.5" />
              <span>FIELD SENTINEL</span>
            </span>
            <span className="text-slate-500 font-mono">In Khedgaon</span>
          </div>
          <h4 className="font-black text-sm text-[#0A1020]">Sunita Pawar (पशु सखी)</h4>
          <p className="text-xs text-slate-600">
            Visiting Khedgaon Sector today at 09:30 AM
          </p>
          <div className="pt-1 text-[11px] font-bold text-[#073B32]">Request Visit →</div>
        </div>
      </div>

      {/* 5. Section 18: Recent Activity & Case Timeline */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <h3 className="font-black text-base text-[#0A1020] flex items-center justify-between border-b border-[#ECE6D6] pb-3">
          <span>YOUR RECENT REPORTS & CASE TIMELINE</span>
          <span className="text-xs text-slate-500 font-normal">Active Surveillance Log</span>
        </h3>

        <div className="space-y-3">
          {myReports.map((c) => (
            <div 
              key={c.caseId}
              className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black text-[#073B32]">{c.caseId}</span>
                  <RiskBadge level={c.riskLevel} size="sm" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0A1020]">
                  {c.species} ({c.animalId}) — {c.suspectedDisease}
                </h4>
                <p className="text-xs text-slate-600">
                  Signs: {c.symptoms.join(', ')}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right text-xs">
                  <span className="font-bold text-slate-700 block">Status: Under Review</span>
                  <span className="text-slate-400">{c.reportedAt}</span>
                </div>
                <button
                  onClick={() => setIsReportModalOpen(true)}
                  className="px-3 py-1.5 bg-[#073B32] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#052923] transition"
                >
                  Track Case
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Wizard Modal */}
      {isReportModalOpen && (
        <ReportSickAnimalWizard onClose={() => setIsReportModalOpen(false)} />
      )}

      {/* Animal Profile Passport Modal */}
      {selectedAnimalForModal && (
        <AnimalProfileModal 
          animal={selectedAnimalForModal} 
          onClose={() => setSelectedAnimalForModal(null)} 
        />
      )}
    </div>
  );
}
