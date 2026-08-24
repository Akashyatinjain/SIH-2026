import React from 'react';
import { 
  Users, 
  Stethoscope, 
  MapPin, 
  Radio, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Compass, 
  Activity, 
  Syringe, 
  Building2,
  FileText,
  AlertTriangle,
  Play,
  Pill,
  TestTube2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function WorkspaceDetailsPage({ onBack, onEnterDashboard, onOpenDemoStory }) {
  const { selectedWorkspace, enterWorkspace } = useApp();

  const getDetails = () => {
    switch (selectedWorkspace) {
      case 'farmer':
        return {
          title: "PashuSuraksha Farmer Workspace",
          user: "Ramesh Patil",
          role: "Livestock Owner",
          location: "Khedgaon • Baramati • Pune",
          status: "ACTIVE FARM REGISTRY",
          accent: "from-emerald-950 via-[#073B32] to-[#0A1020]",
          icon: Users,
          ctaText: "Enter Farmer Workspace →",
          capabilities: [
            { label: "Direct Sickness Reporting", desc: "5-step guided clinical symptom reporting with instant risk assessment." },
            { label: "Herd Passport Registry", desc: "Digital profiles, RFID ear tags, milk yields & breeding logs for 24 cattle." },
            { label: "Vaccination & Free Camps", desc: "Govt NADCP camp schedules, booster countdowns & vaccine certificates." },
            { label: "Local 8km Disease Alerts", desc: "Early warnings for active clusters and biosecurity checklists." },
            { label: "Digital e-Prescriptions", desc: "Doctor-prescribed medication regimens and follow-up schedules." },
            { label: "24x7 Pashu Seva IVR", desc: "Toll-free voice hotline with automated Marathi/Hindi phone reports." }
          ],
          signals: [
            { label: "Monitored Animals", val: "24 Cattle", note: "21 Healthy" },
            { label: "Urgent Attention", val: "1 Cow (Ganga)", note: "Fever & Nodules" },
            { label: "Next Vaccine Due", val: "FMD Booster", note: "In 12 Days" },
            { label: "Local Warnings", val: "1 Active Cluster", note: "Malegaon / 8km" }
          ],
          accessModules: ["Health Reporting", "Animal Registry", "Vaccination", "Treatment History", "Advisories", "Emergency Support"]
        };

      case 'fieldWorker':
        return {
          title: "Field Sentinel Operations Workspace",
          user: "Sunita Pawar",
          role: "Pashu Sakhi / Para-Veterinary Worker",
          location: "Baramati Sector 2 • Pune",
          status: "ON-DUTY (GPS ACTIVE)",
          accent: "from-teal-950 via-[#073B32] to-[#0A1020]",
          icon: Compass,
          ctaText: "Enter Field Sentinel Workspace →",
          capabilities: [
            { label: "GPS Route & Visit Timeline", desc: "Daily 4-stop clinical verification itinerary with turn-by-turn navigation." },
            { label: "RFID Tagging & Registration", desc: "Field ear-tag scanner and animal registry lookup." },
            { label: "Sudden Mortality Logging", desc: "Rapid flock mortality logging triggering district containment alarms." },
            { label: "Ring Vaccination Logistics", desc: "Cold-box temperature tracker (4.2°C) and batch administration logging." },
            { label: "Diagnostic Swab Collection", desc: "Cold-chain specimen barcode generator and courier dispatch." },
            { label: "Offline Local Storage Sync", desc: "Full offline functionality for remote villages with auto-sync." }
          ],
          signals: [
            { label: "Today's Visits", val: "4 Assigned", note: "1 Completed" },
            { label: "Target Animals", val: "18 Cattle", note: "3 Villages" },
            { label: "Cold Box Temp", val: "4.2°C", note: "Optimal Window" },
            { label: "Offline Queue", val: "0 Pending", note: "Fully Synced" }
          ],
          accessModules: ["Today's Visits", "Animal Registry", "Incident Reports", "Vaccination Drives", "Sample Collection", "Offline Queue"]
        };

      case 'vet':
        return {
          title: "Clinical Intelligence & Veterinary Console",
          user: "Dr. Anand Deshmukh",
          role: "Veterinary Officer (B.V.Sc & A.H.)",
          location: "Baramati Taluka Veterinary Hospital",
          status: "ON CALL (SECTOR LEAD)",
          accent: "from-blue-950 via-[#073B32] to-[#0A1020]",
          icon: Stethoscope,
          ctaText: "Enter Clinical Workspace →",
          capabilities: [
            { label: "Clinical Dossier Review", desc: "3-column medical workspace with animal history and photo evidence." },
            { label: "AI Preliminary Risk Triage", desc: "86/100 risk scoring with differential diagnosis probability breakdown." },
            { label: "Digital e-Prescription Dispenser", desc: "Formulary-based antimicrobial prescription issuance via SMS & App." },
            { label: "Laboratory Sample Referrals", desc: "RT-PCR / ELISA test ordering and real-time specimen tracking." },
            { label: "Tertiary Hospital Referrals", desc: "Quarantine isolation bed bookings and emergency ambulance dispatch." },
            { label: "Spatial Contagion Surveillance", desc: "Live mapping of nearby cases and cluster containment perimeters." }
          ],
          signals: [
            { label: "Active Clinical Cases", val: "128 Cases", note: "Baramati Block" },
            { label: "Urgent Triage", val: "4 Critical", note: "LSD / FMD Signals" },
            { label: "Lab Tests Pending", val: "3 Specimens", note: "RT-PCR Underway" },
            { label: "Nearby Clusters", val: "4 Emerging", note: "Surveillance Active" }
          ],
          accessModules: ["Clinical Cases", "AI Risk Triage", "Laboratory", "Hospital Referrals", "Treatment & e-Rx", "Surveillance Map"]
        };

      case 'admin':
        return {
          title: "District Animal Health Command Center",
          user: "Pune Animal Health Command",
          role: "District Surveillance Officer (DSO)",
          location: "Pune District Collectorate",
          status: "COMMAND ACTIVE (13 TALUKAS)",
          accent: "from-amber-950 via-[#0A1020] to-[#050811]",
          icon: Radio,
          ctaText: "Open District Command Center →",
          capabilities: [
            { label: "Interactive GIS Risk Map", desc: "Top 60% viewport GIS spatial map of 13 talukas with live cluster pulses." },
            { label: "Outbreak Cluster Containment", desc: "1km infected zone and 5km ring vaccination perimeter enforcement." },
            { label: "Mobile RRT Fleet Dispatch", desc: "Real-time Rapid Response Units GPS dispatch and onboard vaccine cargo." },
            { label: "Block Analytics & Weather Trends", desc: "Sugarcane harvest humidity and vector density correlations." },
            { label: "Multi-Channel Broadcast Studio", desc: "Instant SMS, App Push & IVR voice alerts to 12,000 farmers." },
            { label: "Laboratory Integration", desc: "Real-time diagnostic result feeds from DIS Aundh Pune." }
          ],
          signals: [
            { label: "Monitored Livestock", val: "1.42 Million", note: "13 Pune Talukas" },
            { label: "Active Hotspots", val: "4 Clusters", note: "Baramati Core" },
            { label: "Vaccination Rate", val: "78.4%", note: "Target 85.0%" },
            { label: "Avg Response Time", val: "2h 14m", note: "RRT Fleet Active" }
          ],
          accessModules: ["GIS Risk Map", "Spatial Outbreaks", "Trends & Analytics", "Response Teams", "Advisories Studio", "Laboratory Feeds"]
        };

      case 'stateAdmin':
        return {
          title: "State Animal Health Directorate Intelligence",
          user: "Maharashtra State Command",
          role: "Directorate of Animal Husbandry",
          location: "Central Command • Mumbai HQ",
          status: "STATEWIDE SURVEILLANCE GRID",
          accent: "from-purple-950 via-slate-900 to-[#0A1020]",
          icon: Layers,
          ctaText: "Launch State Directorate Intelligence →",
          capabilities: [
            { label: "36-District Surveillance Matrix", desc: "Real-time risk tier rankings (Critical, Elevated, Watch, Low)." },
            { label: "State Strategic Decision Answering", desc: "Instant intelligence: Where is risk rising? Where is vaccination lagging?" },
            { label: "Vaccination Deficit Analyzer", desc: "Sub-district lagging blocks identification and ring allocation." },
            { label: "Central Biologicals Stockpiles", desc: "850,000 FMD & 420,000 LSD vaccine inventory tracking across central depots." },
            { label: "Disaster Contingency Dispatch", desc: "1-click disbursement of ₹25L - ₹50L emergency collectorate funds." },
            { label: "State Gazette Policy Directives", desc: "Statewide veterinary quarantine notifications and biosecurity mandates." }
          ],
          signals: [
            { label: "High-Risk Villages", val: "17 Villages", note: "Elevated Sickness" },
            { label: "Statewide Clusters", val: "4 Active", note: "Pune & Sambhajinagar" },
            { label: "Total Reports Logged", val: "13,842", note: "98.2% Verified" },
            { label: "State Contingency", val: "₹15.00 Crore", note: "Reserve Active" }
          ],
          accessModules: ["State Overview", "District Risk Rankings", "Disease Intelligence", "Vaccination Gaps", "Resources & Allocation", "State Policies"]
        };

      default:
        return {};
    }
  };

  const details = getDetails();
  const Icon = details.icon || Users;

  return (
    <div className="min-h-[calc(100vh-60px)] bg-[#F6F3EA] py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        
        {/* Back navigation & Demo button */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-[#ECE6D6] rounded-xl text-xs font-black text-[#073B32] transition flex items-center gap-2 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Workspace Selection</span>
          </button>

          <button
            onClick={onOpenDemoStory}
            className="px-4 py-2 bg-white hover:bg-slate-50 border border-[#ECE6D6] hover:border-[#073B32] text-[#073B32] font-black rounded-xl text-xs transition shadow-xs flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Explore Demo Story Mode</span>
          </button>
        </div>

        {/* Hero Official Workspace Briefing Header */}
        <div className={`p-8 bg-gradient-to-r ${details.accent} text-white rounded-3xl shadow-xl border border-white/10 space-y-4`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-emerald-200 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{details.status}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black">{details.title}</h1>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                  {details.user} • <span className="text-white font-bold">{details.role}</span> • {details.location}
                </p>
              </div>
            </div>

            <button
              onClick={() => enterWorkspace(selectedWorkspace)}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-[#073B32] font-black rounded-2xl text-xs shadow-xl transition flex items-center justify-center gap-2 shrink-0 border border-emerald-400 group"
            >
              <span>{details.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Operational Signals KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {details.signals?.map((sig, i) => (
            <div key={i} className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                {sig.label}
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#0A1020] font-mono block">
                {sig.val}
              </span>
              <span className="text-[11px] font-bold text-[#073B32] block">
                {sig.note}
              </span>
            </div>
          ))}
        </div>

        {/* Grid: Workspace Capabilities (8 cols) & Access Level Scope (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Capabilities List (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#ECE6D6] p-6 sm:p-7 shadow-xs space-y-4">
            <h3 className="font-black text-base text-[#0A1020] border-b border-[#ECE6D6] pb-3">
              YOUR WORKSPACE CAPABILITIES & TOOLING
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.capabilities?.map((cap, i) => (
                <div key={i} className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-black text-[#073B32]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{cap.label}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Access Modules & Launch CTA (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-black text-sm text-[#0A1020] uppercase tracking-wider border-b border-[#ECE6D6] pb-2">
                Provisioned Modules
              </h3>

              <div className="space-y-2 text-xs">
                {details.accessModules?.map((mod, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-[#F6F3EA] rounded-xl border border-[#ECE6D6] font-bold text-slate-700">
                    <span>{mod}</span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Enabled</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <button
                onClick={() => enterWorkspace(selectedWorkspace)}
                className="w-full py-4 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-2xl text-xs shadow-lg transition flex items-center justify-center gap-2 border border-emerald-400"
              >
                <span>Launch Authenticated Dashboard →</span>
              </button>

              <button
                onClick={onOpenDemoStory}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition text-center"
              >
                Launch Simulated Demo Story
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
