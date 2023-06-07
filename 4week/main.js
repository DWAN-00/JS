var count = 0;
var check = document.getElementsByTagName("checkbox");
const backGround = document.getElementsByClassName("bg");
var modeSwitch = document.querySelector(".check-box");
var modeCheck = document.querySelectorAll("p");
const darkMode = document.getElementsByClassName("dark-mode");
const lightMode = document.getElementsByClassName("light-mode");
var bodyElement = document.body;

modeSwitch.addEventListener("click", function () {
  modeCheck.forEach(function (p) {
    p.classList.toggle("p-dark");
  });

  bodyElement.classList.toggle("dark-mode");
});
