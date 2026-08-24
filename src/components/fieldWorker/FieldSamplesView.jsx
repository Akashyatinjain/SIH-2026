import React, { useState } from 'react';
import { 
  TestTube2, 
  PlusCircle, 
  Search, 
  QrCode, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Send, 
  Sparkles,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { diagnosticLabSamples } from '../../data/mockData';

export default function FieldSamplesView() {
  const { labSamples, addNotification } = useApp();
  const samples = labSamples || diagnosticLabSamples;

  const [search, setSearch] = useState('');
  const [showCollectModal, setShowCollectModal] = useState(false);

  // Form State
  const [barcode, setBarcode] = useState(`LAB-PUN-${Math.floor(9822 + samples.length)}`);
  const [animalTag, setAnimalTag] = useState('MH-PUN-0241 (Ganga)');
  const [sampleType, setSampleType] = useState('Nasal Swab & Serum');
  const [testRequested, setTestRequested] = useState('Capripoxvirus (LSD) Real-time PCR');
  const [targetLab, setTargetLab] = useState('Regional Animal Health Diagnostic Lab, Aundh, Pune');

  const handleCollectSample = (e) => {
    e.preventDefault();
    addNotification("🧪 Diagnostic Sample Collected", `Generated Barcode #${barcode} for ${animalTag}. Cold courier dispatched.`, "success");
    alert(`Diagnostic Sample #${barcode} collected & sealed in cold-chain container! Target: ${targetLab}`);
    setShowCollectModal(false);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-purple-950 via-[#0A1020] to-[#050811] text-white rounded-3xl shadow-sm border border-purple-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>Field Biological Sample Chain-of-Custody</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Sample Collection & Logistics</h2>
          <p className="text-xs text-purple-200 mt-0.5">
            Realtime RT-PCR / ELISA Cold-Chain Diagnostic Specimen Tracking
          </p>
        </div>

        <button
          onClick={() => setShowCollectModal(true)}
          className="px-5 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-2xl text-xs font-black shadow-md transition flex items-center gap-2 shrink-0 border border-purple-400"
        >
          <TestTube2 className="w-4 h-4" />
          <span>+ Collect Diagnostic Swab / Sample</span>
        </button>
      </div>

      {/* Samples List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">SECTOR SAMPLES DISPATCHED TO REGIONAL LABORATORIES</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {samples.map((s) => (
            <div
              key={s.sampleId}
              className="bg-white p-5 rounded-3xl border border-[#ECE6D6] hover:border-purple-600 transition shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-2.5">
                  <div className="flex items-center gap-2 font-mono font-bold text-purple-950">
                    <QrCode className="w-4 h-4 text-purple-700" />
                    <span>{s.sampleId}</span>
                  </div>
                  <span className="text-[10px] font-black text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full">
                    {s.statusBadge || s.workflowStep}
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-sm text-[#0A1020]">{s.testRequested}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Animal: <strong>{s.animalTag}</strong> ({s.species})</p>
                </div>

                <div className="p-3 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Specimen Type:</span>
                    <span className="font-bold text-[#0A1020]">{s.sampleType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Destination Lab:</span>
                    <span className="font-bold text-slate-800 text-[11px] truncate max-w-[200px]">{s.laboratory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Diagnostic Result:</span>
                    <span className="font-mono font-bold text-purple-900">{s.result}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-[#ECE6D6]">
                <span>Collected: {s.collectedAt || 'Today'}</span>
                <button
                  onClick={() => alert(`Tracking cold-chain GPS courier for sample ${s.sampleId}...`)}
                  className="font-bold text-purple-700 hover:underline flex items-center gap-1"
                >
                  <span>Track Courier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collect Sample Modal */}
      {showCollectModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <h3 className="text-xl font-black text-[#0A1020]">Collect Field Diagnostic Specimen</h3>
            <form onSubmit={handleCollectSample} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Generated Barcode</label>
                <input
                  type="text"
                  value={barcode}
                  readOnly
                  className="w-full p-2.5 bg-slate-100 border border-[#ECE6D6] rounded-xl font-mono font-bold text-purple-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Animal Identifier</label>
                  <input
                    type="text"
                    value={animalTag}
                    onChange={e => setAnimalTag(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Sample Type</label>
                  <select
                    value={sampleType}
                    onChange={e => setSampleType(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  >
                    <option value="Nasal Swab & Serum">Nasal Swab & Serum</option>
                    <option value="Whole Blood in EDTA">Whole Blood in EDTA</option>
                    <option value="Vesicular Fluid Flap">Vesicular Fluid Flap</option>
                    <option value="Skin Nodule Biopsy">Skin Nodule Biopsy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Requested Laboratory Test</label>
                <select
                  value={testRequested}
                  onChange={e => setTestRequested(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                >
                  <option value="Capripoxvirus (LSD) Real-time PCR">Capripoxvirus (LSD) Real-time PCR</option>
                  <option value="FMD Antigen ELISA Serotyping">FMD Antigen ELISA Serotyping</option>
                  <option value="PPRV N-Gene Real-time RT-PCR">PPRV N-Gene Real-time RT-PCR</option>
                  <option value="Avian Influenza H5N1 PCR">Avian Influenza H5N1 PCR</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Destination Laboratory</label>
                <input
                  type="text"
                  value={targetLab}
                  onChange={e => setTargetLab(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowCollectModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-purple-700 text-white font-bold rounded-xl shadow-xs"
                >
                  Seal & Dispatch Courier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
