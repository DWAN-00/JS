const alert = document.querySelector(".alert");
const time = document.querySelector(".time");

const timeSale = function () {
  alert.style.display = "none";
};

const timeReduce = function () {
  time.textContent--;
};

setTimeout(timeSale, 5000);
setInterval(timeReduce, 1000);
