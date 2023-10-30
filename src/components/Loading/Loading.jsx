import React, { useEffect } from "react";

import styles from "./loading.module.scss";
import loading from "./../../assets/icons/loading.png";

function Loading() {
  return (
    // <div className={styles.loading}>
    //   <img src={loading} alt="" />
    // </div>
    <>
      <div className={styles.space}>
        <span className={styles.planet}></span>

        <div className={styles.orbits}>
          <div className={styles.orbit}>
            <div className={styles.orbitInner}>
              <span className={styles.planetoid}></span>
            </div>
          </div>

          <div className={styles.orbit}>
            <div className={styles.orbitInner}>
              <span className={styles.planetoid}></span>
            </div>
          </div>

          <div className={styles.orbit}>
            <div className={styles.orbitInner}>
              <span className={styles.planetoid}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
