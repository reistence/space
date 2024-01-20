import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRoute } from "wouter";
import Tooling from "./Sections/Tooling/Tooling";
import Annotation from "./Annotation";

export function RollerCoaster(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/ride.glb");
  const { actions } = useAnimations(animations, group);

  const { scene } = useThree();
  const [, params] = useRoute("/item/:id");

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (params?.id === "c") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [params]);

  useEffect(() => {
    actions["Take 001"].play();
    // console.log(actions);
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.381}
        >
          {/* {hidden ? (
            <Annotation position={[2, 20, 2.5]} scale={10}>
              <span>Yooo</span>
            </Annotation>
          ) : (
            <></>
          )} */}
          <group
            name="097167d9abc6429e92ba147235aa36dffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="polySurface71"
                  position={[0.187, 0, 5.704]}
                  rotation={[-Math.PI, 0.185, -Math.PI]}
                >
                  <group name="polySurface105" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface105_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface105_lambert7_0.geometry}
                      material={materials.lambert7}
                    />
                  </group>
                  <group name="polySurface106" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface106_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface106_lambert7_0.geometry}
                      material={materials.lambert7}
                    />
                  </group>
                  <group name="polySurface107" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface107_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface107_lambert7_0.geometry}
                      material={materials.lambert7}
                    />
                  </group>
                  <group name="polySurface108" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface108_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface108_lambert7_0.geometry}
                      material={materials.lambert7}
                    />
                  </group>
                  <group name="polySurface109" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface109_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface109_lambert7_0.geometry}
                      material={materials.lambert7}
                    />
                  </group>
                  <group name="polySurface110" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface110_lambert8_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface110_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface111" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface111_lambert8_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface111_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface112" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface112_lambert8_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface112_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface113" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface113_lambert8_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface113_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface114" position={[0, -0.854, -4.02]}>
                    <mesh
                      name="polySurface114_lambert3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface114_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                </group>
                <group
                  name="pCube2"
                  position={[0.193, -0.948, 5.688]}
                  rotation={[0, -0.188, 0]}
                  scale={[1.502, 0.6, 2.141]}
                >
                  <group name="polySurface102">
                    <group name="polySurface103">
                      <mesh
                        name="polySurface103_lambert4_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface103_lambert4_0.geometry}
                        material={materials.lambert4}
                      />
                      <mesh
                        name="polySurface103_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface103_lambert1_0.geometry}
                        material={materials.lambert1}
                      />
                    </group>
                    <group name="polySurface104">
                      <mesh
                        name="polySurface104_lambert6_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface104_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ride.glb");
