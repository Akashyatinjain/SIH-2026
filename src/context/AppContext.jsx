import React, { createContext, useContext, useState } from 'react';
import { 
  initialAnimals, 
  initialCases, 
  geographicHotspots, 
  initialOfflineQueue, 
  puneBlocksStats,
  maharashtraDistrictsData,
  fieldWorkerSchedule,
  diagnosticLabSamples,
  advisories
} from '../data/mockData';
import { translations } from '../i18n/translations';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Screen State: 'home' | 'login' | 'otp' | 'roleSelect' | 'workspace'
  const [currentScreen, setCurrentScreen] = useState('home');
  
  // Authenticated Role: 'farmer' | 'fieldWorker' | 'vet' | 'district' | 'stateAdmin'
  const [role, setRole] = useState('farmer'); 
  const [language, setLanguage] = useState('en'); // 'en' | 'mr' | 'hi'
  const [isOffline, setIsOffline] = useState(false);
  const [offlineQueue, setOfflineQueue] = useState(initialOfflineQueue);
  const [lastSyncedTime, setLastSyncedTime] = useState('12 min ago');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Modals & Drawers
  const [isIVROpen, setIsIVROpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedAnimalForProfile, setSelectedAnimalForProfile] = useState(null);
  const [selectedCaseForDrawer, setSelectedCaseForDrawer] = useState(null);
  const [selectedHotspotForInspector, setSelectedHotspotForInspector] = useState(null);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [isRegisterAnimalOpen, setIsRegisterAnimalOpen] = useState(false);
  const [isMortalityModalOpen, setIsMortalityModalOpen] = useState(false);
  const [isAdvisoryStudioOpen, setIsAdvisoryStudioOpen] = useState(false);
  
  // Data State
  const [animals, setAnimals] = useState(initialAnimals);
  const [cases, setCases] = useState(initialCases);
  const [hotspots, setHotspots] = useState(geographicHotspots);
  const [labSamples, setLabSamples] = useState(diagnosticLabSamples);
  const [advisoryList, setAdvisoryList] = useState(advisories);
  const [fieldVisits, setFieldVisits] = useState(fieldWorkerSchedule);
  const [stateDistricts, setStateDistricts] = useState(maharashtraDistrictsData);

  const [notifications, setNotifications] = useState([
    {
      id: "N-1",
      title: "🚨 High-Risk Disease Cluster Alert",
      message: "Suspected Lumpy Skin Disease cluster detected in Khedgaon / Baramati (8 km radius).",
      time: "15 min ago",
      type: "alert",
      read: false
    },
    {
      id: "N-2",
      title: "💉 Upcoming FMD Vaccination Camp",
      message: "Free vaccination camp scheduled this Saturday at Khedgaon Gram Panchayat.",
      time: "1 hour ago",
      type: "info",
      read: false
    },
    {
      id: "N-3",
      title: "🧪 Lab Sample Dispatched",
      message: "Sample LAB-PUN-9804 (PPR Suspect) received by Regional Animal Health Lab, Pune.",
      time: "3 hours ago",
      type: "success",
      read: true
    }
  ]);

  // Demo Tour State for SIH Evaluator Walkthrough
  const [demoTourStep, setDemoTourStep] = useState(0);

  const t = translations[language] || translations.en;

  // Add Notification helper
  const addNotification = (title, message, type = "info") => {
    const newNotif = {
      id: "N-" + Date.now(),
      title,
      message,
      time: "Just now",
      type,
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  // Submit New Sick Animal Report
  const submitSickAnimalReport = (reportData) => {
    const newCaseId = `PS-2026-${String(Math.floor(4282 + cases.length)).padStart(6, '0')}`;
    
    const hasSkinLesions = (reportData.symptoms || []).some(s => s.toLowerCase().includes('nodule') || s.toLowerCase().includes('skin') || s.toLowerCase().includes('गाठी') || s.toLowerCase().includes('गांठ'));
    const hasFever = (reportData.symptoms || []).some(s => s.toLowerCase().includes('fever') || s.toLowerCase().includes('ताप') || s.toLowerCase().includes('बुखार'));
    const hasSalivation = (reportData.symptoms || []).some(s => s.toLowerCase().includes('saliv') || s.toLowerCase().includes('लाळ') || s.toLowerCase().includes('लार'));
    const hasMortality = reportData.recentDeaths;

    let score = 40;
    let suspected = "General Clinical Syndrome";
    let riskLevel = "MEDIUM";

    if (hasSkinLesions && hasFever) {
      score = 86;
      riskLevel = "HIGH";
      suspected = "Lumpy Skin Disease (LSD) - High Contagion Suspect";
    } else if (hasSalivation && hasFever) {
      score = 92;
      riskLevel = "CRITICAL";
      suspected = "Foot & Mouth Disease (FMD) - Acute Vesicular";
    } else if (hasMortality) {
      score = 95;
      riskLevel = "CRITICAL";
      suspected = "Peracute Viral / Bacterial Outbreak Alert";
    } else if (hasFever) {
      score = 65;
      riskLevel = "MEDIUM";
      suspected = "Pyrexia of Unknown Origin (PUO)";
    } else {
      score = 30;
      riskLevel = "LOW";
      suspected = "Mild Ruminal Indigestion / Metabolic";
    }

    const newCase = {
      caseId: newCaseId,
      reportedAt: "Just now",
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      farmerName: reportData.farmerName || "Ramesh Patil",
      farmerPhone: reportData.farmerPhone || "+91 98224 51092",
      village: reportData.village || "Khedgaon",
      block: "Baramati",
      district: "Pune",
      animalId: reportData.animalId || "MH-PUN-0241",
      species: reportData.species || "Cattle (Cow)",
      breed: reportData.breed || "Gir Indigenous",
      symptoms: reportData.symptoms || [],
      duration: reportData.duration || "2 Days",
      stoppedEating: reportData.stoppedEating || true,
      milkDecreased: reportData.milkDecreased || true,
      nearbySimilarCases: reportData.nearbySimilarCases || true,
      recentDeaths: reportData.recentDeaths || false,
      riskScore: score,
      riskLevel: riskLevel,
      suspectedDisease: suspected,
      differentialList: [
        { disease: "Lumpy Skin Disease (Capripoxvirus)", probability: "84%", rationale: "Reported nodular lesions with pyrexia & local cluster proximity" },
        { disease: "Pseudo-Cowpox / Parapox", probability: "11%", rationale: "Milder localized symptoms" },
        { disease: "Bovine Papillomatosis", probability: "5%", rationale: "Chronic warts without sudden acute fever" }
      ],
      status: "under_review",
      assignedVet: "Dr. Anand Deshmukh (Baramati Taluka Hospital)",
      locationCoord: { lat: 18.1524, lng: 74.5768 },
      photoUrl: reportData.photoUrl || "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=600&q=80",
      labReferral: null,
      hospitalReferral: null,
      prescription: null
    };

    if (isOffline) {
      const offlineItem = {
        id: `OFF-2026-${Math.floor(100 + Math.random() * 900)}`,
        type: `Clinical Case: ${reportData.species}`,
        timestamp: "Just now (Offline)",
        dataSummary: `${newCaseId} - ${suspected} in ${reportData.village || 'Khedgaon'}`,
        status: "pending",
        pendingCase: newCase
      };
      setOfflineQueue(prev => [offlineItem, ...prev]);
      addNotification("💾 Offline Report Queued", `Case saved locally. Will auto-sync when network is available.`, "info");
      return newCase;
    }

    setCases(prev => [newCase, ...prev]);
    
    setAnimals(prev => prev.map(a => {
      if (a.id === reportData.animalId) {
        return {
          ...a,
          healthStatus: "needs_attention",
          diseaseReports: [{ caseId: newCaseId, date: "Today", suspected, status: "Under Review" }, ...(a.diseaseReports || [])]
        };
      }
      return a;
    }));

    setHotspots(prev => prev.map(h => {
      if (h.block === "Baramati") {
        return {
          ...h,
          activeCases: h.activeCases + 1,
          riskLevel: "CRITICAL",
          lastReported: "Just now"
        };
      }
      return h;
    }));

    addNotification("🚨 New Surveillance Alert", `New Case #${newCaseId} flagged as ${riskLevel} (${suspected}) in Khedgaon!`, "alert");

    return newCase;
  };

  // Update Case Action
  const updateCaseAction = (caseId, updates) => {
    setCases(prev => prev.map(c => {
      if (c.caseId === caseId) {
        return { ...c, ...updates };
      }
      return c;
    }));

    if (updates.labReferral) {
      const newSample = {
        sampleId: updates.labReferral.sampleId,
        caseId: caseId,
        animalTag: "MH-PUN-0241 (Ganga)",
        species: "Cattle (Cow)",
        sampleType: updates.labReferral.sampleType,
        testRequested: "Capripoxvirus (LSD) Real-time PCR",
        collectedBy: "Sunita Pawar (Pashu Sakhi)",
        collectedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
        laboratory: updates.labReferral.targetLab,
        transportStatus: "In Cold-Chain Courier",
        workflowStep: "Dispatched",
        result: "Pending Turnaround (~4h)",
        statusBadge: "Testing Dispatched"
      };
      setLabSamples(prev => [newSample, ...prev]);
      addNotification("🧪 Diagnostic Lab Sample Dispatched", `Barcode #${updates.labReferral.sampleId} dispatched to Regional Animal Health Lab, Pune for Case #${caseId}.`, "success");
    }
    if (updates.hospitalReferral) {
      addNotification("🏥 Hospital Referral Created", `Emergency referral to ${updates.hospitalReferral.hospital} generated for Case #${caseId}.`, "info");
    }
    if (updates.prescription) {
      addNotification("💊 Clinical Rx Recorded", `Treatment regimen recorded by ${updates.assignedVet || 'Dr. Anand Deshmukh'}.`, "success");
    }
    if (updates.status === 'resolved') {
      addNotification("✅ Case Resolved", `Case #${caseId} marked as successfully treated and controlled.`, "success");
    }
  };

  // Create Advisory
  const createAdvisory = (advisoryData) => {
    const newAdv = {
      id: `ADV-${String(advisoryList.length + 1).padStart(2, '0')}`,
      title: advisoryData.title,
      category: advisoryData.category || "Epidemic Warning",
      severity: advisoryData.severity || "HIGH",
      date: "Just now",
      audioMinutes: "2 min audio",
      summary: advisoryData.message,
      targetDistrict: advisoryData.targetDistrict || "Pune District",
      channels: advisoryData.channels || ["App Notification", "SMS Broadcast"],
      points: advisoryData.points || [advisoryData.recommendedAction]
    };

    setAdvisoryList(prev => [newAdv, ...prev]);
    addNotification("📢 Government Advisory Broadcasted", `Advisory '${advisoryData.title}' sent to all farmers in ${advisoryData.targetDistrict} via App, SMS & IVR!`, "alert");
    return newAdv;
  };

  // Register Animal
  const registerAnimal = (animalData) => {
    const newId = `MH-PUN-${String(Math.floor(1100 + animals.length * 15)).padStart(4, '0')}`;
    const newAnimal = {
      id: newId,
      name: animalData.name || "Nandi",
      species: animalData.species || "Cattle",
      breed: animalData.breed || "Gir Indigenous",
      age: animalData.age || "2.5 Years",
      sex: animalData.sex || "Female",
      weight: animalData.weight || "350 kg",
      owner: animalData.owner || "Ramesh Patil",
      phone: animalData.phone || "+91 98224 51092",
      location: animalData.location || "Khedgaon, Baramati, Pune",
      lat: 18.1524,
      lng: 74.5768,
      healthStatus: "healthy",
      milkYield: animalData.milkYield || "11.0 Liters/day",
      calvings: 1,
      rfidTag: `890401827${Math.floor(10000 + Math.random() * 90000)}`,
      imageUrl: animalData.imageUrl || "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=600&q=80",
      vaccinations: [
        { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" }
      ],
      treatments: [],
      diseaseReports: []
    };

    if (isOffline) {
      const offlineItem = {
        id: `OFF-REG-${Math.floor(100 + Math.random() * 900)}`,
        type: `Animal Registration: ${newAnimal.name} (${newAnimal.species})`,
        timestamp: "Just now (Offline)",
        dataSummary: `RFID: ${newAnimal.rfidTag} | Owner: ${newAnimal.owner}`,
        status: "pending",
        pendingAnimal: newAnimal
      };
      setOfflineQueue(prev => [offlineItem, ...prev]);
      addNotification("💾 Offline Animal Saved", `Animal ${newAnimal.name} saved offline. Will sync with district registry upon network.`, "info");
      return newAnimal;
    }

    setAnimals(prev => [newAnimal, ...prev]);
    addNotification("📋 Animal Registered", `New Animal ${newAnimal.name} (${newId}) registered with Maharashtra Livestock Health Registry!`, "success");
    return newAnimal;
  };

  // Report Sudden Mortality
  const reportMortality = (mortalityData) => {
    const reportSummary = `${mortalityData.count} ${mortalityData.species} deaths in ${mortalityData.village} (${mortalityData.suspectedCause})`;
    
    if (isOffline) {
      const offlineItem = {
        id: `OFF-MORT-${Math.floor(100 + Math.random() * 900)}`,
        type: "Sudden Mortality Alert",
        timestamp: "Just now (Offline)",
        dataSummary: reportSummary,
        status: "pending"
      };
      setOfflineQueue(prev => [offlineItem, ...prev]);
      addNotification("💾 Mortality Saved Offline", "Mortality record queued locally for sync.", "info");
      return;
    }

    setHotspots(prev => prev.map(h => {
      if (h.block === "Baramati") {
        return {
          ...h,
          recentMortality: h.recentMortality + parseInt(mortalityData.count || 1),
          riskLevel: "CRITICAL"
        };
      }
      return h;
    }));

    addNotification("⚠️ High Mortality Surveillance Trigger", `District Veterinary Taskforce alerted on ${mortalityData.count} sudden deaths in ${mortalityData.village}!`, "alert");
  };

  // Sync Offline Queue
  const syncOfflineQueue = () => {
    if (offlineQueue.length === 0) return;

    offlineQueue.forEach(item => {
      if (item.pendingCase) {
        setCases(prev => [item.pendingCase, ...prev]);
      }
      if (item.pendingAnimal) {
        setAnimals(prev => [item.pendingAnimal, ...prev]);
      }
    });

    setOfflineQueue([]);
    setLastSyncedTime("Just now");
    addNotification("🔄 Sync Complete", `Synchronized ${offlineQueue.length} offline surveillance records to Pune District Server!`, "success");
  };

  // User Authenticated Workspace Login Handler
  const enterWorkspace = (roleKey) => {
    setRole(roleKey);
    setActiveTab('dashboard');
    setCurrentScreen('workspace');
  };

  const logout = () => {
    setCurrentScreen('home');
  };

  return (
    <AppContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      role,
      setRole,
      enterWorkspace,
      logout,
      language,
      setLanguage,
      t,
      isOffline,
      setIsOffline,
      offlineQueue,
      lastSyncedTime,
      activeTab,
      setActiveTab,
      
      // Modals
      isIVROpen,
      setIsIVROpen,
      isNotificationOpen,
      setIsNotificationOpen,
      selectedAnimalForProfile,
      setSelectedAnimalForProfile,
      selectedCaseForDrawer,
      setSelectedCaseForDrawer,
      selectedHotspotForInspector,
      setSelectedHotspotForInspector,
      isOfflineModalOpen,
      setIsOfflineModalOpen,
      isRegisterAnimalOpen,
      setIsRegisterAnimalOpen,
      isMortalityModalOpen,
      setIsMortalityModalOpen,
      isAdvisoryStudioOpen,
      setIsAdvisoryStudioOpen,

      // Data & Actions
      animals,
      cases,
      hotspots,
      labSamples,
      advisoryList,
      fieldVisits,
      stateDistricts,
      notifications,
      addNotification,
      submitSickAnimalReport,
      updateCaseAction,
      createAdvisory,
      registerAnimal,
      reportMortality,
      syncOfflineQueue,

      // Demo Tour
      demoTourStep,
      setDemoTourStep
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
