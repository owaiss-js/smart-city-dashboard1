'use client';

import React from 'react';
import { Activity, AlertTriangle, CheckCircle, Package } from 'lucide-react';

interface StatsProps {
  data: any[];
}

export const StatsOverview: React.FC<StatsProps> = ({ data }) => {
  const stats = [
    {
      title: 'Total Systems',
      value: data.length,
      icon: <Package className="w-6 h-6 text-blue-500" />,
      color: 'bg-blue-50',
    },
    {
      title: 'Healthy',
      value: data.filter((i) => i.status === 'healthy').length,
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      color: 'bg-green-50',
    },
    {
      title: 'Warnings',
      value: data.filter((i) => i.status === 'warning').length,
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      color: 'bg-yellow-50',
    },
    {
      title: 'Critical',
      value: data.filter((i) => i.status === 'critical').length,
      icon: <Activity className="w-6 h-6 text-red-500" />,
      color: 'bg-red-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className={`${stat.color} p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4`}>
          <div className="p-3 bg-white rounded-lg shadow-sm">{stat.icon}</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
