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
  Gavel,
  Eye
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
  const [isDismissed, setIsDismissed] = useState(role === 'farmer'); // Auto-hidden for farmer

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

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed top-2 right-2 z-50 px-2 py-1 bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-[10px] font-bold shadow-lg transition flex items-center gap-1 backdrop-blur-sm opacity-60 hover:opacity-100"
        title="Show Persona Switcher & Demo Tools"
      >
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Switch Persona</span>
      </button>
    );
  }

  return (
    <div className="bg-[#09101E] text-white text-[11px] py-1 px-3 border-b border-slate-800 flex items-center justify-between gap-2 shadow-sm relative z-40">
      
      {/* Left: Persona Switcher */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-slate-400 font-bold text-[10px] mr-1 hidden sm:inline">Switch Role:</span>
        {personas.map((p) => {
          const isActive = role === p.id && currentScreen === 'workspace';
          return (
            <button 
              key={p.id}
              onClick={() => switchDemoPersona(p.id)} 
              className={`px-2 py-0.5 rounded-md font-bold transition whitespace-nowrap text-[10px] ${
                isActive ? `${p.color} text-white shadow-xs` : 'text-slate-400 hover:text-white bg-slate-900/60'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Right: Judge Mode & Dismiss */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={() => setCurrentScreen('judgeMode')}
          className="px-2 py-0.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-md text-[10px] font-bold transition flex items-center gap-1"
        >
          <Gavel className="w-2.5 h-2.5 text-amber-400" />
          <span>Judge Mode</span>
        </button>

        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition"
          title="Dismiss Demo Bar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
