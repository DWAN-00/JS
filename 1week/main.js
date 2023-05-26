function displayBlockId() {
  const btn1 = document.getElementById("id-div");
  if (btn1.style.display !== "none") {
    btn1.style.display = "none";
  } else {
    btn1.style.display = "inline";
  }
}

function displayBlockPsw() {
  const btn2 = document.getElementById("psw-div");
  if (btn2.style.display !== "none") {
    btn2.style.display = "none";
  } else {
    btn2.style.display = "inline";
  }
}
