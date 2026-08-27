import React from 'react';
import { X, QrCode, ShieldCheck, Syringe, FileText, Activity, Calendar, Download, Printer, User, MapPin, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from './RiskBadge';

export default function AnimalProfileModal({ animal: propAnimal, onClose: propOnClose } = {}) {
  const { selectedAnimalForProfile, setSelectedAnimalForProfile, t } = useApp();

  const animal = propAnimal || selectedAnimalForProfile;

  if (!animal) return null;

  const handleClose = () => {
    if (propOnClose) propOnClose();
    setSelectedAnimalForProfile(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-xl text-emerald-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg text-slate-900 flex items-center gap-2">
                {animal.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">{animal.species} • {animal.breed}</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-6">
          {/* Top Profile Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
            <img 
              src={animal.imageUrl} 
              alt={animal.name} 
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-sm"
            />
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-black text-slate-900">{animal.name} ({animal.breed})</h4>
                <RiskBadge level={animal.healthStatus === 'healthy' ? 'LOW' : 'MEDIUM'} size="sm" />
              </div>
              <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>मालक / Owner: <strong>{animal.owner}</strong></span>
              </p>
              <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>गाव / Village: {animal.location}</span>
              </p>
              <div className="flex gap-3 pt-1 text-xs text-slate-700 font-bold">
                <span className="bg-white/80 px-2 py-0.5 rounded-md">वय: {animal.age}</span>
                <span className="bg-white/80 px-2 py-0.5 rounded-md">दूध: {animal.milkYield}</span>
              </div>
            </div>

            {/* QR Card Simulation */}
            <div className="p-2.5 bg-white rounded-2xl border border-slate-200 text-center shadow-xs self-center sm:self-auto shrink-0">
              <QrCode className="w-12 h-12 mx-auto text-slate-800" />
              <p className="text-[10px] font-bold text-[#073B32] mt-1">Digital QR Passport</p>
            </div>
          </div>

          {/* Tab 1: Vaccination Passport */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-black text-sm text-slate-900 flex items-center gap-2">
                <Syringe className="w-4 h-4 text-emerald-600" />
                <span>लसीकरण माहिती (Vaccination Status)</span>
              </h4>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs">
              {animal.vaccinations?.map((vac, idx) => (
                <div key={idx} className="p-3 flex items-center justify-between hover:bg-slate-50 transition">
                  <div>
                    <p className="font-bold text-slate-800">{vac.name}</p>
                    <p className="text-slate-500 text-[11px]">दिनांक: {vac.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {vac.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab 2: Treatment & Clinical Log */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>Veterinary Clinical Treatments</span>
            </h4>

            {animal.treatments && animal.treatments.length > 0 ? (
              <div className="space-y-2 text-xs">
                {animal.treatments.map((tr, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>{tr.condition}</span>
                      <span className="text-slate-500 font-normal">{tr.date}</span>
                    </div>
                    <p className="text-slate-600">Prescription: <span className="font-mono text-slate-700">{tr.drug}</span></p>
                    <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                      <span>Doctor: {tr.doctor}</span>
                      <span className="text-emerald-700 font-medium">{tr.outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center text-slate-500 text-xs">
                No recent major clinical interventions recorded. Animal is in good health condition.
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-200">
            <button 
              onClick={() => alert(`Printing Animal Digital Health Passport Certificate for Tag #${animal.id}`)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print Govt Health Card</span>
            </button>

            <button 
              onClick={() => setSelectedAnimalForProfile(null)}
              className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-sm transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
