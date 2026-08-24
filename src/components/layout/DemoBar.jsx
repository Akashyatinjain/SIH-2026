import React, { useState } from 'react';
import { 
  Sparkles, 
  RefreshCw, 
  RotateCcw, 
  Users, 
  Stethoscope, 
  Compass, 
  Radio, 
  Layers, 
  ChevronDown, 
  X,
  Play,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function DemoBar() {
  const { 
    currentScreen, 
    setCurrentScreen, 
    role, 
    enterWorkspace, 
    switchDemoPersona, 
    restartDemoStory, 
    demoStoryStage, 
    getPersonaName,
    addNotification 
  } = useApp();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleSimulateSync = () => {
    addNotification("⚡ Realtime Telemetry Update", "Received 3 new automated sickness alerts from Baramati field sentinel.", "info");
  };

  return (
    <div className="bg-[#0A1020] text-white text-[11px] py-1.5 px-3 border-b border-slate-800 flex items-center justify-between gap-3 shadow-md relative z-40">
      {/* Left: Judge Demo Indicator */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-300 rounded-full font-bold text-[10px] transition"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          <span>DEMO MODE ACTIVE</span>
          <ChevronDown className="w-3 h-3 ml-0.5" />
        </button>

        <span className="text-slate-500 font-mono text-[10px] hidden md:inline">
          Case: <strong className="text-slate-300">#PS-2026-004281 (Ganga / Cow)</strong>
        </span>
      </div>

      {/* Right: Quick Jump Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Persona Jump Bar */}
        <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">
          <span className="text-slate-400 font-bold mr-1 hidden sm:inline">Persona Jump:</span>
          <button 
            onClick={() => switchDemoPersona('farmer')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'farmer' && currentScreen === 'workspace' ? 'bg-[#149A84] text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🌾 Farmer
          </button>
          <button 
            onClick={() => switchDemoPersona('fieldWorker')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'fieldWorker' && currentScreen === 'workspace' ? 'bg-teal-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🩺 Field
          </button>
          <button 
            onClick={() => switchDemoPersona('vet')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'vet' && currentScreen === 'workspace' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            👨‍⚕️ Vet
          </button>
          <button 
            onClick={() => switchDemoPersona('admin')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'admin' && currentScreen === 'workspace' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🏛️ District
          </button>
          <button 
            onClick={() => switchDemoPersona('stateAdmin')} 
            className={`px-1.5 py-0.5 rounded font-bold transition ${role === 'stateAdmin' && currentScreen === 'workspace' ? 'bg-purple-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            🗺️ State
          </button>
        </div>

        {/* Demo Center Shortcut */}
        <button
          onClick={() => setCurrentScreen('demoCenter')}
          className="px-2 py-0.5 bg-purple-900/80 hover:bg-purple-800 text-purple-200 rounded border border-purple-700 text-[10px] font-bold transition flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span className="hidden md:inline">Demo Center (Story)</span>
        </button>

        {currentScreen !== 'home' && (
          <button
            onClick={() => setCurrentScreen('home')}
            className="text-slate-400 hover:text-white transition text-[10px] font-bold underline"
          >
            Home
          </button>
        )}
      </div>

      {/* Evaluator Popover Drawer */}
      {isPopoverOpen && (
        <div className="absolute top-8 left-3 z-50 bg-[#0A1020] border-2 border-purple-700 p-4 rounded-2xl shadow-2xl w-80 text-white space-y-3 animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5 text-purple-300 font-bold">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>SIH Evaluator Demo Console</span>
            </div>
            <button onClick={() => setIsPopoverOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">Persistent Demo Case</span>
              <strong className="text-white">#PS-2026-004281 (Ganga / Cow)</strong>
              <p className="text-[10px] text-emerald-300">Owner: Ramesh Patil (Khedgaon, Baramati)</p>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">Current Active Persona</span>
              <strong className="text-purple-300">{getPersonaName(role)}</strong>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-slate-400 font-mono block">Story Mode Progress</span>
                <strong className="text-white">Phase 0{demoStoryStage} of 09</strong>
              </div>
              <button 
                onClick={() => {
                  setCurrentScreen('demoCenter');
                  setIsPopoverOpen(false);
                }}
                className="px-2 py-1 bg-purple-700 hover:bg-purple-600 text-white rounded text-[10px] font-bold"
              >
                Open Story →
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => {
                restartDemoStory();
                setIsPopoverOpen(false);
              }}
              className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold text-[10px] transition flex items-center justify-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restart Story</span>
            </button>
            <button
              onClick={() => {
                handleSimulateSync();
                setIsPopoverOpen(false);
              }}
              className="flex-1 py-1.5 bg-[#073B32] hover:bg-[#052923] text-emerald-200 rounded-lg font-bold text-[10px] transition flex items-center justify-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Sync Update</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
