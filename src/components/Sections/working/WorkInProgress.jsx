import React, { useEffect, useRef, useState } from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import styles from "./work.module.scss";
import shuffleLetters from "shuffle-letters";

const WorkInProgress = ({ currentPageValue }) => {
  const initialValue = "Work in progress";
  const [text, setText] = useState(initialValue);
  const titleRef = useRef();

  let interval = null;

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return initialValue.charAt(index);
            }

            return letters.toLowerCase()[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= initialValue.length) {
        // Use 'text' here
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 500);
  };

  // useEffect(() => {
  //   if (titleRef.current) {
  //     shuffleLetters(titleRef.current, {
  //       fps: 1,
  //     });
  //   }
  //   // if (pRef.current) {
  //   //   shuffleLetters(pRef.current, {
  //   //     fps: 60,
  //   //   });
  //   //   // typing.current.play();
  //   // }
  // }, [currentPageValue]);

  if (currentPageValue === 1) {
    return (
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "max-content",
          height: "auto",
          padding: "3em",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          gap: 0,
        }}
        className={styles.work}
      >
        {/* <h3
          id="title"
          ref={titleRef}
          // onMouseOver={handleMouseOver}
          style={{ textAlign: "center", fontSize: "30px", position: "static" }}
        >
          {text}
        </h3> */}
        <span>W</span>
        <span>O</span>
        <span>r</span>
        <span>k</span>
        <span> &nbsp;</span>

        <span>i</span>

        <span>n</span>

        <span>&nbsp;</span>

        <span>P</span>

        <span>R</span>

        <span>o</span>

        <span>g</span>

        <span>r</span>

        <span>e</span>

        <span>s</span>

        <span>s</span>
      </div>
    );
  }
};

export default WorkInProgress;
