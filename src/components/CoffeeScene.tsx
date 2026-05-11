'use client'

import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

const CoffeeBean = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1}>
      <meshStandardMaterial
        color="#8b6f47"
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1}
      />
    </Sphere>
  )
}

const RotatingRing = () => {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01
      torusRef.current.rotation.z -= 0.015
    }
  })

  return (
    <Torus ref={torusRef} args={[2.5, 0.3, 64, 100]} rotation={[0.3, 0, 0]}>
      <meshStandardMaterial
        color="#00d4ff"
        metalness={0.9}
        roughness={0.1}
        emissive="#00d4ff"
        emissiveIntensity={0.5}
      />
    </Torus>
  )
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
    </>
  )
}

export const CoffeeScene = () => {
  return (
    <div className="w-full h-96 md:h-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        style={{
          background: 'transparent',
        }}
      >
        <Lights />
        <CoffeeBean />
        <RotatingRing />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  )
}
