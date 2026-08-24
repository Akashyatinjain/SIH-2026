import React, { useState, useRef, useEffect } from 'react';
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
  PhoneCall,
  Check
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
    currentScreen,
    t
  } = useApp();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const roleMeta = {
    farmer: { 
      title: language === 'mr' ? "शेतकरी कार्यक्षेत्र" : language === 'hi' ? "किसान कार्यक्षेत्र" : "Farmer Workspace", 
      location: language === 'mr' ? "खेडगाव • बारामती, पुणे" : language === 'hi' ? "खेडगांव • बारामती, पुणे" : "Khedgaon • Baramati, Pune", 
      icon: "🌾", 
      name: language === 'mr' ? "रमेश पाटील" : language === 'hi' ? "रमेश पाटिल" : "Ramesh Patil" 
    },
    fieldWorker: { 
      title: language === 'mr' ? "क्षेत्रीय सहाय्यक कक्ष" : language === 'hi' ? "फील्ड वर्कर कक्ष" : "Field Sentinel Operations", 
      location: language === 'mr' ? "बारामती विभाग २" : language === 'hi' ? "बारामती सेक्टर २" : "Baramati Sector 2", 
      icon: "🩺", 
      name: language === 'mr' ? "सुनिता पवार (पशु सखी)" : language === 'hi' ? "सुनीता पवार (पशु सखी)" : "Sunita Pawar (Pashu Sakhi)" 
    },
    vet: { 
      title: language === 'mr' ? "पशुवैद्यकीय रुग्णालय कक्ष" : language === 'hi' ? "पशु चिकित्सालय कंसोल" : "Clinical Intelligence Workbench", 
      location: language === 'mr' ? "बारामती तालुका रुग्णालय" : language === 'hi' ? "बारामती तालुका अस्पताल" : "Baramati Taluka Hospital", 
      icon: "👨‍⚕️", 
      name: language === 'mr' ? "डॉ. आनंद देशमुख" : language === 'hi' ? "डॉ. आनंद देशमुख" : "Dr. Anand Deshmukh" 
    },
    admin: { 
      title: language === 'mr' ? "पुणे जिल्हा नियंत्रण कक्ष" : language === 'hi' ? "पुणे जिला नियंत्रण केंद्र" : "Pune District Command HQ", 
      location: language === 'mr' ? "जिल्हाधिकारी कार्यालय, पुणे" : language === 'hi' ? "जिलाधिकारी कार्यालय, पुणे" : "District Collectorate, Pune", 
      icon: "🏛️", 
      name: language === 'mr' ? "जिल्हा नियंत्रण अधिकारी" : language === 'hi' ? "जिला नियंत्रण अधिकारी" : "Pune Command Officer" 
    },
    stateAdmin: { 
      title: language === 'mr' ? "महाराष्ट्र राज्य पशु आरोग्य संचालनालय" : language === 'hi' ? "महाराष्ट्र राज्य पशु स्वास्थ्य निदेशालय" : "Maharashtra Animal Health Intelligence", 
      location: language === 'mr' ? "मध्यवर्ती संचालनालय, मुंबई" : language === 'hi' ? "केंद्रीय निदेशालय, मुंबई" : "State Directorate, Maharashtra", 
      icon: "🗺️", 
      name: language === 'mr' ? "राज्य संचालक" : language === 'hi' ? "राज्य निदेशक" : "State Directorate Officer" 
    }
  };

  const current = roleMeta[role] || roleMeta.farmer;

  const languages = [
    { code: 'en', label: 'ENG', fullName: 'English' },
    { code: 'mr', label: 'मराठी', fullName: 'मराठी (Marathi)' },
    { code: 'hi', label: 'हिंदी', fullName: 'हिंदी (Hindi)' }
  ];

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
                {t.appName || "PASHUSURAKSHA"}
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
          {/* Online/Offline Status Indicator */}
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
                <span className="hidden sm:inline">{t.offlineMode || "OFFLINE"}</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="hidden sm:inline">{t.online || "ONLINE"}</span>
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

          {/* ======================================================== */}
          {/* POLISHED LANGUAGE SELECTOR PILL (ENG ⌵ / मराठी ⌵ / हिंदी ⌵) */}
          {/* ======================================================== */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F6F3EA] hover:bg-[#EAE4D7] border border-[#ECE6D6] rounded-full text-xs font-black text-[#0A1020] transition shadow-xs focus:outline-none focus:ring-2 focus:ring-[#149A84]"
              title="Change Display Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#073B32]" />
              <span>{language === 'en' ? 'ENG' : language === 'mr' ? 'मराठी' : 'हिंदी'}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#ECE6D6] py-1.5 z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Select Language (भाषा)
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2 text-left text-xs font-bold flex items-center justify-between transition ${
                      language === l.code 
                        ? 'bg-[#D9F1E8] text-[#073B32]' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{l.fullName}</span>
                    {language === l.code && <Check className="w-4 h-4 text-[#073B32]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

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
