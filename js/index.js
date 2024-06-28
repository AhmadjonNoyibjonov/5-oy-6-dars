const form = document.querySelector(".block .form");
const name = document.querySelector(".form .name");
const surname = document.querySelector(".form .surname");
const phone = document.querySelector(".form .phone");
const address = document.querySelector(".form .addres");
const password = document.querySelector(".form .password");
const confrimPassword = document.querySelector(".form .confrim_password");

const check = document.querySelector(".form div #check");

const button = document.querySelector(".block button");

const th1 = document.querySelector("table .th1");
const th2 = document.querySelector("table .th2");
const th3 = document.querySelector("table .th3");
const th4 = document.querySelector("table .th4");
const th5 = document.querySelector("table .th5");
const th6 = document.querySelector("table .th6");

check.onclick = logPassword;
function logPassword() {
  if (check.checked) {
    password.type = "text";
    confrimPassword.type = "text";
  } else {
    password.type = "password";
    confrimPassword.type = "password";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (password.value == confrimPassword.value) {
    th1.textContent = name.value;
    th2.textContent = surname.value;
    th3.textContent = phone.value;
    th4.textContent = address.value;
    th5.textContent = password.value;
    th6.textContent = confrimPassword.value;
  }
});
