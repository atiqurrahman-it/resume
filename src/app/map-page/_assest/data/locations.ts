// data/locations.ts
export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  totalDeclarations: number;
  dutyPaid: number;
  riskScore: "Low" | "Medium" | "High";
  ftaUsed: string;
  value: number;
  connections: string[];
}

export interface TradeLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  totalDeclarations: number;
  dutyPaid: number;
  riskScore: "Low" | "Medium" | "High";
  ftaUsed: string;
  value: number;
  connections: string[];
}

export interface Connection {
  from: TradeLocation;
  to: TradeLocation;
}

export const sampleLocations: TradeLocation[] = [
  {
    id: "usa",
    name: "USA",
    lat: 39.8283,
    lng: -98.5795,
    totalDeclarations: 12450,
    dutyPaid: 8300000,
    riskScore: "Low",
    ftaUsed: "CEPA",
    value: 100,
    connections: ["india", "australia"],
  },
  {
    id: "india",
    name: "India",
    lat: 20.5937,
    lng: 78.9629,
    totalDeclarations: 56200,
    dutyPaid: 21500000,
    riskScore: "Medium",
    ftaUsed: "CEPA",
    value: 85,
    connections: ["usa", "germany", "turkey"],
  },
  {
    id: "germany",
    name: "Germany",
    lat: 51.1657,
    lng: 10.4515,
    totalDeclarations: 18750,
    dutyPaid: 11200000,
    riskScore: "Low",
    ftaUsed: "EU",
    value: 70,
    connections: ["india", "australia"],
  },
  {
    id: "australia",
    name: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    totalDeclarations: 9800,
    dutyPaid: 5400000,
    riskScore: "Low",
    ftaUsed: "AUSFTA",
    value: 55,
    connections: ["usa", "germany"],
  },
  {
    id: "turkey",
    name: "Turkey",
    lat: 38.9637,
    lng: 35.2433,
    totalDeclarations: 7320,
    dutyPaid: 3800000,
    riskScore: "Medium",
    ftaUsed: "Customs Union",
    value: 45,
    connections: ["india", "germany"],
  },
  {
    id: "uae",
    name: "UAE",
    lat: 23.4241,
    lng: 53.8478,
    totalDeclarations: 21340,
    dutyPaid: 12700000,
    riskScore: "Low",
    ftaUsed: "CEPA",
    value: 95,
    connections: ["india", "usa"],
  },
];

export function generateConnections(locations: Location[]): Connection[] {
  const connectionsMap = new Map<string, Connection>();
  
  locations.forEach((location) => {
    location.connections.forEach((targetId) => {
      const target = locations.find((l) => l.id === targetId);
      if (target) {
        const key = [location.id, target.id].sort().join("-");
        if (!connectionsMap.has(key)) {
          connectionsMap.set(key, { from: location, to: target });
        }
      }
    });
  });
  
  return Array.from(connectionsMap.values());
}



export function getLocationById(id: string, locations: Location[]): Location | undefined {
  return locations.find((loc) => loc.id === id);
}