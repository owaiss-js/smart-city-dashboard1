import mongoose from 'mongoose';

const SensorDataSchema = new mongoose.Schema({
  infrastructureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Infrastructure', required: true },
  value: { type: Number, required: true },
  unit: String,
  timestamp: { type: Date, default: Date.now },
  metricType: { type: String, required: true }, // e.g., 'brightness', 'pressure', 'fill_level'
}, { timestamps: true });

export default mongoose.models.SensorData || mongoose.model('SensorData', SensorDataSchema);
