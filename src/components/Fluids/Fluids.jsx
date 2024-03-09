import React, { useEffect } from "react";
import FluidsScript from "./FluidsScript";

const Fluids = () => {
  useEffect(() => {
    FluidsScript();

    return () => {
      // Clean-up
    };
  }, []);

  return <canvas id="fluids"></canvas>;
};

export default Fluids;
