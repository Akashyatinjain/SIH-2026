import React from 'react';
import { 
  Shield, 
  MapPin, 
  Wifi, 
  WifiOff, 
  Bell, 
  Globe, 
  LogOut, 
  User, 
  ChevronDown,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const { 
    role, 
    isOffline, 
    toggleOffline, 
    notifications, 
    isNotificationsOpen, 
    setIsNotificationsOpen,
    language,
    setLanguage,
    logout,
    setIsIVROpen,
    currentScreen
  } = useApp();

  const roleMeta = {
    farmer: { title: "Farmer Workspace", location: "Khedgaon • Baramati, Pune", icon: "🌾", name: "Ramesh Patil" },
    fieldWorker: { title: "Field Sentinel Operations", location: "Baramati Sector 2", icon: "🩺", name: "Sunita Pawar (पशु सखी)" },
    vet: { title: "Clinical Intelligence Workbench", location: "Baramati Taluka Hospital", icon: "👨‍⚕️", name: "Dr. Anand Deshmukh" },
    admin: { title: "Pune District Command HQ", location: "District Collectorate, Pune", icon: "🏛️", name: "Pune Command Officer" },
    stateAdmin: { title: "Maharashtra Animal Health Intelligence", location: "State Directorate, Maharashtra", icon: "🗺️", name: "State Directorate Officer" }
  };

  const current = roleMeta[role] || roleMeta.farmer;

  return (
    <header className="bg-white border-b border-[#ECE6D6] sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Left: Product Logo & Workspace Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#073B32] to-[#0A1020] flex items-center justify-center text-white shadow-xs shrink-0 border border-[#073B32]">
            <Shield className="w-5 h-5 text-emerald-300" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-black tracking-tight text-[#0A1020]">
                PASHUSURAKSHA
              </span>
              <span className="text-[10px] bg-[#D9F1E8] text-[#073B32] font-bold px-2 py-0.5 rounded-full border border-[#B3E2D2] hidden sm:inline-block">
                {current.title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#7C9687] font-medium truncate">
              <MapPin className="w-3 h-3 text-[#149A84] shrink-0" />
              <span className="truncate">{current.location}</span>
            </div>
          </div>
        </div>

        {/* Right: Telemetry Controls & User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Online/Offline Status Indicator (Section 35) */}
          <button
            onClick={toggleOffline}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition ${
              isOffline 
                ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}
            title="Click to toggle offline mode simulation"
          >
            {isOffline ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">OFFLINE (Queued)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="hidden sm:inline">ONLINE</span>
              </>
            )}
          </button>

          {/* 1800 IVR Quick Link */}
          <button
            onClick={() => setIsIVROpen(true)}
            className="p-2 border border-[#ECE6D6] hover:bg-[#F6F3EA] rounded-xl text-[#073B32] transition hidden md:flex items-center gap-1 text-xs font-bold"
            title="Pashu Seva 1800-180-1551 Voice Network"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#149A84]" />
            <span className="hidden lg:inline">1800-180-1551</span>
          </button>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1.5 border border-[#ECE6D6] rounded-xl text-xs font-bold bg-[#F6F3EA] text-slate-800 focus:outline-none"
          >
            <option value="en">ENG</option>
            <option value="mr">मराठी</option>
            <option value="hi">हिंदी</option>
          </select>

          {/* Notifications Trigger */}
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 border border-[#ECE6D6] hover:bg-[#F6F3EA] rounded-xl text-slate-700 relative transition"
          >
            <Bell className="w-4 h-4 text-slate-700" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D84F45] text-white text-[10px] font-black flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>

          {/* User Profile & Logout */}
          <div className="flex items-center gap-2 pl-2 border-l border-[#ECE6D6]">
            <div className="hidden sm:block text-right">
              <span className="text-xs font-extrabold text-[#0A1020] block leading-tight">{current.name}</span>
              <span className="text-[10px] text-slate-500 font-mono">{role.toUpperCase()}</span>
            </div>
            <button
              onClick={logout}
              className="p-2 bg-[#F6F3EA] hover:bg-red-50 text-slate-700 hover:text-red-700 rounded-xl transition border border-[#ECE6D6]"
              title="Sign Out / Switch Workspace"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
