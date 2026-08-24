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
    language,
    setIsIVROpen, 
    setIsOfflineModalOpen, 
    offlineQueue,
    setIsAdvisoryStudioOpen
  } = useApp();

  const getMenuItems = () => {
    switch (role) {
      case 'farmer':
        return [
          { id: 'dashboard', label: t.dashboard || 'Home', icon: Home },
          { id: 'animals', label: t.myAnimals || 'My Animals', icon: ListChecks },
          { id: 'report', label: t.reportSick || 'Report Health Issue', icon: PlusCircle, badge: language === 'mr' ? 'तातडीचे' : language === 'hi' ? 'जरूरी' : 'Urgent' },
          { id: 'vaccines', label: t.vaccination || 'Vaccinations', icon: Syringe },
          { id: 'alerts', label: t.localAlerts || 'Alerts', icon: AlertTriangle, badge: '8km' },
          { id: 'treatments', label: t.treatmentHistory || 'Treatment', icon: Pill },
          { id: 'advisories', label: t.advisories || 'Advisories & Profile', icon: BookOpen }
        ];

      case 'fieldWorker':
        return [
          { id: 'dashboard', label: language === 'mr' ? 'कार्य अहवाल' : language === 'hi' ? 'कार्य विवरण' : 'Operations', icon: Home },
          { id: 'schedule', label: language === 'mr' ? 'आजच्या भेटी' : language === 'hi' ? 'आज के दौरे' : "Today's Visits", icon: Calendar, badge: '4 Visits' },
          { id: 'animals', label: t.registerNewAnimal || 'Animal Registry', icon: ListChecks },
          { id: 'report', label: t.quickSymptomLog || 'Incident Reports', icon: Activity },
          { id: 'vaccines', label: t.vacCampEntry || 'Vaccination Drives', icon: Syringe },
          { id: 'labs', label: t.sampleCollect || 'Sample Collection', icon: TestTube2 },
          { id: 'offlineQueue', label: language === 'mr' ? 'ऑफलाइन नोंदी' : language === 'hi' ? 'ऑफलाइन कतार' : 'Offline Queue', icon: Database, badge: offlineQueue?.length.toString() || '0' }
        ];

      case 'vet':
        return [
          { id: 'dashboard', label: language === 'mr' ? 'दवाखाना विहंगावलोकन' : language === 'hi' ? 'कंसोल मुख्य' : 'Clinical Overview', icon: Home },
          { id: 'cases', label: t.cases || 'Cases', icon: Activity, badge: '128' },
          { id: 'triage', label: t.aiTriageHeader || 'AI Triage', icon: Sparkles },
          { id: 'labs', label: t.labReferrals || 'Laboratory', icon: TestTube2, badge: '4' },
          { id: 'referrals', label: t.hospitalReferral || 'Referrals', icon: Hospital },
          { id: 'treatments', label: t.prescribeMed || 'Treatment', icon: Pill },
          { id: 'gis', label: t.gisMap || 'Surveillance Map', icon: Map }
        ];

      case 'admin':
        return [
          { id: 'dashboard', label: language === 'mr' ? 'नियंत्रण कक्ष' : language === 'hi' ? 'कमांड सेंटर' : 'Command Overview', icon: Home },
          { id: 'gis', label: t.gisMap || 'GIS Risk Map', icon: Map, badge: 'Live' },
          { id: 'outbreaks', label: t.outbreaks || 'Outbreaks', icon: ShieldAlert },
          { id: 'analytics', label: t.analytics || 'Trends', icon: BarChart3 },
          { id: 'response', label: t.deployRRT || 'Response Teams', icon: Users },
          { id: 'advisoryStudio', label: language === 'mr' ? 'सल्लागार स्टुडिओ' : language === 'hi' ? 'सलाहकार स्टूडियो' : 'Advisories Studio', icon: Radio, isSpecial: true }
        ];

      case 'stateAdmin':
        return [
          { id: 'dashboard', label: language === 'mr' ? 'राज्य विहंगावलोकन' : language === 'hi' ? 'राज्य मुख्य' : 'State Overview', icon: Home },
          { id: 'districtRankings', label: language === 'mr' ? 'जिल्हा धोका' : language === 'hi' ? 'जिला जोखिम' : 'District Risk', icon: Layers, badge: '36' },
          { id: 'analytics', label: language === 'mr' ? 'रोग विश्लेषण' : language === 'hi' ? 'रोग विश्लेषण' : 'Disease Intelligence', icon: TrendingUp },
          { id: 'vaccinationGaps', label: language === 'mr' ? 'लसीकरण अंतर' : language === 'hi' ? 'टीकाकरण अंतर' : 'Vaccination Gaps', icon: Syringe },
          { id: 'resources', label: language === 'mr' ? 'संसाधने व निधी' : language === 'hi' ? 'संसाधन व बजट' : 'Resources & Allocation', icon: SlidersHorizontal },
          { id: 'advisories', label: language === 'mr' ? 'राज्य धोरणे' : language === 'hi' ? 'राज्य नीतियां' : 'State Policies', icon: BookOpen }
        ];

      default:
        return [
          { id: 'dashboard', label: t.dashboard || 'Home', icon: Home }
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

  const roleTitles = {
    farmer: language === 'mr' ? "शेतकरी नेव्हिगेशन" : language === 'hi' ? "किसान नेविगेशन" : "Farmer Workspace Navigation",
    fieldWorker: language === 'mr' ? "क्षेत्रीय सहाय्यक ऑपरेशन्स" : language === 'hi' ? "फील्ड ऑपरेशन्स" : "Field Sentinel Operations",
    vet: language === 'mr' ? "वैद्यकीय कार्यक्षेत्र" : language === 'hi' ? "चिकित्सा कार्यक्षेत्र" : "Clinical Workspace Console",
    admin: language === 'mr' ? "जिल्हा नियंत्रण कक्ष" : language === 'hi' ? "जिला नियंत्रण केंद्र" : "District Command Center",
    stateAdmin: language === 'mr' ? "राज्य संचालनालय" : language === 'hi' ? "राज्य निदेशालय" : "State Directorate Intelligence"
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col justify-between p-4 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
      <div className="space-y-1.5">
        <div className="px-3 py-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
          {roleTitles[role] || "Workspace Navigation"}
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
              <div className="flex items-center gap-3 min-w-0">
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && item.badge !== '0' && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${
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
        <div className="p-3.5 bg-gradient-to-br from-emerald-900 to-[#0A1020] text-white rounded-xl space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-emerald-300">
            <PhoneCall className="w-4 h-4" />
            <span>{t.ivrTitle || "24x7 Pashu Seva IVR"}</span>
          </div>
          <p className="text-[11px] text-emerald-100 font-mono">Dial 1800-180-1551</p>
          <button
            onClick={() => setIsIVROpen(true)}
            className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-[11px] transition"
          >
            {language === 'mr' ? 'व्हॉइस सेवा सुरू करा' : language === 'hi' ? 'वॉयस सेवा शुरू करें' : 'Launch Voice Simulator'}
          </button>
        </div>
      </div>
    </aside>
  );
}
