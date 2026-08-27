import React, { useState, useEffect } from 'react';
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
  Globe,
  Check,
  Eye
} from 'lucide-react';
import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';
import { useApp } from '../../context/AppContext';

export default function LandingPage({ onAccessPlatform, onReportIssue }) {
  const { 
    setCurrentScreen, 
    setIsDemoModalOpen, 
    setIsIVROpen, 
    enterWorkspace, 
    setActiveTab, 
    liveEventStream 
  } = useApp();

  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeTabLoop, setActiveTabLoop] = useState(0);

  const responseNetworkNodes = [
    {
      id: "farmer",
      name: "Farmer",
      action: "Report",
      role: "Symptom & Mortality Logging",
      desc: "Logs first sign of fever or nodules in <60s via App or toll-free IVR.",
      color: "from-emerald-500 to-teal-700",
      accent: "#10b981",
      icon: "🌾"
    },
    {
      id: "fieldWorker",
      name: "Pashu Sakhi",
      action: "Verify",
      role: "Field Verification & Swabs",
      desc: "Investigates on ground, operates offline, collects diagnostic swabs.",
      color: "from-teal-500 to-emerald-800",
      accent: "#149A84",
      icon: "🩺"
    },
    {
      id: "vet",
      name: "Veterinarian",
      action: "Assess",
      role: "Clinical Decision Support",
      desc: "Reviews triage evidence, orders RT-PCR tests, coordinates quarantine.",
      color: "from-blue-500 to-indigo-700",
      accent: "#3b82f6",
      icon: "👨‍⚕️"
    },
    {
      id: "lab",
      name: "Laboratory",
      action: "Validate",
      role: "Serology & RT-PCR",
      desc: "Processes cold-chain samples under BSL-2/3 with live barcode tracking.",
      color: "from-purple-500 to-indigo-900",
      accent: "#8b5cf6",
      icon: "🧪"
    },
    {
      id: "district",
      name: "District Command",
      action: "Respond",
      role: "GIS Spatial Surveillance",
      desc: "Detects clusters, mobilizes Rapid Response Teams & Mobile Vet Units.",
      color: "from-amber-500 to-orange-700",
      accent: "#f59e0b",
      icon: "🏛️"
    },
    {
      id: "state",
      name: "State Directorate",
      action: "Plan",
      role: "Strategic Resource Allocation",
      desc: "Monitors 36 districts, targets vaccination gaps, deploys buffers.",
      color: "from-rose-500 to-red-800",
      accent: "#ef4444",
      icon: "🗺️"
    }
  ];

  const loopStages = [
    { num: "01", name: "REPORT", sub: "Farmer submits symptoms via mobile app or 1800 IVR", icon: FileText, color: "text-emerald-400" },
    { num: "02", name: "ASSESS", sub: "Decision-support risk signal generated (Score 86/100)", icon: Zap, color: "text-teal-400" },
    { num: "03", name: "VERIFY", sub: "Veterinarian and Pashu Sakhi conduct field investigation", icon: Stethoscope, color: "text-blue-400" },
    { num: "04", name: "TEST", sub: "Sample PS-SMP-0198 dispatched to Aundh Lab under cold-chain", icon: TestTube2, color: "text-purple-400" },
    { num: "05", name: "DETECT", sub: "Spatial cluster identified across Baramati sector", icon: MapPin, color: "text-amber-400" },
    { num: "06", name: "RESPOND", sub: "Rapid Response Team & Mobile Vet Unit deployed", icon: Users, color: "text-orange-400" },
    { num: "07", name: "PREVENT", sub: "5km ring vaccination & regional advisory broadcasted", icon: Syringe, color: "text-indigo-400" },
    { num: "08", name: "MONITOR", sub: "Area continues under active epidemiological surveillance", icon: Activity, color: "text-rose-400" }
  ];

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#0A1020] flex flex-col justify-between font-sans selection:bg-[#149A84] selection:text-white">
      <PublicHeader activeNav="home" />

      {/* ========================================================================= */}
      {/* SECTION 6: HERO WITH SOPHISTICATED MAHARASHTRA SURVEILLANCE VISUALIZATION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/30 text-[#073B32] text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#149A84] animate-pulse"></span>
              <span>GOVERNMENT OF MAHARASHTRA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-[52px] font-extrabold text-[#073B32] tracking-tight font-display leading-[1.12]">
              Protecting Livestock Through Early Health Intelligence
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              JIVSANKET connects farmers, field workers, veterinarians, laboratories, and government teams to detect animal-health risks before they become outbreaks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => setCurrentScreen('login')}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#073B32] to-[#095B4E] hover:from-[#095B4E] hover:to-[#149A84] text-white font-extrabold text-sm shadow-xl shadow-teal-950/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentScreen('demoCenter')}
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#073B32] font-bold text-sm border-2 border-[#073B32]/30 hover:border-[#073B32] shadow-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Try Interactive Demo</span>
              </button>
            </div>

            {/* Credibility Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 border-t border-slate-300/60">
              <span className="font-semibold text-slate-700">SIH 2026 • Problem Statement 26128</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                Rural-First Low-Connectivity Architecture
              </span>
            </div>
          </div>

          {/* Right Column: Sophisticated Animated Maharashtra Surveillance Visualizer */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl bg-[#09101E] border border-slate-800 shadow-2xl p-5 sm:p-7 overflow-hidden text-white">
              {/* Background Map Grid Pattern */}
              <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none"></div>

              {/* Map Header Status Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase font-mono">
                    MAHARASHTRA SURVEILLANCE RADAR
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>4 Clusters Active</span>
                </div>
              </div>

              {/* Central Map Canvas (Interactive SVG with District Nodes, Hotspot Pulses & Flowing Lines) */}
              <div className="relative w-full h-[320px] sm:h-[360px] flex items-center justify-center">
                
                {/* SVG Silhouette and Connected Vectors */}
                <svg className="w-full h-full" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized Maharashtra District Outline Contours */}
                  <path 
                    d="M 60,140 Q 120,60 210,70 T 360,60 T 450,110 T 420,200 T 360,260 T 260,310 T 140,290 T 70,240 Z" 
                    fill="rgba(7, 59, 50, 0.25)" 
                    stroke="rgba(20, 154, 132, 0.4)" 
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  
                  {/* Western Region / Konkan line */}
                  <path d="M 65,150 L 75,210 L 85,270 L 105,300" stroke="rgba(20, 154, 132, 0.5)" strokeWidth="1" />
                  {/* Marathwada & Vidarbha Division Dividers */}
                  <path d="M 210,70 L 230,190 L 260,310" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <path d="M 330,65 L 340,190 L 360,260" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  {/* Flowing Transmission Vectors between Pune -> Baramati -> Solapur */}
                  <line x1="160" y1="210" x2="200" y2="235" stroke="#E2A438" strokeWidth="2" className="animate-flow-dash" />
                  <line x1="200" y1="235" x2="250" y2="265" stroke="#149A84" strokeWidth="1.5" className="animate-flow-dash" />
                  <line x1="160" y1="210" x2="175" y2="120" stroke="#149A84" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="160" y1="210" x2="380" y2="105" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 4" />

                  {/* Heatmap Glow on Baramati */}
                  <circle cx="200" cy="235" r="42" fill="url(#coralGlow)" />
                  {/* Heatmap Glow on Daund */}
                  <circle cx="185" cy="215" r="28" fill="url(#amberGlow)" />

                  <defs>
                    <radialGradient id="coralGlow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#D85449" stopOpacity="0.45"/>
                      <stop offset="100%" stopColor="#D85449" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="amberGlow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#E2A438" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="#E2A438" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                </svg>

                {/* Node 1: PUNE (Active Command Hub) */}
                <div className="absolute top-[52%] left-[28%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-teal-500/30 animate-ping"></span>
                    <div className="w-4 h-4 rounded-full bg-teal-400 border-2 border-white shadow-lg shadow-teal-500/50"></div>
                  </div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-teal-500/40 px-2.5 py-1 rounded-lg text-center whitespace-nowrap shadow-xl">
                    <p className="text-[11px] font-extrabold text-white">PUNE HQ</p>
                    <p className="text-[9px] text-teal-300 font-mono font-medium">128 Cases Monitored</p>
                  </div>
                </div>

                {/* Node 2: BARAMATI (Cluster Detected) */}
                <div className="absolute top-[63%] left-[39%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full bg-rose-500/40 animate-ping"></span>
                    <div className="w-5 h-5 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center shadow-lg shadow-rose-500/80">
                      <span className="text-[8px] font-black text-white">!</span>
                    </div>
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-rose-950/95 border border-rose-500 px-3 py-1 rounded-lg text-center whitespace-nowrap shadow-2xl animate-bounce">
                    <div className="flex items-center gap-1 text-[11px] font-black text-rose-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
                      <span>BARAMATI: Cluster</span>
                    </div>
                    <p className="text-[9px] text-rose-200 font-mono">7 Signals (Khedgaon)</p>
                  </div>
                </div>

                {/* Node 3: NASHIK (Elevated Risk) */}
                <div className="absolute top-[28%] left-[32%] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-900"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700 px-2 py-0.5 rounded text-center whitespace-nowrap">
                    <p className="text-[10px] font-bold text-slate-200">NASHIK</p>
                    <p className="text-[9px] text-amber-300 font-mono">Elevated Risk</p>
                  </div>
                </div>

                {/* Node 4: NAGPUR (Stable) */}
                <div className="absolute top-[26%] left-[78%] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700 px-2 py-0.5 rounded text-center whitespace-nowrap">
                    <p className="text-[10px] font-bold text-slate-200">NAGPUR</p>
                    <p className="text-[9px] text-emerald-400 font-mono">Stable (89.6%)</p>
                  </div>
                </div>

                {/* Node 5: CHH. SAMBHAJINAGAR */}
                <div className="absolute top-[40%] left-[51%] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-teal-400 border border-slate-900"></div>
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-slate-900/80 px-1.5 py-0.5 rounded text-[9px] text-slate-300 font-mono whitespace-nowrap">
                    SAMBHAJINAGAR
                  </div>
                </div>
              </div>

              {/* Bottom Mini Telemetry Bar */}
              <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">Index Cluster</div>
                  <div className="text-xs font-bold text-teal-300">Baramati Sector</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">Diagnostic Lab</div>
                  <div className="text-xs font-bold text-purple-300">Aundh Regional</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">Field Response</div>
                  <div className="text-xs font-bold text-emerald-400">Ring Vaccination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: LIVE SURVEILLANCE INTELLIGENCE STRIP */}
      {/* ========================================================================= */}
      <section className="bg-[#09101E] text-white border-y border-slate-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs font-extrabold tracking-wider text-emerald-400 font-mono uppercase">
              STATEWIDE SURVEILLANCE NETWORK: OPERATIONAL
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center sm:text-left">
            <div>
              <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">36</div>
              <div className="text-[11px] text-slate-400 font-medium">Districts Connected</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-black font-mono text-teal-400 tracking-tight">13,842</div>
              <div className="text-[11px] text-slate-400 font-medium">Reports Processed</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-black font-mono text-amber-400 tracking-tight">4</div>
              <div className="text-[11px] text-slate-400 font-medium">Emerging Clusters</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400 tracking-tight">78.4%</div>
              <div className="text-[11px] text-slate-400 font-medium">Vaccination Coverage</div>
            </div>
          </div>

          <div className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/60 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Live Health Telemetry</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: WHY THIS MATTERS (Animal-Health Doesn't Happen in Dashboards) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#073B32]/10 text-[#073B32] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>Ground Truth Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B32] font-display">
            Animal-health problems don't happen in dashboards.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            They happen in the Village, Farm, Herd, Field Visit, Laboratory, and Community. Without early connection, one isolated case silently multiplies into a district-wide epidemic.
          </p>
        </div>

        {/* 3-Step Visual Progression: SICK ANIMAL -> CLUSTER -> DISTRICT RESPONSE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden space-y-4 group hover:border-[#073B32] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-black text-lg">
              01
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">Day 1 • Origin</span>
              <h3 className="text-xl font-extrabold text-slate-900">ONE SICK ANIMAL</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ganga (Cow) in Khedgaon displays pyrexia (&gt;104°F) and 2cm skin nodules. The farmer is unaware whether neighboring herds are suffering the same symptoms.
            </p>
            <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-100 text-[11px] text-rose-800 font-medium">
              Without JIVSANKET: 4-7 days reporting delay.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden space-y-4 group hover:border-[#073B32] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-black text-lg">
              02
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Day 3 • Spatial Spread</span>
              <h3 className="text-xl font-extrabold text-slate-900">ONE SPATIAL CLUSTER</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              5 similar reports emerge within an 8km radius across Khedgaon, Malegaon, and Gunawadi. Stable flies (Stomoxys) accelerate transmission between dairy sheds.
            </p>
            <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100 text-[11px] text-amber-800 font-medium">
              Automated Spatial Rule Engine triggers HIGH RISK alert.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden space-y-4 group hover:border-[#073B32] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-black text-lg">
              03
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Day 4 • Rapid Containment</span>
              <h3 className="text-xl font-extrabold text-slate-900">ONE DISTRICT RESPONSE</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              District Command mobilizes Mobile Veterinary Unit, dispatches diagnostic PCR swabs, restricts livestock markets, and executes 5km ring vaccination.
            </p>
            <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-[11px] text-emerald-800 font-medium">
              Spread halted. Herd mortality prevented.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: THE CINEMATIC RESPONSE NETWORK (Connected Nodes & Flowing Lines)*/}
      {/* ========================================================================= */}
      <section className="bg-[#09101E] text-white py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider font-mono">
              <Network className="w-4 h-4" />
              <span>THE RESPONSE NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              One Connected Animal-Health Ecosystem
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hover over each node to see how clinical intelligence flows seamlessly between stakeholders without information loss.
            </p>
          </div>

          {/* Connected Cinematic Node Row */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {responseNetworkNodes.map((node, i) => {
              const isHovered = hoveredNode === node.id;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isHovered 
                      ? 'bg-slate-800/90 border-teal-400 shadow-xl shadow-teal-500/20 scale-[1.03]' 
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{node.icon}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                        {node.action}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-white">{node.name}</h3>
                      <p className="text-[11px] text-teal-400 font-medium">{node.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: FROM FIRST SYMPTOM TO EARLY RESPONSE (8 Visual Stages) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-900/10 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5" />
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B32] font-display">
            From First Symptom to Early Response
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            The standard operating procedure triggered automatically when an animal-health symptom is logged.
          </p>
        </div>

        {/* Horizontal 8-Stage Flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loopStages.map((stg, i) => {
            const Icon = stg.icon;
            const isCurrent = activeTabLoop === i;
            return (
              <div
                key={stg.num}
                onClick={() => setActiveTabLoop(i)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isCurrent 
                    ? 'bg-[#073B32] text-white border-teal-500 shadow-lg scale-[1.02]' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xl font-black ${isCurrent ? 'text-teal-300' : 'text-[#149A84]'}`}>{stg.num}</span>
                  <Icon className={`w-5 h-5 ${isCurrent ? 'text-teal-300' : 'text-slate-500'}`} />
                </div>
                <h3 className={`font-extrabold text-sm ${isCurrent ? 'text-white' : 'text-slate-900'}`}>{stg.name}</h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${isCurrent ? 'text-emerald-100' : 'text-slate-500'}`}>{stg.sub}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: HOMEPAGE — IMPACT AS MEANINGFUL OUTCOME CARDS */}
      {/* ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073B32] font-display">
              Target Epidemiological Outcomes
            </h2>
            <p className="text-xs text-slate-500">
              Projected improvements based on early detection and ring containment modeling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <Clock className="w-6 h-6 text-teal-600" />
              <h3 className="font-bold text-sm text-slate-900">Earlier Reporting</h3>
              <p className="text-xs text-slate-600">Reduce delay between symptom and official awareness from 6 days to &lt;2 hours.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">Faster Field Response</h3>
              <p className="text-xs text-slate-600">Prioritize field worker triage routes to index cases within 4 hours of submission.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <Syringe className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-sm text-slate-900">Better Ring Coverage</h3>
              <p className="text-xs text-slate-600">Identify vaccination coverage gaps within 5km radius and mobilize targeted boosters.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <ShieldAlert className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-sm text-slate-900">Lower Mortality Risk</h3>
              <p className="text-xs text-slate-600">Earlier therapeutic intervention and biosecurity contain high-fatality viral spread.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <BarChart3 className="w-6 h-6 text-amber-600" />
              <h3 className="font-bold text-sm text-slate-900">Evidence-Based Planning</h3>
              <p className="text-xs text-slate-600">Provide real-time data for state and district vaccine buffer allocations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: HOMEPAGE — FINAL CTA */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#09101E] to-[#073B32] text-white py-20 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold uppercase">
            <span>SIH 2026 Live Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display max-w-2xl mx-auto leading-tight">
            A connected animal-health response starts with one report.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Experience the complete surveillance prototype from rural shed to state directorate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentScreen('login')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#149A84] hover:bg-[#0C7A68] text-white font-extrabold text-sm shadow-xl shadow-teal-950/40 transition-all flex items-center justify-center gap-2"
            >
              <span>Enter JIVSANKET</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentScreen('demoCenter')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Try the 3-Minute Demo</span>
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}