import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mindless(props) {
  const { nodes, materials } = useGLTF("/inktober_2019_2_mindless.glb");
  return (
    <group {...props} dispose={null} scale={0.1} position={[-0.1, 5, 1.337]}>
      <group position={[0, 0, 0.337]} rotation={[-2.338, 0.203, 3.118]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.black}
        />
      </group>
      <group position={[-0.1, -0.35, 0.337]} rotation={[-2.338, 0.203, 3.118]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.white}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.black}
        position={[-5.762, -25.62, -0.877]}
        rotation={[0.219, -0.135, 0.092]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.white}
        position={[-5.782, -25.33, -0.865]}
        rotation={[0.219, -0.135, 0.092]}
      />
    </group>
  );
}

useGLTF.preload("/inktober_2019_2_mindless.glb");
