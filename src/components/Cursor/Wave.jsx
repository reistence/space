import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./cursor.module.scss";

const Wave = () => {
  const ref = (useRef < Element) | (null > null);
  const [mounted, setMounted] = useState(false);
  const [clickEffects, setClickEffects] = useState([]);

  const createClickEffect = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    // Add a new click effect to the state
    setClickEffects((prevEffects) => [
      ...prevEffects,
      { id: Date.now(), x, y },
    ]);

    // Remove the click effect
    setTimeout(() => {
      setClickEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.id !== clickEffects.id)
      );
    }, 1800);
  };

  useEffect(() => {
    document.addEventListener("click", createClickEffect);
    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", createClickEffect);
    };
  }, []);

  // useEffect(() => {
  //   const createWave = (e) => {
  //     let x = e.pageX;
  //     let y = e.pageY;
  //     let span = document.createElement("span");
  //     span.classList.add("click_effect");
  //     span.style.top = y + "px";
  //     span.style.left = x + "px";
  //     document.body.appendChild(span);
  //     setTimeout(() => {
  //       span.remove();
  //     }, 1800);
  //   };

  //   document.addEventListener("click", createWave);

  //   return () => {
  //     document.removeEventListener("click", createWave);
  //   };
  // }, []);

  return (
    <>
      {clickEffects.map((effect, k) => (
        <span
          key={k}
          className={styles.clickEffect}
          style={{ top: `${effect.y}px`, left: `${effect.x}px` }}
        ></span>
      ))}
    </>
  );
};

export default Wave;
