var count = 0;
const backGround = document.getElementsByClassName("bg");
var modeSwitch = document.querySelector(".check-box");
var modeCheck = document.querySelectorAll("p");
const darkMode = document.getElementsByClassName("dark-mode");
const lightMode = document.getElementsByClassName("light-mode");

modeSwitch.addEventListener("click", function () {
  modeCheck.forEach(function (p) {
    p.classList.toggle("p-dark");
  });

  document.body.classList.toggle("dark-mode");

  count++;
  console.log(count);
});
