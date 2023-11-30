import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tv(props) {
  const { nodes, materials } = useGLTF("/tv.glb");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, -2]}
        scale={1.5}
        position={(0, 0, 0.3)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Inner}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Light}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tv.glb");
