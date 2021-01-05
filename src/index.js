import React from "react";
import { render } from "react-dom";
import sum from "./sum";

render(<h1>Hello, World!</h1>, document.getElementById("root"));

sum(5,6);
const button = document.createElement("BUTTON");
button.innerText = "Click me!";
button.onclick = () => {
  // Import module only onclick()
  import("./image_viewer.js").then((module) => {
    module.addSmallImage();
  });
};

document.body.appendChild(button);
