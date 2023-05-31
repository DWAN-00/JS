function displayBlockId() {
  const btn1 = document.querySelector("#id-div");
  if (btn1.style.display !== "none") {
    btn1.style.display = "none";
  } else {
    btn1.style.display = "block";
  }
}

function displayBlockPsw() {
  const btn2 = document.querySelector("#psw-div");
  if (btn2.style.display !== "none") {
    btn2.style.display = "none";
  } else {
    btn2.style.display = "block";
  }
}
