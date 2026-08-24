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
  Calendar 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BottomNav() {
  const { role, activeTab, setActiveTab, setIsOfflineModalOpen, offlineQueue, language, t } = useApp();

  const getNavTabs = () => {
    if (role === 'farmer') {
      return [
        { id: 'dashboard', label: t.dashboard || 'Home', icon: Home },
        { id: 'animals', label: t.myAnimals || 'Animals', icon: ListChecks },
        { id: 'report', label: language === 'mr' ? 'नोंदवा' : language === 'hi' ? 'रिपोर्ट' : 'Report', icon: PlusCircle, isMain: true },
        { id: 'vaccines', label: t.vaccination || 'Vaccines', icon: Syringe },
        { id: 'alerts', label: t.localAlerts || 'Alerts', icon: AlertTriangle }
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
        { id: 'vaccines', label: language === 'mr' ? 'अंतर' : language === 'hi' ? 'गैप' : 'Gaps', icon: Syringe }
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
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 px-2 py-1 shadow-lg">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id || (tab.id === 'dashboard' && activeTab === 'home');

          if (tab.isMain) {
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className="flex flex-col items-center justify-center -mt-5 bg-gradient-to-tr from-emerald-800 to-[#073B32] text-white rounded-full w-12 h-12 shadow-lg border-2 border-white transform active:scale-95 transition"
              >
                <Icon className="w-6 h-6 text-emerald-300" />
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`flex flex-col items-center py-1 px-3 text-[10px] font-bold transition ${
                isActive ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
