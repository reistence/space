import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Tv(props) {
  const { nodes, materials } = useGLTF("/tv.glb");
  const tv = useRef();

  useFrame(
    (state) =>
      (tv.current.position.y = 2.7 - Math.sin(state.clock.elapsedTime) * 0.1)
  );
  return (
    <group {...props} dispose={null} position={[-6, 2.7, -4]} ref={tv}>
      <group
        rotation={[-Math.PI / 2, 0, -0.3]}
        scale={0.5}
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
