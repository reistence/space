import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
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

  // console.log(currentPageValue);

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
        <ScrollControls pages={20} damping={1} maxSpeed={0.3}>
          <SheetProvider sheet={sheet}>
            <Scene
              currentPageValue={currentPageValue}
              setCurrentPageValue={setCurrentPageValue}
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      <WorkInProgress currentPageValue={currentPageValue} />
      <About currentPageValue={currentPageValue} />

      <Tooling currentPageValue={currentPageValue} />
      <Experience currentPageValue={currentPageValue} />
      <Contacts currentPageValue={currentPageValue} />
      <Direction currentPageValue={currentPageValue} />
      <Credits currentPageValue={currentPageValue} />
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

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPageValue);
    }
    sheet.sequence.position = Math.max(scroll.offset * sequenceLength);
  });

  console.log(scroll);

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

      <Ufo />
      <Ufo2 />
    </>
  );
}
