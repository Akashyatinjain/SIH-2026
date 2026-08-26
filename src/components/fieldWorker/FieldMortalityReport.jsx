import React, { useState } from 'react';
import { 
  Skull, 
  AlertTriangle, 
  Camera, 
  MapPin, 
  CheckCircle2, 
  X, 
  ArrowRight,
  ShieldAlert,
  Calendar,
  Send
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FieldMortalityReport({ onClose }) {
  const { reportMortality, addNotification } = useApp();

  const [species, setSpecies] = useState('Poultry / Broiler (कोंबड्या)');
  const [deathCount, setDeathCount] = useState(24);
  const [village, setVillage] = useState('Gunawadi, Baramati');
  const [mortalityDate, setMortalityDate] = useState('2026-02-24');
  const [symptoms, setSymptoms] = useState('Cyanosis of comb, greenish diarrhea, sudden overnight death');
  const [possibleCause, setPossibleCause] = useState('Suspected Avian Influenza / Newcastle Disease');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    reportMortality({
      species,
      count: deathCount,
      village,
      date: mortalityDate,
      symptoms,
      possibleCause
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="p-5 bg-gradient-to-r from-red-900 via-rose-950 to-[#09101E] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-300">
              <Skull className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base tracking-tight text-white font-display">
                Urgent Livestock Mortality Logging
              </h3>
              <p className="text-[11px] text-red-200 font-mono">Field Sentinel Emergency Telemetry</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Multiple Mortality Alert Callout if count > 1 */}
            {deathCount > 1 && (
              <div className="p-3.5 bg-red-50 rounded-2xl border border-red-200 flex items-start gap-2.5 text-xs text-red-900">
                <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-extrabold block">Multiple mortality signal detected ({deathCount} Deaths)</strong>
                  Automatic protocol will alert District Command & trigger immediate Rapid Response Team verification.
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Affected Species</label>
                <select
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="w-full p-2.5 bg-[#FCFBF8] border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#149A84] focus:outline-none"
                >
                  <option>Poultry / Broiler (कोंबड्या)</option>
                  <option>Goat (शेळी)</option>
                  <option>Sheep (मेंढी)</option>
                  <option>Cattle (गाय / बैल)</option>
                  <option>Buffalo (म्हेस)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Number of Deaths</label>
                <input
                  type="number"
                  min="1"
                  value={deathCount}
                  onChange={(e) => setDeathCount(Number(e.target.value))}
                  className="w-full p-2.5 bg-[#FCFBF8] border border-slate-300 rounded-xl text-xs font-bold font-mono focus:ring-2 focus:ring-[#149A84] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Village / Location</label>
                <input
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full p-2.5 bg-[#FCFBF8] border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#149A84] focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Date of Occurrence</label>
                <input
                  type="date"
                  value={mortalityDate}
                  onChange={(e) => setMortalityDate(e.target.value)}
                  className="w-full p-2.5 bg-[#FCFBF8] border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#149A84] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Pre-Mortality Symptoms</label>
              <textarea
                rows="2"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full p-2.5 bg-[#FCFBF8] border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#149A84] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Field Worker Provisional Impression</label>
              <input
                type="text"
                value={possibleCause}
                onChange={(e) => setPossibleCause(e.target.value)}
                className="w-full p-2.5 bg-[#FCFBF8] border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#149A84] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Mortality Signal</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-100 border-2 border-red-500 text-red-700 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-extrabold text-slate-900 font-display">
                Mortality Signal Broadcasted
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Logged {deathCount} deaths of {species} in {village}. District Rapid Response Team and Baramati Taluka Vet Hospital alerted.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-2xl border border-red-200 text-xs text-red-900 font-mono font-bold">
              SIGNAL ID: MOR-2026-{Math.floor(1000 + Math.random() * 9000)} • HIGH EPIDEMIOLOGICAL PRIORITY
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#073B32] hover:bg-[#052923] text-white font-extrabold text-xs rounded-xl shadow-md transition"
            >
              Return to Field Operations →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
