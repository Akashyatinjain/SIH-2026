import React, { useState, useEffect } from 'react';
import { PhoneCall, Mic, Radio, CheckCircle, Volume2, X, AlertCircle, MapPin, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function IVRModal() {
  const { isIVROpen, setIsIVROpen, t, submitSickAnimalReport, addNotification } = useApp();
  const [callState, setCallState] = useState('dialing'); // 'dialing' | 'connected' | 'language' | 'symptoms' | 'location' | 'confirmed'
  const [selectedLanguage, setSelectedLanguage] = useState('mr');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [countdown, setCountdown] = useState(3);
  const [audioPlaying, setAudioPlaying] = useState(true);

  useEffect(() => {
    if (!isIVROpen) {
      setCallState('dialing');
      setSelectedSymptom('');
      return;
    }

    let timer;
    if (callState === 'dialing') {
      timer = setTimeout(() => {
        setCallState('language');
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isIVROpen, callState]);

  if (!isIVROpen) return null;

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCallState('symptoms');
  };

  const handleSymptomSelect = (symptomName) => {
    setSelectedSymptom(symptomName);
    setCallState('location');

    setTimeout(() => {
      setCallState('confirmed');
      // Automatically register the case
      submitSickAnimalReport({
        farmerName: "Ramesh Patil (via IVR Toll-Free)",
        farmerPhone: "+91 98224 51092",
        village: "Khedgaon (Auto-Cell-Tower)",
        species: "Cattle (Cow)",
        symptoms: [symptomName, "Reported via 1800-180-1551 Pashu Seva"],
        recentDeaths: false,
        duration: "2 Days"
      });
      addNotification("📞 IVR Case Registered", `Case submitted via 1800-180-1551 helpline for Khedgaon. SMS sent with Case ID.`, "success");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 text-white rounded-2xl max-w-lg w-full max-h-[94vh] overflow-y-auto p-4 sm:p-6 shadow-2xl border border-slate-700 relative">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-600 rounded-xl animate-pulse">
              <PhoneCall className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Pashu Seva 24x7 IVR Helpline</h3>
              <p className="text-xs text-emerald-400 font-mono">Toll-Free: 1800-180-1551 (पशू सेवा)</p>
            </div>
          </div>
          <button 
            onClick={() => setIsIVROpen(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Voice Call States */}
        {callState === 'dialing' && (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto animate-ping">
              <PhoneCall className="w-8 h-8 text-emerald-400" />
            </div>
            <p className="text-slate-300 font-medium">Connecting to Maharashtra Animal Health Helpline...</p>
            <p className="text-xs text-slate-500">Routing to Pune District Veterinary Server</p>
          </div>
        )}

        {callState === 'language' && (
          <div className="space-y-4 py-2">
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800">
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span>Voice Prompt: "भाषा निवडीसाठी १, २ किंवा ३ दाबा"</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">Step 1: Choose Preferred Language</p>
            <div className="grid grid-cols-3 gap-3">
              <button 
                onClick={() => handleLanguageSelect('mr')}
                className="p-4 bg-slate-800 hover:bg-emerald-700 rounded-xl border border-slate-700 hover:border-emerald-500 text-center transition font-bold"
              >
                <div className="text-2xl mb-1">१</div>
                <div className="text-sm">मराठी</div>
              </button>
              <button 
                onClick={() => handleLanguageSelect('hi')}
                className="p-4 bg-slate-800 hover:bg-emerald-700 rounded-xl border border-slate-700 hover:border-emerald-500 text-center transition font-bold"
              >
                <div className="text-2xl mb-1">२</div>
                <div className="text-sm">हिंदी</div>
              </button>
              <button 
                onClick={() => handleLanguageSelect('en')}
                className="p-4 bg-slate-800 hover:bg-emerald-700 rounded-xl border border-slate-700 hover:border-emerald-500 text-center transition font-bold"
              >
                <div className="text-2xl mb-1">३</div>
                <div className="text-sm">English</div>
              </button>
            </div>
          </div>
        )}

        {callState === 'symptoms' && (
          <div className="space-y-3 py-2">
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>IVR: "जनावरांमध्ये दिसणाऱ्या लक्षणांचा क्रमांक निवडा किंवा बोला"</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">Step 2: Select Reported Symptom</p>
            <div className="space-y-2">
              <button 
                onClick={() => handleSymptomSelect("High Fever & Skin Lumps (लंपी गाठी व ताप)")}
                className="w-full flex items-center justify-between p-3.5 bg-slate-800 hover:bg-emerald-800/80 rounded-xl border border-slate-700 transition text-left"
              >
                <span className="font-medium text-sm">१. अंगावर गाठी व तीव्र ताप (Lumpy Skin)</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded">Key 1</span>
              </button>
              <button 
                onClick={() => handleSymptomSelect("Mouth Blisters & Salivation (लाळ्या-खुरकूत FMD)")}
                className="w-full flex items-center justify-between p-3.5 bg-slate-800 hover:bg-emerald-800/80 rounded-xl border border-slate-700 transition text-left"
              >
                <span className="font-medium text-sm">२. तोंडात फोड, लाळ व लंगडणे (FMD)</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded">Key 2</span>
              </button>
              <button 
                onClick={() => handleSymptomSelect("Breathing Difficulty & Throat Swelling (घटसर्प HS)")}
                className="w-full flex items-center justify-between p-3.5 bg-slate-800 hover:bg-emerald-800/80 rounded-xl border border-slate-700 transition text-left"
              >
                <span className="font-medium text-sm">३. गळा सुजणे व दम लागणे (HS / घटसर्प)</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded">Key 3</span>
              </button>
              <button 
                onClick={() => handleSymptomSelect("Sudden Mortality in Flock (अचानक मृत्यू)")}
                className="w-full flex items-center justify-between p-3.5 bg-slate-800 hover:bg-emerald-800/80 rounded-xl border border-slate-700 transition text-left"
              >
                <span className="font-medium text-sm">४. गोठ्यात अचानक मृत्यू (Sudden Death)</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded">Key 4</span>
              </button>
            </div>
          </div>
        )}

        {callState === 'location' && (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center mx-auto animate-spin">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-slate-200 font-semibold">Capturing Caller Location via Cell Tower...</p>
            <p className="text-xs text-emerald-400 font-mono">📍 Pinned: Tower ID #MH-PUN-BAR-409 (Khedgaon, Baramati)</p>
          </div>
        )}

        {callState === 'confirmed' && (
          <div className="py-4 space-y-4">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-white">IVR Report Registered!</h4>
              <p className="text-xs text-slate-400">Confirmation SMS dispatched to caller's mobile</p>
            </div>

            <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Caller:</span>
                <span className="font-semibold text-slate-200">Ramesh Patil (+91 98224 51092)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Reported Symptom:</span>
                <span className="font-semibold text-emerald-300">{selectedSymptom}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Facility:</span>
                <span className="font-semibold text-slate-200">Baramati Taluka Vet Dispensary</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-2">
                <span className="text-slate-400">SMS Notification:</span>
                <span className="text-emerald-400 font-mono">"केस नोंद झाली. डॉ. आनंद देशमुख यांना पाचारण केले आहे."</span>
              </div>
            </div>

            <button 
              onClick={() => setIsIVROpen(false)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-sm transition"
            >
              Close IVR Simulator
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Simulated interactive telephony prototype for SIH 26128 offline / feature phone accessibility.</span>
        </div>
      </div>
    </div>
  );
}
