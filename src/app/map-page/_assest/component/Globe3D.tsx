// components/Globe3D.tsx
"use client";

import { Line, OrbitControls, Sphere, Trail } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Connection, Location } from "../data/locations";
// import { Location, Connection } from "@/data/locations";

// Helper: Convert lat/lng to Vector3
function latLngToVector3(
  lat: number,
  lng: number,
  radius: number,
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = lng * (Math.PI / 180);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

// Helper: Generate arc points between two points on sphere
function getArcPoints(
  start: THREE.Vector3,
  end: THREE.Vector3,
  segments: number = 50,
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const radius = start.length();
  const angle = start.angleTo(end);
  const axis = new THREE.Vector3().crossVectors(start, end).normalize();

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const theta = angle * t;
    const q = new THREE.Quaternion().setFromAxisAngle(axis, theta);
    const point = start
      .clone()
      .applyQuaternion(q)
      .normalize()
      .multiplyScalar(radius);
    const outwardFactor = Math.sin(Math.PI * t) * 0.05;
    const outwardDir = point.clone().normalize();
    points.push(point.clone().add(outwardDir.multiplyScalar(outwardFactor)));
  }
  return points;
}

// Animated flow particle on a line
const FlowParticle = ({
  start,
  end,
  color,
  speed = 0.5,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);
  const points = useMemo(() => getArcPoints(start, end, 100), [start, end]);

  useFrame((_, delta) => {
    setProgress((prev) => {
      let next = prev + delta * speed;
      if (next >= 1) next = 0;
      return next;
    });
  });

  const position = useMemo(() => {
    const idx = Math.floor(progress * (points.length - 1));
    return points[idx];
  }, [progress, points]);

  return (
    <mesh ref={meshRef} position={position}>
      {/* TODO */}
      {/* <sphereGeometry args={[0.03, 8, 8]} /> */}
      {/* <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
      /> */}
      {/* <pointLight intensity={0.3} distance={1} color={color} /> */}
    </mesh>
  );
};

// Glowing point for location
function LocationPoint({
  location,
  isSelected,
  isConnected,
  onClick,
  onHover,
  radius,
}: {
  location: Location;
  isSelected: boolean;
  isConnected: boolean;
  onClick: () => void;
  onHover: (hovered: boolean, event?: MouseEvent) => void;
  radius: number;
}) {
  const position = useMemo(
    () => latLngToVector3(location.lat, location.lng, radius),
    [location, radius],
  );
  const glowIntensity = isSelected ? 1.2 : isConnected ? 0.8 : 0.4;

  return (
    <mesh
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={(e) => onHover(true, e.nativeEvent as MouseEvent)}
      onPointerOut={() => onHover(false)}
    >
      <sphereGeometry args={[0.045, 16, 16]} />
      <meshStandardMaterial
        color={isSelected ? "#ff3366" : "#00d4ff"}
        emissive={isSelected ? "#ff3366" : "#00d4ff"}
        emissiveIntensity={glowIntensity}
        metalness={0.8}
        roughness={0.2}
      />
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial
          color={isSelected ? "#ff6699" : "#00d4ff"}
          transparent
          opacity={0.12}
        />
      </mesh>
    </mesh>
  );
}

// Connection line with glow and particles
function ConnectionLine({
  connection,
  isHighlighted,
  radius,
  isVisible,
}: {
  connection: Connection;
  isHighlighted: boolean;
  radius: number;
  isVisible: boolean;
}) {
  const startVec = useMemo(
    () => latLngToVector3(connection.from.lat, connection.from.lng, radius),
    [connection, radius],
  );
  const endVec = useMemo(
    () => latLngToVector3(connection.to.lat, connection.to.lng, radius),
    [connection, radius],
  );
  const points = useMemo(
    () => getArcPoints(startVec, endVec, 80),
    [startVec, endVec],
  );
  const lineColor = isHighlighted ? "#ff6699" : "#00d4ff";
  const lineOpacity = isHighlighted ? 1 : 0.5;

  if (!isVisible) return null;

  return (
    <group>
      <Line
        points={points}
        color={lineColor}
        lineWidth={1}
        transparent
        opacity={lineOpacity}
        blending={THREE.AdditiveBlending}
      />
      {isHighlighted && (
        <Trail
          width={0.8}
          length={6}
          color={lineColor}
          attenuation={(t) => t * t}
        >
          <mesh position={startVec}>
            <sphereGeometry args={[0.02, 4, 4]} />
          </mesh>
        </Trail>
      )}
      <FlowParticle
        start={startVec}
        end={endVec}
        color={lineColor}
        speed={0.4}
      />
      <FlowParticle
        start={endVec}
        end={startVec}
        color={lineColor}
        speed={0.3}
      />
    </group>
  );
}

// Main Globe Scene
function GlobeScene({
  locations,
  connections,
  selectedId,
  connectedIds,
  onLocationClick,
  onLocationHover,
}: {
  locations: Location[];
  connections: Connection[];
  selectedId: string | null;
  connectedIds: string[];
  onLocationClick: (location: Location) => void;
  onLocationHover: (location: Location | null, event?: MouseEvent) => void;
}) {
  const radius = 2;
  const earthTexture = useMemo(
    () =>
      new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
      ),
    [],
  );
  const bumpTexture = useMemo(
    () =>
      new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg",
      ),
    [],
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <pointLight
        position={[0, 0, 0]}
        intensity={0.5}
        color="#00d4ff"
        distance={10}
      />

      <Sphere args={[radius, 128, 128]}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.05}
          metalness={0.2}
          roughness={0.8}
          color="#ffffff"
        />
      </Sphere>

      <Sphere args={[radius + 0.02, 64, 64]}>
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {connections.map((conn, idx) => {
        const isHighlighted =
          selectedId &&
          (conn.from.id === selectedId || conn.to.id === selectedId);
        const isVisible =
          !selectedId ||
          isHighlighted ||
          connectedIds.includes(conn.from.id) ||
          connectedIds.includes(conn.to.id);
        return (
          <ConnectionLine
            key={`${conn.from.id}-${conn.to.id}-${idx}`}
            connection={conn}
            isHighlighted={!!isHighlighted}
            radius={radius}
            isVisible={isVisible}
          />
        );
      })}

      {locations.map((location) => {
        const isSelected = selectedId === location.id;
        const isConnected = connectedIds.includes(location.id);
        return (
          <LocationPoint
            key={location.id}
            location={location}
            isSelected={isSelected}
            isConnected={isConnected}
            radius={radius}
            onClick={() => onLocationClick(location)}
            onHover={(hovered, event) =>
              onLocationHover(hovered ? location : null, event)
            }
          />
        );
      })}
    </>
  );
}

// Main Globe3D component with Canvas and effects
export default function Globe3D(props: {
  locations: Location[];
  connections: Connection[];
  selectedLocationId: string | null;
  connectedIds: string[];
  onLocationClick: (location: Location) => void;
  onLocationHover: (location: Location | null, event?: MouseEvent) => void;
}) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-black/40">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom
            enablePan
            zoomSpeed={0.8}
            rotateSpeed={0.8}
            enableDamping
            dampingFactor={0.05}
          />
          <GlobeScene
            locations={props.locations}
            connections={props.connections}
            selectedId={props.selectedLocationId} // ← map here
            connectedIds={props.connectedIds}
            onLocationClick={props.onLocationClick}
            onLocationHover={props.onLocationHover}
          />
          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
