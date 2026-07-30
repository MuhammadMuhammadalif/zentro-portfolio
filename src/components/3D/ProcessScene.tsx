'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

// Central Rotating Gear
function CentralGear() {
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <cylinderGeometry args={[2, 2, 0.5, 8]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  );
}

// Orbiting Nodes (representing process steps)
function OrbitingNode({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const mesh = useRef<Mesh>(null);
  const groupRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.elapsedTime * 0.3 * speed;
    }
    if (mesh.current) {
      mesh.current.rotation.x += 0.02;
      mesh.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={mesh} position={position}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// Floating Rings (representing workflow connections)
function FloatingRing({ radius, color, speed }: { radius: number; color: string; speed: number }) {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.elapsedTime * speed) * 0.3;
      mesh.current.rotation.z += 0.005 * speed;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.1, 16, 50]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.4}
        metalness={0.7}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Data Particles (small floating cubes)
function DataParticle({ position, delay }: { position: [number, number, number]; delay: number }) {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.elapsedTime + delay;
      mesh.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5;
      mesh.current.rotation.x += 0.02;
      mesh.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial
        color="#ff006e"
        emissive="#ff006e"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#00d4ff" />
      <pointLight position={[5, -5, -5]} intensity={0.4} color="#ff006e" />

      {/* Central Gear */}
      <CentralGear />

      {/* Orbiting Nodes */}
      <OrbitingNode position={[3, 0, 0]} color="#00d4ff" speed={1} />
      <OrbitingNode position={[0, 3, 0]} color="#ff006e" speed={0.8} />
      <OrbitingNode position={[-3, 0, 0]} color="#8b5cf6" speed={1.2} />
      <OrbitingNode position={[0, -3, 0]} color="#10b981" speed={0.9} />
      <OrbitingNode position={[2.1, 2.1, 0]} color="#f59e0b" speed={1.1} />

      {/* Floating Rings */}
      <FloatingRing radius={3.5} color="#00d4ff" speed={0.5} />
      <FloatingRing radius={4.2} color="#ff006e" speed={0.3} />

      {/* Data Particles */}
      <DataParticle position={[1.5, 1, 1]} delay={0} />
      <DataParticle position={[-1.5, -1, 1]} delay={1} />
      <DataParticle position={[1, -1.5, -1]} delay={2} />
      <DataParticle position={[-1, 1.5, -1]} delay={3} />
      <DataParticle position={[2, 0.5, 0.5]} delay={1.5} />
      <DataParticle position={[-2, -0.5, -0.5]} delay={2.5} />
    </>
  );
}

export function ProcessScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="h-full w-full"
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
