"use strict";
// Task 1
const fruits = "apple banana cantaloupe blueberries grapefruit";
let fruitsArray = fruits.split(" ");
console.log(typeof fruitsArray);
console.log(fruitsArray);

// Task 2
for (let i = 0; i < fruitsArray.length; i++) {
	console.log(fruitsArray[i]);
}

// Task 3
// let i = 0;
// while (i < fruitsArray.length) {
//   console.log(fruitsArray[i]);
//   i++;
// }

// Task 4
let i = 0;
do {
	console.log(fruitsArray[i]);
	i++;
} while (i < fruitsArray.length);

// Task5
for (let fruit of fruitsArray) {
	console.log(fruit);
}

// Task 6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
	if (Numbs[i] % 2 === 0) {
		console.log(Numbs[i]);
	}
}

// Task 7
// const names = ['Batman'];
// names.push('Joker');

// console.log(names);

// Task 8
// const names = ['Batman'];
// names.unshift('Joker');

// console.log(names);

// Task 9
// const names = ['Batman', 'Joker', 'Bane'];
// names.unshift('Catwoman');

// console.log(names);

// Task 10
// const names = ['Batman', 'Joker', 'Bane'];
// const newNames = ['Catwoman', ...names];

// console.log(newNames);

// Task 11
// const names = ['Batman', 'Joker', 'Bane'];
// names.splice(1, 0, 'Catwoman');

// console.log(names);

// Task 12
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// const catwomanIndex = names.indexOf('Catwoman');
// const jokerIndex = names.indexOf('Joker');

// if (catwomanIndex !== -1) {
//   names.splice(catwomanIndex, 1);
// }
// if (jokerIndex !== -1) {
//   names.splice(jokerIndex, 1);
// }

// console.log(names);

// Task 13
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// const catwomanIndex = names.indexOf('Catwoman');
// const jokerIndex = names.indexOf('Joker');

// if (catwomanIndex !== -1) {
//   names.splice(catwomanIndex, 1, 'Alfred');
// }
// if (jokerIndex !== -1) {
//   names.splice(jokerIndex, 1, 'Alfred');
// }

// console.log(names);

// Task 14
// const names = ["Batman", "Catwoman", "Joker", "Bane"];
// const insertName = "Alfred";

// if (!names.includes(insertName)) {
// 	names.push(insertName);
// }

// console.log(names);

// Task 15
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const insertName = 'Alfred';

const index = names.indexOf(insertName);

if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);

