import React, { useState } from 'react';
import { 
  PlusCircle, 
  ShieldCheck, 
  AlertTriangle, 
  Syringe, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Clock,
  Activity,
  User,
  Heart,
  ChevronRight,
  ListChecks,
  Pill,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ReportSickAnimalWizard from './ReportSickAnimalWizard';
import RiskBadge from '../common/RiskBadge';

export default function FarmerDashboard() {
  const { 
    animals, 
    cases, 
    activeTab, 
    setActiveTab, 
    setSelectedAnimalForProfile, 
    isOffline,
    t
  } = useApp();

  const [isWizardOpen, setIsWizardOpen] = useState(false);

  if (activeTab === 'report' || isWizardOpen) {
    return (
      <div className="space-y-4">
        <button 
          onClick={() => { setIsWizardOpen(false); setActiveTab('dashboard'); }}
          className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1 mb-2"
        >
          ← Back to Farmer Home
        </button>
        <ReportSickAnimalWizard onComplete={() => { setIsWizardOpen(false); setActiveTab('dashboard'); }} />
      </div>
    );
  }

  const healthyCount = animals.filter(a => a.healthStatus === 'healthy').length;
  const treatmentCount = animals.filter(a => a.healthStatus === 'under_treatment').length;
  const attentionCount = animals.filter(a => a.healthStatus === 'needs_attention').length;
  const totalCount = animals.length;

  return (
    <div className="space-y-6 text-slate-900">
      {/* 1. Header: Namaste Ramesh & Location */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-sand shadow-xs">
        <div>
          <span className="text-xs font-extrabold text-tealBrand uppercase tracking-wider">Farmer Workspace</span>
          <h2 className="text-2xl sm:text-3xl font-black text-deepForest mt-0.5">Namaste, Ramesh</h2>
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5 text-tealBrand" />
            <span>Khedgaon · Baramati · Pune</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-tealBrand/10 text-tealBrand font-bold text-xs rounded-full border border-tealBrand/20">
            Pashu Aadhaar Verified
          </span>
        </div>
      </div>

      {/* 2. Main Hero: ONE LARGE HERD HEALTH OVERVIEW COMPOSITION */}
      <div className="bg-gradient-to-br from-deepForest via-forest-900 to-midnight text-white p-6 sm:p-8 rounded-3xl border border-forest-800 shadow-xl space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Surveillance Active</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              YOUR HERD IS BEING MONITORED
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              24 registered animals in Khedgaon unit under automated early-warning telemetry.
            </p>
          </div>

          {/* Herd Breakdown Pillars */}
          <div className="grid grid-cols-3 gap-3 bg-midnight/80 p-4 rounded-2xl border border-slate-800 text-center shrink-0">
            <div className="space-y-0.5">
              <span className="text-2xl font-black text-white">{totalCount}</span>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Total Herd</p>
            </div>
            <div className="space-y-0.5 border-x border-slate-800 px-3">
              <span className="text-2xl font-black text-emerald-400">{healthyCount}</span>
              <p className="text-[10px] text-emerald-300 font-semibold uppercase">Healthy</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-2xl font-black text-amber-400">{attentionCount + treatmentCount}</span>
              <p className="text-[10px] text-amber-300 font-semibold uppercase">Care Due</p>
            </div>
          </div>
        </div>

        {/* High Visibility Action CTA: REPORT SICK ANIMAL */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
          <button
            onClick={() => setActiveTab('report')}
            className="flex-1 py-4 px-6 bg-coralRed hover:bg-red-600 text-white rounded-2xl font-black text-base shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-red-400"
          >
            <PlusCircle className="w-6 h-6 animate-pulse" />
            <span>REPORT SICK ANIMAL (रोग लक्षणे नोंदवा)</span>
          </button>

          <button
            onClick={() => setActiveTab('animals')}
            className="px-5 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-xs transition border border-white/20 flex items-center justify-center gap-2"
          >
            <ListChecks className="w-4 h-4" />
            <span>View All Animals ({totalCount})</span>
          </button>
        </div>
      </div>

      {/* 3. Secondary Actions Toolbar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveTab('animals')}
          className="p-4 bg-white hover:bg-sand/40 rounded-2xl border border-sand transition card-elevated flex items-center gap-3 text-left"
        >
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <ListChecks className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-900">My Animals</h4>
            <p className="text-[10px] text-slate-500">Passports & Milk Yield</p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('vaccines')}
          className="p-4 bg-white hover:bg-sand/40 rounded-2xl border border-sand transition card-elevated flex items-center gap-3 text-left"
        >
          <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl">
            <Syringe className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-900">Vaccinations</h4>
            <p className="text-[10px] text-slate-500">FMD Due in 12 Days</p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('alerts')}
          className="p-4 bg-white hover:bg-sand/40 rounded-2xl border border-sand transition card-elevated flex items-center gap-3 text-left"
        >
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-900">Health Alerts</h4>
            <p className="text-[10px] text-slate-500">8 km Ring Warning</p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('treatments')}
          className="p-4 bg-white hover:bg-sand/40 rounded-2xl border border-sand transition card-elevated flex items-center gap-3 text-left"
        >
          <div className="p-2.5 bg-purple-100 text-purple-800 rounded-xl">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-900">Treatment History</h4>
            <p className="text-[10px] text-slate-500">Active e-Prescriptions</p>
          </div>
        </button>
      </div>

      {/* 4. Two-Column Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Herd Cards & Assigned Vet (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Nearby Risk Alert Banner */}
          <div className="p-4 bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 rounded-2xl border-2 border-amber-300 flex items-start gap-3 text-amber-950">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <span className="font-mono font-bold text-[10px] text-amber-800 uppercase tracking-wider">Nearby Outbreak Risk</span>
              <h4 className="font-bold text-sm text-slate-900">Suspected livestock disease activity detected 8 km away</h4>
              <p className="text-slate-600 leading-relaxed">
                Lumpy Skin Disease (LSD) suspected in Malegaon Budruk. Keep shed clean and avoid unverified cattle trading.
              </p>
            </div>
          </div>

          {/* Your Herd List */}
          <div className="bg-white rounded-2xl border border-sand p-5 card-elevated space-y-4">
            <div className="flex items-center justify-between border-b border-sand pb-3">
              <h3 className="font-extrabold text-sm text-slate-900">Your Herd Status</h3>
              <button 
                onClick={() => setActiveTab('animals')}
                className="text-xs font-bold text-tealBrand hover:underline flex items-center gap-1"
              >
                <span>View Passport Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {animals.map((a) => (
                <div 
                  key={a.id}
                  onClick={() => setSelectedAnimalForProfile(a)}
                  className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 cursor-pointer transition flex items-center gap-3 group"
                >
                  <img src={a.imageUrl} alt={a.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-xs group-hover:text-tealBrand">{a.name}</h4>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        a.healthStatus === 'healthy' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {a.healthStatus === 'healthy' ? 'Healthy' : 'Needs Care'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">{a.id} • {a.species}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Assigned Vet, Vaccination Due & Recent Timeline (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Assigned Veterinarian Card */}
          <div className="bg-white rounded-2xl border border-sand p-5 card-elevated space-y-3">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Assigned Veterinary Doctor</span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl">
                👨‍⚕️
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Dr. Anand Deshmukh</h4>
                <p className="text-xs text-slate-500">Baramati Taluka Veterinary Hospital</p>
                <p className="text-[11px] font-mono text-tealBrand mt-0.5">+91 98220 11234</p>
              </div>
            </div>
          </div>

          {/* Vaccination Due Card */}
          <div className="bg-white rounded-2xl border border-sand p-5 card-elevated space-y-3">
            <div className="flex items-center justify-between border-b border-sand pb-2">
              <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <Syringe className="w-4 h-4 text-tealBrand" />
                <span>Next Important Vaccine</span>
              </h4>
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Due in 12 Days</span>
            </div>

            <div className="space-y-1 text-xs">
              <p className="font-bold text-slate-800">Foot & Mouth Disease (FMD) Booster</p>
              <p className="text-slate-500">Target Animals: Ganga (Cow), Kaveri (Buffalo)</p>
              <p className="text-[11px] text-tealBrand font-medium pt-1">
                📍 Saturday Camp at Khedgaon Gram Panchayat (Free Government Drive)
              </p>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="bg-white rounded-2xl border border-sand p-5 card-elevated space-y-3">
            <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Recent Health Activity Timeline</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">FMD Vaccine Administered to Ganga</p>
                  <p className="text-[10px] text-slate-400">Batch #FMD-PUN-849 • Nov 10, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">Clinical Symptom Logged for Lakshmi</p>
                  <p className="text-[10px] text-slate-400">Case #PS-2026-004281 • Under Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
