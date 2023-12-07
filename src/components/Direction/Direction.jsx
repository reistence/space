import React from "react";
import styles from "./direction.module.scss";
import chev from "./../../assets/icons/down.png";

function Direction({ currentPageValue }) {
  if (currentPageValue === 1 || currentPageValue === 2) {
    return (
      <div className={styles.slide}>
        <img src={chev} alt="chevron" />
        <span>Scroll to fly</span>
      </div>
    );
  }
}

export default Direction;
