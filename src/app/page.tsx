'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { StatsOverview } from '@/components/StatsOverview';
import { InfrastructureCard } from '@/components/InfrastructureCard';
import { ComplaintsSection } from '@/components/ComplaintsSection';
import { SensorChart } from '@/components/SensorChart';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Database, RefreshCw, LayoutDashboard, Map as MapIcon, MessageSquare, Activity, ShieldAlert, Thermometer, Droplets, Filter, Wrench, Calendar, X } from 'lucide-react';
import { toast } from 'sonner';

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
  
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [selectedInfra, setSelectedInfra] = useState<any>(null);
  const [maintenanceDate, setMaintenanceDate] = useState('');
  const [maintenanceNotes, setMaintenanceNotes] = useState('');
  const [scheduledMaintenance, setScheduledMaintenance] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const [infraRes, compRes, sensorRes] = await Promise.all([
        fetch('/api/infrastructure'),
        fetch('/api/complaints'),
        fetch('/api/sensor-data?limit=20')
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

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

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

  const filteredInfrastructure = infrastructure.filter((item: any) => {
    const typeMatch = filterType === 'all' || item.type === filterType;
    const statusMatch = filterStatus === 'all' || item.status === filterStatus;
    return typeMatch && statusMatch;
  });

  const criticalItems = infrastructure.filter((item: any) => item.status !== 'healthy');

  const openMaintenanceModal = (item: any) => {
    setSelectedInfra(item);
    setMaintenanceDate('');
    setMaintenanceNotes('');
    setShowMaintenanceModal(true);
  };

  const handleScheduleMaintenance = () => {
    if (!maintenanceDate) {
      toast.error('Please select a date');
      return;
    }
    
    const newMaintenance = {
      id: Date.now(),
      infraId: selectedInfra._id,
      infraName: selectedInfra.name,
      infraType: selectedInfra.type,
      scheduledDate: maintenanceDate,
      notes: maintenanceNotes,
      status: 'scheduled'
    };
    
    setScheduledMaintenance([...scheduledMaintenance, newMaintenance]);
    setShowMaintenanceModal(false);
    toast.success(`Maintenance scheduled for ${selectedInfra.name}`);
  };

  const cancelMaintenance = (id: number) => {
    setScheduledMaintenance(scheduledMaintenance.filter(m => m.id !== id));
    toast.info('Maintenance cancelled');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-blue-600" />
            Smart Monitor
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
        <StatsOverview data={infrastructure} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          <div className="xl:col-span-2 space-y-8">
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  Systems Operational Status
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="w-[130px] h-8 text-xs">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="streetlight">Streetlight</SelectItem>
                        <SelectItem value="traffic_signal">Traffic Signal</SelectItem>
                        <SelectItem value="water_pipe">Water Pipe</SelectItem>
                        <SelectItem value="waste_bin">Waste Bin</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-[120px] h-8 text-xs">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="healthy">Healthy</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loading && infrastructure.length === 0 ? (
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="h-40 bg-white border border-slate-100 animate-pulse rounded-xl" />
                  ))
                ) : filteredInfrastructure.length === 0 ? (
                  <div className="col-span-2 text-center py-8 text-slate-400">
                    No infrastructure matches your filters.
                  </div>
                ) : (
                  filteredInfrastructure.map((item: any) => (
                    <div key={item._id} className="relative group">
                      <InfrastructureCard item={item} />
                      <button 
                        onClick={() => openMaintenanceModal(item)}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500 text-white p-1.5 rounded-lg shadow-lg hover:bg-blue-600"
                        title="Schedule Maintenance"
                      >
                        <Wrench className="w-3 h-3" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </section>

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

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-blue-500" />
                Spatial Analysis
              </h2>
              <div className="h-[400px] rounded-xl relative shadow-sm overflow-hidden">
                <MapDisplay items={filteredInfrastructure} />
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
                      <button 
                        onClick={() => openMaintenanceModal(item)}
                        className="mt-2 text-[10px] bg-white border px-2 py-1 rounded hover:bg-slate-50"
                      >
                        Schedule Fix
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-lg">
                    <p className="text-xs text-slate-400 italic">No anomalies detected by AI models.</p>
                  </div>
                )}
              </div>
            </section>

            {/* Maintenance Scheduling Panel */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-blue-500" />
                Scheduled Maintenance
              </h3>
              <div className="space-y-3">
                {scheduledMaintenance.length === 0 ? (
                  <div className="text-center py-4 border-2 border-dashed border-slate-100 rounded-lg">
                    <p className="text-xs text-slate-400">No maintenance scheduled.</p>
                    <p className="text-[10px] text-slate-300 mt-1">Hover over a system card and click the wrench icon.</p>
                  </div>
                ) : (
                  scheduledMaintenance.map((m) => (
                    <div key={m.id} className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-bold text-blue-800">{m.infraName}</p>
                          <p className="text-[10px] text-blue-600 uppercase">{m.infraType.replace('_', ' ')}</p>
                          <p className="text-[10px] text-blue-500 mt-1">
                            <Calendar className="w-3 h-3 inline mr-1" />
                            {new Date(m.scheduledDate).toLocaleDateString()}
                          </p>
                          {m.notes && <p className="text-[10px] text-slate-500 mt-1 italic">{m.notes}</p>}
                        </div>
                        <button 
                          onClick={() => cancelMaintenance(m.id)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>

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
        </div>
      </footer>

      {/* Maintenance Modal */}
      {showMaintenanceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-slate-800">Schedule Maintenance</h3>
              <button onClick={() => setShowMaintenanceModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {selectedInfra && (
              <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                <p className="font-bold text-slate-700">{selectedInfra.name}</p>
                <p className="text-xs text-slate-500 uppercase">{selectedInfra.type.replace('_', ' ')}</p>
                <p className="text-xs text-slate-400 mt-1">{selectedInfra.location?.address}</p>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Select Date</label>
                <input 
                  type="date" 
                  value={maintenanceDate}
                  onChange={(e) => setMaintenanceDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Notes (Optional)</label>
                <textarea 
                  value={maintenanceNotes}
                  onChange={(e) => setMaintenanceNotes(e.target.value)}
                  placeholder="E.g., Replace bulb, check wiring..."
                  className="w-full border rounded-lg px-3 py-2 text-sm h-20 resize-none"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowMaintenanceModal(false)} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={handleScheduleMaintenance} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
