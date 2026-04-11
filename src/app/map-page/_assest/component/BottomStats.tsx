// components/BottomStats.tsx
"use client";

import { Location } from "../data/locations";


interface BottomStatsProps {
  locations: Location[];
  selectedLocationId: string | null;
}

export default function BottomStats({ locations, selectedLocationId }: BottomStatsProps) {
  const totalDeclarations = locations.reduce((sum, loc) => sum + loc.totalDeclarations, 0);
  const totalDutyPaid = locations.reduce((sum, loc) => sum + loc.dutyPaid, 0);
  const topPartner = locations.reduce((prev, curr) => 
    curr.totalDeclarations > prev.totalDeclarations ? curr : prev
  );

  const selectedLocation = locations.find((l) => l.id === selectedLocationId);

  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-6">
        <div>
          <div className="text-xs text-gray-400">Total Declarations</div>
          <div className="text-2xl font-bold text-cyan-300">{totalDeclarations.toLocaleString()}</div>
        </div>
        <div className="w-px h-10 bg-gray-700" />
        <div>
          <div className="text-xs text-gray-400">Total Duty Paid</div>
          <div className="text-2xl font-bold text-cyan-300">AED {(totalDutyPaid / 1e6).toFixed(1)}M</div>
        </div>
        <div className="w-px h-10 bg-gray-700" />
        <div>
          <div className="text-xs text-gray-400">Top Partner</div>
          <div className="text-xl font-semibold text-white">{topPartner.name}</div>
        </div>
        <div className="w-px h-10 bg-gray-700" />
        <div>
          <div className="text-xs text-gray-400">Average Duty Saved/Month</div>
          <div className="text-xl font-semibold text-green-400">AED 180k</div>
        </div>
      </div>
      {selectedLocation && (
        <div className="glass-card-light px-4 py-2 border-l-4 border-cyan-400">
          <div className="text-xs text-gray-400">Selected: {selectedLocation.name}</div>
          <div className="text-sm text-cyan-300">
            Risk Score: {selectedLocation.riskScore} | FTA: {selectedLocation.ftaUsed}
          </div>
        </div>
      )}
    </div>
  );
}