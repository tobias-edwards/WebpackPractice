import small from "../assets/small.jpg";
import "../styles/image_viewer.css";

const addSmallImage = () => {
  const image = document.createElement("IMG");
  image.src = small;
  document.body.appendChild(image);
};

export { addSmallImage };
