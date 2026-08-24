import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowLeft, 
  Check, 
  Camera, 
  Mic, 
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
  const { animals, addReport, addNotification } = useApp();

  const [step, setStep] = useState(1); // 1: Animal, 2: Symptoms, 3: Evidence, 4: Location, 5: Assessment
  const [selectedAnimal, setSelectedAnimal] = useState(animals[0]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([
    "High Fever (ताप)",
    "Nodular Skin Lumps (त्वचेवर गाठी)",
    "Milk Yield Drop (दूध घट)"
  ]);
  const [duration, setDuration] = useState("2 Days");
  const [stoppedEating, setStoppedEating] = useState(true);
  const [nearbySimilarCases, setNearbySimilarCases] = useState(true);
  const [voiceRecorded, setVoiceRecorded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const symptomList = [
    { id: "fever", label: "High Fever (ताप)", severity: "high" },
    { id: "nodules", label: "Nodular Skin Lumps (त्वचेवर गाठी)", severity: "high" },
    { id: "salivation", label: "Excessive Salivation (लाळ गळणे)", severity: "high" },
    { id: "blisters", label: "Mouth / Foot Blisters (तोंडावर/खुरावर फोड)", severity: "critical" },
    { id: "milk_drop", label: "Milk Yield Drop (दूध घट)", severity: "medium" },
    { id: "respiratory", label: "Labored Breathing (श्वास घेण्यास त्रास)", severity: "high" },
    { id: "diarrhea", label: "Severe Diarrhea (हगवण)", severity: "medium" },
    { id: "lameness", label: "Lameness / Limping (लंगडणे)", severity: "medium" },
    { id: "mortality", label: "Sudden Flock Death (अचानक मृत्यू)", severity: "critical" }
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
        animalId: selectedAnimal.id,
        species: selectedAnimal.species,
        breed: selectedAnimal.breed,
        symptoms: selectedSymptoms,
        duration: duration,
        stoppedEating: stoppedEating,
        milkDecreased: true,
        nearbySimilarCases: nearbySimilarCases,
        recentDeaths: false,
        riskScore: 86,
        riskLevel: "HIGH",
        suspectedDisease: "Lumpy Skin Disease (LSD) - Cluster Suspect",
        status: "under_review",
        assignedVet: "Dr. Anand Deshmukh",
        locationCoord: { lat: 18.1524, lng: 74.5768 },
        photoUrl: selectedAnimal.imageUrl
      };

      addReport(newCase);
      addNotification("🚨 Preliminary Risk Assessment: High (86/100)", "Your case #PS-2026-004281 has been routed to Dr. Anand Deshmukh at Baramati Taluka Hospital.", "alert");
      setStep(5); // Show Intelligence Assessment Screen
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#ECE6D6] max-w-2xl w-full overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Header Ribbon */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#073B32] to-[#0A1020] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#149A84]/20 border border-[#149A84]/40 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-black text-sm tracking-tight">Report Sick Animal (रोग नोंदणी)</h3>
              <p className="text-[10px] text-emerald-200">Guided Clinical Triage Wizard • Step {step} of 5</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        {step < 5 && (
          <div className="bg-[#F6F3EA] px-5 py-2.5 border-b border-[#ECE6D6] flex items-center justify-between text-xs font-bold">
            <span className={step >= 1 ? "text-[#073B32]" : "text-slate-400"}>01 Animal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className={step >= 2 ? "text-[#073B32]" : "text-slate-400"}>02 Symptoms</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className={step >= 3 ? "text-[#073B32]" : "text-slate-400"}>03 Evidence</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className={step >= 4 ? "text-[#073B32]" : "text-slate-400"}>04 Location</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 text-[#0A1020]">
          {/* STEP 1: Select Animal */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-black text-lg text-[#0A1020]">Which animal is showing symptoms?</h4>
                <p className="text-xs text-slate-500">Select from your registered herd passport list</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {animals.slice(0, 4).map((animal) => (
                  <div
                    key={animal.id}
                    onClick={() => setSelectedAnimal(animal)}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center gap-3 ${
                      selectedAnimal.id === animal.id
                        ? "border-[#073B32] bg-[#D9F1E8]/40 shadow-xs"
                        : "border-[#ECE6D6] bg-[#F6F3EA] hover:border-slate-300"
                    }`}
                  >
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name} 
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h5 className="font-extrabold text-sm text-[#0A1020] truncate">{animal.name}</h5>
                        {selectedAnimal.id === animal.id && (
                          <span className="w-4 h-4 rounded-full bg-[#073B32] text-white flex items-center justify-center text-[10px]">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 truncate">{animal.species} • {animal.breed}</p>
                      <p className="text-[10px] font-mono text-slate-400">Tag: {animal.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Symptoms Selection */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-black text-lg text-[#0A1020]">Select Observed Symptoms (लक्षणे)</h4>
                <p className="text-xs text-slate-500">Tap all symptoms observed in {selectedAnimal.name}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {symptomList.map((s) => {
                  const isSelected = selectedSymptoms.includes(s.label);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSymptom(s.label)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition flex items-center justify-between ${
                        isSelected 
                          ? "border-[#073B32] bg-[#073B32] text-white shadow-xs" 
                          : "border-[#ECE6D6] bg-[#F6F3EA] text-slate-800 hover:border-slate-300"
                      }`}
                    >
                      <span>{s.label}</span>
                      {isSelected && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Duration of Sickness</label>
                  <select 
                    value={duration} 
                    onChange={e => setDuration(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold"
                  >
                    <option value="1 Day">1 Day (कालपासून)</option>
                    <option value="2 Days">2 Days (दोन दिवस)</option>
                    <option value="3-5 Days">3-5 Days</option>
                    <option value="> 1 Week">More than 1 Week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Stopped Eating/Feeding?</label>
                  <select 
                    value={stoppedEating ? "yes" : "no"} 
                    onChange={e => setStoppedEating(e.target.value === "yes")}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold"
                  >
                    <option value="yes">Yes (चारा बंद केला)</option>
                    <option value="no">No (खात आहे)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Evidence (Photo & Voice Memo) */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-black text-lg text-[#0A1020]">Photo & Voice Evidence</h4>
                <p className="text-xs text-slate-500">Helps veterinarian assess severity before dispatch</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Photo Capture Preview */}
                <div className="p-4 bg-[#F6F3EA] rounded-2xl border-2 border-dashed border-[#ECE6D6] flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
                  <img 
                    src={selectedAnimal.imageUrl} 
                    alt="Symptom photo" 
                    className="w-full h-28 object-cover rounded-xl border border-slate-200" 
                  />
                  <span className="text-xs font-bold text-[#073B32] flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5" /> Skin Nodules Photo Attached
                  </span>
                </div>

                {/* Voice Recording Waveform Box */}
                <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Mic className="w-3.5 h-3.5 text-red-500" />
                      <span>Voice Memo (मराठी आवाज नोंदणी)</span>
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">Recorded 24 seconds</p>
                  </div>

                  {/* Simulated Waveform */}
                  <div className="flex items-center gap-1 h-10 bg-white p-2 rounded-xl border border-[#ECE6D6]">
                    {[40, 70, 90, 60, 30, 85, 95, 45, 65, 80, 50, 75, 90, 40].map((h, i) => (
                      <span 
                        key={i} 
                        className="flex-1 bg-[#149A84] rounded-full" 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>

                  <div className="text-[10px] text-emerald-800 font-bold bg-emerald-50 p-1.5 rounded-lg border border-emerald-200 text-center">
                    ✓ Voice description transcribed to clinical dossier
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span>Are nearby farm animals showing similar signs?</span>
                <span className="font-bold text-red-700">YES (Malegaon 3km)</span>
              </div>
            </div>
          )}

          {/* STEP 4: Location & Confirmation */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-black text-lg text-[#0A1020]">Confirm Location & Submit</h4>
                <p className="text-xs text-slate-500">Your report will be sent to the Baramati Veterinary Unit</p>
              </div>

              <div className="p-4 bg-[#F6F3EA] rounded-2xl border border-[#ECE6D6] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#073B32]">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>GPS Location: Khedgaon, Baramati Taluka, Pune (18.1524, 74.5768)</span>
                </div>
                <div className="text-xs text-slate-600">
                  <p><strong>Farmer:</strong> Ramesh Patil (+91 98224 51092)</p>
                  <p><strong>Animal:</strong> {selectedAnimal.name} ({selectedAnimal.species} - Tag: {selectedAnimal.id})</p>
                  <p><strong>Symptoms:</strong> {selectedSymptoms.join(', ')}</p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900">
                ⚡ <strong>Instant Triage:</strong> Submitting will immediately generate a Preliminary Health Risk Score & notify the local veterinary doctor.
              </div>
            </div>
          )}

          {/* STEP 5: Section 17 — PRELIMINARY HEALTH RISK ASSESSMENT (86 / 100 — HIGH) */}
          {step === 5 && (
            <div className="space-y-6 animate-fadeIn text-center">
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-[#073B32] uppercase tracking-wider bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
                  PRELIMINARY RISK ASSESSMENT (निदान पूर्व अंदाज)
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#0A1020] mt-2">
                  High Risk Cluster Suspect Detected
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Several reported symptoms are consistent with an elevated local health signal in Baramati.
                </p>
              </div>

              {/* Large Circular Risk Score 86 */}
              <div className="flex justify-center my-2">
                <div className="w-32 h-32 rounded-full border-8 border-red-500 bg-red-50 flex flex-col items-center justify-center shadow-lg relative">
                  <span className="text-3xl font-black text-red-700">86</span>
                  <span className="text-[10px] font-mono font-bold text-red-900">/ 100 RISK</span>
                  <span className="absolute -bottom-2.5 bg-red-700 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase">
                    HIGH RISK
                  </span>
                </div>
              </div>

              {/* Evidence Breakdown Box */}
              <div className="bg-[#F6F3EA] p-4 rounded-2xl border border-[#ECE6D6] text-left text-xs space-y-2">
                <h5 className="font-extrabold text-xs text-[#0A1020] uppercase border-b border-[#ECE6D6] pb-1.5 flex items-center justify-between">
                  <span>Supporting Surveillance Evidence:</span>
                  <span className="font-mono text-red-600">Case #PS-2026-004281</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <div>• 5 similar reports in Baramati sector</div>
                  <div>• 3 nearby affected villages (Malegaon, Gunawadi)</div>
                  <div>• 7-day sharp increase in nodular signs</div>
                  <div>• Low booster coverage in sector</div>
                </div>
              </div>

              {/* WHAT TO DO NOW (Section 17 Protocol) */}
              <div className="bg-red-50 p-4 rounded-2xl border border-red-200 text-left text-xs space-y-2">
                <h5 className="font-black text-xs text-red-950 uppercase">Immediate Bio-Security Instructions:</h5>
                <ul className="space-y-1 text-red-900 text-[11px]">
                  <li>1. <strong>Isolate affected animal</strong> in a separate dry stall immediately.</li>
                  <li>2. <strong>Avoid animal movement</strong> or grazing in common pastures.</li>
                  <li>3. <strong>Contact veterinarian:</strong> Dr. Anand Deshmukh has been notified.</li>
                  <li>4. <strong>Await clinical verification</strong> by Pashu Sakhi Sunita Pawar.</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-xl text-xs shadow-md transition"
                >
                  Track Case on Dashboard →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {step < 5 && (
          <div className="p-4 bg-[#F6F3EA] border-t border-[#ECE6D6] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-white border border-[#ECE6D6] text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-slate-50 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 bg-[#073B32] hover:bg-[#052923] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#D84F45] hover:bg-red-600 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md transition"
              >
                <span>{isSubmitting ? 'Submitting & Assessing...' : 'Submit & Assess Risk'}</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
