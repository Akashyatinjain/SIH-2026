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
  Heart,
  Syringe,
  Info,
  ExternalLink
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
    language,
    t,
    hotspots,
    setActiveTab
  } = useApp();

  const [selectedAnimalFilter, setSelectedAnimalFilter] = useState('all');

  // Filter 24 animals of Ramesh Patil
  const farmerAnimals = animals.slice(0, 24);
  const healthyAnimals = farmerAnimals.filter(a => a.healthStatus === 'healthy');
  const underTreatmentAnimals = farmerAnimals.filter(a => a.healthStatus === 'under_treatment');
  const attentionAnimals = farmerAnimals.filter(a => a.healthStatus === 'needs_attention');

  const filteredAnimals = selectedAnimalFilter === 'healthy' 
    ? healthyAnimals 
    : selectedAnimalFilter === 'under_treatment' 
    ? underTreatmentAnimals 
    : selectedAnimalFilter === 'needs_attention'
    ? attentionAnimals
    : farmerAnimals;

  const masterCase = cases.find(c => c.caseId === "PS-2026-004281") || cases[0];
  const activeHotspot = hotspots[0];

  return (
    <div className="space-y-6 text-[#0A1020] font-sans">
      
      {/* ========================================================================= */}
      {/* SECTION 22: FARMER HOME HERO & GREETING */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-7 bg-gradient-to-r from-[#073B32] via-[#095B4E] to-[#0A1020] text-white rounded-3xl shadow-sm border border-[#073B32] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Khedgaon • Baramati • Pune</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
            {t.namaste || "Namaste"}, {language === 'mr' ? 'रमेश पाटील' : language === 'hi' ? 'रमेश पाटिल' : 'Ramesh Patil'}
          </h1>
          <p className="text-xs text-emerald-200/90 font-medium">
            PashuSuraksha ID: <span className="font-mono font-bold text-white">MH-FAR-88219</span> • Registered Livestock Owner
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsIVROpen(true)}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition flex items-center gap-2 text-white"
          >
            <PhoneCall className="w-4 h-4 text-emerald-300" />
            <span>Voice Helpline: 1800-180-1551</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 22: SINGLE HERD-HEALTH VISUALIZATION (24 Animal Indicators) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-lg text-[#073B32] font-display">
                Your herd is being monitored.
              </h2>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                24 Total Animals
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Click any animal indicator below to inspect its individual health timeline & vaccination passport.
            </p>
          </div>

          {/* Herd Distribution Filters */}
          <div className="flex items-center gap-2 text-xs font-bold flex-wrap">
            <button
              onClick={() => setSelectedAnimalFilter('all')}
              className={`px-3 py-1 rounded-lg border transition ${selectedAnimalFilter === 'all' ? 'bg-[#073B32] text-white border-[#073B32]' : 'bg-slate-50 text-slate-700 border-slate-200'}`}
            >
              All (24)
            </button>
            <button
              onClick={() => setSelectedAnimalFilter('healthy')}
              className={`px-3 py-1 rounded-lg border transition flex items-center gap-1.5 ${selectedAnimalFilter === 'healthy' ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-emerald-50 text-emerald-800 border-emerald-200'}`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>21 Healthy</span>
            </button>
            <button
              onClick={() => setSelectedAnimalFilter('under_treatment')}
              className={`px-3 py-1 rounded-lg border transition flex items-center gap-1.5 ${selectedAnimalFilter === 'under_treatment' ? 'bg-amber-600 text-white border-amber-600' : 'bg-amber-50 text-amber-900 border-amber-200'}`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>2 In Treatment</span>
            </button>
            <button
              onClick={() => setSelectedAnimalFilter('needs_attention')}
              className={`px-3 py-1 rounded-lg border transition flex items-center gap-1.5 ${selectedAnimalFilter === 'needs_attention' ? 'bg-rose-600 text-white border-rose-600' : 'bg-rose-50 text-rose-900 border-rose-300 animate-pulse'}`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>1 Attention (Ganga)</span>
            </button>
          </div>
        </div>

        {/* 24-Animal Interactive Visual Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2.5">
          {filteredAnimals.map((animal) => {
            const isAttention = animal.healthStatus === 'needs_attention';
            const isTreatment = animal.healthStatus === 'under_treatment';

            return (
              <div
                key={animal.id}
                onClick={() => setSelectedAnimalForModal(animal)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left group hover:scale-[1.03] ${
                  isAttention 
                    ? 'bg-rose-50/90 border-rose-400 shadow-md ring-2 ring-rose-400/50' 
                    : isTreatment 
                    ? 'bg-amber-50/80 border-amber-300 shadow-xs' 
                    : 'bg-[#FCFBF8] border-slate-200 hover:border-teal-500 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    #{animal.id.slice(-4)}
                  </span>
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    isAttention ? 'bg-rose-500 animate-ping' : isTreatment ? 'bg-amber-500' : 'bg-emerald-500'
                  }`} />
                </div>

                <div className="my-1.5">
                  <p className="font-black text-xs text-slate-900 truncate">{animal.name}</p>
                  <p className="text-[10px] text-slate-500 truncate font-medium">{animal.breed.split(' ')[0]}</p>
                </div>

                <div className="text-[9px] font-bold tracking-tight uppercase">
                  {isAttention ? (
                    <span className="text-rose-700 font-extrabold">🚨 High Risk</span>
                  ) : isTreatment ? (
                    <span className="text-amber-800">💊 Rx Active</span>
                  ) : (
                    <span className="text-emerald-700">✓ Healthy</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 23: LARGE PRIMARY ACTION BUTTON — REPORT SICK ANIMAL */}
      {/* ========================================================================= */}
      <div 
        onClick={() => setIsReportModalOpen(true)}
        className="p-6 sm:p-7 bg-gradient-to-br from-[#D85449] via-red-600 to-[#073B32] rounded-3xl text-white shadow-xl cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-0.5 border-2 border-red-300 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
          <div className="md:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white border border-white/20 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Health Action</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Report Sick Animal
            </h2>
            
            <p className="text-xs sm:text-sm text-red-100 max-w-xl leading-relaxed font-medium">
              Symptoms, photo or voice — under 60 seconds. Instant decision-support screening and direct notification to Dr. Anand Deshmukh.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-bold text-white">
              <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg">
                <Camera className="w-3.5 h-3.5" /> Photo
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg">
                <Mic className="w-3.5 h-3.5" /> Voice Memo
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg">
                <MapPin className="w-3.5 h-3.5" /> Auto-GPS Village Tag
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button className="px-7 py-4 bg-white text-red-700 font-extrabold rounded-2xl text-sm shadow-xl flex items-center gap-2 hover:bg-red-50 transition active:scale-95">
              <span>Start Sickness Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 24: FARMER LOCAL RISK (Nearby Health Signal - 8km Radius) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Nearby Health Signal (8km Radius) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-amber-200/90 shadow-sm space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Nearby Health Signal</h3>
                <p className="text-[11px] text-slate-500">Surveillance Radius: 8 km</p>
              </div>
            </div>

            <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-black uppercase tracking-wider font-mono">
              Status: Elevated
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-100">
              <div className="text-lg font-black text-amber-900 font-mono">7 Reports</div>
              <div className="text-[10px] text-amber-800 font-medium">In Past 48 Hours</div>
            </div>

            <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-100">
              <div className="text-lg font-black text-amber-900 font-mono">3 Villages</div>
              <div className="text-[10px] text-amber-800 font-medium">Khedgaon / Malegaon</div>
            </div>

            <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-100">
              <div className="text-lg font-black text-rose-700 font-mono">LSD Booster</div>
              <div className="text-[10px] text-rose-800 font-medium">Vaccination Gap</div>
            </div>
          </div>

          {/* Recommended Action Checklist */}
          <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-2">
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Recommended Precautionary Steps</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1 leading-relaxed">
              <li>• Separate sick cattle showing nodular skin lesions or fever.</li>
              <li>• Avoid moving animals to Baramati animal market this week.</li>
              <li>• Spray shed perimeter with neem extract or deltamethrin to control biting flies.</li>
            </ul>
          </div>
        </div>

        {/* Right: Next Vaccination Camp & Direct Veterinarian Line */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          {/* Next Vaccine Due */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#073B32]">
                <Syringe className="w-4 h-4 text-teal-600" />
                <span>VACCINATION DUE</span>
              </span>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                FMD Due in 12 Days
              </span>
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">
              Free NADCP Vaccination Camp at Khedgaon Gram Panchayat
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Saturday 28 Feb • 08:30 AM – 04:30 PM • 100% Free Government Service
            </p>
            <button 
              onClick={() => setActiveTab('vaccines')}
              className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-[#073B32] text-xs font-bold rounded-xl border border-emerald-200 transition text-center block"
            >
              Find Nearby Vaccination Camps →
            </button>
          </div>

          {/* Assigned Taluka Doctor */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Assigned Veterinarian</p>
                <h4 className="font-bold text-sm text-slate-900">Dr. Anand Deshmukh</h4>
                <p className="text-[11px] text-slate-500">Baramati Taluka Hospital • Available</p>
              </div>
            </div>

            <button
              onClick={() => setIsIVROpen(true)}
              className="p-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-md transition"
              title="Call Veterinarian"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* SECTION 27: FARMER CASE TRACKING (Active Timeline for Ganga PS-2026-004281) */}
      {/* ========================================================================= */}
      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base text-[#073B32]">
                Active Case Tracking: Case #{masterCase.caseId}
              </h3>
              <span className="text-[10px] font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-full">
                HIGH RISK (86/100)
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Animal: <strong className="text-slate-900">{masterCase.animalName || "Ganga"}</strong> ({masterCase.breed}) • Reported {masterCase.reportedAt}
            </p>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            Assigned: <span className="text-[#073B32] font-bold">Dr. Anand Deshmukh</span>
          </div>
        </div>

        {/* Visual Timeline (Report -> Screen -> Vet -> Field Visit -> Sample -> Lab -> Outcome) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
          {[
            { step: "01", label: "Report Received", status: "completed", date: "Today 19:45" },
            { step: "02", label: "AI Risk Screen", status: "completed", date: "Score 86/100" },
            { step: "03", label: "Vet Notified", status: "completed", date: "Dr. Anand" },
            { step: "04", label: "Field Visit Assigned", status: "completed", date: "Sunita Pawar" },
            { step: "05", label: "Sample Collected", status: "current", date: "PS-SMP-0198" },
            { step: "06", label: "Laboratory PCR", status: "pending", date: "Aundh Lab" },
            { step: "07", label: "Outcome / Cleared", status: "pending", date: "Pending" }
          ].map((item, idx) => {
            const isDone = item.status === 'completed';
            const isCurrent = item.status === 'current';
            return (
              <div 
                key={idx}
                className={`p-3 rounded-2xl border text-center space-y-1 ${
                  isDone 
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
                    : isCurrent 
                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-400/40 text-teal-900 font-bold' 
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="text-[10px] font-mono font-bold">
                  {isDone ? '✓ ' + item.step : item.step}
                </div>
                <div className="text-xs font-black truncate">{item.label}</div>
                <div className="text-[10px] text-slate-500 truncate">{item.date}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Global Modals */}
      {isReportModalOpen && (
        <ReportSickAnimalWizard onClose={() => setIsReportModalOpen(false)} />
      )}
      <AnimalProfileModal />
    </div>
  );
}
