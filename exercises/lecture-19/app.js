"use strict";
// Task 1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
console.log(str1.length);            // 13
console.log(str2.length);            // 13
console.log(str1 == str2);           //true
console.log(str1 === str2);          //true 
// Рядки мають однакову довжину, а також строгу і нестрогу рівність

// Task 2
let string5 = 'Hello World';
console.log(string5 [0]);             // H
console.log(string5.charAt(0));       // H

// Task 3
let str3 = "Hello Javascript";
let indexJ = str3.indexOf('J');
console.log(str3.charAt(indexJ));

// Task 4
let lastSymbol = str3.at(-1);
console.log(lastSymbol);             // t
let lastSymbol1 = str3[str3.length - 1];
console.log(lastSymbol1);            // t

// Task5
// function lastChar(str){
//   return str.at(-1);
// }
// console.log(lastChar(str3));
// console.log(lastChar(string5));

// function lastChar(str){
//   return str[str.length - 1];
// }
// console.log(lastChar(str3));
// console.log(lastChar(string5));

function lastChar(str){
  return str.slice(-1);
}
console.log(lastChar(str3));
console.log(lastChar(string5));

// Task 6
// let a = 'When candles are out,';
// let b = 'all cats are grey.';
// console.log(a.concat(' ' + b));

// Task 7
let fact = "Fifteen is the same as"
let a = 5;
let b = 10;
console.log(fact.concat(` ${a + b}`));

// Task 8
let firstName = "Tom";
let lastName = "Cat";
function getFullName(name1, name2){
  return name1.concat(' ' + name2);
}
console.log(getFullName(firstName, lastName));

// Task 9
function greeting(){
  return `Hello, ${getFullName(firstName, lastName)}!`;
}
console.log(greeting());

// Task 10
let template = (
  "<div>" +
    "<h1>" + greeting() + "</h1>" +
  "</div>"
);
console.log(template);

// Task 11
let string1 = "  The name of our game  ";
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());

// Task 12, 13, 14
// let sentence = 'Always look on the bright side of life';
// console.log(sentence.includes('look up'));      // false
// console.log(sentence.includes('look on'));      // true
// console.log(sentence.includes('look on', 8));   // false

// console.log(sentence.indexOf('l'));             // 1
// console.log(sentence.indexOf('l', 3));          // 7
// console.log(sentence.indexOf('L'));             // -1, збігів немає

// console.log(sentence.slice(7));
// console.log(sentence.substring(0, 6));
// console.log(sentence.substring(7, 11));
// console.log(sentence.substr(7, 4));

// Task 15
let regName = /^[a-z0-9_-]{8,16}$/;
console.log(regName.test('Mynameis777'));  // false, бо у регулярний вираз не включені літери у верхньому регістрі


// Task 16
let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
console.log(regEmail.test('email_example@gmail.com'));
console.log(regEmail.test('invalid_email_example.gmail.com'));

// Task 17
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

// function truncateText(str){
//   return str.substring(0, 50);
// }
// console.log(truncateText(sentence).length);

function truncateText(str){
  return str.substr(0, 50);
}
console.log(truncateText(sentence).length);


