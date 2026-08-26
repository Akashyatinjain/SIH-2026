import React from 'react';
import PublicHeader from '../layout/PublicHeader';
import PublicFooter from '../layout/PublicFooter';
import { 
  Shield, 
  Target, 
  AlertTriangle, 
  Layers, 
  Activity, 
  Zap, 
  Database, 
  Server, 
  Smartphone, 
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Cpu
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function AboutPage() {
  const { setCurrentScreen } = useApp();

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#0A1020] flex flex-col font-sans">
      <PublicHeader activeNav="about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#09101E] to-[#073B32] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>SIH 2026 Problem Statement 26128</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white max-w-3xl mx-auto leading-tight">
            Livestock Health Intelligence & Early Disease Surveillance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            JIVSANKET is a state digital infrastructure engineered for the Department of Animal Husbandry, Government of Maharashtra, connecting 36 districts from village symptom to state response.
          </p>
        </div>
      </section>

      {/* Problem Definition Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073B32] font-display">
            The Problem: Fragmented Veterinary Response in Rural Ecosystems
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            In rural livestock rearing, diseases spread faster than administrative paperwork. Animal-health problems don't originate in dashboards—they begin silently in remote sheds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Late Symptom Reporting</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Farmers traditionally report symptoms 4–7 days after disease onset, allowing viral diseases like Lumpy Skin Disease (LSD) and FMD to multiply exponentially across neighboring herds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Data Fragmentation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vaccination records, clinical prescriptions, laboratory PCR results, and mortality logs exist in disconnected paper registers across dispensaries and taluka offices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Low-Connectivity Barriers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Para-veterinary workers (Pashu Sakhis) operate in zero-cellular network zones with no offline-first tooling, creating blind spots in central outbreak detection.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Architecture */}
      <section className="bg-[#09101E] text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Multi-Tier Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              From First Symptom to Coordinated Containment
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              A 5-layer intelligence architecture linking farmers, field sentinels, veterinarians, district command centers, and the state directorate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-teal-400 font-bold">01 • INPUT</div>
              <h3 className="font-bold text-sm text-white">Rural Channels</h3>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Offline-ready Progressive App</li>
                <li>• Toll-Free 1800-180-1551 IVR</li>
                <li>• Pashu Sakhi Field Kit</li>
              </ul>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-teal-400 font-bold">02 • INGESTION</div>
              <h3 className="font-bold text-sm text-white">Unified Ledger</h3>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• RFID Animal Digital Passport</li>
                <li>• Automated Cold-Chain Barcodes</li>
                <li>• Geocoded Incident Telemetry</li>
              </ul>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-teal-400 font-bold">03 • INTELLIGENCE</div>
              <h3 className="font-bold text-sm text-white">Decision Logic</h3>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Spatial Cluster Detector (5km)</li>
                <li>• Differential Clinical Screener</li>
                <li>• Environmental Vector Index</li>
              </ul>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-teal-400 font-bold">04 • RESPONSE</div>
              <h3 className="font-bold text-sm text-white">Clinical Action</h3>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Rapid Response Team Dispatch</li>
                <li>• Diagnostic Lab Swab Order</li>
                <li>• Ring Quarantine & Treatment</li>
              </ul>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-teal-400 font-bold">05 • STRATEGY</div>
              <h3 className="font-bold text-sm text-white">State Directorate</h3>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• 36 District Heatmaps</li>
                <li>• Vaccine Demand Planning</li>
                <li>• Multilingual Ring SMS / IVR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIH Evaluation Alignment Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-[#073B32] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-emerald-400/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Interactive Evaluation Ready</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Experience the Connected Surveillance Demo
            </h2>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Step through a live simulated outbreak event in Baramati Taluka, Pune—from Ramesh Patil's sick cow Ganga to statewide vaccine reallocation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentScreen('demoCenter')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#149A84] hover:bg-[#0C7A68] text-white font-bold text-sm shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Launch 3-Min Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentScreen('login')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-sm border border-emerald-500/30 transition-all text-center"
            >
              <span>Access Workspaces</span>
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}

function SparklesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  );
}
