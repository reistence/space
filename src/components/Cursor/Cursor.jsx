import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import styles from "./cursor.module.scss";
// import circ from "../../assets/icons/circle.png";
const Cursor = ({ currentPageValue }) => {
  const circleArr = Array.from({ length: 29 });
  const [isMoving, setIsMoving] = useState(false);
  const colors = [
    "#000000",
    "#010101",
    "#040404",
    "#050505",
    "#060606",
    "#070707",
    "#080808",
    "#090909",
    "#101010",
    "#181818",
    "#202020",
    "#282828",
    "#303030",
    "#383838",
    "#404040",
    "#484848",
    "#505050",
    "#585858",
    "#606060",
    "#686868",
    "#696969",
    "#707070",
    "#787878",
    "#808080",
    "#888888",
    "#909090",
    "#989898",
    "#A0A0A0",
    "#A8A8A8",
    // "#A9A9A9",
    // "#B0B0B0",
    // "#B8B8B8",
    // "#BEBEBE",
    // "#C0C0C0",
    // "#C8C8C8",
    // "#D0D0D0",
    // "#D3D3D3",
    // "#D8D8D8",
    // "#DCDCDC",
    // "#E0E0E0",
    // "#E8E8E8",
    // "#F0F0F0",
    // "#F5F5F5",
    // "#F8F8F8",
    // "#FFFFFF",
  ];

  colors.reverse();
  console.log(colors.length);

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
        // circle.style.backgroundColor = colors[index % colors.length];
      }
      // console.log(circle?.x);
    });

    const onMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      // setIsMoving(true);
    };

    window.addEventListener("mousemove", onMouseMove);

    const onMouseLeave = () => {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "hidden";
        }
      }
      // setIsMoving(false);
    };
    document.addEventListener("mouseleave", onMouseLeave);

    const onMouseEnter = () => {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "visible";
        }
      }
      // setIsMoving(true);
      console.log("enter");
    };
    document.addEventListener("mouseenter", onMouseEnter);

    function animateCircles() {
      // console.log(isMoving);
      // if (isMoving) {
      let x = coords.x;
      let y = coords.y;

      circles?.forEach(function (circle, index) {
        if (circle) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          circle.style.backgroundColor = colors[index % colors.length];

          circle.style.scale = (circles.length - index) / circles.length;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];

          x += (nextCircle?.x - x) * 0.5;
          y += (nextCircle?.y - y) * 0.5;
        }
      });
      // } else {
      //   circles?.forEach(function (circle, index) {
      //     if (circle) {
      //       circle.style.backgroundColor = colors[0];
      //     }
      //   });
      // }

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
