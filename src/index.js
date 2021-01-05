import React from "react";
import { render } from "react-dom";

render(<h1>Hello, World!</h1>, document.getElementById("root"));

const button = document.createElement("BUTTON");
button.innerText = "Click me!";
button.onclick = () => {
  // Import module only onclick()
  import("./image_viewer.js").then((module) => {
    module.addSmallImage();
  });
};

document.body.appendChild(button);
