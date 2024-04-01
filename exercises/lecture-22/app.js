"use strict";

// Task 1
// Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

// const h1Elements = document.querySelectorAll('h1');

// console.log(typeof h1Elements);
// console.log(h1Elements.length);

// let index = 0;
// for (const element of h1Elements) {
//   console.log(element);
//   index++;
// }

// Task 2
// Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"

const firstParagraph = document.querySelector("#p1");
firstParagraph.style.backgroundColor = "gold";

// Task 3
// Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;

const secondParagraph = document.querySelector("#p2");
secondParagraph.style.cssText =
  "background-color: gold; color: blue; font-size: 2rem;";

// Task 4
// Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third

const thirdParagraph = document.querySelector("#p3");
thirdParagraph.classList.add("third");

// Task5
// Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border

const fourthParagraph = document.querySelector("#p4");
fourthParagraph.classList.add("fourth", "border");

// Task 6
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

// const containers = document.querySelectorAll('.container');

// for (const container of containers) {
//   const firstChild = container.firstElementChild;
//   console.log(firstChild);
// }

// Task 7
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.

const containers = document.querySelectorAll(".container");

for (const container of containers) {
  const firstChild = container.firstElementChild;
  console.log(firstChild.textContent);
}

// Task 8
// Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином

// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4
// зберегти початкові атрибути id та class

// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином

// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth

const headers = document.querySelectorAll(".container header");
const classes = ["first", "second", "third", "fourth"];

let index = 0;
for (const header of headers) {
  const id = header.id;
  const originalClass = header.className;

  let newTag;
  if (index === 1) {
    newTag = document.createElement("h2");
  } else if (index === 2) {
    newTag = document.createElement("h3");
  } else if (index === 3) {
    newTag = document.createElement("h4");
  } else {
    newTag = document.createElement("h1");
  }

  newTag.id = id;
  newTag.className = originalClass;
  newTag.textContent = header.textContent;

  header.parentNode.replaceChild(newTag, header);
  newTag.classList.add(classes[index]);

  index++;
}
