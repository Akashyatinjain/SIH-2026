import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  initialAnimals, 
  initialCases, 
  geographicHotspots, 
  initialOfflineQueue, 
  puneBlocksStats,
  maharashtraDistrictsData,
  fieldWorkerSchedule,
  diagnosticLabSamples,
  advisories,
  weatherSurveillanceContext,
  diseaseTrendSeries,
  upcomingVaccinationCamps,
  PROTOTYPE_DECISION_RULES,
  MASTER_CASE_ID,
  MASTER_SAMPLE_ID
} from '../data/mockData';
import { translations } from '../i18n/translations';

const AppContext = createContext();

const STORAGE_KEY_NAV = 'pashu_suraksha_nav_state';
const STORAGE_KEY_DATA = 'pashu_suraksha_data_state';

const getInitialNav = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_NAV);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        currentScreen: parsed.currentScreen || 'home',
        selectedWorkspace: parsed.selectedWorkspace || 'farmer',
        role: parsed.role || 'farmer',
        activeTab: parsed.activeTab || 'dashboard',
        language: parsed.language || 'en',
        demoStoryStage: typeof parsed.demoStoryStage === 'number' ? parsed.demoStoryStage : 1,
        isDemoMode: parsed.isDemoMode !== undefined ? parsed.isDemoMode : true,
        judgeModeActive: Boolean(parsed.judgeModeActive)
      };
    }
  } catch (err) {
    console.error("Error loading persisted nav state:", err);
  }
  return {
    currentScreen: 'home',
    selectedWorkspace: 'farmer',
    role: 'farmer',
    activeTab: 'dashboard',
    language: 'en',
    demoStoryStage: 1,
    isDemoMode: true,
    judgeModeActive: false
  };
};

export function AppProvider({ children }) {
  const initialNav = getInitialNav();

  // Screen State: 'home' | 'about' | 'howItWorks' | 'impact' | 'login' | 'workspaceSelect' | 'workspaceDetails' | 'demoCenter' | 'judgeMode' | 'workspace'
  const [currentScreen, setCurrentScreen] = useState(initialNav.currentScreen);
  
  // Selected Workspace for Preview & Details: 'farmer' | 'fieldWorker' | 'vet' | 'admin' | 'stateAdmin'
  const [selectedWorkspace, setSelectedWorkspace] = useState(initialNav.selectedWorkspace);

  // Authenticated Role: 'farmer' | 'fieldWorker' | 'vet' | 'admin' | 'stateAdmin'
  const [role, setRole] = useState(initialNav.role); 
  const [language, setLanguage] = useState(initialNav.language); // 'en' | 'mr' | 'hi'
  const [isOffline, setIsOffline] = useState(false);
  const [offlineQueue, setOfflineQueue] = useState(initialOfflineQueue);
  const [lastSyncedTime, setLastSyncedTime] = useState('12 min ago');
  const [activeTab, setActiveTab] = useState(initialNav.activeTab);
  
  // Demo Mode & Story State (For SIH Judges)
  const [isDemoMode, setIsDemoMode] = useState(initialNav.isDemoMode);
  const [demoStoryStage, setDemoStoryStage] = useState(initialNav.demoStoryStage); // 1 to 9
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [judgeModeActive, setJudgeModeActive] = useState(initialNav.judgeModeActive);

  // Modals & Drawers
  const [isIVROpen, setIsIVROpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedAnimalForProfile, setSelectedAnimalForProfile] = useState(null);
  const [selectedAnimalForModal, setSelectedAnimalForModal] = useState(null);
  const [selectedCaseForDrawer, setSelectedCaseForDrawer] = useState(null);
  const [selectedCase, setSelectedCase] = useState(initialCases[0]);
  const [selectedHotspotForInspector, setSelectedHotspotForInspector] = useState(null);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [isRegisterAnimalOpen, setIsRegisterAnimalOpen] = useState(false);
  const [isMortalityModalOpen, setIsMortalityModalOpen] = useState(false);
  const [isAdvisoryStudioOpen, setIsAdvisoryStudioOpen] = useState(false);
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);
  
  // Dynamic Datasets
  const [animals, setAnimals] = useState(initialAnimals);
  const [cases, setCases] = useState(initialCases);
  const [hotspots, setHotspots] = useState(geographicHotspots);
  const [labSamples, setLabSamples] = useState(diagnosticLabSamples);
  const [advisoryList, setAdvisoryList] = useState(advisories);
  const [fieldVisits, setFieldVisits] = useState(fieldWorkerSchedule);
  const [stateDistricts, setStateDistricts] = useState(maharashtraDistrictsData);
  const [rrtDeployedBlocks, setRrtDeployedBlocks] = useState(["Baramati", "Daund"]);
  const [decisionRules] = useState(PROTOTYPE_DECISION_RULES);

  // Live Simulated Event Stream (Section 65)
  const [liveEventStream, setLiveEventStream] = useState([
    { id: "EVT-01", text: "New high-risk symptom report from Khedgaon village (Baramati)", timeAgo: "12 sec ago", type: "report" },
    { id: "EVT-02", text: "Sample PS-SMP-0198 received at Aundh Regional Laboratory", timeAgo: "34 sec ago", type: "sample" },
    { id: "EVT-03", text: "Spatial clustering threshold crossed for Baramati Sector 2", timeAgo: "2 min ago", type: "cluster" },
    { id: "EVT-04", text: "Clinical verification field visit assigned to Sunita Pawar", timeAgo: "4 min ago", type: "field" },
    { id: "EVT-05", text: "Statewide Lumpy Skin Disease biosecurity advisory broadcasted", timeAgo: "9 min ago", type: "advisory" }
  ]);

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: "N-1",
      title: "🚨 High-Risk Spatial Cluster Alert",
      message: "Suspected Lumpy Skin Disease cluster detected in Khedgaon / Baramati (8 km radius). 7 cases reported.",
      time: "15 min ago",
      type: "alert",
      targetRoles: ["admin", "stateAdmin", "vet", "farmer"],
      read: false
    },
    {
      id: "N-2",
      title: "💉 Upcoming FMD Vaccination Camp",
      message: "Free vaccination camp scheduled this Saturday at Khedgaon Gram Panchayat Office.",
      time: "1 hour ago",
      type: "info",
      targetRoles: ["farmer", "fieldWorker"],
      read: false
    },
    {
      id: "N-3",
      title: "🧪 Lab Sample Dispatched: PS-SMP-0198",
      message: "Sample PS-SMP-0198 (Ganga - Cow) received by Regional Animal Health Lab, Aundh, Pune.",
      time: "3 hours ago",
      type: "success",
      targetRoles: ["vet", "lab", "admin"],
      read: true
    }
  ]);

  // Persist State to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_NAV, JSON.stringify({
        currentScreen,
        selectedWorkspace,
        role,
        activeTab,
        language,
        demoStoryStage,
        isDemoMode,
        judgeModeActive
      }));
    } catch (err) {
      console.error("Error persisting state:", err);
    }
  }, [currentScreen, selectedWorkspace, role, activeTab, language, demoStoryStage, isDemoMode, judgeModeActive]);

  const t = translations[language] || translations.en;

  const toggleOffline = () => {
    setIsOffline(prev => !prev);
  };

  // Add Notification helper
  const addNotification = (title, message, type = "info", targetRoles = ["farmer", "fieldWorker", "vet", "admin", "stateAdmin"]) => {
    const newNotif = {
      id: "N-" + Date.now(),
      title,
      message,
      time: "Just now",
      type,
      targetRoles,
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  // Submit Sick Animal Report (Farmer Flow)
  const submitSickAnimalReport = (reportData) => {
    const newCaseId = `PS-2026-${String(Math.floor(4282 + cases.length)).padStart(6, '0')}`;
    const targetAnimal = animals.find(a => a.id === reportData.animalTag) || animals[0];

    const newCase = {
      caseId: newCaseId,
      animalId: targetAnimal.id,
      animalName: targetAnimal.name,
      farmerName: reportData.farmerName || "Ramesh Patil",
      farmerPhone: "+91 98224 51092",
      village: reportData.village || "Khedgaon",
      block: "Baramati",
      district: "Pune",
      species: targetAnimal.species,
      breed: targetAnimal.breed,
      symptoms: reportData.symptoms || ["High Fever (104.8°F)", "Multiple Nodular Skin Lumps (2-5cm)"],
      duration: "2 Days",
      stoppedEating: true,
      milkDecreased: true,
      nearbySimilarCases: true,
      recentDeaths: false,
      reportedAt: "Just now",
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: "under_review",
      riskScore: 86,
      riskLevel: "HIGH",
      suspectedDisease: "Lumpy Skin Disease (LSD) - Cluster Suspect",
      differentialList: [
        { disease: "Lumpy Skin Disease (Capripoxvirus)", probability: "86%", rationale: "Severe pyrexia + generalized 2-5cm nodules + spatial cluster in 8km" },
        { disease: "Pseudo-Cowpox", probability: "10%", rationale: "Localized teat papules without high fever" },
        { disease: "Bovine Papillomatosis", probability: "4%", rationale: "Wart growths without fever or milk drop" }
      ],
      assignedVet: "Dr. Anand Deshmukh",
      locationCoord: { lat: 18.1524, lng: 74.5768 },
      photoUrl: targetAnimal.imageUrl || "/images/animals/gir_cow_gauri.jpg",
      evidence: {
        nearbyReports: 5,
        affectedVillages: ["Khedgaon", "Malegaon Budruk", "Gunawadi"],
        temporalTrend: "+180% case rise in 7 days",
        vaccinationDeficit: "LSD booster overdue",
        vectorRisk: "Elevated"
      },
      sampleDetails: {
        sampleId: "PS-SMP-0198",
        sampleType: "Nasal Swab & Serum",
        collectedBy: "Sunita Pawar",
        labDestination: "Regional Animal Health Lab, Aundh, Pune",
        status: "In Transit"
      },
      prescription: null
    };

    setCases(prev => [newCase, ...prev]);
    setSelectedCase(newCase);

    // Update Animal Status
    setAnimals(prev => prev.map(a => a.id === targetAnimal.id ? { ...a, healthStatus: "needs_attention" } : a));

    // Update Baramati Hotspot
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

    addNotification("🚨 Critical Health Report Dispatched", `Case ${newCaseId} registered for ${targetAnimal.name}. Dr. Anand Deshmukh notified.`, "alert");
    return newCase;
  };

  // Register New Animal
  const registerAnimal = (animalData) => {
    const newId = `MH-PUN-${String(Math.floor(1200 + animals.length)).padStart(4, '0')}`;
    const newAnimal = {
      id: newId,
      name: animalData.name || `Animal-${newId.slice(-4)}`,
      species: animalData.species || "Cattle (गाय)",
      breed: animalData.breed || "Gir Indigenous",
      age: animalData.age || "3.5 Years",
      sex: animalData.sex || "Female",
      weight: animalData.weight || "380 kg",
      healthStatus: "healthy",
      owner: animalData.owner || "Ramesh Patil",
      phone: "+91 98224 51092",
      location: animalData.location || "Khedgaon, Baramati, Pune",
      lat: 18.1524,
      lng: 74.5768,
      rfidTag: animalData.rfidTag || `890401827${Math.floor(10000 + Math.random() * 90000)}`,
      milkYield: animalData.milkYield || "11 Liters/day",
      calvings: 1,
      imageUrl: animalData.imageUrl || (animalData.species && animalData.species.includes("Buffalo") 
        ? "/images/animals/murrah_buffalo_kalyani.jpg"
        : animalData.species && animalData.species.includes("Goat")
        ? "/images/animals/osmanabadi_goat_sultan.jpg"
        : "/images/animals/gir_cow_gauri.jpg"),
      vaccinations: [
        { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" }
      ],
      treatments: [],
      diseaseReports: []
    };

    setAnimals(prev => [newAnimal, ...prev]);
    addNotification("📋 Animal Registered", `Added ${newAnimal.name} (${newAnimal.species}) with RFID #${newAnimal.rfidTag}.`, "success");
    return newAnimal;
  };

  // Report Sudden Mortality
  const reportMortality = (data) => {
    addNotification("🚨 Sudden Mortality Logged", `Reported ${data.count} deaths of ${data.species} in ${data.village}. Rapid Response Team triggered.`, "alert");
    setLiveEventStream(prev => [
      { id: `EVT-${Date.now()}`, text: `Mortality alert: ${data.count} ${data.species} in ${data.village}`, timeAgo: "Just now", type: "cluster" },
      ...prev
    ]);
  };

  // Collect Diagnostic Sample (Field Worker Flow)
  const collectDiagnosticSample = (sampleData) => {
    const newSampleId = MASTER_SAMPLE_ID;
    const newSample = {
      sampleId: newSampleId,
      caseId: sampleData.caseId || MASTER_CASE_ID,
      animalTag: sampleData.animalTag || "MH-PUN-0241 (Ganga)",
      species: sampleData.species || "Cattle (Cow)",
      sampleType: sampleData.sampleType || "Nasal Swab & Serum in VTM",
      testRequested: sampleData.testRequested || "Capripoxvirus (LSD) Real-time PCR",
      collectedBy: "Sunita Pawar (Pashu Sakhi)",
      collectedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      laboratory: "Regional Animal Health Diagnostic Lab, Aundh, Pune",
      transportStatus: "Dispatched in Cold-Chain",
      workflowStep: "In Transit",
      result: "Pending Arrival",
      statusBadge: "Cold-Chain Courier En Route",
      coldChainTemp: "4.0°C"
    };

    setLabSamples(prev => [newSample, ...prev.filter(s => s.sampleId !== newSampleId)]);
    addNotification("🧪 Sample Dispatched to Lab", `Sample ID #${newSampleId} tagged for case ${newSample.caseId}.`, "success");
    return newSample;
  };

  // Deploy Rapid Response Team (District Flow)
  const deployRapidResponseTeam = (blockName = "Baramati") => {
    setRrtDeployedBlocks(prev => Array.from(new Set([...prev, blockName])));
    addNotification("🚨 Rapid Response Team Deployed", `Mobile Veterinary Unit & Ring Vaccination squad mobilized to ${blockName} Cluster.`, "alert");
  };

  // Broadcast Advisory
  const publishAdvisory = (newAdv) => {
    const adv = {
      id: `ADV-0${advisoryList.length + 1}`,
      date: "Just now",
      channels: ["App Notification", "SMS Broadcast", "IVR Voice", "Pashu Sakhi Push"],
      audioMinutes: "2 min audio",
      ...newAdv
    };
    setAdvisoryList(prev => [adv, ...prev]);
    addNotification("📢 Disease Advisory Published", `Issued alert "${adv.title}" across ${adv.targetDistrict}.`, "success");
  };

  // Switch Workspace / Persona
  const enterWorkspace = (roleKey) => {
    setRole(roleKey);
    setSelectedWorkspace(roleKey);
    setActiveTab('dashboard');
    setCurrentScreen('workspace');
  };

  // Demo Persona Quick Switcher
  const switchDemoPersona = (roleKey) => {
    setRole(roleKey);
    setSelectedWorkspace(roleKey);
    setActiveTab('dashboard');
    addNotification(`🔄 Switched Persona to ${getRoleTitle(roleKey)}`, `Now viewing live demo as ${getPersonaName(roleKey)}.`, "info");
  };

  // Restart Demo Story
  const restartDemoStory = () => {
    setDemoStoryStage(1);
    setRole('farmer');
    setSelectedWorkspace('farmer');
    setActiveTab('dashboard');
    addNotification("🔄 Demo Story Reset", "Simulated surveillance event reset to Stage 01: Farmer Health Report.", "info");
  };

  // Advance Demo Story
  const advanceDemoStory = () => {
    setDemoStoryStage(prev => (prev < 9 ? prev + 1 : 1));
  };

  const getPersonaName = (r) => {
    switch (r) {
      case 'farmer': return 'Ramesh Patil (Farmer)';
      case 'fieldWorker': return 'Sunita Pawar (Pashu Sakhi)';
      case 'vet': return 'Dr. Anand Deshmukh (Veterinarian)';
      case 'admin': return 'District Health Officer (Pune)';
      case 'stateAdmin': return 'Director of Animal Husbandry (MH)';
      default: return 'Authorized User';
    }
  };

  const getRoleTitle = (r) => {
    switch (r) {
      case 'farmer': return 'Farmer / Livestock Owner';
      case 'fieldWorker': return 'Field Sentinel / Pashu Sakhi';
      case 'vet': return 'Clinical Intelligence (Veterinarian)';
      case 'admin': return 'Pune District Animal Health Command';
      case 'stateAdmin': return 'Maharashtra Animal Health Intelligence';
      default: return 'Government Workspace';
    }
  };

  // Offline Sync
  const syncOfflineQueue = () => {
    if (offlineQueue.length === 0) return;
    addNotification("⚡ Offline Sync Complete", `Successfully uploaded ${offlineQueue.length} queued records to Pune District Server.`, "success");
    setOfflineQueue([]);
    setLastSyncedTime("Just now");
  };

  // Logout function
  const logout = () => {
    setCurrentScreen('workspaceSelect');
    addNotification("🔒 Signed Out", "Returned to workspace selection screen.", "info");
  };

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedWorkspace,
        setSelectedWorkspace,
        role,
        setRole,
        enterWorkspace,
        logout,
        switchDemoPersona,
        language,
        setLanguage,
        isOffline,
        toggleOffline,
        offlineQueue,
        syncOfflineQueue,
        lastSyncedTime,
        activeTab,
        setActiveTab,
        
        // Demo State
        isDemoMode,
        setIsDemoMode,
        demoStoryStage,
        setDemoStoryStage,
        restartDemoStory,
        advanceDemoStory,
        isDemoModalOpen,
        setIsDemoModalOpen,
        judgeModeActive,
        setJudgeModeActive,
        getPersonaName,
        getRoleTitle,

        // Modals
        isIVROpen,
        setIsIVROpen,
        isNotificationsOpen,
        setIsNotificationsOpen,
        isNotificationOpen,
        setIsNotificationOpen,
        isReportModalOpen,
        setIsReportModalOpen,
        selectedAnimalForProfile,
        setSelectedAnimalForProfile,
        selectedAnimalForModal,
        setSelectedAnimalForModal,
        selectedCaseForDrawer,
        setSelectedCaseForDrawer,
        selectedCase,
        setSelectedCase,
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
        isArchitectureModalOpen,
        setIsArchitectureModalOpen,

        // Datasets & Actions
        animals,
        cases,
        hotspots,
        labSamples,
        advisories: advisoryList,
        fieldVisits,
        fieldSchedule: fieldVisits,
        stateDistricts,
        puneBlocks: puneBlocksStats,
        weatherContext: weatherSurveillanceContext,
        diseaseTrendSeries,
        upcomingVaccinationCamps,
        decisionRules,
        rrtDeployedBlocks,
        liveEventStream,
        notifications,
        addNotification,
        submitSickAnimalReport,
        addReport: submitSickAnimalReport,
        registerAnimal,
        reportMortality,
        collectDiagnosticSample,
        deployRapidResponseTeam,
        publishAdvisory,
        t
      }}
    >
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
