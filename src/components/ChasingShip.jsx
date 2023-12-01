import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ChasingShip(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/untitled.glb");
  const { actions } = useAnimations(animations, group);

  useFrame(() => actions["Take 001"].play());
  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        position={(0, 0, 0)}
        rotation={[0, 1, 0]}
      >
        <group name="Scene" scale={0.01} position={[0, 5, 17]}>
          <group name="Nave_2" scale={10}>
            <mesh
              name="Object_7"
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Propulsor}
              position={[0.15, 0.543, -1.154]}
            />
            <group
              name="Propulsor_3"
              position={[0, 0.01, 0.56]}
              scale={[1, 1, 1.48]}
            >
              <mesh
                name="Object_9"
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials.Propulsor}
              />
            </group>
          </group>
          {/* <group
            name="Propulsor_3001"
            position={[0, 0.01, 0.56]}
            scale={[1, 1, 1.48]}
          >
            <mesh
              name="Object_9001"
              castShadow
              receiveShadow
              geometry={nodes.Object_9001.geometry}
              material={materials["Propulsor.001"]}
            />
          </group> */}
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/untitled.glb");
