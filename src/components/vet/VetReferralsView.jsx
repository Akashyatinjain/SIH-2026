import React, { useState } from 'react';
import { 
  Hospital, 
  Building2, 
  PlusCircle, 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function VetReferralsView() {
  const { addNotification } = useApp();
  const [showReferralModal, setShowReferralModal] = useState(false);

  const [animalTag, setAnimalTag] = useState('MH-PUN-1190 (Goat - Gunawadi)');
  const [targetFacility, setTargetFacility] = useState('Baramati Sub-District Veterinary Hospital');
  const [reason, setReason] = useState('Critical Respiratory Distress & PPR Isolation Quarantine');
  const [urgency, setUrgency] = useState('Emergency Quarantine');

  const referrals = [
    {
      id: "REF-PUN-091",
      caseId: "PS-2026-004275",
      animalTag: "MH-PUN-1190 (Goat - Balasaheb Shinde)",
      facility: "Baramati Sub-District Veterinary Hospital",
      status: "Admitted to Quarantine Unit",
      urgency: "CRITICAL",
      date: "Today, 15:30",
      notes: "Severe bronchopneumonia & enteritis. Fluid therapy & oxygenation underway."
    },
    {
      id: "REF-PUN-084",
      caseId: "PS-2026-004255",
      animalTag: "MH-PUN-FLOCK-09 (Poultry Unit)",
      facility: "District High Security Containment Polyclinic, Pune",
      status: "Containment Perimeter Active",
      urgency: "CRITICAL",
      date: "22 Feb 2026",
      notes: "Avian influenza suspect protocol. 1km isolation ring notified by District Magistrate."
    }
  ];

  const handleCreateReferral = (e) => {
    e.preventDefault();
    addNotification("🏥 Hospital Referral Dispatched", `Reserved isolation bed at ${targetFacility} for ${animalTag}.`, "alert");
    alert(`Emergency Isolation bed reserved at ${targetFacility}! Ambulatory transport dispatch notified.`);
    setShowReferralModal(false);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-indigo-950 via-[#073B32] to-[#0A1020] text-white rounded-3xl shadow-sm border border-indigo-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-indigo-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>State Veterinary Referral & Tertiary Hospital Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Hospital Referrals & Quarantine Units</h2>
          <p className="text-xs text-indigo-200 mt-0.5">
            Emergency Tertiary Admissions, Mobile Ambulance Dispatches & Quarantine Beds
          </p>
        </div>

        <button
          onClick={() => setShowReferralModal(true)}
          className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black shadow-md transition flex items-center gap-2 shrink-0 border border-indigo-400"
        >
          <Hospital className="w-4 h-4" />
          <span>+ Refer to Tertiary Hospital</span>
        </button>
      </div>

      {/* Referrals List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">ACTIVE EMERGENCY REFERRALS & QUARANTINE ADMISSIONS</h3>

        <div className="space-y-4">
          {referrals.map((r) => (
            <div
              key={r.id}
              className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-200">
                    {r.id}
                  </span>
                  <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                    {r.urgency}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">{r.caseId}</span>
                </div>
                <span className="text-xs text-slate-500">{r.date}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-8 space-y-1">
                  <h4 className="font-black text-base text-[#0A1020]">{r.animalTag}</h4>
                  <p className="text-xs text-indigo-900 font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                    <span>{r.facility}</span>
                  </p>
                  <p className="text-xs text-slate-600 pt-1">{r.notes}</p>
                </div>

                <div className="md:col-span-4 flex items-center justify-end gap-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold">
                    ✓ {r.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refer to Hospital Modal */}
      {showReferralModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <h3 className="text-xl font-black text-[#0A1020]">Generate Emergency Hospital Referral</h3>
            <form onSubmit={handleCreateReferral} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Animal Tag & Owner</label>
                <input
                  type="text"
                  value={animalTag}
                  onChange={e => setAnimalTag(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Target Tertiary Hospital</label>
                <select
                  value={targetFacility}
                  onChange={e => setTargetFacility(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                >
                  <option value="Baramati Sub-District Veterinary Hospital">Baramati Sub-District Veterinary Hospital</option>
                  <option value="Disease Investigation Section (DIS) Hospital, Aundh, Pune">Disease Investigation Section (DIS) Hospital, Aundh, Pune</option>
                  <option value="Pune District Veterinary Polyclinic">Pune District Veterinary Polyclinic</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Clinical Indication / Reason</label>
                <textarea
                  rows={2}
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowReferralModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-700 text-white font-bold rounded-xl shadow-xs"
                >
                  Book Isolation Bed & Dispatch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
