import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import FluidsScript from "./FluidsScript";

const Fluids = () => {
  useEffect(() => {
    FluidsScript();

    return () => {
      // Clean-up
    };
  }, []);

  // Create a new HTML element to serve as the portal container
  const portalContainer = document.createElement("div");
  portalContainer.id = "fluids-container";
  portalContainer.style.position = "fixed";
  portalContainer.style.top = "0";
  portalContainer.style.left = "0";
  portalContainer.style.width = "100%";
  portalContainer.style.height = "100%";
  portalContainer.style.zIndex = "0"; // Set a negative z-index to render it behind other content

  useEffect(() => {
    // Append the portal container to the document body when the component mounts
    document.body.appendChild(portalContainer);
    FluidsScript();

    // Remove the portal container from the document body when the component unmounts
    return () => {
      document.body.removeChild(portalContainer);
    };
  }, [portalContainer]);

  // Render the Fluids component into the portal container
  return createPortal(
    <canvas id="fluids">
      <p style={{ zIndex: 9999 }}>yo</p>
    </canvas>,
    portalContainer
  );
};

export default Fluids;
