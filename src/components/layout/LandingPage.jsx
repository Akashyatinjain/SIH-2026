import React from 'react';
import {
  Shield,
  Activity,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  PhoneCall,
  FileText,
  BarChart3,
  Stethoscope,
  Building2,
  TrendingUp,
  Clock,
  Syringe,
  Layers,
  ChevronRight,
  TestTube2,
  Radio,
  Zap,
  Database,
  Network,
  AlertTriangle,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LandingPage({ onAccessPlatform, onReportIssue }) {
  const { enterWorkspace, setIsIVROpen } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* 1. Top Govt Credibility Ribbon */}
      <div className="bg-slate-900 text-white text-xs py-2.5 px-4 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="font-bold truncate">
              Government of Maharashtra • Department of Animal Husbandry & Dairying
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px] hidden lg:flex flex-shrink-0">
            <span className="px-2 py-0.5 bg-slate-800 rounded-full font-medium">
              SIH 2026 Problem Statement 26128
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Surveillance Grid Active
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-white shadow-md border border-emerald-700 flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="min-w-0">
              <span className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
                <span className="truncate">PASHUSURAKSHA</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                  पशुरक्षा
                </span>
              </span>
              <p className="text-[11px] text-slate-500 font-medium truncate">
                Livestock Health Intelligence Network
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => setIsIVROpen(true)}
              className="px-3.5 py-2.5 border border-slate-300 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 transition-all hover:border-emerald-400 hover:shadow-md flex items-center gap-2 hidden md:flex group"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">IVR Helpline (1800-180-1551)</span>
              <span className="lg:hidden">IVR Helpline</span>
            </button>

            <button
              onClick={onAccessPlatform}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2"
            >
              <span>Access PashuSuraksha</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section with Stylized Maharashtra Map Visual */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-emerald-50/40">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                </span>
                <span>Government of Maharashtra • Animal Health Surveillance Platform</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Protecting Livestock Through{' '}
                <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  Early Health Intelligence
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                PashuSuraksha connects farmers, field workers, veterinarians, laboratories and government teams to detect, investigate and contain animal-health risks faster.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onReportIssue}
                  className="px-6 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white font-extrabold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
                >
                  <span className="text-lg">🐄</span>
                  <span>Report an Animal Health Issue</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onAccessPlatform}
                  className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Access PashuSuraksha</span>
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Real-time GIS Hotspot Mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>AI Clinical Decision Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-600" />
                  <span>Offline Sync & IVR Voice</span>
                </div>
              </div>
            </div>

            {/* Right Stylized Maharashtra Map Visual with Floating Cards */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

                {/* Header Overlay */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold text-slate-200">Maharashtra Early Warning Radar</span>
                  </div>
                  <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    Live Grid
                  </span>
                </div>

                {/* SVG Silhouette Map of Maharashtra */}
                <div className="py-5 relative flex items-center justify-center">
                  <svg viewBox="0 0 400 280" className="w-full h-auto">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Maharashtra Mesh */}
                    <path d="M 60 100 L 140 40 L 260 50 L 350 110 L 380 200 L 310 260 L 180 250 L 90 220 Z"
                      fill="url(#mapGradient)" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Grid lines */}
                    <line x1="60" y1="150" x2="380" y2="150" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="60" y1="200" x2="380" y2="200" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="150" y1="60" x2="150" y2="250" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="250" y1="60" x2="250" y2="250" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Active Cluster Ring: Baramati */}
                    <circle cx="210" cy="170" r="32" fill="#ef4444" fillOpacity="0.25" className="animate-pulse" filter="url(#glow)" />
                    <circle cx="210" cy="170" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="210" cy="170" r="12" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" className="animate-spin-slow" />
                    <text x="225" y="174" fill="#fecaca" fontSize="11" fontWeight="bold">Baramati (LSD Cluster)</text>

                    {/* Active Cluster Ring: Daund */}
                    <circle cx="250" cy="140" r="24" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                    <circle cx="250" cy="140" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="262" y="144" fill="#fda4af" fontSize="9">Daund (Avian Alert)</text>

                    {/* Nodes: Vet Hospital & Regional Lab */}
                    <circle cx="290" cy="220" r="7" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="290" cy="220" r="10" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="300" y="224" fill="#e9d5ff" fontSize="9">Pune Regional Lab</text>

                    <circle cx="190" cy="110" r="7" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="190" cy="110" r="10" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="202" y="114" fill="#bfdbfe" fontSize="9">Sub-District Hosp</text>

                    {/* Thin Data Connection Lines */}
                    <line x1="210" y1="170" x2="250" y2="140" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" className="animate-pulse" />
                    <line x1="210" y1="170" x2="190" y2="110" stroke="#38bdf8" strokeWidth="1.5" />
                    <line x1="210" y1="170" x2="290" y2="220" stroke="#a855f7" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* 4 Floating Intelligence Cards */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-2 relative">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-emerald-700 transition-colors cursor-default group">
                    <div className="flex items-center gap-1.5 mb-1">
                      <FileText className="w-3 h-3 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                      <span className="text-[10px] text-slate-400">Reports</span>
                    </div>
                    <p className="font-extrabold text-amber-400 text-sm">17 Active Reports</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-red-700 transition-colors cursor-default group">
                    <div className="flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-3 h-3 text-slate-500 group-hover:text-red-500 transition-colors" />
                      <span className="text-[10px] text-slate-400">Clusters</span>
                    </div>
                    <p className="font-extrabold text-red-400 text-sm">4 Emerging Clusters</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-emerald-700 transition-colors cursor-default group">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Syringe className="w-3 h-3 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                      <span className="text-[10px] text-slate-400">Vaccination</span>
                    </div>
                    <p className="font-extrabold text-emerald-400 text-sm">78.4% Coverage</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-blue-700 transition-colors cursor-default group">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="w-3 h-3 text-slate-500 group-hover:text-blue-500 transition-colors" />
                      <span className="text-[10px] text-slate-400">Response</span>
                    </div>
                    <p className="font-extrabold text-blue-400 text-sm">2h 14m Avg Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: ONE HEALTH NETWORK (Data Flow Ecosystem) */}
      <section className="py-16 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              <Network className="w-3 h-3" />
              Unified Stakeholder Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">One Health Network</h2>
            <p className="text-sm text-slate-500">Continuous telemetry flowing seamlessly from rural sheds to state command</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 relative">
            {[
              { role: "Farmer", desc: "Symptom reporting & herd health", icon: "🌾", color: "hover:border-emerald-400" },
              { role: "Field Worker", desc: "Field visits & tag registrations", icon: "🩺", color: "hover:border-teal-400" },
              { role: "Veterinarian", desc: "Clinical triage & treatments", icon: "👨‍⚕️", color: "hover:border-blue-400" },
              { role: "Laboratory", desc: "Diagnostic testing & PCR validation", icon: "🧪", color: "hover:border-purple-400" },
              { role: "District", desc: "GIS mapping & outbreak response", icon: "🏛️", color: "hover:border-indigo-400" },
              { role: "State", desc: "Strategic surveillance & resource allocation", icon: "🗺️", color: "hover:border-rose-400" }
            ].map((item, idx, arr) => (
              <React.Fragment key={item.role}>
                <div className={`bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 ${item.color} text-center w-full lg:w-44 space-y-2 shadow-sm hover:shadow-lg transition-all cursor-default group relative`}>
                  <span className="text-3xl inline-block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h3 className="font-extrabold text-sm text-slate-900">{item.role}</h3>
                  <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-300">
                    <ChevronRight className="w-5 h-5 text-emerald-600" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: FROM FIRST SYMPTOM TO EARLY RESPONSE */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 relative">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-wider bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-800">
              <Activity className="w-3 h-3" />
              Connected Surveillance Narrative
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">From First Symptom to Early Response</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {[
              { step: "01", title: "Report", desc: "Farmer logs fever & nodule signs via App or IVR.", color: "border-emerald-500", icon: FileText },
              { step: "02", title: "Risk Assessment", desc: "AI engine calculates High Risk score (86/100).", color: "border-amber-500", icon: Activity },
              { step: "03", title: "Vet Verification", desc: "Doctor Anand Deshmukh inspects & prescribes Rx.", color: "border-blue-500", icon: Stethoscope },
              { step: "04", title: "Laboratory", desc: "Sample barcode #LAB-PUN-9821 sent for RT-PCR.", color: "border-purple-500", icon: TestTube2 },
              { step: "05", title: "Outbreak Detection", desc: "GIS map detects 3-village cluster in Baramati.", color: "border-red-500", icon: MapPin },
              { step: "06", title: "Containment", desc: "Rapid Response Unit deployed to 5km radius.", color: "border-rose-500", icon: ShieldAlert },
              { step: "07", title: "Prevention", desc: "Multi-lingual ring advisory sent to 1,420 farmers.", color: "border-teal-500", icon: Radio }
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className={`p-4 bg-slate-950 rounded-2xl border-t-4 ${p.color} border-x border-b border-slate-800 space-y-3 hover:bg-slate-900 transition-colors group`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-500">PHASE {p.step}</span>
                    <Icon className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="font-extrabold text-sm text-white">{p.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Section: ROLE ENTRY — 5 Asymmetric Panels */}
      <section className="py-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              <Users className="w-3 h-3" />
              Role-Based Workspaces
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Built for Everyone Responsible for Animal Health</h2>
            <p className="text-sm text-slate-500">Authenticate to launch your specific workspace console</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Panel 1: Farmer (7 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-7 bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all group cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl group-hover:scale-110 transition-transform">🌾</span>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Farmer Workspace
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                  "Report symptoms in seconds."
                </h3>
                <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
                  Designed for rural cattle owners with large touch targets, visual symptom chips, 6-step reporting wizard, AI risk triage, vaccination reminders, and digital health passports.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-800 pt-2 group-hover:gap-3 transition-all relative">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Panel 2: Field Worker (5 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-5 bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all group cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl group-hover:scale-110 transition-transform">🩺</span>
                  <span className="text-xs font-bold bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    Field Sentinel
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  "Capture what is happening on the ground."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Daily field visit schedules, village route map, sudden mortality logging, and offline queue auto-sync.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold text-teal-800 pt-2 group-hover:gap-3 transition-all relative">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Panel 3: Veterinarian (4 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all group cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl group-hover:scale-110 transition-transform">👨‍⚕️</span>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Stethoscope className="w-3 h-3" />
                    Clinical Console
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  "Investigate cases with decision support."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clinical case management, AI differential diagnosis, lab orders, and e-prescriptions.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold text-blue-800 pt-2 group-hover:gap-3 transition-all relative">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Panel 4: District Officer (4 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-500 transition-all group cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl group-hover:scale-110 transition-transform">🏛️</span>
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Building2 className="w-3 h-3" />
                    District Command
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
                  "See emerging risks across your territory."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Interactive GIS disease risk map, spatial cluster alerts, and advisory studio.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold text-indigo-800 pt-2 group-hover:gap-3 transition-all relative">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Panel 5: State Administrator (4 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-500 transition-all group cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl group-hover:scale-110 transition-transform">🗺️</span>
                  <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3" />
                    State Directorate
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-purple-700 transition-colors">
                  "Understand animal-health patterns across Maharashtra."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  36 district risk rankings, vaccination gap analysis, vector forecasts, and emergency resource allocation.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold text-purple-800 pt-2 group-hover:gap-3 transition-all relative">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 px-4 text-center text-xs border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-emerald-600" />
            <p className="font-bold text-slate-400">PASHUSURAKSHA — Smart India Hackathon (SIH) 2026 Problem Statement 26128</p>
          </div>
          <p className="text-slate-600">Government of Maharashtra • Department of Animal Husbandry & Dairying</p>
          <p className="text-slate-700 mt-3 flex items-center justify-center gap-2">
            <Database className="w-3 h-3" />
            <span>Powered by the One Health Surveillance Grid</span>
          </p>
        </div>
      </footer>
    </div>
  );
}