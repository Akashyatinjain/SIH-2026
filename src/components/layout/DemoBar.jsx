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
  ArrowRight,
  Shield,
  Gavel
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

  const personas = [
    { id: 'farmer', label: '🌾 Farmer', color: 'bg-[#149A84]' },
    { id: 'fieldWorker', label: '🩺 Field', color: 'bg-teal-600' },
    { id: 'vet', label: '👨‍⚕️ Vet', color: 'bg-blue-600' },
    { id: 'admin', label: '🏛️ District', color: 'bg-indigo-600' },
    { id: 'stateAdmin', label: '🗺️ State', color: 'bg-purple-600' }
  ];

  return (
    <div className="bg-[#09101E] text-white text-[11px] py-1.5 px-2.5 sm:px-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-md relative z-40">
      
      {/* Left: Judge Demo Indicator & Active Persona State */}
      <div className="flex items-center gap-2 min-w-0">
        <button
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 bg-purple-950/80 hover:bg-purple-900 border border-purple-700/80 text-purple-200 rounded-full font-bold text-[10px] transition shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          <span>DEMO</span>
          <ChevronDown className="w-3 h-3 ml-0.5" />
        </button>

        <span className="text-slate-400 font-mono text-[10px] truncate max-w-[140px] sm:max-w-none">
          Case: <strong className="text-teal-300">#PS-2026-004281 (Ganga)</strong>
        </span>
      </div>

      {/* Center/Right: Role Switcher & Judge Mode Action */}
      <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
        
        {/* Persona Jump Bar (Scrollable on small mobile) */}
        <div className="flex items-center gap-1 bg-slate-900/90 px-1.5 py-0.5 rounded-lg border border-slate-800 text-[10px] overflow-x-auto max-w-[210px] sm:max-w-none no-scrollbar">
          <span className="text-slate-400 font-bold mr-0.5 hidden xl:inline">Persona:</span>
          {personas.map((p) => {
            const isActive = role === p.id && currentScreen === 'workspace';
            return (
              <button 
                key={p.id}
                onClick={() => switchDemoPersona(p.id)} 
                className={`px-1.5 sm:px-2 py-0.5 rounded font-bold transition whitespace-nowrap text-[10px] ${
                  isActive ? `${p.color} text-white shadow-xs` : 'text-slate-300 hover:text-white'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Demo Center Shortcut */}
        <button
          onClick={() => setCurrentScreen('demoCenter')}
          className="hidden sm:flex px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-700 text-[10px] font-bold transition items-center gap-1"
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Story</span>
        </button>

        {/* Dedicated Judge Mode Button */}
        <button
          onClick={() => setCurrentScreen('judgeMode')}
          className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 rounded-lg text-[10px] font-extrabold transition flex items-center gap-1 shadow-sm shrink-0"
        >
          <Gavel className="w-3 h-3 text-amber-400" />
          <span>Judge Mode</span>
        </button>

        {currentScreen !== 'home' && (
          <button
            onClick={() => setCurrentScreen('home')}
            className="text-slate-400 hover:text-white transition text-[10px] font-bold underline pl-0.5 hidden sm:inline"
          >
            Home
          </button>
        )}
      </div>

      {/* Evaluator Popover Drawer */}
      {isPopoverOpen && (
        <div className="absolute top-9 left-2 sm:left-3 z-50 bg-[#09101E] border-2 border-purple-700 p-4 rounded-2xl shadow-2xl w-[calc(100vw-20px)] max-w-xs sm:w-80 text-white space-y-3 animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5 text-purple-300 font-bold">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>SIH Evaluator Demo Console</span>
            </div>
            <button onClick={() => setIsPopoverOpen(false)} className="text-slate-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">Master Case</span>
              <strong className="text-teal-300">#PS-2026-004281 (Ganga / Cow)</strong>
              <p className="text-[10px] text-emerald-300 mt-0.5">Owner: Ramesh Patil (Khedgaon, Baramati)</p>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">Current Active Persona</span>
              <strong className="text-purple-300">{getPersonaName(role)}</strong>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-slate-400 font-mono block">Story Progress</span>
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
              className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold text-[10px] transition flex items-center justify-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restart Story</span>
            </button>
            <button
              onClick={() => {
                handleSimulateSync();
                setIsPopoverOpen(false);
              }}
              className="flex-1 py-2 bg-[#073B32] hover:bg-[#052923] text-emerald-200 rounded-lg font-bold text-[10px] transition flex items-center justify-center gap-1"
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
