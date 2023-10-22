import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { Spaceboi } from "./components/Spaceboi";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls
          enableDamping
          minDistance={5} // Set your desired minimum zoom level
          maxDistance={20}
          target={[0, 0, 0]}
        />

        <Spaceboi />
      </Canvas>
    </>
  );
}

export default App;
