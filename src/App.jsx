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

// 5 Stakeholder Dashboards
import FarmerDashboard from './components/farmer/FarmerDashboard';
import FieldWorkerDashboard from './components/fieldWorker/FieldWorkerDashboard';
import VetDashboard from './components/vet/VetDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import StateAdminDashboard from './components/stateAdmin/StateAdminDashboard';

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
    activeTab, 
    setActiveTab, 
    isAdvisoryStudioOpen,
    setIsAdvisoryStudioOpen 
  } = useApp();

  // SCREEN 1: Public Editorial Landing Page
  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen flex flex-col">
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
      </div>
    );
  }

  // SCREEN 2: Split-Screen Authentication & Role Selection
  if (currentScreen === 'login' || currentScreen === 'roleSelect') {
    return (
      <div className="min-h-screen flex flex-col">
        <DemoBar />
        <LoginPage onLoginSuccess={() => setCurrentScreen('workspace')} />
        <IVRModal />
        <NotificationCenter />
      </div>
    );
  }

  // SCREEN 3: Role-Specific Authenticated Workspace
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Evaluator Helper Bar */}
      <DemoBar />

      {/* Official Government Workspace Header (Without role tabs!) */}
      <Header />

      {/* Connectivity Banner */}
      <OfflineBanner />

      {/* Main Body Layout: Role-Specific Sidebar + Active View */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex gap-6 px-3 sm:px-6 py-6 pb-24 lg:pb-10">
        {/* Role-Specific Sidebar Navigation */}
        <Sidebar />

        {/* Dynamic Screen / Tab Content Router */}
        <main className="flex-1 min-w-0">
          {/* Shared Sub-Views */}
          {activeTab === 'advisories' && <AdvisoryCenter />}
          {activeTab === 'labs' && <LabReferralsView />}
          {activeTab === 'gis' && (
            <div className="space-y-6">
              <GISDiseaseMap />
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <WeatherCorrelationWidget />
              <BlockAnalyticsCharts />
            </div>
          )}

          {/* 5 Distinct Role Workspaces */}
          {activeTab !== 'advisories' && activeTab !== 'labs' && activeTab !== 'gis' && activeTab !== 'analytics' && (
            <>
              {role === 'farmer' && <FarmerDashboard />}
              {role === 'fieldWorker' && <FieldWorkerDashboard />}
              {role === 'vet' && <VetDashboard />}
              {role === 'admin' && <AdminDashboard />}
              {role === 'stateAdmin' && <StateAdminDashboard />}
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
