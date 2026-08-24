import React from 'react';
import { 
  Sparkles, 
  ArrowRight,
  Shield,
  Layers,
  Home,
  LogIn,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function DemoBar() {
  const { 
    currentScreen,
    setCurrentScreen,
    role, 
    enterWorkspace,
    logout,
    demoTourStep,
    setDemoTourStep,
    cases,
    setSelectedCaseForDrawer,
    setActiveTab
  } = useApp();

  // Run the SIH Evaluator Guided Demo Steps
  const handleRunDemoStep = (stepNumber) => {
    setDemoTourStep(stepNumber);

    if (stepNumber === 1) {
      enterWorkspace('farmer');
      setActiveTab('report');
    } else if (stepNumber === 2) {
      enterWorkspace('farmer');
      setActiveTab('report');
    } else if (stepNumber === 3) {
      enterWorkspace('vet');
      setActiveTab('cases');
      const targetCase = cases.find(c => c.caseId === "PS-2026-004281") || cases[0];
      if (targetCase) {
        setSelectedCaseForDrawer(targetCase);
      }
    } else if (stepNumber === 4) {
      enterWorkspace('admin');
      setActiveTab('gis');
    } else if (stepNumber === 5) {
      enterWorkspace('stateAdmin');
      setActiveTab('dashboard');
    }
  };

  return (
    <div className="bg-slate-950 text-white text-xs border-b border-slate-800 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Judge Demo Helper Title */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-800 font-bold text-[11px]">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>SIH 2026 Judge Demo Flow</span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <button
              onClick={() => logout()}
              className={`px-2 py-0.5 rounded transition ${currentScreen === 'home' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Public Home
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => setCurrentScreen('login')}
              className={`px-2 py-0.5 rounded transition ${currentScreen === 'login' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Login / Role Select
            </button>
          </div>
        </div>

        {/* Guided SIH Outbreak Narrative Step Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto text-[11px]">
          <button
            onClick={() => handleRunDemoStep(1)}
            className={`px-2 py-0.5 rounded border transition flex items-center gap-1 shrink-0 ${
              demoTourStep === 1 
                ? 'bg-emerald-600 text-white border-emerald-400 font-bold' 
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span>1. 🐄 Farmer Report</span>
          </button>
          <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />

          <button
            onClick={() => handleRunDemoStep(2)}
            className={`px-2 py-0.5 rounded border transition flex items-center gap-1 shrink-0 ${
              demoTourStep === 2 
                ? 'bg-emerald-600 text-white border-emerald-400 font-bold' 
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span>2. 🤖 AI Risk Triage</span>
          </button>
          <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />

          <button
            onClick={() => handleRunDemoStep(3)}
            className={`px-2 py-0.5 rounded border transition flex items-center gap-1 shrink-0 ${
              demoTourStep === 3 
                ? 'bg-blue-600 text-white border-blue-400 font-bold' 
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span>3. 👨‍⚕️ Vet Case & Lab</span>
          </button>
          <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />

          <button
            onClick={() => handleRunDemoStep(4)}
            className={`px-2 py-0.5 rounded border transition flex items-center gap-1 shrink-0 ${
              demoTourStep === 4 
                ? 'bg-indigo-600 text-white border-indigo-400 font-bold' 
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span>4. 🏛️ District GIS Map</span>
          </button>
          <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />

          <button
            onClick={() => handleRunDemoStep(5)}
            className={`px-2 py-0.5 rounded border transition flex items-center gap-1 shrink-0 ${
              demoTourStep === 5 
                ? 'bg-purple-600 text-white border-purple-400 font-bold' 
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span>5. 🗺️ State Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
}
