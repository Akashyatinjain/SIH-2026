import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  PhoneCall, 
  Globe, 
  ArrowRight, 
  Menu, 
  X, 
  Gavel, 
  BookOpen, 
  Activity, 
  Info, 
  Check 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PublicHeader({ activeNav = "home", onNavigate }) {
  const { 
    language, 
    setLanguage, 
    setCurrentScreen, 
    setIsDemoModalOpen, 
    setIsIVROpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (screen) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(screen);
    } else {
      setCurrentScreen(screen);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#09101E]/95 backdrop-blur-md border-b border-slate-800/80 text-white">
      {/* Main Public Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-2.5 sm:gap-3 group text-left transition-transform hover:scale-[1.01] min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#149A84] to-[#073B32] p-0.5 shadow-lg shadow-teal-900/40 flex items-center justify-center border border-teal-400/30 shrink-0">
            <div className="w-full h-full bg-[#09101E] rounded-[10px] flex items-center justify-center">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#149A84] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-white font-display truncate">JIVSANKET</span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30 px-1 sm:px-1.5 py-0.5 rounded shrink-0">Govt of Maharashtra</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 tracking-tight font-medium hidden md:block truncate">
              Animal Health Intelligence & Disease Early Warning Network
            </p>
          </div>
        </button>

        {/* Desktop Public Navigation Links */}
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
          <button 
            onClick={() => handleNav('judgeMode')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 ${
              activeNav === 'judgeMode' 
                ? 'bg-amber-500 text-slate-950 shadow-sm' 
                : 'text-amber-300 hover:bg-amber-500/20'
            }`}
          >
            <Gavel className="w-3.5 h-3.5" />
            <span>Judge Mode</span>
          </button>
        </nav>

        {/* Right CTA Actions (Responsive) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Toll-free IVR Trigger (Desktop / Tablet) */}
          <button
            onClick={() => setIsIVROpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:border-teal-500/50 hover:text-teal-300 transition-colors"
            title="Toll-Free Helpline 1800-180-1551"
          >
            <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden md:inline">1800-180-1551</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-[11px] sm:text-xs">
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-semibold transition-colors ${language === 'en' ? 'bg-[#149A84] text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-semibold transition-colors ${language === 'mr' ? 'bg-[#149A84] text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              मराठी
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-semibold transition-colors ${language === 'hi' ? 'bg-[#149A84] text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              हिंदी
            </button>
          </div>

          {/* Access Platform CTA */}
          <button
            onClick={() => handleNav('login')}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#149A84] to-[#0C7A68] hover:from-[#0C7A68] hover:to-[#073B32] text-white text-xs font-bold shadow-md shadow-teal-900/30 transition-all active:scale-95 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Access Platform</span>
            <span className="sm:hidden">Login</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09101E] border-b border-slate-800 px-4 py-4 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => handleNav('home')}
              className={`p-3 rounded-xl border text-left flex items-center gap-2 ${
                activeNav === 'home' ? 'bg-[#149A84] text-white border-[#149A84]' : 'bg-slate-900/90 text-slate-300 border-slate-800'
              }`}
            >
              <Activity className="w-4 h-4 text-teal-400" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`p-3 rounded-xl border text-left flex items-center gap-2 ${
                activeNav === 'about' ? 'bg-[#149A84] text-white border-[#149A84]' : 'bg-slate-900/90 text-slate-300 border-slate-800'
              }`}
            >
              <Info className="w-4 h-4 text-blue-400" />
              <span>About Architecture</span>
            </button>

            <button
              onClick={() => handleNav('howItWorks')}
              className={`p-3 rounded-xl border text-left flex items-center gap-2 ${
                activeNav === 'howItWorks' ? 'bg-[#149A84] text-white border-[#149A84]' : 'bg-slate-900/90 text-slate-300 border-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>How It Works</span>
            </button>

            <button
              onClick={() => handleNav('impact')}
              className={`p-3 rounded-xl border text-left flex items-center gap-2 ${
                activeNav === 'impact' ? 'bg-[#149A84] text-white border-[#149A84]' : 'bg-slate-900/90 text-slate-300 border-slate-800'
              }`}
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Impact Benchmarks</span>
            </button>

            <button
              onClick={() => handleNav('judgeMode')}
              className={`p-3 rounded-xl border text-left flex items-center gap-2 col-span-2 ${
                activeNav === 'judgeMode' ? 'bg-amber-500 text-slate-950 border-amber-400 font-black' : 'bg-amber-500/10 text-amber-300 border-amber-500/40'
              }`}
            >
              <Gavel className="w-4 h-4 text-amber-400" />
              <span>Judge Mode (20-Step Walkthrough)</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsIVROpen(true);
              }}
              className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-teal-300 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Voice Helpline: 1800-180-1551</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentScreen('demoCenter');
              }}
              className="py-2.5 px-4 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Try Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
