"use strict";

// Form validation //////////////////

const form = document.getElementById("contactForm");
const errorMessages = document.getElementById("errorMessages");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorMessages.innerHTML = "";

  const firstName = document.getElementById("first__name").value.trim();
  const lastName = document.getElementById("last__name").value.trim();
  const email = document.getElementById("email").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const text = document.getElementById("textarea").value.trim();

  if (firstName === "") {
    displayError("Введіть ваше ім'я", "first__name");
    return;
  }

  if (lastName === "") {
    displayError("Введіть ваше прізвище", "last__name");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayError("Неправильний формат адреси", "email");
    return;
  }

  const telTest = /^\+?3?8?(0\d{9})$/;
  if (!telTest.test(tel)) {
    displayError("Неправильний формат номеру", "tel");
    return;
  }

  if (text === "") {
    displayError("Ви нічого не написали", "textarea");
    return;
  }

  if (!errorMessages.innerHTML) {
    alert("Ваше повідомлення відправлено!");
    form.reset();
  }
});

function displayError(message, inputName) {
  const errorMessage = document.createElement("div");
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
  document.getElementById(inputName).classList.add("error");
}

form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", function () {
    errorMessages.innerHTML = "";
    this.classList.remove("error");
  });
});
// ///////////////////////////////////