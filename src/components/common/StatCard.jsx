import React from 'react';

export default function StatCard({ title, value, subtitle, icon: Icon, color = "emerald", change, onClick }) {
  const colorMap = {
    emerald: {
      bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-800"
    },
    amber: {
      bg: "bg-amber-50 text-amber-800 border-amber-200",
      iconBg: "bg-amber-100 text-amber-800"
    },
    red: {
      bg: "bg-red-50 text-red-800 border-red-200",
      iconBg: "bg-red-100 text-red-800"
    },
    blue: {
      bg: "bg-blue-50 text-blue-800 border-blue-200",
      iconBg: "bg-blue-100 text-blue-800"
    },
    slate: {
      bg: "bg-slate-50 text-slate-800 border-slate-200",
      iconBg: "bg-slate-100 text-slate-700"
    }
  };

  const selectedColor = colorMap[color] || colorMap.emerald;

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl border p-4 sm:p-5 card-elevated transition-all duration-200 hover:border-slate-300 ${onClick ? 'cursor-pointer hover:shadow-md' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs sm:text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
          )}
          {change && (
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                {change}
              </span>
            </div>
          )}
        </div>
        {Icon && (
          <div className={`p-2.5 sm:p-3 rounded-xl ${selectedColor.iconBg}`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </div>
    </div>
  );
}
