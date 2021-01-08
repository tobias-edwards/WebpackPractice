import React from "react";
import { render } from "react-dom";
import App from "./app";
import sum from "./sum";

// Make root component hot-exported
render(<App />, document.getElementById("root"));

const button = document.createElement("BUTTON");
button.innerText = "Click me!";
button.onclick = () => {
  // Import module only onclick()
  import("./image_viewer.js").then((module) => {
    module.addSmallImage();
  });
};

document.body.appendChild(button);
