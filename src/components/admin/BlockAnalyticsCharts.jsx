import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, TrendingDown, ShieldCheck } from 'lucide-react';
import { puneBlocksStats } from '../../data/mockData';

export default function BlockAnalyticsCharts() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 card-elevated space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <span>Block-wise Vaccination Coverage vs. 7-Day Mortality Rate</span>
          </h3>
          <p className="text-xs text-slate-500">12 Talukas / Blocks of Pune District comparative surveillance metrics</p>
        </div>
        <div className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
          Target Coverage: ≥ 85%
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={puneBlocksStats} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="block" tick={{ fontSize: 10, fill: '#64748b' }} angle={-25} textAnchor="end" />
            <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '11px', border: 'none' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '16px' }} />
            <Bar dataKey="vacCoverage" name="Vaccination Coverage (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="activeCases" name="Active Clinical Cases" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mortality7d" name="7-Day Deaths" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
