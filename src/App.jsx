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

  const showCursor = () => (cursor.current.style.display = "block");
  const hideCursor = () => (cursor.current.style.display = "none");

  const sheet = useMemo(
    () => getProject("Fly Through", { state: fly }).sheet("Scene"),
    []
  );

  console.log(currentPageValue);

  const startAnimation = () => {
    cursor.current.classList.add("start");
  };

  const stopAnimation = () => {
    cursor.current.classList.remove("start");
  };

  // cursor
  const circlesRef = useRef([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const changePos = (e, ref) => {
    ref.current.style.top = `${e.clientY}px`;
    ref.current.style.left = `${e.clientX}px`;
  };

  useLayoutEffect(() => {
    const circles = circlesRef.current;

    // console.log(circles[0].x);
    circles.forEach(function (circle, index) {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
      // console.log(circle?.x);
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    document.addEventListener("mouseleave", function () {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "hidden";
        }
      }
    });

    document.addEventListener("mouseenter", function () {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "visible";
        }
      }
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles?.forEach(function (circle, index) {
        if (circle) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";

          circle.style.scale = (circles.length - index) / circles.length;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];

          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  const circleArr = Array.from({ length: 250 });

  return (
    <div
      className="main-container"
      onMouseMove={changePosition}
      onMouseLeave={hideCursor}
      onMouseEnter={showCursor}
      // onMouseDown={startAnimation}
      // onMouseUp={stopAnimation}
    >
      {/* <Header sheet={sheet} /> */}

      <AudioBtn handleSoundToggle={handleSoundToggle} isMuted={isMuted} />
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
      <About currentPageValue={currentPageValue} />

      <Tooling currentPageValue={currentPageValue} />
      <Experience currentPageValue={currentPageValue} />
      <Direction currentPageValue={currentPageValue} />
      <div className="cursor-style" ref={cursor}></div>
      {/* <div className="cursor-style" ref={cursor1}></div> */}
      {circleArr.map((c, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => circlesRef.current.push(el)}
        ></div>
      ))}
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
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  console.log(currentPageValue);

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
