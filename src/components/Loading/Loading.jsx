import React, { useEffect } from "react";

import styles from "./loading.module.scss";
import loading from "./../../assets/icons/loading.png";

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="" />
    </div>
  );
}

export default Loading;
