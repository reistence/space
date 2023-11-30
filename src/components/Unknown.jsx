import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Unknown(props) {
  const { nodes, materials } = useGLTF("/unknown.glb");
  return (
    <group {...props} dispose={null} scale={11}>
      <group position={[0.108, 0.591, 0.07]} rotation={[0, 0, -3.012]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials["Material.003"]}
        position={[0.084, 0.342, 0.158]}
        rotation={[0, 0, 0.13]}
        scale={[1.331, 1.587, 1.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials["Material.003"]}
        position={[-0.011, 0.506, 0.162]}
        rotation={[0, 0, -3.012]}
        scale={[1.331, 1.587, 1.352]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials["Material.002"]}
        position={[0.038, 0.432, 0.01]}
        scale={0.255}
      /> */}
    </group>
  );
}

useGLTF.preload("/unknown.glb");
