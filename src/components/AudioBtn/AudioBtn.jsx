import React from "react";
import styles from "./audioBtn.module.scss";

import ufo from "../../assets/icons/ufo.png";

const AudioBtn = ({ handleSoundToggle, isMuted, currentPageValue }) => {
  return (
    <div
      className={`${styles.btn} ${!isMuted ? styles.play : ""}`}
      onClick={handleSoundToggle}
    >
      {currentPageValue === 1 || currentPageValue === 2 ? (
        <span> {isMuted ? "Audio" : "Mute"}</span>
      ) : (
        <></>
      )}
      <img className={`${styles.icon} `} src={ufo} alt="" />
    </div>
  );
};

export default AudioBtn;
