import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./cursor.module.scss";
import circ from "../../assets/icons/circle.png";
const Cursor = ({ currentPageValue }) => {
  const circleArr = Array.from({ length: 50 });
  // cursor
  const circlesRef = useRef([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current;
    // console.log(circles);

    // console.log(circles[0].x);
    circles.forEach(function (circle, index) {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
      // console.log(circle?.x);
    });

    const onMouseMove = (e) => {
      //   setCoords({ x: e.clientX, y: e.clientY });
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);
    // window.addEventListener("mousemove", function (e) {
    //   coords.x = e.clientX;
    //   coords.y = e.clientY;
    //   //   setCoords({ x: e.clientX, y: e.clientY });
    // });

    const onMouseLeave = () => {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "hidden";
        }
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);

    // document.addEventListener("mouseleave", function () {
    //   for (let index = 0; index < circles.length; index++) {
    //     const singleCircle = circles[index];
    //     if (singleCircle) {
    //       singleCircle.style.visibility = "hidden";
    //     }
    //   }
    // });

    const onMouseEnter = () => {
      for (let index = 0; index < circles.length; index++) {
        const singleCircle = circles[index];
        if (singleCircle) {
          singleCircle.style.visibility = "visible";
        }
      }
    };
    document.addEventListener("mouseenter", onMouseEnter);

    // document.addEventListener("mouseenter", function () {
    //   for (let index = 0; index < circles.length; index++) {
    //     const singleCircle = circles[index];
    //     if (singleCircle) {
    //       singleCircle.style.visibility = "visible";
    //     }
    //   }
    // });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles?.forEach(function (circle, index) {
        if (circle) {
          circle.style.left = x + "px";
          circle.style.top = y + "px";

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
  }, []);

  return (
    <>
      {circleArr.map((c, index) => (
        <div
          key={index}
          className={styles.circle}
          ref={(el) => circlesRef.current.push(el)}
        >
          {/* <img src={circ}></img> */}
        </div>
      ))}
    </>
  );
};

export default Cursor;
