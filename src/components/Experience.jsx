import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";
import { Spaceboi } from "./Spaceboi";

export default function Experience() {
  return (
    <>
      <OrbitControls
        enableDamping
        minDistance={5} // Set your desired minimum zoom level
        maxDistance={20}
        target={[0, 0, 0]}
      />
      <mesh>
        <Spaceboi />
        {/* <meshNormalMaterial /> */}
      </mesh>
    </>
  );
}
