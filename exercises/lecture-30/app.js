"use strict";

// Task 1
// Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми. Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті. Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!

function waitForUserInput() {
  setTimeout(function () {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;

    if (firstName === "" && lastName === "") {
      document.getElementById("waiting").textContent = "I'm miss You";
    } else {
      document.getElementById(
        "waiting"
      ).textContent = `Hello ${firstName} ${lastName}!`;
    }
  }, 10000);
}

waitForUserInput();

// Task 2
// Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().
// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат всередину елемента з id="demo".

const xhr = new XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", url, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    const template = (item) => `
      <div class="posts">
        <h2 class="posts-title">${item.title}</h2>
        <p class="posts-text">${item.body}</p>
      </div>
    `;

    const slicedData = data.slice(0, 10);
    let html = "";
    slicedData.forEach((post) => {
      html += template(post);
    });

    document.getElementById("demo").innerHTML = html;
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

xhr.send();
