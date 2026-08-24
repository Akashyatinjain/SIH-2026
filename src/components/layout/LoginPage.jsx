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
  Map
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LoginPage({ onLoginSuccess }) {
  const { enterWorkspace } = useApp();
  
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
    }, 500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthStep('roleSelect');
    }, 500);
  };

  const handleFinalWorkspaceEnter = () => {
    enterWorkspace(selectedRole);
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-3 sm:p-6 selection:bg-emerald-500 selection:text-white">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* LEFT SIDE: Dark Cinematic Visual Panel (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-forest-950 via-slate-900 to-emerald-950 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700/80 border border-emerald-500/50 flex items-center justify-center text-white shadow-sm">
                <Shield className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h2 className="font-extrabold text-base tracking-tight text-white">PASHUSURAKSHA</h2>
                <p className="text-[11px] text-emerald-300 font-mono">Government of Maharashtra</p>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
                One network. Every herd. Earlier warning.
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Maharashtra Digital Livestock Health Surveillance & Early Warning Network.
              </p>
            </div>
          </div>

          {/* Background Map & Network Telemetry */}
          <div className="my-4 relative z-10 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
            <div className="flex items-center justify-between text-slate-300 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Maharashtra Grid Telemetry</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">ONLINE</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div>
                <span className="text-slate-400">Coverage:</span>
                <p className="font-bold text-white">36 Districts</p>
              </div>
              <div>
                <span className="text-slate-400">Reports Logged:</span>
                <p className="font-bold text-white">13,842 Reports</p>
              </div>
              <div>
                <span className="text-slate-400">System Status:</span>
                <p className="font-bold text-emerald-400">98.2% Availability</p>
              </div>
              <div>
                <span className="text-slate-400">Detection Speed:</span>
                <p className="font-bold text-blue-400">1h 45m Avg</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 relative z-10 border-t border-slate-800/80 pt-3">
            Department of Animal Husbandry & Dairying • SIH 2026 Problem Statement 26128
          </div>

          {/* Subtle glow */}
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* RIGHT SIDE: Warm Ivory / Crisp Authentication Panel (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
          {/* STEP 1: Phone Number Input */}
          {authStep === 'phone' && (
            <div className="max-w-md mx-auto w-full space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Authentication</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Access PashuSuraksha</h3>
                <p className="text-xs text-slate-500 mt-1">Sign in to your authorized workspace</p>
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
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl text-sm font-bold focus:outline-none focus:border-emerald-600"
                      required
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Registered Maharashtra Livestock Sentinel phone number</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Sending OTP...' : 'Continue with OTP'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Demo Fast Forward:</span>
                <button 
                  onClick={() => setAuthStep('roleSelect')}
                  className="font-bold text-emerald-800 hover:underline"
                >
                  Skip to Role Selection →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: OTP Verification */}
          {authStep === 'otp' && (
            <div className="max-w-md mx-auto w-full space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Verification</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Enter OTP Code</h3>
                <p className="text-xs text-slate-500 mt-1">Verification code sent to +91 {phone}</p>
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
                      className="w-11 h-12 text-center text-lg font-black font-mono border-2 border-emerald-600 rounded-xl bg-emerald-50 text-emerald-950 shadow-xs"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{loading ? 'Verifying...' : 'Verify OTP & Continue'}</span>
                </button>
              </form>
            </div>
          )}

          {/* STEP 3: ROLE SELECTION DURING LOGIN */}
          {authStep === 'roleSelect' && (
            <div className="w-full space-y-5 animate-fadeIn">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Account Workspace</span>
                <h3 className="text-2xl font-black text-slate-900 mt-0.5">Choose your workspace</h3>
                <p className="text-xs text-slate-500">Select the role associated with your account</p>
              </div>

              {/* 5 Sophisticated Horizontal Role Rows */}
              <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                {/* 1. Farmer */}
                <div
                  onClick={() => setSelectedRole('farmer')}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'farmer' 
                      ? 'border-emerald-600 bg-emerald-50/80 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl shrink-0">
                      🌾
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">FARMER / LIVESTOCK OWNER</h4>
                      <p className="text-xs font-semibold text-emerald-800">Ramesh Patil</p>
                      <p className="text-[11px] text-slate-500">Khedgaon • Baramati, Pune</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === 'farmer' ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'farmer' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 2. Field Worker */}
                <div
                  onClick={() => setSelectedRole('fieldWorker')}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'fieldWorker' 
                      ? 'border-teal-600 bg-teal-50/80 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center text-xl shrink-0">
                      🩺
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">FIELD WORKER / PASHU SAKHI</h4>
                      <p className="text-xs font-semibold text-teal-800">Sunita Pawar</p>
                      <p className="text-[11px] text-slate-500">Baramati Sector 2 Operations</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === 'fieldWorker' ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'fieldWorker' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 3. Veterinarian */}
                <div
                  onClick={() => setSelectedRole('vet')}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'vet' 
                      ? 'border-blue-600 bg-blue-50/80 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-xl shrink-0">
                      👨‍⚕️
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">VETERINARY OFFICER</h4>
                      <p className="text-xs font-semibold text-blue-800">Dr. Anand Deshmukh</p>
                      <p className="text-[11px] text-slate-500">Baramati Taluka Veterinary Hospital</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === 'vet' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'vet' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 4. District Officer */}
                <div
                  onClick={() => setSelectedRole('admin')}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'admin' 
                      ? 'border-indigo-600 bg-indigo-50/80 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-xl shrink-0">
                      🏛️
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">DISTRICT ANIMAL HEALTH OFFICER</h4>
                      <p className="text-xs font-semibold text-indigo-800">Pune District Command</p>
                      <p className="text-[11px] text-slate-500">Pune Collectorate Headquarters</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === 'admin' ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'admin' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* 5. State Administrator */}
                <div
                  onClick={() => setSelectedRole('stateAdmin')}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    selectedRole === 'stateAdmin' 
                      ? 'border-purple-600 bg-purple-50/80 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center text-xl shrink-0">
                      🗺️
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">STATE ANIMAL HEALTH ADMINISTRATOR</h4>
                      <p className="text-xs font-semibold text-purple-800">Maharashtra State Command</p>
                      <p className="text-[11px] text-slate-500">State Directorate • 36 Districts</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === 'stateAdmin' ? 'border-purple-600 bg-purple-600 text-white' : 'border-slate-300'
                  }`}>
                    {selectedRole === 'stateAdmin' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleFinalWorkspaceEnter}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2 mt-4"
              >
                <span>Continue to Selected Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
