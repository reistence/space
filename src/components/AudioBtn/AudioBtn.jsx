import React from "react";
import styles from "./audioBtn.module.scss";
import muteIcon from "../../assets/icons/mute.png";
import volumeIcon from "../../assets/icons/volume.png";

const AudioBtn = ({ handleSoundToggle, isMuted }) => {
  return (
    <div
      className={`${styles.btn} ${!isMuted ? styles.play : ""}`}
      onClick={handleSoundToggle}
    >
      <img className={`${styles.icon} `} src={muteIcon} alt="" />
    </div>
  );
};

export default AudioBtn;
