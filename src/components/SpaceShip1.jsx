import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SpaceShip1(props) {
  const { nodes, materials } = useGLTF("/spaceship_5.glb");
  return (
    <>
      <ambientLight intensity={5} color={"white"} />
      <group {...props} dispose={null}>
        <group scale={0.008}>
          <group rotation={[Math.PI * 0.25, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Spaceship_White_0.geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Spaceship_Black_0.geometry}
              material={materials.Black}
            />
          </group>
        </group>
      </group>
    </>
  );
}
