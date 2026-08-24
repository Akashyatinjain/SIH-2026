import React from 'react';
import { 
  Database, 
  Wifi, 
  WifiOff, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  HardDrive, 
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FieldOfflineView() {
  const { 
    isOffline, 
    toggleOffline, 
    offlineQueue, 
    syncOfflineQueue, 
    lastSyncedTime, 
    addNotification 
  } = useApp();

  const handleSync = () => {
    syncOfflineQueue();
  };

  return (
    <div className="space-y-6 text-[#0A1020]">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-slate-950 via-[#0A1020] to-[#073B32] text-white rounded-3xl shadow-sm border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-emerald-200 border border-white/10 mb-2">
            <span className={`w-2 h-2 rounded-full ${isOffline ? 'bg-amber-400' : 'bg-emerald-400 animate-ping'}`} />
            <span>IndexedDB Local Storage Sentinel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Offline Synchronization Center</h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Local queue for rural low-connectivity field operations • Auto-syncs upon 4G restoration
          </p>
        </div>

        <button
          onClick={toggleOffline}
          className={`px-5 py-2.5 rounded-2xl text-xs font-black shadow-md transition flex items-center gap-2 shrink-0 border ${
            isOffline 
              ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-300' 
              : 'bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-500'
          }`}
        >
          {isOffline ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
          <span>{isOffline ? 'Switch to ONLINE Mode' : 'Simulate OFFLINE Mode'}</span>
        </button>
      </div>

      {/* Storage & Queue Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-1">
          <span className="text-slate-400 uppercase font-bold text-[10px] block">Queued Records</span>
          <span className="text-2xl font-black text-[#073B32]">{offlineQueue?.length || 0} Records</span>
          <p className="text-[11px] text-slate-500">Stored in encrypted device storage</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-1">
          <span className="text-slate-400 uppercase font-bold text-[10px] block">Connection Status</span>
          <span className={`text-2xl font-black ${isOffline ? 'text-amber-700' : 'text-emerald-700'}`}>
            {isOffline ? 'Offline' : 'Connected'}
          </span>
          <p className="text-[11px] text-slate-500">Pune District Cloud Server</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#ECE6D6] shadow-xs space-y-1">
          <span className="text-slate-400 uppercase font-bold text-[10px] block">Last Successful Sync</span>
          <span className="text-2xl font-black text-slate-800">{lastSyncedTime || '12 min ago'}</span>
          <p className="text-[11px] text-slate-500">0 sync conflict errors</p>
        </div>
      </div>

      {/* Queue Items Table */}
      <div className="bg-white rounded-3xl border border-[#ECE6D6] p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ECE6D6] pb-3">
          <div>
            <h3 className="font-black text-base text-[#0A1020]">Pending Synchronization Queue</h3>
            <p className="text-xs text-slate-500">Records collected in offline rural field sheds</p>
          </div>

          <button
            onClick={handleSync}
            disabled={offlineQueue?.length === 0}
            className="px-5 py-2.5 bg-[#073B32] hover:bg-[#052923] disabled:opacity-50 text-white rounded-xl text-xs font-black shadow-xs transition flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-emerald-300" />
            <span>Force Synchronize All ({offlineQueue?.length || 0})</span>
          </button>
        </div>

        {offlineQueue?.length === 0 ? (
          <div className="py-12 text-center text-slate-500 space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-extrabold text-sm text-[#0A1020]">Queue is completely synchronized!</h4>
            <p className="text-xs text-slate-400">All field reports, animal tags, and vaccination doses are stored in state database.</p>
          </div>
        ) : (
          <div className="divide-y divide-[#ECE6D6]">
            {offlineQueue.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between text-xs gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#073B32] bg-[#D9F1E8] px-2 py-0.5 rounded">
                      {item.id}
                    </span>
                    <span className="font-extrabold text-[#0A1020]">{item.type}</span>
                  </div>
                  <p className="text-slate-600">{item.dataSummary}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono shrink-0">{item.timestamp}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
