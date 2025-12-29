import mongoose from 'mongoose';

const InfrastructureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['streetlight', 'traffic_signal', 'water_pipe', 'waste_bin'], required: true },
  status: { type: String, enum: ['healthy', 'warning', 'critical'], default: 'healthy' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: String,
  },
  lastMaintenance: { type: Date, default: Date.now },
  healthScore: { type: Number, min: 0, max: 100, default: 100 },
}, { timestamps: true });

export default mongoose.models.Infrastructure || mongoose.model('Infrastructure', InfrastructureSchema);
