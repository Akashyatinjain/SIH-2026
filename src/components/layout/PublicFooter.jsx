import React from 'react';
import { Shield, PhoneCall, ExternalLink, Activity, HeartHandshake, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PublicFooter() {
  const { setCurrentScreen, setIsIVROpen } = useApp();

  return (
    <footer className="bg-[#09101E] text-slate-400 text-xs border-t border-slate-800">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#149A84] to-[#073B32] p-0.5 shadow-lg flex items-center justify-center border border-teal-500/30">
              <div className="w-full h-full bg-[#09101E] rounded-[14px] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#149A84]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-extrabold text-lg tracking-tight font-display">PASHUSURAKSHA</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">SIH 2026</span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5 font-medium">
                Maharashtra Livestock Health Intelligence & Early Warning Network
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsIVROpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-teal-500/50 text-white font-semibold text-xs transition-all"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Toll-Free Voice IVR: 1800-180-1551</span>
            </button>
            <button
              onClick={() => setCurrentScreen('demoCenter')}
              className="px-4 py-2.5 rounded-xl bg-[#149A84] text-white font-bold text-xs hover:bg-[#0C7A68] transition-all shadow-md shadow-teal-900/30"
            >
              Launch Interactive Demo
            </button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Government Info */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide font-display">GOVERNMENT OF MAHARASHTRA</h4>
          <p className="leading-relaxed text-slate-400">
            Commissionerate of Animal Husbandry, Central Building, Pune – 411001, Maharashtra, India.
          </p>
          <div className="pt-2 flex items-center gap-2 text-emerald-400 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Statewide Health Intelligence Server: Online</span>
          </div>
        </div>

        {/* Col 2: Problem Statement 26128 */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide font-display">SIH 2026 INITIATIVE</h4>
          <p className="leading-relaxed text-slate-400 text-[11px]">
            Problem Statement 26128: Efficient systems for early detection, prevention, and management of livestock diseases and animal health issues.
          </p>
          <ul className="space-y-1.5 text-slate-300 text-[11px]">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Rural Low-Connectivity Sync</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>GIS Spatial Disease Clustering</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Cold-Chain Diagnostic Chain</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Role Ecosystem */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide font-display">CONNECTED WORKSPACES</h4>
          <ul className="space-y-1 text-slate-400">
            <li><button onClick={() => setCurrentScreen('workspaceSelect')} className="hover:text-teal-300 transition-colors">Farmer Symptom Portal</button></li>
            <li><button onClick={() => setCurrentScreen('workspaceSelect')} className="hover:text-teal-300 transition-colors">Field Sentinel (Pashu Sakhi)</button></li>
            <li><button onClick={() => setCurrentScreen('workspaceSelect')} className="hover:text-teal-300 transition-colors">Clinical Triage (Veterinary)</button></li>
            <li><button onClick={() => setCurrentScreen('workspaceSelect')} className="hover:text-teal-300 transition-colors">Pune District Command Center</button></li>
            <li><button onClick={() => setCurrentScreen('workspaceSelect')} className="hover:text-teal-300 transition-colors">Maharashtra State Directorate</button></li>
          </ul>
        </div>

        {/* Col 4: Prototype Disclaimer */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide font-display">PROTOTYPE NOTICE</h4>
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-[11px] leading-relaxed text-slate-400">
            <p className="font-semibold text-amber-400 mb-1">Simulated Prototype Environment</p>
            This prototype has been designed for Smart India Hackathon 2026 evaluation. All case IDs, geolocation cluster coordinates, and sample barcodes are simulated for demonstration.
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© 2026 PashuSuraksha Network • Government of Maharashtra. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 justify-center sm:justify-end">
            <button onClick={() => setCurrentScreen('about')} className="hover:text-slate-300 transition-colors">About Solution</button>
            <button onClick={() => setCurrentScreen('howItWorks')} className="hover:text-slate-300 transition-colors">Workflow</button>
            <button onClick={() => setCurrentScreen('impact')} className="hover:text-slate-300 transition-colors">Projected Impact</button>
            <button onClick={() => setCurrentScreen('judgeMode')} className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">Judge Mode</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
