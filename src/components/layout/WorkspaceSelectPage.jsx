import React from 'react';
import { 
  Users, 
  Stethoscope, 
  MapPin, 
  Radio, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  UserCheck, 
  Play, 
  ChevronRight, 
  Activity, 
  Syringe, 
  Building2,
  FileText,
  AlertTriangle,
  TestTube2,
  Info,
  LogIn
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function WorkspaceSelectPage({ onInspectDetails, onEnterWorkspace, onOpenDemoModal, onOpenDemoCenter }) {
  const { 
    selectedWorkspace, 
    setSelectedWorkspace, 
    enterWorkspace 
  } = useApp();

  const workspaces = [
    {
      id: 'farmer',
      title: 'Farmer / Livestock Owner',
      user: 'Ramesh Patil',
      location: 'Khedgaon • Baramati • Pune',
      description: 'Herd health monitoring, direct symptom reporting, vaccination calendar & e-prescriptions.',
      icon: Users,
      badge: 'Active Herd (24)',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      accentColor: 'border-emerald-600',
      tagColor: 'text-emerald-700'
    },
    {
      id: 'fieldWorker',
      title: 'Field Worker / Pashu Sakhi',
      user: 'Sunita Pawar',
      location: 'Baramati Sector 2',
      description: 'On-ground surveillance, RFID ear tagging, ring vaccination & cold-chain logistics.',
      icon: Compass,
      badge: '4 Visits Today',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      accentColor: 'border-teal-600',
      tagColor: 'text-teal-700'
    },
    {
      id: 'vet',
      title: 'Veterinarian / Clinical Officer',
      user: 'Dr. Anand Deshmukh',
      location: 'Baramati Taluka Hospital',
      description: 'Clinical case management, AI preliminary risk triage, digital e-Rx & lab referrals.',
      icon: Stethoscope,
      badge: '128 Active Cases',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      accentColor: 'border-blue-600',
      tagColor: 'text-blue-700'
    },
    {
      id: 'admin',
      title: 'District Animal Health Command',
      user: 'Pune Animal Health Command',
      location: 'Pune Collectorate',
      description: 'GIS disease mapping, outbreak containment, mobile RRT fleet & advisory studio.',
      icon: Radio,
      badge: '4 Hotspots Active',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      accentColor: 'border-amber-600',
      tagColor: 'text-amber-700'
    },
    {
      id: 'stateAdmin',
      title: 'State Animal Health Intelligence',
      user: 'Maharashtra State Command',
      location: '36 Districts • Mumbai HQ',
      description: 'Epidemiological surveillance, district risk rankings, vaccine reserve allocations.',
      icon: Layers,
      badge: '36 Districts Live',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      accentColor: 'border-purple-600',
      tagColor: 'text-purple-700'
    }
  ];

  const handleOpenDetailsFor = (wsId, e) => {
    if (e) e.stopPropagation();
    setSelectedWorkspace(wsId);
    if (onInspectDetails) onInspectDetails();
  };

  const handleDirectEnter = (wsId, e) => {
    if (e) e.stopPropagation();
    enterWorkspace(wsId);
  };

  return (
    <div className="min-h-[calc(100vh-60px)] bg-[#F6F3EA] py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ECE6D6] pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9F1E8] text-[#073B32] border border-[#B3E2D2] rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#149A84]" />
              <span>AUTHORIZED WORKSPACES • PASHUSURAKSHA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0A1020] tracking-tight">
              Choose your workspace
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Inspect entry details or enter directly into any role-specific command environment below.
            </p>
          </div>

          {/* Quick Demo Mode Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDemoCenter}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-[#ECE6D6] hover:border-[#073B32] text-[#073B32] font-black rounded-2xl text-xs transition shadow-xs flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Explore Demo Story Mode</span>
            </button>

            <button
              onClick={onOpenDemoModal}
              className="px-5 py-2.5 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-2xl text-xs transition shadow-md flex items-center gap-2 border border-emerald-400"
            >
              <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span>TRY DEMO (JUDGES)</span>
            </button>
          </div>
        </div>

        {/* Split Grid: Left Workspace List (5 cols) & Right Live Rich Preview (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ======================================================== */}
          {/* LEFT: WORKSPACE SELECTION LIST (5 COLS) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400 px-1">
              Select Role Profile
            </div>

            <div className="space-y-3">
              {workspaces.map((ws) => {
                const Icon = ws.icon;
                const isSelected = selectedWorkspace === ws.id;

                return (
                  <div
                    key={ws.id}
                    onClick={() => setSelectedWorkspace(ws.id)}
                    className={`p-4 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group space-y-3 ${
                      isSelected 
                        ? 'border-[#073B32] bg-white shadow-lg translate-x-1' 
                        : 'border-[#ECE6D6] bg-white/70 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    {/* Active Selected Left Pill */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#073B32]" />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition ${
                          isSelected 
                            ? 'bg-[#073B32] text-white border-[#073B32]' 
                            : 'bg-[#F6F3EA] text-slate-700 border-[#ECE6D6] group-hover:border-slate-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-black text-sm text-[#0A1020] truncate">{ws.title}</h3>
                          </div>
                          <p className="text-xs font-bold text-[#073B32]">{ws.user}</p>
                          <p className="text-[11px] text-slate-500 truncate">{ws.location}</p>
                          <p className="text-[11px] text-slate-600 pt-1 line-clamp-2 leading-relaxed">
                            {ws.description}
                          </p>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${ws.badgeColor}`}>
                        {ws.badge}
                      </span>
                    </div>

                    {/* DUAL ACTION BUTTONS: Entry Details AND Direct Enter / Try Demo */}
                    <div className="pt-2 border-t border-[#ECE6D6] flex items-center gap-2">
                      <button
                        onClick={(e) => handleOpenDetailsFor(ws.id, e)}
                        className="flex-1 py-2 px-3 bg-[#F6F3EA] hover:bg-[#D9F1E8] text-[#073B32] font-black rounded-xl text-[11px] transition flex items-center justify-center gap-1.5 border border-[#ECE6D6]"
                      >
                        <Info className="w-3.5 h-3.5 text-[#149A84]" />
                        <span>View Entry Details</span>
                      </button>

                      <button
                        onClick={(e) => handleDirectEnter(ws.id, e)}
                        className="flex-1 py-2 px-3 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-xl text-[11px] transition flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <LogIn className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Enter Workspace →</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT: LIVE RICH WORKSPACE PREVIEW (7 COLS) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 sm:p-7 shadow-lg space-y-6 sticky top-20">
              
              {/* 1. FARMER WORKSPACE PREVIEW */}
              {selectedWorkspace === 'farmer' && (
                <div className="space-y-6">
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#073B32] font-black uppercase">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span>FARMER WORKSPACE</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#0A1020]">Ramesh Patil</h2>
                      <p className="text-xs text-slate-500">Livestock Owner • Khedgaon • Baramati • Pune</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold shrink-0 self-start">
                      ● Active Farm
                    </span>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      What you can do in this workspace:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        "Report sick animals",
                        "Manage livestock",
                        "Track vaccinations",
                        "View disease alerts",
                        "Contact veterinarian",
                        "View treatment history"
                      ].map((cap, i) => (
                        <div key={i} className="p-2.5 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6] flex items-center gap-2 font-bold text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Preview: Herd Health Composition */}
                  <div className="bg-[#073B32] text-white p-5 rounded-2xl border border-emerald-900 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-sm uppercase tracking-wider text-emerald-300">
                        Herd Health Monitor
                      </h4>
                      <span className="text-xs font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-emerald-200">
                        24 Animals Monitored
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-2xl font-black text-emerald-300 font-mono block">21</span>
                        <span className="text-[11px] text-emerald-100 font-bold">Healthy</span>
                      </div>
                      <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-2xl font-black text-amber-300 font-mono block">2</span>
                        <span className="text-[11px] text-amber-100 font-bold">Under Treatment</span>
                      </div>
                      <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-2xl font-black text-red-300 font-mono block">1</span>
                        <span className="text-[11px] text-red-100 font-bold">Needs Attention</span>
                      </div>
                    </div>

                    {/* Herd Progress Bar */}
                    <div className="space-y-1">
                      <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-400 h-full" style={{ width: '87.5%' }} />
                        <div className="bg-amber-400 h-full" style={{ width: '8.3%' }} />
                        <div className="bg-red-400 h-full" style={{ width: '4.2%' }} />
                      </div>
                      <p className="text-[10px] text-emerald-200 text-right">87.5% Healthy • 1 Urgent Case (Gauri)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. FIELD WORKER WORKSPACE PREVIEW */}
              {selectedWorkspace === 'fieldWorker' && (
                <div className="space-y-6">
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-800 font-black uppercase">
                        <Compass className="w-4 h-4 text-teal-600" />
                        <span>FIELD SENTINEL WORKSPACE</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#0A1020]">Sunita Pawar</h2>
                      <p className="text-xs text-slate-500">Pashu Sakhi / Para-Veterinary Worker • Baramati Sector 2</p>
                    </div>
                    <span className="px-3 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-xs font-bold shrink-0 self-start">
                      ● Active Route (GPS)
                    </span>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Today's Workload & Tasks:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-[#073B32] font-mono block">12</span>
                        <span className="text-[10px] text-slate-500 font-bold">Visits</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-[#073B32] font-mono block">48</span>
                        <span className="text-[10px] text-slate-500 font-bold">Animals</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-teal-700 font-mono block">31</span>
                        <span className="text-[10px] text-slate-500 font-bold">Vaccines</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-blue-700 font-mono block">3</span>
                        <span className="text-[10px] text-slate-500 font-bold">Offline Reports</span>
                      </div>
                    </div>
                  </div>

                  {/* Route Map Preview */}
                  <div className="bg-[#0A1020] text-white p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-xs uppercase tracking-wider text-teal-300">
                        Live Territory Trajectory
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                        GPS Route Active
                      </span>
                    </div>

                    <div className="h-28 relative flex items-center justify-center">
                      <svg viewBox="0 0 400 120" className="w-full h-full">
                        <path d="M 50 80 Q 150 20 250 70 T 350 40" fill="none" stroke="#149A84" strokeWidth="3" strokeDasharray="6 4" />
                        <circle cx="50" cy="80" r="7" fill="#073B32" stroke="#149A84" strokeWidth="2" />
                        <text x="35" y="105" fill="#ffffff" fontSize="9" fontWeight="bold">Khedgaon</text>
                        
                        <circle cx="200" cy="45" r="6" fill="#149A84" stroke="#ffffff" strokeWidth="2" />
                        <text x="175" y="30" fill="#a7f3d0" fontSize="9">Malegaon Budruk</text>
                        
                        <circle cx="350" cy="40" r="6" fill="#E4A53A" stroke="#ffffff" strokeWidth="2" />
                        <text x="325" y="65" fill="#fde68a" fontSize="9">Gunawadi</text>
                      </svg>
                    </div>
                    <p className="text-[10px] text-slate-400 text-center">Next Stop: Malegaon Budruk (ETA 11:30 AM)</p>
                  </div>
                </div>
              )}

              {/* 3. VETERINARIAN WORKSPACE PREVIEW */}
              {selectedWorkspace === 'vet' && (
                <div className="space-y-6">
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-800 font-black uppercase">
                        <Stethoscope className="w-4 h-4 text-blue-600" />
                        <span>CLINICAL WORKSPACE</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#0A1020]">Dr. Anand Deshmukh</h2>
                      <p className="text-xs text-slate-500">B.V.Sc & A.H. • Baramati Taluka Veterinary Hospital</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 border border-blue-200 rounded-full text-xs font-bold shrink-0 self-start">
                      ● On Call / Active
                    </span>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      What you can do in this workspace:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        "Review clinical cases",
                        "Preliminary risk assessment",
                        "Manage treatment & e-Rx",
                        "Request laboratory samples",
                        "Refer tertiary cases",
                        "Monitor nearby outbreaks"
                      ].map((cap, i) => (
                        <div key={i} className="p-2.5 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6] flex items-center gap-2 font-bold text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clinical Load Preview */}
                  <div className="bg-[#0A1020] text-white p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-xs uppercase tracking-wider text-blue-300">
                        Clinical Intelligence Queue
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                        Signal: 86/100 HIGH Risk
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2.5 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-xl font-black text-white font-mono block">128</span>
                        <span className="text-[10px] text-slate-300">Active Cases</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-xl font-black text-red-400 font-mono block">4</span>
                        <span className="text-[10px] text-red-200">Urgent</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-xl font-black text-purple-300 font-mono block">3</span>
                        <span className="text-[10px] text-purple-200">Lab Pending</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded-xl border border-white/10">
                        <span className="text-xl font-black text-amber-300 font-mono block">4</span>
                        <span className="text-[10px] text-amber-200">Clusters</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. DISTRICT COMMAND PREVIEW */}
              {selectedWorkspace === 'admin' && (
                <div className="space-y-6">
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-800 font-black uppercase">
                        <Radio className="w-4 h-4 text-amber-600" />
                        <span>DISTRICT COMMAND CENTER</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#0A1020]">Pune Animal Health Command</h2>
                      <p className="text-xs text-slate-500">Pune Collectorate • 13 Talukas • 1.42M Livestock Monitored</p>
                    </div>
                    <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold shrink-0 self-start">
                      ● Command Active
                    </span>
                  </div>

                  {/* Current Situation Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Current District Situation:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-[#0A1020] font-mono block">1.42M</span>
                        <span className="text-[10px] text-slate-500 font-bold">Livestock</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-red-700 font-mono block">4</span>
                        <span className="text-[10px] text-slate-500 font-bold">Active Clusters</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-[#073B32] font-mono block">78.4%</span>
                        <span className="text-[10px] text-slate-500 font-bold">Vaccination</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-blue-700 font-mono block">2.1h</span>
                        <span className="text-[10px] text-slate-500 font-bold">Avg Response</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Pune Risk Map Preview */}
                  <div className="bg-[#0A1020] text-white p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-xs uppercase tracking-wider text-amber-300">
                        Pune Taluka Spatial Clusters
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                        Baramati Hotspot Active
                      </span>
                    </div>

                    <div className="h-28 relative flex items-center justify-center">
                      <svg viewBox="0 0 300 120" className="w-full h-full">
                        <polygon points="40,20 120,15 160,50 140,100 60,110 20,60" fill="#073B32" stroke="#149A84" strokeWidth="1" />
                        <polygon points="120,15 220,10 270,40 240,90 160,50" fill="#0A1020" stroke="#4C745F" strokeWidth="1" />
                        <polygon points="160,50 240,90 280,110 200,115 140,100" fill="#2d1215" stroke="#D84F45" strokeWidth="2" />
                        
                        {/* Glowing Cluster */}
                        <circle cx="210" cy="85" r="10" fill="#D84F45" className="animate-ping opacity-75" />
                        <circle cx="210" cy="85" r="5" fill="#ffffff" />
                        <text x="180" y="105" fill="#fca5a5" fontSize="10" fontWeight="bold">Baramati Hotspot</text>
                      </svg>
                    </div>
                    <p className="text-[10px] text-slate-400 text-center">Mobile RRT Unit 1 deployed in Khedgaon perimeter</p>
                  </div>
                </div>
              )}

              {/* 5. STATE DIRECTORATE PREVIEW */}
              {selectedWorkspace === 'stateAdmin' && (
                <div className="space-y-6">
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-800 font-black uppercase">
                        <Layers className="w-4 h-4 text-purple-600" />
                        <span>STATE INTELLIGENCE WORKSPACE</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#0A1020]">Maharashtra State Command</h2>
                      <p className="text-xs text-slate-500">Directorate of Animal Husbandry • 36 Districts • Mumbai HQ</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-50 text-purple-800 border border-purple-200 rounded-full text-xs font-bold shrink-0 self-start">
                      ● Statewide Grid Active
                    </span>
                  </div>

                  {/* Current Surveillance Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Current Statewide Surveillance:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-red-700 font-mono block">17</span>
                        <span className="text-[10px] text-slate-500 font-bold">High-Risk Villages</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-amber-700 font-mono block">4</span>
                        <span className="text-[10px] text-slate-500 font-bold">Emerging Clusters</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-[#073B32] font-mono block">13,842</span>
                        <span className="text-[10px] text-slate-500 font-bold">Reports</span>
                      </div>
                      <div className="p-3 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6]">
                        <span className="text-lg font-black text-purple-700 font-mono block">82.6%</span>
                        <span className="text-[10px] text-slate-500 font-bold">State Vaccination</span>
                      </div>
                    </div>
                  </div>

                  {/* Miniature 36 Districts Heatmap Preview */}
                  <div className="bg-[#0A1020] text-white p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-xs uppercase tracking-wider text-purple-300">
                        Maharashtra 36-District Surveillance
                      </h4>
                      <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                        36 Districts Live
                      </span>
                    </div>

                    <div className="grid grid-cols-6 gap-1.5 p-2 bg-slate-900/60 rounded-xl border border-slate-800">
                      {['Pune', 'Satara', 'Solapur', 'Nashik', 'Nagpur', 'Nanded', 'Kolhapur', 'Thane', 'Amravati', 'Aurangabad', 'Latur', 'Dhule'].map((dist, i) => (
                        <div 
                          key={dist}
                          className={`p-1.5 rounded text-center text-[9px] font-bold ${
                            dist === 'Pune' ? 'bg-red-600 text-white font-black animate-pulse' :
                            dist === 'Satara' || dist === 'Solapur' ? 'bg-amber-600 text-white' :
                            'bg-emerald-900/70 text-emerald-200'
                          }`}
                        >
                          {dist}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 text-center">State Emergency Contingency: ₹15.00 Cr active</p>
                  </div>
                </div>
              )}

              {/* Bottom Actions: Inspect Workspace Details OR Directly Enter Workspace */}
              <div className="pt-4 border-t border-[#ECE6D6] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => onInspectDetails()}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 border-2 border-[#073B32] text-[#073B32] font-black rounded-2xl text-xs transition shadow-xs flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4 text-[#149A84]" />
                  <span>Inspect Full Entry Details →</span>
                </button>

                <button
                  onClick={() => enterWorkspace(selectedWorkspace)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-2xl text-xs shadow-lg transition flex items-center justify-center gap-2 border border-emerald-400"
                >
                  <LogIn className="w-4 h-4 text-emerald-300" />
                  <span>Enter Dashboard Now →</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SECTION 17: "TRY DEMO PERSON" QUICK PICKER STRIP */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
            <div>
              <h3 className="font-black text-base text-[#0A1020]">Meet the Demo Users (SIH Evaluator Quick Access)</h3>
              <p className="text-xs text-slate-500">Jump directly into any preconfigured role persona to test live features or inspect details</p>
            </div>
            <button
              onClick={onOpenDemoCenter}
              className="text-xs font-black text-[#073B32] hover:underline flex items-center gap-1"
            >
              <span>View Full Story Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { id: 'farmer', name: 'Ramesh Patil', role: 'Farmer', location: 'Khedgaon, Pune' },
              { id: 'fieldWorker', name: 'Sunita Pawar', role: 'Pashu Sakhi', location: 'Baramati Sector 2' },
              { id: 'vet', name: 'Dr. Anand Deshmukh', role: 'Veterinarian', location: 'Baramati Hospital' },
              { id: 'admin', name: 'District Officer', role: 'District Command', location: 'Pune Collectorate' },
              { id: 'stateAdmin', name: 'State Administrator', role: 'State Intelligence', location: 'Maharashtra State' }
            ].map((persona) => (
              <div
                key={persona.id}
                className="p-3.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-2xl flex flex-col justify-between space-y-2"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">{persona.role}</span>
                  <h4 className="font-black text-xs text-[#0A1020]">{persona.name}</h4>
                  <p className="text-[10px] text-slate-500 truncate">{persona.location}</p>
                </div>

                <div className="space-y-1 pt-1 border-t border-[#ECE6D6]/70">
                  <button
                    onClick={(e) => handleOpenDetailsFor(persona.id, e)}
                    className="w-full py-1.5 px-2 bg-white hover:bg-slate-100 text-[#073B32] font-black rounded-lg text-[10px] transition flex items-center justify-center gap-1 border border-[#ECE6D6]"
                  >
                    <Info className="w-3 h-3 text-[#149A84]" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={(e) => handleDirectEnter(persona.id, e)}
                    className="w-full py-1.5 px-2 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-lg text-[10px] transition flex items-center justify-center gap-1 shadow-xs"
                  >
                    <LogIn className="w-3 h-3 text-emerald-300" />
                    <span>Enter Workspace</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
