import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { Spaceboi } from "./components/Spaceboi";

function App() {
  const sheet = getProject("Fly Through").sheet("Scene");

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);

    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      {/* <color attach='background' args={['black']}/> */}
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 4, 15]}
        fov={100}
        near={0.5}
        far={100}
      />
      <Spaceboi />
    </>
  );
}
