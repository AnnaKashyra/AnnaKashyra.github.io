"use strict";

// Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля. Виконати базову перевірку:

// ім’я користувача не може бути пустим,
// електронна адреса має бути у правильному форматі,
// пароль має містити принаймні 8 символів,
// пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.

// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.

// Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.

// const form = document.getElementById('registrationForm');
// const errorMessages = document.getElementById('errorMessages');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     errorMessages.innerHTML = '';

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (username.trim() === '') {
//         displayError('Username cannot be empty.');
//         return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         displayError('Invalid email format.');
//         return;
//     }

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordRegex.test(password)) {
//         displayError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
//         return;
//     }

//     alert('Form submitted successfully!');
//     form.reset();
// });

// form.querySelectorAll('input').forEach(input => {
//   input.addEventListener('input', function() {
//       errorMessages.innerHTML = '';
//       this.classList.remove('error');
//   });
// });

// function displayError(message, inputName) {
//     const errorMessage = document.createElement('div');
//     errorMessage.textContent = message;
//     errorMessages.appendChild(errorMessage);
//     document.getElementById(inputName).classList.add('error');
// }

const form = document.getElementById("registrationForm");
const errorMessages = document.getElementById("errorMessages");

// Додаємо обробник події submit для форми
form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorMessages.innerHTML = "";

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "") {
    displayError("Username cannot be empty.", "username");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayError("Invalid email format.", "email");
    return;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    displayError(
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.",
      "password"
    );
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
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
