import React, { useRef } from "react";
import { OrbitControls, PivotControls, useGLTF } from "@react-three/drei";

export function FlyingAstro(props) {
  const { nodes, materials } = useGLTF("/no18_astronaut_to_the_moon.glb");

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <PivotControls> */}
      <group {...props} dispose={null} position={[1, 4, 10]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.brush_TaperedMarker}
          rotation={[0.7, -9, 0]}
        />
      </group>
      {/* </PivotControls> */}
    </>
  );
}

useGLTF.preload("/no18_astronaut_to_the_moon.glb");
