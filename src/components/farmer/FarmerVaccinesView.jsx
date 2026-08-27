import React, { useState } from 'react';
import { 
  Syringe, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  ChevronRight,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { upcomingVaccinationCamps } from '../../data/mockData';

export default function FarmerVaccinesView() {
  const { animals, addNotification, language, t } = useApp();

  // Exactly 3 Core Animals for Farmer (1 Attention, 1 Treatment, 1 Healthy)
  const gauri = animals.find(a => a.name.includes("Gauri") || a.id === "MH-PUN-0241") || animals[0];
  const kalyani = animals.find(a => a.name.includes("Kalyani") || a.id === "MH-PUN-0109") || animals[1];
  const laxmi = animals.find(a => a.name.includes("Laxmi") || a.healthStatus === "healthy") || animals[3];
  
  const farmerAnimals = [gauri, kalyani, laxmi].filter(Boolean);

  const labels = {
    mr: {
      title: "मोफत लसीकरण व शासकीय शिबिरे",
      subTitle: "महाराष्ट्र शासन • १००% मोफत प्रतिबंधात्मक लसीकरण",
      nextDueNotice: "लाळ-खुरकत (FMD) लस १२ दिवसात बाकी",
      campsHeader: "तुमच्या गावातील मोफत शासकीय लसीकरण शिबिरे",
      freeGovt: "१००% मोफत सेवा",
      bookSlotBtn: "मोफत जागेची नोंद करा",
      slotConfirmed: "जागेची नोंद झाली!",
      directions: "नकाशा व दिशा पहा",
      perAnimalHeader: "माझ्या जनावरांचे लसीकरण कार्ड",
      perAnimalSub: "प्रत्येक जनावराची लस व प्रमाणपत्र",
      downloadCert: "प्रमाणपत्र (PDF)",
      fmdLabel: "लाळ-खुरकत (FMD)",
      lsdLabel: "लंपी (LSD)",
      hsLabel: "घटसर्प (HS)",
      protected: "सुरक्षित (दिली आहे)",
      dueInDays: "१२ दिवसात बाकी",
      lifetime: "आयुष्यभर सुरक्षित"
    },
    hi: {
      title: "मुफ्त टीकाकरण व सरकारी कैंप",
      subTitle: "महाराष्ट्र शासन • 100% मुफ्त सुरक्षा टीकाकरण",
      nextDueNotice: "खुरपका (FMD) टीका 12 दिन में बाकी",
      campsHeader: "आपके गांव में मुफ्त सरकारी टीकाकरण कैंप",
      freeGovt: "100% मुफ्त सेवा",
      bookSlotBtn: "मुफ्त स्लॉट बुक करें",
      slotConfirmed: "स्लॉट बुक हुआ!",
      directions: "दिशा व रास्ता देखें",
      perAnimalHeader: "मेरे पशुओं का टीकाकरण कार्ड",
      perAnimalSub: "हर पशु का टीका व सर्टिफिकेट",
      downloadCert: "सर्टिफिकेट (PDF)",
      fmdLabel: "खुरपका (FMD)",
      lsdLabel: "लंपी (LSD)",
      hsLabel: "गलघोंटू (HS)",
      protected: "सुरक्षित (लगा है)",
      dueInDays: "12 दिन में बाकी",
      lifetime: "आजीवन सुरक्षित"
    },
    en: {
      title: "Free Vaccination & Govt Camps",
      subTitle: "Government of Maharashtra • 100% Free Preventive Immunization",
      nextDueNotice: "FMD Booster Due in 12 Days",
      campsHeader: "Upcoming Free Government Vaccination Camps",
      freeGovt: "100% Free Service",
      bookSlotBtn: "Reserve Free Herd Slot",
      slotConfirmed: "Slot Confirmed!",
      directions: "Get Directions",
      perAnimalHeader: "Livestock Vaccination Cards",
      perAnimalSub: "Immunization protection status per animal",
      downloadCert: "Certificate (PDF)",
      fmdLabel: "Foot & Mouth (FMD)",
      lsdLabel: "Lumpy Skin (LSD)",
      hsLabel: "HS / Blackquarter",
      protected: "Protected",
      dueInDays: "Due in 12 Days",
      lifetime: "Lifetime"
    }
  };

  const text = labels[language] || labels.en;

  const handleBookSlot = (camp) => {
    addNotification("💉 Camp Slot Reserved", `Reserved free vaccination slot at ${camp.village} for your herd.`, "success");
    alert(language === 'mr' 
      ? `खेडगाव शिबिरासाठी रमेश पाटील यांच्या २४ जनावरांची नोंद झाली आहे! एसएमएस पाठवला आहे.`
      : language === 'hi'
      ? `खेडगांव कैंप के लिए रमेश पाटिल के 24 पशुओं की बुकिंग सफल रही! एसएमएस भेजा गया है।`
      : `Slot confirmed at ${camp.village} on ${camp.date}! SMS confirmation sent to Ramesh Patil.`);
  };

  return (
    <div className="space-y-4 sm:space-y-6 text-[#0A1020] font-sans max-w-4xl mx-auto pb-8">
      
      {/* ========================================================================= */}
      {/* 1. HEADER BANNER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#073B32] via-[#095B4E] to-[#0A1020] text-white p-5 sm:p-6 rounded-3xl shadow-sm border border-[#073B32] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{text.subTitle}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {text.title} 💉
          </h1>
        </div>

        <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-xs flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
          <Clock className="w-5 h-5 text-amber-300 shrink-0" />
          <div>
            <span className="text-emerald-200 text-[10px] block font-medium">Next Due</span>
            <span className="font-black text-white text-xs sm:text-sm">{text.nextDueNotice}</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. UPCOMING FREE GOVERNMENT CAMPS */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-700" />
            <span>{text.campsHeader}</span>
          </h2>
          <span className="text-xs text-emerald-900 font-bold bg-emerald-100 px-3 py-1 rounded-full">
            {text.freeGovt}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {upcomingVaccinationCamps.map((camp) => (
            <div
              key={camp.id}
              className="bg-white p-5 rounded-3xl border-2 border-slate-200 hover:border-emerald-500 transition shadow-xs flex flex-col justify-between space-y-3.5"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {camp.distance}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {camp.fee}
                  </span>
                </div>

                <h3 className="font-black text-base text-slate-900 leading-snug">
                  {camp.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-600 font-medium">
                  <p className="flex items-center gap-1.5 text-slate-800 font-bold">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{camp.village}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#149A84] shrink-0" />
                    <span>{camp.date} • {camp.time}</span>
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs space-y-1">
                  <span className="text-slate-500 font-bold text-[11px] block">
                    {language === 'mr' ? 'समाविष्ट लसी:' : language === 'hi' ? 'शामिल टीके:' : 'Included Vaccines:'}
                  </span>
                  <p className="font-bold text-[#073B32]">
                    {camp.vaccines.join(' • ')}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleBookSlot(camp)}
                className="tap-target-48 w-full py-3 bg-[#073B32] hover:bg-[#052923] active:scale-95 text-white rounded-2xl font-black text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{text.bookSlotBtn}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. PER-ANIMAL VACCINATION CARDS (Replaces cumbersome table) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <span>{text.perAnimalHeader}</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {text.perAnimalSub}
          </p>
        </div>

        <div className="space-y-3">
          {farmerAnimals.map((animal) => {
            const needsLsd = animal.healthStatus === 'needs_attention';

            return (
              <div 
                key={animal.id}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-slate-50/50 space-y-3 transition"
              >
                {/* Animal Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name} 
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0" 
                    />
                    <div>
                      <h4 className="font-black text-base text-slate-900 leading-tight">
                        {animal.name}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {animal.species} • {animal.breed}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading official vaccination passport for ${animal.name} (PDF)`)}
                    className="tap-target-48 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{text.downloadCert}</span>
                    <span className="sm:hidden">PDF</span>
                  </button>
                </div>

                {/* Vaccines Grid for this Animal */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {/* FMD */}
                  <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200">
                    <span className="text-slate-500 font-medium block text-[10px]">{text.fmdLabel}</span>
                    <span className="font-black text-amber-900 text-xs flex items-center gap-1 mt-0.5">
                      ⏳ {text.dueInDays}
                    </span>
                  </div>

                  {/* LSD */}
                  <div className={`p-2.5 rounded-xl border ${needsLsd ? 'bg-red-50 border-red-300 text-red-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
                    <span className="text-slate-500 font-medium block text-[10px]">{text.lsdLabel}</span>
                    <span className="font-black text-xs flex items-center gap-1 mt-0.5">
                      {needsLsd ? '🚨 तातडीने देणे बाकी' : `✓ ${text.protected}`}
                    </span>
                  </div>

                  {/* HS */}
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900">
                    <span className="text-slate-500 font-medium block text-[10px]">{text.hsLabel}</span>
                    <span className="font-black text-xs flex items-center gap-1 mt-0.5">
                      ✓ {text.protected}
                    </span>
                  </div>

                  {/* Brucellosis */}
                  <div className="p-2.5 bg-slate-100 rounded-xl border border-slate-200 text-slate-800">
                    <span className="text-slate-500 font-medium block text-[10px]">ब्रुसेलोसिस (Brucella)</span>
                    <span className="font-black text-xs flex items-center gap-1 mt-0.5">
                      🛡️ {text.lifetime}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
