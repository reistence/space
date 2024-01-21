import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Frequency(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/spectral_frequencies__use_j__k_keys.glb"
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation"].play();
    // console.log(actions);
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube193_0"
                position={[-2.508, -4.792, -97.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube194_1"
                position={[-2.508, -4.362, -95.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube195_2"
                position={[-2.508, -3.229, -93.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube196_3"
                position={[-2.508, -1.628, -91.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube197_4"
                position={[-2.508, 0.208, -89.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube198_5"
                position={[-2.508, 2.044, -87.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube199_6"
                position={[-2.508, 3.646, -85.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube200_7"
                position={[-2.508, 4.779, -83.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube201_8"
                position={[-2.508, 5.208, -81.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube202_9"
                position={[-2.508, 4.779, -79.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube203_10"
                position={[-2.508, 3.646, -77.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube204_11"
                position={[-2.508, 2.044, -75.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube205_12"
                position={[-2.508, 0.208, -73.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube206_13"
                position={[-2.508, -1.628, -71.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube207_14"
                position={[-2.508, -3.229, -69.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube208_15"
                position={[-2.508, -4.362, -67.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube209_16"
                position={[-2.508, -4.792, -65.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube210_17"
                position={[-2.508, -4.362, -63.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube211_18"
                position={[-2.508, -3.229, -61.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube212_19"
                position={[-2.508, -1.628, -59.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube213_20"
                position={[-2.508, 0.208, -57.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube214_21"
                position={[-2.508, 2.044, -55.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube215_22"
                position={[-2.508, 3.646, -53.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube216_23"
                position={[-2.508, 4.779, -51.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube217_24"
                position={[-2.508, 5.208, -49.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube218_25"
                position={[-2.508, 4.779, -47.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube219_26"
                position={[-2.508, 3.646, -45.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube220_27"
                position={[-2.508, 2.044, -43.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube221_28"
                position={[-2.508, 0.208, -41.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube222_29"
                position={[-2.508, -1.628, -39.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube223_30"
                position={[-2.508, -3.229, -37.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube224_31"
                position={[-2.508, -4.362, -35.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube225_32"
                position={[-2.508, -4.792, -33.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube226_33"
                position={[-2.508, -4.362, -31.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube227_34"
                position={[-2.508, -3.229, -29.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube228_35"
                position={[-2.508, -1.628, -27.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube229_36"
                position={[-2.508, 0.208, -25.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube230_37"
                position={[-2.508, 2.044, -23.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube231_38"
                position={[-2.508, 3.646, -21.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube232_39"
                position={[-2.508, 4.779, -19.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube233_40"
                position={[-2.508, 5.208, -17.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube234_41"
                position={[-2.508, 4.779, -15.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube235_42"
                position={[-2.508, 3.646, -13.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube236_43"
                position={[-2.508, 2.044, -11.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube237_44"
                position={[-2.508, 0.208, -9.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube238_45"
                position={[-2.508, -1.628, -7.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube239_46"
                position={[-2.508, -3.229, -5.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube240_47"
                position={[-2.508, -4.362, -3.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube241_48"
                position={[-2.508, -4.792, -1.425]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube242_49"
                position={[-2.508, -4.362, 0.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube243_50"
                position={[-2.508, -3.229, 2.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube244_51"
                position={[-2.508, -1.628, 4.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube245_52"
                position={[-2.508, 0.208, 6.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube246_53"
                position={[-2.508, 2.044, 8.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube247_54"
                position={[-2.508, 3.646, 10.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube248_55"
                position={[-2.508, 4.779, 12.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube249_56"
                position={[-2.508, 5.208, 14.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube250_57"
                position={[-2.508, 4.779, 16.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube251_58"
                position={[-2.508, 3.646, 18.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube252_59"
                position={[-2.508, 2.044, 20.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube253_60"
                position={[-2.508, 0.208, 22.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube254_61"
                position={[-2.508, -1.628, 24.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube255_62"
                position={[-2.508, -3.229, 26.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube256_63"
                position={[-2.508, -4.362, 28.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube257_64"
                position={[-2.508, -4.792, 30.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube258_65"
                position={[-2.508, -4.362, 32.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube259_66"
                position={[-2.508, -3.229, 34.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube260_67"
                position={[-2.508, -1.628, 36.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube261_68"
                position={[-2.508, 0.208, 38.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube262_69"
                position={[-2.508, 2.044, 40.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube263_70"
                position={[-2.508, 3.646, 42.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube264_71"
                position={[-2.508, 4.779, 44.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube265_72"
                position={[-2.508, 5.208, 46.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube266_73"
                position={[-2.508, 4.779, 48.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube267_74"
                position={[-2.508, 3.646, 50.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube268_75"
                position={[-2.508, 2.044, 52.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube269_76"
                position={[-2.508, 0.208, 54.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube270_77"
                position={[-2.508, -1.628, 56.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube271_78"
                position={[-2.508, -3.229, 58.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube272_79"
                position={[-2.508, -4.362, 60.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube273_80"
                position={[-2.508, -4.792, 62.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube274_81"
                position={[-2.508, -4.362, 64.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube275_82"
                position={[-2.508, -3.229, 66.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube276_83"
                position={[-2.508, -1.628, 68.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube277_84"
                position={[-2.508, 0.208, 70.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube278_85"
                position={[-2.508, 2.044, 72.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube279_86"
                position={[-2.508, 3.646, 74.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube280_87"
                position={[-2.508, 4.779, 76.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube281_88"
                position={[-2.508, 5.208, 78.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube282_89"
                position={[-2.508, 4.779, 80.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube283_90"
                position={[-2.508, 3.646, 82.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube284_91"
                position={[-2.508, 2.044, 84.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube285_92"
                position={[-2.508, 0.208, 86.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube286_93"
                position={[-2.508, -1.628, 88.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube287_94"
                position={[-2.508, -3.229, 90.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube288_95"
                position={[-2.508, -4.362, 92.575]}
                rotation={[-Math.PI / 2, 1.571, 0]}
              >
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Cube_97" position={[-1.568, -118.584, -2.508]}>
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials.boxxxxx}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spectral_frequencies__use_j__k_keys.glb");
