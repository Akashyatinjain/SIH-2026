import React from 'react';
import { 
  Users, 
  Smartphone, 
  PhoneCall, 
  WifiOff, 
  Database, 
  Cpu, 
  Zap, 
  Stethoscope, 
  TestTube2, 
  Truck, 
  Radio, 
  Building2, 
  Layers, 
  ShieldCheck, 
  ArrowDown, 
  RefreshCw,
  Server,
  Cloud,
  CheckCircle2
} from 'lucide-react';

export default function ArchitectureVisual() {
  return (
    <div className="space-y-10 text-[#0A1020] font-sans">
      
      {/* 1. Master 5-Tier Surveillance Architecture */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
              System Engineering Spec
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#073B32] font-display mt-1">
              End-to-End Surveillance & Intelligence Architecture
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Data propagation from low-bandwidth rural farm edge to centralized strategic state governance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Closed-Loop Reactive System</span>
          </div>
        </div>

        {/* 5-Tier Interactive Architecture Flow */}
        <div className="space-y-4 relative">
          
          {/* TIER 1: INPUT LAYER */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider">
                TIER 1 • DATA INGESTION & RURAL EDGE CHANNELS
              </span>
              <span className="text-[10px] text-slate-400">Offline-First Capable</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-teal-300 font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>Farmer Mobile App</span>
                </div>
                <p className="text-[11px] text-slate-300">5-step guided reporting, photo capture & GPS tagging</p>
              </div>

              <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-teal-300 font-bold">
                  <PhoneCall className="w-4 h-4" />
                  <span>Toll-Free 1800 IVR</span>
                </div>
                <p className="text-[11px] text-slate-300">Automated regional Marathi/Hindi speech telephony</p>
              </div>

              <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-teal-300 font-bold">
                  <Users className="w-4 h-4" />
                  <span>Pashu Sakhi Field Kit</span>
                </div>
                <p className="text-[11px] text-slate-300">RFID wand scanning, swab barcoding & mortality logs</p>
              </div>

              <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-teal-300 font-bold">
                  <WifiOff className="w-4 h-4" />
                  <span>Offline Local Storage</span>
                </div>
                <p className="text-[11px] text-slate-300">Encrypted client queue auto-syncing upon signal restore</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-1">
            <ArrowDown className="w-5 h-5 text-teal-700 animate-bounce" />
          </div>

          {/* TIER 2: DATA NORMALIZATION & TELEMETRY */}
          <div className="p-5 rounded-2xl bg-[#F6F3EA] border border-slate-300 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                TIER 2 • UNIFIED DATA FABRIC & LEDGER
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Immutable Schema</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-800">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 font-medium">
                <span className="text-[10px] text-slate-400 block font-mono">ANIMAL PASSPORT</span>
                RFID ID, breed, health history
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 font-medium">
                <span className="text-[10px] text-slate-400 block font-mono">DIAGNOSTIC PIPELINE</span>
                Barcode, sample type, cold-chain temp
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 font-medium">
                <span className="text-[10px] text-slate-400 block font-mono">SPATIAL INDEX</span>
                Lat/Lng coordinates, 8km radius cluster
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 font-medium">
                <span className="text-[10px] text-slate-400 block font-mono">ENVIRONMENTAL CONTEXT</span>
                Humidity, rainfall, vector density index
              </div>
            </div>
          </div>

          <div className="flex justify-center my-1">
            <ArrowDown className="w-5 h-5 text-teal-700 animate-bounce" />
          </div>

          {/* TIER 3: INTELLIGENCE ENGINE */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#073B32] to-[#0A1020] text-white border border-teal-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>TIER 3 • DETERMINISTIC DECISION LOGIC ENGINE</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-300">Deterministic & Auditable</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 space-y-1">
                <span className="font-bold text-teal-300 text-xs">Spatial Clustering (5km)</span>
                <p className="text-[11px] text-slate-300">Auto-triggers alert when ≥3 similar reports are logged within 5km radius in 7 days</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 space-y-1">
                <span className="font-bold text-teal-300 text-xs">Clinical Risk Scoring</span>
                <p className="text-[11px] text-slate-300">Scores symptom severity (86/100) and calculates differential probabilities</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 space-y-1">
                <span className="font-bold text-teal-300 text-xs">Vaccination Gap Detector</span>
                <p className="text-[11px] text-slate-300">Flags talukas where coverage drops below 80% during active vector seasons</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-1">
            <ArrowDown className="w-5 h-5 text-teal-700 animate-bounce" />
          </div>

          {/* TIER 4: ACTION & TACTICAL RESPONSE */}
          <div className="p-5 rounded-2xl bg-white border border-slate-300 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider">
                TIER 4 • CLINICAL & TACTICAL EXECUTION
              </span>
              <span className="text-[10px] text-slate-500">Coordinated Response</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
                <strong className="text-blue-950 block font-bold">Veterinarian e-Prescription</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">Doctor-signed antimicrobials & shed quarantine order</p>
              </div>

              <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200">
                <strong className="text-purple-950 block font-bold">Diagnostic Lab Dispatch</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">Cold-chain courier routes swab directly to Aundh Lab</p>
              </div>

              <div className="p-3 bg-red-50/70 rounded-xl border border-red-200">
                <strong className="text-red-950 block font-bold">Rapid Response Unit</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">Mobile polyclinic mobilized to containment epicenter</p>
              </div>

              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
                <strong className="text-emerald-950 block font-bold">Ring Vaccination & Advisory</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">5km buffer vaccination + regional Marathi SMS broadcast</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-1">
            <ArrowDown className="w-5 h-5 text-teal-700 animate-bounce" />
          </div>

          {/* TIER 5: STATE GOVERNANCE */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950 to-slate-950 text-white border border-purple-900 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                TIER 5 • STATE STRATEGIC GOVERNANCE & POLICY
              </span>
              <span className="text-[10px] text-slate-400">Maharashtra Directorate HQ</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/60">
                <strong className="text-white block font-bold">36-District Surveillance Heatmap</strong>
                <p className="text-[11px] text-slate-300 mt-0.5">District ranking by active cluster density & reproduction rate</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/60">
                <strong className="text-white block font-bold">Predictive Buffer Logistics</strong>
                <p className="text-[11px] text-slate-300 mt-0.5">Reallocates state vaccine vials, test kits & Mobile Vet Units</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-800/60">
                <strong className="text-white block font-bold">Zoonotic & Economic Defense</strong>
                <p className="text-[11px] text-slate-300 mt-0.5">Prevents human transmission spillover & dairy livelihood collapse</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Section 74: OFFLINE-FIRST ARCHITECTURE DIAGRAM */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
            Low-Connectivity Tolerance
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#073B32] font-display mt-1">
            Rural Offline-First Data Synchronization Architecture
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            How PashuSuraksha operates seamlessly in zero-connectivity village cowsheds without data loss.
          </p>
        </div>

        {/* Offline Steps Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
          <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono font-bold text-teal-400">STEP 1</span>
            <h4 className="font-bold text-xs">Field Device</h4>
            <p className="text-[11px] text-slate-400">Pashu Sakhi opens offline form in remote shed</p>
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono font-bold text-teal-400">STEP 2</span>
            <h4 className="font-bold text-xs">Local Queue</h4>
            <p className="text-[11px] text-slate-400">Report, photos & RFID tagged locally</p>
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono font-bold text-teal-400">STEP 3</span>
            <h4 className="font-bold text-xs">Offline Storage</h4>
            <p className="text-[11px] text-slate-400">Encrypted client storage with SHA-256 integrity check</p>
          </div>

          <div className="p-4 bg-teal-950 text-white rounded-2xl border border-teal-700 space-y-1.5">
            <span className="text-xs font-mono font-bold text-emerald-300">STEP 4</span>
            <h4 className="font-bold text-xs">Signal Restored</h4>
            <p className="text-[11px] text-emerald-200">Device detects 2G/4G or Gram Panchayat Wi-Fi</p>
          </div>

          <div className="p-4 bg-teal-950 text-white rounded-2xl border border-teal-700 space-y-1.5">
            <span className="text-xs font-mono font-bold text-emerald-300">STEP 5</span>
            <h4 className="font-bold text-xs">Secure Sync</h4>
            <p className="text-[11px] text-emerald-200">Atomic upload with idempotent reconciliation</p>
          </div>

          <div className="p-4 bg-[#073B32] text-white rounded-2xl border border-emerald-500 space-y-1.5">
            <span className="text-xs font-mono font-bold text-emerald-200">STEP 6</span>
            <h4 className="font-bold text-xs">Central Grid</h4>
            <p className="text-[11px] text-emerald-100">GIS map & District Command updated immediately</p>
          </div>
        </div>
      </div>

    </div>
  );
}
