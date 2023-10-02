const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const error = document.querySelector(".error");

function validate() {
  if (
    password.textContent === confirmPassword.textContent &&
    password.value.length > 0 &&
    confirmPassword.value.length > 0
  ) {
    password.style.backgroundColor = "rgb(132, 234, 217)";
    confirmPassword.style.backgroundColor = "rgb(132, 234, 217)";
  } else {
    password.style.backgroundColor = "lightcoral";
    confirmPassword.style.backgroundColor = "lightcoral";
    error.textContent =
      "Passwords do not match or the text length is too short";
  }
}

window.addEventListener("click", validate);
