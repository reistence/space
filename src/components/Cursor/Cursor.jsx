import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import styles from "./cursor.module.scss";
// import circ from "../../assets/icons/circle.png";
const Cursor = ({ currentPageValue }) => {
  const circleArr = Array.from({ length: 100 });
  // cursor
  const myRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const circlesRef = useRef([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach(function (circle, index) {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
      // console.log(circle?.x);
    });

    const onMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const onMouseLeave = () => {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "hidden";
        }
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);

    const onMouseEnter = () => {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "visible";
        }
      }
    };
    document.addEventListener("mouseenter", onMouseEnter);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles?.forEach(function (circle, index) {
        if (circle) {
          circle.style.left = x + "px";
          circle.style.top = y + 5 + "px";

          circle.style.scale = (circles.length - index) / circles.length;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];

          x += (nextCircle?.x - x) * 0.5;
          y += (nextCircle?.y - y) * 0.5;
        }
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mounted]);

  useEffect(() => {
    myRef.current = document.querySelector("#cursor-root");
    setMounted(true);
  }, []);

  return mounted && myRef.current
    ? createPortal(
        <>
          {circleArr.map((c, index) => (
            <div
              key={index}
              className={styles.circle}
              ref={(el) => circlesRef.current.push(el)}
            ></div>
          ))}
        </>,
        myRef.current
      )
    : null;
};

export default Cursor;
