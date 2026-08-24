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
  Radio
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LandingPage({ onAccessPlatform, onReportIssue }) {
  const { enterWorkspace, setIsIVROpen } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* 1. Top Govt Credibility Ribbon */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="font-bold">Government of Maharashtra • Department of Animal Husbandry & Dairying</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px] hidden sm:flex">
            <span>SIH 2026 Problem Statement 26128</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">Surveillance Grid Active</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-forest-950 flex items-center justify-center text-white shadow-sm border border-emerald-700">
              <Shield className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                PASHUSURAKSHA
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  पशुरक्षा
                </span>
              </span>
              <p className="text-[11px] text-slate-500 font-medium">Livestock Health Intelligence Network</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsIVROpen(true)}
              className="px-3.5 py-2 border border-slate-300 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 transition flex items-center gap-1.5 hidden md:flex"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>IVR Helpline (1800-180-1551)</span>
            </button>

            <button
              onClick={onAccessPlatform}
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5"
            >
              <span>Access PashuSuraksha</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section with Stylized Maharashtra Map Visual */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span>Government of Maharashtra • Animal Health Surveillance Platform</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Protecting Livestock Through <span className="text-emerald-700">Early Health Intelligence</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                PashuSuraksha connects farmers, field workers, veterinarians, laboratories and government teams to detect, investigate and contain animal-health risks faster.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onReportIssue}
                  className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-xl text-sm shadow-md transition transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>🐄 Report an Animal Health Issue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onAccessPlatform}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm shadow-sm transition flex items-center gap-2"
                >
                  <span>Access PashuSuraksha</span>
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium border-t border-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Real-time GIS Hotspot Mapping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>AI Clinical Decision Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Offline Sync & IVR Voice</span>
                </div>
              </div>
            </div>

            {/* Right Stylized Maharashtra Map Visual with Floating Cards (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-950 rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
                {/* Header Overlay */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold text-slate-200">Maharashtra Early Warning Radar</span>
                  </div>
                  <span className="font-mono text-emerald-400">Live Grid</span>
                </div>

                {/* SVG Silhouette Map of Maharashtra */}
                <div className="py-4 relative flex items-center justify-center">
                  <svg viewBox="0 0 400 280" className="w-full h-auto">
                    {/* Maharashtra Mesh */}
                    <path d="M 60 100 L 140 40 L 260 50 L 350 110 L 380 200 L 310 260 L 180 250 L 90 220 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Active Cluster Ring: Baramati */}
                    <circle cx="210" cy="170" r="32" fill="#ef4444" fillOpacity="0.25" className="animate-pulse" />
                    <circle cx="210" cy="170" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    <text x="225" y="174" fill="#fecaca" fontSize="11" fontWeight="bold">Baramati (LSD Cluster)</text>

                    {/* Active Cluster Ring: Daund */}
                    <circle cx="250" cy="140" r="24" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                    <circle cx="250" cy="140" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="262" y="144" fill="#fda4af" fontSize="9">Daund (Avian Alert)</text>

                    {/* Nodes: Vet Hospital & Regional Lab */}
                    <circle cx="290" cy="220" r="6" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="300" y="224" fill="#e9d5ff" fontSize="9">Pune Regional Lab</text>

                    <circle cx="190" cy="110" r="6" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="202" y="114" fill="#bfdbfe" fontSize="9">Sub-District Hosp</text>

                    {/* Thin Data Connection Lines */}
                    <line x1="210" y1="170" x2="250" y2="140" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="210" y1="170" x2="190" y2="110" stroke="#38bdf8" strokeWidth="1" />
                    <line x1="210" y1="170" x2="290" y2="220" stroke="#a855f7" strokeWidth="1" />
                  </svg>
                </div>

                {/* 4 Floating Intelligence Cards */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400">Reports</span>
                    <p className="font-extrabold text-amber-400 text-sm">17 Active Reports</p>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400">Clusters</span>
                    <p className="font-extrabold text-red-400 text-sm">4 Emerging Clusters</p>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400">Vaccination</span>
                    <p className="font-extrabold text-emerald-400 text-sm">78.4% Coverage</p>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400">Response</span>
                    <p className="font-extrabold text-blue-400 text-sm">2h 14m Avg Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: ONE HEALTH NETWORK (Data Flow Ecosystem) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Unified Stakeholder Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">One Health Network</h2>
            <p className="text-xs text-slate-500">Continuous telemetry flowing seamlessly from rural sheds to state command</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 relative">
            {[
              { role: "Farmer", desc: "Symptom reporting & herd health", icon: "🌾" },
              { role: "Field Worker", desc: "Field visits & tag registrations", icon: "🩺" },
              { role: "Veterinarian", desc: "Clinical triage & treatments", icon: "👨‍⚕️" },
              { role: "Laboratory", desc: "Diagnostic testing & PCR validation", icon: "🧪" },
              { role: "District", desc: "GIS mapping & outbreak response", icon: "🏛️" },
              { role: "State", desc: "Strategic surveillance & resource allocation", icon: "🗺️" }
            ].map((item, idx, arr) => (
              <React.Fragment key={item.role}>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center w-full lg:w-44 space-y-1 shadow-xs">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-extrabold text-sm text-slate-900">{item.role}</h3>
                  <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-300">
                    <ArrowRight className="w-5 h-5 text-emerald-600" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: FROM FIRST SYMPTOM TO EARLY RESPONSE (Visual Narrative Process) */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">Connected Surveillance Narrative</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">From First Symptom to Early Response</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {[
              { step: "01", title: "Report", desc: "Farmer logs fever & nodule signs via App or IVR.", color: "border-emerald-500" },
              { step: "02", title: "Risk Assessment", desc: "AI engine calculates High Risk score (86/100).", color: "border-amber-500" },
              { step: "03", title: "Vet Verification", desc: "Doctor Anand Deshmukh inspects & prescribes Rx.", color: "border-blue-500" },
              { step: "04", title: "Laboratory", desc: "Sample barcode #LAB-PUN-9821 sent for RT-PCR.", color: "border-purple-500" },
              { step: "05", title: "Outbreak Detection", desc: "GIS map detects 3-village cluster in Baramati.", color: "border-red-500" },
              { step: "06", title: "Containment", desc: "Rapid Response Unit deployed to 5km radius.", color: "border-rose-500" },
              { step: "07", title: "Prevention", desc: "Multi-lingual ring advisory sent to 1,420 farmers.", color: "border-teal-500" }
            ].map((p) => (
              <div key={p.step} className={`p-4 bg-slate-950 rounded-2xl border-t-4 ${p.color} border-x border-b border-slate-800 space-y-2`}>
                <span className="text-[10px] font-mono font-bold text-slate-500">PHASE {p.step}</span>
                <h3 className="font-extrabold text-sm text-white">{p.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: ROLE ENTRY — 5 Asymmetric Panels */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Role-Based Workspaces</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Built for Everyone Responsible for Animal Health</h2>
            <p className="text-xs text-slate-500">Authenticate to launch your specific workspace console</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Panel 1: Farmer (7 cols) */}
            <div 
              onClick={onAccessPlatform}
              className="md:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 card-elevated cursor-pointer hover:border-emerald-600 transition group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🌾</span>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Farmer Workspace</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition">
                  “Report symptoms in seconds.”
                </h3>
                <p className="text-xs text-slate-600 max-w-lg leading-relaxed">
                  Designed for rural cattle owners with large touch targets, visual symptom chips, 6-step reporting wizard, AI risk triage, vaccination reminders, and digital health passports.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Panel 2: Field Worker (5 cols) */}
            <div 
              onClick={onAccessPlatform}
              className="md:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 card-elevated cursor-pointer hover:border-teal-600 transition group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🩺</span>
                  <span className="text-xs font-bold bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full">Field Sentinel</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-teal-700 transition">
                  “Capture what is happening on the ground.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily field visit schedules, village route map, sudden mortality logging, and offline queue auto-sync.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-extrabold text-teal-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Panel 3: Veterinarian (4 cols) */}
            <div 
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 card-elevated cursor-pointer hover:border-blue-600 transition group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">👨‍⚕️</span>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">Clinical Console</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition">
                  “Investigate cases with decision support.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clinical case management, AI differential diagnosis, lab orders, and e-prescriptions.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-extrabold text-blue-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Panel 4: District Officer (4 cols) */}
            <div 
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 card-elevated cursor-pointer hover:border-indigo-600 transition group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🏛️</span>
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-full">District Command</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-700 transition">
                  “See emerging risks across your territory.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interactive GIS disease risk map, spatial cluster alerts, and advisory studio.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Panel 5: State Administrator (4 cols) */}
            <div 
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 card-elevated cursor-pointer hover:border-purple-600 transition group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🗺️</span>
                  <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">State Directorate</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-purple-700 transition">
                  “Understand animal-health patterns across Maharashtra.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  36 district risk rankings, vaccination gap analysis, vector forecasts, and emergency resource allocation.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-extrabold text-purple-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 px-4 text-center text-xs border-t border-slate-900">
        <p className="font-bold text-slate-400">PASHUSURAKSHA — Smart India Hackathon (SIH) 2026 Problem Statement 26128</p>
        <p className="mt-1">Government of Maharashtra • Department of Animal Husbandry & Dairying</p>
      </footer>
    </div>
  );
}
