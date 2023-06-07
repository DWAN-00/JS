const score1 = document.getElementsByClassName("test-1");
const score2 = document.getElementsByClassName("test-2");

function scoreConfirm(score1, score2) {
  if (score1 + score2 >= 120) {
    alert("합격");
  } else if (score1 < 40 || score2 < 40) {
    alert("불합격");
  } else {
    alert("불합격");
  }
}
