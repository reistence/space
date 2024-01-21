import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RedTriangles(props) {
  const { nodes, materials } = useGLTF("/abstract_red_background.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.041, -0.041]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/abstract_red_background.glb");
