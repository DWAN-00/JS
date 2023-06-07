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

//input이 아니라 form의 event를 listen해야 submit할 때 반응한다 ㅇㅇ;;;;;;왜 그럴까
