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
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { upcomingVaccinationCamps } from '../../data/mockData';

export default function FarmerVaccinesView() {
  const { animals, addNotification } = useApp();
  const [selectedCamp, setSelectedCamp] = useState(upcomingVaccinationCamps[0]);

  const handleBookSlot = (camp) => {
    addNotification("💉 Camp Slot Reserved", `Reserved free vaccination slot at ${camp.village} for your herd.`, "success");
    alert(`Slot confirmed at ${camp.village} on ${camp.date}! SMS confirmation sent to Ramesh Patil (+91 98224 51092).`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-[#073B32] via-[#095B4E] to-[#0A1020] text-white rounded-3xl shadow-sm border border-[#073B32] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>National Animal Disease Control Programme (NADCP)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Vaccination Calendar & Free Camps</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            100% Subsidized Government Preventive Immunization Grid
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-slate-400 block text-[10px]">Next Due in Herd</span>
            <span className="font-black text-white text-sm">FMD Booster (12 Days)</span>
          </div>
        </div>
      </div>

      {/* Free Upcoming Government Vaccination Camps */}
      <div className="space-y-3">
        <h3 className="font-black text-base text-[#0A1020] flex items-center justify-between">
          <span>UPCOMING FREE VACCINATION DRIVES IN YOUR BLOCK</span>
          <span className="text-xs text-emerald-800 font-bold bg-[#D9F1E8] px-3 py-1 rounded-full border border-[#B3E2D2]">
            Free Govt Supply
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingVaccinationCamps.map((camp) => (
            <div
              key={camp.id}
              className="bg-white p-5 rounded-3xl border border-[#ECE6D6] hover:border-[#149A84] transition shadow-xs hover:shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-500">{camp.id}</span>
                  <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {camp.fee}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm text-[#0A1020] leading-snug">{camp.title}</h4>
                
                <div className="space-y-1 text-xs text-slate-600 pt-1">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{camp.village} ({camp.distance})</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#149A84] shrink-0" />
                    <span>{camp.date} • {camp.time}</span>
                  </p>
                </div>

                <div className="bg-[#F6F3EA] p-2.5 rounded-xl border border-[#ECE6D6] space-y-1 text-[11px]">
                  <span className="text-slate-500 font-bold block">Included Vaccines:</span>
                  <p className="font-bold text-[#073B32]">{camp.vaccines.join(', ')}</p>
                </div>
              </div>

              <button
                onClick={() => handleBookSlot(camp)}
                className="w-full py-2.5 bg-[#073B32] hover:bg-[#052923] text-white rounded-xl font-bold text-xs shadow-xs transition flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Reserve Herd Slot</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Livestock Protection Records Table */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <h3 className="font-black text-base text-[#0A1020] border-b border-[#ECE6D6] pb-3">
          Livestock Immunization Protection Matrix
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                <th className="py-3 px-3">Animal</th>
                <th className="py-3 px-3">Tag ID</th>
                <th className="py-3 px-3">FMD Status</th>
                <th className="py-3 px-3">LSD Status</th>
                <th className="py-3 px-3">HS / Blackquarter</th>
                <th className="py-3 px-3">Brucellosis</th>
                <th className="py-3 px-3 text-right">Certificate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECE6D6]">
              {animals.map((a) => (
                <tr key={a.id} className="hover:bg-[#D9F1E8]/20 transition">
                  <td className="py-3 px-3 font-extrabold text-[#0A1020]">{a.name} ({a.species})</td>
                  <td className="py-3 px-3 font-mono text-slate-500">{a.id}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded font-bold">
                      Due in 12 Days
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-bold">
                      ✓ Protected
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-bold">
                      ✓ Protected
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-slate-700">Lifetime</td>
                  <td className="py-3 px-3 text-right">
                    <button 
                      onClick={() => alert(`Downloading official vaccination passport certificate for ${a.name} (PDF)`)}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-bold transition flex items-center gap-1 ml-auto"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
