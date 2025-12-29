'use client';

import React from 'react';
import { Settings, MapPin, Thermometer, Droplets, Zap, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface InfraCardProps {
  item: any;
}

export const InfrastructureCard: React.FC<InfraCardProps> = ({ item }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'streetlight': return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'traffic_signal': return <Settings className="w-5 h-5 text-purple-500" />;
      case 'water_pipe': return <Droplets className="w-5 h-5 text-blue-500" />;
      case 'waste_bin': return <Trash2 className="w-5 h-5 text-green-500" />;
      default: return <Settings className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      case 'critical': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50/50">
        <div className="flex items-center space-x-2">
          {getIcon(item.type)}
          <CardTitle className="text-sm font-bold truncate max-w-[150px]">{item.name}</CardTitle>
        </div>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${getStatusColor(item.status)}`}>
          {item.status}
        </span>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-center text-xs text-gray-500 mb-4">
          <MapPin className="w-3 h-3 mr-1" />
          <span className="truncate">{item.location.address}</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-medium">
            <span>Health Status</span>
            <span>{item.healthScore}%</span>
          </div>
          <Progress value={item.healthScore} className="h-1.5" />
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400">
          <span>Last Maintained</span>
          <span>{new Date(item.lastMaintenance).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};
