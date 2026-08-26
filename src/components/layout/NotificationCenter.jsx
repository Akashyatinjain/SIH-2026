import React from 'react';
import { Bell, X, AlertTriangle, CheckCircle, Info, ShieldAlert, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function NotificationCenter() {
  const { 
    notifications, 
    isNotificationOpen, 
    setIsNotificationOpen,
    isNotificationsOpen,
    setIsNotificationsOpen
  } = useApp();

  const isOpen = isNotificationOpen || isNotificationsOpen;

  const handleClose = () => {
    if (setIsNotificationOpen) setIsNotificationOpen(false);
    if (setIsNotificationsOpen) setIsNotificationsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Surveillance Notifications</h3>
                <p className="text-[11px] text-slate-500">Live field alerts, lab results & updates</p>
              </div>
            </div>
            <button 
              onClick={handleClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {notifications.map((n) => {
              const isAlert = n.type === 'alert';
              const isSuccess = n.type === 'success';

              return (
                <div 
                  key={n.id}
                  className={`p-3.5 rounded-xl border transition ${
                    isAlert 
                      ? 'bg-red-50/70 border-red-200 text-red-950' 
                      : isSuccess 
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-xs flex items-center gap-1.5">
                      {isAlert && <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />}
                      {isSuccess && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                      {!isAlert && !isSuccess && <Info className="w-4 h-4 text-blue-600 shrink-0" />}
                      <span>{n.title}</span>
                    </h4>
                    <span className="text-[10px] text-slate-400 shrink-0 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{n.time}</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {n.message}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
            <span className="text-slate-500">{notifications.length} total notifications</span>
            <button 
              onClick={() => setIsNotificationOpen(false)}
              className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
