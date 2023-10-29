import React, { useRef, useState } from "react";
import styles from "./tooling.module.scss";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Tooling = ({ currentPageValue }) => {
  const initialValue = "Tooling";
  const [text, setText] = useState(initialValue);
  const titleRef = useRef();

  const typing = useRef(new Audio("/sounds/data-reveal.mp3"));

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
  if (currentPageValue == 5) {
    return (
      <>
        <div className={styles.tooling}>
          <div className={styles.header}>
            <h3 id="aboutTitle" ref={titleRef} onMouseOver={handleMouseOver}>
              {text}
            </h3>
          </div>
          <div className={styles.orbit}>
            <ul className={styles.orbitWrap}>
              <li className={styles.orbitCenter}>
                <i className={styles.orbitCenterIcon}> {"</>"}</i>
              </li>
              {/* <li>
                <ul className={styles.ring0}>
                  <li>
                    <i className={styles.orbitIcon}>Python</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Flask</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Django</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}></i>
                  </li>
                </ul>
              </li> */}
              <li>
                <ul className={styles.ring1}>
                  <li>
                    <i className={styles.orbitIcon}>Flask</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Python</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Django</i>
                  </li>
                  {/* <li>
                    <i className={styles.orbitIcon}>Laravel</i>
                  </li> */}
                </ul>
              </li>
              <li>
                <ul className={styles.ring2}>
                  <li>
                    <i className={styles.orbitIcon}>Laravel</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Php</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Spring</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Java</i>
                  </li>
                </ul>
              </li>
              <li>
                <ul className={styles.ring3}>
                  <li>
                    <i className={styles.orbitIcon}>Vue</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>Next.js</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>React</i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>JS</i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

export default Tooling;
