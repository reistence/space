import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./general.scss";
import Loading from "./components/Loading/Loading.jsx";
import { lazy } from "react";
import Cursor from "./components/Cursor/Cursor.jsx";
import Wave from "./components/Cursor/Wave.jsx";

const App = lazy(() => import("./App.jsx"));
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
studio.extend(extension);
studio.initialize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
      {/* <SpaceShip /> */}
    </Suspense>
    <Wave />
    <Cursor />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("cursor-root")).render(<Cursor />);
