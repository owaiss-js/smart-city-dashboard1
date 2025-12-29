'use client';

import React, { useState, useEffect } from 'react';
import { StatsOverview } from '@/components/StatsOverview';
import { InfrastructureCard } from '@/components/InfrastructureCard';
import { ComplaintsSection } from '@/components/ComplaintsSection';
import { SensorChart } from '@/components/SensorChart';
import { Button } from '@/components/ui/button';
import { Database, RefreshCw, LayoutDashboard, Map as MapIcon, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export default function SmartCityDashboard() {
  const [infrastructure, setInfrastructure] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [simulating, setSimulating] = useState(false);

  const fetchData = async () => {
    try {
      const [infraRes, compRes] = await Promise.all([
        fetch('/api/infrastructure'),
        fetch('/api/complaints')
      ]);
      const infraData = await infraRes.json();
      const compData = await compRes.json();
      
      setInfrastructure(infraData);
      setComplaints(compData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Auto refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSeed = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/seed');
      if (res.ok) {
        toast.success('Database seeded with sample data!');
        fetchData();
      }
    } catch (error) {
      toast.error('Seeding failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSimulate = async () => {
    setSimulating(true);
    try {
      const res = await fetch('/api/sensor-data/simulate');
      if (res.ok) {
        toast.success('IoT Simulation triggered!');
        fetchData();
      }
    } catch (error) {
      toast.error('Simulation failed');
    } finally {
      setSimulating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-blue-600" />
            Polar City Smart Monitor
          </h1>
          <p className="text-slate-500 mt-1">IoT-driven municipal infrastructure management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleSeed} className="bg-white">
            <Database className="w-4 h-4 mr-2" />
            Seed Data
          </Button>
          <Button variant="default" size="sm" onClick={handleSimulate} disabled={simulating} className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className={`w-4 h-4 mr-2 ${simulating ? 'animate-spin' : ''}`} />
            {simulating ? 'Simulating...' : 'Simulate IoT Data'}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <StatsOverview data={infrastructure} />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column: Systems List */}
          <div className="xl:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-blue-500" />
                  Infrastructure Health
                </h2>
                <span className="text-xs text-slate-400">Live Updates Enabled</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loading ? (
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="h-40 bg-slate-200 animate-pulse rounded-xl" />
                  ))
                ) : (
                  infrastructure.map((item: any) => (
                    <InfrastructureCard key={item._id} item={item} />
                  ))
                )}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                Real-time Analytics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SensorChart data={[]} title="System Load Trends" />
                <SensorChart data={[]} title="Anomaly Detection Rate" />
              </div>
            </section>
          </div>

          {/* Right Column: Map Simulation & Alerts */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-blue-500" />
                Geographic View
              </h2>
              <div className="bg-slate-200 h-[400px] rounded-xl relative overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center p-6">
                  <MapIcon className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500 font-medium italic">Interactive map simulation</p>
                  <p className="text-xs text-slate-400 mt-2 max-w-[200px]">In a real deployment, Leaflet.js or Google Maps would render here showing device coordinates.</p>
                </div>
                {/* Simulated markers */}
                {infrastructure.map((item: any, i) => (
                  <div 
                    key={i}
                    className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg animate-bounce`}
                    style={{
                      top: `${30 + (i * 15)}%`,
                      left: `${20 + (i * 20)}%`,
                      backgroundColor: item.status === 'healthy' ? '#22c55e' : item.status === 'warning' ? '#eab308' : '#ef4444'
                    }}
                    title={item.name}
                  />
                ))}
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Predictive Alerts</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                  <p className="text-xs font-bold text-red-700">CRITICAL: Water Main A</p>
                  <p className="text-[10px] text-red-600 mt-1">Pressure anomaly detected. Failure predicted within 48 hours.</p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
                  <p className="text-xs font-bold text-yellow-700">MAINTENANCE: Traffic Signal #42</p>
                  <p className="text-[10px] text-yellow-600 mt-1">Light bulb efficiency dropping. Schedule replacement.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Complaints Section */}
        <section className="mt-12 pt-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            Citizen Complaint Portal
          </h2>
          <ComplaintsSection complaints={complaints} onRefresh={fetchData} />
        </section>
      </div>

      <footer className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>&copy; 2025 Polar City Municipal - Smart Systems Division</p>
        <p className="mt-1">Class 12 Hackathon Project - IoT & Automation Track</p>
      </footer>
    </div>
  );
}
