import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function RiskBadge({ level, showIcon = true, size = "md" }) {
  const normalized = (level || "").toUpperCase();

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs font-semibold",
    md: "px-2.5 py-1 text-xs font-bold",
    lg: "px-3 py-1.5 text-sm font-bold"
  };

  if (normalized.includes("CRITICAL") || normalized === "CRITICAL") {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full bg-red-100 text-red-800 border border-red-300 shadow-sm ${sizeClasses[size]}`}>
        {showIcon && <ShieldAlert className="w-3.5 h-3.5 text-red-600 animate-pulse" />}
        <span>🔴 CRITICAL RISK</span>
      </span>
    );
  }

  if (normalized.includes("HIGH") || normalized === "HIGH") {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full bg-orange-100 text-orange-800 border border-orange-300 shadow-sm ${sizeClasses[size]}`}>
        {showIcon && <AlertTriangle className="w-3.5 h-3.5 text-orange-600" />}
        <span>🟠 HIGH RISK</span>
      </span>
    );
  }

  if (normalized.includes("MEDIUM") || normalized.includes("MODERATE") || normalized === "MEDIUM") {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 ${sizeClasses[size]}`}>
        {showIcon && <AlertCircle className="w-3.5 h-3.5 text-amber-600" />}
        <span>🟡 MODERATE RISK</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 ${sizeClasses[size]}`}>
      {showIcon && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
      <span>🟢 LOW / SAFE</span>
    </span>
  );
}
