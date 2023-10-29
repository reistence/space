import React, { useRef, useState } from "react";
import styles from "./tooling.module.scss";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// icon paths
import php from "../../../assets/icons/php.png";
import py from "../../../assets/icons/python.png";
import react from "../../../assets/icons/react.png";
import next1 from "../../../assets/icons/nextjs.png";
import java from "../../../assets/icons/java.png";
import vue from "../../../assets/icons/vue.png";
import flask from "../../../assets/icons/flask.png";
import dj from "../../../assets/icons/dj.png";
import lara from "../../../assets/icons/lara.png";
import spring from "../../../assets/icons/spring.png";
import js from "../../../assets/icons/js.png";
import astro from "../../../assets/icons/astro.png";

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
                    <i className={styles.orbitIcon}>
                      <img src={flask} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={py} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={dj} alt="" srcset="" />
                    </i>
                  </li>
                  {/* <li>
                    <i className={styles.orbitIcon}>Laravel</i>
                  </li> */}
                </ul>
              </li>
              <li>
                <ul className={styles.ring2}>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={lara} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={php} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={spring} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={java} alt="" srcset="" />
                    </i>
                  </li>
                </ul>
              </li>
              <li>
                <ul className={styles.ring3}>
                  {/* <li>
                    <i className={styles.orbitIcon}>
                      <img src={astro} alt="" srcset="" />
                    </i>
                  </li> */}
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={vue} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={next1} alt="" srcset="" />
                    </i>
                  </li>

                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={react} alt="" srcset="" />
                    </i>
                  </li>
                  <li>
                    <i className={styles.orbitIcon}>
                      <img src={js} alt="" srcset="" />
                    </i>
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
