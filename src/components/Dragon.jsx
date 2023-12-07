import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dragon(props) {
  const { nodes, materials } = useGLTF("/inktober_-_day_12_-_dragon.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.01}
      position={[0, 0, 3.8]}
      rotation={[0, -1.5, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface7_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface8_lambert3_0.geometry}
        material={materials.lambert3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere4_lambert2_0.geometry}
        material={materials.lambert2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPlane3_lambert4_0.geometry}
        material={materials.lambert4}
        position={[0.855, 11.276, -9.836]}
        scale={[55.669, 33.363, 128.882]}
      />
    </group>
  );
}

useGLTF.preload("/inktober_-_day_12_-_dragon.glb");
