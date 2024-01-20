/* eslint-disable react/no-unknown-property */

import React, { useLayoutEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export function Space(props) {
  const { nodes, materials } = useGLTF("/space_boi.glb");

  const spaceRef = useRef();
  const waves = useRef();
  const particlesRef = useRef();

  useFrame(() => {
    // particlesRef.current.rotation.z += 0.0001;
    // particlesRef.current.rotation.z += 0.0005;
    // blackPlanetRef.current.rotation.z += 0.009;
    // blackPlanetRef2.current.rotation.z += 0.009;
    // whiteStripePlanet.current.rotation.z += 0.005;
    // whiteStripeRing.current.rotation.z += 0.002;
  });
  return (
    <group {...props} dispose={null} ref={spaceRef}>
      <mesh
        castShadow
        receiveShadow
        ref={particlesRef}
        geometry={nodes.particles_Material002_0.geometry}
        material={materials["Material.002"]}
        position={[9, 5, 9]}
        rotation={[1.5, 0, 0]}
        scale={0.408}
      />
    </group>
  );
}

useGLTF.preload("/space_boi.glb");
