import React from 'react';
import { 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Bug, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { diseaseTrendSeries } from '../../data/mockData';

export default function WeatherCorrelationWidget() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 card-elevated space-y-4">
      {/* Title & Live Weather Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-blue-600" />
            <span>Weather & Vector Activity Correlation Engine</span>
          </h3>
          <p className="text-xs text-slate-500">Early warning correlation between humidity surges and vector-borne outbreaks</p>
        </div>

        {/* Live Weather Badges for Pune / Baramati */}
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200 font-bold">
            <Thermometer className="w-3.5 h-3.5 text-amber-600" />
            <span>31°C</span>
          </span>
          <span className="flex items-center gap-1 bg-blue-50 text-blue-900 px-2.5 py-1 rounded-lg border border-blue-200 font-bold">
            <Droplets className="w-3.5 h-3.5 text-blue-600" />
            <span>78% Humidity</span>
          </span>
          <span className="flex items-center gap-1 bg-red-50 text-red-900 px-2.5 py-1 rounded-lg border border-red-200 font-bold">
            <Bug className="w-3.5 h-3.5 text-red-600" />
            <span>Vector Index: 8.2 (High)</span>
          </span>
        </div>
      </div>

      {/* Intelligence Correlation Note */}
      <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-blue-950 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Epidemiological Intelligence Insight: </span>
          <span>Relative humidity elevation from 62% to 78% in Baramati over the last 7 days is correlated with a <strong>34% increase in suspected Lumpy Skin Disease (LSD)</strong> cases due to Stomoxys fly breeding.</span>
        </div>
      </div>

      {/* Chart: Cases vs Weather Humidity */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={diseaseTrendSeries} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLsd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '11px', border: 'none' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
            <Area type="monotone" dataKey="lsd" name="Lumpy Skin Disease Cases" stroke="#ef4444" strokeWidth={2.5} fillOpacity={1} fill="url(#colorLsd)" />
            <Area type="monotone" dataKey="fmd" name="FMD Cases" stroke="#f59e0b" strokeWidth={2} fillOpacity={0.5} fill="#fef3c7" />
            <Area type="monotone" dataKey="humidity" name="Relative Humidity (%)" stroke="#3b82f6" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorHumidity)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
