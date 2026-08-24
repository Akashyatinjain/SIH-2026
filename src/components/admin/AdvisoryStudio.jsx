import React, { useState } from 'react';
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  Bell, 
  Globe, 
  CheckCircle2, 
  AlertTriangle,
  X,
  Radio
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function AdvisoryStudio({ onClose }) {
  const { createAdvisory, t } = useApp();

  const [title, setTitle] = useState("Urgent Ring Advisory: Lumpy Skin Disease (LSD) Shed Biosecurity");
  const [district, setDistrict] = useState("Pune District (Baramati / Daund Blocks)");
  const [disease, setDisease] = useState("Lumpy Skin Disease (LSD)");
  const [severity, setSeverity] = useState("HIGH");
  const [previewLang, setPreviewLang] = useState("mr"); // 'en' | 'mr' | 'hi'

  const [messageEn, setMessageEn] = useState("Suspected Lumpy Skin Disease cases reported in Baramati cluster. Isolate affected cattle immediately, disinfect shed with lime, and report skin lumps.");
  const [messageMr, setMessageMr] = useState("बारामती परिसरात लंपी त्वचा रोगाची लक्षणे आढळली आहेत. आजारी जनावरांना ताबडतोब वेगळे करा, गोठ्यात चुना फवारा आणि गाठी दिसल्यास तात्काळ कळवा.");
  const [messageHi, setMessageHi] = useState("बारामती क्लस्टर में लम्पी त्वचा रोग के मामले सामने आए हैं। बीमार पशुओं को तुरंत अलग करें और बाड़े में चूने का छिड़काव करें।");

  const [channels, setChannels] = useState({
    app: true,
    sms: true,
    ivr: true,
    fieldWorker: true
  });

  const toggleChannel = (ch) => {
    setChannels({ ...channels, [ch]: !channels[ch] });
  };

  const handleBroadcast = (e) => {
    e.preventDefault();
    createAdvisory({
      title: title,
      targetDistrict: district,
      disease: disease,
      severity: severity,
      message: messageEn,
      recommendedAction: "1. Quarantine animal 2. Vector control spray 3. Shed liming",
      channels: Object.keys(channels).filter(k => channels[k])
    });
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-100 text-red-800 rounded-xl">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">Government Advisory Creation & Broadcast Studio</h3>
              <p className="text-xs text-slate-500">Multi-Channel Ring Notification System (App, SMS, IVR & Field Sentinels)</p>
            </div>
          </div>
          {onClose && (
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Form */}
        <form onSubmit={handleBroadcast} className="p-6 space-y-4 text-xs">
          {/* Row 1: Title */}
          <div>
            <label className="block font-bold text-slate-700 mb-1">Advisory Headline</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
              required 
            />
          </div>

          {/* Row 2: Target & Disease */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Territory</label>
              <input 
                type="text" 
                value={district} 
                onChange={e => setDistrict(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl"
                required 
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Surveillance Disease</label>
              <select 
                value={disease} 
                onChange={e => setDisease(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl bg-white"
              >
                <option>Lumpy Skin Disease (LSD)</option>
                <option>Foot & Mouth Disease (FMD)</option>
                <option>Peste des Petits Ruminants (PPR)</option>
                <option>Hemorrhagic Septicemia (HS)</option>
                <option>Avian Influenza (HPAI)</option>
              </select>
            </div>
          </div>

          {/* Multilingual Text Editor with Tabs */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800">Multilingual Message Body</span>
              <div className="flex items-center bg-white rounded-lg p-0.5 border border-slate-300">
                <button
                  type="button"
                  onClick={() => setPreviewLang('mr')}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                    previewLang === 'mr' ? 'bg-emerald-700 text-white' : 'text-slate-600'
                  }`}
                >
                  मराठी
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewLang('hi')}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                    previewLang === 'hi' ? 'bg-emerald-700 text-white' : 'text-slate-600'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewLang('en')}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                    previewLang === 'en' ? 'bg-emerald-700 text-white' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {previewLang === 'mr' && (
              <textarea 
                value={messageMr}
                onChange={e => setMessageMr(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl h-20 text-xs"
                required
              />
            )}
            {previewLang === 'hi' && (
              <textarea 
                value={messageHi}
                onChange={e => setMessageHi(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl h-20 text-xs"
                required
              />
            )}
            {previewLang === 'en' && (
              <textarea 
                value={messageEn}
                onChange={e => setMessageEn(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl h-20 text-xs"
                required
              />
            )}
          </div>

          {/* Multichannel Dispatch Toggles */}
          <div className="space-y-2">
            <label className="block font-bold text-slate-700">Select Broadcast Channels</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => toggleChannel('app')}
                className={`p-3 rounded-xl border text-center font-bold transition ${
                  channels.app ? 'bg-emerald-50 border-emerald-600 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <Bell className="w-4 h-4 mx-auto mb-1" />
                <span>In-App Alert</span>
              </button>

              <button
                type="button"
                onClick={() => toggleChannel('sms')}
                className={`p-3 rounded-xl border text-center font-bold transition ${
                  channels.sms ? 'bg-emerald-50 border-emerald-600 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <MessageSquare className="w-4 h-4 mx-auto mb-1" />
                <span>SMS Broadcast</span>
              </button>

              <button
                type="button"
                onClick={() => toggleChannel('ivr')}
                className={`p-3 rounded-xl border text-center font-bold transition ${
                  channels.ivr ? 'bg-emerald-50 border-emerald-600 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <PhoneCall className="w-4 h-4 mx-auto mb-1" />
                <span>IVR Call Blast</span>
              </button>

              <button
                type="button"
                onClick={() => toggleChannel('fieldWorker')}
                className={`p-3 rounded-xl border text-center font-bold transition ${
                  channels.fieldWorker ? 'bg-emerald-50 border-emerald-600 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <Radio className="w-4 h-4 mx-auto mb-1" />
                <span>Pashu Sakhi Push</span>
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3 border-t border-slate-200">
            <button
              type="submit"
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Broadcast Official Ring Advisory to 1,420 Farmers</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
