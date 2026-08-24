import React, { useState } from 'react';
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  AlertTriangle, 
  Download,
  Share2,
  FileText
} from 'lucide-react';
import { advisories } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

export default function AdvisoryCenter() {
  const { t } = useApp();
  const [playingAudioId, setPlayingAudioId] = useState(null);

  const toggleAudio = (id) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Veterinary Knowledge & Biosecurity Hub
          </span>
          <h2 className="text-xl sm:text-2xl font-black mt-2">Disease Prevention & Seasonal Advisories</h2>
          <p className="text-xs text-emerald-200 mt-1">
            Government of Maharashtra Animal Husbandry Extension Bulletins
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => alert("Downloading Complete Farmer Biosecurity Handbook (Marathi / Hindi / English PDF)")}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Guide (PDF)</span>
          </button>
        </div>
      </div>

      {/* Advisory Cards List with Audio Simulation */}
      <div className="space-y-4">
        {advisories.map((adv) => {
          const isPlaying = playingAudioId === adv.id;

          return (
            <div key={adv.id} className="bg-white rounded-2xl border border-slate-200 p-5 card-elevated space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      {adv.category}
                    </span>
                    <span className="text-xs text-slate-400">{adv.date}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 mt-1">{adv.title}</h3>
                </div>

                {/* Audio Read-Aloud Button for Rural Accessibility */}
                <button
                  onClick={() => toggleAudio(adv.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 ${
                    isPlaying 
                      ? 'bg-emerald-600 text-white shadow-md animate-pulse' 
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isPlaying ? 'Playing Marathi Audio...' : `Listen (${adv.audioMinutes})`}</span>
                </button>
              </div>

              {/* Audio Wave Simulator */}
              {isPlaying && (
                <div className="p-3 bg-emerald-950 text-emerald-300 rounded-xl border border-emerald-800 flex items-center justify-between text-xs animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ऑडिओ सुरू आहे: "पशुपालकांसाठी लंपी त्वचा रोग प्रतिबंध मार्गदर्शक सूचना..."</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400">0:42 / 2:00</span>
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {adv.summary}
              </p>

              {/* Action Checklist */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Key Biosecurity Protocol:</span>
                </p>
                <ul className="space-y-1.5 text-slate-700">
                  {adv.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
