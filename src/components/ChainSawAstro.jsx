import React, { useMemo, useRef } from "react";
import { useDepthBuffer, useGLTF } from "@react-three/drei";
import { SpotLight } from "three";
import { MovingSpot } from "./MovingSpot";

export function ChanisawAstro(props) {
  const { nodes, materials } = useGLTF("/chainsaw_man_-_darkness_demon.glb");
  // const spotlight = useMemo(() => new SpotLight("#fff"), []);
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <>
      <MovingSpot
        // depthBuffer={depthBuffer}
        color="white"
        position={[0, 2.7, -6]}
      />
      <group
        {...props}
        dispose={null}
        scale={0.0001}
        position={[0, 0.1, -6]}
        rotation={[0, 0, 0]}
      >
        <group
          position={[-915.913, 2.439, -74.147]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HelmetGlass001_HelmetGlass_0.geometry}
            material={materials.HelmetGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HelmetGlass001_Rim_0.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[-856.386, -766.475, -102.908]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Accesories001_Material2_0.geometry}
            material={materials.Material2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Accesories001_Rim_0.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[-856.386, -14.72, 777.155]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LowerBody_Material2_0.geometry}
            material={materials.Material2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LowerBody_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LowerBody_Rim_0.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[-916.904, -800, -91.046]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <primitive object={nodes._rootJoint} />
          <group position={[0.605, 0.119, 0.395]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UpperBody001_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UpperBody001_Material2_0.geometry}
              material={materials.Material2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UpperBody001_Rim_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Suzanne001_Material_0.geometry}
          material={materials.Material}
          position={[-915.913, -7.344, -70.466]}
          rotation={[-1.551, 0, 0]}
          scale={64.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GrassBlade_Grass_0.geometry}
          material={materials.Grass}
          position={[-353.498, -450.275, 317.104]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Grass_0.geometry}
          material={materials.Grass}
          position={[24.408, -392.509, 393.781]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={689.427}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Grass_0.geometry}
          material={materials.Grass}
          position={[-926.864, -386.199, 142.156]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={121.27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GrassBlade001_Grass_0.geometry}
          material={materials.Grass}
          position={[-513.547, -424.064, 317.104]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_Ground_0.geometry}
        material={materials.Ground}
        position={[0, -386.201, 399.354]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2601.285}
      /> */}
      </group>
    </>
  );
}

useGLTF.preload("/chainsaw_man_-_darkness_demon.glb");
