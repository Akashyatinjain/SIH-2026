import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Calendar, 
  Sparkles, 
  TestTube2, 
  FileText, 
  Building2, 
  Send, 
  UserCheck, 
  ShieldAlert,
  Printer,
  Syringe,
  Activity,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function CaseDetailDrawer({ caseData, onClose }) {
  const { addNotification } = useApp();

  const [prescriptionText, setPrescriptionText] = useState(
    caseData.prescription || "Melt-inject Flunixin Meglumine (anti-pyretic) + Enrofloxacin 10% + TopiCure spray on skin nodules. Strict barn isolation for 21 days."
  );
  const [labSampleOrdered, setLabSampleOrdered] = useState(!!caseData.labReferral);
  const [hospitalTransferred, setHospitalTransferred] = useState(!!caseData.hospitalReferral);
  const [caseStatus, setCaseStatus] = useState(caseData.status || "under_review");

  const handleOrderLabSample = () => {
    setLabSampleOrdered(true);
    addNotification("🧪 Diagnostic Lab Order Dispatched", `Barcode #LAB-PUN-9821 generated for ${caseData.animalId}. Sample courier notified.`, "success");
    alert(`Lab Sample Barcode #LAB-PUN-9821 generated for ${caseData.animalId}! Assigned to Regional Animal Health Laboratory, Pune.`);
  };

  const handleTransferHospital = () => {
    setHospitalTransferred(true);
    addNotification("🚨 Emergency Hospital Transfer", `Admitted ${caseData.animalId} to Baramati Sub-District Quarantine Unit.`, "alert");
    alert(`Emergency Isolation bed reserved at Baramati Sub-District Veterinary Hospital for ${caseData.animalId}.`);
  };

  const handleResolveCase = () => {
    setCaseStatus("resolved");
    addNotification("✅ Case Resolved", `Case ${caseData.caseId} marked as clinically resolved.`, "success");
    alert(`Case ${caseData.caseId} marked as resolved!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#F6F3EA] rounded-3xl shadow-2xl border border-[#ECE6D6] max-w-7xl w-full my-auto flex flex-col max-h-[94vh] overflow-hidden text-[#0A1020]">
        {/* Top Clinical Header Ribbon */}
        <div className="p-4 bg-gradient-to-r from-[#073B32] via-[#0A1020] to-[#050811] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#149A84]/20 border border-[#149A84]/40 flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black text-emerald-400 uppercase tracking-wider">
                  CLINICAL CASE WORKSPACE #{caseData.caseId}
                </span>
                <RiskBadge level={caseData.riskLevel} size="sm" />
              </div>
              <h2 className="text-base sm:text-lg font-black text-white">
                {caseData.species} ({caseData.animalId}) — {caseData.suspectedDisease}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300 font-mono hidden sm:inline">Reported {caseData.reportedAt}</span>
            <button 
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-COLUMN CLINICAL CASE WORKSPACE (Section 24) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 sm:p-5 overflow-y-auto flex-1 text-xs">
          {/* ========================================================= */}
          {/* COLUMN 1: ANIMAL & OWNER DOSSIER (Left - 3 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 space-y-3">
            {/* Animal Profile Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs space-y-3">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-700 border-b border-[#ECE6D6] pb-2">
                Animal & Owner Dossier
              </h3>

              <div className="flex items-center gap-3">
                <img 
                  src={caseData.photoUrl || "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=600&q=80"} 
                  alt={caseData.animalId} 
                  className="w-14 h-14 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-black text-sm text-[#0A1020]">{caseData.animalId}</h4>
                  <p className="text-slate-600 font-semibold">{caseData.species} • {caseData.breed}</p>
                  <p className="text-[10px] text-slate-400 font-mono">RFID: 89040182740921</p>
                </div>
              </div>

              <div className="space-y-1.5 text-slate-700 border-t border-[#ECE6D6] pt-2">
                <p><strong>Owner:</strong> {caseData.farmerName}</p>
                <p><strong>Phone:</strong> {caseData.farmerPhone}</p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  <span>{caseData.village}, {caseData.block}, {caseData.district}</span>
                </p>
              </div>
            </div>

            {/* Medical & Vaccination History */}
            <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs space-y-2">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-700 border-b border-[#ECE6D6] pb-2">
                Vaccination & Past Health
              </h3>
              <div className="space-y-1.5 text-[11px] text-slate-600">
                <div className="flex justify-between">
                  <span>FMD Booster:</span>
                  <span className="font-bold text-amber-700">Due in 12 days</span>
                </div>
                <div className="flex justify-between">
                  <span>LSD Goat Pox:</span>
                  <span className="font-bold text-emerald-700">Protected (Aug 2025)</span>
                </div>
                <div className="flex justify-between">
                  <span>HS Septicemia:</span>
                  <span className="font-bold text-emerald-700">Protected (Sep 2025)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: CLINICAL OBSERVATIONS & DECISION SUPPORT (Center - 5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-3">
            {/* Section 25: PASHUSURAKSHA DECISION SUPPORT PANEL */}
            <div className="bg-gradient-to-br from-[#073B32] via-[#0A1020] to-[#050811] text-white p-4 rounded-2xl border border-slate-800 shadow-md space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-black text-xs uppercase tracking-wider text-slate-100">
                    PASHUSURAKSHA DECISION SUPPORT
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-red-400 font-bold bg-red-950 px-2 py-0.5 rounded border border-red-800">
                  Elevated Signal
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Calculated Risk Index</span>
                  <span className="text-2xl font-black text-red-400 font-mono">86 / 100</span>
                </div>
                <div className="text-right text-[11px] text-slate-300">
                  <span className="text-emerald-400 font-bold block">High Probability</span>
                  <span>Spatial Cluster Correlation</span>
                </div>
              </div>

              {/* Supporting Evidence Breakdown */}
              <div className="space-y-1.5 text-[11px] text-slate-300">
                <span className="font-bold text-slate-400 text-[10px] uppercase">Supporting Clinical Evidence:</span>
                <p>• 5 related clinical reports logged in Baramati sector</p>
                <p>• 3 nearby villages (Malegaon, Gunawadi) showing similar nodular signs</p>
                <p>• Low vaccination coverage (74%) in Khedgaon unit</p>
                <p>• 7-day sharp increase in similar symptoms</p>
              </div>

              {/* Suggested Protocol */}
              <div className="bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-800 text-[11px] text-emerald-200">
                <strong>Suggested Protocol:</strong> 1. Field verification by Para-Vet 2. Sample collection for RT-PCR 3. Immediate shed liming 4. Nearby herd screening.
              </div>
            </div>

            {/* Reported Symptoms & Photos */}
            <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs space-y-3">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-700 border-b border-[#ECE6D6] pb-2">
                Reported Signs & Field Evidence
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {caseData.symptoms.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 bg-red-50 text-red-900 font-bold rounded-lg border border-red-200 text-xs">
                    {s}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                  <span className="text-slate-400 block text-[10px]">Symptom Duration:</span>
                  <span className="font-bold text-[#0A1020] text-xs">{caseData.duration}</span>
                </div>
                <div className="p-2.5 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                  <span className="text-slate-400 block text-[10px]">Stopped Eating:</span>
                  <span className="font-bold text-red-700 text-xs">{caseData.stoppedEating ? "Yes (Severe Inappetence)" : "No"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3: CLINICAL ACTIONS & REFERRALS (Right - 4 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-3">
            {/* Treatment e-Prescription Box */}
            <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs space-y-2">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-700 border-b border-[#ECE6D6] pb-2 flex items-center justify-between">
                <span>Clinical Treatment (Rx)</span>
                <FileText className="w-3.5 h-3.5 text-blue-600" />
              </h3>

              <textarea
                rows={3}
                value={prescriptionText}
                onChange={e => setPrescriptionText(e.target.value)}
                className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs text-[#0A1020] font-mono focus:outline-none focus:border-[#149A84]"
              />

              <button
                onClick={() => {
                  addNotification("💊 e-Prescription Issued", `Sent digital Rx to Ramesh Patil (+91 98224 51092).`, "success");
                  alert("Digital e-Prescription sent to Farmer via SMS & App notification!");
                }}
                className="w-full py-2 bg-[#073B32] hover:bg-[#052923] text-white font-bold rounded-xl text-xs shadow-xs transition"
              >
                Issue Digital e-Prescription
              </button>
            </div>

            {/* Diagnostic Lab Sample Order */}
            <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-2">
                <span className="font-black text-xs uppercase tracking-wider text-slate-700">Laboratory Swab Referral</span>
                <TestTube2 className="w-3.5 h-3.5 text-purple-600" />
              </div>

              {labSampleOrdered ? (
                <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-200 text-purple-950 space-y-1">
                  <div className="flex items-center justify-between font-mono font-bold">
                    <span>Barcode: #LAB-PUN-9821</span>
                    <span className="text-[10px] bg-purple-200 px-1.5 py-0.5 rounded">Ordered</span>
                  </div>
                  <p className="text-[10px] text-purple-800">Target: Regional Animal Health Diagnostic Lab, Pune</p>
                </div>
              ) : (
                <button
                  onClick={handleOrderLabSample}
                  className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center justify-center gap-1.5"
                >
                  <TestTube2 className="w-3.5 h-3.5" />
                  <span>Order Diagnostic RT-PCR Barcode</span>
                </button>
              )}
            </div>

            {/* Hospital Isolation Bed Referral */}
            <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-2">
                <span className="font-black text-xs uppercase tracking-wider text-slate-700">Hospital Quarantine Unit</span>
                <Building2 className="w-3.5 h-3.5 text-indigo-600" />
              </div>

              {hospitalTransferred ? (
                <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-200 text-indigo-950 font-bold">
                  ✓ Isolation Bed Reserved at Baramati Hospital
                </div>
              ) : (
                <button
                  onClick={handleTransferHospital}
                  className="w-full py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center justify-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Refer to Isolation Hospital</span>
                </button>
              )}
            </div>

            {/* Mark Case Resolved */}
            <button
              onClick={handleResolveCase}
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-xl text-xs shadow-md transition flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Resolve & Close Case</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
