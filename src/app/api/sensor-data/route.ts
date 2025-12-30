import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import SensorData from '@/models/SensorData';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const infraId = searchParams.get('infraId');
    const limit = parseInt(searchParams.get('limit') || '10');

    let query = {};
    if (infraId) {
      query = { infrastructureId: infraId };
    }

    // Get the most recent sensor readings
    const readings = await SensorData.find(query)
      .sort({ timestamp: -1 })
      .limit(limit)
      .lean();

    return NextResponse.json(readings.reverse());
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
