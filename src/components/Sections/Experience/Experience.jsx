import React, { useEffect, useRef, useState } from "react";
import styles from "./experiences.module.scss";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import shuffleLetters from "shuffle-letters";
import azero from "/azero.png";
const Experience = ({ currentPageValue }) => {
  const initialValue = "Experience";
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

  useEffect(() => {
    if (titleRef.current) {
      shuffleLetters(titleRef.current, {
        fps: 10,
      });
    }
    // if (pRef.current) {
    //   shuffleLetters(pRef.current, {
    //     fps: 60,
    //   });
    //   // typing.current.play();
    // }
  }, [currentPageValue]);

  if (currentPageValue === 12) {
    return (
      <>
        <div className={styles.tooling}>
          <div className={styles.header}>
            <h3 id="aboutTitle" ref={titleRef} onMouseOver={handleMouseOver}>
              {text}
            </h3>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.block}>
              <div className={styles.date}>
                <span>2023</span> - present
              </div>

              <div className={styles.text}>
                <div className={styles.role}>Jr. Full Stack Developer</div>

                <p>
                  Develop and maintain front-end and back-end web and mobile
                  apps. In this role, my commitment lies in actively
                  collaborating with the development team to ensure the
                  effective implementation of solutions and innovative features,
                  ensuring an optimal user experience.
                </p>

                <div className={styles.at}>
                  <span>At: </span>
                  <a href="https://www.azero.it/" className={styles.companyPic}>
                    <img src={azero} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Experience;
