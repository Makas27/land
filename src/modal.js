const openBtn = document.getElementById("open-btn");
const modalBackground = document.getElementById("modal-background");
const closeBtn = document.getElementById("close-btn");
const modalBody = document.querySelector(".modal-body");

const options = [
  { img: "1.webp", color: "black" },
  { img: "2.webp", color: "black" },
  { img: "3.webp", color: "black" },
  { img: "4.webp", color: "white" },
  { img: "5.webp", color: "white" },
  { img: "6.webp", color: "white" },
  { img: "7.webp", color: "white" },
  { img: "8.webp", color: "black" },
  { img: "9.webp", color: "white" },
  { img: "10.webp", color: "white" },
  { img: "11.webp", color: "white" },
  { img: "12.webp", color: "white" },
];

options.forEach(({ img: imageName, color }) => {
  const button = document.createElement("button");
  const img = document.createElement("img");
  img.setAttribute("data-image", imageName);
  img.setAttribute("data-color", color);
  img.src = `../assets/img/${imageName}`;
  button.appendChild(img);
  modalBody.appendChild(button);
});

closeBtn.addEventListener("click", function () {
  modalBackground.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});
