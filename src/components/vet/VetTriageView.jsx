import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Activity, 
  MapPin, 
  ChevronRight, 
  TestTube2, 
  Syringe, 
  Building2,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import CaseDetailDrawer from './CaseDetailDrawer';
import RiskBadge from '../common/RiskBadge';

export default function VetTriageView() {
  const { cases, setSelectedCase, selectedCase } = useApp();
  const [selectedTriageCase, setSelectedTriageCase] = useState(cases[0]);

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-[#073B32] via-[#0A1020] to-[#050811] text-white rounded-3xl shadow-sm border border-[#073B32] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>JIVSANKET Intelligence • Preliminary Risk Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">AI Clinical Decision Support & Triage</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Probabilistic Differential Diagnosis & Epidemiological Signal Correlation
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800 text-xs flex items-center gap-2 text-emerald-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Decision Support Signal: Active</span>
        </div>
      </div>

      {/* Grid: Triage Cases List & Live Decision Support Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Triage Case Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="font-black text-base text-[#0A1020]">PRIORITY CLINICAL SIGNALS</h3>

          <div className="space-y-3">
            {cases.map((c) => (
              <div
                key={c.caseId}
                onClick={() => setSelectedTriageCase(c)}
                className={`p-4 rounded-3xl border-2 cursor-pointer transition flex flex-col justify-between space-y-2 ${
                  selectedTriageCase?.caseId === c.caseId
                    ? 'border-[#073B32] bg-white shadow-md'
                    : 'border-[#ECE6D6] bg-white/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#073B32]">{c.caseId}</span>
                    <RiskBadge level={c.riskLevel} size="sm" />
                  </div>
                  <span className="text-xs font-mono font-black text-red-700">{c.riskScore}/100</span>
                </div>

                <div>
                  <h4 className="font-black text-sm text-[#0A1020]">{c.species} — {c.suspectedDisease}</h4>
                  <p className="text-xs text-slate-500">{c.farmerName} • {c.village}, {c.block}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Detailed Differential Diagnosis Engine View (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {selectedTriageCase && (
            <div className="bg-white p-6 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-3">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-500">TRIAGE CASE #{selectedTriageCase.caseId}</span>
                  <h3 className="text-lg font-black text-[#0A1020]">{selectedTriageCase.species} ({selectedTriageCase.animalId})</h3>
                </div>
                <RiskBadge level={selectedTriageCase.riskLevel} size="md" />
              </div>

              {/* JIVSANKET Decision Support Panel Box */}
              <div className="bg-gradient-to-br from-[#073B32] via-[#0A1020] to-[#050811] text-white p-5 rounded-2xl border border-slate-800 space-y-4 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="font-black text-xs uppercase tracking-wider text-slate-200">
                      JIVSANKET Intelligence Analysis
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                    High Confidence Signal
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Calculated Risk Index</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-red-400 font-mono">{selectedTriageCase.riskScore}</span>
                    <span className="text-xs text-slate-300">/ 100 Epidemiological Risk Score</span>
                  </div>
                </div>

                {/* Evidence */}
                <div className="space-y-1.5 text-xs text-slate-300 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="font-bold text-slate-400 text-[10px] uppercase block">Supporting Epidemiological Evidence:</span>
                  <p>• 5 related clinical reports logged in {selectedTriageCase.block} sector</p>
                  <p>• 3 nearby villages showing similar nodular & pyrexic signs</p>
                  <p>• Low booster vaccination coverage (74%) in local unit</p>
                  <p>• 7-day sharp increase in similar symptoms</p>
                </div>
              </div>

              {/* Differential Diagnosis Probabilities */}
              <div className="space-y-3">
                <h4 className="font-black text-xs uppercase tracking-wider text-slate-700">
                  Differential Diagnosis Probability Breakdown:
                </h4>

                <div className="space-y-2.5">
                  {(selectedTriageCase.differentialList || [
                    { disease: "Lumpy Skin Disease (Capripoxvirus)", probability: "84%", rationale: "Circumscribed nodular lesions across body + fever" },
                    { disease: "Pseudo-Cowpox / Parapox", probability: "11%", rationale: "Milder localized symptoms" },
                    { disease: "Bovine Papillomatosis", probability: "5%", rationale: "Chronic warts without sudden high fever" }
                  ]).map((diff, idx) => (
                    <div key={idx} className="p-3.5 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-[#0A1020]">{diff.disease}</span>
                        <span className="text-red-700 font-mono text-sm">{diff.probability}</span>
                      </div>
                      <p className="text-[11px] text-slate-600">{diff.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCase(selectedTriageCase)}
                className="w-full py-3.5 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-2xl text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Launch Clinical Workspace & Issue Rx →</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Case Detail Workspace Drawer */}
      {selectedCase && (
        <CaseDetailDrawer 
          caseData={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </div>
  );
}
