/* eslint-disable @typescript-eslint/no-explicit-any */
// components/TopCommodityChart.tsx
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Smartphones", value: 8517, color: "#00d4ff" },
  { name: "Petroleum Oil", value: 6234, color: "#3b82f6" },
  { name: "Gold", value: 4892, color: "#fbbf24" },
  { name: "Machinery", value: 3756, color: "#a855f7" },
  { name: "Pharmaceuticals", value: 2910, color: "#ec489a" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-2 text-xs">
        <div className="text-cyan-300">{payload[0].name}</div>
        <div className="text-white">Value: {payload[0].value.toLocaleString()}</div>
        <div className="text-gray-400">{((payload[0].value / 26309) * 100).toFixed(1)}%</div>
      </div>
    );
  }
  return null;
};

export default function TopCommodityChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0.3)" />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          height={36}
          formatter={(value) => <span className="text-gray-300 text-xs">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}