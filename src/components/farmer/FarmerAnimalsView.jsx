import React, { useState } from 'react';
import { 
  ListChecks, 
  PlusCircle, 
  Search, 
  Filter, 
  ShieldCheck, 
  Activity, 
  Calendar, 
  Syringe, 
  ChevronRight,
  Sparkles,
  QrCode,
  Tag,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import AnimalProfileModal from '../common/AnimalProfileModal';
import RiskBadge from '../common/RiskBadge';

export default function FarmerAnimalsView() {
  const { animals, setSelectedAnimalForProfile, isRegisterAnimalOpen, setIsRegisterAnimalOpen, registerAnimal, addNotification } = useApp();
  const [search, setSearch] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Animal Form State
  const [newAnimalName, setNewAnimalName] = useState('');
  const [newSpecies, setNewSpecies] = useState('Cattle (गाय)');
  const [newBreed, setNewBreed] = useState('Gir Indigenous');
  const [newAge, setNewAge] = useState('3 Years');
  const [newYield, setNewYield] = useState('11 Liters/day');

  const filteredAnimals = animals.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || 
                          a.id.toLowerCase().includes(search.toLowerCase()) ||
                          a.breed.toLowerCase().includes(search.toLowerCase());
    const matchesSpecies = filterSpecies === 'all' || a.species.toLowerCase().includes(filterSpecies.toLowerCase());
    return matchesSearch && matchesSpecies;
  });

  const handleCreateAnimal = (e) => {
    e.preventDefault();
    if (!newAnimalName) return;

    registerAnimal({
      name: newAnimalName,
      species: newSpecies,
      breed: newBreed,
      age: newAge,
      milkYield: newYield
    });

    setShowAddModal(false);
    setNewAnimalName('');
    addNotification("📋 Animal Registered", `Added ${newAnimalName} to your digital herd passport!`, "success");
    alert(`Successfully registered ${newAnimalName} in your digital livestock registry!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-[#073B32] via-[#095B4E] to-[#0A1020] text-white rounded-3xl shadow-sm border border-[#073B32] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Digital Livestock Passport Registry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">My Animals (माझी जनावरे)</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Ramesh Patil's Monitored Herd • 24 Cattle, Buffalo & Small Ruminants
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-3 bg-[#149A84] hover:bg-[#0C7A68] text-white rounded-2xl text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 border border-emerald-400"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ Register New Animal</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by animal name, tag ID, or breed..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none focus:border-[#149A84]"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterSpecies}
            onChange={e => setFilterSpecies(e.target.value)}
            className="px-3 py-2 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none"
          >
            <option value="all">All Species</option>
            <option value="Cattle">Cattle (गाय)</option>
            <option value="Buffalo">Buffalo (म्हैस)</option>
            <option value="Goat">Goat / Sheep (शेळी)</option>
          </select>
        </div>
      </div>

      {/* Animal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAnimals.map((animal) => (
          <div
            key={animal.id}
            onClick={() => setSelectedAnimal(animal)}
            className="bg-white rounded-3xl border border-[#ECE6D6] hover:border-[#149A84] transition shadow-xs hover:shadow-md cursor-pointer overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Photo & Badge */}
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img 
                  src={animal.imageUrl} 
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    animal.healthStatus === 'healthy' 
                      ? 'bg-emerald-500 text-white shadow-sm' 
                      : 'bg-amber-500 text-white shadow-sm'
                  }`}>
                    {animal.healthStatus === 'healthy' ? 'Healthy' : 'Care Due'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#0A1020]/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-white font-mono text-[10px] font-bold border border-white/10">
                  Tag: {animal.id}
                </div>
              </div>

              {/* Animal Details */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-[#0A1020] group-hover:text-[#149A84] transition">
                    {animal.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-bold">{animal.species}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-[#F6F3EA] p-3 rounded-2xl border border-[#ECE6D6]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Breed:</span>
                    <span className="font-bold text-[#0A1020]">{animal.breed}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Age:</span>
                    <span className="font-bold text-[#0A1020]">{animal.age}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Yield / Weight:</span>
                    <span className="font-bold text-[#073B32]">{animal.milkYield || animal.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Calvings:</span>
                    <span className="font-bold text-[#0A1020]">{animal.calvings || 0}</span>
                  </div>
                </div>

                {/* Vaccines Due Status */}
                <div className="text-[11px] flex items-center justify-between text-slate-600 pt-1">
                  <span className="flex items-center gap-1">
                    <Syringe className="w-3.5 h-3.5 text-[#149A84]" />
                    <span>FMD Booster:</span>
                  </span>
                  <span className="font-bold text-amber-700">Due in 12 days</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F6F3EA] border-t border-[#ECE6D6] flex items-center justify-between text-xs font-black text-[#073B32] group-hover:bg-[#D9F1E8] transition">
              <span>View Full Passport & Treatments</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Animal Profile Modal */}
      {selectedAnimal && (
        <AnimalProfileModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
        />
      )}

      {/* Register Animal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <h3 className="text-xl font-black text-[#0A1020]">Register New Livestock</h3>
            <form onSubmit={handleCreateAnimal} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Animal Name / Identifier</label>
                <input
                  type="text"
                  placeholder="e.g. Radhika, Kapila"
                  value={newAnimalName}
                  onChange={e => setNewAnimalName(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Species</label>
                  <select
                    value={newSpecies}
                    onChange={e => setNewSpecies(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  >
                    <option value="Cattle (गाय)">Cattle (गाय)</option>
                    <option value="Buffalo (म्हैस)">Buffalo (म्हैस)</option>
                    <option value="Goat (शेळी)">Goat (शेळी)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Breed</label>
                  <input
                    type="text"
                    value={newBreed}
                    onChange={e => setNewBreed(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Age</label>
                  <input
                    type="text"
                    value={newAge}
                    onChange={e => setNewAge(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Milk Yield / Weight</label>
                  <input
                    type="text"
                    value={newYield}
                    onChange={e => setNewYield(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#073B32] text-white font-bold rounded-xl shadow-xs"
                >
                  Save to Passport Registry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
