import React, { useState } from 'react';
import { 
  Shield, 
  Phone, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ChevronRight, 
  Activity,
  Radio,
  Globe,
  Check,
  WifiOff
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LoginPage({ onLoginSuccess, onOpenDemoModal, onOpenDemoCenter }) {
  const { setCurrentScreen, language, setLanguage, setIsDemoModalOpen } = useApp();
  
  const [authStep, setAuthStep] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('9822451092');
  const [otp, setOtp] = useState(['4', '2', '8', '1', '9', '0']);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthStep('otp');
    }, 350);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        setCurrentScreen('workspaceSelect');
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EA] flex items-center justify-center p-3 sm:p-6 selection:bg-[#149A84] selection:text-white font-sans">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        
        {/* ========================================================================= */}
        {/* LEFT PANEL: DARK MIDNIGHT / FOREST SECTION */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#073B32] via-[#09101E] to-[#050811] text-white p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
          
          {/* Subtle animated network background */}
          <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            {/* Top Brand Header */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#149A84] to-[#073B32] p-0.5 shadow-lg flex items-center justify-center border border-teal-400/30">
                <div className="w-full h-full bg-[#09101E] rounded-[14px] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#149A84]" />
                </div>
              </div>
              <div>
                <h2 className="font-extrabold text-lg tracking-tight text-white font-display">PASHUSURAKSHA</h2>
                <p className="text-[11px] text-teal-300 font-medium">Government of Maharashtra</p>
              </div>
            </div>

            {/* Headline & Descriptor */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/80 font-mono">
                SIH 2026 • Problem Statement 26128
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-display">
                One network. Every herd. Earlier warning.
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Unified digital livestock health intelligence connecting 36 districts from village symptom to state response.
              </p>
            </div>
          </div>

          {/* System Status Indicators (Exact Section 13 Requirement) */}
          <div className="my-6 relative z-10 bg-[#09101E]/95 p-4 rounded-2xl border border-slate-800 text-xs space-y-2.5 shadow-xl">
            <div className="text-[11px] font-mono text-slate-400 font-bold uppercase border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>SYSTEM STATUS</span>
              <span className="text-emerald-400">PUNE DISTRICT SERVER</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-300 font-medium text-xs">SURVEILLANCE NETWORK</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-400">Operational</span>
              </div>

              <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <WifiOff className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-slate-300 font-medium text-xs">LOW-CONNECTIVITY MODE</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-teal-300">Supported</span>
              </div>

              <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-slate-300 font-medium text-xs">MULTILINGUAL</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-indigo-300">Available (EN/MR/HI)</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-3">
            <span>Commissionerate of Animal Husbandry</span>
            <span className="font-mono text-teal-400">v2.6.1 Live Build</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT PANEL: WARM IVORY / AUTHENTICATION AREA */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 bg-[#FDFBF7] p-7 sm:p-10 flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentScreen('home')}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
              >
                ← Back to Home
              </button>

              {/* Language Switcher */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded font-bold transition-colors ${language === 'en' ? 'bg-[#073B32] text-white' : 'text-slate-600'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('mr')}
                  className={`px-2 py-0.5 rounded font-bold transition-colors ${language === 'mr' ? 'bg-[#073B32] text-white' : 'text-slate-600'}`}
                >
                  मराठी
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2 py-0.5 rounded font-bold transition-colors ${language === 'hi' ? 'bg-[#073B32] text-white' : 'text-slate-600'}`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {/* Title Block */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073B32] font-display">
                Access your workspace
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Enter your registered mobile number to receive an OTP verification code.
              </p>
            </div>

            {/* Form */}
            {authStep === 'phone' ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Registered Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 text-xs font-bold">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98224 51092"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#149A84] focus:border-transparent transition-all shadow-sm"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Demo Preset: <span className="font-mono text-teal-800 font-bold">+91 98224 51092</span> (Ramesh Patil / Dr. Anand)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#073B32] hover:bg-[#095B4E] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Sending OTP...' : 'Continue with OTP'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700">
                      Enter 6-Digit Verification Code
                    </label>
                    <button
                      type="button"
                      onClick={() => setAuthStep('phone')}
                      className="text-[11px] font-bold text-teal-700 hover:underline"
                    >
                      Change Number
                    </button>
                  </div>

                  <div className="flex gap-2 justify-between">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => {
                          const newOtp = [...otp];
                          newOtp[i] = e.target.value;
                          setOtp(newOtp);
                        }}
                        className="w-11 h-12 text-center text-lg font-black bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#149A84] text-slate-900 shadow-sm"
                      />
                    ))}
                  </div>

                  <p className="text-[11px] text-emerald-800 font-medium">
                    ✓ Pre-filled for instant SIH evaluation. Click Verify & Continue.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#149A84] hover:bg-[#0C7A68] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Verifying...' : 'Verify & Open Workspace'}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Bottom First-Class Try Demo Section (Section 13 requirement) */}
          <div className="pt-6 border-t border-slate-200/80 mt-6 space-y-2.5">
            <div className="text-center text-xs text-slate-500 font-medium">
              Prefer to explore first?
            </div>

            <button
              onClick={() => setCurrentScreen('demoCenter')}
              className="w-full py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600 animate-spin-slow" />
              <span>Try Demo (No Login Required)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
