import React, { useState } from 'react';
import { 
  Users, 
  Truck, 
  MapPin, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  Syringe, 
  Radio,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function DistrictResponseView() {
  const { addNotification } = useApp();

  const rrtUnits = [
    {
      id: "RRT-PUN-01",
      name: "Mobile Poly-Clinic Unit 1 (Baramati Focus)",
      leadDoctor: "Dr. Rajiv Thorat (DSO Pune)",
      driver: "Santosh Ghadge",
      status: "Deployed On-Ground",
      location: "Khedgaon Gram Panchayat Center",
      dosesOnboard: "2,000 Doses (LSD Goat Pox + FMD)",
      equipment: "Cold Box, Centrifuge, PPE Kits, Biosecurity Sprayer",
      lastCheckin: "8 mins ago"
    },
    {
      id: "RRT-PUN-02",
      name: "Rapid Containment Unit 2 (Daund Poultry Ring)",
      leadDoctor: "Dr. Amit Patil",
      driver: "Vikas Shinde",
      status: "Containment Operations Active",
      location: "Kurkumbh Industrial Perimeter",
      dosesOnboard: "1,500 Doses + Disinfectants",
      equipment: "BSL-2 Protective Gear, Sample Transport Dewar",
      lastCheckin: "15 mins ago"
    },
    {
      id: "RRT-PUN-03",
      name: "Emergency Reserve Unit 3 (Pune Headquarters)",
      leadDoctor: "Dr. Sneha Kulkarni",
      driver: "Mahesh Jadhav",
      status: "Standby / Ready for Dispatch",
      location: "Central Veterinary Polyclinic, Aundh",
      dosesOnboard: "5,000 Emergency Reserve Doses",
      equipment: "Full Surgical & Diagnostic Kit",
      lastCheckin: "2 mins ago"
    }
  ];

  const handleDispatch = (unitName) => {
    addNotification("🚨 Emergency Team Dispatched", `Dispatched ${unitName} to sector hotspot.`, "alert");
    alert(`Emergency deployment order issued to ${unitName}!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-teal-950 via-[#073B32] to-[#0A1020] text-white rounded-3xl shadow-sm border border-teal-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-teal-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Mobile Veterinary Emergency Fleet Command</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Rapid Response Teams (RRT)</h2>
          <p className="text-xs text-teal-200 mt-0.5">
            Rapid Containment, Ring Vaccination & Mobile Diagnostic Polyclinics
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-slate-800 text-xs flex items-center gap-3">
          <Truck className="w-5 h-5 text-emerald-400" />
          <div>
            <span className="text-slate-400 block text-[10px]">Fleet Active</span>
            <span className="font-black text-white text-sm">3 Mobile Units Ready</span>
          </div>
        </div>
      </div>

      {/* RRT Units List */}
      <div className="space-y-4">
        <h3 className="font-black text-base text-[#0A1020]">PUNE DISTRICT MOBILE RAPID RESPONSE FLEET</h3>

        <div className="space-y-4">
          {rrtUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-white p-6 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ECE6D6] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#073B32] bg-[#D9F1E8] px-2.5 py-1 rounded-xl">
                    {unit.id}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    unit.status.includes('Deployed') || unit.status.includes('Active')
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  }`}>
                    {unit.status}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Last GPS Checkin: {unit.lastCheckin}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-8 space-y-2">
                  <h4 className="font-black text-lg text-[#0A1020]">{unit.name}</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <p><strong>Lead Officer:</strong> {unit.leadDoctor}</p>
                    <p><strong>Pilot/Driver:</strong> {unit.driver}</p>
                    <p><strong>Live Location:</strong> {unit.location}</p>
                    <p><strong>Vaccine Payload:</strong> {unit.dosesOnboard}</p>
                  </div>

                  <p className="text-xs text-slate-500 pt-1">Equipment: {unit.equipment}</p>
                </div>

                <div className="md:col-span-4 flex justify-end">
                  <button
                    onClick={() => handleDispatch(unit.name)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#073B32] hover:bg-[#052923] text-white font-black rounded-2xl text-xs shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Truck className="w-4 h-4 text-emerald-300" />
                    <span>Issue Dispatch Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
