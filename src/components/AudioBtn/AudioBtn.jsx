import React from "react";
import styles from "./audioBtn.module.scss";

import ufo from "../../assets/icons/ufo.png";

const AudioBtn = ({ handleSoundToggle, isMuted }) => {
  return (
    <div
      className={`${styles.btn} ${!isMuted ? styles.play : ""}`}
      onClick={handleSoundToggle}
    >
      <img className={`${styles.icon} `} src={ufo} alt="" />
    </div>
  );
};

export default AudioBtn;
