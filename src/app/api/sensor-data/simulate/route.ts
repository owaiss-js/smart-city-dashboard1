import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Infrastructure from '@/models/Infrastructure';
import SensorData from '@/models/SensorData';

export async function GET() {
  try {
    await connectDB();
    const infrastructures = await Infrastructure.find({});
    const newSensorReadings = [];

    for (const infra of infrastructures) {
      let value = 0;
      let metricType = '';
      let unit = '';

      switch (infra.type) {
        case 'streetlight':
          value = Math.floor(Math.random() * 100);
          metricType = 'brightness';
          unit = '%';
          break;
        case 'traffic_signal':
          value = Math.random() > 0.1 ? 1 : 0; // 1 for active, 0 for fault
          metricType = 'status_code';
          unit = 'binary';
          break;
        case 'water_pipe':
          value = Math.floor(Math.random() * 50) + 30; // 30-80 PSI
          metricType = 'pressure';
          unit = 'PSI';
          break;
        case 'waste_bin':
          value = Math.floor(Math.random() * 100);
          metricType = 'fill_level';
          unit = '%';
          break;
      }

      const reading = await SensorData.create({
        infrastructureId: infra._id,
        value,
        metricType,
        unit,
        timestamp: new Date(),
      });

      // Simple Anomaly Detection
      let newStatus = 'healthy';
      if (infra.type === 'water_pipe' && (value > 75 || value < 35)) newStatus = 'warning';
      if (infra.type === 'waste_bin' && value > 90) newStatus = 'critical';
      if (infra.type === 'streetlight' && value < 10) newStatus = 'warning';

      await Infrastructure.findByIdAndUpdate(infra._id, { 
        status: newStatus,
        healthScore: Math.max(0, Math.min(100, infra.healthScore + (newStatus === 'healthy' ? 1 : -5)))
      });

      newSensorReadings.push(reading);
    }

    return NextResponse.json({ message: 'Simulation complete', readings: newSensorReadings });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
