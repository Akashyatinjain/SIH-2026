import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle, Bell, Info, MapPin, PhoneCall } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LocalAlertsFeed() {
  const { t, setIsIVROpen } = useApp();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <span>{t.nearbyAlertTitle}</span>
          </h3>
          <p className="text-xs text-slate-500">Live surveillance alerts generated for Khedgaon & Baramati Taluka</p>
        </div>
      </div>

      {/* Critical Alert 1: LSD */}
      <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-red-600 text-white rounded-xl animate-pulse">
              <ShieldAlert className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-bold bg-red-200 text-red-900 px-2 py-0.5 rounded-full uppercase">
                High Risk Surveillance Zone
              </span>
              <h4 className="font-bold text-red-950 text-sm mt-0.5">Suspected Lumpy Skin Disease Cases Detected</h4>
            </div>
          </div>
          <span className="text-xs font-bold text-red-700 bg-white/80 px-2.5 py-1 rounded-lg border border-red-200">
            Within 6.5 km
          </span>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {t.lsdAlertText}
        </p>

        <div className="p-3.5 bg-white rounded-xl border border-red-200 text-xs space-y-1.5 text-slate-800">
          <p className="font-bold text-red-900">Recommended Preventive Actions for Farmers:</p>
          <ul className="list-disc pl-4 space-y-1 text-slate-600">
            <li>Keep cattle sheds clean and spray anti-fly repellents (Neem oil / Deltamethrin).</li>
            <li>Do not allow animals to drink from communal village ponds during active cluster.</li>
            <li>Report fever or skin bumps immediately via this app or IVR 1800-180-1551.</li>
          </ul>
        </div>
      </div>

      {/* Alert 2: FMD Drive */}
      <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-amber-200 text-amber-900 rounded-lg">
              <Bell className="w-4 h-4 text-amber-800" />
            </span>
            <h4 className="font-bold text-amber-950 text-sm">{t.fmdCampTitle}</h4>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            Saturday Camp
          </span>
        </div>
        <p className="text-xs text-slate-600">
          {t.fmdCampDesc}
        </p>
      </div>

      {/* Emergency Contact Banner */}
      <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-3 bg-emerald-600 rounded-xl shrink-0">
            <PhoneCall className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Need Urgent Veterinary Assistance?</h4>
            <p className="text-xs text-slate-400">Call Dr. Anand Deshmukh or 24x7 Pashu Seva</p>
          </div>
        </div>
        <button
          onClick={() => setIsIVROpen(true)}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shrink-0"
        >
          Call 1800-180-1551 (Free)
        </button>
      </div>
    </div>
  );
}
