import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Spin(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/spin.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane_0" position={[0, 0.037, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane001_1" position={[0, 0.111, 0]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane002_2" position={[0, 0.185, 0]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane003_3" position={[0, 0.259, 0]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane004_4" position={[0, 0.333, 0]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane005_5" position={[0, 0.407, 0]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane006_6" position={[0, 0.481, 0]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane007_7" position={[0, 0.555, 0]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane008_8" position={[0, 0.629, 0]}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane009_9" position={[0, 0.703, 0]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane010_10" position={[0, 0.777, 0]}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane011_11" position={[0, 0.851, 0]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane012_12" position={[0, 0.925, 0]}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane013_13" position={[0, 0.999, 0]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane014_14" position={[0, 1.073, 0]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane015_15" position={[0, 1.147, 0]}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane016_16" position={[0, 1.221, 0]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane017_17" position={[0, 1.295, 0]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane018_18" position={[0, 1.369, 0]}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane019_19" position={[0, 1.443, 0]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane020_20" position={[0, 1.517, 0]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane021_21" position={[0, 1.591, 0]}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane022_22" position={[0, 1.665, 0]}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane023_23" position={[0, 1.739, 0]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane024_24" position={[0, 1.813, 0]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane025_25" position={[0, 1.887, 0]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane026_26" position={[0, 1.961, 0]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane027_27" position={[0, 2.035, 0]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane028_28" position={[0, 2.109, 0]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane029_29" position={[0, 2.183, 0]}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane030_30" position={[0, 2.257, 0]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane031_31" position={[0, 2.331, 0]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane032_32" position={[0, 2.405, 0]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane033_33" position={[0, 2.479, 0]}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane034_34" position={[0, 2.553, 0]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane035_35" position={[0, 2.627, 0]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane036_36" position={[0, 2.701, 0]}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane037_37" position={[0, 2.775, 0]}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane038_38" position={[0, 2.849, 0]}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane039_39" position={[0, 2.923, 0]}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane040_40" position={[0, 2.997, 0]}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane041_41" position={[0, 3.071, 0]}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane042_42" position={[0, 3.145, 0]}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane043_43" position={[0, 3.219, 0]}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane044_44" position={[0, 3.293, 0]}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane045_45" position={[0, 3.367, 0]}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane046_46" position={[0, 3.441, 0]}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane047_47" position={[0, 3.515, 0]}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane048_48" position={[0, 3.589, 0]}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane049_49" position={[0, 3.663, 0]}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane050_50" position={[0, 3.737, 0]}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane051_51" position={[0, 3.811, 0]}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane052_52" position={[0, 3.885, 0]}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane053_53" position={[0, 3.959, 0]}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane054_54" position={[0, 4.033, 0]}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane055_55" position={[0, 4.107, 0]}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane056_56" position={[0, 4.181, 0]}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane057_57" position={[0, 4.255, 0]}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane058_58" position={[0, 4.329, 0]}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Plane059_59" position={[0, 4.403, 0]}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spin.glb");
