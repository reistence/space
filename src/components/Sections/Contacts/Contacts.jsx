import React, { useEffect, useRef, useState } from "react";
import styles from "./contacts.module.scss";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import shuffleLetters from "shuffle-letters";
import github from "../../../assets/icons/github.png";
import gmail from "../../../assets/icons/gmail.png";
import linkedin from "../../../assets/icons/linkedin.png";

const Contacts = ({ currentPageValue }) => {
  const initialValue = "Contacts";
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

  if (currentPageValue === 23 || currentPageValue === 24) {
    return (
      <>
        <div className={styles.tooling}>
          <div className={styles.header}>
            <h3
              ref={titleRef}
              // onMouseOver={handleMouseOver}
            >
              {text}
            </h3>
          </div>
          <div className={styles.wrapper}>
            <a className={styles.icon} href="https://github.com/reistence">
              <img src={github} />
            </a>
            <a className={styles.icon} href="mailto:gvlamberti@gmail.com">
              <img src={gmail} />
            </a>
            <a
              className={styles.icon}
              href="https://www.linkedin.com/in/valerio-gunter-lamberti/"
            >
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Contacts;
