import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  TestTube2, 
  Hospital, 
  Pill, 
  CheckCircle, 
  AlertTriangle, 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldAlert, 
  ArrowRight,
  Send,
  FileCheck,
  Stethoscope,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import RiskBadge from '../common/RiskBadge';

export default function CaseDetailDrawer() {
  const { 
    selectedCaseForDrawer, 
    setSelectedCaseForDrawer, 
    updateCaseAction, 
    setRole,
    setActiveTab
  } = useApp();

  const [activeActionTab, setActiveActionTab] = useState('triage'); // 'triage' | 'treatment' | 'lab' | 'referral'
  
  // Lab Order Form State
  const [labSampleType, setLabSampleType] = useState('Nasal Swab & Serum');
  const [targetLab, setTargetLab] = useState('Regional Animal Health Diagnostic Lab, Aundh, Pune');
  
  // Referral Form State
  const [targetHospital, setTargetHospital] = useState('Baramati Sub-District Veterinary Hospital (8.4 km)');
  const [urgency, setUrgency] = useState('Immediate Isolation & Clinical Supervision');

  // Treatment Form State
  const [prescriptionText, setPrescriptionText] = useState('Inj. Flunixin Meglumine 15ml IM + Inj. Ceftiofur Sodium 1g IM + Topical Neem & Zinc oxide paste for nodules. Daily isolation.');

  if (!selectedCaseForDrawer) return null;

  const c = selectedCaseForDrawer;

  const handleOrderLab = (e) => {
    e.preventDefault();
    const barcode = `LAB-PUN-${Math.floor(9800 + Math.random() * 100)}`;
    updateCaseAction(c.caseId, {
      status: 'sample_pending',
      labReferral: {
        sampleId: barcode,
        sampleType: labSampleType,
        targetLab: targetLab,
        dateSent: new Date().toISOString().slice(0, 16).replace('T', ' '),
        status: "Sample Dispatched to Pune Lab"
      }
    });
    alert(`Diagnostic Lab Sample Barcode #${barcode} created and courier dispatched!`);
  };

  const handleCreateReferral = (e) => {
    e.preventDefault();
    updateCaseAction(c.caseId, {
      hospitalReferral: {
        hospital: targetHospital,
        urgency: urgency,
        status: "Referral Active - Bed Reserved in Quarantine Ward"
      }
    });
    alert(`Sub-District Hospital Referral dispatched to ${targetHospital}!`);
  };

  const handleSavePrescription = (e) => {
    e.preventDefault();
    updateCaseAction(c.caseId, {
      prescription: prescriptionText,
      status: 'assigned'
    });
    alert(`Clinical Treatment Plan recorded for Case #${c.caseId}!`);
  };

  const handleResolveCase = () => {
    updateCaseAction(c.caseId, {
      status: 'resolved'
    });
    setSelectedCaseForDrawer(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-2 sm:p-6 flex items-center justify-center animate-fadeIn selection:bg-tealBrand selection:text-white">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Workspace Top Header */}
        <div className="px-6 py-4 bg-midnight text-white border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-tealBrand/20 text-tealBrand rounded-xl border border-tealBrand/30">
              <Stethoscope className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-lg">{c.caseId}</h3>
                <RiskBadge level={c.riskLevel} size="sm" />
                <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                  {c.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">Clinical Case Management Workspace • Dr. Anand Deshmukh</p>
            </div>
          </div>

          <button 
            onClick={() => setSelectedCaseForDrawer(null)}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 3-COLUMN CLINICAL WORKSPACE LAYOUT */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 text-xs">
          
          {/* LEFT COLUMN: Case Info, Animal Profile, Symptoms, History, Photos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Animal & Farmer Dossier */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 card-elevated">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Patient & Farmer Dossier</span>
              
              <div className="flex items-center gap-3 pt-1">
                <img src={c.photoUrl} alt="Clinical lesion" className="w-16 h-16 rounded-xl object-cover border border-slate-300 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{c.species} ({c.breed})</h4>
                  <p className="text-[11px] font-mono text-slate-500">ID: {c.animalId}</p>
                  <p className="text-[11px] text-tealBrand font-bold mt-0.5">Owner: {c.farmerName}</p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-slate-700">
                <p><strong>Mobile:</strong> {c.farmerPhone}</p>
                <p><strong>Location:</strong> {c.village}, Baramati Block</p>
                <p><strong>Reported:</strong> {c.date} ({c.reportedAt})</p>
              </div>
            </div>

            {/* Reported Symptoms */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 card-elevated">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Observed Clinical Signs</span>
              <div className="flex flex-wrap gap-1.5">
                {c.symptoms.map((sym, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-red-50 text-red-900 border border-red-200 rounded-lg font-bold">
                    {sym}
                  </span>
                ))}
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-slate-700">
                <p>Duration: <strong>{c.duration}</strong></p>
                <p>Anorexia (Stopped Eating): <strong>{c.stoppedEating ? 'Yes' : 'No'}</strong></p>
                <p>Agalactia (Milk Drop): <strong>{c.milkDecreased ? 'Yes' : 'No'}</strong></p>
                <p>Spatial Cluster Proximity: <strong>{c.nearbySimilarCases ? 'Yes (Malegaon cluster)' : 'No'}</strong></p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Risk Assessment, Decision Support Panel, Timeline, Nearby Cases (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* DISTINCTIVE DECISION SUPPORT PANEL */}
            <div className="p-5 bg-gradient-to-br from-slate-900 via-midnight to-slate-950 text-white rounded-2xl border border-slate-800 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 className="font-extrabold text-sm text-teal-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span>PashuSuraksha Intelligence</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-400">Decision Support Signal</span>
              </div>

              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Risk Score</span>
                  <span className="text-2xl font-black text-coralRed">{c.riskScore} / 100</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">System Confidence</span>
                  <span className="text-xs font-extrabold text-teal-400">Decision-Support Signal</span>
                </div>
              </div>

              {/* Evidence Panel */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Supporting Evidence</span>
                <ul className="space-y-1 text-slate-300 text-[11px] list-disc pl-4">
                  <li>5 related clinical reports logged in Baramati sector</li>
                  <li>3 nearby villages showing similar nodular & pyrexic signs</li>
                  <li>Low vaccination coverage (74%) in Khedgaon unit</li>
                  <li>7-day sharp increase in similar symptoms</li>
                </ul>
              </div>

              {/* Suggested Investigation Protocol */}
              <div className="p-3 bg-tealBrand/10 rounded-xl border border-tealBrand/30 space-y-1 text-[11px] text-teal-200">
                <p className="font-bold text-teal-300">Suggested Clinical Protocol:</p>
                <p>1. Field verification by Para-Vet 2. Sample collection for RT-PCR 3. Immediate shed liming 4. Nearby herd screening</p>
              </div>
            </div>

            {/* Differential Diagnosis List */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 card-elevated">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Preliminary Risk Assessment</span>
              <div className="space-y-1.5">
                {c.differentialList?.map((diff, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">{diff.disease}</p>
                      <p className="text-[10px] text-slate-500">{diff.rationale}</p>
                    </div>
                    <span className="font-mono font-black text-tealBrand bg-teal-50 px-2 py-1 rounded">
                      {diff.probability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Actions (Assign, Request Sample, Refer Lab, Start Treatment, Escalate, Resolve) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 card-elevated">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Clinical Actions</span>

              <div className="space-y-2">
                <button
                  onClick={() => setActiveActionTab('treatment')}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-left transition flex items-center gap-2 ${
                    activeActionTab === 'treatment' ? 'bg-tealBrand text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <Pill className="w-4 h-4" />
                  <span>Start Treatment (Rx)</span>
                </button>

                <button
                  onClick={() => setActiveActionTab('lab')}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-left transition flex items-center gap-2 ${
                    activeActionTab === 'lab' ? 'bg-tealBrand text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <TestTube2 className="w-4 h-4" />
                  <span>Refer Laboratory</span>
                </button>

                <button
                  onClick={() => setActiveActionTab('referral')}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-left transition flex items-center gap-2 ${
                    activeActionTab === 'referral' ? 'bg-tealBrand text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <Hospital className="w-4 h-4" />
                  <span>Escalate to Hospital</span>
                </button>
              </div>

              {/* Dynamic Action Forms */}
              {activeActionTab === 'treatment' && (
                <form onSubmit={handleSavePrescription} className="pt-2 space-y-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 text-[11px]">Record Prescription</label>
                  <textarea 
                    value={prescriptionText}
                    onChange={e => setPrescriptionText(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg h-20 text-[11px] font-mono"
                    required
                  />
                  <button type="submit" className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold">
                    Save & Send Rx SMS
                  </button>
                </form>
              )}

              {activeActionTab === 'lab' && (
                <form onSubmit={handleOrderLab} className="pt-2 space-y-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 text-[11px]">Specimen Type</label>
                  <select 
                    value={labSampleType} 
                    onChange={e => setLabSampleType(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white text-[11px]"
                  >
                    <option>Nasal Swab & Serum</option>
                    <option>Scab / Skin Biopsy</option>
                    <option>Whole Blood in EDTA</option>
                  </select>
                  <button type="submit" className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold">
                    Order Lab Barcode
                  </button>
                </form>
              )}

              {activeActionTab === 'referral' && (
                <form onSubmit={handleCreateReferral} className="pt-2 space-y-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 text-[11px]">Facility</label>
                  <input 
                    type="text" 
                    value={targetHospital} 
                    onChange={e => setTargetHospital(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-[11px]"
                  />
                  <button type="submit" className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold">
                    Transfer Patient
                  </button>
                </form>
              )}

              {/* Resolve Case */}
              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={handleResolveCase}
                  className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold transition flex items-center justify-center gap-1.5"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Resolve & Close Case</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
