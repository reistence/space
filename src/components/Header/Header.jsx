import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import shuffleLetters from "shuffle-letters";
import { useScroll } from "@react-three/drei";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Header({ sheet }) {
  console.log(sheet.sequence.position);
  // const scroll = useScroll();
  // console.log(scroll);

  // const scrollToPage = (targetPage) => {
  //   const targetPosition = (targetPage - 1) / 20;
  //   scroll.offset = targetPosition;
  // };

  const initialValue = "reistence";
  const [text, setText] = useState(initialValue);

  let interval = null;

  const click = () => {
    sheet.sequence.position + 1;
  };

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
    shuffleLetters(document.querySelector("h3"), {
      fps: 10,
    });
  }, []);

  return (
    <header>
      <div className={styles.container}>
        {/* <picture className={styles.pic}>
          <img src="/pic.png" alt="profile pic" />
        </picture> */}

        <h3 data-value="REISTENCE" onMouseOver={handleMouseOver}>
          {text}
        </h3>
      </div>
    </header>
  );
}

export default Header;
