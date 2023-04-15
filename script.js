let btn = document.getElementById("btn");
btn.addEventListener("click", () => validate());
function validate() {
  let email = document.getElementById("email").value.trim();
  if (!isEmail(email)) {
    document.getElementById("errorMsg").style.display = "block";
  } else {
    document.getElementById("errorMsg").style.display = "none";
  }
}
function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
