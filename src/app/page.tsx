'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { StatsOverview } from '@/components/StatsOverview';
import { InfrastructureCard } from '@/components/InfrastructureCard';
import { ComplaintsSection } from '@/components/ComplaintsSection';
import { SensorChart } from '@/components/SensorChart';
import { Button } from '@/components/ui/button';
import { Database, RefreshCw, LayoutDashboard, Map as MapIcon, MessageSquare, Activity, ShieldAlert, Thermometer, Droplets } from 'lucide-react';
import { toast } from 'sonner';

// Dynamically import MapDisplay because Leaflet doesn't support SSR (Server-Side Rendering)
const MapDisplay = dynamic(() => import('@/components/MapDisplay').then(mod => mod.MapDisplay), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-100 animate-pulse rounded-xl flex items-center justify-center">Loading Map...</div>
});

export default function SmartCityDashboard() {
  const [infrastructure, setInfrastructure] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [sensorHistory, setSensorHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [simulating, setSimulating] = useState(false);

  // Fetch all dashboard data from our API
  const fetchData = async () => {
    try {
      const [infraRes, compRes, sensorRes] = await Promise.all([
        fetch('/api/infrastructure'),
        fetch('/api/complaints'),
        fetch('/api/sensor-data?limit=20') // Get recent history for charts
      ]);
      
      const infraData = await infraRes.json();
      const compData = await compRes.json();
      const sensorData = await sensorRes.json();
      
      setInfrastructure(infraData);
      setComplaints(compData);
      setSensorHistory(sensorData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Connection Error: Please check if MongoDB is running');
    } finally {
      setLoading(false);
    }
  };

  // Initial load and periodic refresh
  useEffect(() => {
    fetchData();
    // Auto-refresh data every 10 seconds to simulate real-time monitoring
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  // Helper function to seed initial data if the database is empty
  const handleSeed = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/seed');
      if (res.ok) {
        toast.success('Database Reset: Sample data loaded successfully');
        fetchData();
      }
    } catch (error) {
      toast.error('Seeding failed. Check your API connection.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger the IoT simulation backend
  const handleSimulate = async () => {
    setSimulating(true);
    try {
      const res = await fetch('/api/sensor-data/simulate');
      if (res.ok) {
        toast.success('IoT Sync: Received new sensor packets');
        fetchData();
      }
    } catch (error) {
      toast.error('IoT Simulation failed to broadcast data');
    } finally {
      setSimulating(false);
    }
  };

  // Filter infrastructure by health for the "Predictive Alerts" section
  const criticalItems = infrastructure.filter((item: any) => item.status !== 'healthy');

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-blue-600" />
            Polar City Smart Monitor
          </h1>
          <p className="text-slate-500 mt-1">Next-Gen Municipal Infrastructure Control Center</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleSeed} className="bg-white border-slate-200">
            <Database className="w-4 h-4 mr-2" />
            Reset Data
          </Button>
          <Button variant="default" size="sm" onClick={handleSimulate} disabled={simulating} className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200">
            <RefreshCw className={`w-4 h-4 mr-2 ${simulating ? 'animate-spin' : ''}`} />
            {simulating ? 'Syncing IoT...' : 'Broadcast IoT Data'}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Real-time KPI Statistics */}
        <StatsOverview data={infrastructure} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Main Content Area: Health List and Analytics */}
          <div className="xl:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  Systems Operational Status
                </h2>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Network</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loading && infrastructure.length === 0 ? (
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="h-40 bg-white border border-slate-100 animate-pulse rounded-xl" />
                  ))
                ) : (
                  infrastructure.map((item: any) => (
                    <InfrastructureCard key={item._id} item={item} />
                  ))
                )}
              </div>
            </section>

            {/* Time-Series Charts for Sensor Data */}
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                Historical Sensor Trends
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SensorChart 
                  data={sensorHistory.filter((s: any) => s.metricType === 'brightness' || s.metricType === 'fill_level')} 
                  title="Environmental Fill & Lighting Levels" 
                />
                <SensorChart 
                  data={sensorHistory.filter((s: any) => s.metricType === 'pressure')} 
                  title="Utility Pressure (PSI) Monitoring" 
                />
              </div>
            </section>
          </div>

          {/* Sidebar: Geographic Map and AI Predictive Alerts */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-blue-500" />
                Spatial Analysis
              </h2>
              <div className="h-[400px] rounded-xl relative shadow-sm overflow-hidden">
                <MapDisplay items={infrastructure} />
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  Predictive AI Alerts
                </h3>
              </div>
              <div className="space-y-3">
                {criticalItems.length > 0 ? (
                  criticalItems.map((item: any, idx) => (
                    <div key={idx} className={`p-3 border-l-4 rounded-r-md ${item.status === 'critical' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`}>
                      <p className={`text-xs font-bold ${item.status === 'critical' ? 'text-red-700' : 'text-yellow-700'}`}>
                        {item.status.toUpperCase()}: {item.name}
                      </p>
                      <p className={`text-[10px] mt-1 ${item.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}`}>
                        {item.status === 'critical' ? 'Critical failure detected. Emergency maintenance dispatched.' : 'Efficiency dropping below 70%. Maintenance recommended.'}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-lg">
                    <p className="text-xs text-slate-400 italic">No anomalies detected by AI models.</p>
                  </div>
                )}
                
                {/* Simulated "Next Service" indicator */}
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-2">Upcoming Maintenance</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-600">
                    <span>Street Light #101</span>
                    <span className="font-mono">Jan 05, 2026</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Community Engagement Section */}
        <section className="mt-12 pt-12 border-t border-slate-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              Citizen Feedback & Reporting
            </h2>
            <p className="text-slate-500 text-sm mt-1">Empowering residents to improve city infrastructure together.</p>
          </div>
          <ComplaintsSection complaints={complaints} onRefresh={fetchData} />
        </section>
      </div>

      <footer className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1"><Droplets className="w-3 h-3" /> Water</div>
          <div className="flex items-center gap-1"><Thermometer className="w-3 h-3" /> Energy</div>
          <div className="flex items-center gap-1"><MapIcon className="w-3 h-3" /> GIS</div>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2025 Polar City Municipal - Smart Systems Division</p>
          <p className="text-[10px] mt-1 uppercase tracking-widest font-bold text-blue-400">Class 12 Hackathon Submission</p>
        </div>
      </footer>
    </div>
  );
}
