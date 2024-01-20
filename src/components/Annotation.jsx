import { Html } from "@react-three/drei";

export default function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      geometry={<roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />}
    >
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}
