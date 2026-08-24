import React, { useState } from 'react';
import { 
  Shield, 
  MapPin, 
  ChevronDown, 
  CheckCircle2, 
  AlertTriangle,
  Wifi,
  WifiOff,
  Bell,
  LogOut,
  User,
  RefreshCw,
  SlidersHorizontal,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const { 
    role, 
    language, 
    setLanguage, 
    isOffline, 
    setIsOffline, 
    offlineQueue, 
    setIsOfflineModalOpen,
    notifications,
    setIsNotificationOpen,
    logout,
    setCurrentScreen,
    t 
  } = useApp();

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const getWorkspaceTitle = () => {
    switch (role) {
      case 'farmer':
        return { title: "Farmer Workspace", location: "Khedgaon • Baramati • Pune", icon: "🌾", user: "Ramesh Patil" };
      case 'fieldWorker':
        return { title: "Field Operations Workspace", location: "Baramati Sector 2", icon: "🩺", user: "Sunita Pawar (Pashu Sakhi)" };
      case 'vet':
        return { title: "Clinical Workspace", location: "Baramati Taluka Hospital", icon: "👨‍⚕️", user: "Dr. Anand Deshmukh" };
      case 'admin':
        return { title: "District Command Center", location: "Pune District Collectorate", icon: "🏛️", user: "Pune District Officer" };
      case 'stateAdmin':
        return { title: "State Intelligence Center", location: "Maharashtra State Command", icon: "🗺️", user: "State Directorate Admin" };
      default:
        return { title: "Farmer Workspace", location: "Khedgaon • Baramati", icon: "🌾", user: "Ramesh Patil" };
    }
  };

  const ws = getWorkspaceTitle();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Govt Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-forest-950 flex items-center justify-center text-white shadow-sm border border-emerald-700">
            <Shield className="w-6 h-6 text-emerald-300" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900">
                PASHUSURAKSHA
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                Govt of Maharashtra
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Livestock Health Intelligence Network
            </p>
          </div>
        </div>

        {/* Center: Current Workspace Location Breadcrumb (No Role Tabs!) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
          <span className="text-base">{ws.icon}</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-slate-900">{ws.title}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{ws.location}</span>
            </span>
          </div>
        </div>

        {/* Right: Language, Connectivity, Notifications, Profile Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Multilingual Toggle */}
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                language === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                language === 'mr' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                language === 'hi' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Connectivity Status */}
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
              isOffline
                ? 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}
            title="Toggle offline connectivity simulation"
          >
            {isOffline ? <WifiOff className="w-3.5 h-3.5 text-amber-700" /> : <Wifi className="w-3.5 h-3.5 text-emerald-700" />}
            <span className="hidden sm:inline">{isOffline ? 'Offline Mode' : 'Online'}</span>
            {offlineQueue.length > 0 && (
              <span 
                onClick={(e) => { e.stopPropagation(); setIsOfflineModalOpen(true); }}
                className="bg-amber-600 text-white font-mono font-bold text-[10px] px-1.5 rounded-full"
              >
                {offlineQueue.length}
              </span>
            )}
          </button>

          {/* Notifications Drawer Button */}
          <button
            onClick={() => setIsNotificationOpen(true)}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 relative transition"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
                {ws.icon}
              </div>
              <span className="hidden sm:inline">{ws.user}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {/* Profile Dropdown Menu */}
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-fadeIn text-xs space-y-1">
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="font-bold text-slate-900">{ws.user}</p>
                  <p className="text-[11px] text-slate-500">{ws.title}</p>
                </div>

                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    setCurrentScreen('roleSelect');
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-xl font-semibold text-slate-700 flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-emerald-700" />
                  <span>Switch Workspace</span>
                </button>

                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    logout();
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-red-50 text-red-700 rounded-xl font-bold flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4 text-red-600" />
                  <span>Sign Out / Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
