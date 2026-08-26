import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Play, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Stethoscope, 
  Compass, 
  Radio, 
  Layers, 
  TestTube2, 
  MapPin, 
  Activity, 
  FileText, 
  BarChart3, 
  Cpu, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Info,
  Check
} from 'lucide-react';
import PublicHeader from '../layout/PublicHeader';
import PublicFooter from '../layout/PublicFooter';
import ArchitectureVisual from './ArchitectureVisual';
import { useApp } from '../../context/AppContext';

export default function JudgeMode() {
  const { 
    enterWorkspace, 
    setCurrentScreen, 
    cases, 
    hotspots, 
    labSamples, 
    stateDistricts,
    demoStoryStage,
    setDemoStoryStage,
    advanceDemoStory,
    restartDemoStory,
    switchDemoPersona
  } = useApp();

  const [activeTab, setActiveTab] = useState('demoFlow'); // 'demoFlow' | 'overview' | 'roles' | 'architecture' | 'impact' | 'tech'
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Exact 20-Step Judge Demo from Section 71
  const judgeDemoSteps = [
    {
      step: 1,
      screen: "Homepage",
      title: "Statewide Surveillance Map Observation",
      desc: "Judge observes the live animated Maharashtra surveillance network, active district clusters (Pune, Nashik, Nagpur), and operational telemetry.",
      actionLabel: "Advance to Demo Entry →",
      targetRole: null
    },
    {
      step: 2,
      screen: "Demo Gateway",
      title: "Launch Connected Demo Mode",
      desc: "Click 'Try Demo' to load the master simulated case PS-2026-004281 (Ganga — Cow).",
      actionLabel: "Select Farmer Persona →",
      targetRole: "farmer"
    },
    {
      step: 3,
      screen: "Workspace Select",
      title: "Select Ramesh Patil (Farmer)",
      desc: "Load Ramesh Patil's farm workspace in Khedgaon, Baramati Taluka, Pune.",
      actionLabel: "Open Farmer Portal →",
      targetRole: "farmer"
    },
    {
      step: 4,
      screen: "Farmer Sickness Wizard",
      title: "Farmer Reports Ganga",
      desc: "Submit symptoms: High Fever (>104°F), Skin Nodules (2-5cm), and sudden milk drop from 12L to 4L.",
      actionLabel: "Calculate Risk Score →",
      targetRole: "farmer"
    },
    {
      step: 5,
      screen: "Decision Support",
      title: "Risk Score Generated: 86 / 100",
      desc: "Deterministic rule engine computes 86/100 HIGH RISK with Lumpy Skin Disease spatial cluster probability.",
      actionLabel: "Create Case Ledger →",
      targetRole: "farmer"
    },
    {
      step: 6,
      screen: "Case Confirmation",
      title: "Case PS-2026-004281 Dispatched",
      desc: "Case ledger created, farmer receives immediate isolation guidance, alert sent to Taluka Hospital.",
      actionLabel: "Switch to Veterinarian →",
      targetRole: "vet"
    },
    {
      step: 7,
      screen: "Role Switch",
      title: "Switch Persona to Dr. Anand Deshmukh",
      desc: "Load Dr. Anand's Clinical Intelligence Workbench at Baramati Taluka Hospital.",
      actionLabel: "Review Case Dossier →",
      targetRole: "vet"
    },
    {
      step: 8,
      screen: "Clinical Attention Panel",
      title: "Same Case PS-2026-004281 Surfaces",
      desc: "Dr. Anand sees Ganga highlighted in the priority 'Requires Attention' clinical triage panel.",
      actionLabel: "Inspect Decision Support →",
      targetRole: "vet"
    },
    {
      step: 9,
      screen: "Decision Support Inspection",
      title: "Vet Reviews Differential Evidence",
      desc: "Inspects 5 similar reports in Baramati, 3 affected villages, and issues initial anti-inflammatory e-Prescription.",
      actionLabel: "Request Lab Diagnostic Swab →",
      targetRole: "vet"
    },
    {
      step: 10,
      screen: "Lab Order Dispatch",
      title: "Vet Orders Real-time PCR Swab",
      desc: "Orders diagnostic swab panel and generates barcode linked to regional diagnostic lab.",
      actionLabel: "Switch to Field Worker →",
      targetRole: "fieldWorker"
    },
    {
      step: 11,
      screen: "Role Switch",
      title: "Switch Persona to Sunita Pawar (Pashu Sakhi)",
      desc: "Load Sunita Pawar's offline-capable Field Sentinel operations kit.",
      actionLabel: "View Field Route →",
      targetRole: "fieldWorker"
    },
    {
      step: 12,
      screen: "Field Schedule",
      title: "Sample Task Appears in 09:30 AM Route",
      desc: "Sunita's GPS itinerary schedules a visit to Ramesh Patil's shed in Khedgaon.",
      actionLabel: "Execute Swab Collection →",
      targetRole: "fieldWorker"
    },
    {
      step: 13,
      screen: "Sample Tagging",
      title: "Sample PS-SMP-0198 Tagged in Cold Box",
      desc: "Nasal swab & serum placed in VTM tube, tagged with Sample ID PS-SMP-0198, dispatched under 4.2°C cold-chain.",
      actionLabel: "Switch to District Command →",
      targetRole: "admin"
    },
    {
      step: 14,
      screen: "Role Switch",
      title: "Switch Persona to Pune District Command",
      desc: "Load Pune District Animal Health Command Center.",
      actionLabel: "Inspect GIS Hotspots →",
      targetRole: "admin"
    },
    {
      step: 15,
      screen: "GIS Surveillance",
      title: "Baramati Hotspot Identified on Map",
      desc: "Pulsing red spatial cluster detected around Khedgaon, Malegaon, and Gunawadi with 7 active cases.",
      actionLabel: "Deploy Mobile Response Unit →",
      targetRole: "admin"
    },
    {
      step: 16,
      screen: "Tactical Mobilization",
      title: "District Deploys Rapid Response Team",
      desc: "Mobile Veterinary Polyclinic and 2,000 Ring Vaccine doses dispatched to Baramati cluster.",
      actionLabel: "Issue Regional Advisory →",
      targetRole: "admin"
    },
    {
      step: 17,
      screen: "Advisory Broadcast",
      title: "Advisory Studio Broadcasts Alert",
      desc: "Multilingual advisory (English, Marathi, Hindi) sent via SMS, IVR, and App to 4,200 farmers in 8km zone.",
      actionLabel: "Switch to State Directorate →",
      targetRole: "stateAdmin"
    },
    {
      step: 18,
      screen: "Role Switch",
      title: "Switch Persona to Maharashtra State Administrator",
      desc: "Load highest-level strategic governance interface at Mumbai HQ.",
      actionLabel: "Inspect 36-District Map →",
      targetRole: "stateAdmin"
    },
    {
      step: 19,
      screen: "State Directorate Map",
      title: "Pune Risk Indicator Rises Statewide",
      desc: "Pune flagged as CRITICAL on 36-district heatmap alongside Ahmednagar & Solapur.",
      actionLabel: "Reallocate Strategic Buffer →",
      targetRole: "stateAdmin"
    },
    {
      step: 20,
      screen: "Resource Planning",
      title: "State Reallocates Vaccine Reserve",
      desc: "Directorate releases emergency contingency funds & 50,000 Goat Pox vaccine doses to Western Maharashtra.",
      actionLabel: "Complete Evaluation Loop ✓",
      targetRole: null
    }
  ];

  const currentStep = judgeDemoSteps[currentStepIndex];

  const handleStepAction = () => {
    if (currentStep.targetRole) {
      enterWorkspace(currentStep.targetRole);
    }
    if (currentStepIndex < judgeDemoSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#0A1020] flex flex-col font-sans">
      <PublicHeader activeNav="judgeMode" />

      {/* Top Judge Banner */}
      <div className="bg-[#09101E] text-white border-b border-slate-800 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-3 py-1 rounded-full font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIH 2026 Judge & Evaluator Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              PashuSuraksha Evaluation Console
            </h1>
            <p className="text-xs text-slate-300">
              Smart India Hackathon 2026 • Problem Statement 26128 • Government of Maharashtra
            </p>
          </div>

          {/* Quick Tab Selector */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('demoFlow')}
              className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'demoFlow' ? 'bg-[#149A84] text-white shadow-xs' : 'text-slate-300 hover:text-white'}`}
            >
              20-Step Live Demo
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'overview' ? 'bg-[#149A84] text-white shadow-xs' : 'text-slate-300 hover:text-white'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'roles' ? 'bg-[#149A84] text-white shadow-xs' : 'text-slate-300 hover:text-white'}`}
            >
              Role Explorer
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'architecture' ? 'bg-[#149A84] text-white shadow-xs' : 'text-slate-300 hover:text-white'}`}
            >
              Architecture
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'impact' ? 'bg-[#149A84] text-white shadow-xs' : 'text-slate-300 hover:text-white'}`}
            >
              Impact
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full space-y-8">
        
        {/* ========================================================================= */}
        {/* TAB 1: 20-STEP EXACT JUDGE DEMO WALKTHROUGH (Section 71) */}
        {/* ========================================================================= */}
        {activeTab === 'demoFlow' && (
          <div className="space-y-6">
            
            {/* Active Step Hero Card */}
            <div className="bg-[#073B32] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-emerald-500/40 relative overflow-hidden space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-mono font-black text-xl text-amber-300">
                    {String(currentStep.step).padStart(2, '0')}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-300 tracking-wider">
                      STEP {currentStep.step} OF 20 • {currentStep.screen}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                      {currentStep.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentStepIndex === 0}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-xl text-xs font-bold transition"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setCurrentStepIndex(prev => Math.min(judgeDemoSteps.length - 1, prev + 1))}
                    disabled={currentStepIndex === judgeDemoSteps.length - 1}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-xl text-xs font-bold transition"
                  >
                    Next →
                  </button>
                  <button
                    onClick={() => setCurrentStepIndex(0)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs transition"
                    title="Reset to Step 1"
                  >
                    <RotateCcw className="w-4 h-4 text-emerald-300" />
                  </button>
                </div>
              </div>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
                {currentStep.desc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-emerald-800/80">
                <div className="text-xs text-emerald-200">
                  Target Case: <strong className="text-white font-mono">PS-2026-004281 (Ganga - Cow)</strong> • Location: Khedgaon, Baramati
                </div>

                <button
                  onClick={handleStepAction}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#149A84] hover:bg-[#0C7A68] text-white font-extrabold text-xs shadow-lg transition flex items-center justify-center gap-2"
                >
                  <span>{currentStep.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Stepper Grid */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-extrabold text-sm text-[#073B32] uppercase tracking-wider">
                Full 20-Step Connected Case Timeline
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {judgeDemoSteps.map((st, i) => {
                  const isCurrent = currentStepIndex === i;
                  const isPassed = currentStepIndex > i;

                  return (
                    <button
                      key={st.step}
                      onClick={() => setCurrentStepIndex(i)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isCurrent 
                          ? 'bg-[#073B32] text-white border-teal-500 shadow-md ring-2 ring-teal-400/40' 
                          : isPassed 
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
                          : 'bg-[#FCFBF8] text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                        <span>STEP {String(st.step).padStart(2, '0')}</span>
                        {isPassed && <span className="text-emerald-600">✓</span>}
                      </div>
                      <p className="text-xs font-bold truncate">{st.title}</p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{st.screen}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Finale Message Card (Section 71) */}
            <div className="bg-gradient-to-r from-[#09101E] via-[#073B32] to-[#0A1020] text-white p-8 rounded-3xl text-center space-y-2 border border-emerald-500/30">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                THE SIH 2026 PROMISE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                ONE REPORT. ONE CONNECTED RESPONSE. ONE SURVEILLANCE NETWORK.
              </h2>
              <p className="text-xs text-slate-300 max-w-xl mx-auto pt-1">
                From a single farmer's mobile report in Khedgaon to statewide strategic vaccine reallocation across 36 districts.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: ROLE EXPLORER */}
        {/* ========================================================================= */}
        {activeTab === 'roles' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-extrabold text-[#073B32] font-display">
                Role-Based Workspaces Explorer
              </h2>
              <p className="text-xs text-slate-500">
                Jump directly into any of the 5 authorized stakeholder workspaces. Notice how navigation and data context strictly adjust per role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { id: "farmer", name: "Ramesh Patil", title: "Farmer / Livestock Owner", loc: "Khedgaon • Baramati", icon: Users, color: "emerald", desc: "Monitors 24 cattle, reports symptoms, tracks case PS-2026-004281." },
                { id: "fieldWorker", name: "Sunita Pawar", title: "Field Sentinel (Pashu Sakhi)", loc: "Baramati Sector 2", icon: Compass, color: "teal", desc: "Executes 4 field visits, collects swab PS-SMP-0198, operates offline." },
                { id: "vet", name: "Dr. Anand Deshmukh", title: "Veterinarian (Clinical HQ)", loc: "Baramati Taluka Hospital", icon: Stethoscope, color: "blue", desc: "Triages 128 cases, reviews 86/100 risk score, issues e-Prescriptions." },
                { id: "admin", name: "District Command", title: "Pune District Health Command", loc: "Pune Collectorate", icon: Radio, color: "amber", desc: "Monitors GIS disease map, mobilizes Rapid Response Teams to Baramati." },
                { id: "stateAdmin", name: "State Directorate", title: "Maharashtra Directorate HQ", loc: "36 Districts • Mumbai", icon: Layers, color: "purple", desc: "Evaluates statewide risk heatmaps and reallocates strategic vaccine vials." }
              ].map((ws) => {
                const Icon = ws.icon;
                return (
                  <div key={ws.id} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#073B32] transition">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-800">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900">{ws.name}</h4>
                        <p className="text-xs text-[#073B32] font-semibold">{ws.title}</p>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">{ws.loc}</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {ws.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => enterWorkspace(ws.id)}
                      className="w-full py-2.5 bg-[#073B32] hover:bg-[#052923] text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-1.5"
                    >
                      <span>Enter Workspace →</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SYSTEM ARCHITECTURE */}
        {/* ========================================================================= */}
        {activeTab === 'architecture' && (
          <ArchitectureVisual />
        )}

        {/* ========================================================================= */}
        {/* TAB 4: PRODUCT OVERVIEW & SIH CRITERIA */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-extrabold text-[#073B32]">Problem Statement 26128 Breakdown</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Efficient systems for early detection, prevention, and management of livestock diseases and animal health issues.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Late Reporting:</strong> Solved via 60-second mobile wizard and toll-free 1800 IVR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Fragmented Records:</strong> Solved with unified RFID Animal Digital Passport.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Low Connectivity:</strong> Solved via local storage and auto-syncing offline queues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Outbreak Delays:</strong> Solved with GIS 5km spatial clustering rule engine.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-extrabold text-[#073B32]">Prototype Credibility & Standards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed to feel like a serious Government of Maharashtra digital infrastructure product.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block">Strict Role Isolation:</strong>
                  <span className="text-slate-600">No global cross-role tabs after login. Real role-based access.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block">Decision Support, Not Fake AI:</strong>
                  <span className="text-slate-600">Clearly labeled deterministic clinical rule engines with mandatory veterinary verification.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: TARGET IMPACT */}
        {/* ========================================================================= */}
        {activeTab === 'impact' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-extrabold text-[#073B32]">
              Target Impact & Epidemiological Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                <span className="text-emerald-800 font-bold uppercase text-[10px]">Reporting Latency</span>
                <p className="text-xl font-black text-emerald-950">&lt; 2 Hours</p>
                <p className="text-slate-600">Down from 4–7 days baseline in rural Maharashtra</p>
              </div>

              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-1">
                <span className="text-teal-800 font-bold uppercase text-[10px]">Ring Vaccination Coverage</span>
                <p className="text-xl font-black text-teal-950">&gt; 90% in 5km Radius</p>
                <p className="text-slate-600">Targeted mobilization prevents regional spillover</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 space-y-1">
                <span className="text-blue-800 font-bold uppercase text-[10px]">Avoidable Mortality</span>
                <p className="text-xl font-black text-blue-950">Up to 60% Reduction</p>
                <p className="text-slate-600">Early supportive therapy & containment safeguard dairy herds</p>
              </div>
            </div>
          </div>
        )}

      </main>

      <PublicFooter />
    </div>
  );
}
