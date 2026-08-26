import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  RotateCcw, 
  ShieldCheck, 
  Users, 
  Stethoscope, 
  Compass, 
  Radio, 
  Layers, 
  TestTube2, 
  Truck, 
  Syringe, 
  Activity,
  MapPin,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function DemoCenter({ onExit, onOpenRoleDashboard }) {
  const { 
    demoStoryStage, 
    setDemoStoryStage, 
    restartDemoStory, 
    advanceDemoStory, 
    enterWorkspace, 
    setSelectedCase, 
    cases 
  } = useApp();

  const activeDemoCase = cases.find(c => c.caseId === "PS-2026-004281") || cases[0] || {
    caseId: "PS-2026-004281",
    animalId: "MH-PUN-0241",
    farmerName: "Ramesh Patil",
    village: "Khedgaon",
    block: "Baramati",
    district: "Pune",
    species: "Cattle (Cow)",
    breed: "Gir Indigenous",
    symptoms: ["High Fever (>104°F)", "Skin Nodules (2-5cm)", "Reduced Appetite"],
    riskScore: 86,
    riskLevel: "HIGH"
  };

  const storySteps = [
    {
      step: 1,
      tag: "01 — FARMER REPORT",
      title: "Ramesh reports Gauri with fever & skin nodules",
      role: "farmer",
      persona: "Ramesh Patil (Farmer)",
      location: "Khedgaon • Baramati • Pune",
      narrative: "Ramesh notices sudden high fever (104.8°F) and 2-5cm circumscribed skin lumps on his prized Gir cow, Gauri. He opens JIVSANKET and completes the 5-step guided reporting flow in Marathi.",
      signal: "Report Received via Mobile App",
      cta: "Submit & Trigger Assessment →",
      actionRole: "farmer",
      icon: Users,
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      step: 2,
      tag: "02 — AI PRELIMINARY RISK ASSESSMENT",
      title: "JIVSANKET Intelligence calculates 86 / 100 Risk",
      role: "vet",
      persona: "JIVSANKET Intelligence Engine",
      location: "Algorithmic Surveillance Node",
      narrative: "The system cross-references Ramesh's report with recent local cases in Malegaon Budruk and sugarcane harvest fly density. It flags an 86/100 High Risk probability for Capripoxvirus (Lumpy Skin Disease).",
      signal: "Preliminary Risk Score: 86 / 100 (HIGH)",
      cta: "Route to Clinical Veterinarian →",
      actionRole: "vet",
      icon: Sparkles,
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      step: 3,
      tag: "03 — VETERINARY CLINICAL REVIEW",
      title: "Dr. Anand Deshmukh receives case dossier",
      role: "vet",
      persona: "Dr. Anand Deshmukh (Veterinary Officer)",
      location: "Baramati Taluka Hospital",
      narrative: "Dr. Anand inspects the clinical photos, reviews the AI triage evidence breakdown, issues an initial anti-inflammatory e-Prescription (Flunixin + TopiCure), and orders diagnostic sample collection.",
      signal: "e-Prescription Issued & Sample Ordered",
      cta: "Dispatch Field Sentinel →",
      actionRole: "vet",
      icon: Stethoscope,
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      step: 4,
      tag: "04 — FIELD VERIFICATION & SWAB",
      title: "Sunita Pawar performs on-site farm inspection",
      role: "fieldWorker",
      persona: "Sunita Pawar (Pashu Sakhi)",
      location: "Khedgaon Village Shed Unit 4",
      narrative: "Field worker Sunita reaches Ramesh's farm via GPS route navigation. She verifies clinical signs, applies RFID tag #890401827441, isolates the animal, and collects a nasal swab in cold storage.",
      signal: "Barcode Generated: #LAB-PUN-9821",
      cta: "Send Specimen to Diagnostic Lab →",
      actionRole: "fieldWorker",
      icon: Compass,
      badgeColor: "bg-teal-100 text-teal-800"
    },
    {
      step: 5,
      tag: "05 — LABORATORY CONFIRMATION",
      title: "Real-time RT-PCR confirms Capripoxvirus DNA",
      role: "vet",
      persona: "Regional Diagnostic Laboratory",
      location: "DIS Aundh, Pune",
      narrative: "The cold-chain specimen arrives at the regional laboratory. Real-time RT-PCR amplification confirms Capripoxvirus (LSD) positive at Cycle Threshold Ct=21.4. Results auto-sync to state database.",
      signal: "RT-PCR Confirmed Positive",
      cta: "Escalate to District Command →",
      actionRole: "vet",
      icon: TestTube2,
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      step: 6,
      tag: "06 — DISTRICT SPATIAL OUTBREAK ALERT",
      title: "Baramati Spatial Hotspot Cluster Declared",
      role: "admin",
      persona: "Pune District Surveillance Command",
      location: "Pune Collectorate",
      narrative: "District GIS maps cluster 7 cases across Khedgaon, Malegaon & Gunawadi. District Surveillance Officer declares a 1km Infected Zone and 5km Ring Surveillance Perimeter.",
      signal: "4 Villages In Active Hotspot Ring",
      cta: "Deploy Rapid Response Team →",
      actionRole: "admin",
      icon: Radio,
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      step: 7,
      tag: "07 — RAPID RESPONSE DEPLOYMENT",
      title: "Mobile Poly-Clinic Unit 1 dispatched to sector",
      role: "admin",
      persona: "Rapid Response Unit (RRT 1)",
      location: "Khedgaon Gram Panchayat Center",
      narrative: "Emergency Mobile Clinic van arrives with 2,000 Goat Pox vaccine doses, portable cold box, disinfectant sprayers, and biosecurity PPE kits to begin immediate ring vaccination.",
      signal: "2,000 Ring Doses Dispatched",
      cta: "Escalate to State Directorate →",
      actionRole: "admin",
      icon: Truck,
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      step: 8,
      tag: "08 — STATE DIRECTORATE SURVEILLANCE",
      title: "Pune District elevated on Maharashtra 36-District Matrix",
      role: "stateAdmin",
      persona: "State Animal Health Directorate",
      location: "Central Directorate • Mumbai HQ",
      narrative: "Statewide intelligence dashboard marks Pune as elevated risk. The Directorate automatically approves ₹25 Lakhs emergency contingency funds from the state disaster reserve.",
      signal: "₹25 Lakhs Emergency Funds Released",
      cta: "Broadcast Statewide Prevention Policy →",
      actionRole: "stateAdmin",
      icon: Layers,
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      step: 9,
      tag: "09 — STATEWIDE PREVENTION & RING CAMPAIGN",
      title: "Multichannel advisory broadcast to 12,000 farmers",
      role: "stateAdmin",
      persona: "Statewide One Health Network",
      location: "All 36 Districts of Maharashtra",
      narrative: "Advisory Studio broadcasts automated SMS & IVR voice guidelines on stall isolation and neem vector sprays. Ring vaccination achieves 87% coverage, successfully extinguishing the outbreak.",
      signal: "Outbreak Contained • 87% Herd Immunity",
      cta: "Restart Demo Story Cycle ↺",
      actionRole: "stateAdmin",
      icon: ShieldCheck,
      badgeColor: "bg-emerald-100 text-emerald-800"
    }
  ];

  const currentStep = storySteps[demoStoryStage - 1] || storySteps[0];
  const StepIcon = currentStep.icon;

  const handleStepAction = () => {
    if (demoStoryStage === 9) {
      restartDemoStory();
    } else {
      advanceDemoStory();
    }
  };

  const handleJumpToWorkspace = (roleKey) => {
    setSelectedCase(activeDemoCase);
    enterWorkspace(roleKey);
  };

  return (
    <div className="min-h-[calc(100vh-60px)] bg-[#F6F3EA] py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ECE6D6] pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-900 border border-purple-300 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>SIH 2026 EVALUATOR DEMO CENTER</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0A1020] tracking-tight">
              JIVSANKET Demo Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Explore how one animal-health event (Gauri / Cow / Khedgaon) moves through the entire surveillance and response ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={restartDemoStory}
              className="px-4 py-2 bg-white hover:bg-slate-100 border border-[#ECE6D6] text-slate-700 font-bold rounded-xl text-xs transition flex items-center gap-2 shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart Story</span>
            </button>

            <button
              onClick={onExit}
              className="px-5 py-2 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-xl text-xs transition shadow-md"
            >
              Exit Demo Center
            </button>
          </div>
        </div>

        {/* Persistent Demo Case Dossier Banner */}
        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#073B32] flex items-center justify-center font-mono font-black border border-emerald-200 shrink-0 text-sm">
              🐮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-500">CASE #{activeDemoCase.caseId}</span>
                <RiskBadge level={activeDemoCase.riskLevel} size="sm" />
                <span className="text-xs font-mono font-black text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  Risk: {activeDemoCase.riskScore}/100
                </span>
              </div>
              <h3 className="font-black text-sm text-[#0A1020]">
                {activeDemoCase.species} — Gauri (Owner: {activeDemoCase.farmerName}, {activeDemoCase.village}, {activeDemoCase.block})
              </h3>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Symptoms: <strong className="text-slate-800">Fever (104.8°F), Skin Nodules, Reduced Appetite</strong>
          </div>
        </div>

        {/* 9-Stage Story Stepper Strip */}
        <div className="bg-white rounded-3xl border border-[#ECE6D6] p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-2">
            <span>LIVE SURVEILLANCE LIFECYCLE STORY (9 PHASES)</span>
            <span className="text-[#073B32] font-mono">Stage {demoStoryStage} of 9</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
            {storySteps.map((s) => {
              const isCurrent = demoStoryStage === s.step;
              const isPast = demoStoryStage > s.step;

              return (
                <button
                  key={s.step}
                  onClick={() => setDemoStoryStage(s.step)}
                  className={`p-2.5 rounded-2xl text-left border transition flex flex-col justify-between h-20 ${
                    isCurrent 
                      ? 'bg-[#073B32] text-white border-[#073B32] shadow-md scale-105 z-10' 
                      : isPast 
                        ? 'bg-[#D9F1E8] text-[#073B32] border-[#B3E2D2]' 
                        : 'bg-[#F6F3EA] text-slate-500 border-[#ECE6D6] hover:border-slate-300'
                  }`}
                >
                  <span className={`font-mono text-[10px] font-black ${isCurrent ? 'text-emerald-300' : 'text-slate-400'}`}>
                    0{s.step}
                  </span>
                  <span className={`text-[11px] font-bold line-clamp-2 leading-tight ${isCurrent ? 'text-white font-black' : ''}`}>
                    {s.tag.split('—')[1] || s.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Live Story Stage Presentation */}
        <div className="bg-white rounded-3xl border-2 border-[#073B32] p-7 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#073B32] text-white flex items-center justify-center shrink-0 shadow-md">
                <StepIcon className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <span className="font-mono text-xs font-black text-[#073B32] uppercase">{currentStep.tag}</span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0A1020]">{currentStep.title}</h2>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-center ${currentStep.badgeColor}`}>
              {currentStep.signal}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                <span>Active Persona: <strong className="text-[#0A1020]">{currentStep.persona}</strong></span>
                <span>•</span>
                <span>Location: <strong className="text-[#0A1020]">{currentStep.location}</strong></span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium bg-[#F6F3EA] p-5 rounded-2xl border border-[#ECE6D6]">
                {currentStep.narrative}
              </p>
            </div>

            <div className="md:col-span-4 space-y-3 bg-slate-50 p-5 rounded-2xl border border-[#ECE6D6] flex flex-col justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                Interactive Story Action:
              </span>

              <button
                onClick={handleStepAction}
                className="w-full py-4 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-2xl text-xs shadow-lg transition flex items-center justify-center gap-2 border border-emerald-400"
              >
                <span>{currentStep.cta}</span>
              </button>

              <button
                onClick={() => handleJumpToWorkspace(currentStep.actionRole)}
                className="w-full py-2.5 bg-white hover:bg-slate-100 border border-[#ECE6D6] text-[#073B32] font-black rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Open in {currentStep.persona.split('(')[0]} Workspace →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Role Persona Switcher for Judges */}
        <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-3">
          <h3 className="font-black text-sm text-[#0A1020] uppercase tracking-wider">
            Switch Demo Persona (Judge Direct Jump)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
            {[
              { id: 'farmer', name: 'Ramesh Patil', role: 'Farmer' },
              { id: 'vet', name: 'Dr. Anand Deshmukh', role: 'Veterinarian' },
              { id: 'fieldWorker', name: 'Sunita Pawar', role: 'Field Worker' },
              { id: 'admin', name: 'Pune District Officer', role: 'District Command' },
              { id: 'stateAdmin', name: 'State Administrator', role: 'State Intelligence' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => handleJumpToWorkspace(p.id)}
                className="p-3 bg-[#F6F3EA] hover:bg-[#D9F1E8] border border-[#ECE6D6] hover:border-[#073B32] rounded-2xl text-left transition group"
              >
                <span className="text-[10px] font-bold text-slate-400 block">{p.role}</span>
                <span className="font-black text-[#0A1020] group-hover:text-[#073B32] block">{p.name}</span>
                <span className="text-[10px] text-[#073B32] font-bold mt-1 block">View Dashboard →</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
