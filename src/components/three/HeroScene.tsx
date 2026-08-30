"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, PointLight } from "three";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMedia";

const GOLD = "#c9a227";
const GOLD_BRIGHT = "#e4c04a";

function Book({ position, rotation }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
      <group position={position} rotation={rotation}>
        <mesh castShadow>
          <boxGeometry args={[0.55, 0.08, 0.4]} />
          <meshStandardMaterial color="#111111" metalness={0.4} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.52, 0.02, 0.37]} />
          <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.2} emissive={GOLD} emissiveIntensity={0.15} />
        </mesh>
      </group>
    </Float>
  );
}

function Pencil({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh position={position} rotation={[0.4, 0.2, 1.1]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.7, 8]} />
        <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.25} />
      </mesh>
    </Float>
  );
}

function Laptop({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.45}>
      <group position={position} rotation={[0.3, -0.5, 0]}>
        <mesh>
          <boxGeometry args={[0.7, 0.04, 0.45]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.28, -0.2]} rotation={[-0.4, 0, 0]}>
          <boxGeometry args={[0.7, 0.42, 0.03]} />
          <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.28, -0.185]} rotation={[-0.4, 0, 0]}>
          <planeGeometry args={[0.62, 0.34]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

function Diploma({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.5}>
      <group position={position} rotation={[0.2, 0.6, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.55, 16]} />
          <meshStandardMaterial color="#f5f0e0" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.1, 0.015, 8, 24]} />
          <meshStandardMaterial color={GOLD_BRIGHT} metalness={0.9} roughness={0.15} />
        </mesh>
      </group>
    </Float>
  );
}

function Board({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.35}>
      <mesh position={position} rotation={[0.15, 0.4, -0.1]}>
        <boxGeometry args={[0.7, 0.45, 0.04]} />
        <meshStandardMaterial color="#0d0d0d" metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  );
}

function MathGlyph({ position }: { position: [number, number, number] }) {
  const ref = useRef<Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.z += d * 0.25;
  });
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.7}>
      <group ref={ref} position={position}>
        <mesh>
          <torusGeometry args={[0.16, 0.025, 8, 32]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const x = state.pointer.x * 0.35;
    const y = state.pointer.y * 0.2;
    ref.current.rotation.y += (x - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x += (-y - ref.current.rotation.x) * 0.04;
  });
  return <group ref={ref}>{children}</group>;
}

function Scene({ dense }: { dense: boolean }) {
  const light = useRef<PointLight>(null);
  useFrame((s) => {
    if (!light.current) return;
    light.current.position.x = Math.sin(s.clock.elapsedTime * 0.4) * 2;
    light.current.position.y = 1.2 + Math.cos(s.clock.elapsedTime * 0.3) * 0.4;
  });

  const sparkles = useMemo(() => (dense ? 80 : 36), [dense]);

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 8, 18]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 2]} intensity={0.55} color="#fff8e7" />
      <pointLight position={[-2, 2, 3]} intensity={1.2} color={GOLD} distance={10} />
      <pointLight ref={light} position={[2, 1.5, 2]} intensity={1.4} color={GOLD_BRIGHT} distance={8} />

      <ParallaxRig>
        <Book position={[-2.2, 1.1, -1]} rotation={[0.2, 0.4, 0.1]} />
        <Book position={[2.4, 0.2, -1.4]} rotation={[-0.2, -0.5, 0.2]} />
        {dense && <Book position={[0.8, 1.6, -2]} rotation={[0.4, 0.2, -0.2]} />}
        <Pencil position={[-1.4, -0.4, 0.4]} />
        <Pencil position={[1.6, 1.3, -0.2]} />
        <Laptop position={[-0.2, -1.1, -0.6]} />
        <Diploma position={[1.8, -0.8, 0.2]} />
        {dense && <Board position={[-2.4, -1.2, -0.8]} />}
        <MathGlyph position={[-1.8, 0.5, 0.6]} />
        {dense && <MathGlyph position={[2.1, 0.9, 0.3]} />}
      </ParallaxRig>

      <Sparkles count={sparkles} scale={[12, 8, 6]} size={2.2} speed={0.35} color={GOLD} opacity={0.55} />
    </>
  );
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile();

  if (reduced) {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.18),transparent_60%)]" />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, mobile ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: !mobile, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene dense={!mobile} />
      </Canvas>
    </div>
  );
}
