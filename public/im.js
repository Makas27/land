const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const greeting = document.querySelector("#greeting");

const bgFromStorage = localStorage.getItem("back");
const colorFromStorage = localStorage.getItem("color");

body.style["background-image"] = bgFromStorage || 'url("../assets/img/1.jpg")';
greeting.style.color = colorFromStorage;

document.querySelector(".modal-body").addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgName = e.target.getAttribute("data-image");
  const greetingColor = e.target.getAttribute("data-color");

  console.log(greetingColor);

  greeting.style.color = greetingColor;

  const img = `url("../assets/img/${imgName}")`;

  body.style["background-image"] = img;
  localStorage.setItem("back", img);
  localStorage.setItem("color", greetingColor);
});
