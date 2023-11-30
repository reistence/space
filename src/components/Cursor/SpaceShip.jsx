import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import styles from "./cursor.module.scss";
import { Canvas } from "@react-three/fiber";
import {
  OrthographicCamera,
  PerspectiveCamera,
  SheetProvider,
} from "@theatre/r3f";
import { Ufo2 } from "../Ufo2";
import { SpaceShip1 } from "../SpaceShip1";
// import circ from "../../assets/icons/circle.png";
const SpaceShip = ({ currentPageValue }) => {
  const circleArr = Array.from({ length: 100 });
  // cursor
  const myRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const circlesRef = useRef([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const circles = circlesRef.current;

  //   circles.forEach(function (circle, index) {
  //     if (circle) {
  //       circle.x = 0;
  //       circle.y = 0;
  //     }
  //     // console.log(circle?.x);
  //   });

  //   const onMouseMove = (e) => {
  //     coords.x = e.clientX;
  //     coords.y = e.clientY;
  //   };

  //   window.addEventListener("mousemove", onMouseMove);

  //   const onMouseLeave = () => {
  //     for (let index = 0; index < circles.length; index++) {
  //       const singleCircle = circles[index];
  //       if (singleCircle) {
  //         singleCircle.style.visibility = "hidden";
  //       }
  //     }
  //   };
  //   document.addEventListener("mouseleave", onMouseLeave);

  //   const onMouseEnter = () => {
  //     for (let index = 0; index < circles.length; index++) {
  //       const singleCircle = circles[index];
  //       if (singleCircle) {
  //         singleCircle.style.visibility = "visible";
  //       }
  //     }
  //   };
  //   document.addEventListener("mouseenter", onMouseEnter);

  //   function animateCircles() {
  //     let x = coords.x;
  //     let y = coords.y;

  //     circles?.forEach(function (circle, index) {
  //       if (circle) {
  //         circle.style.left = x + "px";
  //         circle.style.top = y + 5 + "px";

  //         circle.style.scale = (circles.length - index) / circles.length;

  //         circle.x = x;
  //         circle.y = y;

  //         const nextCircle = circles[index + 1] || circles[0];

  //         x += (nextCircle?.x - x) * 0.5;
  //         y += (nextCircle?.y - y) * 0.5;
  //       }
  //     });

  //     requestAnimationFrame(animateCircles);
  //   }

  //   animateCircles();

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //     document.removeEventListener("mouseleave", onMouseLeave);
  //     document.removeEventListener("mouseenter", onMouseEnter);
  //   };
  // }, [mounted]);

  useEffect(() => {
    myRef.current = document.querySelector("#ship");
    setMounted(true);
    console.log("ww");
  }, []);

  return mounted && myRef.current
    ? createPortal(
        <>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Canvas
              gl={{ preserveDrawingBuffer: true }}
              // camera={{ position: [-2, 2, 6], fov: 90, near: 0.5, far: 100 }}
            >
              {/* <color attach="background" args={["#07070700"]} /> */}
              {/* <PerspectiveCamera
              // theatreKey="Camera"
              // makeDefault
            /> */}

              <SpaceShip1 />
            </Canvas>
          </div>
        </>,
        myRef.current
      )
    : null;
};

export default SpaceShip;
