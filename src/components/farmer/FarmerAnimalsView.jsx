import React, { useState } from 'react';
import { 
  ListChecks, 
  PlusCircle, 
  Search, 
  Filter, 
  ShieldCheck, 
  Activity, 
  Calendar, 
  Syringe, 
  ChevronRight, 
  Sparkles, 
  QrCode, 
  Tag, 
  ArrowRight,
  X,
  Check,
  Heart
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import AnimalProfileModal from '../common/AnimalProfileModal';

export default function FarmerAnimalsView() {
  const { 
    animals, 
    setSelectedAnimalForProfile, 
    registerAnimal, 
    addNotification, 
    language,
    t 
  } = useApp();

  const [search, setSearch] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Animal Form State
  const [newAnimalName, setNewAnimalName] = useState('');
  const [newSpecies, setNewSpecies] = useState('Cattle (गाय)');
  const [newBreed, setNewBreed] = useState('Gir Indigenous');
  const [newAge, setNewAge] = useState('3 Years');
  const [newYield, setNewYield] = useState('12 Liters/day');

  // Filter Ramesh Patil's herd - Exactly 3 Core Animals (1 Attention, 1 Treatment, 1 Healthy)
  const gauri = animals.find(a => a.name.includes("Gauri") || a.id === "MH-PUN-0241") || animals[0];
  const kalyani = animals.find(a => a.name.includes("Kalyani") || a.id === "MH-PUN-0109") || animals[1];
  const laxmi = animals.find(a => a.name.includes("Laxmi") || a.healthStatus === "healthy") || animals[3];
  
  const farmerAnimals = [gauri, kalyani, laxmi].filter(Boolean);

  const filteredAnimals = farmerAnimals.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || 
                          a.breed.toLowerCase().includes(search.toLowerCase());
    const matchesSpecies = filterSpecies === 'all' || a.species.toLowerCase().includes(filterSpecies.toLowerCase());
    return matchesSearch && matchesSpecies;
  });

  const handleCreateAnimal = (e) => {
    e.preventDefault();
    if (!newAnimalName.trim()) return;

    registerAnimal({
      name: newAnimalName,
      species: newSpecies,
      breed: newBreed,
      age: newAge,
      milkYield: newYield
    });

    setShowAddModal(false);
    setNewAnimalName('');
    addNotification("📋 Animal Registered", `Added ${newAnimalName} to your digital herd passport!`, "success");
    alert(language === 'mr' ? `${newAnimalName} ची नोंद यशस्वीरित्या झाली!` : language === 'hi' ? `${newAnimalName} का पंजीकरण सफल रहा!` : `Successfully registered ${newAnimalName}!`);
  };

  const handleOpenAnimal = (animal) => {
    setSelectedAnimal(animal);
    if (typeof setSelectedAnimalForProfile === 'function') {
      setSelectedAnimalForProfile(animal);
    }
  };

  const labels = {
    mr: {
      title: "माझी जनावरे",
      subTitle: "एकूण ३ जनावरांची डिजिटल नोंद",
      addBtn: "+ नवीन जनावर जोडा",
      searchPlaceholder: "नाव किंवा जात शोधा (उदा. गौरी, गीर)...",
      allSpecies: "सर्व जनावरे",
      cows: "गाय (Cattle)",
      buffaloes: "म्हैस (Buffalo)",
      goats: "शेळी (Goat)",
      healthy: "निरोगी",
      inTreatment: "उपचार चालू",
      needsAttention: "लक्ष द्या",
      vaccineDue: "लाळ-खुरकत लस १२ दिवसात बाकी",
      vaccineOk: "सर्व लसी पूर्ण",
      age: "वय",
      milk: "दूध",
      breed: "जात",
      viewPassport: "आरोग्य पत्रिका व लसीकरण पहा",
      modalTitle: "नवीन जनावराची नोंद",
      modalName: "जनावराचे नाव (उदा. गौरी, राधा, कपिला)",
      modalSpecies: "प्रकार",
      modalBreed: "जात (Breed)",
      modalAge: "वय (उदा. ३ वर्षे)",
      modalYield: "दररोजचे दूध (उदा. १२ लिटर)",
      saveBtn: "नोंद साठवा",
      cancelBtn: "रद्द करा"
    },
    hi: {
      title: "मेरे पशु",
      subTitle: "कुल 3 पशुओं का डिजिटल रिकॉर्ड",
      addBtn: "+ नया पशु जोड़ें",
      searchPlaceholder: "नाम या नस्ल खोजें (उदा. गौरी, गीर)...",
      allSpecies: "सभी पशु",
      cows: "गाय (Cattle)",
      buffaloes: "भैंस (Buffalo)",
      goats: "बकरी (Goat)",
      healthy: "स्वस्थ",
      inTreatment: "इलाज जारी",
      needsAttention: "ध्यान दें",
      vaccineDue: "खुरपका टीका 12 दिन में बाकी",
      vaccineOk: "सभी टीके लगे हैं",
      age: "उम्र",
      milk: "दूध",
      breed: "नस्ल",
      viewPassport: "स्वास्थ्य कार्ड व टीके देखें",
      modalTitle: "नए पशु का पंजीकरण",
      modalName: "पशु का नाम (उदा. गौरी, राधा, कपिला)",
      modalSpecies: "प्रकार",
      modalBreed: "नस्ल (Breed)",
      modalAge: "उम्र (उदा. 3 वर्ष)",
      modalYield: "प्रतिदिन दूध (उदा. 12 लीटर)",
      saveBtn: "पंजीकरण सहेजें",
      cancelBtn: "रद्द करें"
    },
    en: {
      title: "My Animals",
      subTitle: "Digital Herd Passport • 3 Registered Animals",
      addBtn: "+ Add New Animal",
      searchPlaceholder: "Search by name or breed (e.g. Gauri, Gir)...",
      allSpecies: "All Animals",
      cows: "Cows",
      buffaloes: "Buffaloes",
      goats: "Goats",
      healthy: "Healthy",
      inTreatment: "In Treatment",
      needsAttention: "Needs Care",
      vaccineDue: "FMD Booster due in 12 days",
      vaccineOk: "Vaccines up to date",
      age: "Age",
      milk: "Milk",
      breed: "Breed",
      viewPassport: "View Health Passport & QR",
      modalTitle: "Register New Livestock",
      modalName: "Animal Name (e.g. Gauri, Radha)",
      modalSpecies: "Species",
      modalBreed: "Breed",
      modalAge: "Age (e.g. 3.5 Years)",
      modalYield: "Daily Milk Yield (e.g. 12 Liters)",
      saveBtn: "Save Animal",
      cancelBtn: "Cancel"
    }
  };

  const text = labels[language] || labels.en;

  return (
    <div className="space-y-4 sm:space-y-6 text-[#0A1020] font-sans max-w-4xl mx-auto pb-8">
      
      {/* ========================================================================= */}
      {/* 1. CLEAN HEADER & ADD BUTTON */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#073B32] via-[#095B4E] to-[#0A1020] text-white p-5 sm:p-6 rounded-3xl shadow-sm border border-[#073B32] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{text.subTitle}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {text.title} 🐄
          </h1>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="tap-target-48 px-5 py-3 bg-[#149A84] hover:bg-[#0C7A68] active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-black shadow-md transition flex items-center justify-center gap-2 shrink-0 border border-emerald-300"
        >
          <PlusCircle className="w-5 h-5" />
          <span>{text.addBtn}</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 2. SEARCH & SPECIES FILTER PILLS (Mobile-Friendly) */}
      {/* ========================================================================= */}
      <div className="bg-white p-3.5 sm:p-4 rounded-3xl border border-slate-200/90 shadow-xs space-y-3">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder={text.searchPlaceholder}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#149A84] focus:bg-white transition"
          />
        </div>

        {/* Species Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
          {[
            { id: 'all', label: text.allSpecies },
            { id: 'Cattle', label: text.cows },
            { id: 'Buffalo', label: text.buffaloes },
            { id: 'Goat', label: text.goats }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setFilterSpecies(filter.id)}
              className={`tap-target-48 px-4 py-2 rounded-2xl text-xs font-black shrink-0 transition ${
                filterSpecies === filter.id
                  ? 'bg-[#073B32] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. STACKED ANIMAL LIST CARDS (Single Column for Mobile, Rich & Clean) */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        {filteredAnimals.map((animal) => {
          const isAttention = animal.healthStatus === 'needs_attention';
          const isTreatment = animal.healthStatus === 'under_treatment';

          return (
            <div
              key={animal.id}
              onClick={() => handleOpenAnimal(animal)}
              className={`p-4 sm:p-5 rounded-3xl border-2 transition cursor-pointer active:scale-[0.99] bg-white shadow-xs hover:shadow-md ${
                isAttention 
                  ? 'border-red-400 ring-2 ring-red-200 bg-red-50/40' 
                  : isTreatment 
                  ? 'border-amber-300 bg-amber-50/30' 
                  : 'border-slate-200 hover:border-emerald-500'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                {/* Left: Thumbnail & Main Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shadow-xs"
                    />
                    <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      isAttention ? 'bg-red-500 animate-ping' : isTreatment ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} />
                  </div>

                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                        {animal.name}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        isAttention 
                          ? 'bg-red-100 text-red-800 border border-red-300' 
                          : isTreatment 
                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}>
                        {isAttention ? `🚨 ${text.needsAttention}` : isTreatment ? `💊 ${text.inTreatment}` : `✓ ${text.healthy}`}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-medium truncate">
                      {animal.species} • <strong className="text-slate-800">{animal.breed}</strong>
                    </p>

                    {/* Compact Specs Row */}
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-bold pt-0.5 flex-wrap">
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md">
                        {text.age}: {animal.age}
                      </span>
                      <span className="bg-emerald-50 text-[#073B32] px-2 py-0.5 rounded-md">
                        {text.milk}: {animal.milkYield || animal.weight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Chevron Arrow */}
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 self-center">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              {/* Vaccine Notice Pill on Card */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Syringe className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className={isAttention ? "text-red-700 font-black" : "text-slate-700"}>
                    {isAttention 
                      ? (language === 'mr' ? 'लंपी बूस्टर लस तातडीने आवश्यक' : language === 'hi' ? 'लंपी बूस्टर टीका तुरंत आवश्यक' : 'LSD Booster Overdue')
                      : text.vaccineDue}
                  </span>
                </span>

                <span className="text-[#073B32] font-black text-[11px] flex items-center gap-0.5 hover:underline">
                  <span>{text.viewPassport}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animal Profile Modal */}
      {selectedAnimal && (
        <AnimalProfileModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
        />
      )}

      {/* Register Animal Modal (Mobile Form) */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 space-y-4 border border-slate-200 shadow-2xl animate-fadeInScale">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#073B32] flex items-center justify-center font-bold">
                  +
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {text.modalTitle}
                </h3>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateAnimal} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="font-black text-slate-800 block mb-1">
                  {text.modalName} *
                </label>
                <input
                  type="text"
                  placeholder="उदा. कपिला / Kapila"
                  value={newAnimalName}
                  onChange={e => setNewAnimalName(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:bg-white focus:border-[#149A84] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{text.modalSpecies}</label>
                  <select
                    value={newSpecies}
                    onChange={e => setNewSpecies(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:outline-none"
                  >
                    <option value="Cattle (गाय)">गाय (Cattle)</option>
                    <option value="Buffalo (म्हैस)">म्हैस (Buffalo)</option>
                    <option value="Goat (शेळी)">शेळी (Goat)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{text.modalBreed}</label>
                  <input
                    type="text"
                    value={newBreed}
                    onChange={e => setNewBreed(e.target.value)}
                    placeholder="उदा. गीर, साहिवाल"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{text.modalAge}</label>
                  <input
                    type="text"
                    value={newAge}
                    onChange={e => setNewAge(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{text.modalYield}</label>
                  <input
                    type="text"
                    value={newYield}
                    onChange={e => setNewYield(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="tap-target-48 flex-1 py-3 bg-slate-100 hover:bg-slate-200 font-bold rounded-2xl text-slate-700 text-xs sm:text-sm transition"
                >
                  {text.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="tap-target-48 flex-1 py-3 bg-[#073B32] hover:bg-[#052923] active:scale-95 text-white font-black rounded-2xl shadow-md text-xs sm:text-sm transition"
                >
                  {text.saveBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
