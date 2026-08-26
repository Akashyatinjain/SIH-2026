import React from 'react';
import { Shield, Sparkles, PhoneCall, Globe, ArrowRight, Activity } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PublicHeader({ activeNav = "home", onNavigate }) {
  const { 
    language, 
    setLanguage, 
    setCurrentScreen, 
    setIsDemoModalOpen, 
    setIsIVROpen,
    setJudgeModeActive
  } = useApp();

  const handleNav = (screen) => {
    if (onNavigate) {
      onNavigate(screen);
    } else {
      setCurrentScreen(screen);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#09101E]/95 backdrop-blur-md border-b border-slate-800/80 text-white">
      {/* Official Government Flag Bar */}
      <div className="bg-[#073B32] text-xs py-1.5 px-4 text-emerald-100 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide">GOVERNMENT OF MAHARASHTRA • DEPARTMENT OF ANIMAL HUSBANDRY</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-emerald-200">
            <span className="bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-700/50">SIH 2026 • Problem Statement 26128</span>
            <span className="text-emerald-300 font-mono">🟢 Surveillance: Active (36 Districts)</span>
          </div>
        </div>
      </div>

      {/* Main Public Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-3 group text-left transition-transform hover:scale-[1.01]"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#149A84] to-[#073B32] p-0.5 shadow-lg shadow-teal-900/40 flex items-center justify-center border border-teal-400/30">
            <div className="w-full h-full bg-[#09101E] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#149A84] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-display">PASHUSURAKSHA</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30 px-1.5 py-0.5 rounded">Govt of MH</span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-tight font-medium hidden md:block">
              Livestock Health Intelligence & Early Warning Network
            </p>
          </div>
        </button>

        {/* Public Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
          <button 
            onClick={() => handleNav('home')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'home' 
                ? 'bg-[#149A84] text-white shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('about')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'about' 
                ? 'bg-[#149A84] text-white shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('howItWorks')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'howItWorks' 
                ? 'bg-[#149A84] text-white shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNav('impact')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'impact' 
                ? 'bg-[#149A84] text-white shadow-sm' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Impact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Toll-free IVR Trigger */}
          <button
            onClick={() => setIsIVROpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:border-teal-500/50 hover:text-teal-300 transition-colors"
            title="Simulated 24/7 Toll-Free Voice Line"
          >
            <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
            <span>1800-180-1551</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded font-semibold transition-colors ${language === 'en' ? 'bg-[#149A84] text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-2 py-1 rounded font-semibold transition-colors ${language === 'mr' ? 'bg-[#149A84] text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              मराठी
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded font-semibold transition-colors ${language === 'hi' ? 'bg-[#149A84] text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              हिंदी
            </button>
          </div>

          {/* Try Demo CTA Button (First-Class Feature) */}
          <button
            onClick={() => {
              setIsDemoModalOpen(false);
              setCurrentScreen('demoCenter');
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 text-xs font-bold transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Try Demo</span>
          </button>

          {/* Access Platform CTA */}
          <button
            onClick={() => handleNav('login')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#149A84] to-[#0C7A68] hover:from-[#0C7A68] hover:to-[#073B32] text-white text-xs font-bold shadow-md shadow-teal-900/30 transition-all active:scale-95"
          >
            <span>Access Platform</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
