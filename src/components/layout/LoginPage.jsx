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
  Users,
  Building2,
  Stethoscope,
  Radio,
  Layers,
  Map,
  Globe,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LoginPage({ onLoginSuccess }) {
  const { enterWorkspace, language, setLanguage } = useApp();
  
  const [authStep, setAuthStep] = useState('phone'); // 'phone' | 'otp' | 'roleSelect'
  const [phone, setPhone] = useState('9822451092');
  const [otp, setOtp] = useState(['4', '2', '8', '1', '9', '0']);
  const [selectedRole, setSelectedRole] = useState('farmer');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthStep('otp');
    }, 450);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthStep('roleSelect');
    }, 450);
  };

  const handleFinalWorkspaceEnter = () => {
    enterWorkspace(selectedRole);
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-[#F6F3EA] flex items-center justify-center p-3 sm:p-6 selection:bg-[#149A84] selection:text-white">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#ECE6D6] overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* LEFT SIDE: Dark Cinematic Visual Panel (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#073B32] via-[#0A1020] to-[#050811] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#149A84]/20 border border-[#149A84]/40 flex items-center justify-center text-white shadow-sm">
                <Shield className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h2 className="font-black text-base tracking-tight text-white">PASHUSURAKSHA</h2>
                <p className="text-[11px] text-emerald-300 font-mono">Government of Maharashtra</p>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#149A84] bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
                Animal Health Intelligence Network
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                One network. Every herd. Earlier warning.
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Connecting 36 districts of Maharashtra into a unified epidemiological surveillance and rapid containment grid.
              </p>
            </div>
          </div>

          {/* Background Map & Live Status Telemetry Box */}
          <div className="my-4 relative z-10 bg-[#0A1020]/90 p-4 rounded-2xl border border-slate-800 text-xs space-y-2.5 shadow-md">
            <div className="flex items-center justify-between text-slate-300 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5 text-[#149A84]">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Maharashtra Grid Telemetry</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400">Coverage:</span>
                <p className="font-bold text-white">36 Districts</p>
              </div>
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400">Reports Logged:</span>
                <p className="font-bold text-white">13,842 Reports</p>
              </div>
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400">System Availability:</span>
                <p className="font-bold text-[#149A84]">98.2% Active</p>
              </div>
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400">Detection Velocity:</span>
                <p className="font-bold text-blue-400">1h 45m Avg</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 relative z-10 border-t border-slate-800/80 pt-3">
            Department of Animal Husbandry & Dairying • SIH 2026 Problem Statement 26128
          </div>

          {/* Subtle glow */}
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#149A84]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* RIGHT SIDE: Warm Ivory Authentication Panel (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-[#F6F3EA]">
          {/* STEP 1: Phone Number Input */}
          {authStep === 'phone' && (
            <div className="max-w-md mx-auto w-full space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
                  SECURE AUTHENTICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A1020] mt-2">Access your workspace</h3>
                <p className="text-xs text-slate-600 mt-1">Sign in with your registered mobile number</p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-xs font-bold text-slate-400">+91</span>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="Enter 10 digit number"
                      className="w-full pl-12 pr-4 py-3 bg-white border border-[#ECE6D6] rounded-xl text-sm font-bold text-[#0A1020] focus:outline-none focus:border-[#149A84] shadow-xs"
                      required
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Registered Maharashtra Livestock Sentinel phone number</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#073B32] hover:bg-[#052923] text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Sending OTP...' : 'Continue with OTP'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="p-3 bg-white rounded-xl border border-[#ECE6D6] text-xs text-slate-600 flex items-center justify-between shadow-xs">
                <span>Demo Fast Login:</span>
                <button 
                  onClick={() => setAuthStep('roleSelect')}
                  className="font-bold text-[#073B32] hover:underline"
                >
                  Skip to Workspace Selection →
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center">
                🔒 Authorized Government & Field Network Access Only
              </div>
            </div>
          )}

          {/* STEP 2: OTP Verification */}
          {authStep === 'otp' && (
            <div className="max-w-md mx-auto w-full space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
                  TWO-FACTOR VERIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A1020] mt-2">Enter Verification Code</h3>
                <p className="text-xs text-slate-600 mt-1">Verification code sent to +91 {phone}</p>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div className="flex justify-between gap-2">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={digit}
                      readOnly
                      className="w-11 h-12 text-center text-lg font-black font-mono border-2 border-[#149A84] rounded-xl bg-white text-[#073B32] shadow-xs"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#073B32] hover:bg-[#052923] text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{loading ? 'Verifying...' : 'Verify OTP & Continue'}</span>
                </button>
              </form>

              <div className="flex justify-between text-xs text-slate-600">
                <span>Didn't receive code?</span>
                <button 
                  onClick={() => alert("Resent OTP to +91 " + phone)}
                  className="font-bold text-[#073B32] hover:underline"
                >
                  Resend Code
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ROLE SELECTION (Section 11) */}
          {authStep === 'roleSelect' && (
            <div className="w-full space-y-4 animate-fadeIn">
              <div>
                <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
                  AUTHORIZED WORKSPACES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A1020] mt-1">Choose your workspace</h3>
                <p className="text-xs text-slate-600">Select the environment associated with your role</p>
              </div>

              {/* 5 Premium Horizontal Role Cards */}
              <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                {/* 1. Farmer */}
                <div
                  onClick={() => setSelectedRole('farmer')}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'farmer' 
                      ? 'border-[#073B32] bg-white shadow-md' 
                      : 'border-[#ECE6D6] bg-white/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D9F1E8] text-[#073B32] flex items-center justify-center text-xl shrink-0">
                      🌾
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-sm text-[#0A1020]">Farmer / Livestock Owner</h4>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 rounded">Ramesh Patil</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Manage animals, report symptoms and receive local advisories.</p>
                      <p className="text-[10px] text-slate-400 font-mono">Khedgaon • Baramati, Pune</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedRole === 'farmer' ? 'border-[#073B32] bg-[#073B32] text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'farmer' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 2. Field Worker */}
                <div
                  onClick={() => setSelectedRole('fieldWorker')}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'fieldWorker' 
                      ? 'border-teal-700 bg-white shadow-md' 
                      : 'border-[#ECE6D6] bg-white/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center text-xl shrink-0">
                      🩺
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-sm text-[#0A1020]">Field Worker / Pashu Sakhi</h4>
                        <span className="text-[10px] font-bold bg-teal-100 text-teal-800 px-1.5 rounded">Sunita Pawar</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Capture field intelligence, vaccination and sample data.</p>
                      <p className="text-[10px] text-slate-400 font-mono">Baramati Sector 2 Operations</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedRole === 'fieldWorker' ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'fieldWorker' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 3. Veterinarian */}
                <div
                  onClick={() => setSelectedRole('vet')}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'vet' 
                      ? 'border-blue-700 bg-white shadow-md' 
                      : 'border-[#ECE6D6] bg-white/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl shrink-0">
                      👨‍⚕️
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-sm text-[#0A1020]">Veterinarian / Clinical Officer</h4>
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-1.5 rounded">Dr. Anand Deshmukh</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Review cases, triage risk and coordinate treatment.</p>
                      <p className="text-[10px] text-slate-400 font-mono">Baramati Taluka Hospital</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedRole === 'vet' ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'vet' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 4. District Officer */}
                <div
                  onClick={() => setSelectedRole('admin')}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'admin' 
                      ? 'border-indigo-700 bg-white shadow-md' 
                      : 'border-[#ECE6D6] bg-white/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center text-xl shrink-0">
                      🏛️
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-sm text-[#0A1020]">District Animal Health Command</h4>
                        <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-1.5 rounded">Pune HQ</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Monitor clusters, risk zones and response operations.</p>
                      <p className="text-[10px] text-slate-400 font-mono">Pune Collectorate Headquarters</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedRole === 'admin' ? 'border-indigo-700 bg-indigo-700 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'admin' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 5. State Administrator */}
                <div
                  onClick={() => setSelectedRole('stateAdmin')}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'stateAdmin' 
                      ? 'border-purple-700 bg-white shadow-md' 
                      : 'border-[#ECE6D6] bg-white/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center text-xl shrink-0">
                      🗺️
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-sm text-[#0A1020]">State Animal Health Intelligence</h4>
                        <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-1.5 rounded">Maharashtra</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Understand statewide trends, risk and resource priorities.</p>
                      <p className="text-[10px] text-slate-400 font-mono">36 District Command Directorate</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedRole === 'stateAdmin' ? 'border-purple-700 bg-purple-700 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'stateAdmin' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Launch Workspace Button */}
              <button
                onClick={handleFinalWorkspaceEnter}
                className="w-full py-3.5 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2 mt-3"
              >
                <span>Launch Workspace →</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
