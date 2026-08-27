import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowLeft, 
  Check, 
  Camera, 
  MapPin, 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Share2, 
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ReportSickAnimalWizard({ onClose }) {
  const { animals, addReport, submitSickAnimalReport, addNotification, language, setIsIVROpen } = useApp();

  const [step, setStep] = useState(1); // 1: Animal, 2: Symptoms, 3: Photo, 4: Location/Confirm, 5: Assessment
  const [selectedAnimal, setSelectedAnimal] = useState(animals[0] || { id: "MH-PUN-0241", name: "Gauri", species: "Cattle (गाय)", breed: "Gir", imageUrl: "/images/animals/gir_cow_gauri.jpg" });
  
  const [selectedSymptoms, setSelectedSymptoms] = useState([
    "High Fever (ताप)",
    "Nodular Skin Lumps (त्वचेवर गाठी)",
    "Milk Yield Drop (दूध घट)"
  ]);
  const [duration, setDuration] = useState("2 Days");
  const [stoppedEating, setStoppedEating] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const symptomList = [
    { id: "fever", icon: "🌡️", label: language === 'mr' ? "तीव्र ताप (High Fever)" : language === 'hi' ? "तेज बुखार (High Fever)" : "High Fever (ताप)", severity: "high" },
    { id: "nodules", icon: "🔴", label: language === 'mr' ? "त्वचेवर गाठी (Skin Lumps)" : language === 'hi' ? "त्वचा पर गांठें (Skin Lumps)" : "Nodular Skin Lumps (गाठी)", severity: "high" },
    { id: "salivation", icon: "💧", label: language === 'mr' ? "लाळ गळणे (Salivation)" : language === 'hi' ? "मुंह से लार बहना (Salivation)" : "Excessive Salivation (लाळ)", severity: "high" },
    { id: "blisters", icon: "👄", label: language === 'mr' ? "तोंडावर/खुरावर फोड (Blisters)" : language === 'hi' ? "मुंह/खुर पर छाले (Blisters)" : "Mouth/Foot Blisters (फोड)", severity: "critical" },
    { id: "milk_drop", icon: "🥛", label: language === 'mr' ? "दूध अचानक कमी झाले (Milk Drop)" : language === 'hi' ? "दूध में भारी गिरावट (Milk Drop)" : "Milk Yield Drop (दूध घट)", severity: "medium" },
    { id: "eating", icon: "🌾", label: language === 'mr' ? "चारा खाणे बंद केले (Stopped Feed)" : language === 'hi' ? "चारा खाना बंद किया (Off Feed)" : "Stopped Eating (चारा बंद)", severity: "high" },
    { id: "respiratory", icon: "🫁", label: language === 'mr' ? "श्वास घेण्यास त्रास / धाप" : language === 'hi' ? "सांस लेने में तकलीफ" : "Labored Breathing (दम लागणे)", severity: "high" },
    { id: "diarrhea", icon: "💩", label: language === 'mr' ? "हगवण / जुलाब (Diarrhea)" : language === 'hi' ? "दस्त / डायरिया (Diarrhea)" : "Severe Diarrhea (हगवण)", severity: "medium" },
    { id: "lameness", icon: "🦵", label: language === 'mr' ? "लंगडणे / चालता न येणे" : language === 'hi' ? "लंगड़ाना / चलने में दिक्कत" : "Lameness / Limping (लंगडणे)", severity: "medium" }
  ];

  const toggleSymptom = (label) => {
    if (selectedSymptoms.includes(label)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== label));
    } else {
      setSelectedSymptoms([...selectedSymptoms, label]);
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      
      const newCase = {
        caseId: "PS-2026-004281",
        reportedAt: "Just now",
        date: "2026-02-24 20:00",
        farmerName: "Ramesh Patil",
        farmerPhone: "+91 98224 51092",
        village: "Khedgaon",
        block: "Baramati",
        district: "Pune",
        animalId: selectedAnimal?.id || "MH-PUN-0241",
        animalName: selectedAnimal?.name || "Gauri",
        species: selectedAnimal?.species || "Cattle (Cow)",
        breed: selectedAnimal?.breed || "Gir Indigenous",
        symptoms: selectedSymptoms,
        duration: duration,
        stoppedEating: stoppedEating,
        milkDecreased: true,
        nearbySimilarCases: true,
        recentDeaths: false,
        riskScore: 86,
        riskLevel: "HIGH",
        suspectedDisease: "Lumpy Skin Disease (LSD) - Cluster Suspect",
        status: "under_review",
        assignedVet: "Dr. Anand Deshmukh",
        locationCoord: { lat: 18.1524, lng: 74.5768 },
        photoUrl: selectedAnimal?.imageUrl || "/images/animals/gir_cow_gauri.jpg"
      };

      if (typeof submitSickAnimalReport === 'function') {
        submitSickAnimalReport({
          animalTag: selectedAnimal.id,
          farmerName: "Ramesh Patil",
          village: "Khedgaon",
          symptoms: selectedSymptoms
        });
      } else if (typeof addReport === 'function') {
        addReport(newCase);
      }

      if (typeof addNotification === 'function') {
        addNotification("🚨 Health Alert Dispatched", `Case registered for ${selectedAnimal.name}. Dr. Anand Deshmukh notified.`, "alert");
      }
      setStep(5);
    }, 450);
  };

  const labels = {
    mr: {
      headerTitle: "आजारी जनावराची तक्रार नोंदवा",
      headerSub: "१ मिनिटात सोपी नोंद • थेट डॉक्टरांना अलर्ट",
      step1Nav: "१. जनावर निवडा",
      step2Nav: "२. लक्षणे सांगा",
      step3Nav: "३. फोटो",
      step4Nav: "४. खात्री करा",
      step1Title: "कोणते जनावर आजारी आहे?",
      step1Sub: "तुमच्या गोठ्यातील आजारी जनावर निवडा",
      step2Title: "जनावरामध्ये कोणती लक्षणे दिसत आहेत?",
      step2Sub: "दिसणाऱ्या सर्व लक्षणांवर क्लिक करा",
      sicknessDuration: "किती दिवसांपासून आजारी आहे?",
      offFeed: "चारा खाणे बंद केले आहे का?",
      yes: "होय, चारा बंद केला",
      no: "नाही, खात आहे",
      step3Title: "आजाराचा किंवा गाठींचा फोटो",
      step3Sub: "फोटो जोडल्याने डॉक्टर योग्य औषधांसह वेगाने पोहोचू शकतात",
      photoAttached: "गाठींचा फोटो जोडला आहे",
      step4Title: "माहिती तपासा व तक्रार पाठवा",
      step4Sub: "ही माहिती बारामती शासकीय पशुवैद्यकीय केंद्राकडे पाठवली जाईल",
      villageGPS: "ठिकाण: खेडगाव, ता. बारामती, पुणे",
      farmerName: "शेतकरी: रमेश पाटील (+91 98224 51092)",
      nextBtn: "पुढे जा →",
      backBtn: "← मागे",
      submitBtn: "तक्रार पाठवा (Submit)",
      submitting: "माहिती पाठवत आहे...",
      // Result Step
      successTitle: "तक्रार यशस्वीरित्या नोंदवली गेली!",
      suspectedDisease: "संभाव्य आजार: लंपी चर्मरोग (LSD)",
      doctorNotified: "डॉ. आनंद देशमुख (बारामती रुग्णालय) यांना अलर्ट पाठवला आहे.",
      fieldWorkerNotice: "पशुसखी सुनिता पवार तात्काळ आपल्या गोठ्याकडे निघाल्या आहेत.",
      immediateStepsHead: "शेतकऱ्यांनी आत्ता ताबडतोब करायचे काम:",
      stepA: "१. आजारी जनावराला इतर जनावरांपासून ताबडतोब वेगळे कोरड्या गोठ्यात बांधा.",
      stepB: "२. अंगावरील गाठींना कधीही टोकदार वस्तूने फोडू नका.",
      stepC: "३. गोठ्यात कडुनिंब किंवा औषधाचा फवारा मारा जेणेकरून डास-माश्या चावणार नाहीत.",
      finishBtn: "डॅशबोर्डवर केस ट्रॅक करा →",
      callDoctorDirect: "डॉक्टरांशी थेट बोला"
    },
    hi: {
      headerTitle: "बीमार पशु की रिपोर्ट दर्ज करें",
      headerSub: "1 मिनट में आसान रिपोर्ट • सीधे डॉक्टर को अलर्ट",
      step1Nav: "1. पशु चुनें",
      step2Nav: "2. लक्षण बताएं",
      step3Nav: "3. फोटो",
      step4Nav: "4. पुष्टि करें",
      step1Title: "कौन सा पशु बीमार है?",
      step1Sub: "अपने बाड़े के बीमार पशु को चुनें",
      step2Title: "पशु में कौन से लक्षण दिख रहे हैं?",
      step2Sub: "दिखने वाले सभी लक्षणों पर क्लिक करें",
      sicknessDuration: "कितने दिन से बीमार है?",
      offFeed: "क्या चारा खाना बंद कर दिया है?",
      yes: "हां, चारा बंद कर दिया",
      no: "नहीं, थोड़ा खा रहा है",
      step3Title: "बीमारी या गांठों का फोटो",
      step3Sub: "फोटो जोड़ने से डॉक्टर सही दवाइयों के साथ तुरंत पहुंचते हैं",
      photoAttached: "गांठों का फोटो संलग्न है",
      step4Title: "जानकारी जांचें और सबमिट करें",
      step4Sub: "यह रिपोर्ट बारामती सरकारी पशु चिकित्सालय को भेजी जाएगी",
      villageGPS: "स्थान: खेडगांव, ता. बारामती, पुणे",
      farmerName: "किसान: रमेश पाटिल (+91 98224 51092)",
      nextBtn: "आगे बढ़ें →",
      backBtn: "← पीछे",
      submitBtn: "रिपोर्ट भेजें (Submit)",
      submitting: "रिपोर्ट भेजी जा रही है...",
      // Result Step
      successTitle: "रिपोर्ट सफलतापूर्वक दर्ज हो गई!",
      suspectedDisease: "संभावित बीमारी: लंपी त्वचा रोग (LSD)",
      doctorNotified: "डॉ. आनंद देशमुख (बारामती अस्पताल) को सूचना भेज दी गई है।",
      fieldWorkerNotice: "पशुसखी सुनीता पवार आपके बाड़े की ओर आ रही हैं।",
      immediateStepsHead: "किसान अभी तुरंत ये काम करें:",
      stepA: "1. बीमार पशु को बाकी पशुओं से तुरंत अलग सूखे बाड़े में बांधें।",
      stepB: "2. शरीर की गांठों को कभी हाथ या सुई से न फोड़ें।",
      stepC: "3. बाड़े में नीम के पानी का छिड़काव करें ताकि मक्खी-मच्छर न काटें।",
      finishBtn: "डैशबोर्ड पर केस ट्रैक करें →",
      callDoctorDirect: "डॉक्टर से सीधे बात करें"
    },
    en: {
      headerTitle: "Report Sick Animal",
      headerSub: "Simple 1-minute report • Instant Veterinary Alert",
      step1Nav: "1. Animal",
      step2Nav: "2. Symptoms",
      step3Nav: "3. Photo",
      step4Nav: "4. Confirm",
      step1Title: "Which animal is unwell?",
      step1Sub: "Select the sick animal from your registered herd",
      step2Title: "What symptoms do you observe?",
      step2Sub: "Tap all observed symptoms that apply",
      sicknessDuration: "How many days has it been sick?",
      offFeed: "Has it stopped eating/grazing?",
      yes: "Yes, completely off feed",
      no: "No, eating a little",
      step3Title: "Attach Photo of Sickness",
      step3Sub: "Photo helps the veterinarian arrive prepared with proper medicines",
      photoAttached: "Skin nodules photo attached",
      step4Title: "Verify & Send Report",
      step4Sub: "Report will be dispatched to Baramati Taluka Veterinary Unit",
      villageGPS: "Location: Khedgaon Village, Baramati, Pune",
      farmerName: "Farmer: Ramesh Patil (+91 98224 51092)",
      nextBtn: "Next Step →",
      backBtn: "← Back",
      submitBtn: "Send Report (Submit)",
      submitting: "Submitting report...",
      // Result Step
      successTitle: "Report Successfully Registered!",
      suspectedDisease: "Suspected Issue: Lumpy Skin Disease (LSD)",
      doctorNotified: "Dr. Anand Deshmukh has received your clinical alert.",
      fieldWorkerNotice: "Pashu Sakhi Sunita Pawar has been dispatched to your farm.",
      immediateStepsHead: "Immediate Steps for Farmer Right Now:",
      stepA: "1. Isolate the sick animal in a dry stall immediately away from other cattle.",
      stepB: "2. Never lance or pierce the skin nodules manually.",
      stepC: "3. Spray shed with neem water to prevent fly bites.",
      finishBtn: "Track Case on Dashboard →",
      callDoctorDirect: "Call Doctor Directly"
    }
  };

  const text = labels[language] || labels.en;

  const coreAnimals = [
    animals.find(a => a.name.includes("Gauri") || a.id === "MH-PUN-0241") || animals[0],
    animals.find(a => a.name.includes("Kalyani") || a.id === "MH-PUN-0109") || animals[1],
    animals.find(a => a.name.includes("Laxmi") || a.healthStatus === "healthy") || animals[3]
  ].filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden my-auto flex flex-col max-h-[92vh] animate-fadeInScale">
        
        {/* ========================================================================= */}
        {/* HEADER BAR */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-red-600 via-red-600 to-[#073B32] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white font-black text-lg shrink-0">
              🚨
            </div>
            <div>
              <h2 className="font-black text-base sm:text-lg text-white leading-tight">
                {text.headerTitle}
              </h2>
              <p className="text-xs text-red-100 font-medium">
                {text.headerSub}
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar (Clean on mobile) */}
        {step < 5 && (
          <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500 overflow-x-auto no-scrollbar">
            <span className={step >= 1 ? "text-red-700 font-black" : "text-slate-400"}>{text.step1Nav}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className={step >= 2 ? "text-red-700 font-black" : "text-slate-400"}>{text.step2Nav}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className={step >= 3 ? "text-red-700 font-black" : "text-slate-400"}>{text.step3Nav}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className={step >= 4 ? "text-red-700 font-black" : "text-slate-400"}>{text.step4Nav}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 text-[#0A1020]">
          
          {/* ========================================================================= */}
          {/* STEP 1: SELECT ANIMAL */}
          {/* ========================================================================= */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-snug">
                  {text.step1Title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {text.step1Sub}
                </p>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {coreAnimals.map((animal) => {
                  const isSelected = selectedAnimal.id === animal.id;
                  return (
                    <div
                      key={animal.id}
                      onClick={() => setSelectedAnimal(animal)}
                      className={`tap-target-48 p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between gap-3 active:scale-[0.99] ${
                        isSelected
                          ? "border-red-600 bg-red-50/70 shadow-sm ring-2 ring-red-200"
                          : "border-slate-200 bg-slate-50/70 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img 
                          src={animal.imageUrl} 
                          alt={animal.name} 
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0" 
                        />
                        <div className="min-w-0">
                          <h4 className="font-black text-sm sm:text-base text-slate-900 truncate">
                            {animal.name}
                          </h4>
                          <p className="text-xs text-slate-600 font-medium truncate">
                            {animal.species} • {animal.breed}
                          </p>
                        </div>
                      </div>

                      <div className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
                        isSelected ? "bg-red-600 text-white" : "border-2 border-slate-300 text-transparent"
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: SYMPTOMS (Large Touch Buttons) */}
          {/* ========================================================================= */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-snug">
                  {text.step2Title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {text.step2Sub}
                </p>
              </div>

              {/* Symptom Tap Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {symptomList.map((s) => {
                  const isSelected = selectedSymptoms.includes(s.label) || selectedSymptoms.some(item => item.includes(s.id) || item.includes(s.label.slice(0, 4)));
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSymptom(s.label)}
                      className={`tap-target-48 p-3 rounded-2xl border-2 text-left text-xs sm:text-sm font-bold transition flex items-center justify-between gap-2 active:scale-[0.98] ${
                        isSelected 
                          ? "border-red-600 bg-red-600 text-white shadow-xs" 
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span className="text-base">{s.icon}</span>
                        <span className="truncate">{s.label}</span>
                      </span>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-white shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quick Questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <label className="block text-xs font-black text-slate-800 mb-1">
                    {text.sicknessDuration}
                  </label>
                  <select 
                    value={duration} 
                    onChange={e => setDuration(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none"
                  >
                    <option value="1 Day">१ दिवस (1 Day)</option>
                    <option value="2 Days">२ दिवस (2 Days)</option>
                    <option value="3-5 Days">३ ते ५ दिवस (3-5 Days)</option>
                    <option value="> 1 Week">१ आठवड्यापेक्षा जास्त (&gt; 1 Week)</option>
                  </select>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <label className="block text-xs font-black text-slate-800 mb-1">
                    {text.offFeed}
                  </label>
                  <select 
                    value={stoppedEating ? "yes" : "no"} 
                    onChange={e => setStoppedEating(e.target.value === "yes")}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none"
                  >
                    <option value="yes">{text.yes}</option>
                    <option value="no">{text.no}</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: PHOTO EVIDENCE ONLY (Clean, No Voice Noise) */}
          {/* ========================================================================= */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-snug">
                  {text.step3Title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {text.step3Sub}
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center space-y-3">
                <img 
                  src={selectedAnimal.imageUrl} 
                  alt="Symptom preview" 
                  className="w-full max-w-sm h-48 sm:h-56 object-cover rounded-2xl border border-slate-200 shadow-sm" 
                />
                <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-emerald-800 bg-emerald-100/80 px-4 py-2 rounded-2xl border border-emerald-300 shadow-2xs">
                  <Camera className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{text.photoAttached}</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: VERIFY & SUBMIT */}
          {/* ========================================================================= */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-snug">
                  {text.step4Title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {text.step4Sub}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-black text-emerald-900">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{text.villageGPS}</span>
                </div>
                <div className="text-slate-700 space-y-1 font-medium border-t border-slate-200 pt-2">
                  <p><strong>{text.farmerName}</strong></p>
                  <p><strong>जनावर / Animal:</strong> {selectedAnimal.name} ({selectedAnimal.species} • {selectedAnimal.breed})</p>
                  <p><strong>लक्षणे / Symptoms:</strong> {selectedSymptoms.join(', ')}</p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200 text-xs text-blue-950 font-bold flex items-center gap-2">
                <span>⚡</span>
                <span>तक्रार पाठवताच बारामती शासकीय पशुवैद्यकीय डॉक्टरांना तात्काळ अलर्ट मिळेल.</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 5: SIMPLE ASSESSMENT & FARMER ACTION GUIDANCE */}
          {/* ========================================================================= */}
          {step === 5 && (
            <div className="space-y-5 text-center py-2 animate-fadeInScale">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl font-black">
                ✓
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {text.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-red-700 font-black">
                  {text.suspectedDisease}
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-left text-xs sm:text-sm text-emerald-950 space-y-2">
                <p className="font-black flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{text.doctorNotified}</span>
                </p>
                <p className="text-xs text-emerald-800 font-medium pl-7">
                  {text.fieldWorkerNotice}
                </p>
              </div>

              {/* Immediate Farmer Guidance */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left text-xs space-y-2">
                <h4 className="font-black text-xs text-amber-950 uppercase tracking-wider">
                  {text.immediateStepsHead}
                </h4>
                <ul className="space-y-1.5 text-amber-900 font-medium">
                  <li>• {text.stepA}</li>
                  <li>• {text.stepB}</li>
                  <li>• {text.stepC}</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => setIsIVROpen(true)}
                  className="tap-target-48 flex-1 py-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black rounded-2xl text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{text.callDoctorDirect}</span>
                </button>

                <button
                  onClick={onClose}
                  className="tap-target-48 flex-1 py-3 bg-[#073B32] hover:bg-[#052923] active:scale-95 text-white font-black rounded-2xl text-xs sm:text-sm shadow-md transition"
                >
                  {text.finishBtn}
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        {step < 5 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="tap-target-48 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:bg-slate-100 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{text.backBtn}</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="tap-target-48 px-6 py-2.5 bg-[#073B32] hover:bg-[#052923] active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-sm transition"
              >
                <span>{text.nextBtn}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="tap-target-48 px-6 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-md transition"
              >
                <span>{isSubmitting ? text.submitting : text.submitBtn}</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
