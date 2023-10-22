import React, { useState } from "react";
import styles from "./header.module.scss";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Header() {
  const initialValue = "REISTENCE";
  const [text, setText] = useState(initialValue);

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

            return letters[Math.floor(Math.random() * 26)];
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
