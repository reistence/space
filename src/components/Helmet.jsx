import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Helmet(props) {
  const group = useRef();
  const helm = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/low_poly_space_helmet_untextured.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // actions["Take 001"].play();
    // console.log(actions);
  }, []);

  useFrame((state) => {
    helm.current.rotation.x += 0.01;
    helm.current.rotation.y += 0.01;
    helm.current.rotation.z += 0.01;

    helm.current.position.y = 6 + Math.sin(state.clock.elapsedTime) * 0.5;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          ref={helm}
          scale={0.3}
          name="Sketchfab_model"
          rotation={[-Math.PI * 0.45, 0, 0]}
          position={[3, 6, -3]}
        >
          <group
            name="3d552bdadfa84b5f950556390e95805afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Helmet" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Helmet__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Helmet__0.geometry}
                    material={materials.Helmet__0}
                  />
                  <group name="Glass_Left_Bottom">
                    <mesh
                      name="Glass_Left_Bottom_Material_#25_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Glass_Left_Bottom_Material_#25_0"].geometry
                      }
                      material={materials.Material_25}
                    />
                  </group>
                  <group name="Glass_Left_Top">
                    <mesh
                      name="Glass_Left_Top_Material_#25_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Glass_Left_Top_Material_#25_0"].geometry}
                      material={materials.Material_25}
                    />
                  </group>
                  <group name="Glass_Right_Bottom">
                    <mesh
                      name="Glass_Right_Bottom_Material_#25_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Glass_Right_Bottom_Material_#25_0"].geometry
                      }
                      material={materials.Material_25}
                    />
                  </group>
                  <group name="Glass_Right_Top">
                    <mesh
                      name="Glass_Right_Top_Material_#25_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Glass_Right_Top_Material_#25_0"].geometry
                      }
                      material={materials.Material_25}
                    />
                  </group>
                  <group
                    name="Light_1"
                    position={[12.583, -7.743, 21.151]}
                    rotation={[-1.103, -0.96, 0.393]}
                  >
                    <mesh
                      name="Light_1__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Light_1__0.geometry}
                      material={materials.Helmet__0}
                    />
                  </group>
                  <group
                    name="Light_2"
                    position={[-12.289, -7.438, 21.151]}
                    rotation={[-1.114, 0.944, -0.379]}
                  >
                    <mesh
                      name="Light_2__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Light_2__0.geometry}
                      material={materials.Helmet__0}
                    />
                  </group>
                  <group
                    name="Spot_Light_1"
                    position={[11.553, -7.206, 21.563]}
                    rotation={[1.558, -0.515, 1.37]}
                  >
                    <group name="Object_19" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_20" />
                    </group>
                  </group>
                  <group
                    name="Spot_Light_2"
                    position={[-11.367, -6.731, 21.563]}
                    rotation={[-1.526, -0.621, -1.768]}
                  >
                    <group name="Object_22" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_23" />
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

useGLTF.preload("/low_poly_space_helmet_untextured.glb");
