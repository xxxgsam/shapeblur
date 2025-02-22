import React from "react";
import { createRoot } from "react-dom/client";
import Orb from "./Orb.js";

function App() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
