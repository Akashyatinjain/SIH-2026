import React, { useState } from 'react';
import { 
  Tag, 
  Stethoscope, 
  Skull, 
  Syringe, 
  TestTube2, 
  WifiOff, 
  RefreshCw, 
  Plus, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  AlertTriangle,
  X,
  FileText,
  Clock,
  Navigation,
  ArrowRight,
  Phone,
  Database
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function FieldWorkerDashboard() {
  const { 
    registerAnimal, 
    reportMortality, 
    submitSickAnimalReport, 
    offlineQueue, 
    syncOfflineQueue, 
    isOffline, 
    setIsOffline,
    setIsOfflineModalOpen,
    t,
    addNotification
  } = useApp();

  const [activeModal, setActiveModal] = useState(null); // 'register' | 'mortality' | 'symptom'
  const [selectedVillageOnMap, setSelectedVillageOnMap] = useState({
    name: "Khedgaon",
    monitoredAnimals: 17,
    openCases: 2,
    vacCoverage: "74%",
    assignedVisits: 2,
    status: "Active LSD Cluster Suspect"
  });

  // Timeline-Based Today's Visits (Exact requirement 18)
  const timelineVisits = [
    { time: "09:30", village: "Khedgaon", task: "Clinical verification", farmer: "Ramesh Patil", animal: "Ganga (Cow)", status: "In Progress", urgency: "HIGH" },
    { time: "11:30", village: "Malegaon Budruk", task: "Vaccination drive", farmer: "Sanjay Jagtap", animal: "FMD Booster", status: "Scheduled", urgency: "MEDIUM" },
    { time: "14:00", village: "Gunawadi", task: "Sample collection", farmer: "Balasaheb Shinde", animal: "Goat PPR Swab", status: "Scheduled", urgency: "HIGH" },
    { time: "16:30", village: "Khedgaon", task: "Vaccination camp", farmer: "Gram Panchayat PHC", animal: "Ring Drive", status: "Scheduled", urgency: "LOW" }
  ];

  // Forms state
  const [regForm, setRegForm] = useState({ name: "Gauri", species: "Cattle (Cow)", breed: "Gir Indigenous", owner: "Sopan Jadhav", phone: "+91 98901 23456", location: "Khedgaon Sector 2" });
  const [mortForm, setMortForm] = useState({ species: "Sheep (Deccani)", count: "3", village: "Gunawadi", suspectedCause: "Sudden Death after Grazing" });
  const [quickReport, setQuickReport] = useState({ village: "Malegaon Budruk", species: "Buffalo", symptoms: "High fever, swollen lymph nodes", owner: "Kisan Thorat" });

  const handleRegSubmit = (e) => {
    e.preventDefault();
    registerAnimal(regForm);
    setActiveModal(null);
  };

  const handleMortSubmit = (e) => {
    e.preventDefault();
    reportMortality(mortForm);
    setActiveModal(null);
  };

  const handleQuickClinicalSubmit = (e) => {
    e.preventDefault();
    submitSickAnimalReport({
      farmerName: quickReport.owner,
      farmerPhone: "+91 97654 32199",
      village: quickReport.village,
      species: quickReport.species,
      symptoms: [quickReport.symptoms],
      recentDeaths: false,
      duration: "1 Day"
    });
    setActiveModal(null);
  };

  return (
    <div className="space-y-6 text-slate-900 pb-20">
      {/* 1. Header: Field Sentinel */}
      <div className="p-5 bg-gradient-to-r from-tealBrand via-deepForest to-midnight text-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded-full text-xs text-teal-200 border border-white/10 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-300 animate-ping" />
            <span>Field Sentinel Operations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">Sunita Pawar (पशु सखी / Para-Vet)</h2>
          <p className="text-xs text-teal-100 mt-0.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Assigned Territory: Khedgaon • Malegaon Budruk • Gunawadi</span>
          </p>
        </div>

        {/* Offline Status Pill */}
        <button
          onClick={() => setIsOfflineModalOpen(true)}
          className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-left transition shrink-0"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-teal-200">
            <RefreshCw className="w-4 h-4" />
            <span>Offline Queue: {offlineQueue.length} records</span>
          </div>
          <p className="text-[10px] text-slate-300 mt-0.5">{isOffline ? 'Offline Mode Active' : 'Online Auto-Syncing'}</p>
        </button>
      </div>

      {/* 2. TODAY'S FIELD PLAN (Timeline Visits) + Live Route Map Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Timeline Visits (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-sand p-5 card-elevated space-y-4">
          <div className="flex items-center justify-between border-b border-sand pb-3">
            <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-tealBrand" />
              <span>TODAY'S FIELD PLAN</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">{timelineVisits.length} Scheduled Visits</span>
          </div>

          <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-sand">
            {timelineVisits.map((v, idx) => (
              <div key={idx} className="relative flex items-start gap-3 text-xs">
                {/* Timeline Dot */}
                <span className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white ${
                  v.status === 'In Progress' ? 'bg-amber-500 animate-pulse' : 'bg-tealBrand'
                }`} />

                <div className="w-14 font-mono font-extrabold text-slate-900 shrink-0 pt-0.5">
                  {v.time}
                </div>

                <div className="flex-1 p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 hover:border-tealBrand transition">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{v.village}</span>
                    <RiskBadge level={v.urgency === 'HIGH' ? 'HIGH' : 'LOW'} size="sm" />
                  </div>

                  <p className="font-bold text-tealBrand text-xs">{v.task}</p>
                  <p className="text-slate-600 text-[11px]">Farmer: {v.farmer} • Target: {v.animal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Route Map (5 cols) */}
        <div className="lg:col-span-5 bg-midnight text-white rounded-2xl border border-slate-800 p-5 shadow-md flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <h3 className="font-extrabold text-sm text-slate-100">Live Field Sentinel Route Map</h3>
            </div>
            <span className="text-[10px] font-mono text-teal-400">GPS Tracked</span>
          </div>

          <div className="h-56 relative flex items-center justify-center">
            <svg viewBox="0 0 350 220" className="w-full h-full">
              <line x1="80" y1="110" x2="175" y2="90" stroke="#334155" strokeWidth="3" />
              <line x1="175" y1="90" x2="270" y2="140" stroke="#334155" strokeWidth="3" />
              
              <circle cx="175" cy="90" r="16" fill="#0F8B7A" stroke="#2dd4bf" strokeWidth="2" className="cursor-pointer" onClick={() => setSelectedVillageOnMap({ name: "Khedgaon", monitoredAnimals: 17, openCases: 2, vacCoverage: "74%", status: "Active LSD Cluster" })} />
              <text x="175" y="65" fill="#5eead4" fontSize="11" fontWeight="bold" textAnchor="middle">09:30 Khedgaon</text>

              <circle cx="80" cy="110" r="14" fill="#D95445" stroke="#f87171" strokeWidth="2" className="cursor-pointer" onClick={() => setSelectedVillageOnMap({ name: "Malegaon Budruk", monitoredAnimals: 22, openCases: 3, vacCoverage: "68%", status: "FMD Vaccination Drive" })} />
              <text x="80" y="85" fill="#fca5a5" fontSize="10" textAnchor="middle">11:30 Malegaon</text>

              <circle cx="270" cy="140" r="14" fill="#E1A33A" stroke="#fde047" strokeWidth="2" className="cursor-pointer" onClick={() => setSelectedVillageOnMap({ name: "Gunawadi", monitoredAnimals: 14, openCases: 1, vacCoverage: "79%", status: "Sample Swab Collection" })} />
              <text x="270" y="165" fill="#fde68a" fontSize="10" textAnchor="middle">14:00 Gunawadi</text>
            </svg>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
            <div className="flex justify-between font-bold text-teal-300">
              <span>{selectedVillageOnMap.name} Sector</span>
              <span>Vac: {selectedVillageOnMap.vacCoverage}</span>
            </div>
            <p className="text-[11px] text-slate-300">Monitored: {selectedVillageOnMap.monitoredAnimals} Animals | Status: {selectedVillageOnMap.status}</p>
          </div>
        </div>
      </div>

      {/* 3. COMPACT FLOATING FIELD WORKER ACTION BAR (Requirement 19) */}
      <div className="fixed bottom-14 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-midnight text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2 overflow-x-auto text-xs max-w-full">
        <button
          onClick={() => setActiveModal('register')}
          className="px-3 py-1.5 bg-tealBrand hover:bg-teal-600 text-white rounded-xl font-bold transition flex items-center gap-1.5 shrink-0"
        >
          <Tag className="w-3.5 h-3.5" />
          <span>Register Animal</span>
        </button>

        <button
          onClick={() => setActiveModal('symptom')}
          className="px-3 py-1.5 bg-coralRed hover:bg-red-600 text-white rounded-xl font-bold transition flex items-center gap-1.5 shrink-0"
        >
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Report Signs</span>
        </button>

        <button
          onClick={() => setActiveModal('mortality')}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition flex items-center gap-1.5 shrink-0"
        >
          <Skull className="w-3.5 h-3.5 text-red-400" />
          <span>Log Mortality</span>
        </button>

        <button
          onClick={() => alert("Recording Vaccination Campaign batch Doses")}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition flex items-center gap-1.5 shrink-0"
        >
          <Syringe className="w-3.5 h-3.5 text-teal-400" />
          <span>Vaccinate</span>
        </button>

        <button
          onClick={() => alert("Collecting Diagnostic Sample Barcode #LAB-PUN-9829")}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition flex items-center gap-1.5 shrink-0"
        >
          <TestTube2 className="w-3.5 h-3.5 text-purple-400" />
          <span>Collect Sample</span>
        </button>

        <button
          onClick={() => setIsOfflineModalOpen(true)}
          className="px-3 py-1.5 bg-amberBrand hover:bg-amber-600 text-slate-950 rounded-xl font-black transition flex items-center gap-1.5 shrink-0"
        >
          <Database className="w-3.5 h-3.5" />
          <span>Offline Queue ({offlineQueue.length})</span>
        </button>
      </div>

      {/* Action Modals */}
      {activeModal === 'register' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-bold text-base text-slate-900">Register New Animal & RFID Tag</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleRegSubmit} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Animal Name</label>
                <input type="text" value={regForm.name} onChange={e => setRegForm({...regForm, name: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-xl font-bold" required />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Species</label>
                  <select value={regForm.species} onChange={e => setRegForm({...regForm, species: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-xl bg-white">
                    <option>Cattle (Cow)</option>
                    <option>Buffalo</option>
                    <option>Goat</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Owner Name</label>
                  <input type="text" value={regForm.owner} onChange={e => setRegForm({...regForm, owner: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-xl" />
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-tealBrand hover:bg-teal-700 text-white rounded-xl font-bold mt-2">
                Register & Issue RFID Tag
              </button>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'mortality' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-red-200 text-xs">
            <div className="flex items-center justify-between border-b border-red-100 pb-3 mb-4">
              <h3 className="font-bold text-base text-red-950">Log Sudden Mortality Incident</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleMortSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Species</label>
                  <input type="text" value={mortForm.species} onChange={e => setMortForm({...mortForm, species: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-xl" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Number of Deaths</label>
                  <input type="number" value={mortForm.count} onChange={e => setMortForm({...mortForm, count: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-xl font-bold" min="1" required />
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Suspected Cause</label>
                <textarea value={mortForm.suspectedCause} onChange={e => setMortForm({...mortForm, suspectedCause: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-xl h-20" required />
              </div>
              <button type="submit" className="w-full py-3 bg-coralRed hover:bg-red-700 text-white rounded-xl font-bold mt-2">
                Log Mortality Alert to District Command
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
