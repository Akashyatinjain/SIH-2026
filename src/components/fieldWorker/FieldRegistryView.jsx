import React, { useState } from 'react';
import { 
  ListChecks, 
  PlusCircle, 
  Search, 
  Tag, 
  QrCode, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import AnimalProfileModal from '../common/AnimalProfileModal';

export default function FieldRegistryView() {
  const { animals, registerAnimal, addNotification } = useApp();

  const [search, setSearch] = useState('');
  const [filterVillage, setFilterVillage] = useState('all');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showTagModal, setShowTagModal] = useState(false);

  // Form State
  const [tagId, setTagId] = useState(`890401827${Math.floor(10000 + Math.random() * 90000)}`);
  const [animalName, setAnimalName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [villageName, setVillageName] = useState('Khedgaon');
  const [species, setSpecies] = useState('Cattle (गाय)');
  const [breed, setBreed] = useState('Gir Indigenous');

  const filtered = animals.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || 
                          a.id.toLowerCase().includes(search.toLowerCase()) ||
                          a.owner.toLowerCase().includes(search.toLowerCase());
    const matchesVillage = filterVillage === 'all' || a.location.toLowerCase().includes(filterVillage.toLowerCase());
    return matchesSearch && matchesVillage;
  });

  const handleRegisterTag = (e) => {
    e.preventDefault();
    if (!animalName || !ownerName) return;

    registerAnimal({
      name: animalName,
      species: species,
      breed: breed,
      owner: ownerName,
      location: `${villageName}, Baramati, Pune`,
      rfidTag: tagId
    });

    setShowTagModal(false);
    setAnimalName('');
    setOwnerName('');
    addNotification("📋 Ear Tag Registered", `Registered RFID #${tagId} for ${ownerName}'s ${species}.`, "success");
    alert(`Ear Tag RFID #${tagId} registered and uploaded!`);
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-teal-950 via-slate-900 to-[#0A1020] text-white rounded-3xl shadow-sm border border-teal-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-teal-200 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>National Livestock Identification System (INAPH/Bharat Pashudhan)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Field Animal Tag Registry</h2>
          <p className="text-xs text-teal-200 mt-0.5">
            Sector Coverage: 4,820 Tagged Cattle & Small Ruminants in Baramati Unit
          </p>
        </div>

        <button
          onClick={() => setShowTagModal(true)}
          className="px-5 py-3 bg-[#149A84] hover:bg-[#0C7A68] text-white rounded-2xl text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 border border-emerald-400"
        >
          <Tag className="w-4 h-4" />
          <span>+ Apply & Register New Ear Tag</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#ECE6D6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by RFID Tag, Animal Name, or Owner..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none focus:border-[#149A84]"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterVillage}
            onChange={e => setFilterVillage(e.target.value)}
            className="px-3 py-2 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl text-xs font-bold text-[#0A1020] focus:outline-none"
          >
            <option value="all">All Villages</option>
            <option value="Khedgaon">Khedgaon</option>
            <option value="Malegaon">Malegaon Budruk</option>
            <option value="Gunawadi">Gunawadi</option>
          </select>
        </div>
      </div>

      {/* Livestock Tag Matrix Table */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#ECE6D6] pb-3">
          <h3 className="font-black text-base text-[#0A1020]">Registered Sector Livestock List</h3>
          <span className="text-xs text-slate-500 font-mono">{filtered.length} Animals Indexed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F6F3EA] text-slate-700 font-bold border-b border-[#ECE6D6]">
                <th className="py-3 px-3">Ear Tag / RFID</th>
                <th className="py-3 px-3">Animal Name</th>
                <th className="py-3 px-3">Species & Breed</th>
                <th className="py-3 px-3">Owner & Contact</th>
                <th className="py-3 px-3">Village</th>
                <th className="py-3 px-3">Health Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECE6D6]">
              {filtered.map((a) => (
                <tr 
                  key={a.id}
                  onClick={() => setSelectedAnimal(a)}
                  className="hover:bg-[#D9F1E8]/20 cursor-pointer transition"
                >
                  <td className="py-3 px-3 font-mono font-bold text-[#073B32] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#149A84]" />
                    <span>{a.rfidTag || a.id}</span>
                  </td>
                  <td className="py-3 px-3 font-black text-[#0A1020]">{a.name}</td>
                  <td className="py-3 px-3 text-slate-700">{a.species} ({a.breed})</td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{a.owner}</td>
                  <td className="py-3 px-3 text-slate-600">{a.location.split(',')[0]}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                      a.healthStatus === 'healthy' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {a.healthStatus === 'healthy' ? 'Healthy' : 'Care Due'}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAnimal(a);
                      }}
                      className="px-3 py-1 bg-[#073B32] hover:bg-[#052923] text-white rounded-lg text-[11px] font-bold transition"
                    >
                      Passport
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Animal Profile Modal */}
      {selectedAnimal && (
        <AnimalProfileModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
        />
      )}

      {/* Apply Ear Tag Modal */}
      {showTagModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-[#ECE6D6] shadow-2xl">
            <h3 className="text-xl font-black text-[#0A1020]">Apply & Register RFID Ear Tag</h3>
            <form onSubmit={handleRegisterTag} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Generated RFID Tag Number</label>
                <input
                  type="text"
                  value={tagId}
                  readOnly
                  className="w-full p-2.5 bg-slate-100 border border-[#ECE6D6] rounded-xl font-mono font-bold text-[#073B32]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Animal Identifier</label>
                  <input
                    type="text"
                    placeholder="e.g. Gauri, Laxmi, Kalyani"
                    value={animalName}
                    onChange={e => setAnimalName(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Owner Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patil"
                    value={ownerName}
                    onChange={e => setOwnerName(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Species</label>
                  <select
                    value={species}
                    onChange={e => setSpecies(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  >
                    <option value="Cattle (गाय)">Cattle (गाय)</option>
                    <option value="Buffalo (म्हैस)">Buffalo (म्हैस)</option>
                    <option value="Goat (शेळी)">Goat (शेळी)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Village</label>
                  <select
                    value={villageName}
                    onChange={e => setVillageName(e.target.value)}
                    className="w-full p-2.5 bg-[#F6F3EA] border border-[#ECE6D6] rounded-xl font-bold"
                  >
                    <option value="Khedgaon">Khedgaon</option>
                    <option value="Malegaon Budruk">Malegaon Budruk</option>
                    <option value="Gunawadi">Gunawadi</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowTagModal(false)}
                  className="px-4 py-2 bg-slate-100 font-bold rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#073B32] text-white font-bold rounded-xl shadow-xs"
                >
                  Confirm & Sync Tag
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
