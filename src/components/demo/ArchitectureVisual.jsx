import React, { useState } from 'react';
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
  CheckCircle2,
  Lock,
  Activity,
  MapPin,
  Clock,
  Syringe,
  AlertTriangle,
  CloudRain,
  SlidersHorizontal,
  FileCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function ArchitectureVisual() {
  const [activeTab, setActiveTab] = useState('diagram1');

  return (
    <div className="space-y-8 text-[#0A1020] font-sans">
      
      {/* Master Top Container */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
              Enterprise System Engineering Spec
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#073B32] font-display mt-1">
              PashuSuraksha Technical Architecture &amp; Closed-Loop Surveillance
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Dual-view engineering specification: Scalable 6-layer platform infrastructure &amp; 8-stage operational journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
              <button
                onClick={() => setActiveTab('diagram1')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'diagram1' ? 'bg-white text-emerald-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                🏗️ Diagram 1: System Architecture
              </button>
              <button
                onClick={() => setActiveTab('diagram2')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'diagram2' ? 'bg-white text-emerald-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                🔄 Diagram 2: Surveillance Flow
              </button>
              <button
                onClick={() => setActiveTab('deepdives')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'deepdives' ? 'bg-white text-emerald-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                🔬 Deep-Dives &amp; RBAC
              </button>
            </div>

            <a
              href="/architecture.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-[#047857] hover:bg-[#065F46] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>📐 Fullscreen Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Master Case Context Ribbon */}
        <div className="bg-[#073B32] text-white p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#047857] text-emerald-200 px-2 py-0.5 rounded font-mono font-bold text-[10px]">
              MASTER CASE TRACE
            </span>
            <strong className="text-white">Case #PS-2026-004281</strong>
            <span className="text-emerald-200">• Ganga (Gir Cow, RFID: MH-PUN-0241)</span>
            <span className="text-emerald-200">• Farmer: Ramesh Patil (Baramati, Pune)</span>
          </div>
          <div className="text-amber-300 font-mono font-bold text-[11px]">
            Resolution SLA: &lt; 2 Hours (100% Closed Loop)
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: DIAGRAM 1 — 6-LAYER PLATFORM ARCHITECTURE */}
        {/* ========================================================================= */}
        {activeTab === 'diagram1' && (
          <div className="space-y-3.5 relative">
            
            {/* LAYER 1: DATA SOURCES & MULTI-CHANNEL CLIENTS */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">LAYER 1</span>
                  <span>DATA SOURCES &amp; CLIENT INGESTION</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Offline-First • Low-Bandwidth</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Farmer Mobile PWA</span>
                  </div>
                  <p className="text-[11px] text-slate-600">60s Sickness Wizard &amp; Herd Passport (24 cattle)</p>
                  <span className="text-[9px] font-mono text-slate-400 block pt-1">HTTPS / ServiceWorker</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-900 font-bold">
                    <PhoneCall className="w-3.5 h-3.5 text-purple-700" />
                    <span>Toll-Free Voice IVR</span>
                  </div>
                  <p className="text-[11px] text-slate-600">1800-180-1551 Marathi/Hindi Audio Telephony</p>
                  <span className="text-[9px] font-mono text-slate-400 block pt-1">SIP Trunk / Twilio / REST</span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-950 font-bold">
                    <Users className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Field Worker Kit</span>
                  </div>
                  <p className="text-[11px] text-slate-700">134.2kHz RFID Scanner &amp; Swab Barcoding</p>
                  <span className="text-[9px] font-mono text-amber-800 font-bold block pt-1">LocalSync.js (IndexedDB CRDT)</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-900 font-bold">
                    <Stethoscope className="w-3.5 h-3.5 text-blue-700" />
                    <span>Clinical Vet Console</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Dr. Anand Deshmukh Case Dossier &amp; e-Rx</p>
                  <span className="text-[9px] font-mono text-slate-400 block pt-1">HTTPS / JWT Secure Session</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-pink-900 font-bold">
                    <Building2 className="w-3.5 h-3.5 text-pink-700" />
                    <span>Command Dashboards</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Pune District HQ &amp; State Directorate GIS</p>
                  <span className="text-[9px] font-mono text-slate-400 block pt-1">WSS Telemetry Feeds</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <span className="text-[10px] font-mono font-bold">▼ HTTPS / WSS / OFFLINE CRDT BATCHES ▼</span>
            </div>

            {/* LAYER 2: ACCESS, SECURITY & INGESTION */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sky-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900">LAYER 2</span>
                  <span>ACCESS, SECURITY &amp; INGESTION LAYER</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">TLS 1.3 • RBAC • CRDT Ingest</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs text-slate-800">
                <div className="bg-sky-50/50 p-3 rounded-xl border border-sky-100 font-medium">
                  <span className="text-[10px] text-sky-700 block font-mono font-bold">1. API GATEWAY &amp; PROXY</span>
                  Nginx / Cloudflare Edge, Rate-limiting, DDoS Shield
                </div>
                <div className="bg-sky-50/50 p-3 rounded-xl border border-sky-100 font-medium">
                  <span className="text-[10px] text-sky-700 block font-mono font-bold">2. IDENTITY &amp; RBAC (5 ROLES)</span>
                  OTP authentication, JWT tokens, session guard
                </div>
                <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 font-medium">
                  <span className="text-[10px] text-emerald-800 block font-mono font-bold">3. OFFLINE SYNC MANAGER</span>
                  CRDT timestamp reconciliation &amp; batch deduplication
                </div>
                <div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100 font-medium">
                  <span className="text-[10px] text-purple-800 block font-mono font-bold">4. IVR INGESTION PIPELINE</span>
                  Voice Audio ➔ ASR ➔ Feeds same report queue
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <span className="text-[10px] font-mono font-bold">▼ INTERNAL gRPC / SECURE REST CALLS ▼</span>
            </div>

            {/* LAYER 3: CORE PLATFORM SERVICES */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900">LAYER 3</span>
                  <span>CORE PLATFORM MICROSERVICES</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Domain Services</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-950 block text-[11px]">1. Animal Registry</strong>
                  <p className="text-[10px] text-slate-500">12-Digit RFID &amp; INAPH sync</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-950 block text-[11px]">2. Health Reporting</strong>
                  <p className="text-[10px] text-slate-500">App, IVR, Field normalizer</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-950 block text-[11px]">3. Case Management</strong>
                  <p className="text-[10px] text-slate-500">Ledger #PS-2026-004281</p>
                </div>
                <div className="bg-purple-50/70 p-2.5 rounded-xl border border-purple-200">
                  <strong className="text-purple-950 block text-[11px]">4. Diagnostic LIMS</strong>
                  <p className="text-[10px] text-slate-500">8-Step custody &amp; 4.2°C IoT</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-950 block text-[11px]">5. Vaccination Svc</strong>
                  <p className="text-[10px] text-slate-500">Demo Plan: 2k Ring Doses</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-950 block text-[11px]">6. Advisory Dispatch</strong>
                  <p className="text-[10px] text-slate-500">5km Ring SMS &amp; Meghdoot</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <span className="text-[10px] font-mono font-bold">▼ DETERMINISTIC RULE EVALUATION &amp; SPATIAL QUERIES ▼</span>
            </div>

            {/* LAYER 4: DECISION SUPPORT INTELLIGENCE */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 border-2 border-amber-400 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-white">LAYER 4</span>
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>DECISION SUPPORT INTELLIGENCE (7 AUDITABLE MODULES)</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-800">100% Auditable • 0% Hallucination</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-xs">
                <div className="bg-red-50 p-2.5 rounded-xl border border-red-200">
                  <span className="text-[9px] font-bold text-red-700 block uppercase">1. Clinical Triage</span>
                  <span className="font-bold text-red-950 text-[11px] block">Risk 86/100</span>
                  <p className="text-[10px] text-slate-600">Fever + Nodules + Milk Drop</p>
                </div>

                <div className="bg-orange-50 p-2.5 rounded-xl border border-orange-200">
                  <span className="text-[9px] font-bold text-orange-700 block uppercase">2. Spatial GIS</span>
                  <span className="font-bold text-orange-950 text-[11px] block">5km Cluster</span>
                  <p className="text-[10px] text-slate-600">7 cases in Baramati</p>
                </div>

                <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-200">
                  <span className="text-[9px] font-bold text-sky-700 block uppercase">3. Temporal Trends</span>
                  <span className="font-bold text-sky-950 text-[11px] block">+3.2x Velocity</span>
                  <p className="text-[10px] text-slate-600">+240% baseline deviation</p>
                </div>

                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                  <span className="text-[9px] font-bold text-amber-700 block uppercase">4. Vaccine Gap</span>
                  <span className="font-bold text-amber-950 text-[11px] block">78.4% Deficit</span>
                  <p className="text-[10px] text-slate-600">Demo Plan: 2k ring doses</p>
                </div>

                <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                  <span className="text-[9px] font-bold text-rose-700 block uppercase">5. Mortality Watch</span>
                  <span className="font-bold text-rose-950 text-[11px] block">Watchdog</span>
                  <p className="text-[10px] text-slate-600">Sudden deaths (≥3/24h) alarm</p>
                </div>

                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  <span className="text-[9px] font-bold text-emerald-700 block uppercase">6. Weather Context</span>
                  <span className="font-bold text-emerald-950 text-[11px] block">Risk Index 8.2</span>
                  <p className="text-[10px] text-slate-600">Contextual Prioritization</p>
                </div>

                <div className="bg-purple-50 p-2.5 rounded-xl border border-purple-200">
                  <span className="text-[9px] font-bold text-purple-700 block uppercase">7. Prioritization</span>
                  <span className="font-bold text-purple-950 text-[11px] block">&lt;2h SLA</span>
                  <p className="text-[10px] text-slate-600">Routes nearest Vet Unit</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <span className="text-[10px] font-mono font-bold">▼ PERSISTENCE, CACHE READS &amp; TELEMETRY INGESTION ▼</span>
            </div>

            {/* LAYER 5: UNIFIED DATA PLATFORM & STORAGE */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900">LAYER 5</span>
                  <span>UNIFIED LIVESTOCK HEALTH DATA PLATFORM</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">PostgreSQL + PostGIS • Redis • TimescaleDB</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs text-slate-800">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-purple-800 block font-mono font-bold">🗄️ PostgreSQL + PostGIS</span>
                  Animal RFID &amp; Village Polygons (EPSG:4326)
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-purple-800 block font-mono font-bold">⚡ Redis 7.2 In-Memory</span>
                  Hot 5km cluster cache &lt;1ms
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-purple-800 block font-mono font-bold">📈 TimescaleDB</span>
                  Cold-chain IoT (4.2°C) series
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-purple-800 block font-mono font-bold">📬 Async Message Bus</span>
                  Kafka / BullMQ worker queues
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-purple-800 block font-mono font-bold">📦 MinIO / S3 Store</span>
                  Encrypted lesion photos &amp; PDFs
                </div>
                <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 block font-mono font-bold">🌐 National DAHD API</span>
                  Bharat Pashudhan connector
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <span className="text-[10px] font-mono font-bold">▼ ROLE-BASED ACCESS CONTROL (RBAC) BOUNDARIES ▼</span>
            </div>

            {/* LAYER 6: ROLE-SPECIFIC APPLICATIONS */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-300 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-700 text-white">LAYER 6</span>
                  <span>ROLE-SPECIFIC APPLICATIONS &amp; PERMISSION BOUNDARIES</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">5 Isolated Roles</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-emerald-950 block text-[11px]">1. Farmer View</strong>
                  <p className="text-[10px] text-slate-600">Own animals &amp; reports only</p>
                </div>
                <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200">
                  <strong className="text-emerald-950 block text-[11px]">2. Field Worker View</strong>
                  <p className="text-[10px] text-slate-600">Assigned village cluster</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-950 block text-[11px]">3. Veterinarian View</strong>
                  <p className="text-[10px] text-slate-600">Taluka clinical caseload</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-pink-950 block text-[11px]">4. District Officer View</strong>
                  <p className="text-[10px] text-slate-600">Pune District jurisdiction</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-purple-950 block text-[11px]">5. State Director View</strong>
                  <p className="text-[10px] text-slate-600">Maharashtra 36 districts</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: DIAGRAM 2 — 8-STAGE END-TO-END OPERATIONAL JOURNEY */}
        {/* ========================================================================= */}
        {activeTab === 'diagram2' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#047857] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 1</span>
                  <span className="text-[10px] text-emerald-800 font-mono font-bold">0-15 Min</span>
                </div>
                <h4 className="font-bold text-xs text-emerald-950">Rural Ingestion</h4>
                <p className="text-[11px] text-slate-700">Ramesh Patil reports Ganga via 60s wizard / 1800 IVR. Creates Case #PS-2026-004281.</p>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#D97706] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 2</span>
                  <span className="text-[10px] text-amber-800 font-mono font-bold">&lt;1 Sec</span>
                </div>
                <h4 className="font-bold text-xs text-amber-950">Preliminary Risk Triage</h4>
                <p className="text-[11px] text-slate-700">Symptom scoring flags Risk 86/100 (High). Weather feed links vector context (8.2/10).</p>
              </div>

              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#2563EB] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 3</span>
                  <span className="text-[10px] text-blue-800 font-mono font-bold">&lt;45 Min</span>
                </div>
                <h4 className="font-bold text-xs text-blue-950">Clinical Vet Review</h4>
                <p className="text-[11px] text-slate-700">Dr. Anand signs e-Rx (Flunixin), shed quarantine order &amp; tasks swab collection.</p>
              </div>

              <div className="p-3.5 bg-purple-50 border border-purple-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#7C3AED] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 4</span>
                  <span className="text-[10px] text-purple-800 font-mono font-bold">2-4 Hours</span>
                </div>
                <h4 className="font-bold text-xs text-purple-950">Lab PCR Confirmation</h4>
                <p className="text-[11px] text-slate-700">Swab #PS-SMP-0198 in 4.2°C cold chain tests POSITIVE for LSDV at Aundh Pune Lab.</p>
              </div>

              <div className="p-3.5 bg-orange-50 border border-orange-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#EA580C] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 5</span>
                  <span className="text-[10px] text-orange-800 font-mono font-bold">Real-Time</span>
                </div>
                <h4 className="font-bold text-xs text-orange-950">Spatial Cluster Radar</h4>
                <p className="text-[11px] text-slate-700">PostGIS flags 7 cases in 5km Baramati radius (+3.2x velocity). Identifies 78.4% vaccine gap.</p>
              </div>

              <div className="p-3.5 bg-pink-50 border border-pink-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#BE185D] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 6</span>
                  <span className="text-[10px] text-pink-800 font-mono font-bold">&lt;1 Hour</span>
                </div>
                <h4 className="font-bold text-xs text-pink-950">District Containment</h4>
                <p className="text-[11px] text-slate-700">Pune HQ authorizes Demo 2,000 ring doses. State releases 50k buffer + ₹25L funds.</p>
              </div>

              <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#0284C7] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 7</span>
                  <span className="text-[10px] text-sky-800 font-mono font-bold">&lt;2 Min</span>
                </div>
                <h4 className="font-bold text-xs text-sky-950">5km Ring SMS Broadcast</h4>
                <p className="text-[11px] text-slate-700">Meghdoot gateway sends 1,420 Marathi SMS advising movement freeze &amp; free vaccination.</p>
              </div>

              <div className="p-3.5 bg-emerald-100/70 border border-emerald-300 rounded-2xl space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#047857] text-white px-2 py-0.5 rounded text-[10px] font-bold">STAGE 8</span>
                  <span className="text-[10px] text-emerald-950 font-mono font-bold">↺ Loop</span>
                </div>
                <h4 className="font-bold text-xs text-emerald-950">Surveillance Loop ↺</h4>
                <p className="text-[11px] text-slate-700">Ganga recovers in 10 days; R0 drops 3.2 ➔ 0.4. Herd immunity restored &gt;85%.</p>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: DEEP-DIVES & RBAC MATRIX */}
        {/* ========================================================================= */}
        {activeTab === 'deepdives' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* IVR Flow */}
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
              <h4 className="font-bold text-purple-950 text-xs uppercase font-mono">
                📞 Toll-Free Voice IVR Ingestion Architecture
              </h4>
              <p className="text-[11px] text-slate-700">
                1800-180-1551 Call ➔ Marathi/Hindi Voice Prompt ➔ Speech-to-Text Transcription ➔ Symptom Extraction ➔ Unified PostgreSQL Case Ledger.
              </p>
            </div>

            {/* Offline Sync */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <h4 className="font-bold text-emerald-950 text-xs uppercase font-mono">
                🛵 Offline-First CRDT Field Synchronization
              </h4>
              <p className="text-[11px] text-slate-700">
                Remote Cowshed Data Entry ➔ Local IndexedDB Queue ➔ Signal Detection ➔ Conflict-Free Resolution (CRDT) ➔ Zero Ingestion Loss.
              </p>
            </div>

            {/* Lab Custody */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
              <h4 className="font-bold text-blue-950 text-xs uppercase font-mono">
                🧪 8-Step Diagnostic Lab Chain of Custody
              </h4>
              <p className="text-[11px] text-slate-700">
                Doctor Order ➔ Swab Collection ➔ Barcode #PS-SMP-0198 ➔ 4.2°C Cold Chain IoT ➔ Aundh RT-PCR Test ➔ Senior Microbiologist Escalation.
              </p>
            </div>

            {/* Weather Risk */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <h4 className="font-bold text-amber-950 text-xs uppercase font-mono">
                🌦️ Scientifically Defensible Environmental Risk
              </h4>
              <p className="text-[11px] text-slate-700">
                IMD Humidity (78%), Rainfall &amp; Season correlate vector risk (8.2/10) to support surveillance prioritization without speculative causal overclaims.
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
