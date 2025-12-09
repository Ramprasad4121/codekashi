// src/components/Yantra3D.jsx
// 3D Sacred Yantra geometry with React Three Fiber
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Sacred geometry rings component
function SacredRings({ mousePosition }) {
    const groupRef = useRef();
    const innerRingRef = useRef();
    const middleRingRef = useRef();
    const outerRingRef = useRef();

    // Slow rotation animation
    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (groupRef.current) {
            // Subtle mouse follow
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mousePosition.y * 0.1,
                0.02
            );
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                mousePosition.x * 0.1 + t * 0.05,
                0.02
            );
        }

        // Counter-rotating rings
        if (innerRingRef.current) {
            innerRingRef.current.rotation.z = t * 0.15;
        }
        if (middleRingRef.current) {
            middleRingRef.current.rotation.z = -t * 0.1;
        }
        if (outerRingRef.current) {
            outerRingRef.current.rotation.z = t * 0.05;
        }
    });

    // Golden wireframe material
    const goldMaterial = useMemo(() => new THREE.MeshBasicMaterial({
        color: new THREE.Color("#D4A017"),
        wireframe: true,
        transparent: true,
        opacity: 0.3,
    }), []);

    const goldLineMaterial = useMemo(() => new THREE.LineBasicMaterial({
        color: new THREE.Color("#D4A017"),
        transparent: true,
        opacity: 0.4,
    }), []);

    // Create torus geometry for rings
    const createRing = (innerRadius, outerRadius, segments) => {
        return new THREE.TorusGeometry(innerRadius, 0.02, 8, segments);
    };

    // Create triangle points for Sri Yantra-like pattern
    const trianglePoints = useMemo(() => {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6;
            const nextAngle = ((i + 1) * Math.PI * 2) / 6;
            const radius = 0.8;

            points.push(
                new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0),
                new THREE.Vector3(Math.cos(nextAngle) * radius, Math.sin(nextAngle) * radius, 0),
                new THREE.Vector3(0, 0, 0)
            );
        }
        return points;
    }, []);

    return (
        <group ref={groupRef}>
            {/* Center lotus/bindu */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshBasicMaterial color="#D4A017" transparent opacity={0.6} />
            </mesh>

            {/* Inner ring */}
            <mesh ref={innerRingRef} geometry={createRing(0.3, 0.32, 32)} material={goldMaterial} />

            {/* Middle ring */}
            <mesh ref={middleRingRef} geometry={createRing(0.6, 0.62, 48)} material={goldMaterial} />

            {/* Outer ring */}
            <mesh ref={outerRingRef} geometry={createRing(0.9, 0.92, 64)} material={goldMaterial} />

            {/* Triangular pattern lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i * Math.PI) / 3;
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                return (
                    <line key={i}>
                        <bufferGeometry>
                            <bufferAttribute
                                attach="attributes-position"
                                count={2}
                                array={new Float32Array([0, 0, 0, cos * 0.9, sin * 0.9, 0])}
                                itemSize={3}
                            />
                        </bufferGeometry>
                        <lineBasicMaterial color="#D4A017" transparent opacity={0.25} />
                    </line>
                );
            })}

            {/* Petals/lotus hints */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const angle = (i * Math.PI) / 4;
                return (
                    <mesh key={`petal-${i}`} position={[Math.cos(angle) * 0.45, Math.sin(angle) * 0.45, 0]} rotation={[0, 0, angle]}>
                        <circleGeometry args={[0.08, 3]} />
                        <meshBasicMaterial color="#D4A017" transparent opacity={0.15} side={THREE.DoubleSide} />
                    </mesh>
                );
            })}
        </group>
    );
}

export default function Yantra3D({ className = "" }) {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
    };

    return (
        <div
            className={`w-full h-full ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
            <Canvas
                camera={{ position: [0, 0, 2.5], fov: 50 }}
                style={{ background: "transparent" }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                    <SacredRings mousePosition={mousePosition} />
                </Float>
            </Canvas>
        </div>
    );
}
