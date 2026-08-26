import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import DemoBar from './components/layout/DemoBar';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import BottomNav from './components/layout/BottomNav';
import OfflineBanner from './components/layout/OfflineBanner';
import NotificationCenter from './components/layout/NotificationCenter';
import IVRModal from './components/common/IVRModal';
import AnimalProfileModal from './components/common/AnimalProfileModal';
import LandingPage from './components/layout/LandingPage';
import LoginPage from './components/layout/LoginPage';
import WorkspaceSelectPage from './components/layout/WorkspaceSelectPage';
import WorkspaceDetailsPage from './components/layout/WorkspaceDetailsPage';
import DemoCenter from './components/demo/DemoCenter';
import TryDemoModal from './components/demo/TryDemoModal';
import JudgeMode from './components/demo/JudgeMode';

// Public Pages
import AboutPage from './components/public/AboutPage';
import HowItWorksPage from './components/public/HowItWorksPage';
import ImpactPage from './components/public/ImpactPage';

// 1. Farmer Pages
import FarmerDashboard from './components/farmer/FarmerDashboard';
import FarmerAnimalsView from './components/farmer/FarmerAnimalsView';
import FarmerVaccinesView from './components/farmer/FarmerVaccinesView';
import FarmerAlertsView from './components/farmer/FarmerAlertsView';
import FarmerTreatmentsView from './components/farmer/FarmerTreatmentsView';
import ReportSickAnimalWizard from './components/farmer/ReportSickAnimalWizard';

// 2. Field Worker Pages
import FieldWorkerDashboard from './components/fieldWorker/FieldWorkerDashboard';
import FieldVisitsView from './components/fieldWorker/FieldVisitsView';
import FieldRegistryView from './components/fieldWorker/FieldRegistryView';
import FieldIncidentsView from './components/fieldWorker/FieldIncidentsView';
import FieldVaccinationView from './components/fieldWorker/FieldVaccinationView';
import FieldSamplesView from './components/fieldWorker/FieldSamplesView';
import FieldOfflineView from './components/fieldWorker/FieldOfflineView';

// 3. Veterinarian Pages
import VetDashboard from './components/vet/VetDashboard';
import VetCasesView from './components/vet/VetCasesView';
import VetTriageView from './components/vet/VetTriageView';
import VetReferralsView from './components/vet/VetReferralsView';
import VetTreatmentsView from './components/vet/VetTreatmentsView';

// 4. District Command Pages
import AdminDashboard from './components/admin/AdminDashboard';
import DistrictOutbreaksView from './components/admin/DistrictOutbreaksView';
import DistrictResponseView from './components/admin/DistrictResponseView';

// 5. State Directorate Pages
import StateAdminDashboard from './components/stateAdmin/StateAdminDashboard';
import StateDistrictRiskView from './components/stateAdmin/StateDistrictRiskView';
import StateVaccinationGapsView from './components/stateAdmin/StateVaccinationGapsView';
import StateResourcesView from './components/stateAdmin/StateResourcesView';

// Shared Sub-Views & Modals
import AdvisoryCenter from './components/advisory/AdvisoryCenter';
import AdvisoryStudio from './components/admin/AdvisoryStudio';
import GISDiseaseMap from './components/admin/GISDiseaseMap';
import WeatherCorrelationWidget from './components/admin/WeatherCorrelationWidget';
import BlockAnalyticsCharts from './components/admin/BlockAnalyticsCharts';
import LabReferralsView from './components/lab/LabReferralsView';

function MainAppContent() {
  const { 
    currentScreen, 
    setCurrentScreen, 
    role, 
    enterWorkspace,
    selectedWorkspace,
    setSelectedWorkspace,
    activeTab, 
    setActiveTab, 
    isAdvisoryStudioOpen,
    setIsAdvisoryStudioOpen,
    isDemoModalOpen,
    setIsDemoModalOpen
  } = useApp();

  // SCREEN 1: Public Editorial Landing Page
  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <DemoBar />
        <LandingPage 
          onAccessPlatform={() => setCurrentScreen('login')}
          onReportIssue={() => {
            enterWorkspace('farmer');
            setActiveTab('report');
          }}
        />
        <IVRModal />
        <NotificationCenter />
        {isDemoModalOpen && (
          <TryDemoModal 
            onClose={() => setIsDemoModalOpen(false)} 
            onOpenDemoCenter={() => {
              setIsDemoModalOpen(false);
              setCurrentScreen('demoCenter');
            }}
          />
        )}
      </div>
    );
  }

  // SCREEN: Public About Page
  if (currentScreen === 'about') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <DemoBar />
        <AboutPage />
        <IVRModal />
        <NotificationCenter />
      </div>
    );
  }

  // SCREEN: Public How It Works Page
  if (currentScreen === 'howItWorks') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <DemoBar />
        <HowItWorksPage />
        <IVRModal />
        <NotificationCenter />
      </div>
    );
  }

  // SCREEN: Public Impact Page
  if (currentScreen === 'impact') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <DemoBar />
        <ImpactPage />
        <IVRModal />
        <NotificationCenter />
      </div>
    );
  }

  // SCREEN: Dedicated Judge Mode Portal (Section 72)
  if (currentScreen === 'judgeMode') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <DemoBar />
        <JudgeMode />
        <IVRModal />
        <NotificationCenter />
      </div>
    );
  }

  // SCREEN 2: Split-Screen Authentication (Phone + OTP)
  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <DemoBar />
        <LoginPage 
          onLoginSuccess={() => setCurrentScreen('workspaceSelect')}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onOpenDemoCenter={() => setCurrentScreen('demoCenter')}
        />
        <IVRModal />
        <NotificationCenter />
        {isDemoModalOpen && (
          <TryDemoModal 
            onClose={() => setIsDemoModalOpen(false)} 
            onOpenDemoCenter={() => {
              setIsDemoModalOpen(false);
              setCurrentScreen('demoCenter');
            }}
          />
        )}
      </div>
    );
  }

  // SCREEN 3: Workspace Selection Page (Left List + Right Live Preview)
  if (currentScreen === 'workspaceSelect') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F6F3EA] font-sans">
        <DemoBar />
        <WorkspaceSelectPage 
          onInspectDetails={() => setCurrentScreen('workspaceDetails')}
          onEnterWorkspace={(wsKey) => enterWorkspace(wsKey)}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onOpenDemoCenter={() => setCurrentScreen('demoCenter')}
        />
        <IVRModal />
        <NotificationCenter />
        {isDemoModalOpen && (
          <TryDemoModal 
            onClose={() => setIsDemoModalOpen(false)} 
            onOpenDemoCenter={() => {
              setIsDemoModalOpen(false);
              setCurrentScreen('demoCenter');
            }}
          />
        )}
      </div>
    );
  }

  // SCREEN 4: Dedicated Workspace Details Briefing (Pre-Dashboard)
  if (currentScreen === 'workspaceDetails') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F6F3EA] font-sans">
        <DemoBar />
        <WorkspaceDetailsPage 
          onBack={() => setCurrentScreen('workspaceSelect')}
          onEnterDashboard={() => enterWorkspace(selectedWorkspace)}
          onOpenDemoStory={() => setCurrentScreen('demoCenter')}
        />
        <IVRModal />
        <NotificationCenter />
        {isDemoModalOpen && (
          <TryDemoModal 
            onClose={() => setIsDemoModalOpen(false)} 
            onOpenDemoCenter={() => {
              setIsDemoModalOpen(false);
              setCurrentScreen('demoCenter');
            }}
          />
        )}
      </div>
    );
  }

  // SCREEN 5: Dedicated 9-Phase Story Mode Demo Center
  if (currentScreen === 'demoCenter') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F6F3EA] font-sans">
        <DemoBar />
        <DemoCenter 
          onExit={() => setCurrentScreen('workspaceSelect')}
          onOpenRoleDashboard={(roleKey) => enterWorkspace(roleKey)}
        />
        <IVRModal />
        <NotificationCenter />
        {isDemoModalOpen && (
          <TryDemoModal 
            onClose={() => setIsDemoModalOpen(false)} 
            onOpenDemoCenter={() => {
              setIsDemoModalOpen(false);
              setCurrentScreen('demoCenter');
            }}
          />
        )}
      </div>
    );
  }

  // SCREEN 6: Role-Specific Authenticated Workspace & Routed Sub-Pages
  return (
    <div className="min-h-screen bg-[#F6F3EA] flex flex-col selection:bg-[#149A84] selection:text-white font-sans">
      {/* Top Evaluator Helper Bar */}
      <DemoBar />

      {/* Official Government Workspace Header (Without global role tabs!) */}
      <Header />

      {/* Connectivity Banner */}
      <OfflineBanner />

      {/* Main Body Layout: Role-Specific Sidebar + Active View */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex gap-6 px-3 sm:px-6 py-6 pb-24 lg:pb-10">
        {/* Role-Specific Sidebar Navigation */}
        <Sidebar />

        {/* Dynamic Screen / Tab Content Router */}
        <main className="flex-1 min-w-0">
          {/* ======================================================== */}
          {/* 1. FARMER WORKSPACE PAGES */}
          {/* ======================================================== */}
          {role === 'farmer' && (
            <>
              {(activeTab === 'dashboard' || activeTab === 'home') && <FarmerDashboard />}
              {activeTab === 'animals' && <FarmerAnimalsView />}
              {activeTab === 'vaccines' && <FarmerVaccinesView />}
              {activeTab === 'alerts' && <FarmerAlertsView />}
              {activeTab === 'treatments' && <FarmerTreatmentsView />}
              {activeTab === 'advisories' && <AdvisoryCenter />}
              {activeTab === 'report' && (
                <div className="space-y-4">
                  <FarmerDashboard />
                  <ReportSickAnimalWizard onClose={() => setActiveTab('dashboard')} />
                </div>
              )}
            </>
          )}

          {/* ======================================================== */}
          {/* 2. FIELD WORKER (FIELD SENTINEL) WORKSPACE PAGES */}
          {/* ======================================================== */}
          {role === 'fieldWorker' && (
            <>
              {(activeTab === 'dashboard' || activeTab === 'home') && <FieldWorkerDashboard />}
              {activeTab === 'schedule' && <FieldVisitsView />}
              {activeTab === 'animals' && <FieldRegistryView />}
              {activeTab === 'report' && <FieldIncidentsView />}
              {activeTab === 'vaccines' && <FieldVaccinationView />}
              {activeTab === 'labs' && <FieldSamplesView />}
              {activeTab === 'offlineQueue' && <FieldOfflineView />}
            </>
          )}

          {/* ======================================================== */}
          {/* 3. VETERINARIAN (CLINICAL CONSOLE) WORKSPACE PAGES */}
          {/* ======================================================== */}
          {role === 'vet' && (
            <>
              {(activeTab === 'dashboard' || activeTab === 'home') && <VetDashboard />}
              {activeTab === 'cases' && <VetCasesView />}
              {activeTab === 'triage' && <VetTriageView />}
              {activeTab === 'labs' && <LabReferralsView />}
              {activeTab === 'referrals' && <VetReferralsView />}
              {activeTab === 'treatments' && <VetTreatmentsView />}
              {activeTab === 'gis' && (
                <div className="space-y-6">
                  <GISDiseaseMap />
                </div>
              )}
            </>
          )}

          {/* ======================================================== */}
          {/* 4. DISTRICT OFFICER (DISTRICT COMMAND) WORKSPACE PAGES */}
          {/* ======================================================== */}
          {role === 'admin' && (
            <>
              {(activeTab === 'dashboard' || activeTab === 'home') && <AdminDashboard />}
              {activeTab === 'gis' && (
                <div className="space-y-6">
                  <GISDiseaseMap />
                </div>
              )}
              {activeTab === 'outbreaks' && <DistrictOutbreaksView />}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <WeatherCorrelationWidget />
                  <BlockAnalyticsCharts />
                </div>
              )}
              {activeTab === 'response' && <DistrictResponseView />}
              {activeTab === 'advisories' && <AdvisoryCenter />}
            </>
          )}

          {/* ======================================================== */}
          {/* 5. STATE ADMINISTRATOR (STATE DIRECTORATE) WORKSPACE PAGES */}
          {/* ======================================================== */}
          {role === 'stateAdmin' && (
            <>
              {(activeTab === 'dashboard' || activeTab === 'home') && <StateAdminDashboard />}
              {activeTab === 'districtRankings' && <StateDistrictRiskView />}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <WeatherCorrelationWidget />
                  <BlockAnalyticsCharts />
                </div>
              )}
              {activeTab === 'vaccinationGaps' && <StateVaccinationGapsView />}
              {activeTab === 'resources' && <StateResourcesView />}
              {activeTab === 'advisories' && <AdvisoryCenter />}
            </>
          )}
        </main>
      </div>

      {/* Role-Specific Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global Drawers & Modals */}
      <IVRModal />
      <NotificationCenter />
      <AnimalProfileModal />
      {isDemoModalOpen && (
        <TryDemoModal 
          onClose={() => setIsDemoModalOpen(false)} 
          onOpenDemoCenter={() => {
            setIsDemoModalOpen(false);
            setCurrentScreen('demoCenter');
          }}
        />
      )}
      {isAdvisoryStudioOpen && (
        <AdvisoryStudio onClose={() => setIsAdvisoryStudioOpen(false)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
