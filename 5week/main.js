const inputs = document.getElementById("answer");
const inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", sendAnswer);
function sendAnswer() {
  if (inputs.value == 1335) {
    alert("정답");
  } else {
    alert("오답");
  }
}
