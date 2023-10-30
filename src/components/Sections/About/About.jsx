import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.scss";
import shuffleLetters from "shuffle-letters";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import pic from "/pic.png";
const About = ({ currentPageValue }) => {
  const initialValue = "About";
  const [text, setText] = useState(initialValue);
  const titleRef = useRef();
  const pRef = useRef();
  // const typing = useRef(new Audio("/sounds/data-reveal.mp3"));

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
    if (pRef.current) {
      shuffleLetters(pRef.current, {
        fps: 60,
      });
      // typing.current.play();
    }
    // const timeoutId = setTimeout(() => {
    //   typing.current.pause();
    //   typing.current.currentTime = 0;
    // }, 5000);

    // // Cleanup function
    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [currentPageValue]);

  if (currentPageValue === 4) {
    return (
      <div className={styles.about}>
        <div>
          <h3 id="aboutTitle" ref={titleRef} onMouseOver={handleMouseOver}>
            {text}
          </h3>

          <div className={styles.pic}>{/* <img src={pic} /> */}</div>
        </div>
        <p ref={pRef}>
          My name is Valerio and I'm a Full Stack Web Developer. I deeply love
          the fusion of artistry and functionality even tough this one is
          neither of them.
          {/* I have an unwavering
          enthusiasm for crafting digital experiences that are not only visually
          captivating but also incredibly practical. */}
        </p>
      </div>
    );
  }
};

export default About;
