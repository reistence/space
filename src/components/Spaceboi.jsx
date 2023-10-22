/* eslint-disable react/no-unknown-property */

import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export function Spaceboi(props) {
  const { nodes, materials } = useGLTF("/space_boi.glb");
  const [mousePos, setMousePos] = useState({});
  const spaceRef = useRef();
  const [active, setActive] = useState(false);
  const { rotation } = useSpring({
    // rotation: active ? [0, 0, Math.PI / mousePos.y] : [0, 0, 0],
    rotation: [0, 0, mousePos.x / window?.innerWidth],
  });

  useLayoutEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // useFrame(({ mouse }) => {
  //   if (spaceRef.current && active) {
  //     const { x, y } = mouse;
  //     // Calculate the rotation angles to make the model face the mouse
  //     const dx = x * 2 - 1;
  //     const dy = y * -2 + 1;
  //     const angle = Math.atan2(dy, dx);

  //     // Apply the rotation to the model
  //     spaceRef.current.rotation.y = angle;
  //   }
  // });

  useFrame(() => {
    // spaceRef.current.rotation.y += 0.0001;
  });
  return (
    <group {...props} dispose={null} ref={spaceRef}>
      <group scale={0.01}>
        <group
          rotation={[-Math.PI / 2, 0, 0]}
          scale={150}
          //   position={[0, 100, 0]}
        >
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material001_0.geometry}
            material={materials["Material.001"]}
            // scale={scale}
            rotation={rotation}
            onClick={(e) => {
              e.stopPropagation();
              console.log("click");
              setActive(!active);
            }}
          />
          <animated.mesh
            castShadow
            receiveShadow
            rotation={rotation}
            geometry={nodes.body_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        {/* White Planet */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/space_boi.glb");
