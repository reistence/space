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

  useEffect(() => {
    if (titleRef.current) {
      shuffleLetters(titleRef.current, {
        fps: 10,
      });
    }
  }, [currentPageValue]);

  if (currentPageValue === 20 || currentPageValue === 21) {
    return (
      <>
        <div className={styles.tooling}>
          <div className={styles.header}>
            <h3 ref={titleRef} onMouseOver={handleMouseOver}>
              {text}
            </h3>
          </div>
          <div className={styles.wrapper}>
            <div>
              <p>Font</p>
              <a
                className={styles.icon}
                href="https://www.fontspace.com/fakeblood-font-f105332"
              >
                FakeBlood
              </a>
            </div>
            <div>
              <p>GLB Models</p>
              <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/space-boi-f6a8c6a6727b4f2cb020c8b50bb2ee60"
              >
                Spaceboi
              </a>
              <br />
              <a
                className={styles.icon}
                href="https://sketchfab.com/3d-models/chainsaw-man-darkness-demon-8218cc69a7a244ecbe49f842d9d882c7"
              >
                Chainsaw man
              </a>
            </div>
            <div>
              <p>Sound</p>
              <a className={styles.icon} href="https://github.com/reistence">
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
