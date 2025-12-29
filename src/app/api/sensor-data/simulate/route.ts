import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Infrastructure from '@/models/Infrastructure';
import SensorData from '@/models/SensorData';

/**
 * IoT Simulation Engine
 * 
 * This route simulates a city-wide IoT network broadcasting data.
 * It iterates through all infrastructure units and generates realistic sensor values.
 * It also performs 'threshold-based' anomaly detection.
 */
export async function GET() {
  try {
    await connectDB();
    const infrastructures = await Infrastructure.find({});
    
    // If no infrastructure exists, we can't simulate
    if (infrastructures.length === 0) {
      return NextResponse.json({ message: 'No infrastructure found. Please seed data first.' }, { status: 400 });
    }

    const newSensorReadings = [];

    for (const infra of infrastructures) {
      let value = 0;
      let metricType = '';
      let unit = '';

      // Logic to generate 'realistic' data based on infrastructure type
      switch (infra.type) {
        case 'streetlight':
          // Streetlights are usually off during day, on during night. 
          // We simulate a brightness value (0-100)
          value = Math.floor(Math.random() * 100);
          metricType = 'brightness';
          unit = '%';
          break;
        case 'traffic_signal':
          // 1 for active/healthy, 0 for fault
          value = Math.random() > 0.05 ? 1 : 0; 
          metricType = 'status_code';
          unit = 'binary';
          break;
        case 'water_pipe':
          // Normal pressure is between 40-70 PSI
          // We add some 'jitter' to make the graph look natural
          value = Math.floor(Math.random() * 40) + 35; 
          metricType = 'pressure';
          unit = 'PSI';
          break;
        case 'waste_bin':
          // Fill level (0-100)
          value = Math.floor(Math.random() * 100);
          metricType = 'fill_level';
          unit = '%';
          break;
      }

      // 1. Store the sensor data in our time-series collection
      const reading = await SensorData.create({
        infrastructureId: infra._id,
        value,
        metricType,
        unit,
        timestamp: new Date(),
      });

      // 2. RUN ANOMALY DETECTION ALGORITHM
      // We check if values cross specific safety thresholds
      let newStatus = 'healthy';
      let healthScoreReduction = 0;

      if (infra.type === 'water_pipe') {
        if (value > 70 || value < 30) {
          newStatus = 'critical'; // Leak or burst suspected
          healthScoreReduction = 10;
        } else if (value > 65 || value < 40) {
          newStatus = 'warning';
          healthScoreReduction = 3;
        }
      }

      if (infra.type === 'waste_bin' && value > 85) {
        newStatus = value > 95 ? 'critical' : 'warning';
        healthScoreReduction = 5;
      }

      if (infra.type === 'streetlight' && value < 5) {
        // Maybe the bulb is fused
        newStatus = 'warning';
        healthScoreReduction = 2;
      }

      if (infra.type === 'traffic_signal' && value === 0) {
        newStatus = 'critical';
        healthScoreReduction = 15;
      }

      // Calculate new health score (min 0, max 100)
      // If healthy, it slowly recovers over time
      const recovery = newStatus === 'healthy' ? 1 : 0;
      const finalScore = Math.max(0, Math.min(100, (infra.healthScore || 100) - healthScoreReduction + recovery));

      // 3. Update the primary infrastructure record
      await Infrastructure.findByIdAndUpdate(infra._id, { 
        status: newStatus,
        healthScore: finalScore,
        // If it was critical, we simulate a 'maintenance log' update
        lastMaintenance: newStatus === 'critical' ? new Date() : infra.lastMaintenance
      });

      newSensorReadings.push(reading);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'City IoT Sync Complete', 
      packetsProcessed: newSensorReadings.length 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
