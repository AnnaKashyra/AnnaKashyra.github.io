"use strict";
// Task 1
let person = {
  name: "Polina",
  age: "14",
};
console.log(person.name, person.age);

// Task 2
person.name = {
  firstName: "Polina",
  lastName: "Petrenko",
};
console.log(person.name.firstName, person.name.lastName, person.age);

// Task 3
person.bio = function() {
  console.log(person.name.firstName, person.name.lastName, person.age);
}
person.bio();

// Task 4
person.introduceSelf = function(){
  console.log(`Hi! I'm ${person.name.firstName}!`);
}
person.introduceSelf();

// Task5
function createPerson(name){
  let person = {};
  person.name = name;
  person.introduceSelf = function() {
    console.log(`Hi! I'm ${name}!`);
  }
  return person;
};
let person1 = createPerson("Petro");
let person2 = createPerson("Maria");
person1.introduceSelf();
person2.introduceSelf();

// Task 6
function Person(name){
  this.name = name,
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${name}!`);
  }
};
let mary = new Person("Mary");
let tom = new Person("Tom");
mary.introduceSelf();
tom.introduceSelf();
console.log("prop" in mary);     // false

// Task 7
let DirtyMartini = {
  english_please: function(){
    console.log('ingredients: \n 6 fluid ounces gin \n 1 dash dry vermouth (0.0351951ml) \n 1 fluid ounce brine from olive jar \n 4 stuffed green olives');
  },
  excuse_my_french: function(){
    console.log('ingrédients: \n 170.4786 ml de gin \n 1 trait de vermouth sec (0.0351951ml) \n 28.4131 ml de saumure du pot d\'olive \n 4 olives vertes farcies')
  }
}

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();








