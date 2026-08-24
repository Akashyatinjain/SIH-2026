import React, { useState } from 'react';
import { ChevronRight, Layers, Building, MapPin, Tag, User, QrCode } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function DrilldownExplorer() {
  const { animals, setSelectedAnimalForProfile } = useApp();
  
  const [level, setLevel] = useState('village'); // 'state' | 'district' | 'block' | 'village' | 'animal'
  const [selectedBlock, setSelectedBlock] = useState('Baramati');
  const [selectedVillage, setSelectedVillage] = useState('Khedgaon');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 card-elevated space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Administrative Hierarchy & Livestock Drilldown</span>
          </h3>
          <p className="text-xs text-slate-500">Multilevel registry navigation from State command down to individual ear tag</p>
        </div>
      </div>

      {/* Interactive Breadcrumb Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold p-2.5 bg-slate-100/80 rounded-xl">
        <button 
          onClick={() => setLevel('state')} 
          className={`px-2.5 py-1 rounded-lg transition ${level === 'state' ? 'bg-indigo-700 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          State: Maharashtra
        </button>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

        <button 
          onClick={() => setLevel('district')} 
          className={`px-2.5 py-1 rounded-lg transition ${level === 'district' ? 'bg-indigo-700 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          District: Pune
        </button>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

        <button 
          onClick={() => setLevel('block')} 
          className={`px-2.5 py-1 rounded-lg transition ${level === 'block' ? 'bg-indigo-700 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Taluka: {selectedBlock}
        </button>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

        <button 
          onClick={() => setLevel('village')} 
          className={`px-2.5 py-1 rounded-lg transition ${level === 'village' ? 'bg-indigo-700 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Village: {selectedVillage}
        </button>
      </div>

      {/* Drilldown Content View */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-800">
            Livestock Registered in {selectedVillage} ({animals.length} Records)
          </span>
          <span className="text-slate-500">Census Tagging Coverage: 98.4%</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          {animals.map((a) => (
            <div
              key={a.id}
              onClick={() => setSelectedAnimalForProfile(a)}
              className="p-3 bg-slate-50 hover:bg-emerald-50/50 rounded-xl border border-slate-200 hover:border-emerald-500 transition cursor-pointer flex items-center gap-3"
            >
              <img src={a.imageUrl} alt={a.name} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 truncate">{a.name}</span>
                  <RiskBadge level={a.healthStatus === 'healthy' ? 'LOW' : 'HIGH'} size="sm" />
                </div>
                <p className="text-[11px] text-slate-600">{a.species} • {a.breed}</p>
                <p className="text-[10px] font-mono text-slate-400">{a.id} • {a.owner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
