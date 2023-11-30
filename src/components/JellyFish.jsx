import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function JellyFish(props) {
  const { nodes, materials } = useGLTF("/inktober_2_-_mindless.glb");
  return (
    <group {...props} dispose={null} scale={0.5}>
      <group
        position={[7, 3, -5]}
        rotation={[-0.017, 0.62, -0.197]}
        scale={[3.498, 3.287, 3.494]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Hodet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Belly}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Outer_Threads}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Inner_Threads_1}
        position={[-0.461, -1.113, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Outline}
        position={[0.042, -0.283, 0.006]}
        rotation={[-0.017, -0.242, -0.197]}
        scale={[3.498, 3.287, 3.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Inner_Threads_1}
        position={[-0.558, -1.265, 0.1]}
        rotation={[2.147, 0.846, -1.901]}
        scale={[0.674, 1.081, 0.659]}
      />
    </group>
  );
}

useGLTF.preload("/inktober_2_-_mindless.glb");
