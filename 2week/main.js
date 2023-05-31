const modal = document.querySelector(".bg");
const inputForm = document.getElementById("inputForm");
const openBtn = document.querySelector(".open-btn");
const idInput = document.getElementById("input-id");
const pwInput = document.getElementById("input-pw");

document
  .querySelector(".btn-danger")
  .addEventListener("click", function displayBlock() {
    modal.style.display = "none";
  });

openBtn.addEventListener("click", function displayOpen() {
  modal.style.display = "block";
});

inputForm.addEventListener("submit", function (event) {
  if (idInput.value == "") {
    alert("please check id");
    event.preventDefault();
  } else if (pwInput.value == "") {
    alert("please check pw");
    event.preventDefault();
  }
});

inputForm.addEventListener("submit", function (event) {
  if (idInput.value.length < 6) {
    alert("id must be over 6");
    event.preventDefault();
  } else if (pwInput.value.length < 6) {
    alert("pw must be over 6");
    event.preventDefault();
  }
});
