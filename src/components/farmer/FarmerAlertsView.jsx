import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  MapPin, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  Radio,
  ArrowRight,
  Flame,
  Bug,
  Volume2,
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { geographicHotspots } from '../../data/mockData';

export default function FarmerAlertsView() {
  const { setIsIVROpen, addNotification, language, t } = useApp();
  const primaryHotspot = geographicHotspots[0] || { activeCases: 7, block: "Baramati" };
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlayVoice = () => {
    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(
        language === 'mr'
          ? "सावधान! बारामती व खेडगाव परिसरात लंपी आजाराचा धोका वाढला आहे. जनावरांच्या अंगावर गाठी किंवा ताप दिसल्यास त्यांना त्वरित वेगळे बांधा आणि गोठ्यात कडुनिंबाचा फवारा मारा. मोफत मदतीसाठी 1800-180-1551 वर कॉल करा."
          : language === 'hi'
          ? "सावधान! बारामती और खेडगांव क्षेत्र में लंपी बीमारी का खतरा बढ़ा है। पशुओं के शरीर पर गांठ या बुखार दिखने पर उन्हें तुरंत अलग बांधें और बाड़े में नीम का छिड़काव करें। 1800-180-1551 पर कॉल करें।"
          : "Urgent advisory: Lumpy Skin Disease cluster detected near Khedgaon and Baramati. Isolate sick cattle immediately, spray neem extract to control biting flies, and call 1800-180-1551 for free vet assistance."
      );
      msg.lang = language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
      msg.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(msg);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 3500);
    }
  };

  const labels = {
    mr: {
      title: "स्थानिक रोगांचे इशारे व धोके",
      subTitle: "खेडगाव व बारामती परिसर (८ किमी)",
      callBtn: "मोफत हेल्पलाइन कॉल",
      listenBtn: "आवाजात ऐका (मराठी)",
      playingBtn: "आवाज वाजत आहे...",
      alertTag: "🚨 तातडीचा इशारा: लंपी आजार",
      alertHead: "खेडगाव व माळेगाव परिसरात लंपी आजाराचा प्रादुर्भाव",
      alertDesc: "ऊस तोडणीमुळे माश्या आणि डासांचे प्रमाण वाढले आहे. जवळच्या ३ गावांमध्ये ७ जनावरांना ताप आणि त्वचेवर गाठी आल्याचे नोंदवले गेले आहे.",
      casesCount: "७ जनावरे आजारी",
      casesSub: "३ गावांमध्ये नोंद",
      flyRisk: "माश्या / डासांचा प्रादुर्भाव",
      flyRiskSub: "गोठ्यात फवारा आवश्यक",
      actionHeader: "शेतकऱ्यांनी ताबडतोब करायचे ४ सोपे उपाय:",
      action1Title: "१. आजारी जनावर त्वरित वेगळे बांधा",
      action1Desc: "ज्या जनावराला ताप किंवा अंगावर गाठी आहेत, त्याला इतर निरोगी जनावरांपासून दूर वेगळ्या स्वच्छ जागेत बांधा.",
      action2Title: "२. गोठ्यात कडुनिंबाचा फवारा मारा",
      action2Desc: "माश्या आणि डास चावल्याने हा आजार पसरतो. ५% कडुनिंब अर्क किंवा औषधाचा गोठ्यात नियमित फवारा मारा.",
      action3Title: "३. गोठ्यात चुना टाका व पाणी स्वच्छ ठेवा",
      action3Desc: "गोठ्याच्या दारावर कोरडा चुना पसरा. पिण्याच्या पाण्याच्या कुंड्या रोज धुवून स्वच्छ ठेवा.",
      action4Title: "४. आठवडी बाजारात जनावरे नेऊ नका",
      action4Desc: "रोग पूर्ण आटोक्यात येईपर्यंत जनावरांची ने-आण किंवा सामूहिक चराई पूर्णपणे बंद ठेवा.",
      doctorCardTitle: "पशुवैद्यकीय डॉक्टर थेट मदत",
      doctorName: "डॉ. आनंद देशमुख (बारामती तालुका रुग्णालय)",
      doctorBtn: "डॉक्टरांशी थेट बोला"
    },
    hi: {
      title: "स्थानीय बीमारी चेतावनी व खतरे",
      subTitle: "खेडगांव व बारामती क्षेत्र (8 किमी)",
      callBtn: "टोल-फ्री हेल्पलाइन कॉल",
      listenBtn: "आवाज में सुनें (हिंदी)",
      playingBtn: "आवाज चल रही है...",
      alertTag: "🚨 जरूरी चेतावनी: लंपी रोग",
      alertHead: "खेडगांव व मालेगांव क्षेत्र में लंपी बीमारी का प्रकोप",
      alertDesc: "मक्खियों और मच्छरों के कारण यह बीमारी फैलती है। पास के 3 गांवों में 7 पशुओं को बुखार और त्वचा पर गांठें दर्ज की गई हैं।",
      casesCount: "7 पशु बीमार",
      casesSub: "3 गांवों में रिपोर्ट",
      flyRisk: "मक्खी व मच्छर का खतरा",
      flyRiskSub: "बाड़े में छिड़काव जरूरी",
      actionHeader: "किसान तुरंत करें ये 4 आसान उपाय:",
      action1Title: "1. बीमार पशु को तुरंत अलग बांधें",
      action1Desc: "जिस पशु को बुखार या गांठें हैं, उसे बाकी स्वस्थ पशुओं से दूर सूखे और साफ स्थान पर बांधें।",
      action2Title: "2. बाड़े में नीम के पानी का छिड़काव करें",
      action2Desc: "मक्खी-मच्छर के काटने से यह बीमारी फैलती है। नीम का काढ़ा या कीटनाशक नियमित रूप से छिड़कें।",
      action3Title: "3. बाड़े के चारों तरफ चूना डालें",
      action3Desc: "बाड़े के मुख्य द्वार पर सूखा चूना छिड़कें और पीने के पानी की टंकी रोज साफ करें।",
      action4Title: "4. पशु हाट या बाजार में न जाएं",
      action4Desc: "जब तक बीमारी शांत नहीं होती, पशुओं को साप्ताहिक बाजार या सामूहिक चराई पर न ले जाएं।",
      doctorCardTitle: "पशु चिकित्सक सीधी सहायता",
      doctorName: "डॉ. आनंद देशमुख (बारामती तालुका अस्पताल)",
      doctorBtn: "डॉक्टर से बात करें"
    },
    en: {
      title: "Local Disease Warnings",
      subTitle: "Khedgaon & Baramati Area (8 km radius)",
      callBtn: "Call Free Helpline",
      listenBtn: "Listen Audio Advisory",
      playingBtn: "Playing audio...",
      alertTag: "🚨 High Risk Alert: Lumpy Skin Disease",
      alertHead: "Lumpy Skin Disease Cluster in Malegaon / Khedgaon Belt",
      alertDesc: "7 cattle showing fever and skin lumps have been found in 3 adjoining villages. Biting stable flies are spreading the virus.",
      casesCount: "7 Sick Cattle",
      casesSub: "In 3 nearby villages",
      flyRisk: "High Fly / Mosquito Risk",
      flyRiskSub: "Shed spraying required",
      actionHeader: "4 Simple Protective Actions for Every Farmer:",
      action1Title: "1. Strict Animal Isolation",
      action1Desc: "Separate any animal showing fever or skin nodules from the rest of your herd into a dry shed.",
      action2Title: "2. Neem Water / Fly Repellent Spray",
      action2Desc: "Spray your shed with neem extract to stop biting flies and mosquitoes from transferring the virus.",
      action3Title: "3. Lime Dusting (Chuna)",
      action3Desc: "Spread dry slaked lime powder at the shed entrance and disinfect water troughs daily.",
      action4Title: "4. Avoid Animal Markets & Communal Grazing",
      action4Desc: "Do not move cattle to weekly animal bazaars or shared village pastures until cleared.",
      doctorCardTitle: "Veterinary Doctor Direct Line",
      doctorName: "Dr. Anand Deshmukh (Baramati Hospital)",
      doctorBtn: "Call Doctor Now"
    }
  };

  const text = labels[language] || labels.en;

  return (
    <div className="space-y-4 sm:space-y-6 text-[#0A1020] font-sans max-w-4xl mx-auto pb-8">
      
      {/* ========================================================================= */}
      {/* 1. HEADER BANNER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-[#0A1020] text-white p-5 sm:p-6 rounded-3xl shadow-sm border border-red-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-red-300 border border-white/10 mb-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>{text.subTitle}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {text.title} ⚠️
          </h1>
        </div>

        <button
          onClick={() => setIsIVROpen(true)}
          className="tap-target-48 px-5 py-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-black shadow-md transition flex items-center justify-center gap-2 shrink-0 border border-red-400"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{text.callBtn}</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 2. CRITICAL WARNING CARD WITH VOICE ADVISORY */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border-2 border-red-300 p-5 sm:p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-100 pb-3">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-900 px-3 py-1 rounded-full text-xs font-black">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>{text.alertTag}</span>
          </div>

          {/* Voice Audio Listen Button */}
          <button
            onClick={handlePlayVoice}
            disabled={isPlayingAudio}
            className={`tap-target-48 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition ${
              isPlayingAudio
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-red-50 hover:bg-red-100 active:scale-95 text-red-800 border border-red-200'
            }`}
          >
            <Volume2 className="w-4 h-4 shrink-0" />
            <span>{isPlayingAudio ? text.playingBtn : text.listenBtn}</span>
          </button>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
            {text.alertHead}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {text.alertDesc}
          </p>
        </div>

        {/* 2 Big Clear Visual Indicator Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-4 bg-red-50 rounded-2xl border border-red-200 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center font-black text-lg shrink-0">
              🚨
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-red-950">{text.casesCount}</h4>
              <p className="text-xs text-red-800 font-medium">{text.casesSub}</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-lg shrink-0">
              🦟
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-amber-950">{text.flyRisk}</h4>
              <p className="text-xs text-amber-800 font-medium">{text.flyRiskSub}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. 4 SIMPLE LIFE-SAVING ACTIONS (No complex jargon) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
        <h3 className="font-black text-base sm:text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>{text.actionHeader}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
            <h4 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0">1</span>
              <span>{text.action1Title}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium pl-8">
              {text.action1Desc}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
            <h4 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0">2</span>
              <span>{text.action2Title}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium pl-8">
              {text.action2Desc}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
            <h4 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0">3</span>
              <span>{text.action3Title}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium pl-8">
              {text.action3Desc}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
            <h4 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0">4</span>
              <span>{text.action4Title}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium pl-8">
              {text.action4Desc}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. DOCTOR DIRECT CALL CARD */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#073B32] to-[#0A1020] text-white p-5 sm:p-6 rounded-3xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase text-emerald-300 tracking-wider">
            {text.doctorCardTitle}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white">
            {text.doctorName}
          </h3>
          <p className="text-xs text-emerald-100">
            {language === 'mr' ? '२४ तास तातडीच्या सेवेसाठी उपलब्ध' : language === 'hi' ? '24 घंटे आपातकालीन सेवा उपलब्ध' : 'Available 24x7 for emergencies'}
          </p>
        </div>

        <button
          onClick={() => setIsIVROpen(true)}
          className="tap-target-48 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 active:scale-95 text-[#073B32] font-black rounded-2xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{text.doctorBtn}</span>
        </button>
      </div>

    </div>
  );
}
