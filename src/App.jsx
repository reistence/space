import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
import {
  OrbitControls,
  ScrollControls,
  Sky,
  useDepthBuffer,
  useScroll,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { Spaceboi } from "./components/Spaceboi";
import { ChanisawAstro } from "./components/ChainSawAstro";

// import fly from "./fly.json";
import fly from "./plane.json";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header/Header";
import AudioBtn from "./components/AudioBtn/AudioBtn";
import Direction from "./components/Direction/Direction";
import About from "./components/Sections/About/About";
import Tooling from "./components/Sections/Tooling/Tooling";
import Experience from "./components/Sections/Experience/Experience";
import Cursor from "./components/Cursor/Cursor";
import Contacts from "./components/Sections/Contacts/Contacts";
import Credits from "./components/Sections/Credits/Credits";
import WorkInProgress from "./components/Sections/working/WorkInProgress";
import { Ufo } from "./components/Ufo";
import { AmbientLight } from "three";
import { Ufo2 } from "./components/Ufo2";
import { FlyingAstro } from "./components/FlyingAstro";
import { Unknown } from "./components/Unknown";
import { MovingSpot } from "./components/MovingSpot";
import { Prova } from "./components/Prova";
import { Helmet } from "./components/Helmet";
import { Bait } from "./components/Bait";
import { JellyFish } from "./components/JellyFish";
import { Mindless } from "./components/Mindless";
import { Tv } from "./components/Tv";
import { ChasingShip } from "./components/ChasingShip";

function App() {
  const cursor = useRef(null);

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  const audio = useRef(new Audio("/sounds/MysticSoundscapes3.mp3"));
  const [audioReady, setAudioReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playbackPosition = useRef(0);

  const handleSoundToggle = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handleSoundToggleOnStart = () => {
    if (isMuted) {
      setIsMuted(false);
    }
  };

  const handlePause = () => {
    playbackPosition.current = audio.current.currentTime;
  };

  const handleEnded = () => {
    playbackPosition.current = 0;
  };

  useEffect(() => {
    audio.current.loop = true;

    audio.current.addEventListener("pause", handlePause);
    audio.current.addEventListener("ended", handleEnded);

    if (!isMuted) {
      audio.current.currentTime = playbackPosition.current;
      audio.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      audio.current.pause();
    }

    return () => {
      audio.current.removeEventListener("pause", handlePause);
      audio.current.removeEventListener("ended", handleEnded);
      audio.current.pause();
    };
  }, [isMuted]);

  const [currentPageValue, setCurrentPageValue] = useState(0);

  const showCursor = () => {
    if (cursor.current) {
      cursor.current.style.display = "block";
    }
  };
  const hideCursor = () => {
    if (cursor.current) {
      cursor.current.style.display = "none";
    }
  };

  const sheet = useMemo(
    () => getProject("Fly Through", { state: fly }).sheet("Scene"),
    []
  );

  console.log(currentPageValue);

  // const startAnimation = () => {
  //   cursor.current.classList.add("start");
  // };

  // const stopAnimation = () => {
  //   cursor.current.classList.remove("start");
  // };

  return (
    <div
      className="main-container"
      onMouseMove={changePosition}
      onMouseLeave={hideCursor}
      onMouseEnter={showCursor}
    >
      {/* <Header sheet={sheet} /> */}

      <AudioBtn
        handleSoundToggle={handleSoundToggle}
        isMuted={isMuted}
        currentPageValue={currentPageValue}
      />
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={20} damping={2} maxSpeed={0.1}>
          <SheetProvider sheet={sheet}>
            <Scene
              currentPageValue={currentPageValue}
              setCurrentPageValue={setCurrentPageValue}
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      {/* <WorkInProgress currentPageValue={currentPageValue} /> */}
      {/* <About currentPageValue={currentPageValue} />

      <Tooling currentPageValue={currentPageValue} />
      <Experience currentPageValue={currentPageValue} />
      <Contacts currentPageValue={currentPageValue} />
      <Direction currentPageValue={currentPageValue} />
      <Credits currentPageValue={currentPageValue} /> */}
      <div className="cursor-style" ref={cursor}></div>
    </div>
  );
}

export default App;

function logCurrentPageCallback(scroll, callback) {
  // Calculate the current page based on the scroll offset and total pages
  const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
  // console.log("Current Page:", currentPage);

  // Use the callback to update the state
  callback(currentPage);
}

function Scene({ currentPageValue, setCurrentPageValue }) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  let o = true;

  const world = useRef();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPageValue);
    }
    // console.log(o);

    if (o) {
      sheet.sequence.position = Math.max(scroll.offset * sequenceLength, 0);
    }

    // world.current.rotation.y += 0.0009;
  });

  // console.log(sheet.sequence.position);

  const s = async (targetPosition) => {
    o = false;
    sheet.sequence.position = 4.53584070521234;
    console.log(o);
  };

  return (
    <>
      {/* <color attach='background' args={['black']}/> */}
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 4, 10]}
        fov={100}
        near={0.5}
        far={100}
      />
      {/* <MovingSpot
        depthBuffer={depthBuffer}
        color="white"
        position={[0, 0.1, -6]}
      /> */}
      {/* <OrbitControls /> */}
      <group ref={world}>
        <Spaceboi currentPageValue={currentPageValue} />
        {/* <FlyingAstro /> */}
        {/* <Unknown /> */}
        {/* <Bait /> */}
        {/* <Mindless /> */}
        {/* <Tv /> */}

        {/* <Prova /> */}
        <JellyFish />
        <Helmet />
      </group>
      <Ufo2 currentPageValue={currentPageValue} />
      <ChanisawAstro />
      <Ufo onClick={() => s(4)} />
      <ChasingShip />
    </>
  );
}
