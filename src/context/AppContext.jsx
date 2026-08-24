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
  // Screen State: 'home' | 'login' | 'workspaceSelect' | 'workspaceDetails' | 'demoCenter' | 'workspace'
  const [currentScreen, setCurrentScreen] = useState('home');
  
  // Selected Workspace for Preview & Details: 'farmer' | 'fieldWorker' | 'vet' | 'admin' | 'stateAdmin'
  const [selectedWorkspace, setSelectedWorkspace] = useState('farmer');

  // Authenticated Role: 'farmer' | 'fieldWorker' | 'vet' | 'admin' | 'stateAdmin'
  const [role, setRole] = useState('farmer'); 
  const [language, setLanguage] = useState('en'); // 'en' | 'mr' | 'hi'
  const [isOffline, setIsOffline] = useState(false);
  const [offlineQueue, setOfflineQueue] = useState(initialOfflineQueue);
  const [lastSyncedTime, setLastSyncedTime] = useState('12 min ago');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Demo Mode & Story State (For SIH Judges)
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [demoStoryStage, setDemoStoryStage] = useState(1); // 1 to 9
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Modals & Drawers
  const [isIVROpen, setIsIVROpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedAnimalForProfile, setSelectedAnimalForProfile] = useState(null);
  const [selectedAnimalForModal, setSelectedAnimalForModal] = useState(null);
  const [selectedCaseForDrawer, setSelectedCaseForDrawer] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
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

  const t = translations[language] || translations.en;

  const toggleOffline = () => {
    setIsOffline(prev => !prev);
  };

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

  // Add Report alias
  const addReport = (newCase) => {
    setCases(prev => [newCase, ...prev]);
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
  };

  // Submit New Sick Animal Report
  const submitSickAnimalReport = (reportData) => {
    const newCaseId = `PS-2026-${String(Math.floor(4282 + cases.length)).padStart(6, '0')}`;
    const newCase = {
      caseId: newCaseId,
      animalId: reportData.animalTag || "MH-PUN-0241",
      farmerName: reportData.farmerName || "Ramesh Patil",
      village: reportData.village || "Khedgaon",
      block: "Baramati",
      district: "Pune",
      species: reportData.species || "Cattle (गाय)",
      breed: reportData.breed || "Gir Indigenous",
      symptoms: reportData.symptoms || ["High Fever (>104°F)", "Skin Nodules (2-5cm)"],
      temperature: "104.8°F",
      reportedAt: "Just now",
      status: "under_review",
      riskScore: 86,
      riskLevel: "HIGH",
      preliminaryAssessment: "High probability Capripoxvirus (Lumpy Skin Disease) nodular pyrexia with local spatial clustering.",
      imageUrl: reportData.imageUrl || "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=800",
      assignedVet: "Dr. Anand Deshmukh",
      lat: 18.1524,
      lng: 74.5768
    };

    setCases(prev => [newCase, ...prev]);
    setSelectedCase(newCase);
    addNotification("🚨 Critical Health Report Dispatched", `Case ${newCaseId} created for ${newCase.animalId}. Alerted Dr. Anand Deshmukh.`, "alert");
    return newCase;
  };

  // Register New Animal
  const registerAnimal = (animalData) => {
    const newId = `MH-PUN-${String(Math.floor(1000 + animals.length)).padStart(4, '0')}`;
    const newAnimal = {
      id: newId,
      name: animalData.name,
      species: animalData.species,
      breed: animalData.breed,
      age: animalData.age || "3 Years",
      weight: animalData.weight || "380 kg",
      healthStatus: "healthy",
      owner: animalData.owner || "Ramesh Patil",
      location: animalData.location || "Khedgaon, Baramati, Pune",
      rfidTag: animalData.rfidTag || `890401827${Math.floor(10000 + Math.random() * 90000)}`,
      milkYield: animalData.milkYield || "11 Liters/day",
      imageUrl: animalData.species.includes("Buffalo") 
        ? "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=800"
        : "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=800"
    };

    setAnimals(prev => [newAnimal, ...prev]);
    addNotification("📋 Animal Registered", `Added ${newAnimal.name} (${newAnimal.species}) with RFID #${newAnimal.rfidTag}.`, "success");
    return newAnimal;
  };

  // Report Mortality
  const reportMortality = (data) => {
    addNotification("🚨 Sudden Mortality Logged", `Reported ${data.count} deaths of ${data.species} in ${data.village}. Rapid Response Team notified.`, "alert");
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
      default: return 'User';
    }
  };

  const getRoleTitle = (r) => {
    switch (r) {
      case 'farmer': return 'Farmer / Livestock Owner';
      case 'fieldWorker': return 'Field Sentinel / Pashu Sakhi';
      case 'vet': return 'Veterinarian / Clinical Officer';
      case 'admin': return 'District Animal Health Command';
      case 'stateAdmin': return 'State Directorate Intelligence';
      default: return 'Authorized Workspace';
    }
  };

  // Offline Sync
  const syncOfflineQueue = () => {
    if (offlineQueue.length === 0) return;
    addNotification("⚡ Offline Sync Complete", `Successfully uploaded ${offlineQueue.length} queued records to District Command.`, "success");
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

        // Data
        animals,
        cases,
        hotspots,
        labSamples,
        advisories: advisoryList,
        fieldVisits,
        fieldSchedule: fieldVisits,
        stateDistricts,
        notifications,
        addNotification,
        addReport,
        submitSickAnimalReport,
        registerAnimal,
        reportMortality,
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
