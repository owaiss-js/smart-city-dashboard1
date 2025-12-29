'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface ComplaintsProps {
  complaints: any[];
  onRefresh: () => void;
}

export const ComplaintsSection: React.FC<ComplaintsProps> = ({ complaints, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'other',
    citizenName: '',
  });

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
        setFormData({ title: '', description: '', type: 'other', citizenName: '' });
        onRefresh();
      }
    } catch (error) {
      toast.error('Failed to submit complaint');
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
            <Select onValueChange={(val) => setFormData({...formData, type: val})}>
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
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {complaints.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No complaints yet.</p>
            ) : (
              complaints.map((c, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">{c.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{c.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase">{c.type}</span>
                      <span className="text-[10px] text-gray-400">{new Date(c.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    c.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {c.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
