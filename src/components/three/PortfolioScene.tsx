import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { pointerState, scrollState } from "@/lib/motion-state";

const AMBER = "#ffb257";
const WARM_WHITE = "#fff4e0";
const COOL_BLUE = "#8fb7ff";

/** Liquid-glass core object — the orchestrator. Tilts toward the cursor,
 *  drifts with it, and spins/shifts with page scroll progress. */
function CoreObject() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const t = state.clock.elapsedTime;
    pointerState.x += (pointerState.tx - pointerState.x) * (1 - Math.exp(-4 * delta));
    pointerState.y += (pointerState.ty - pointerState.y) * (1 - Math.exp(-4 * delta));

    const g = group.current;
    if (!g) return;
    const p = scrollState.progress;
    g.rotation.y = pointerState.x * 0.45 + p * Math.PI * 2 + t * 0.08;
    g.rotation.x = -pointerState.y * 0.3 + Math.sin(t * 0.3) * 0.05;
    g.position.x = pointerState.x * 0.7;
    g.position.y = pointerState.y * 0.5 + Math.sin(t * 0.7) * 0.18;
    g.scale.setScalar(1 + Math.sin(t * 0.6) * 0.025 + p * 0.12);

    if (shell.current) {
      shell.current.rotation.y = -t * 0.12;
      shell.current.rotation.x = t * 0.05;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.15;
    if (ringB.current) ringB.current.rotation.z = -t * 0.1;
  });

  return (
    <group ref={group}>
      {/* Inner glowing core */}
      <mesh>
        <icosahedronGeometry args={[0.55, 2]} />
        <meshStandardMaterial
          color={AMBER}
          emissive={AMBER}
          emissiveIntensity={1.8}
          roughness={0.3}
        />
      </mesh>
      <pointLight intensity={40} distance={12} decay={2} color={AMBER} />

      {/* Liquid-glass shell */}
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshPhysicalMaterial
          color={"#14110c"}
          metalness={0.15}
          roughness={0.06}
          clearcoat={1}
          clearcoatRoughness={0.08}
          iridescence={0.25}
          iridescenceIOR={1.35}
          envMapIntensity={1.8}
        />
      </mesh>

      {/* Wireframe containment shell */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial color={WARM_WHITE} wireframe transparent opacity={0.07} />
      </mesh>

      {/* Orbital rings */}
      <mesh ref={ringA} rotation={[Math.PI / 2.6, 0.3, 0]}>
        <torusGeometry args={[3.1, 0.008, 8, 160]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.35} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.8, -0.5, 0.4]}>
        <torusGeometry args={[3.6, 0.006, 8, 160]} />
        <meshBasicMaterial color={COOL_BLUE} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function Starfield({ count = 700 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 7 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const p = points.current;
    if (!p) return;
    p.rotation.y += delta * 0.02;
    p.rotation.x = pointerState.y * 0.06;
    p.rotation.z = pointerState.x * 0.04 + scrollState.progress * 0.5;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={WARM_WHITE}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function PortfolioScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} color="#2a2530" />
      <directionalLight position={[6, 8, 6]} intensity={1.1} color={WARM_WHITE} />
      <CoreObject />
      <Starfield />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 5, 0]} scale={[10, 10, 1]} color={WARM_WHITE} />
        <Lightformer intensity={1.4} color={AMBER} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 2, 1]} />
        <Lightformer intensity={1.2} color={COOL_BLUE} position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
      </Environment>
    </Canvas>
  );
}
