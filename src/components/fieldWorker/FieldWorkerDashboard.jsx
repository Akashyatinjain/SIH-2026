import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  PlusCircle, 
  Syringe, 
  FileText, 
  TestTube2, 
  Radio, 
  ArrowRight,
  Sparkles,
  WifiOff,
  Skull,
  Send
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function FieldWorkerDashboard() {
  const { 
    fieldSchedule, 
    fieldVisits,
    isOffline, 
    offlineQueue, 
    addNotification 
  } = useApp();

  const visits = fieldSchedule || fieldVisits || [];
  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedVisit, setSelectedVisit] = useState(visits[0] || {
    id: "VISIT-01",
    farmer: "Ramesh Patil",
    village: "Khedgaon",
    distance: "1.2 km",
    animal: "Gir Cow (Ganga)",
    purpose: "Clinical Verification (Fever + Skin Nodules)",
    urgency: "HIGH",
    time: "09:30 AM",
    status: "In Progress",
    coords: { lat: 18.1524, lng: 74.5768 }
  });
  const [showToolModal, setShowToolModal] = useState(null);

  const handleExecuteAction = (toolName) => {
    addNotification(`📋 Action Logged: ${toolName}`, "Synchronized to Baramati Field Sentinel database.", "success");
    alert(`Success: ${toolName} recorded and synchronized!`);
    setShowToolModal(null);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* 1. Header: Operational Banner (Section 19) */}
      <div className="p-6 bg-gradient-to-r from-teal-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-teal-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-teal-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Field Sentinel • Sunita Pawar (पशु सखी)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Today's Field Operations</h2>
          <p className="text-xs text-teal-200 mt-0.5">
            Assigned Territory: <span className="font-bold text-white">Khedgaon • Malegaon Budruk • Gunawadi</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900/90 px-3.5 py-2 rounded-2xl border border-teal-800 text-xs flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <div>
              <span className="text-slate-400 block text-[10px]">Today's Target</span>
              <span className="font-black text-white">{visits.length} Visits • 18 Cattle</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Section 20: LIVE ROUTE MAP & TODAY'S FIELD PLAN (SIDE-BY-SIDE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive GPS Route Map (6 cols) */}
        <div className="lg:col-span-6 bg-[#0A1020] text-white p-5 rounded-3xl border border-slate-800 shadow-md flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <h3 className="font-extrabold text-sm text-slate-100">Live Territory Route Map</h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              GPS Active
            </span>
          </div>

          {/* SVG Visual Route Map */}
          <div className="h-56 relative flex items-center justify-center my-2">
            <svg viewBox="0 0 400 240" className="w-full h-full">
              {/* Route Trajectory */}
              <path 
                d="M 60 160 Q 140 60 220 120 T 340 80" 
                fill="none" 
                stroke="#149A84" 
                strokeWidth="3" 
                strokeDasharray="6 4"
                className="animate-pulse"
              />

              {/* Node 1: Khedgaon */}
              <circle cx="60" cy="160" r="10" fill="#073B32" stroke="#149A84" strokeWidth="2" />
              <text x="50" y="190" fill="#ffffff" fontSize="10" fontWeight="bold">09:30 Khedgaon</text>

              {/* Node 2: Malegaon */}
              <circle cx="160" cy="90" r="8" fill="#149A84" stroke="#ffffff" strokeWidth="2" />
              <text x="140" y="70" fill="#a7f3d0" fontSize="10">11:30 Malegaon</text>

              {/* Node 3: Gunawadi */}
              <circle cx="260" cy="140" r="8" fill="#E4A53A" stroke="#ffffff" strokeWidth="2" />
              <text x="245" y="165" fill="#fde68a" fontSize="10">14:00 Gunawadi</text>

              {/* Node 4: Khedgaon PHC */}
              <circle cx="340" cy="80" r="8" fill="#5877D7" stroke="#ffffff" strokeWidth="2" />
              <text x="310" y="60" fill="#bfdbfe" fontSize="10">16:30 PHC Shed</text>
            </svg>
          </div>

          <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Current Node: <strong className="text-white">Khedgaon Unit 4</strong></span>
            <span className="text-teal-400 font-bold">ETA Next: 11:15 AM</span>
          </div>
        </div>

        {/* Right: TODAY'S FIELD TIMELINE (6 cols) */}
        <div className="lg:col-span-6 bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-3">
          <h3 className="font-extrabold text-sm text-[#0A1020] flex items-center justify-between border-b border-[#ECE6D6] pb-2.5">
            <span>TODAY'S VISIT SCHEDULE</span>
            <span className="text-xs text-slate-500 font-mono">{visits.length} Assigned Tasks</span>
          </h3>

          <div className="space-y-2.5">
            {visits.map((visit) => (
              <div 
                key={visit.id}
                onClick={() => setSelectedVisit(visit)}
                className={`p-3.5 rounded-2xl border transition cursor-pointer ${
                  selectedVisit?.id === visit.id 
                    ? "border-[#073B32] bg-[#D9F1E8]/30 shadow-xs" 
                    : "border-[#ECE6D6] bg-[#F6F3EA] hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black text-[#073B32]">{visit.time}</span>
                    <span className="text-xs font-bold text-[#0A1020]">{visit.village}</span>
                  </div>
                  <RiskBadge level={visit.urgency} size="sm" />
                </div>
                <p className="text-xs text-slate-700 mt-1 font-semibold">
                  {visit.purpose} — <span className="text-slate-500 font-normal">{visit.farmer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Section 21: FIELD WORKER QUICK ACTIONS TOOLBELT */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-5 shadow-xs space-y-3">
        <h3 className="font-black text-sm text-[#0A1020] uppercase tracking-wider">
          Field Sentinel Quick Actions Toolbelt
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => handleExecuteAction("Register Animal with RFID Tag")}
            className="p-4 bg-[#F6F3EA] hover:bg-[#D9F1E8] border border-[#ECE6D6] rounded-2xl text-left transition flex flex-col justify-between space-y-2 group"
          >
            <PlusCircle className="w-5 h-5 text-[#073B32] group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs text-[#0A1020]">Register Animal</h4>
              <p className="text-[10px] text-slate-500">RFID Tag & Owner</p>
            </div>
          </button>

          <button
            onClick={() => handleExecuteAction("Report Clinical Signs")}
            className="p-4 bg-[#F6F3EA] hover:bg-amber-50 border border-[#ECE6D6] rounded-2xl text-left transition flex flex-col justify-between space-y-2 group"
          >
            <FileText className="w-5 h-5 text-amber-700 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs text-[#0A1020]">Report Signs</h4>
              <p className="text-[10px] text-slate-500">Field Symptoms Log</p>
            </div>
          </button>

          <button
            onClick={() => handleExecuteAction("Log Sudden Mortality Event")}
            className="p-4 bg-[#F6F3EA] hover:bg-red-50 border border-[#ECE6D6] rounded-2xl text-left transition flex flex-col justify-between space-y-2 group"
          >
            <Skull className="w-5 h-5 text-red-700 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs text-[#0A1020]">Log Mortality</h4>
              <p className="text-[10px] text-slate-500">Early Outbreak Flag</p>
            </div>
          </button>

          <button
            onClick={() => handleExecuteAction("Vaccination Batch Log")}
            className="p-4 bg-[#F6F3EA] hover:bg-emerald-50 border border-[#ECE6D6] rounded-2xl text-left transition flex flex-col justify-between space-y-2 group"
          >
            <Syringe className="w-5 h-5 text-[#149A84] group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs text-[#0A1020]">Vaccinate</h4>
              <p className="text-[10px] text-slate-500">Cold Chain Batch</p>
            </div>
          </button>

          <button
            onClick={() => handleExecuteAction("Collect Diagnostic Swab Sample")}
            className="p-4 bg-[#F6F3EA] hover:bg-purple-50 border border-[#ECE6D6] rounded-2xl text-left transition flex flex-col justify-between space-y-2 group"
          >
            <TestTube2 className="w-5 h-5 text-purple-700 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs text-[#0A1020]">Collect Sample</h4>
              <p className="text-[10px] text-slate-500">Barcode Generator</p>
            </div>
          </button>

          <button
            onClick={() => handleExecuteAction("Sync Offline Queue")}
            className="p-4 bg-[#F6F3EA] hover:bg-blue-50 border border-[#ECE6D6] rounded-2xl text-left transition flex flex-col justify-between space-y-2 group"
          >
            <WifiOff className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-extrabold text-xs text-[#0A1020]">Offline Queue</h4>
              <p className="text-[10px] text-slate-500">{offlineQueue?.length || 0} Records Pending</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
