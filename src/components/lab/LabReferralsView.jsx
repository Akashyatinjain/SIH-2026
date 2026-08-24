import React, { useState } from 'react';
import { 
  TestTube2, 
  QrCode, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Building2, 
  Search, 
  ArrowRight, 
  FileText,
  Truck,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LabReferralsView() {
  const { labSamples, t } = useApp();
  const [selectedSample, setSelectedSample] = useState(labSamples[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSamples = labSamples.filter(s => 
    s.sampleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.caseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.testRequested.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const steps = ["Collected", "Dispatched", "Received", "Testing", "Result", "Reviewed"];

  const getStepIndex = (step) => {
    switch (step) {
      case 'Collected': return 0;
      case 'Dispatched': return 1;
      case 'Received': return 2;
      case 'Testing': return 3;
      case 'Result': return 4;
      case 'Reviewed': return 5;
      default: return 3;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded-full text-xs text-purple-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>Veterinary Diagnostic Network • Disease Investigation Section (DIS)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">Laboratory Referral & Chain of Custody</h2>
          <p className="text-xs text-purple-200 mt-0.5">Cold-Chain Tracking & Real-Time RT-PCR / ELISA Turnaround</p>
        </div>

        <div className="bg-white/10 p-3 rounded-xl text-center border border-white/10 shrink-0">
          <div className="text-2xl font-black text-purple-300">{labSamples.length}</div>
          <div className="text-[10px] text-slate-300">Active Samples</div>
        </div>
      </div>

      {/* Main Grid: Sample Table + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Samples List (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 card-elevated space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by Barcode, Case ID, or Test..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-xl text-xs"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-2.5 px-3">Barcode</th>
                  <th className="py-2.5 px-3">Case & Species</th>
                  <th className="py-2.5 px-3">Diagnostic Test</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSamples.map((s) => {
                  const isSelected = selectedSample?.sampleId === s.sampleId;
                  return (
                    <tr 
                      key={s.sampleId}
                      onClick={() => setSelectedSample(s)}
                      className={`cursor-pointer transition ${
                        isSelected ? 'bg-purple-50/80 font-bold' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="py-3 px-3 font-mono text-purple-900 font-bold">
                        {s.sampleId}
                      </td>
                      <td className="py-3 px-3">
                        <div>{s.species}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{s.caseId}</div>
                      </td>
                      <td className="py-3 px-3 text-slate-700 max-w-xs truncate">
                        {s.testRequested}
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                          {s.statusBadge}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Selected Sample Dossier & Workflow Timeline (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 card-elevated space-y-4 flex flex-col justify-between">
          {selectedSample ? (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h4 className="font-extrabold text-base text-purple-950 font-mono">{selectedSample.sampleId}</h4>
                  <p className="text-slate-500">Case Reference: {selectedSample.caseId}</p>
                </div>
                <div className="p-2 bg-purple-50 text-purple-800 border border-purple-200 rounded-xl">
                  <QrCode className="w-6 h-6" />
                </div>
              </div>

              {/* Step Progression Timeline */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <p className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">Chain of Custody Timeline</p>
                <div className="grid grid-cols-6 gap-1 text-center text-[10px]">
                  {steps.map((st, idx) => {
                    const currentIdx = getStepIndex(selectedSample.workflowStep);
                    const isDone = idx <= currentIdx;
                    return (
                      <div key={st} className="space-y-1">
                        <div className={`h-1.5 rounded-full transition ${isDone ? 'bg-purple-600' : 'bg-slate-200'}`} />
                        <span className={`font-semibold ${isDone ? 'text-purple-900' : 'text-slate-400'}`}>
                          {st}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sample Details */}
              <div className="space-y-2 text-slate-700">
                <div className="p-2.5 bg-purple-50/50 rounded-lg border border-purple-100 space-y-1">
                  <p><strong>Test:</strong> {selectedSample.testRequested}</p>
                  <p><strong>Specimen:</strong> {selectedSample.sampleType}</p>
                  <p><strong>Target Lab:</strong> {selectedSample.laboratory}</p>
                  <p><strong>Collector:</strong> {selectedSample.collectedBy}</p>
                </div>

                <div className="p-3 bg-slate-900 text-white rounded-xl space-y-1">
                  <span className="text-[10px] text-purple-300 font-bold uppercase">Laboratory Diagnostic Result:</span>
                  <p className="font-bold text-sm text-emerald-300 font-mono">{selectedSample.result}</p>
                  <p className="text-[10px] text-slate-400">Authenticated by Disease Investigation Section, Pune</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-500">Select a sample to inspect diagnostic chain of custody.</p>
          )}

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => alert(`Printing Official Diagnostic Report for Barcode #${selectedSample?.sampleId}`)}
              className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Print Official Laboratory Certificate (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
