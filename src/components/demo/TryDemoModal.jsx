import React from 'react';
import { 
  Users, 
  Stethoscope, 
  Compass, 
  Radio, 
  Layers, 
  Sparkles, 
  X, 
  ArrowRight,
  ShieldCheck,
  Play,
  Info,
  LogIn
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function TryDemoModal({ onClose, onOpenDemoCenter }) {
  const { enterWorkspace, setSelectedWorkspace, setCurrentScreen } = useApp();

  const personas = [
    {
      id: 'farmer',
      name: 'Ramesh Patil',
      title: 'Farmer / Livestock Owner',
      location: 'Khedgaon • Baramati • Pune',
      icon: Users,
      color: 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:border-emerald-500'
    },
    {
      id: 'fieldWorker',
      name: 'Sunita Pawar',
      title: 'Pashu Sakhi / Field Sentinel',
      location: 'Baramati Sector 2',
      icon: Compass,
      color: 'bg-teal-50 text-teal-900 border-teal-200 hover:border-teal-500'
    },
    {
      id: 'vet',
      name: 'Dr. Anand Deshmukh',
      title: 'Veterinarian / Clinical Officer',
      location: 'Baramati Taluka Hospital',
      icon: Stethoscope,
      color: 'bg-blue-50 text-blue-900 border-blue-200 hover:border-blue-500'
    },
    {
      id: 'admin',
      name: 'Pune District Command',
      title: 'District Surveillance Command',
      location: 'Pune Collectorate (13 Talukas)',
      icon: Radio,
      color: 'bg-amber-50 text-amber-900 border-amber-200 hover:border-amber-500'
    },
    {
      id: 'stateAdmin',
      name: 'Maharashtra State Command',
      title: 'State Animal Health Intelligence',
      location: 'Directorate HQ (36 Districts)',
      icon: Layers,
      color: 'bg-purple-50 text-purple-900 border-purple-200 hover:border-purple-500'
    }
  ];

  const handleSelectPersona = (roleKey) => {
    enterWorkspace(roleKey);
    onClose();
  };

  const handleInspectDetails = (roleKey) => {
    setSelectedWorkspace(roleKey);
    setCurrentScreen('workspaceDetails');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 space-y-5 border border-[#ECE6D6] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-900 border border-purple-300 rounded-full text-xs font-black uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Enter Demo Mode (SIH Evaluator)</span>
          </div>
          <h2 className="text-2xl font-black text-[#0A1020]">Select a Preconfigured Demo Account</h2>
          <p className="text-xs text-slate-600">
            Explore PashuSuraksha using realistic live data without requiring SMS/OTP authentication.
          </p>
        </div>

        {/* 5 Persona Cards */}
        <div className="space-y-2.5">
          {personas.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`p-4 rounded-2xl border-2 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${p.color}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-inherit flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-black text-sm truncate">{p.name}</h3>
                    <p className="text-xs font-bold opacity-80">{p.title}</p>
                    <p className="text-[11px] opacity-60 truncate">{p.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleInspectDetails(p.id)}
                    className="py-2 px-3 bg-white hover:bg-slate-100 text-[#073B32] font-black rounded-xl text-xs transition border border-[#ECE6D6] flex items-center gap-1 shadow-xs"
                  >
                    <Info className="w-3.5 h-3.5 text-[#149A84]" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => handleSelectPersona(p.id)}
                    className="py-2 px-3.5 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-xl text-xs shadow-xs transition flex items-center gap-1.5"
                  >
                    <LogIn className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Enter Demo →</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Mode Alternative Banner */}
        <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-black text-[#073B32] block">Want to see the end-to-end event flow?</span>
            <p className="text-slate-500">Walk through the 9-phase lifecycle of a live animal health event.</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenDemoCenter();
            }}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition shrink-0"
          >
            Launch 9-Phase Story Mode
          </button>
        </div>

      </div>
    </div>
  );
}
