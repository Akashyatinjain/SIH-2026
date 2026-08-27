import React, { useState } from 'react';
import { 
  ShieldAlert, 
  PlusCircle, 
  MapPin, 
  Calendar, 
  Clock, 
  PhoneCall, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  Stethoscope, 
  Sparkles, 
  Camera, 
  Mic, 
  ArrowRight,
  TrendingUp,
  Activity,
  Heart,
  Syringe,
  Pill,
  Info,
  ExternalLink,
  Volume2,
  Check,
  HelpCircle,
  Bell
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ReportSickAnimalWizard from './ReportSickAnimalWizard';
import AnimalProfileModal from '../common/AnimalProfileModal';

export default function FarmerDashboard() {
  const { 
    animals, 
    cases, 
    isReportModalOpen, 
    setIsReportModalOpen, 
    selectedAnimalForModal, 
    setSelectedAnimalForModal,
    setSelectedAnimalForProfile,
    setIsIVROpen,
    language,
    t,
    hotspots,
    setActiveTab,
    addNotification
  } = useApp();

  const [selectedAnimalFilter, setSelectedAnimalFilter] = useState('all');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Ramesh Patil's Herd - Exactly 3 Core Animals (1 Attention, 1 Treatment, 1 Healthy)
  const gauri = animals.find(a => a.name.includes("Gauri") || a.id === "MH-PUN-0241") || animals[0];
  const kalyani = animals.find(a => a.name.includes("Kalyani") || a.id === "MH-PUN-0109") || animals[1];
  const laxmi = animals.find(a => a.name.includes("Laxmi") || a.healthStatus === "healthy") || animals[3];
  
  const farmerAnimals = [gauri, kalyani, laxmi].filter(Boolean);
  const healthyAnimals = farmerAnimals.filter(a => a.healthStatus === 'healthy');
  const underTreatmentAnimals = farmerAnimals.filter(a => a.healthStatus === 'under_treatment');
  const attentionAnimals = farmerAnimals.filter(a => a.healthStatus === 'needs_attention');

  const filteredAnimals = selectedAnimalFilter === 'healthy' 
    ? healthyAnimals 
    : selectedAnimalFilter === 'under_treatment' 
    ? underTreatmentAnimals 
    : selectedAnimalFilter === 'needs_attention'
    ? attentionAnimals
    : farmerAnimals;

  const masterCase = cases.find(c => c.caseId === "PS-2026-004281") || cases[0];

  // Helper translations for farmer-friendly UI
  const labels = {
    mr: {
      greeting: "रामराम",
      farmerName: "रमेश पाटील",
      villageTag: "खेडगाव, ता. बारामती",
      helplineBtn: "मोफत हेल्पलाइन (1800-180-1551)",
      reportBtn: "माझं जनावर आजारी आहे",
      reportSub: "लक्षणे निवडा व फोटो जोडा • १ मिनिटात डॉक्टरकडे संदेश",
      vaccineBtn: "मोफत लसीकरण",
      vaccineSub: "१२ दिवसात लाळ-खुरकत लस",
      doctorBtn: "डॉक्टरांशी बोला",
      doctorSub: "डॉ. आनंद देशमुख (बारामती)",
      myHerdTitle: "माझ्या गोठ्यातील जनावरे",
      totalHerd: "एकूण ३ जनावरे",
      healthy: "निरोगी",
      inTreatment: "उपचार सुरू",
      needsCare: "तातडीने लक्ष द्या",
      dangerAlertTitle: "⚠️ परिसरातील रोगाचा इशारा",
      dangerAlertSub: "जवळच्या ३ गावांमध्ये लंपी आजार आढळला आहे (८ किमी परिसर)",
      precaution1: "आजारी जनावराला इतर जनावरांपासून वेगळे बांधा.",
      precaution2: "गोठ्यात कडुनिंब किंवा औषधाचा फवारा मारा.",
      precaution3: "आठवडी जनावरांच्या बाजारात जाणे टाळा.",
      listenAudio: "आवाजात ऐका (मराठी)",
      playingAudio: "आवाज वाजत आहे...",
      vaccineCampTitle: "मोफत शासकीय लसीकरण शिबीर",
      vaccineCampDesc: "या शनिवारी खेडगाव ग्रामपंचायत येथे सकाळी ९ ते दुपारी ४",
      bookCampBtn: "लसीकरणासाठी नाव नोंदवा",
      activeCaseTitle: "चालू केस: गौरी गायीचा उपचार",
      step1: "नोंद झाली",
      step2: "डॉक्टर निघाले",
      step3: "औषध सुरू",
      viewPassport: "आरोग्य पत्रिका पहा",
      quickActionHeader: "शेतकऱ्यांसाठी मुख्य पर्याय",
      allAnimals: "सर्व",
      clickToOpen: "संपूर्ण माहिती पहा"
    },
    hi: {
      greeting: "नमस्ते",
      farmerName: "रमेश पाटिल",
      villageTag: "खेडगांव, ता. बारामती",
      helplineBtn: "टोल-फ्री हेल्पलाइन (1800-180-1551)",
      reportBtn: "मेरा पशु बीमार है",
      reportSub: "लक्षण चुनें व फोटो जोड़ें • 1 मिनट में डॉक्टर को सूचना",
      vaccineBtn: "मुफ्त टीकाकरण",
      vaccineSub: "12 दिन में खुरपका-मुंहपका टीका",
      doctorBtn: "डॉक्टर से बात करें",
      doctorSub: "डॉ. आनंद देशमुख (बारामती)",
      myHerdTitle: "मेरे बाड़े के पशु",
      totalHerd: "कुल 3 पशु",
      healthy: "स्वस्थ",
      inTreatment: "इलाज जारी",
      needsCare: "तुरंत ध्यान दें",
      dangerAlertTitle: "⚠️ आसपास बीमारी का खतरा",
      dangerAlertSub: "पास के 3 गांवों में लंपी बीमारी पाई गई है (8 किमी क्षेत्र)",
      precaution1: "बीमार पशु को बाकी पशुओं से तुरंत अलग बांधें।",
      precaution2: "बाड़े में नीम का पानी या कीटनाशक छिड़कें।",
      precaution3: "इस सप्ताह पशु हाट या बाजार में न जाएं।",
      listenAudio: "आवाज में सुनें (हिंदी)",
      playingAudio: "आवाज चल रही है...",
      vaccineCampTitle: "मुफ्त सरकारी टीकाकरण कैंप",
      vaccineCampDesc: "इस शनिवार खेडगांव ग्राम पंचायत भवन में सुबह 9 से शाम 4",
      bookCampBtn: "टीके के लिए स्लॉट बुक करें",
      activeCaseTitle: "सक्रिय केस: गौरी गाय का इलाज",
      step1: "रिपोर्ट दर्ज",
      step2: "डॉक्टर विजिट",
      step3: "दवा शुरू",
      viewPassport: "स्वास्थ्य कार्ड देखें",
      quickActionHeader: "किसान मुख्य सुविधाएं",
      allAnimals: "सभी",
      clickToOpen: "पूरी जानकारी देखें"
    },
    en: {
      greeting: "Namaste",
      farmerName: "Ramesh Patil",
      villageTag: "Khedgaon Village • Baramati",
      helplineBtn: "Toll-Free Helpline 1800-180-1551",
      reportBtn: "My Animal is Sick",
      reportSub: "Pick symptoms & attach photo • Vet alerted in 1 minute",
      vaccineBtn: "Free Vaccines",
      vaccineSub: "FMD Booster due in 12 days",
      doctorBtn: "Call Doctor",
      doctorSub: "Dr. Anand Deshmukh (Baramati)",
      myHerdTitle: "My Animals",
      totalHerd: "3 Animals",
      healthy: "Healthy",
      inTreatment: "In Treatment",
      needsCare: "Needs Attention",
      dangerAlertTitle: "⚠️ Disease Warning Near You",
      dangerAlertSub: "Lumpy Skin disease found in 3 nearby villages (8 km)",
      precaution1: "Separate sick cows in a clean, dry shed immediately.",
      precaution2: "Spray shed with neem water to keep flies away.",
      precaution3: "Do not visit the cattle market this week.",
      listenAudio: "Listen Voice Advisory",
      playingAudio: "Playing audio...",
      vaccineCampTitle: "Free Government Vaccine Camp",
      vaccineCampDesc: "Saturday at Khedgaon Gram Panchayat Office (9 AM - 4 PM)",
      bookCampBtn: "Book Free Vaccine Slot",
      activeCaseTitle: "Active Case: Cow Gauri",
      step1: "Report Sent",
      step2: "Doctor Assigned",
      step3: "Medicine Given",
      viewPassport: "View Health Card",
      quickActionHeader: "Quick Actions",
      allAnimals: "All",
      clickToOpen: "View Details"
    }
  };

  const text = labels[language] || labels.en;

  const handlePlayVoiceAdvice = () => {
    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(
        language === 'mr'
          ? "सावधान! खेडगाव परिसरात लंपी आजाराची लक्षणे आढळली आहेत. आजारी जनावरांना वेगळे ठेवा आणि गोठ्यात कडुनिंब पाण्याचा फवारा मारा."
          : language === 'hi'
          ? "सावधान! खेडगांव क्षेत्र में लंपी बीमारी के लक्षण मिले हैं। बीमार पशुओं को अलग रखें और बाड़े में नीम के पानी का छिड़काव करें।"
          : "Attention! Lumpy Skin Disease signs reported near Khedgaon. Isolate sick cattle and spray neem extract in your sheds."
      );
      msg.lang = language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
      msg.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(msg);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  const handleOpenAnimal = (animal) => {
    if (typeof setSelectedAnimalForProfile === 'function') {
      setSelectedAnimalForProfile(animal);
    } else if (typeof setSelectedAnimalForModal === 'function') {
      setSelectedAnimalForModal(animal);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 text-[#0A1020] font-sans max-w-4xl mx-auto pb-6">
      
      {/* ========================================================================= */}
      {/* 1. SIMPLE, WARM FARMER HERO CARD (Optimized for Mobile) */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-br from-[#073B32] via-[#095245] to-[#0A1020] text-white p-5 sm:p-6 rounded-3xl shadow-md border border-[#0F6555] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold text-emerald-200 border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{text.villageTag}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {text.greeting}, {text.farmerName} 🙏
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              {language === 'mr' ? 'पशुरक्षा शेतकरी सेवा' : language === 'hi' ? 'पशुरक्षा किसान सेवा' : 'JIVSANKET Farmer Portal'} • {farmerAnimals.length} {text.totalHerd}
            </p>
          </div>

          {/* Quick Helpline Tap Button */}
          <button
            onClick={() => setIsIVROpen(true)}
            className="tap-target-48 px-4 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 active:scale-95 border border-emerald-400/40 rounded-2xl text-xs sm:text-sm font-black text-white flex items-center justify-center gap-2.5 transition shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-emerald-300 shrink-0 animate-bounce" />
            <span>{text.helplineBtn}</span>
          </button>
        </div>

        {/* Subtle background element */}
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. BIG PRIMARY ACTIONS (Farmer Thumb Zone) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        
        {/* BIG BUTTON 1: Report Sickness (Priority Red) */}
        <button
          onClick={() => setIsReportModalOpen(true)}
          className="tap-target-48 p-4 sm:p-5 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 active:scale-[0.98] text-white rounded-3xl shadow-lg border-2 border-red-400 text-left flex items-center justify-between gap-3 group transition"
        >
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 bg-white/25 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>{language === 'mr' ? 'तातडीने मदत' : language === 'hi' ? 'तुरंत मदद' : 'Emergency'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black leading-tight text-white">
              {text.reportBtn} 🚨
            </h2>
            <p className="text-[11px] sm:text-xs text-red-100 font-medium leading-snug">
              {text.reportSub}
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform">
            <PlusCircle className="w-7 h-7" />
          </div>
        </button>

        {/* BIG BUTTON 2: Free Vaccines */}
        <button
          onClick={() => setActiveTab('vaccines')}
          className="tap-target-48 p-4 sm:p-5 bg-white hover:bg-emerald-50/70 active:scale-[0.98] rounded-3xl border-2 border-emerald-200 shadow-sm text-left flex items-center justify-between gap-3 group transition"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
              {language === 'mr' ? 'मोफत सरकारी' : language === 'hi' ? 'मुफ्त सरकारी' : 'Govt Free'}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {text.vaccineBtn} 💉
            </h3>
            <p className="text-[11px] sm:text-xs text-emerald-800 font-bold">
              {text.vaccineSub}
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700 group-hover:scale-105 transition-transform">
            <Syringe className="w-6 h-6" />
          </div>
        </button>

        {/* BIG BUTTON 3: Call Doctor / Medicines */}
        <button
          onClick={() => setActiveTab('treatments')}
          className="tap-target-48 p-4 sm:p-5 bg-white hover:bg-blue-50/70 active:scale-[0.98] rounded-3xl border-2 border-blue-200 shadow-sm text-left flex items-center justify-between gap-3 group transition"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900">
              {language === 'mr' ? 'चालू औषधे' : language === 'hi' ? 'चालू दवाइयां' : 'Active Rx'}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {text.doctorBtn} 🩺
            </h3>
            <p className="text-[11px] sm:text-xs text-blue-800 font-bold">
              {text.doctorSub}
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-700 group-hover:scale-105 transition-transform">
            <Pill className="w-6 h-6" />
          </div>
        </button>

      </div>

      {/* ========================================================================= */}
      {/* 3. SIMPLIFIED HERD HEALTH OVERVIEW (No Tiny Clutter) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
        
        {/* Title & Quick Scannable Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span>{text.myHerdTitle}</span>
              <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2.5 py-0.5 rounded-full">
                {farmerAnimals.length}
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              {language === 'mr' ? 'खालील जनावरावर क्लिक करून आरोग्य माहिती पहा' : language === 'hi' ? 'पशु पर क्लिक करके स्वास्थ्य कार्ड देखें' : 'Tap any animal to see health card'}
            </p>
          </div>

          {/* Quick Filter Buttons (Big Tap Targets) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedAnimalFilter('all')}
              className={`tap-target-48 px-3.5 py-1.5 rounded-xl text-xs font-black transition ${
                selectedAnimalFilter === 'all' 
                  ? 'bg-[#073B32] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {text.allAnimals} ({farmerAnimals.length})
            </button>

            <button
              onClick={() => setSelectedAnimalFilter('needs_attention')}
              className={`tap-target-48 px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                selectedAnimalFilter === 'needs_attention' 
                  ? 'bg-red-600 text-white shadow-xs' 
                  : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>{text.needsCare} ({attentionAnimals.length})</span>
            </button>

            <button
              onClick={() => setSelectedAnimalFilter('under_treatment')}
              className={`tap-target-48 px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                selectedAnimalFilter === 'under_treatment' 
                  ? 'bg-amber-600 text-white shadow-xs' 
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>{text.inTreatment} ({underTreatmentAnimals.length})</span>
            </button>

            <button
              onClick={() => setSelectedAnimalFilter('healthy')}
              className={`tap-target-48 px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                selectedAnimalFilter === 'healthy' 
                  ? 'bg-emerald-700 text-white shadow-xs' 
                  : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{text.healthy} ({healthyAnimals.length})</span>
            </button>
          </div>
        </div>

        {/* Priority Attention List (Cards for animals needing care or in treatment first) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {filteredAnimals.map((animal) => {
            const isAttention = animal.healthStatus === 'needs_attention';
            const isTreatment = animal.healthStatus === 'under_treatment';

            return (
              <div
                key={animal.id}
                onClick={() => handleOpenAnimal(animal)}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 transition cursor-pointer flex items-center justify-between gap-3 active:scale-[0.98] ${
                  isAttention 
                    ? 'bg-red-50/90 border-red-400 shadow-sm ring-2 ring-red-300/60' 
                    : isTreatment 
                    ? 'bg-amber-50/80 border-amber-300 shadow-xs' 
                    : 'bg-[#FCFBF8] border-slate-200 hover:border-teal-500 shadow-xs'
                }`}
              >
                {/* Animal Photo + Simple Badge */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name} 
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs" 
                    />
                    <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${
                      isAttention ? 'bg-red-500 animate-ping' : isTreatment ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-black text-sm sm:text-base text-slate-900 truncate">
                        {animal.name}
                      </h4>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        {animal.species.split(' ')[0]}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 truncate font-medium">
                      {animal.breed} • {animal.milkYield || animal.age}
                    </p>

                    <div className="pt-0.5">
                      {isAttention ? (
                        <span className="text-[11px] font-black text-red-700 bg-red-100/80 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          🚨 {language === 'mr' ? 'तातडीने लक्ष द्या (ताप / गाठी)' : language === 'hi' ? 'तुरंत ध्यान दें (बुखार / गांठ)' : 'Needs Care (Fever / Lumps)'}
                        </span>
                      ) : isTreatment ? (
                        <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          💊 {language === 'mr' ? 'औषधोपचार सुरू' : language === 'hi' ? 'दवा चल रही है' : 'Under Treatment'}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          ✓ {text.healthy}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-slate-400">
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Animals Button */}
        <button
          onClick={() => setActiveTab('animals')}
          className="w-full tap-target-48 py-3 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold text-[#073B32] flex items-center justify-center gap-2 transition"
        >
          <span>{language === 'mr' ? 'सर्व ३ जनावरांची यादी व माहिती पहा' : language === 'hi' ? 'सभी 3 पशुओं की सूची व कार्ड देखें' : 'View All 3 Animals & Health Passports'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 4. ACTIVE CASE TRACKING CARD (Simple 3-Step Timeline) */}
      {/* ========================================================================= */}
      {masterCase && (
        <div className="bg-white rounded-3xl border-2 border-red-200 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-100 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <h3 className="font-black text-base sm:text-lg text-red-950">
                  {text.activeCaseTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {language === 'mr' ? 'तक्रार वेळ: आज संध्याकाळी ७:४५' : language === 'hi' ? 'रिपोर्ट समय: आज शाम 7:45' : 'Reported Today 7:45 PM'} • {masterCase.breed}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-800 bg-red-100 px-3 py-1 rounded-full">
                {language === 'mr' ? 'डॉ. आनंद देशमुख नियुक्त' : language === 'hi' ? 'डॉ. आनंद देशमुख नियुक्त' : 'Dr. Anand Deshmukh Assigned'}
              </span>
            </div>
          </div>

          {/* Simple 3-Step Clear Tracker for Farmers */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {/* Step 1 */}
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-1">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs mx-auto flex items-center justify-center">
                ✓
              </div>
              <p className="text-xs font-black text-emerald-950">{text.step1}</p>
              <p className="text-[10px] text-emerald-700">{language === 'mr' ? 'यशस्वी' : language === 'hi' ? 'सफल' : 'Completed'}</p>
            </div>

            {/* Step 2 */}
            <div className="p-3 bg-teal-50 border-2 border-teal-500 rounded-2xl text-center space-y-1 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-teal-700 text-white font-black text-xs mx-auto flex items-center justify-center animate-pulse">
                2
              </div>
              <p className="text-xs font-black text-teal-950">{text.step2}</p>
              <p className="text-[10px] text-teal-700 font-bold">{language === 'mr' ? 'पडताळणी चालू' : language === 'hi' ? 'चेक जारी' : 'In Progress'}</p>
            </div>

            {/* Step 3 */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-1 opacity-70">
              <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-600 font-black text-xs mx-auto flex items-center justify-center">
                3
              </div>
              <p className="text-xs font-bold text-slate-700">{text.step3}</p>
              <p className="text-[10px] text-slate-500">{language === 'mr' ? 'पुढील पायरी' : language === 'hi' ? 'अगला चरण' : 'Upcoming'}</p>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between gap-3 text-xs">
            <span className="font-bold text-amber-950">
              📢 {language === 'mr' ? 'पशुसखी सुनिता पवार आपल्या गोठ्याकडे येत आहेत.' : language === 'hi' ? 'पशुसखी सुनीता पवार आपके बाड़े की ओर आ रही हैं।' : 'Pashu Sakhi Sunita Pawar is visiting your farm.'}
            </span>
            <button
              onClick={() => setIsIVROpen(true)}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-black rounded-xl text-[11px] shrink-0"
            >
              {language === 'mr' ? 'डॉक्टरांना कॉल करा' : language === 'hi' ? 'डॉक्टर को कॉल करें' : 'Call Vet'}
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. LOCAL DISEASE WARNING & SIMPLE PRECAUTIONS (No Complex Numbers) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border-2 border-amber-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-900">
                {text.dangerAlertTitle}
              </h3>
              <p className="text-xs text-amber-900 font-bold">
                {text.dangerAlertSub}
              </p>
            </div>
          </div>

          {/* Voice Advisory Button (Farmer friendly audio) */}
          <button
            onClick={handlePlayVoiceAdvice}
            disabled={isPlayingAudio}
            className={`tap-target-48 px-3.5 py-2 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition ${
              isPlayingAudio 
                ? 'bg-amber-600 text-white animate-pulse' 
                : 'bg-amber-100 hover:bg-amber-200 active:scale-95 text-amber-900 border border-amber-300'
            }`}
          >
            <Volume2 className="w-4 h-4 shrink-0" />
            <span>{isPlayingAudio ? text.playingAudio : text.listenAudio}</span>
          </button>
        </div>

        {/* 3 Simple Action Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-1">
            <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-black text-xs flex items-center justify-center">
              1
            </div>
            <p className="text-xs font-bold text-slate-900 leading-snug">
              {text.precaution1}
            </p>
          </div>

          <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-1">
            <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-black text-xs flex items-center justify-center">
              2
            </div>
            <p className="text-xs font-bold text-slate-900 leading-snug">
              {text.precaution2}
            </p>
          </div>

          <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-1">
            <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-black text-xs flex items-center justify-center">
              3
            </div>
            <p className="text-xs font-bold text-slate-900 leading-snug">
              {text.precaution3}
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('alerts')}
          className="w-full py-2.5 text-center text-xs font-black text-amber-900 hover:underline block"
        >
          {language === 'mr' ? 'अधिक सविस्तर माहिती व उपाय पहा →' : language === 'hi' ? 'अधिक विस्तृत जानकारी व उपाय देखें →' : 'See Full Village Advisory & Details →'}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 6. NEXT VACCINE CAMP CARD (1-Tap Action) */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-emerald-900 to-[#073B32] text-white p-5 sm:p-6 rounded-3xl shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-emerald-200">
            <Syringe className="w-3.5 h-3.5" />
            <span>{language === 'mr' ? 'मोफत सरकारी शिबीर' : language === 'hi' ? 'मुफ्त सरकारी कैंप' : 'Govt Free Camp'}</span>
          </div>
          <span className="text-xs font-bold text-emerald-300">
            {language === 'mr' ? '१२ दिवस शिल्लक' : language === 'hi' ? '12 दिन शेष' : '12 Days Left'}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-black text-white">
            {text.vaccineCampTitle}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
            {text.vaccineCampDesc}
          </p>
        </div>

        <div className="pt-1 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => {
              addNotification("💉 Camp Slot Reserved", "Vaccination slot confirmed for Ramesh Patil's herd.", "success");
              alert(language === 'mr' ? "आपली खेडगाव शिबिरासाठी नोंद झाली आहे! एसएमएस पाठवला आहे." : language === 'hi' ? "आपकी खेडगांव कैंप के लिए बुकिंग हो गई है! एसएमएस भेजा गया है।" : "Free slot booked at Khedgaon Camp! Confirmation SMS sent.");
            }}
            className="tap-target-48 flex-1 py-3 bg-emerald-400 hover:bg-emerald-300 active:scale-95 text-[#073B32] font-black rounded-2xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{text.bookCampBtn}</span>
          </button>

          <button
            onClick={() => setActiveTab('vaccines')}
            className="tap-target-48 px-4 py-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold rounded-2xl text-xs transition border border-white/20 text-center"
          >
            {language === 'mr' ? 'इतर गावांतील शिबिरे' : language === 'hi' ? 'अन्य गांवों के कैंप' : 'All Camps'}
          </button>
        </div>
      </div>

      {/* Global Modals */}
      {isReportModalOpen && (
        <ReportSickAnimalWizard onClose={() => setIsReportModalOpen(false)} />
      )}
      <AnimalProfileModal />

    </div>
  );
}
