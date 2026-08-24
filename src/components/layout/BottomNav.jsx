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
  const { role, activeTab, setActiveTab, setIsOfflineModalOpen, offlineQueue } = useApp();

  const getNavTabs = () => {
    if (role === 'farmer') {
      return [
        { id: 'dashboard', label: 'Home', icon: Home },
        { id: 'animals', label: 'Animals', icon: ListChecks },
        { id: 'report', label: 'Report', icon: PlusCircle, isMain: true },
        { id: 'vaccines', label: 'Vaccines', icon: Syringe },
        { id: 'alerts', label: 'Alerts', icon: AlertTriangle }
      ];
    } else if (role === 'fieldWorker') {
      return [
        { id: 'dashboard', label: 'Ops', icon: Home },
        { id: 'schedule', label: 'Visits', icon: Calendar },
        { id: 'report', label: 'Incident', icon: Activity, isMain: true },
        { id: 'animals', label: 'Registry', icon: ListChecks },
        { id: 'offlineQueue', label: 'Offline', icon: Database }
      ];
    } else if (role === 'vet') {
      return [
        { id: 'dashboard', label: 'Home', icon: Home },
        { id: 'cases', label: 'Cases', icon: Activity, isMain: true },
        { id: 'labs', label: 'Lab', icon: TestTube2 },
        { id: 'referrals', label: 'Referrals', icon: Hospital },
        { id: 'gis', label: 'Surveillance', icon: Map }
      ];
    } else if (role === 'admin') {
      return [
        { id: 'dashboard', label: 'Command', icon: Home },
        { id: 'gis', label: 'GIS Map', icon: Map, isMain: true },
        { id: 'outbreaks', label: 'Outbreaks', icon: Activity },
        { id: 'analytics', label: 'Trends', icon: TrendingUp }
      ];
    } else {
      return [
        { id: 'dashboard', label: 'State Overview', icon: Home },
        { id: 'districtRankings', label: 'District Risk', icon: Layers, isMain: true },
        { id: 'analytics', label: 'Intelligence', icon: TrendingUp },
        { id: 'vaccines', label: 'Gaps', icon: Syringe }
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
                className="flex flex-col items-center justify-center -mt-5 bg-gradient-to-tr from-emerald-800 to-forest-700 text-white rounded-full w-12 h-12 shadow-lg border-2 border-white transform active:scale-95 transition"
              >
                <Icon className="w-6 h-6" />
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
