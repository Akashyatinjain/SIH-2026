import React from 'react';
import { 
  Sparkles, 
  RefreshCw, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Building2, 
  Stethoscope, 
  Layers 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function DemoBar() {
  const { 
    currentScreen, 
    role, 
    enterWorkspace, 
    logout, 
    setCurrentScreen,
    addNotification
  } = useApp();

  const handleSimulateSync = () => {
    addNotification("⚡ Realtime Surveillance Sync", "Received 3 new automated disease reports from Baramati sub-centers.", "info");
  };

  return (
    <div className="bg-[#0A1020] text-white text-[11px] py-1.5 px-3 border-b border-slate-800 flex items-center justify-between gap-3 shadow-md">
      <div className="flex items-center gap-2 font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-bold text-emerald-300">DEMO ENVIRONMENT</span>
        <span className="text-slate-500 hidden md:inline">• SIH 2026 Problem Statement 26128</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Quick Role Switcher for SIH Evaluator Demonstration */}
        <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">
          <span className="text-slate-400 font-bold mr-1 hidden sm:inline">Role Jump:</span>
          <button 
            onClick={() => enterWorkspace('farmer')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'farmer' && currentScreen === 'workspace' ? 'bg-[#149A84] text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🌾 Farmer
          </button>
          <button 
            onClick={() => enterWorkspace('fieldWorker')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'fieldWorker' && currentScreen === 'workspace' ? 'bg-teal-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🩺 Field
          </button>
          <button 
            onClick={() => enterWorkspace('vet')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'vet' && currentScreen === 'workspace' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            👨‍⚕️ Vet
          </button>
          <button 
            onClick={() => enterWorkspace('admin')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'admin' && currentScreen === 'workspace' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🏛️ District
          </button>
          <button 
            onClick={() => enterWorkspace('stateAdmin')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'stateAdmin' && currentScreen === 'workspace' ? 'bg-purple-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🗺️ State
          </button>
        </div>

        <button
          onClick={handleSimulateSync}
          className="text-slate-400 hover:text-emerald-300 transition flex items-center gap-1 font-mono text-[10px]"
          title="Simulate incoming telemetry data"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden md:inline">Simulate Update</span>
        </button>

        {currentScreen !== 'home' && (
          <button
            onClick={() => setCurrentScreen('home')}
            className="text-slate-400 hover:text-white transition text-[10px] font-bold underline"
          >
            Public Home
          </button>
        )}
      </div>
    </div>
  );
}
