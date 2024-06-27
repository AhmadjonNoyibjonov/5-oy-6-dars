// const text = document.querySelector("p");

// text.addEventListener("click", function () {
//   text.style.color = "red";
// });

// text.addEventListener("dblclick", function () {
//   text.style.color = "yellow";
// });

// text.addEventListener("mouseover", function () {
//   text.style.color = "blue";
// });

// text.addEventListener("mouseout", function () {
//   text.style.color = "green";
// });

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

form.addEventListener("keyup", function (event) {
  event.preventDefault();

  button.addEventListener("click", function () {
    if (password === confrimPassword) {
      th1.appendChild(name.value);
      th2.appendChild(surname.value);
      th3.appendChild(phone.value);
      th4.appendChild(address.value);
      th5.appendChild(password.value);
      th6.appendChild(confrimPassword.value);
    }
  });
});
