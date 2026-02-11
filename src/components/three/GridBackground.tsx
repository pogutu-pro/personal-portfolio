"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function GridPoints() {
  const ref = useRef<THREE.Points>(null!)
  
  // Create a grid of points
  const points = useMemo(() => {
    const size = 50
    const divisions = 50
    const step = size / divisions
    const pts = []
    
    for (let i = -size / 2; i <= size / 2; i += step) {
      for (let j = -size / 2; j <= size / 2; j += step) {
        pts.push(i, 0, j)
      }
    }
    return new Float32Array(pts)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      // Very subtle wave animation
      ref.current.rotation.y = t * 0.05
      ref.current.position.y = Math.sin(t * 0.5) * 0.5
    }
  })

  return (
    <group rotation={[0.4, 0, 0]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0066ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.2}
        />
      </Points>
    </group>
  )
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <Canvas
        camera={{ position: [0, 10, 20], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <GridPoints />
      </Canvas>
    </div>
  )
}
