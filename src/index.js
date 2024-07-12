import "./styles.css";

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("GrandParent clicked!");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation();
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked!");
  },
  false
);
