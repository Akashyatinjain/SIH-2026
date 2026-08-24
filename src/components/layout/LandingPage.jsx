import React, { useState } from 'react';
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
  Flame,
  Globe
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LandingPage({ onAccessPlatform, onReportIssue }) {
  const { enterWorkspace, setIsIVROpen, language, setLanguage } = useApp();
  const [hoveredNode, setHoveredNode] = useState(null);

  const ecosystemNodes = [
    {
      id: "farmer",
      name: "Farmer / Herder",
      role: "Symptom Logging & Herd Passport",
      tag: "Source Signal",
      icon: "🌾",
      desc: "Reports early clinical signs via App or 1800 IVR; receives instant AI risk triage and ring vaccination advisories.",
      color: "border-emerald-500 bg-emerald-50/70"
    },
    {
      id: "fieldWorker",
      name: "Field Worker (Pashu Sakhi)",
      role: "Field Sentinel & Sample Logistics",
      tag: "First Responder",
      icon: "🩺",
      desc: "Executes on-ground verification, collects diagnostic swabs with cold-chain barcodes, and synchronizes offline queues.",
      color: "border-teal-500 bg-teal-50/70"
    },
    {
      id: "vet",
      name: "Veterinary Officer",
      role: "Clinical Decision Workbench",
      tag: "Medical Authority",
      icon: "👨‍⚕️",
      desc: "Reviews triage evidence, prescribes digital treatments, orders laboratory RT-PCR panels, and initiates quarantine transfers.",
      color: "border-blue-500 bg-blue-50/70"
    },
    {
      id: "lab",
      name: "Diagnostic Laboratory",
      role: "Molecular & Serological Validation",
      tag: "Gold Standard",
      icon: "🧪",
      desc: "Processes real-time RT-PCR / ELISA samples under BSL-2/3 conditions with cold-chain chain-of-custody tracking.",
      color: "border-purple-500 bg-purple-50/70"
    },
    {
      id: "district",
      name: "District Command Center",
      role: "GIS Hotspot & Rapid Containment",
      tag: "Tactical HQ",
      icon: "🏛️",
      desc: "Monitors 13 talukas with spatial clustering maps, deploys Mobile Veterinary Units, and broadcasts farmer ring SMS.",
      color: "border-indigo-500 bg-indigo-50/70"
    },
    {
      id: "state",
      name: "State Directorate",
      role: "Strategic Epidemiological Command",
      tag: "Strategic Directorate",
      icon: "🗺️",
      desc: "Aggregates 36 districts into risk heatmaps, forecasts vector density surges, and allocates state emergency vaccines.",
      color: "border-rose-500 bg-rose-50/70"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#0A1020] flex flex-col justify-between selection:bg-[#149A84] selection:text-white font-sans">
      {/* 1. Official Government Header Ribbon */}
      <div className="bg-[#0A1020] text-white text-xs py-2 px-4 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <Shield className="w-4 h-4 text-[#149A84] shrink-0" />
            <span className="font-bold tracking-tight truncate">
              Government of Maharashtra • Department of Animal Husbandry & Dairying
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px] hidden lg:flex shrink-0 font-mono">
            <span className="px-2 py-0.5 bg-slate-900 rounded-full border border-slate-800">
              SIH 2026 Problem Statement 26128
            </span>
            <span>•</span>
            <span className="text-[#149A84] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#149A84] animate-ping" />
              Surveillance Grid Active
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-[#F6F3EA]/90 backdrop-blur-md border-b border-[#ECE6D6] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B32] to-[#0A1020] flex items-center justify-center text-white shadow-sm border border-[#073B32] shrink-0">
              <Shield className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#0A1020]">
                  PASHUSURAKSHA
                </span>
                <span className="text-[10px] bg-[#D9F1E8] text-[#073B32] font-bold px-2 py-0.5 rounded-full border border-[#B3E2D2] shrink-0">
                  पशुरक्षा
                </span>
              </div>
              <p className="text-[11px] text-[#7C9687] font-semibold truncate">
                Livestock Health Surveillance • Early Warning • Response Intelligence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Selector Pill */}
            <div className="flex items-center bg-white border border-[#ECE6D6] rounded-full p-0.5 shadow-xs text-xs font-black">
              {['en', 'mr', 'hi'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-2.5 py-1 rounded-full transition ${
                    language === l 
                      ? 'bg-[#073B32] text-white shadow-xs' 
                      : 'text-slate-600 hover:text-[#0A1020]'
                  }`}
                >
                  {l === 'en' ? 'ENG' : l === 'mr' ? 'मराठी' : 'हिंदी'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsIVROpen(true)}
              className="px-3.5 py-2 border border-[#ECE6D6] hover:bg-white rounded-xl text-xs font-bold text-[#073B32] transition flex items-center gap-1.5 hidden md:flex shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#149A84]" />
              <span className="hidden lg:inline">IVR Voice (1800-180-1551)</span>
              <span className="lg:hidden">1800 IVR</span>
            </button>

            <button
              onClick={onAccessPlatform}
              className="px-5 py-2.5 bg-[#073B32] hover:bg-[#052923] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>{language === 'mr' ? 'प्रणाली प्रवेश करा' : language === 'hi' ? 'प्लेटफॉर्म एक्सेस करें' : 'Access PashuSuraksha'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section with Stylized Maharashtra Map & Telemetry Mesh */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:py-20 bg-gradient-to-b from-[#F6F3EA] via-white to-[#F6F3EA] border-b border-[#ECE6D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9F1E8] border border-[#B3E2D2] text-[#073B32] text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#149A84] animate-ping" />
                <span>GOVERNMENT OF MAHARASHTRA • ANIMAL HEALTH INTELLIGENCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A1020] tracking-tight leading-[1.1]">
                Protecting Livestock Through <span className="text-[#149A84]">Early Health Intelligence</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
                PashuSuraksha connects farmers, field workers, veterinarians, laboratories and government teams to detect animal-health risks before they become outbreaks.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onReportIssue}
                  className="px-6 py-4 bg-[#D84F45] hover:bg-red-600 text-white font-black rounded-2xl text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 border border-red-400"
                >
                  <span className="text-lg">🐄</span>
                  <span>Report an Animal Health Issue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onAccessPlatform}
                  className="px-6 py-4 bg-[#0A1020] hover:bg-slate-900 text-white font-extrabold rounded-2xl text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Enter Surveillance Platform</span>
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-600 font-semibold border-t border-[#ECE6D6]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#149A84]" />
                  <span>Real-time GIS Hotspot Mapping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#149A84]" />
                  <span>AI Clinical Decision Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#149A84]" />
                  <span>Offline Sync & IVR Voice</span>
                </div>
              </div>
            </div>

            {/* Right Live Interactive Maharashtra Surveillance Visualization (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0A1020] rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D84F45] animate-pulse" />
                    <span className="font-bold text-slate-100">Maharashtra Early Warning Radar</span>
                  </div>
                  <span className="font-mono text-[#149A84] text-[11px]">Live Telemetry</span>
                </div>

                {/* Animated SVG Silhouette Map with Pulsing Clusters */}
                <div className="py-4 relative flex items-center justify-center">
                  <svg viewBox="0 0 400 280" className="w-full h-auto">
                    <defs>
                      <linearGradient id="mapMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#111D3C" />
                        <stop offset="100%" stopColor="#0A1020" />
                      </linearGradient>
                    </defs>

                    {/* Maharashtra Mesh Silhouette */}
                    <path 
                      d="M 60 100 L 140 40 L 260 50 L 350 110 L 380 200 L 310 260 L 180 250 L 90 220 Z" 
                      fill="url(#mapMeshGrad)" 
                      stroke="#1C305F" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                    />

                    {/* Subtle grid lines */}
                    <line x1="60" y1="150" x2="380" y2="150" stroke="#1C305F" strokeWidth="0.8" strokeDasharray="2 2" />
                    <line x1="150" y1="40" x2="150" y2="250" stroke="#1C305F" strokeWidth="0.8" strokeDasharray="2 2" />
                    <line x1="250" y1="50" x2="250" y2="260" stroke="#1C305F" strokeWidth="0.8" strokeDasharray="2 2" />

                    {/* Baramati Active Pulsing Danger Cluster */}
                    <circle cx="210" cy="170" r="34" fill="#D84F45" fillOpacity="0.25" className="animate-ping" />
                    <circle cx="210" cy="170" r="14" fill="#D84F45" fillOpacity="0.4" />
                    <circle cx="210" cy="170" r="7" fill="#D84F45" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="225" y="174" fill="#FECACA" fontSize="11" fontWeight="bold">Baramati (LSD Cluster)</text>

                    {/* Daund Active Cluster */}
                    <circle cx="250" cy="135" r="22" fill="#D84F45" fillOpacity="0.2" className="animate-pulse" />
                    <circle cx="250" cy="135" r="6" fill="#D84F45" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="262" y="139" fill="#FDA4AF" fontSize="9">Daund (Avian Alert)</text>

                    {/* Pune Regional Lab Node */}
                    <circle cx="290" cy="220" r="6" fill="#A855F7" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="302" y="224" fill="#E9D5FF" fontSize="9">Pune Regional Lab</text>

                    {/* Sub-District Hospital Node */}
                    <circle cx="190" cy="110" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="202" y="114" fill="#BFDBFE" fontSize="9">Sub-District Hosp</text>

                    {/* Realtime Connection Network Lines */}
                    <line x1="210" y1="170" x2="250" y2="135" stroke="#D84F45" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="210" y1="170" x2="190" y2="110" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="210" y1="170" x2="290" y2="220" stroke="#A855F7" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* 4 Floating Live Intelligence Readouts (Section 06) */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Active Clusters</span>
                    <p className="font-black text-[#D84F45] text-sm mt-0.5">4 Emerging Clusters</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">High-Risk Zones</span>
                    <p className="font-black text-[#E4A53A] text-sm mt-0.5">17 High-Risk Villages</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">State Vaccine</span>
                    <p className="font-black text-[#149A84] text-sm mt-0.5">78.4% Coverage</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Response Velocity</span>
                    <p className="font-black text-blue-400 text-sm mt-0.5">2h 14m Avg Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 07: Live Surveillance Ticker Strip */}
      <div className="bg-[#073B32] text-white py-3 px-4 border-y border-[#095B4E] overflow-hidden shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-xs font-mono">
          <div className="flex items-center gap-2 shrink-0 font-bold text-[#D9F1E8]">
            <Zap className="w-4 h-4 text-emerald-300 animate-pulse" />
            <span className="uppercase tracking-wider">LIVE TELEMETRY:</span>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto text-[11px] shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>🟢 Surveillance network operational (36 Districts)</span>
            </span>
            <span className="text-[#7ACAB1]">•</span>
            <span className="flex items-center gap-1.5 text-red-300 font-bold">
              <span>🔴 4 high-risk clusters detected (Baramati, Daund, Indapur)</span>
            </span>
            <span className="text-[#7ACAB1]">•</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <span>🟡 17 vaccination gaps identified in sub-districts</span>
            </span>
            <span className="text-[#7ACAB1]">•</span>
            <span className="flex items-center gap-1.5 text-blue-200">
              <span>🔵 31 new reports in the last 24 hours</span>
            </span>
          </div>
        </div>
      </div>

      {/* 5. Section 08: Visual Narrative — FROM FIRST SYMPTOM TO FAST RESPONSE */}
      <section className="py-14 bg-white border-b border-[#ECE6D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
              CONNECTED SURVEILLANCE NARRATIVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A1020]">From First Symptom to Fast Response</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How PashuSuraksha turns isolated clinical signs into rapid containment & ring vaccination
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {[
              { step: "01", title: "Report", desc: "Farmer reports signs via App or 1800 IVR with GPS.", icon: "🌾", color: "border-emerald-500 bg-emerald-50/50" },
              { step: "02", title: "Assess", desc: "Risk engine identifies high-risk cluster patterns (86/100).", icon: "🤖", color: "border-amber-500 bg-amber-50/50" },
              { step: "03", title: "Verify", desc: "Veterinarian reviews evidence & issues e-Prescription.", icon: "👨‍⚕️", color: "border-blue-500 bg-blue-50/50" },
              { step: "04", title: "Investigate", desc: "Field worker & laboratory respond with barcode sample.", icon: "🧪", color: "border-purple-500 bg-purple-50/50" },
              { step: "05", title: "Contain", desc: "District GIS maps cluster & deploys Mobile Response Team.", icon: "🚨", color: "border-red-500 bg-red-50/50" },
              { step: "06", title: "Prevent", desc: "Multilingual ring advisory sent to 1,420 neighboring farms.", icon: "💉", color: "border-teal-500 bg-teal-50/50" }
            ].map((p, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border-2 ${p.color} space-y-2 flex flex-col justify-between shadow-xs hover:shadow-md transition`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-[10px] font-mono font-black text-slate-500">STEP {p.step}</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-[#0A1020]">{p.title}</h3>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section 09: PLATFORM ECOSYSTEM (Interactive Center Hub) */}
      <section className="py-14 bg-[#F6F3EA] border-b border-[#ECE6D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
              PLATFORM ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1020]">Unified Stakeholder Intelligence Grid</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hover over each node to inspect real-time data exchange & operational authority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystemNodes.map((node) => (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-5 rounded-2xl border-2 bg-white ${node.color} shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between space-y-3`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{node.icon}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                    {node.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-sm text-[#0A1020]">{node.name}</h3>
                  <p className="text-xs font-semibold text-[#149A84] mt-0.5">{node.role}</p>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{node.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#073B32]">
                  <span>Role Workspace</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section 11: ROLE ENTRY PANELS (5 Asymmetric Panels) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
              AUTHORIZED ENVIRONMENTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A1020]">Built for Everyone Responsible for Animal Health</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Sign in to your designated role workspace to begin surveillance operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Panel 1: Farmer (7 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-7 bg-[#F6F3EA] p-6 rounded-3xl border-2 border-[#ECE6D6] hover:border-[#149A84] transition cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">🌾</span>
                  <span className="text-xs font-extrabold bg-[#D9F1E8] text-[#073B32] px-3 py-1 rounded-full border border-[#B3E2D2]">
                    Farmer Workspace
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1020] group-hover:text-[#149A84] transition">
                  “Report symptoms in under 60 seconds.”
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mobile-first rural interface with large touch symptom chips, camera uploads, voice memo wave recording, and digital animal health passports.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-extrabold text-[#073B32] pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Panel 2: Field Worker (5 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-5 bg-[#F6F3EA] p-6 rounded-3xl border-2 border-[#ECE6D6] hover:border-teal-500 transition cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">🩺</span>
                  <span className="text-xs font-extrabold bg-teal-100 text-teal-900 px-3 py-1 rounded-full border border-teal-200">
                    Field Sentinel
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#0A1020] group-hover:text-teal-700 transition">
                  “Capture field intelligence on the ground.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily timeline visit schedule, live route map, sudden mortality logging, and offline queue auto-sync.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-extrabold text-teal-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Panel 3: Veterinarian (4 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-[#F6F3EA] p-6 rounded-3xl border-2 border-[#ECE6D6] hover:border-blue-500 transition cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">👨‍⚕️</span>
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                    Clinical Workbench
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0A1020] group-hover:text-blue-700 transition">
                  “Investigate cases with decision support.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clinical dossier, AI differential diagnosis, diagnostic lab barcodes, and e-prescriptions.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-extrabold text-blue-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Panel 4: District Officer (4 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-[#F6F3EA] p-6 rounded-3xl border-2 border-[#ECE6D6] hover:border-indigo-500 transition cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">🏛️</span>
                  <span className="text-xs font-extrabold bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full border border-indigo-200">
                    District Command
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0A1020] group-hover:text-indigo-700 transition">
                  “Monitor spatial clusters across Pune.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GIS disease risk map, spatial cluster alerts, and multichannel farmer advisory broadcasting.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Panel 5: State Admin (4 cols) */}
            <div
              onClick={onAccessPlatform}
              className="md:col-span-4 bg-[#F6F3EA] p-6 rounded-3xl border-2 border-[#ECE6D6] hover:border-purple-500 transition cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">🗺️</span>
                  <span className="text-xs font-extrabold bg-purple-100 text-purple-900 px-3 py-1 rounded-full border border-purple-200">
                    State Directorate
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0A1020] group-hover:text-purple-700 transition">
                  “Statewide 36-district strategic overview.”
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maharashtra district risk heatmaps, vaccination gap analysis, vector forecasts, and fund dispatches.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-extrabold text-purple-800 pt-2">
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0A1020] text-slate-400 py-8 px-4 text-center text-xs border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#149A84]" />
            <p className="font-bold text-slate-200">PASHUSURAKSHA — Smart India Hackathon (SIH) 2026 Problem Statement 26128</p>
          </div>
          <p className="text-slate-500">Government of Maharashtra • Department of Animal Husbandry & Dairying</p>
          <p className="text-slate-600 font-mono text-[11px] pt-2">
            Livestock Health Surveillance • Early Warning • Response Intelligence Platform
          </p>
        </div>
      </footer>
    </div>
  );
}