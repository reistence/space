/* eslint-disable react/no-unknown-property */

import React, { useLayoutEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export function Spaceboi(props) {
  const { nodes, materials } = useGLTF("/space_boi.glb");
  const [mousePos, setMousePos] = useState({});
  const spaceRef = useRef();
  const waves = useRef();
  const particlesRef = useRef();
  const blackPlanetRef = useRef();
  const blackPlanetRef2 = useRef();
  const whiteStripePlanet = useRef();
  const whiteStripeRing = useRef();

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(true);
  const [active5, setActive5] = useState(true);
  const [active6, setActive6] = useState(true);
  const { rotation } = useSpring({
    // rotation: active ? [0, 0, Math.PI / mousePos.y] : [0, 0, 0],
    rotation: [0, 0, mousePos.x ? mousePos.x / window?.innerWidth : 0],
  });

  const { scale } = useSpring({
    scale: active ? 60.324 : 30.324,
    config: config.wobbly,
  });

  const { scale: scale2 } = useSpring({
    scale: active2 ? 60.324 : 30.324,
    config: config.wobbly,
  });
  const { scale: scale3 } = useSpring({
    scale: active3 ? 60.324 : 30.324,
    config: config.wobbly,
  });
  const { scale: scale4 } = useSpring({
    scale: active4 ? 16.881 : 30.324,
    config: config.wobbly,
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
  useFrame(({ state }) => {
    waves.current.rotation.z -= 0.001;
  });

  useFrame(() => {
    // particlesRef.current.rotation.z += 0.0001;
    // particlesRef.current.rotation.z += 0.0005;
    // blackPlanetRef.current.rotation.z += 0.009;
    // blackPlanetRef2.current.rotation.z += 0.009;
    // whiteStripePlanet.current.rotation.z += 0.005;
    // whiteStripeRing.current.rotation.z += 0.002;
  });
  return (
    <group {...props} dispose={null} ref={spaceRef}>
      <mesh
        castShadow
        receiveShadow
        ref={particlesRef}
        geometry={nodes.particles_Material002_0.geometry}
        material={materials["Material.002"]}
        position={[9, 8, 9]}
        rotation={[1.5, 0, 0]}
        scale={0.408}
      />
      <group scale={0.01}>
        {/* <group
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
            // rotation={rotation}
            onClick={(e) => {
              e.stopPropagation();
              // console.log("click");
              // setActive(!active);
            }}
          />
          <animated.mesh
            castShadow
            receiveShadow
            // rotation={rotation}
            geometry={nodes.body_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group> */}
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
          ref={waves}
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
          ref={particlesRef}
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          castShadow
          receiveShadow
          ref={particlesRef}
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          castShadow
          receiveShadow
          ref={whiteStripePlanet}
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[375.469, 427.948, 3]}
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
          ref={whiteStripeRing}
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
          // scale={62.402}
          scale={scale}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.988, 460.196, -117.028]}
          // scale={60.324}
          scale={scale2}
          onClick={() => setActive2(!active2)}
        ></animated.mesh>
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[291.988, 260.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={() => setActive(!active)}
          scale={scale}
        />
        {/* White Planet */}
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          // scale={16.881}
          onClick={() => setActive3(!active3)}
          scale={scale3}
        >
          {/* {props.currentPageValue === 4 && (
          )} */}
          {/* <Html center={true} occlude={"raycast"}>
            <span>ugidysfghfiud</span>
          </Html> */}
        </animated.mesh>
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          // scale={16.881}
          onClick={() => setActive4(!active4)}
          scale={scale4}
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
          ref={blackPlanetRef2}
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          castShadow
          ref={blackPlanetRef}
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
