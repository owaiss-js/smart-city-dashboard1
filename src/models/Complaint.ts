import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  citizenName: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in_progress', 'resolved'], default: 'pending' },
  photoUrl: { type: String, default: '' },
  location: {
    lat: Number,
    lng: Number,
    address: String,
  },
}, { timestamps: true });

export default mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);
