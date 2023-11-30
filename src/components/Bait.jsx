import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bait(props) {
  const { nodes, materials } = useGLTF("/inktober_3_-_bait.glb");
  return (
    <group {...props} dispose={null} scale={5}>
      <group
        position={[-0.002, 0.748, 0.041]}
        rotation={[0.209, 0.022, -0.003]}
        scale={0.77}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_0}
        />
      </group>
      <group
        position={[-0.001, 0.352, -0.203]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.711, 0.013, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Outline}
        />
      </group>
      <group
        position={[-0.001, 0.352, -0.203]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.711, 0.013, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Stolper}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Fish}
        position={[-0.045, -0.163, 1.35]}
        rotation={[2.177, 1.442, -0.872]}
        scale={[0.033, 0.033, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Outline2}
        position={[-0.045, -0.163, 1.35]}
        rotation={[2.177, 1.442, -0.872]}
        scale={[0.033, 0.033, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.FiskeStang}
        position={[-0.002, 0.748, 0.041]}
        rotation={[0.209, 0.022, -0.003]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Brygge}
        position={[-0.001, 0.352, -0.203]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.711, 0.013, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.Water}
        position={[0, -0.01, 0]}
        scale={[14.789, 43.501, 14.789]}
      />
    </group>
  );
}

useGLTF.preload("/inktober_3_-_bait.glb");
