const inputForm = document.querySelector(".input-form");
const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-btn");
const input = emailInput.value;

inputForm.addEventListener("submit", inputAlert());
function inputAlert(input) {
  if (/[A-Z]/.test(input) == false) {
    alert("비번에 대문자 쳐넣으셈");
  } else {
    alert("hi");
  }
}

console.log(input);
