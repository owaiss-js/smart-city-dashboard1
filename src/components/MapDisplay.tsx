'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapDisplayProps {
  items: any[];
}

// Custom component to handle map centering
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export const MapDisplay: React.FC<MapDisplayProps> = ({ items }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-full w-full bg-slate-100 animate-pulse rounded-xl flex items-center justify-center">Loading Map...</div>;

  // Default center (NYC based on seed data)
  const defaultCenter: [number, number] = [40.7128, -74.006];

  return (
    <div className="h-full w-full rounded-xl overflow-hidden border border-slate-200">
      <MapContainer 
        center={defaultCenter} 
        zoom={14} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Marker 
            key={item._id} 
            position={[item.location.lat, item.location.lng]}
          >
            <Popup>
              <div className="p-1">
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-slate-600 uppercase">{item.type.replace('_', ' ')}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    item.status === 'healthy' ? 'bg-green-500' : 
                    item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span className="text-xs font-medium capitalize">{item.status}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Score: {item.healthScore}%</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
