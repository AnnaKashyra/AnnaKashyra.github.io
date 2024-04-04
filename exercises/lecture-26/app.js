"use strict";

// Task 1
// Функція calculate() приймає масив чисел як аргумент і повертає суму. Зробити calculate() функцією вищого порядку, змусивши її підтримувати операцію додавання над масивом чисел та операцію множення над масивом чисел
// calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію, другий аргумент - початкове значення, третій аргумент - масив чисел.
// calculate(sum, 0, [1, 2, 4]); // => 7 calculate(multiply, 1, [1, 2, 4]); // => 8

// function calculate(numbers) {
// 	let sum = 0;
// 	for (const number of numbers) {
// 		sum = sum + number;
// 	}
// 	return sum;
// }
// calculate([1, 2, 4]); // => 7

// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
  return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.
function multiply(n1, n2) {
  return n1 * n2;
}

function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}

console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));

// Task 2
// Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:
// name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ] name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]

let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(
    `name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`
  );
});

// Task 3
// Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree. Максимальна оцінка degree = 600. Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:
// { name: "Wick", degree: 375, percentage: 62.5 } { name: "Malcolm", degree: 405, percentage: 67.5 } { name: "Smith", degree: 453, percentage: 75.5 }

let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 },
];

const maxDegree = 600;

const result = students_information.map((student) => {
  const percentage = (student.degree / maxDegree) * 100;
  return {
    name: student.name,
    degree: student.degree,
    percentage: parseFloat(percentage.toFixed(1)),
  };
});

result.forEach((student) => {
  console.log(student);
});

// Task 4
// Використовуючи метод reduce, звести масив до одномірного

const arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const identicalArray = arr.reduce((accumulator, currentItem) => {
  return Array.isArray(currentItem)
    ? accumulator.concat(currentItem)
    : accumulator.concat([currentItem]);
}, []);

console.log(identicalArray);

// Task 5
// Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.

Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "string") {
      this[i] = this[i].toUpperCase();
    }
  }
};

function myFunc() {
  let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
  arr.upperCase();
  console.log(arr);
}

myFunc();
