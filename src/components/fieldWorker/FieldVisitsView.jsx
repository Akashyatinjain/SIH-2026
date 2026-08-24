import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  PhoneCall, 
  Navigation, 
  User, 
  Syringe, 
  TestTube2, 
  Sparkles,
  ChevronRight,
  ArrowRight,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function FieldVisitsView() {
  const { fieldSchedule, fieldVisits, addNotification } = useApp();
  const visits = fieldSchedule || fieldVisits || [];

  const [completedVisits, setCompletedVisits] = useState([]);
  const [selectedVisit, setSelectedVisit] = useState(visits[0]);

  const handleMarkComplete = (visitId) => {
    if (!completedVisits.includes(visitId)) {
      setCompletedVisits([...completedVisits, visitId]);
      addNotification("✅ Field Visit Completed", `Marked ${visitId} as clinically verified & recorded.`, "success");
      alert(`Visit ${visitId} successfully completed and synchronized!`);
    }
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-teal-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-teal-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-teal-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Field Sentinel Operational Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Today's Visits Schedule</h2>
          <p className="text-xs text-teal-200 mt-0.5">
            Sunita Pawar (पशु सखी) • Assigned Sector: Khedgaon • Malegaon • Gunawadi
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-teal-800 text-xs flex items-center gap-3">
          <Clock className="w-5 h-5 text-teal-400" />
          <div>
            <span className="text-slate-400 block text-[10px]">Progress</span>
            <span className="font-black text-white text-sm">
              {completedVisits.length} of {visits.length} Completed
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map Route & Schedule List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Schedule List (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <h3 className="font-black text-base text-[#0A1020] flex items-center justify-between">
            <span>ASSIGNED ROUTE TIMELINE (4 VISITS)</span>
            <span className="text-xs text-slate-500 font-mono">Baramati Sector 2</span>
          </h3>

          <div className="space-y-3">
            {visits.map((visit) => {
              const isDone = completedVisits.includes(visit.id);
              const isSelected = selectedVisit?.id === visit.id;

              return (
                <div
                  key={visit.id}
                  onClick={() => setSelectedVisit(visit)}
                  className={`p-5 rounded-3xl border-2 transition cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected 
                      ? 'border-[#073B32] bg-white shadow-md' 
                      : 'border-[#ECE6D6] bg-white/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-black text-[#073B32] bg-[#D9F1E8] px-2.5 py-1 rounded-xl">
                        {visit.time}
                      </span>
                      <h4 className="font-black text-sm text-[#0A1020]">{visit.village}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <RiskBadge level={visit.urgency} size="sm" />
                      {isDone && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" /> Done
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-slate-700">
                    <p className="font-bold text-[#073B32]">{visit.purpose}</p>
                    <p className="text-slate-500">
                      Farmer: <strong className="text-slate-800">{visit.farmer}</strong> • Target: {visit.animal} • Distance: {visit.distance}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#ECE6D6]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#073B32]">
                      <Navigation className="w-3.5 h-3.5 text-[#149A84]" />
                      <span>Start Turn-by-Turn GPS</span>
                    </div>

                    {!isDone ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkComplete(visit.id);
                        }}
                        className="px-4 py-1.5 bg-[#073B32] hover:bg-[#052923] text-white font-bold rounded-xl text-xs shadow-xs transition"
                      >
                        Mark Completed
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-emerald-700">✓ Logged & Verified</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Visit Dossier & Action Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-3">
              <span className="font-mono text-xs font-bold text-slate-500">TASK DOSSIER #{selectedVisit.id}</span>
              <RiskBadge level={selectedVisit.urgency} size="sm" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Primary Objective</span>
              <h3 className="text-base font-black text-[#0A1020]">{selectedVisit.purpose}</h3>
              <p className="text-xs text-slate-600">
                Location: <strong>{selectedVisit.village}</strong> ({selectedVisit.distance} from current checkpoint)
              </p>
            </div>

            <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Farmer / Contact:</span>
                <span className="font-bold text-[#0A1020]">{selectedVisit.farmer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Livestock:</span>
                <span className="font-bold text-[#0A1020]">{selectedVisit.animal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled ETA:</span>
                <span className="font-bold text-[#073B32]">{selectedVisit.time}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => alert(`Calling ${selectedVisit.farmer} (+91 98224 51092)...`)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-700" />
                <span>Call Farmer ({selectedVisit.farmer})</span>
              </button>

              <button
                onClick={() => handleMarkComplete(selectedVisit.id)}
                className="w-full py-3 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Submit Verification & Complete Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
