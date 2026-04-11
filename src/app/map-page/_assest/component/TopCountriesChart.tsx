/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { Location } from "../data/locations";

interface TopCountriesChartProps {
  locations: Location[];
}

// Move CustomTooltip outside the component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-2 text-xs">
        <div className="text-cyan-300">{payload[0].payload.name}</div>
        <div className="text-white">Declarations: {payload[0].payload.declarations.toLocaleString()}</div>
        <div className="text-gray-400">Duty Paid: AED {payload[0].payload.dutyPaid.toFixed(1)}M</div>
      </div>
    );
  }
  return null;
};

export default function TopCountriesChart({ locations }: TopCountriesChartProps) {
  const data = locations
    .map((loc) => ({
      name: loc.name,
      declarations: loc.totalDeclarations,
      dutyPaid: loc.dutyPaid / 1e6, // in millions
    }))
    .sort((a, b) => b.declarations - a.declarations);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="vertical" margin={{ left: 40, right: 20, top: 10, bottom: 10 }}>
        <XAxis type="number" stroke="#4a5568" tick={{ fill: "#9ca3af", fontSize: 10 }} />
        <YAxis type="category" dataKey="name" stroke="#4a5568" tick={{ fill: "#9ca3af", fontSize: 11 }} width={70} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 212, 255, 0.1)" }} />
        <Bar dataKey="declarations" radius={[0, 4, 4, 0]}>
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={`hsl(${190 + idx * 20}, 80%, 55%)`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}