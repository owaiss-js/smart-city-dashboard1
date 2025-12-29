'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * SensorChart Component
 * 
 * This component visualizes IoT sensor data using Recharts.
 * It's designed to be simple so it's easy to understand for beginners.
 */

interface ChartProps {
  data: any[];
  title: string;
}

export const SensorChart: React.FC<ChartProps> = ({ data, title }) => {
  // Format the data for Recharts - we take the raw DB records and clean them up
  const chartData = data && data.length > 0 
    ? data.map((d) => ({
        // Show only time for better readability on the X axis
        name: new Date(d.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        value: d.value,
        fullDate: new Date(d.timestamp).toLocaleString()
      })) 
    : [
        // Fallback data shown when the database is empty (during first load)
        { name: '10:00', value: 0 },
        { name: '11:00', value: 0 },
      ];

  return (
    <Card className="w-full h-[320px] bg-white border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[240px] w-full">
        {/* ResponsiveContainer makes sure the chart resizes with the window */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              {/* Gradient for the "Area" look - makes it look professional */}
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: '#94a3b8' }}
              minTickGap={30}
            />
            <YAxis 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: '#94a3b8' }}
            />
            {/* Tooltip shows the value when you hover over the chart */}
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
