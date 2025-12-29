import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Infrastructure from '@/models/Infrastructure';
import Complaint from '@/models/Complaint';

export async function GET() {
  try {
    await connectDB();

    // Clear existing data (optional, but good for a fresh start)
    await Infrastructure.deleteMany({});
    await Complaint.deleteMany({});

    const sampleInfrastructure = [
      {
        name: 'Street Light #101',
        type: 'streetlight',
        status: 'healthy',
        location: { lat: 40.7128, lng: -74.006, address: 'Main St & 5th Ave' },
        healthScore: 95,
      },
      {
        name: 'Traffic Signal #42',
        type: 'traffic_signal',
        status: 'warning',
        location: { lat: 40.7138, lng: -74.007, address: 'Broadway & Wall St' },
        healthScore: 65,
      },
      {
        name: 'Water Main A',
        type: 'water_pipe',
        status: 'healthy',
        location: { lat: 40.7118, lng: -74.005, address: 'Sub-surface West' },
        healthScore: 88,
      },
      {
        name: 'Smart Bin Central',
        type: 'waste_bin',
        status: 'critical',
        location: { lat: 40.7148, lng: -74.008, address: 'Central Park Entrance' },
        healthScore: 20,
      },
    ];

    await Infrastructure.insertMany(sampleInfrastructure);

    const sampleComplaints = [
      {
        title: 'Streetlight flickering',
        description: 'The light near my house is flickering all night.',
        type: 'streetlight',
        status: 'pending',
        location: { lat: 40.7128, lng: -74.006, address: 'Main St & 5th Ave' },
        citizenName: 'John Doe',
      },
    ];

    await Complaint.insertMany(sampleComplaints);

    return NextResponse.json({ message: 'Database seeded successfully!' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
