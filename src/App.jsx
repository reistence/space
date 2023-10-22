import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { Spaceboi } from "./components/Spaceboi";
import { ChanisawAstro } from "./components/ChainSawAstro";

import fly from "./fly.json";

function App() {
  const sheet = getProject("Fly Through", { state: fly }).sheet("Scene");

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={20} damping={1} maxSpeed={0.3}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;

function logCurrentPageCallback(scroll) {
  // Calculate the current page based on the scroll offset and total pages
  const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
  console.log("Current Page:", currentPage);

  // Use the callback to update the state
  // callback(currentPage);
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    // if (scroll) {
    //   logCurrentPageCallback(scroll);
    // }
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
      {/* <OrbitControls /> */}
      <Spaceboi />
      <ChanisawAstro />
    </>
  );
}
