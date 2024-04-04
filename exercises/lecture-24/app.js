"use strict";

const colors = ["blue", "green", "white"];

// Task 1
// Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль. Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.

function iter(item) {
	console.log(item);
}

colors.forEach(iter);

// Task 2
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів. Повідомлення має містити значення «item» і значення «index» - ${item} has index ${index}. Використовуючи forEach() та функцію iterate, вивести в консоль значення кожного кольору
// Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!', коли функція виконує останню ітерацію для елементів colors.

function iterate(item, index) {
	console.log(`${item} has index ${index}`);
}

colors.forEach(iterate);

function iterate(item, index) {
	if (index === colors.length - 1) {
		console.log("The last iteration!");
	} else {
		console.log(`${item} has index ${index}`);
	}
}

colors.forEach(iterate);

// Task 3
//Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window». Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».

const letters = ["a", "b", "c"];
function iterate(letter) {
	if (this === window) {
		console.log(true);
	}
}

letters.forEach(iterate, window);

// Task 4
// Встановити, чи всі числа масиву парні методом forEach()

const Numbers = [22, 3, 4, 10];
let isNumbersEven = true;

Numbers.forEach(function (number) {
	if (number % 2 !== 0) {
		isNumbersEven = false;
	}
});

if (isNumbersEven) {
	console.log("Всі числа в масиві парні.");
} else {
	console.log("Не всі числа в масиві парні.");
}

// Task 5
// Встановити, чи всі числа масиву парні методом every()

isNumbersEven = Numbers.every((number) => number % 2 === 0);

if (isNumbersEven) {
	console.log("Всі числа в масиві парні.");
} else {
	console.log("Не всі числа в масиві парні.");
}

// Task 6
// Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову fruit === "blueberries".

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index);

// Task 7
// Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.

// const arr = [7, 33, 47, 99, 2, 103, 79];
// const result = arr.find(element => element > 10);

// console.log(result);

// Task 8
// Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.

const array = [1, 2, 3, 4, 5];
const result = array.some(element => element % 2 === 0);

console.log(result);

// Task 9
// Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);

console.log(numbers);
