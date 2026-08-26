import React, { useState } from 'react';
import PublicHeader from '../layout/PublicHeader';
import PublicFooter from '../layout/PublicFooter';
import { 
  FileText, 
  Cpu, 
  Stethoscope, 
  TestTube2, 
  MapPin, 
  Users, 
  Syringe, 
  Activity, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function HowItWorksPage() {
  const { setCurrentScreen } = useApp();
  const [expandedStage, setExpandedStage] = useState(1);

  const stages = [
    {
      num: "01",
      title: "REPORT",
      tag: "Farmer / Herder Level",
      short: "Farmer submits symptoms, photos or voice description in under 60 seconds.",
      icon: FileText,
      color: "emerald",
      details: [
        "Farmer opens JIVSANKET App or dials toll-free 1800-180-1551 IVR in Marathi/Hindi.",
        "Selects tagged animal (RFID: MH-PUN-0241 Ganga) and checks visual symptoms (High fever, 2-5cm skin nodules, lactation drop).",
        "Records 15-second voice note or attaches photo of skin lesions.",
        "System creates immutable case ledger PS-2026-004281."
      ]
    },
    {
      num: "02",
      title: "ASSESS",
      tag: "Rule Engine Screening",
      short: "Deterministic decision-support algorithm evaluates clinical severity and spatial risk.",
      icon: Cpu,
      color: "teal",
      details: [
        "Evaluates symptom combination against differential diagnosis matrices (86% Lumpy Skin Disease probability).",
        "Calculates Spatial Density Index: 5 similar reports flagged in 8km radius within 7 days.",
        "Computes immediate preliminary Risk Score: 86 / 100 (HIGH).",
        "Instantly alerts Taluka Veterinary Officer Dr. Anand Deshmukh."
      ]
    },
    {
      num: "03",
      title: "VERIFY",
      tag: "Field Sentinel Triage",
      short: "Pashu Sakhi field worker and veterinarian conduct clinical investigation.",
      icon: Stethoscope,
      color: "blue",
      details: [
        "Sunita Pawar (Pashu Sakhi) receives route assignment in her offline-capable Field Sentinel kit.",
        "Visits Ramesh Patil's farm in Khedgaon to measure vitals (Rectal Temp: 104.8°F).",
        "Records clinical observations and initiates farm-level biosecurity quarantine protocol.",
        "Syncs field verification data back to the district command server."
      ]
    },
    {
      num: "04",
      title: "TEST",
      tag: "Diagnostic Chain of Custody",
      short: "Cold-chain diagnostic sample collected and dispatched with unique barcode.",
      icon: TestTube2,
      color: "purple",
      details: [
        "Field worker collects nasal swab and serum in Viral Transport Medium (VTM).",
        "System generates unique barcode: PS-SMP-0198 linked directly to Case PS-2026-004281.",
        "Sample placed in cold-chain carrier (2–8°C temperature logging).",
        "Dispatched to Regional Animal Health Diagnostic Laboratory, Aundh, Pune for Real-time PCR."
      ]
    },
    {
      num: "05",
      title: "DETECT",
      tag: "GIS Command Surveillance",
      short: "District Command detects emerging spatial hotspot across multiple villages.",
      icon: MapPin,
      color: "amber",
      details: [
        "District GIS engine links reports across Khedgaon, Malegaon Budruk, and Gunawadi.",
        "Spatial clustering threshold (≥3 cases in 5km) crossed in Baramati Taluka.",
        "Pulsing critical alert displayed on Pune District Command Center dashboard.",
        "Collector & Animal Husbandry Directorate notified of emerging cluster."
      ]
    },
    {
      num: "06",
      title: "RESPOND",
      tag: "Tactical Mobilization",
      short: "District deploys Rapid Response Team and Mobile Veterinary Units.",
      icon: Users,
      color: "coral",
      details: [
        "Mobile Veterinary Unit (MVU) dispatched to Baramati cluster epicenter.",
        "1km infected zone delineated with cattle movement restrictions.",
        "Clinical treatment kits (NSAIDs, antibiotics, antiseptics) distributed to affected herds.",
        "Daily ring monitoring initiated."
      ]
    },
    {
      num: "07",
      title: "PREVENT",
      tag: "Ring Containment",
      short: "Prophylactic ring vaccination and multi-channel advisories activated.",
      icon: Syringe,
      color: "indigo",
      details: [
        "Mobile vaccination squads vaccinate 850+ cattle within 5km buffer ring using Goat Pox vaccine.",
        "Automated Advisory Studio broadcasts audio SMS and IVR calls in Marathi to 4,200 local farmers.",
        "Local livestock market in Baramati temporarily regulated to stop vector-borne spread.",
        "Vector control spraying (Deltamethrin/Neem) executed around cattle sheds."
      ]
    },
    {
      num: "08",
      title: "MONITOR",
      tag: "Strategic State Intelligence",
      short: "State Directorate tracks containment progress and reallocates resources.",
      icon: Activity,
      color: "rose",
      details: [
        "State dashboard monitors 7-day disease reproduction trend (Rt).",
        "Vaccination coverage in Baramati raised from 74.2% to 92.8%.",
        "Recovery logs recorded in animal digital passports.",
        "Containment declared successful once zero new cases reported for 21 consecutive days."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#0A1020] flex flex-col font-sans">
      <PublicHeader activeNav="howItWorks" />

      {/* Header Banner */}
      <section className="bg-[#09101E] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
            <span>The Closed Response Loop</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
            From First Symptom to Coordinated Response
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How JIVSANKET unites 5 key stakeholders through an 8-stage early warning and containment cycle.
          </p>
        </div>
      </section>

      {/* Interactive 8-Stage Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="space-y-4">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isExpanded = expandedStage === idx + 1;

            return (
              <div 
                key={stg.num}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'bg-white border-[#073B32] shadow-md' 
                    : 'bg-white/80 hover:bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setExpandedStage(isExpanded ? null : idx + 1)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-black text-xl sm:text-2xl text-[#149A84]">{stg.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-800 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">{stg.title}</h2>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{stg.tag}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 truncate mt-0.5 font-medium">{stg.short}</p>
                    </div>
                  </div>

                  <div className="text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-teal-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-[#FCFBF8]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stg.details.map((dt, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/70 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{dt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-[#073B32] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-xl font-bold font-display">Watch This Loop in Action</h3>
            <p className="text-xs text-emerald-200 mt-1">
              Test case PS-2026-004281 across all 5 roles in our interactive 3-minute demo.
            </p>
          </div>
          <button
            onClick={() => setCurrentScreen('demoCenter')}
            className="px-6 py-3 rounded-xl bg-[#149A84] hover:bg-[#0C7A68] text-white font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Start Interactive Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
