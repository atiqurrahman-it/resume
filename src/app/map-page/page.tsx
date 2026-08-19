"use client";

import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import BottomStats from "./_assest/component/BottomStats";
import FilterBar from "./_assest/component/FilterBar";
import SummaryCards from "./_assest/component/SummaryCards";
import TopCommodityChart from "./_assest/component/TopCommodityChart";
import TopCountriesChart from "./_assest/component/TopCountriesChart";
import {
  generateConnections,
  sampleLocations,
  TradeLocation,
} from "./_assest/data/locations";

const Globe3D = dynamic(() => import("./_assest/component/Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black/50 rounded-2xl">
      <div className="text-cyan-400 animate-pulse">Loading 3D Globe...</div>
    </div>
  ),
});

export default function Home() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null,
  );
  const [hoveredLocation, setHoveredLocation] = useState<TradeLocation | null>(
    null,
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const connections = useMemo(() => generateConnections(sampleLocations), []);

  const filteredConnections = useMemo(() => {
    if (regionFilter === "all") return connections;
    const [from, to] = regionFilter.split("→");
    return connections.filter(
      (conn) =>
        (conn.from.id === from && conn.to.id === to) ||
        (conn.from.id === to && conn.to.id === from),
    );
  }, [connections, regionFilter]);

  const getConnectedIds = useCallback(
    (locationId: string | null): string[] => {
      if (!locationId) return [];
      const connectedIds = new Set<string>();
      connections.forEach((conn) => {
        if (conn.from.id === locationId) connectedIds.add(conn.to.id);
        if (conn.to.id === locationId) connectedIds.add(conn.from.id);
      });
      return Array.from(connectedIds);
    },
    [connections],
  );

  const connectedIds = useMemo(
    () => getConnectedIds(selectedLocationId),
    [selectedLocationId, getConnectedIds],
  );

  const handleLocationClick = (location: TradeLocation) => {
    setSelectedLocationId((prev) =>
      prev === location.id ? null : location.id,
    );
  };

  const handleLocationHover = (
    location: TradeLocation | null,
    event?: MouseEvent,
  ) => {
    setHoveredLocation(location);
    if (location && event) {
      setTooltipPosition({ x: event.clientX + 15, y: event.clientY - 30 });
    }
  };

  const regionOptions = useMemo(() => {
    const pairs = new Set<string>();
    connections.forEach((conn) => {
      pairs.add(`${conn.from.name}→${conn.to.name}`);
      pairs.add(`${conn.to.name}→${conn.from.name}`);
    });
    return Array.from(pairs).sort();
  }, [connections]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <div className="fixed inset-0 z-0">
        {/* Space/galaxy background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark overlay so content stays readable */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Cyan radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-blue-950/10 to-transparent" />
        {/* Subtle cyan grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 max-w-[1600px]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Global Trade Nexus
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Real-time trade flow visualization
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <FilterBar
          dateRange={dateRange}
          setDateRange={setDateRange}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          regionOptions={regionOptions}
        />

        <div className="mb-6">
          <SummaryCards dateRange={dateRange} regionFilter={regionFilter} />
        </div>

        <div className="grid  grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="glass-card p-1 rounded-2xl h-[600px] relative overflow-hidden">
              {/* <div className="absolute top-3 left-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-cyan-300 border border-cyan-500/30">
                Interactive 3D Globe
              </div> */}
              <Globe3D
                locations={sampleLocations}
                connections={filteredConnections}
                selectedLocationId={selectedLocationId}
                connectedIds={connectedIds}
                onLocationClick={handleLocationClick}
                onLocationHover={handleLocationHover}
              />
            </div>
            {hoveredLocation && (
              <div
                className="fixed z-50 glass-card p-3 pointer-events-none transition-all duration-150"
                style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
              >
                <div className="text-sm font-bold text-cyan-300">
                  {hoveredLocation.name}
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  <div>
                    📦 Declarations:{" "}
                    {hoveredLocation.totalDeclarations.toLocaleString()}
                  </div>
                  <div>
                    💰 Duty Paid: AED{" "}
                    {(hoveredLocation.dutyPaid / 1e6).toFixed(1)}M
                  </div>
                  <div>⚠️ Risk Score: {hoveredLocation.riskScore}</div>
                  <div>📊 FTA Used: {hoveredLocation.ftaUsed}</div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full"></span>
                Top Commodities
              </h3>
              <TopCommodityChart />
            </div>
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full"></span>
                Top Trading Partners
              </h3>
              <TopCountriesChart locations={sampleLocations} />
            </div>
          </div>
        </div>

        <div className="glass-card p-5">
          <BottomStats
            locations={sampleLocations}
            selectedLocationId={selectedLocationId}
          />
        </div>
      </div>
    </main>
  );
}
