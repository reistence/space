import { SpotLight } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Object3D } from "three";
import { Vector3 } from "three";

export function MovingSpot({ vec = new Vector3(), targetPosition, ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(vec.set(0, -1, -5.7), 0.1);
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={5}
      // angle={0.25}
      attenuation={3.1}
      anglePower={5}
      intensity={2}
      {...props}
    />
  );
}
