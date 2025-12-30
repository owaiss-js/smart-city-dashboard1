/**
 * IoT Simulation Engine
 * 
 * This is the "brain" of our IoT simulation!
 * It pretends to be real sensors sending data from around the city.
 * 
 * HOW IT WORKS:
 * 1. We get all infrastructure items from the database
 * 2. For each item, we generate a random sensor reading (like a real IoT device would)
 * 3. We check if the value is "bad" (anomaly detection)
 * 4. We update the infrastructure's health status
 * 
 * This makes the dashboard look like it's receiving real data!
 */
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Infrastructure from '@/models/Infrastructure';
import SensorData from '@/models/SensorData';

export async function GET() {
  try {
    // Step 1: Connect to our MongoDB database
    await connectDB();
    
    // Step 2: Get all infrastructure items (streetlights, water pipes, etc.)
    const infrastructures = await Infrastructure.find({});
    
    // If no infrastructure exists, we can't simulate anything
    if (infrastructures.length === 0) {
      return NextResponse.json({ message: 'No infrastructure found. Please seed data first.' }, { status: 400 });
    }

    // This array will store all the new sensor readings we create
    const newSensorReadings = [];

    // Step 3: Loop through each infrastructure item and generate sensor data
    for (const infra of infrastructures) {
      let value = 0;        // The sensor reading value
      let metricType = '';  // What type of measurement (brightness, pressure, etc.)
      let unit = '';        // The unit of measurement (%, PSI, etc.)

      // Generate different data based on what type of infrastructure it is
      // This is like how real sensors work - each type measures different things!
      switch (infra.type) {
        case 'streetlight':
          // Streetlights measure brightness (0-100%)
          // A low value might mean the bulb is broken
          value = Math.floor(Math.random() * 100);
          metricType = 'brightness';
          unit = '%';
          break;
          
        case 'traffic_signal':
          // Traffic signals are either working (1) or broken (0)
          // We make it fail 5% of the time to simulate real-world issues
          value = Math.random() > 0.05 ? 1 : 0; 
          metricType = 'status_code';
          unit = 'binary';
          break;
          
        case 'water_pipe':
          // Water pipes measure pressure in PSI (pounds per square inch)
          // Normal pressure is between 40-70 PSI
          // Too high or too low could mean a leak or burst!
          value = Math.floor(Math.random() * 40) + 35; 
          metricType = 'pressure';
          unit = 'PSI';
          break;
          
        case 'waste_bin':
          // Waste bins measure how full they are (0-100%)
          // When they're too full, they need to be emptied
          value = Math.floor(Math.random() * 100);
          metricType = 'fill_level';
          unit = '%';
          break;
      }

      // Step 4: Save the sensor reading to our database (for the charts)
      const reading = await SensorData.create({
        infrastructureId: infra._id,
        value,
        metricType,
        unit,
        timestamp: new Date(),
      });

      // ============================================
      // ANOMALY DETECTION ALGORITHM
      // ============================================
      // This is where we check if something is wrong!
      // We compare the sensor value to "safe" thresholds
      
      let newStatus = 'healthy';      // Assume everything is fine
      let healthScoreReduction = 0;   // How much to reduce the health score

      // Check water pipe pressure
      if (infra.type === 'water_pipe') {
        if (value > 70 || value < 30) {
          // DANGER! Pressure is way too high or low
          newStatus = 'critical';
          healthScoreReduction = 10;
        } else if (value > 65 || value < 40) {
          // Warning - pressure is getting risky
          newStatus = 'warning';
          healthScoreReduction = 3;
        }
      }

      // Check waste bin fill level
      if (infra.type === 'waste_bin' && value > 85) {
        // Bin is almost full! Needs attention
        newStatus = value > 95 ? 'critical' : 'warning';
        healthScoreReduction = 5;
      }

      // Check streetlight brightness
      if (infra.type === 'streetlight' && value < 5) {
        // Light is barely on - bulb might be broken
        newStatus = 'warning';
        healthScoreReduction = 2;
      }

      // Check traffic signal status
      if (infra.type === 'traffic_signal' && value === 0) {
        // Traffic signal is completely down - CRITICAL!
        newStatus = 'critical';
        healthScoreReduction = 15;
      }

      // Step 5: Calculate the new health score
      // If healthy, the score slowly recovers. If not, it drops.
      const recovery = newStatus === 'healthy' ? 1 : 0;
      const currentScore = infra.healthScore || 100;
      const finalScore = Math.max(0, Math.min(100, currentScore - healthScoreReduction + recovery));

      // Step 6: Update the infrastructure record in the database
      await Infrastructure.findByIdAndUpdate(infra._id, { 
        status: newStatus,
        healthScore: finalScore,
        // If it's critical, log that maintenance was triggered
        lastMaintenance: newStatus === 'critical' ? new Date() : infra.lastMaintenance
      });

      newSensorReadings.push(reading);
    }

    // Return success message with how many readings were processed
    return NextResponse.json({ 
      success: true, 
      message: 'City IoT Sync Complete', 
      packetsProcessed: newSensorReadings.length 
    });
  } catch (error: any) {
    // If something goes wrong, return an error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
