"use string";

// Task 1
// Створити клас AuthException, розширивши клас Error. В методі constructor(code, message) визначити властивість this.message, що дорівнює code: message або code, якщо message не передано як аргумент.

class AuthException extends Error {
  constructor(code, message) {
    const fullMessage = message ? `${code}: ${message}` : code;
    super(fullMessage);
    this.name = code;
    this.code = code;
    this.message = fullMessage;
  }

  toString() {
    return this.message;
  }
}

// Task 2
// Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.

const checkAuth = document.querySelector(".check-auth");

// Task 3
// За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.
// У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток AuthException('FORBIDDEN', 'You don't have access to this page').
// У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId, відобразивши його у параграфі з класом ="message".
// Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода window.open відкрити сторінку success.html.

const isAuth = (auth) => auth ?? false;
const dialogBoxId = document.getElementById("dialogBox");

checkAuth.addEventListener("click", function () {
  try {
    if (!isAuth()) {
      throw new AuthException(
        "FORBIDDEN",
        "You don't have access to this page"
      );
    } else {
      window.open("success.html");
    }
  } catch (e) {
    const messageElement = dialogBoxId.querySelector(".message");
    messageElement.textContent = e.message;
    dialogBoxId.showModal();
  }
});

function closeDialog() {
  dialogBoxId.close();
}
