import React from 'react';
import { Syringe, Calendar, MapPin, CheckCircle, Clock, ShieldCheck, ArrowRight, UserCheck, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { upcomingVaccinationCamps } from '../../data/mockData';

export default function VaccinationHub() {
  const { t, animals } = useApp();

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 bg-gradient-to-r from-emerald-800 to-forest-900 text-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
            National Animal Disease Control Programme
          </span>
          <h2 className="text-xl font-bold mt-2">Livestock Immunization & Camp Schedule</h2>
          <p className="text-xs text-emerald-200 mt-1">Village: Khedgaon • Baramati Taluka, Pune</p>
        </div>
        <div className="bg-white/10 p-3 rounded-xl text-center border border-white/10 shrink-0">
          <div className="text-2xl font-extrabold text-white">75%</div>
          <div className="text-[10px] text-emerald-200">Herd Protection Rate</div>
        </div>
      </div>

      {/* Due Soon Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-amber-50/80 border border-amber-200 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-amber-950 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Vaccinations Due Soon</span>
            </h3>
            <span className="text-xs font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
              Action Needed
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Foot & Mouth Disease (FMD) Booster</p>
                <p className="text-slate-500 text-[11px]">Due for: 24 Cattle & Buffaloes</p>
              </div>
              <span className="font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg">
                Due in 12 Days
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Hemorrhagic Septicemia (HS)</p>
                <p className="text-slate-500 text-[11px]">Due for: 5 Buffaloes</p>
              </div>
              <span className="font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                Due in 35 Days
              </span>
            </div>
          </div>
        </div>

        {/* Protected Vaccines */}
        <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Protected Vaccines</span>
            </h3>
            <span className="text-xs font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full">
              Active Immunity
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Lumpy Skin Disease (Goat Pox 0.5ml)</p>
                <p className="text-slate-500 text-[11px]">Administered: 14 Aug 2025</p>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                🟢 Protected
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Brucella abortus S19 (Female Calves)</p>
                <p className="text-slate-500 text-[11px]">Lifelong Immunity Logged</p>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                🟢 Lifetime
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Free Camps */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-700" />
          <span>Nearby Free Government Vaccination Camps</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingVaccinationCamps.map((camp) => (
            <div key={camp.id} className="p-4 bg-white rounded-xl border border-slate-200 card-elevated flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {camp.distance}
                  </span>
                  <span className="font-semibold text-slate-500">{camp.fee}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{camp.title}</h4>
                <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{camp.village}</span>
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg">
                <div className="flex items-center gap-1 font-semibold text-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{camp.date}</span>
                </div>
                <p className="text-[11px] text-slate-500">Time: {camp.time}</p>
                <p className="text-[11px] text-slate-700">In Charge: {camp.vetInCharge}</p>
              </div>

              <button 
                onClick={() => alert(`Opening Google Maps navigation to: ${camp.village}, Baramati`)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>Get Directions / SMS Reminder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
