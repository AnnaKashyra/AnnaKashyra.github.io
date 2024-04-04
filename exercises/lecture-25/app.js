"use strict";

// Task 1
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.

const list = ['html', 'css', 'javascript', 'react.js'];

const ul = document.createElement('ul');

list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);

// Task 2
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Додайте створений список на сторінку.

const listWithHref = [
  {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
  {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
  {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
  {'react.js': "https://react.dev"}
];

const ol = document.createElement('ol');

listWithHref.forEach(item => {
  const text = Object.keys(item)[0];
  const href = Object.values(item)[0];
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.setAttribute('href', href);
  a.textContent = text;

  li.appendChild(a);
  ol.appendChild(li);
});

document.body.appendChild(ol);

// Task 3
// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.

const students = [
  {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
  {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
  {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
  {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers = Object.keys(students[0]);

headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    header.style.backgroundColor = 'blue';
    header.style.color = 'azure';
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

students.forEach(student => {
    const row = document.createElement('tr');
    headers.forEach(headerText => {
        const cell = document.createElement('td');
        cell.textContent = student[headerText];
        row.appendChild(cell);
    });
    table.appendChild(row);
});

document.body.appendChild(table);


