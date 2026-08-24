import React from 'react';
import { 
  Home, 
  PlusCircle, 
  ListChecks, 
  Syringe, 
  AlertTriangle, 
  FileText, 
  PhoneCall, 
  Map, 
  Activity, 
  BarChart3, 
  BookOpen, 
  Users, 
  ShieldAlert,
  TestTube2,
  HelpCircle,
  Database,
  Radio,
  Sparkles,
  Calendar,
  Layers,
  Heart,
  Hospital,
  Pill,
  TrendingUp,
  SlidersHorizontal,
  UserCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Sidebar() {
  const { 
    role, 
    activeTab, 
    setActiveTab, 
    t, 
    setIsIVROpen, 
    setIsOfflineModalOpen, 
    offlineQueue,
    setIsAdvisoryStudioOpen
  } = useApp();

  const getMenuItems = () => {
    switch (role) {
      case 'farmer':
        return [
          { id: 'dashboard', label: 'Home', icon: Home },
          { id: 'animals', label: 'My Animals', icon: ListChecks },
          { id: 'report', label: 'Report Health Issue', icon: PlusCircle, badge: 'Urgent' },
          { id: 'vaccines', label: 'Vaccinations', icon: Syringe },
          { id: 'alerts', label: 'Alerts', icon: AlertTriangle, badge: '8km' },
          { id: 'treatments', label: 'Treatment', icon: Pill },
          { id: 'advisories', label: 'Advisories & Profile', icon: BookOpen }
        ];

      case 'fieldWorker':
        return [
          { id: 'dashboard', label: 'Operations', icon: Home },
          { id: 'schedule', label: "Today's Visits", icon: Calendar, badge: '4 Visits' },
          { id: 'animals', label: 'Animal Registry', icon: ListChecks },
          { id: 'report', label: 'Incident Reports', icon: Activity },
          { id: 'vaccines', label: 'Vaccination Drives', icon: Syringe },
          { id: 'labs', label: 'Sample Collection', icon: TestTube2 },
          { id: 'offlineQueue', label: 'Offline Queue', icon: Database, badge: offlineQueue.length.toString() }
        ];

      case 'vet':
        return [
          { id: 'dashboard', label: 'Clinical Overview', icon: Home },
          { id: 'cases', label: 'Cases', icon: Activity, badge: '128' },
          { id: 'triage', label: 'AI Triage', icon: Sparkles },
          { id: 'labs', label: 'Laboratory', icon: TestTube2, badge: '4' },
          { id: 'referrals', label: 'Referrals', icon: Hospital },
          { id: 'treatments', label: 'Treatment', icon: Pill },
          { id: 'gis', label: 'Surveillance Map', icon: Map }
        ];

      case 'admin':
        return [
          { id: 'dashboard', label: 'Command Overview', icon: Home },
          { id: 'gis', label: 'GIS Risk Map', icon: Map, badge: 'Live' },
          { id: 'outbreaks', label: 'Outbreaks', icon: ShieldAlert },
          { id: 'analytics', label: 'Trends', icon: BarChart3 },
          { id: 'response', label: 'Response Teams', icon: Users },
          { id: 'advisoryStudio', label: 'Advisories Studio', icon: Radio, isSpecial: true }
        ];

      case 'stateAdmin':
        return [
          { id: 'dashboard', label: 'State Overview', icon: Home },
          { id: 'districtRankings', label: 'District Risk', icon: Layers, badge: '36' },
          { id: 'analytics', label: 'Disease Intelligence', icon: TrendingUp },
          { id: 'vaccinationGaps', label: 'Vaccination Gaps', icon: Syringe },
          { id: 'resources', label: 'Resources & Allocation', icon: SlidersHorizontal },
          { id: 'advisories', label: 'State Policies', icon: BookOpen }
        ];

      default:
        return [
          { id: 'dashboard', label: 'Home', icon: Home }
        ];
    }
  };

  const menuItems = getMenuItems();

  const handleMenuClick = (item) => {
    if (item.id === 'advisoryStudio') {
      setIsAdvisoryStudioOpen(true);
      return;
    }
    if (item.id === 'offlineQueue') {
      setIsOfflineModalOpen(true);
      return;
    }
    setActiveTab(item.id);
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col justify-between p-4 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
      <div className="space-y-1.5">
        <div className="px-3 py-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
          {role === 'farmer' && "Farmer Workspace Navigation"}
          {role === 'fieldWorker' && "Field Sentinel Operations"}
          {role === 'vet' && "Clinical Workspace Console"}
          {role === 'admin' && "District Command Center"}
          {role === 'stateAdmin' && "State Directorate Intelligence"}
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'dashboard' && activeTab === 'home');

          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                isActive 
                  ? 'bg-emerald-800 text-white shadow-xs' 
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && item.badge !== '0' && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-red-100 text-red-800'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Side Help Box */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="p-3.5 bg-gradient-to-br from-emerald-900 to-forest-950 text-white rounded-xl space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-emerald-300">
            <PhoneCall className="w-4 h-4" />
            <span>24x7 Pashu Seva IVR</span>
          </div>
          <p className="text-[11px] text-emerald-100 font-mono">Dial 1800-180-1551</p>
          <button
            onClick={() => setIsIVROpen(true)}
            className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-[11px] transition"
          >
            Launch Voice Simulator
          </button>
        </div>
      </div>
    </aside>
  );
}
