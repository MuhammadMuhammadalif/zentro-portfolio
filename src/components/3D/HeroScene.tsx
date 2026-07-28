'use client';

'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three';

function SimpleShape() {
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[2, 0.5, 128, 16]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 1;
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh} position={[2, 0, -1]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#ff006e"
        emissive="#ff006e"
        emissiveIntensity={0.15}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#ff006e" />
      <SimpleShape />
      <FloatingSphere />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      className="h-[400px] w-full md:h-[600px]"
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
