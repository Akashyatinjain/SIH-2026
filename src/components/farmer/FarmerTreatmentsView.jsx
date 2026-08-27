import React from 'react';
import { 
  Pill, 
  Stethoscope, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Sparkles,
  PhoneCall,
  Download,
  AlertCircle,
  Sun,
  Moon,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FarmerTreatmentsView() {
  const { cases, addNotification, setIsIVROpen, language, t } = useApp();

  const labels = {
    mr: {
      title: "जनावरांची चालू औषधे व उपचार",
      subTitle: "डॉ. आनंद देशमुख यांनी दिलेली अधिकृत औषधोपचार चिठ्ठी",
      activeCount: "२ जनावरांचे उपचार सुरू",
      drSpecialAdvice: "डॉक्टरांचा महत्त्वाचा सल्ला:",
      callVetBtn: "डॉक्टरांना कॉल करा",
      downloadPdf: "औषध चिठ्ठी डाउनलोड (PDF)",
      dose: "डोस",
      timing: "वेळ",
      morning: "सकाळी",
      evening: "संध्याकाळी",
      twiceDaily: "सकाळी व संध्याकाळी",
      onceDaily: "दिवसातून एकदा"
    },
    hi: {
      title: "पशुओं की चालू दवाइयां व इलाज",
      subTitle: "डॉ. आनंद देशमुख द्वारा जारी सरकारी पर्ची",
      activeCount: "2 पशुओं का इलाज जारी",
      drSpecialAdvice: "डॉक्टर की विशेष सलाह:",
      callVetBtn: "डॉक्टर को कॉल करें",
      downloadPdf: "दवा पर्ची डाउनलोड (PDF)",
      dose: "मात्रा",
      timing: "समय",
      morning: "सुबह",
      evening: "शाम",
      twiceDaily: "सुबह और शाम",
      onceDaily: "दिन में एक बार"
    },
    en: {
      title: "Active Prescriptions & Medicines",
      subTitle: "Verified Veterinary Prescriptions for Ramesh Patil's Herd",
      activeCount: "2 Ongoing Treatments",
      drSpecialAdvice: "Doctor's Special Instructions:",
      callVetBtn: "Call Doctor",
      downloadPdf: "Download Rx (PDF)",
      dose: "Dose",
      timing: "Timing",
      morning: "Morning",
      evening: "Evening",
      twiceDaily: "Morning & Evening",
      onceDaily: "Once Daily"
    }
  };

  const text = labels[language] || labels.en;

  const treatments = [
    {
      id: "RX-2026-091",
      animalName: language === 'mr' ? "गौरी (गीर गाय)" : language === 'hi' ? "गौरी (गीर गाय)" : "Gauri (Gir Cow)",
      condition: language === 'mr' ? "लंपी चर्मरोग व तीव्र ताप (Nodular Fever)" : language === 'hi' ? "लंपी त्वचा रोग व तेज बुखार" : "Lumpy Skin Disease (High Fever & Nodules)",
      prescribedBy: "Dr. Anand Deshmukh",
      hospital: language === 'mr' ? "बारामती तालुका पशुवैद्यकीय रुग्णालय" : language === 'hi' ? "बारामती तालुका अस्पताल" : "Baramati Taluka Hospital",
      date: "24 Feb 2026",
      status: language === 'mr' ? "उपचार सुरू (दिवस १/५)" : language === 'hi' ? "इलाज जारी (दिन 1/5)" : "Active (Day 1/5)",
      isUrgent: true,
      medicines: [
        {
          name: language === 'mr' ? "फ्लुनिक्सिन (ताप व वेदनाशामक इंजेक्शन)" : language === 'hi' ? "फ्लुनिक्सिन (बुखार व दर्द निवारक इंजेक्शन)" : "Flunixin (Anti-Fever / Painkiller Injection)",
          dose: "15 ml (स्नायूमध्ये / IM)",
          timing: language === 'mr' ? "सकाळी १ वेळ (३ दिवस)" : language === 'hi' ? "सुबह 1 बार (3 दिन)" : "Morning once daily (3 days)",
          schedule: "morning",
          iconColor: "text-amber-600 bg-amber-50"
        },
        {
          name: language === 'mr' ? "एन्रोफ्लॉक्सासिन १०% (अँटीबायोटिक इंजेक्शन)" : language === 'hi' ? "एन्रोफ्लोक्सासिन 10% (एंटीबायोटिक इंजेक्शन)" : "Enrofloxacin 10% (Antibiotic Injection)",
          dose: "20 ml (स्नायूमध्ये / IM)",
          timing: language === 'mr' ? "सकाळी १ वेळ (५ दिवस)" : language === 'hi' ? "सुबह 1 बार (5 दिन)" : "Morning once daily (5 days)",
          schedule: "morning",
          iconColor: "text-blue-600 bg-blue-50"
        },
        {
          name: language === 'mr' ? "टॉपिक्युअर आयुर्वेदिक स्किन स्प्रे" : language === 'hi' ? "टॉपिक्योर आयुर्वेदिक स्किन स्प्रे" : "TopiCure Ayurvedic Skin Spray",
          dose: language === 'mr' ? "अंगावरील सर्व गाठींवर मारा" : language === 'hi' ? "शरीर की सभी गांठों पर छिड़कें" : "Spray on all skin nodules",
          timing: language === 'mr' ? "सकाळी व संध्याकाळी २ वेळा" : language === 'hi' ? "सुबह और शाम 2 बार" : "Twice daily (Morning & Evening)",
          schedule: "twice",
          iconColor: "text-emerald-600 bg-emerald-50"
        }
      ],
      instructions: language === 'mr' 
        ? "गाय कोरड्या आणि वेगळ्या गोठ्यात ठेवा. गाठी कधीही हाताने किंवा सुईने फोडू नका. हिरवा चारा आणि गरम पेज खायला द्या."
        : language === 'hi'
        ? "गाय को सूखे और अलग बाड़े में रखें। गांठों को कभी हाथ या सुई से न फोड़ें। हरा चारा और ताजा दलिया खाने को दें।"
        : "Keep cow isolated in a dry shed. Never lance or pierce nodules. Feed green maize & fresh warm gruel."
    },
    {
      id: "RX-2026-074",
      animalName: language === 'mr' ? "कल्याणी (मुर्रा म्हैस)" : language === 'hi' ? "कल्याणी (मुर्रा भैंस)" : "Kalyani (Murrah Buffalo)",
      condition: language === 'mr' ? "मस्टायटीस / कासदाह (स्तनाचा आजार)" : language === 'hi' ? "थनैला / मस्टाइटिस रोग" : "Sub-clinical Mastitis (Left Hind Teat)",
      prescribedBy: "Dr. Anand Deshmukh",
      hospital: language === 'mr' ? "बारामती तालुका पशुवैद्यकीय रुग्णालय" : language === 'hi' ? "बारामती तालुका अस्पताल" : "Baramati Taluka Hospital",
      date: "18 Feb 2026",
      status: language === 'mr' ? "सुधारणा होत आहे (दिवस ४/५)" : language === 'hi' ? "सुधार हो रहा है (दिन 4/5)" : "Improving (Day 4/5)",
      isUrgent: false,
      medicines: [
        {
          name: language === 'mr' ? "सेफ्टिओफर सोडियम (कासेमध्ये सोडायची नळी)" : language === 'hi' ? "सेफ्टिओफर सोडियम (थन में डालने वाली ट्यूब)" : "Ceftiofur Sodium (Intra-mammary Teat Infusion)",
          dose: language === 'mr' ? "१ ट्यूब (आजारी सडात)" : language === 'hi' ? "1 ट्यूब (प्रभावित थन में)" : "1 tube per affected quarter",
          timing: language === 'mr' ? "दूध पूर्ण काढल्यानंतर संध्याकाळी" : language === 'hi' ? "दूध पूरा निकालने के बाद शाम को" : "Evening after complete milking",
          schedule: "evening",
          iconColor: "text-purple-600 bg-purple-50"
        },
        {
          name: language === 'mr' ? "मेलोक्सिकॅम + पॅरासिटामॉल गोळी (बोलस)" : language === 'hi' ? "मेलोक्सिकैम + पैरासिटामोल गोली (बोलस)" : "Meloxicam + Paracetamol Bolus",
          dose: language === 'mr' ? "२ मोठ्या गोळ्या खाऊ घाला" : language === 'hi' ? "2 बड़ी गोलियां खिलाएं" : "2 bolus orally",
          timing: language === 'mr' ? "सकाळी व संध्याकाळी (खाण्यानंतर)" : language === 'hi' ? "सुबह और शाम (खाने के बाद)" : "Twice daily after feed",
          schedule: "twice",
          iconColor: "text-amber-600 bg-amber-50"
        }
      ],
      instructions: language === 'mr'
        ? "औषध भरण्यापूर्वी सडातून पूर्ण दूध काढून घ्या. दूध काढल्यानंतर सड औषधी द्रावणात बुडवा."
        : language === 'hi'
        ? "दवा डालने से पहले थन से पूरा दूध निकाल लें। दूध निकालने के बाद थन को साफ रखें।"
        : "Completely strip milk before applying tube. Clean teat with antiseptic dip."
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 text-[#0A1020] font-sans max-w-4xl mx-auto pb-8">
      
      {/* ========================================================================= */}
      {/* 1. HEADER BANNER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-blue-950 via-[#0A1020] to-[#050811] text-white p-5 sm:p-6 rounded-3xl shadow-sm border border-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-blue-200 border border-white/10 mb-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{text.subTitle}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {text.title} 💊
          </h1>
        </div>

        <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-xs flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
          <Pill className="w-5 h-5 text-emerald-300" />
          <div>
            <span className="text-blue-200 text-[10px] block font-medium">Active Rx</span>
            <span className="font-black text-white text-xs sm:text-sm">{text.activeCount}</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PRESCRIPTION CARDS (Mobile-friendly Stacked Layout) */}
      {/* ========================================================================= */}
      <div className="space-y-5">
        {treatments.map((rx) => (
          <div 
            key={rx.id}
            className={`bg-white rounded-3xl border-2 p-5 sm:p-6 shadow-sm space-y-4 ${
              rx.isUrgent ? 'border-red-300 ring-2 ring-red-200/50' : 'border-slate-200'
            }`}
          >
            {/* Header: Animal Name & Diagnosis */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {rx.animalName}
                  </h3>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    {rx.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-red-700 font-black mt-0.5">
                  {language === 'mr' ? 'निदान: ' : language === 'hi' ? 'बीमारी: ' : 'Diagnosed: '} {rx.condition}
                </p>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                {language === 'mr' ? 'तपासणी दिनांक: ' : language === 'hi' ? 'जांच तारीख: ' : 'Issued: '} {rx.date}
              </div>
            </div>

            {/* Medicines List (Clean Mobile-Friendly Stacked Cards) */}
            <div className="space-y-2.5">
              <h4 className="font-black text-xs sm:text-sm uppercase tracking-wider text-slate-700">
                {language === 'mr' ? 'द्यावयाची औषधे व डोस:' : language === 'hi' ? 'दवाइयां और देने का समय:' : 'Prescribed Medicines & Dose:'}
              </h4>

              <div className="grid grid-cols-1 gap-2.5">
                {rx.medicines.map((med, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${med.iconColor}`}>
                        {idx + 1}
                      </div>

                      <div className="min-w-0">
                        <h5 className="font-black text-sm text-slate-900 leading-snug">
                          {med.name}
                        </h5>
                        <p className="text-xs text-slate-600 font-bold mt-0.5">
                          {text.dose}: <span className="text-[#073B32]">{med.dose}</span>
                        </p>
                      </div>
                    </div>

                    {/* Visual Schedule Badge (Morning / Night) */}
                    <div className="flex items-center gap-1.5 self-start sm:self-auto bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shrink-0">
                      {med.schedule === 'morning' ? (
                        <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                      ) : med.schedule === 'evening' ? (
                        <Moon className="w-4 h-4 text-indigo-500 shrink-0" />
                      ) : (
                        <div className="flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5 text-amber-500" />
                          <Moon className="w-3.5 h-3.5 text-indigo-500" />
                        </div>
                      )}
                      <span>{med.timing}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor's Guidance Box */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
              <h5 className="font-black text-xs text-amber-950 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{text.drSpecialAdvice}</span>
              </h5>
              <p className="text-xs text-amber-900 font-medium leading-relaxed">
                {rx.instructions}
              </p>
            </div>

            {/* Doctor Contact & Action Footer */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
              <div className="text-xs">
                <span className="text-slate-500 block text-[11px] font-medium">{language === 'mr' ? 'तपासणारे डॉक्टर:' : language === 'hi' ? 'जांचकर्ता डॉक्टर:' : 'Attending Doctor:'}</span>
                <strong className="text-slate-900 font-black">{rx.prescribedBy}</strong>
                <p className="text-slate-500 text-[11px]">{rx.hospital}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert(language === 'mr' ? "अधिकृत औषधोपचार पत्रिका डाऊनलोड झाली (PDF)" : language === 'hi' ? "दवा पर्ची डाउनलोड हो गई (PDF)" : "Downloaded official prescription PDF!")}
                  className="tap-target-48 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>{text.downloadPdf}</span>
                </button>

                <button
                  onClick={() => setIsIVROpen(true)}
                  className="tap-target-48 px-4 py-2 bg-[#073B32] hover:bg-[#052923] active:scale-95 text-white rounded-xl text-xs font-black transition flex items-center gap-1.5 shadow-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{text.callVetBtn}</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
