import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Camera, 
  Mic, 
  MapPin, 
  AlertTriangle, 
  ShieldCheck, 
  UploadCloud, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Info,
  Calendar,
  Layers,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function ReportSickAnimalWizard({ onComplete }) {
  const { 
    animals, 
    submitSickAnimalReport, 
    t, 
    setRole, 
    setActiveTab, 
    setSelectedCaseForDrawer,
    cases,
    demoTourStep,
    setDemoTourStep
  } = useApp();

  const [step, setStep] = useState(1);
  const [selectedAnimal, setSelectedAnimal] = useState(animals[0] || null);
  const [isNewAnimal, setIsNewAnimal] = useState(false);
  const [newAnimalData, setNewAnimalData] = useState({ species: "Cattle (Cow)", breed: "Gir Indigenous", tag: "MH-PUN-0992", age: "3.5 Years" });
  
  // Symptoms Selected
  const [selectedSymptoms, setSelectedSymptoms] = useState([
    "High Fever (ताप)",
    "Skin Nodules / Lumps (त्वचेवर गाठी)",
    "Excessive Salivation (लाळ गळणे)",
    "Sudden Milk Drop (दूध कमी होणे)"
  ]);

  // Basic Questions
  const [duration, setDuration] = useState("1 - 2 Days");
  const [stoppedEating, setStoppedEating] = useState("Yes");
  const [milkDecreased, setMilkDecreased] = useState("Yes");
  const [nearbySimilar, setNearbySimilar] = useState("Yes");
  const [recentDeaths, setRecentDeaths] = useState("No");

  // Evidence
  const [photoUploaded, setPhotoUploaded] = useState(true);
  const [voiceRecorded, setVoiceRecorded] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  // Submission result
  const [createdCase, setCreatedCase] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If in demo tour mode step 2, pre-advance
  useEffect(() => {
    if (demoTourStep === 2 && step < 5) {
      setStep(5);
    }
  }, [demoTourStep]);

  const symptomList = [
    { id: "fever", label: t.symptomFever, icon: "🌡️" },
    { id: "skin", label: t.symptomSkinLesions, icon: "🔴" },
    { id: "salivation", label: t.symptomSalivation, icon: "💧" },
    { id: "appetite", label: t.symptomLossAppetite, icon: "🌾" },
    { id: "milk", label: t.symptomMilkDrop, icon: "🥛" },
    { id: "nasal", label: t.symptomNasalDischarge, icon: "🤧" },
    { id: "cough", label: t.symptomCough, icon: "🫁" },
    { id: "diarrhea", label: t.symptomDiarrhea, icon: "⚠️" },
    { id: "lameness", label: t.symptomLameness, icon: "🦵" },
    { id: "weakness", label: t.symptomWeakness, icon: "🛌" },
    { id: "mortality", label: t.symptomSuddenDeath, icon: "☠️" },
    { id: "abortion", label: t.symptomAbortion, icon: "🐣" }
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
      const animalObj = isNewAnimal ? newAnimalData : selectedAnimal;
      const res = submitSickAnimalReport({
        farmerName: "Ramesh Patil",
        farmerPhone: "+91 98224 51092",
        village: "Khedgaon",
        animalId: animalObj.id || animalObj.tag || "MH-PUN-0241",
        species: animalObj.species,
        breed: animalObj.breed,
        symptoms: selectedSymptoms,
        duration: duration,
        stoppedEating: stoppedEating === "Yes",
        milkDecreased: milkDecreased === "Yes",
        nearbySimilarCases: nearbySimilar === "Yes",
        recentDeaths: recentDeaths === "Yes",
        photoUrl: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=600&q=80"
      });
      setCreatedCase(res);
      setIsSubmitting(false);
      setStep(6);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Wizard Progress Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-forest-900 text-white p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/20 border border-emerald-400/30 rounded-xl">
              <Activity className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">{t.reportWizardTitle}</h2>
              <p className="text-xs text-emerald-200">Rapid Surveillance & Early Risk Triage</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
            Step {step} of 6
          </span>
        </div>

        {/* Progress Bar Steps */}
        <div className="grid grid-cols-6 gap-1 sm:gap-2 text-[10px] sm:text-xs">
          {[
            { s: 1, label: "Animal" },
            { s: 2, label: "Symptoms" },
            { s: 3, label: "Questions" },
            { s: 4, label: "Evidence" },
            { s: 5, label: "AI Triage" },
            { s: 6, label: "Submitted" }
          ].map((item) => (
            <div 
              key={item.s} 
              className={`text-center pb-1 border-b-2 transition ${
                step >= item.s ? 'border-emerald-400 text-emerald-200 font-bold' : 'border-white/20 text-white/50'
              }`}
            >
              <span className="hidden sm:inline">{item.s}. </span>{item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Wizard Step Content */}
      <div className="p-4 sm:p-6">
        {/* STEP 1: Select Animal */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">{t.selectAnimalPrompt}</h3>
              <p className="text-xs text-slate-500">Choose from your registered livestock or add a new animal</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {animals.map((a) => (
                <div
                  key={a.id}
                  onClick={() => { setSelectedAnimal(a); setIsNewAnimal(false); }}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center gap-3 ${
                    selectedAnimal?.id === a.id && !isNewAnimal
                      ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img src={a.imageUrl} alt={a.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">{a.name}</h4>
                      <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                        {a.id}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{a.species} • {a.breed}</p>
                    <p className="text-[11px] text-slate-400">Age: {a.age} | Milk: {a.milkYield}</p>
                  </div>
                  {selectedAnimal?.id === a.id && !isNewAnimal && (
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Add New Unregistered Animal option */}
              <div
                onClick={() => setIsNewAnimal(true)}
                className={`p-3.5 rounded-xl border-2 border-dashed cursor-pointer transition flex items-center justify-center gap-2 ${
                  isNewAnimal
                    ? 'border-emerald-600 bg-emerald-50 shadow-xs'
                    : 'border-slate-300 hover:border-slate-400 text-slate-600'
                }`}
              >
                <span className="text-sm font-bold text-emerald-800">{t.addNewAnimalQuick}</span>
              </div>
            </div>

            {isNewAnimal && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Species</label>
                  <select 
                    value={newAnimalData.species} 
                    onChange={e => setNewAnimalData({...newAnimalData, species: e.target.value})}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  >
                    <option>Cattle (Cow)</option>
                    <option>Buffalo</option>
                    <option>Goat</option>
                    <option>Sheep</option>
                    <option>Poultry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Breed / Identifier</label>
                  <input 
                    type="text" 
                    value={newAnimalData.breed}
                    onChange={e => setNewAnimalData({...newAnimalData, breed: e.target.value})}
                    className="w-full p-2 border border-slate-300 rounded-lg"
                    placeholder="e.g. Gir / Murrah"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Temporary Ear Tag / Ref</label>
                  <input 
                    type="text" 
                    value={newAnimalData.tag}
                    onChange={e => setNewAnimalData({...newAnimalData, tag: e.target.value})}
                    className="w-full p-2 border border-slate-300 rounded-lg font-mono"
                    placeholder="e.g. MH-PUN-XXXX"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: Select Symptoms (Big Touch Friendly Chips) */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">{t.symptomsPrompt}</h3>
              <p className="text-xs text-slate-500">Tap to select all signs observed on the animal</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {symptomList.map((item) => {
                const isSelected = selectedSymptoms.includes(item.label);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleSymptom(item.label)}
                    className={`p-3.5 rounded-xl border-2 text-left transition flex flex-col justify-between min-h-[85px] touch-active ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl">{item.icon}</span>
                      {isSelected ? (
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-slate-300" />
                      )}
                    </div>
                    <span className={`text-xs font-bold mt-2 ${isSelected ? 'text-emerald-950' : 'text-slate-700'}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Basic Yes/No Questions */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Simple Questions for Decision Support</h3>
              <p className="text-xs text-slate-500">Helps the clinical algorithm assess infection speed and cluster risk</p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Question 1 */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-semibold text-slate-800">{t.qDuration}</span>
                <div className="flex gap-2">
                  {["1 - 2 Days", "3 - 5 Days", "More than 5 Days"].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={`px-3 py-1.5 rounded-lg border font-semibold text-xs transition ${
                        duration === d ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-800">{t.qEating}</span>
                <div className="flex gap-2">
                  {["Yes", "No"].map((ans) => (
                    <button
                      key={ans}
                      type="button"
                      onClick={() => setStoppedEating(ans)}
                      className={`px-4 py-1.5 rounded-lg border font-bold text-xs transition ${
                        stoppedEating === ans ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-800">{t.qMilk}</span>
                <div className="flex gap-2">
                  {["Yes", "No"].map((ans) => (
                    <button
                      key={ans}
                      type="button"
                      onClick={() => setMilkDecreased(ans)}
                      className={`px-4 py-1.5 rounded-lg border font-bold text-xs transition ${
                        milkDecreased === ans ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4 */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-800">{t.qOthers}</span>
                <div className="flex gap-2">
                  {["Yes", "No"].map((ans) => (
                    <button
                      key={ans}
                      type="button"
                      onClick={() => setNearbySimilar(ans)}
                      className={`px-4 py-1.5 rounded-lg border font-bold text-xs transition ${
                        nearbySimilar === ans ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 5 */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-800">{t.qDeaths}</span>
                <div className="flex gap-2">
                  {["Yes", "No"].map((ans) => (
                    <button
                      key={ans}
                      type="button"
                      onClick={() => setRecentDeaths(ans)}
                      className={`px-4 py-1.5 rounded-lg border font-bold text-xs transition ${
                        recentDeaths === ans ? 'bg-red-700 text-white border-red-700' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Upload Photo / Audio / GPS */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">{t.uploadPhotoTitle}</h3>
              <p className="text-xs text-slate-500">{t.uploadPhotoDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photo Box */}
              <div className="border-2 border-dashed border-emerald-300 rounded-xl p-4 bg-emerald-50/40 text-center space-y-3">
                <div className="relative inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=600&q=80" 
                    alt="Symptom preview" 
                    className="w-32 h-24 object-cover rounded-lg border border-slate-300 mx-auto"
                  />
                  <span className="absolute bottom-1 right-1 bg-emerald-700 text-white p-1 rounded-full text-[10px]">
                    <Check className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-xs text-slate-600">
                  <p className="font-bold text-emerald-900">Photo Attached: Cow_Skin_Nodules_01.jpg</p>
                  <p className="text-[11px] text-slate-500">Tap to retake photo with camera</p>
                </div>
                <button 
                  type="button"
                  className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition inline-flex items-center gap-1.5"
                >
                  <Camera className="w-4 h-4 text-emerald-700" />
                  <span>Retake Photo</span>
                </button>
              </div>

              {/* Voice Note & GPS */}
              <div className="space-y-3">
                {/* Voice Box */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{t.recordVoiceTitle}</span>
                    {voiceRecorded && <span className="text-emerald-700 font-bold text-[11px]">0:24 Recorded</span>}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setVoiceRecorded(true)}
                      className={`p-3 rounded-full transition ${
                        voiceRecorded ? 'bg-emerald-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                      }`}
                    >
                      <Mic className="w-5 h-5" />
                    </button>
                    <div className="flex-1 text-xs text-slate-500">
                      {voiceRecorded ? (
                        <div className="flex items-center gap-1 text-emerald-800 font-mono text-[11px]">
                          <span>|||||!||||!||||||!||| (Audio attached)</span>
                        </div>
                      ) : (
                        <span>Tap mic to speak symptoms in Marathi / Hindi / English</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* GPS Location Box */}
                <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 flex items-start gap-2.5 text-xs text-blue-900">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">GPS Location Pinned:</p>
                    <p className="font-mono text-[11px] text-blue-800">18.1524° N, 74.5768° E (Khedgaon, Baramati Block, Pune)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Simulated AI Decision Engine Risk Triage */}
        {step === 5 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 animate-spin" />
              <div>
                <h3 className="font-bold text-sm text-amber-950">{t.aiTriageHeader}</h3>
                <p className="text-xs text-amber-800">{t.aiTriageDisclaimer}</p>
              </div>
            </div>

            {/* Risk Assessment Card */}
            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-200 pb-3">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Calculated Risk Index</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <RiskBadge level="HIGH" size="lg" />
                    <span className="text-xl font-extrabold text-red-900">86 / 100</span>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="text-slate-500">Suspected Surveillance Category:</span>
                  <p className="font-bold text-red-900 text-sm">Lumpy Skin Disease (LSD) Suspect Cluster</p>
                </div>
              </div>

              {/* Factors Detected */}
              <div className="space-y-2 text-xs">
                <p className="font-bold text-slate-800">Key Epidemiological Indicators Detected:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-red-100">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Multiple 2-5cm nodular skin lesions reported</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-red-100">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Sudden pyrexia (fever) + 65% drop in milk</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-red-100">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Spatial proximity to 2 active cases in Malegaon</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-red-100">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>High vector fly humidity index in Baramati</span>
                  </div>
                </div>
              </div>

              {/* Immediate Actions Required */}
              <div className="p-3.5 bg-white rounded-xl border border-red-200 text-xs space-y-2">
                <h4 className="font-bold text-red-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>{t.immediateActions}</span>
                </h4>
                <ul className="space-y-1 text-slate-700 font-medium list-disc pl-4">
                  <li>{t.isolateAnimal}</li>
                  <li>{t.restrictMovement}</li>
                  <li>{t.sanitizePremises}</li>
                  <li>{t.vetAlerted}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Confirmation & Live Tracking */}
        {step === 6 && (
          <div className="py-6 space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">{t.caseSubmittedSuccess}</h3>
              <p className="text-xs text-slate-500 mt-1">Official Maharashtra Livestock Surveillance Record Created</p>
              
              <div className="inline-block mt-3 px-4 py-2 bg-slate-100 border border-slate-300 rounded-xl font-mono font-bold text-base text-slate-800">
                {createdCase?.caseId || "PS-2026-004281"}
              </div>
            </div>

            {/* Live Timeline Tracker */}
            <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left space-y-3">
              <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider">{t.statusTimeline}</h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">✓</span>
                  <div>
                    <p className="font-bold text-slate-900">{t.t1Submitted}</p>
                    <p className="text-[10px] text-slate-500">Ramesh Patil (Khedgaon) • Just now</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">✓</span>
                  <div>
                    <p className="font-bold text-slate-900">{t.t2Triage} (High Risk 86/100)</p>
                    <p className="text-[10px] text-slate-500">LSD Cluster Alert Flagged automatically</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold animate-pulse">●</span>
                  <div>
                    <p className="font-bold text-blue-900">Dr. Anand Deshmukh Assigned</p>
                    <p className="text-[10px] text-slate-500">Baramati Taluka Hospital dispatched notification</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                  <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <p className="font-bold text-slate-700">{t.t4Action}</p>
                    <p className="text-[10px] text-slate-400">Sample collection & emergency referral</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Transition Buttons for Evaluator */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setRole('vet');
                  setActiveTab('cases');
                  const c = cases.find(item => item.caseId === (createdCase?.caseId || "PS-2026-004281")) || cases[0];
                  if (c) setSelectedCaseForDrawer(c);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                <span>👨‍⚕️ Switch to Vet View (Review Case as Doctor)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onComplete) onComplete();
                  setActiveTab('dashboard');
                }}
                className="w-full sm:w-auto px-5 py-3 border border-slate-300 hover:bg-slate-50 rounded-xl font-semibold text-xs text-slate-700 transition"
              >
                Return to Farmer Dashboard
              </button>
            </div>
          </div>
        )}

        {/* Wizard Footer Navigation Controls */}
        {step < 6 && (
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white rounded-xl text-xs font-semibold text-slate-700 transition flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {step < 5 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5"
              >
                <span>Continue to Step {step + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleFinalSubmit}
                className="px-7 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isSubmitting ? 'Analyzing & Submitting...' : t.confirmSubmission}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
