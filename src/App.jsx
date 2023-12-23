import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { ScrollControls } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

// import fly from "./fly.json";
import fly from "./flytop.json";
import { useEffect, useMemo, useRef, useState } from "react";
// routing

//components
import AudioBtn from "./components/AudioBtn/AudioBtn";
import Direction from "./components/Direction/Direction";
import About from "./components/Sections/About/About";
import Tooling from "./components/Sections/Tooling/Tooling";
import Experience from "./components/Sections/Experience/Experience";
import Contacts from "./components/Sections/Contacts/Contacts";
import Credits from "./components/Sections/Credits/Credits";
import WorkInProgress from "./components/Sections/working/WorkInProgress";

import Scene from "./Scene";

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
        <ScrollControls pages={30} damping={1} maxSpeed={0.1}>
          <SheetProvider sheet={sheet}>
            <Scene
              currentPageValue={currentPageValue}
              setCurrentPageValue={setCurrentPageValue}
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      {/* <WorkInProgress currentPageValue={currentPageValue} /> */}
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
