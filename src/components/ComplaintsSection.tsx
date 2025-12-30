'use client';

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Camera, ImageIcon, X } from 'lucide-react';

interface ComplaintsProps {
  complaints: any[];
  onRefresh: () => void;
}

export const ComplaintsSection: React.FC<ComplaintsProps> = ({ complaints, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'other',
    citizenName: '',
    photoUrl: '',
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Photo must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPhotoPreview(base64String);
        setFormData({ ...formData, photoUrl: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    setFormData({ ...formData, photoUrl: '' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success('Complaint submitted successfully!');
        setFormData({ title: '', description: '', type: 'other', citizenName: '', photoUrl: '' });
        setPhotoPreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        onRefresh();
      } else {
        const errorData = await res.json();
        toast.error(`Error: ${errorData.error || 'Failed to submit'}`);
      }
    } catch (error: any) {
      toast.error(`Network Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Report an Issue</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              placeholder="Your Name" 
              value={formData.citizenName}
              onChange={(e) => setFormData({...formData, citizenName: e.target.value})}
              required
            />
            <Input 
              placeholder="Issue Title" 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
            <Select 
              value={formData.type}
              onValueChange={(val) => setFormData({...formData, type: val})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="streetlight">Streetlight</SelectItem>
                <SelectItem value="traffic_signal">Traffic Signal</SelectItem>
                <SelectItem value="water">Water Supply</SelectItem>
                <SelectItem value="waste">Waste Management</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Textarea 
              placeholder="Describe the problem..." 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
            
            {/* Photo Upload Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Attach Photo (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                ref={fileInputRef}
                className="hidden"
                id="photo-upload"
              />
              {!photoPreview ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-xs text-gray-500">Click to upload photo</p>
                  <p className="text-[10px] text-gray-400">Max 5MB (JPG, PNG)</p>
                </div>
              ) : (
                <div className="relative">
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    className="w-full h-32 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Complaint'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Recent Complaints</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {complaints.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No complaints yet.</p>
            ) : (
              complaints.map((c, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{c.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{c.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase">{c.type}</span>
                        <span className="text-[10px] text-gray-400">by {c.citizenName}</span>
                        <span className="text-[10px] text-gray-400">{new Date(c.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      c.status === 'resolved' ? 'bg-green-100 text-green-700' : 
                      c.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {c.status}
                    </span>
                  </div>
                  {/* Show photo if attached */}
                  {c.photoUrl && (
                    <div className="mt-3">
                      <img 
                        src={c.photoUrl} 
                        alt="Issue photo" 
                        className="w-full h-40 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
