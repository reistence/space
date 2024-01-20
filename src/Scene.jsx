import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { Spaceboi } from "./components/Spaceboi";
import { ChanisawAstro } from "./components/ChainSawAstro";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { Helmet } from "./components/Helmet";

import { Word } from "./components/Word/Word";

const Scene = ({ currentPageValue }) => {
  return (
    <>
      {/* <Word
        onClick={() => setOpenText("about")}
        position={[2.3, 2.3, -6.3]}
        children={"Credits"}
        scale={0.1}
        font={"title"}
      /> */}

      {/* <Ufo2 currentPageValue={currentPageValue} /> */}
      {/* <ChanisawAstro /> */}
      {/* <Ufo onClick={() => s(4)} /> */}
      {/* <ChasingShip /> */}
    </>
  );
};

import React from "react";

export default Scene;
