"use strict";

// Task 1
// Знайти елемент ul у документі та запам'ятати його у змінній ul.

const ul = document.querySelector('ul');

// Task 2
// За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. Якщо елемент відсутній, створити його зі значенням [].

const storedItems = localStorage.getItem('items');

let itemsArray;
if (storedItems) {
    itemsArray = JSON.parse(storedItems);
} else {
    itemsArray = [];
}

// Task 3
// Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.

function addTask(text) {
  const newItem = document.createElement('li');
  newItem.textContent = text;
  const todoList = document.querySelector('.to-do-list');
  todoList.appendChild(newItem);
}

// Task 4
// Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.

itemsArray.forEach(item => {
    addTask(item);
});

// Task 5
// Знайти елемент input у документі та запам'ятати його у змінній input.

const input = document.getElementById('item');

// Task 6
// Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.

function add() {
  const inputValue = input.value;
  itemsArray.push(inputValue);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(inputValue);
  input.value = '';
}

// Task 7
// Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.

function del() {
  localStorage.removeItem('items');
  itemsArray = [];
  const todoList = document.querySelector('.to-do-list');
  todoList.innerHTML = '';
}

