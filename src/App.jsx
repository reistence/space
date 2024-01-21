import "./App.scss";
import * as THREE from "three";
import { useRoute, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshPortalMaterial,
  CameraControls,
  Gltf,
  Text,
  Html,
} from "@react-three/drei";

import { easing, geometry } from "maath";
import { suspend } from "suspend-react";

extend(geometry);
const medium = import("/font/OtherFuture.ttf");
//components
import AudioBtn from "./components/AudioBtn/AudioBtn";

import Scene from "./Scene";
import { Spaceboi } from "./components/Spaceboi";
import { RollerCoaster } from "./components/RollerCoaster";
import Tooling from "./components/Sections/Tooling/Tooling";
import { Space } from "./components/Space";
import { Astronauts } from "./components/Astronauts";
import { RedTriangles } from "./components/RedTriangles";
import { Frequency } from "./components/Frequency";
import { Spin } from "./components/Spin";

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

  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  return (
    <div
      className="main-container"
      onMouseMove={changePosition}
      onMouseLeave={hideCursor}
      onMouseEnter={showCursor}
    >
      <AudioBtn
        handleSoundToggle={handleSoundToggle}
        isMuted={isMuted}
        currentPageValue={currentPageValue}
      />
      <Canvas
        camera={{
          fov: 75,
          position: [1, 4, 50],
          minPolarAngle: 0,
          maxZoom: 10,
        }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        // minPolarAngle={0}
      >
        <color attach="background" args={["#000"]} />
        <Frame
          id="a"
          name={`experience`}
          bg="#e4cdac"
          position={[0, 0.1, -5]}
          rotation={[0, 0.5, 0]}
        >
          <Gltf src="/space_boi.glb" scale={0.1} position={[0, -0.7, -2]} />
        </Frame>
        <Frame id="b" name="about" position={[0, 0.1, 5]} rotation={[0, -3, 0]}>
          <Gltf src="/space_boi.glb" scale={0.1} position={[0, -2, -3]} />
        </Frame>
        <Frame
          id="c"
          name="tooling"
          bg="#111111"
          position={[4, 0.1, 0]}
          rotation={[0, 5, 0]}
        >
          <RollerCoaster scale={0.1} position={[0, 0, -2]} active />
        </Frame>
        <Frame
          id="d"
          name="credits"
          bg="#111111"
          position={[-4, 0.1, 0]}
          rotation={[0, -5, 0]}
        >
          {/* <Astronauts scale={0.0008} position={[0, -1, -4]} /> */}
          <ambientLight intensity={10} color={"white"} />

          <Spin scale={1} position={[0, -1.5, -4]} rotation={[1, 0, 0]} />
        </Frame>

        {/* <Space scale={1} position={[0, -10, 0]} /> */}
        <ambientLight intensity={1} color={"red"} />
        <RedTriangles
          scale={50}
          position={[-1, -3, 0]}
          rotation={[4.7, 0, 0]}
        />

        <Rig />
      </Canvas>

      <a
        style={{ position: "absolute", top: 40, right: 40, fontSize: "13px" }}
        // href="/"
        onClick={() => setLocation("/")}
      >
        {params ? "< back" : "double click to enter portal"}
      </a>

      <Tooling visible={Boolean(params?.id === "c")} />

      <div className="cursor-style" ref={cursor}></div>
    </div>
  );
}

function Frame({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.61803398875,
  children,
  ...props
}) {
  const portal = useRef();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame((state, dt) =>
    easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt)
  );
  return (
    <group {...props}>
      <Text
        font={suspend(medium).default}
        fontSize={0.1}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 1, 0.01]}
        material-toneMapped={false}
      >
        {name}
      </Text>
      {/* <Text
        font={suspend(medium).default}
        fontSize={0.1}
        anchorX="right"
        position={[0.4, -0.659, 0.01]}
        material-toneMapped={false}
      >
        {id}
      </Text> */}
      <Text
        font={suspend(medium).default}
        fontSize={0.04}
        anchorX="right"
        position={[0.0, -0.677, 0.01]}
        material-toneMapped={false}
      >
        {author}
      </Text>
      <mesh
        name={id}
        onClick={(e) => (
          e.stopPropagation(), setLocation("/item/" + e.object.name)
        )}
        onPointerOver={(e) => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.7, 1000]} />
        <MeshPortalMaterial
          ref={portal}
          events={params?.id === id}
          side={THREE.DoubleSide}
        >
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

function Rig({
  position = new THREE.Vector3(0, 0, 1),
  focus = new THREE.Vector3(0, 0, 0),
}) {
  const { controls, scene } = useThree();
  const [, params] = useRoute("/item/:id");
  useEffect(() => {
    const active = scene.getObjectByName(params?.id);
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25));
      active.parent.localToWorld(focus.set(0, 0, -2));
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });
  return (
    <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  );
}

export default App;
