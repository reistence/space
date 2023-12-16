import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  TransformControls,
  PivotControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useCurrentSheet } from "@theatre/r3f";
import { Euler, Quaternion, Vector3 } from "three";
import { lerp } from "three/src/math/MathUtils";
import { useSpring, animated, config } from "@react-spring/three";

export function ChasingShip(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/untitled.glb");
  const { actions } = useAnimations(animations, group);
  const sheet = useCurrentSheet();

  const [propulsor, setPropulsor] = useState(false);

  const plane = sheet.object("Plane", {
    position: {
      x: 0,
      y: 4,
      z: 9,
    },
    rotation: {
      x: 0,
      y: 1,
      z: 0,
    },
  });
  let vec = new Vector3();

  const viewport = useThree((state) => state.viewport);
  const play = async () => await sheet.sequence.play({ rate: 0.1 });
  const pause = async () => await sheet.sequence.pause();
  useFrame((state) => {
    if (group.current) {
      plane.onValuesChange((val) => {
        group.current.position.x = val.position.x;
        group.current.position.y = val.position.y;
        group.current.position.z = val.position.z;
        group.current.rotation.x = val.rotation.x;
        group.current.rotation.y = val.rotation.y;
        group.current.rotation.z = val.rotation.z;
      });

      // group.current.position.lerp(
      //   vec.set(
      //     (state.mouse.x * viewport.width) / 2,
      //     Math.max((state.mouse.y * viewport.height) / 2, 0.7),
      //     4
      //   ),
      //   0.05
      // );

      // group.current.position.setY = Math.max(
      //   (state.mouse.y * viewport.height) / 2,
      //   0.7
      // );
    }

    actions["Take 001"].play();
  });

  const { scale } = useSpring({
    scale: propulsor ? 0.5 : 0,
    config: config.wobbly,
  });

  useEffect(() => {
    const speedUp = () => {
      setPropulsor(true);
      play();
    };
    const slowDown = () => {
      setPropulsor(false);
      pause();
    };

    window.addEventListener("mousedown", speedUp);
    window.addEventListener("mouseup", slowDown);
    window.addEventListener("touchstart", speedUp);
    window.addEventListener("touchend", slowDown);

    return () => {
      window.removeEventListener("mousedown", speedUp);
      window.removeEventListener("mouseup", slowDown);
      window.addEventListener("touchstart", speedUp);
      window.addEventListener("touchend", slowDown);
    };
  }, []);

  return (
    <>
      {/* <PivotControls
        activeAxes={[true, true, true]}
        anchor={[0, 0, 0]}
        scale={0.75}
        onDrag={(l, dl, w, dw) => {
          const position = new Vector3();
          const rotation = new Quaternion();

          w.decompose(position, rotation, new Vector3());
          const eulerRotation = new Euler();
          eulerRotation.setFromQuaternion(rotation);

          console.log({
            x: eulerRotation.x,
            y: eulerRotation.y,
            z: eulerRotation.z,
          });
        }}
      > */}
      <group
        ref={group}
        {...props}
        dispose={null}
        position={[0, 4, 9]}
        rotation={[0, 1, 0]}
      >
        <group
          name="Scene"
          scale={0.001}
          // position={[-10, 3, 7]
          // }
        >
          <group name="Nave_2" position={[-0.086, -0.794, 0]} scale={100}>
            <mesh
              name="Object_7"
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Propulsor}
              position={[0.15, 0.543, -1.154]}
            />
            {propulsor && (
              <animated.group
                name="Propulsor_3"
                position={[0, 0.4, -1.3]}
                // scale={[1, 1, 1.48]}
                scale={scale}
              >
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Propulsor}
                />
              </animated.group>
            )}
          </group>
        </group>
      </group>
      {/* </PivotControls> */}
    </>
  );
}

useGLTF.preload("/untitled.glb");
