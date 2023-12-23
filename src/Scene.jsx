import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
import { ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { Spaceboi } from "./components/Spaceboi";
import { ChanisawAstro } from "./components/ChainSawAstro";

// import fly from "./fly.json";
import fly from "./flytop.json";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { Ufo } from "./components/Ufo";
import { Ufo2 } from "./components/Ufo2";

import { Helmet } from "./components/Helmet";

import { ChasingShip } from "./components/ChasingShip";

import { Word } from "./components/Word/Word";

function logCurrentPageCallback(scroll, callback) {
  // Calculate the current page based on the scroll offset and total pages
  const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
  // console.log("Current Page:", currentPage);

  // Use the callback to update the state
  callback(currentPage);
}

const Scene = ({ currentPageValue, setCurrentPageValue }) => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const world = useRef();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPageValue);
    }

    sheet.sequence.position = Math.max(scroll.offset * sequenceLength, 0);

    // world.current.rotation.y += 0.0009;
  });

  return (
    <>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 4, 10]}
        fov={100}
        near={0.5}
        far={100}
      />

      <group ref={world}>
        <Spaceboi currentPageValue={currentPageValue} />
        <Helmet />
      </group>
      <Word
        onClick={() => setOpenText("about")}
        position={[-0.6, 1.7, 2.7]}
        children={"About"}
        scale={0.1}
        font={"title"}
      />
      <Word
        onClick={() => setOpenText("about")}
        position={[6.77, 4.6, -0.7]}
        children={"Tooling"}
        scale={0.1}
        font={"title"}
      />
      <Word
        onClick={() => setOpenText("about")}
        position={[-6.3, 4.57, -2.5]}
        children={"Experience"}
        scale={0.1}
        font={"title"}
      />
      <Word
        onClick={() => setOpenText("about")}
        position={[-2.3, 1.5, -4.3]}
        children={"Contacts"}
        scale={0.1}
        font={"title"}
      />
      <Word
        onClick={() => setOpenText("about")}
        position={[2.3, 2.3, -6.3]}
        children={"Credits"}
        scale={0.1}
        font={"title"}
      />
      {/* <Word
          position={[-0.83, 1.465, 2.7]}
          children={` My name is Valerio and
    I'm a full stack web developer.
    I deeply love the fusion of artistry
    and functionality even tough this one leans
    only towards the first end.`}
          scale={0.05}
        /> */}

      <Ufo2 currentPageValue={currentPageValue} />
      <ChanisawAstro />
      <Ufo onClick={() => s(4)} />
      <ChasingShip />
    </>
  );
};

import React from "react";

export default Scene;
