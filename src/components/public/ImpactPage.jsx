import React from 'react';
import PublicHeader from '../layout/PublicHeader';
import PublicFooter from '../layout/PublicFooter';
import { 
  TrendingDown, 
  Clock, 
  Syringe, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ImpactPage() {
  const { setCurrentScreen } = useApp();

  const impactCards = [
    {
      title: "Earlier Reporting",
      goal: "Reduce delay from symptom onset to official awareness",
      current: "Traditional: 4 to 7 Days",
      target: "With JIVSANKET: < 2 Hours",
      desc: "Farmers report in under 60 seconds via native mobile UI or regional IVR, bypassing paperwork latency.",
      icon: Clock,
      color: "emerald"
    },
    {
      title: "Faster Field Response",
      goal: "Prioritize clinical investigations based on automated triage",
      current: "Traditional: 48 to 72 Hours",
      target: "With JIVSANKET: < 4 Hours",
      desc: "Spatial clustering algorithms auto-flag high-risk zones, routing Pashu Sakhis directly to index cases.",
      icon: TrendingDown,
      color: "teal"
    },
    {
      title: "Targeted Ring Vaccination",
      goal: "Eliminate coverage gaps and cold-chain losses",
      current: "Traditional: 65–70% Blanket Coverage",
      target: "With JIVSANKET: > 90% Ring Coverage",
      desc: "GIS maps dynamically identify vulnerable herds within 5km radius of positive PCR confirmations.",
      icon: Syringe,
      color: "blue"
    },
    {
      title: "Lower Livestock Mortality",
      goal: "Prevent secondary spread and production loss",
      current: "Traditional: High Case Fatality in Outbreaks",
      target: "With JIVSANKET: Up to 60% Reduction in Fatalities",
      desc: "Early supportive therapy and bio-containment prevent devastating losses in high-yielding dairy breeds.",
      icon: ShieldCheck,
      color: "purple"
    },
    {
      title: "Evidence-Based State Planning",
      goal: "Shift from reactive crisis management to predictive logistics",
      current: "Traditional: Post-facto Annual Reports",
      target: "With JIVSANKET: Real-Time Statewide Telemetry",
      desc: "Animal Husbandry Directorate reallocates vaccine buffers, diagnostic kits, and Mobile Vet Units proactively.",
      icon: BarChart3,
      color: "amber"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#0A1020] flex flex-col font-sans">
      <PublicHeader activeNav="impact" />

      {/* Header Banner */}
      <section className="bg-[#09101E] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Impact Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
            Target Outcomes & Systemic Impact
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Designed to protect 32 million livestock across Maharashtra by transforming fragmented data into life-saving early warning signals.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 z-20 relative">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center gap-3 text-xs text-amber-900 shadow-sm">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>SIH 2026 Evaluation Note:</strong> Metrics reflect projected outcomes modeled on pilot epidemiological benchmarks for early ring-containment systems.
          </span>
        </div>
      </div>

      {/* Impact Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{card.goal}</p>
                </div>

                <div className="space-y-2 py-3 border-y border-slate-100 bg-[#FCFBF8] -mx-6 px-6">
                  <div className="text-xs text-rose-700 font-semibold flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Baseline</span>
                    <span>{card.current}</span>
                  </div>
                  <div className="text-xs text-emerald-700 font-bold flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Target</span>
                    <span>{card.target}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div className="bg-[#073B32] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-display">Evaluate the Prototype First-Hand</h3>
            <p className="text-xs text-emerald-200">
              See how one report flows through the intelligence network in our 3-minute guided evaluation.
            </p>
          </div>
          <button
            onClick={() => setCurrentScreen('demoCenter')}
            className="px-6 py-3 rounded-xl bg-[#149A84] hover:bg-[#0C7A68] text-white font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Launch Interactive Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
