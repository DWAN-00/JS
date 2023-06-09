const container = document.querySelector(".container");
const slide = document.querySelector(".slide-container");
const button = document.querySelector(".btn");

function slideAction() {
  container.classList.add("slide-container");
}

button.addEventListener("click", slideAction);
