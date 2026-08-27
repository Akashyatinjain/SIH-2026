import React from 'react';
import { 
  Home, 
  PlusCircle, 
  ListChecks, 
  Syringe, 
  AlertTriangle, 
  Activity, 
  Map, 
  TestTube2, 
  Hospital, 
  Layers, 
  TrendingUp, 
  Database, 
  Calendar,
  Pill
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BottomNav() {
  const { role, activeTab, setActiveTab, setIsOfflineModalOpen, offlineQueue, language, t } = useApp();

  const getNavTabs = () => {
    if (role === 'farmer') {
      return [
        { id: 'dashboard', label: language === 'mr' ? 'मुख्य' : language === 'hi' ? 'होम' : 'Home', icon: Home },
        { id: 'animals', label: language === 'mr' ? 'जनावरे' : language === 'hi' ? 'पशु' : 'Animals', icon: ListChecks },
        { id: 'report', label: language === 'mr' ? 'आजारी नोंद' : language === 'hi' ? 'बीमार नोंद' : 'Report', icon: PlusCircle, isMain: true, isEmergency: true },
        { id: 'vaccines', label: language === 'mr' ? 'लसीकरण' : language === 'hi' ? 'टीके' : 'Vaccines', icon: Syringe },
        { id: 'treatments', label: language === 'mr' ? 'औषधे' : language === 'hi' ? 'दवाइयां' : 'Medicines', icon: Pill }
      ];
    } else if (role === 'fieldWorker') {
      return [
        { id: 'dashboard', label: language === 'mr' ? 'कार्य' : language === 'hi' ? 'कार्य' : 'Ops', icon: Home },
        { id: 'schedule', label: language === 'mr' ? 'भेटी' : language === 'hi' ? 'दौरे' : 'Visits', icon: Calendar },
        { id: 'report', label: language === 'mr' ? 'तक्रार' : language === 'hi' ? 'घटना' : 'Incident', icon: Activity, isMain: true },
        { id: 'animals', label: language === 'mr' ? 'नोंदणी' : language === 'hi' ? 'पंजी' : 'Registry', icon: ListChecks },
        { id: 'offlineQueue', label: language === 'mr' ? 'ऑफलाइन' : language === 'hi' ? 'ऑफलाइन' : 'Offline', icon: Database }
      ];
    } else if (role === 'vet') {
      return [
        { id: 'dashboard', label: language === 'mr' ? 'मुख्य' : language === 'hi' ? 'मुख्य' : 'Home', icon: Home },
        { id: 'cases', label: t.cases || 'Cases', icon: Activity, isMain: true },
        { id: 'labs', label: language === 'mr' ? 'लॅब' : language === 'hi' ? 'लैब' : 'Lab', icon: TestTube2 },
        { id: 'referrals', label: language === 'mr' ? 'रेफरल' : language === 'hi' ? 'रेफरल' : 'Referrals', icon: Hospital },
        { id: 'gis', label: language === 'mr' ? 'नकाशा' : language === 'hi' ? 'नक्शा' : 'Surveillance', icon: Map }
      ];
    } else if (role === 'admin') {
      return [
        { id: 'dashboard', label: language === 'mr' ? 'कमांड' : language === 'hi' ? 'कमांड' : 'Command', icon: Home },
        { id: 'gis', label: language === 'mr' ? 'नकाशा' : language === 'hi' ? 'नक्शा' : 'GIS Map', icon: Map, isMain: true },
        { id: 'outbreaks', label: language === 'mr' ? 'प्रादुर्भाव' : language === 'hi' ? 'प्रकोप' : 'Outbreaks', icon: Activity },
        { id: 'analytics', label: language === 'mr' ? 'कल' : language === 'hi' ? 'ट्रेंड्स' : 'Trends', icon: TrendingUp }
      ];
    } else {
      return [
        { id: 'dashboard', label: language === 'mr' ? 'राज्य' : language === 'hi' ? 'राज्य' : 'State', icon: Home },
        { id: 'districtRankings', label: language === 'mr' ? 'धोका' : language === 'hi' ? 'जोखिम' : 'District Risk', icon: Layers, isMain: true },
        { id: 'analytics', label: language === 'mr' ? 'विश्लेषण' : language === 'hi' ? 'विश्लेषण' : 'Intelligence', icon: TrendingUp },
        { id: 'vaccinationGaps', label: language === 'mr' ? 'अंतर' : language === 'hi' ? 'गैप' : 'Gaps', icon: Syringe }
      ];
    }
  };

  const tabs = getNavTabs();

  const handleTabClick = (tab) => {
    if (tab.id === 'offlineQueue') {
      setIsOfflineModalOpen(true);
      return;
    }
    setActiveTab(tab.id);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-lg border-t border-slate-200 z-40 px-2 py-1.5 shadow-2xl pb-[max(env(safe-area-inset-bottom),8px)]">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id || (tab.id === 'dashboard' && activeTab === 'home') || (tab.id === 'vaccinationGaps' && activeTab === 'vaccines');

          if (tab.isMain) {
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`flex flex-col items-center justify-center -mt-6 rounded-full w-14 h-14 shadow-xl border-4 border-white transform active:scale-90 transition ${
                  tab.isEmergency
                    ? 'bg-gradient-to-tr from-red-600 to-rose-500 text-white animate-pulse'
                    : 'bg-gradient-to-tr from-[#149A84] to-[#073B32] text-white'
                }`}
                aria-label={tab.label}
              >
                <Icon className="w-6 h-6 text-white" />
                <span className="text-[9px] font-black text-white leading-none mt-0.5">{tab.label}</span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`tap-target-48 flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl text-[11px] font-black transition min-w-[56px] active:scale-95 ${
                isActive ? 'text-[#073B32] bg-emerald-50/70' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-[#073B32]' : 'text-slate-400'}`} />
              <span className="truncate max-w-[68px] leading-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
