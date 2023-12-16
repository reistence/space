import React, { useEffect, useRef, useState } from "react";
import styles from "./credits.module.scss";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import shuffleLetters from "shuffle-letters";

const Credits = ({ currentPageValue }) => {
  const initialValue = "Credits";
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
    }, 60);
  };

  // useEffect(() => {
  //   if (titleRef.current) {
  //     shuffleLetters(titleRef.current, {
  //       fps: 10,
  //     });
  //   }
  // }, [currentPageValue]);

  if (
    // currentPageValue === 28 ||
    // currentPageValue === 29 ||
    currentPageValue === 30
  ) {
    return (
      <>
        <div className={styles.tooling}>
          <div className={styles.header}>
            {/* <h3 ref={titleRef} onMouseOver={handleMouseOver}>
              {text}
            </h3> */}
          </div>
          <div className={styles.wrapper}>
            <div className={styles.section}>
              <p>Font</p>
              <a
                className={styles.icon}
                href="https://www.fontspace.com/other-future-font-f97625"
              >
                Other Future
              </a>
              <a
                className={styles.icon}
                href="https://www.fontspace.com/st-future-is-here-1920-font-f106581"
              >
                Future is here
              </a>
            </div>
            <div className={styles.section}>
              <p>GLB Models</p>
              <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/space-boi-f6a8c6a6727b4f2cb020c8b50bb2ee60"
              >
                Spaceboi
              </a>

              <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/chainsaw-man-darkness-demon-8218cc69a7a244ecbe49f842d9d882c7"
              >
                Chainsaw man
              </a>
              {/* <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/inktober-2-mindless-22e4f5d167ad4724883dd36cf935bdf7"
              >
                Jellyfish
              </a> */}
              <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/low-poly-space-helmet-untextured-5f1ec10379534ecbb320f8cfbb1dbe2a"
              >
                Space Helmet
              </a>
              <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/simple-ufo-with-lights-533f12e402f2477cb438d4883144bba7"
              >
                Ufos
              </a>
            </div>
            <div className={styles.section}>
              <p>Sound</p>
              <a
                className={styles.icon}
                href="https://motionarray.com/royalty-free-music/mystic-soundscapes-1072130/"
              >
                Mystic Space Sound
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Credits;
