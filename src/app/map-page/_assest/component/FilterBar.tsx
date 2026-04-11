// components/FilterBar.tsx
"use client";

import { DateRange } from "react-day-picker";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface FilterBarProps {
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  regionFilter: string;
  setRegionFilter: (filter: string) => void;
  regionOptions: string[];
}

export default function FilterBar({
  dateRange,
  setDateRange,
  regionFilter,
  setRegionFilter,
  regionOptions,
}: FilterBarProps) {
  return (
    <div className="glass-card p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-300">📅 Date Range:</div>
        <div className="flex gap-2">
          <button
            onClick={() => setDateRange(undefined)}
            className={`px-3 py-1 rounded-lg text-xs transition-all ${
              !dateRange ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50" : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => setDateRange({ from: new Date(2026, 2, 1), to: new Date(2026, 3, 30) })}
            className="px-3 py-1 rounded-lg text-xs bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
          >
            This Month
          </button>
          <button
            onClick={() => setDateRange({ from: new Date(2026, 0, 1), to: new Date(2026, 3, 30) })}
            className="px-3 py-1 rounded-lg text-xs bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
          >
            Last 3 Months
          </button>
        </div>
        {dateRange?.from && (
          <div className="flex items-center gap-1 text-xs text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded-full">
            <CalendarIcon size={12} />
            <span>{format(dateRange.from, "MMM dd")} - {dateRange.to ? format(dateRange.to, "MMM dd") : "Present"}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-300">🌍 Region Route:</div>
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="bg-gray-900/80 border border-cyan-500/30 rounded-lg px-3 py-1.5 text-sm text-cyan-200 focus:outline-none focus:border-cyan-400"
        >
          <option value="all">All Routes</option>
          {regionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}