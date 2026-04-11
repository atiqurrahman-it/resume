// components/SummaryCards.tsx
"use client";

import { DateRange } from "react-day-picker";
import { TrendingUp, TrendingDown, DollarSign, Package, Shield, Zap } from "lucide-react";

interface SummaryCardsProps {
  dateRange: DateRange | undefined;
  regionFilter: string;
}

export default function SummaryCards({ dateRange, regionFilter }: SummaryCardsProps) {
  // Mock data that would be filtered based on date range and region
  const stats = {
    totalImportEntries: 10750,
    totalImportValue: 11750,
    totalExportEntries: 2438,
    totalDutiesPaid: 8920,
    ftaSavingsPercent: 34,
    avgDutySavedPerMonth: 180000,
  };

  const cards = [
    {
      title: "Total Import Entries",
      value: `AED ${stats.totalImportEntries.toLocaleString()}`,
      icon: Package,
      trend: "+12%",
      trendUp: true,
      color: "cyan",
    },
    {
      title: "Total Import Value (CIF)",
      value: `AED ${stats.totalImportValue.toLocaleString()}`,
      icon: DollarSign,
      trend: "+8%",
      trendUp: true,
      color: "blue",
    },
    {
      title: "Total Export Entries",
      value: stats.totalExportEntries.toLocaleString(),
      icon: TrendingUp,
      trend: "+5%",
      trendUp: true,
      color: "green",
    },
    {
      title: "Total Duties Paid",
      value: `AED ${stats.totalDutiesPaid.toLocaleString()}`,
      icon: Shield,
      trend: "-3%",
      trendUp: false,
      color: "orange",
    },
    {
      title: "FTAs Applied Savings",
      value: `${stats.ftaSavingsPercent}%`,
      icon: Zap,
      trend: "+2%",
      trendUp: true,
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="glass-card-light p-4 transition-all hover:scale-105 hover:border-cyan-500/40 duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`text-${card.color}-400`}>
              <card.icon size={20} />
            </div>
            <div
              className={`text-xs flex items-center gap-1 ${
                card.trendUp ? "text-green-400" : "text-red-400"
              }`}
            >
              {card.trend}
              {card.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            </div>
          </div>
          <div className="text-2xl font-bold text-white">{card.value}</div>
          <div className="text-xs text-gray-400 mt-1">{card.title}</div>
        </div>
      ))}
    </div>
  );
}