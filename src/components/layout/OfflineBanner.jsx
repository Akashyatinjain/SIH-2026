import React, { useState } from 'react';
import { WifiOff, RefreshCw, CheckCircle, Clock, Database, X, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function OfflineBanner() {
  const { isOffline, offlineQueue, syncOfflineQueue, lastSyncedTime, t, isOfflineModalOpen, setIsOfflineModalOpen } = useApp();
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      syncOfflineQueue();
      setIsSyncing(false);
      setIsOfflineModalOpen(false);
    }, 1200);
  };

  return (
    <>
      {/* Top Banner when offline or when items are queued */}
      {isOffline && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-amber-900 text-xs transition animate-fadeIn">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="p-1 bg-amber-200 text-amber-900 rounded-md">
                <WifiOff className="w-4 h-4 animate-pulse" />
              </span>
              <div>
                <span className="font-bold">{t.offlineMode}: </span>
                <span className="text-amber-800">{t.offlineBannerText}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-amber-700">
                {offlineQueue.length} {t.queuedReports} • {t.lastSynced}: {lastSyncedTime}
              </span>
              <button
                onClick={() => setIsOfflineModalOpen(true)}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-xs shadow-xs transition flex items-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5" />
                <span>View Queue</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Offline Queue Modal */}
      {isOfflineModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Local Offline Queue Manager</h3>
                  <p className="text-xs text-slate-500">Stored on device storage (IndexedDB / LocalStorage)</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOfflineModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Queue Items */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 mb-4">
              {offlineQueue.length > 0 ? (
                offlineQueue.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>{item.type}</span>
                      <span className="font-mono text-[10px] text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                        {item.id}
                      </span>
                    </div>
                    <p className="text-slate-600">{item.dataSummary}</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-1">
                      <Clock className="w-3 h-3" />
                      <span>Captured: {item.timestamp}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-slate-500 text-xs">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <span>No pending reports. Device is in full sync with the District Server!</span>
                </div>
              )}
            </div>

            {/* Sync Action */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {offlineQueue.length} records pending upload
              </span>

              <button
                disabled={offlineQueue.length === 0 || isSyncing}
                onClick={handleSync}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-300 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing to Pune Server...' : 'Sync All Records Now'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
