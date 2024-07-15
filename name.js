// 1.
// I am var
// ReferenceError: letVariable is not defined at scopeTest
// ReferenceError: constVariable is not defined at scopeTest
// but there are some error in letvariable and constvariable.we know that var support hoisting but let and const dont support hoisting.as the variable declared in if statement and the console.log is defined outside of the if statement .as var support hoisting thats why the output come but let and const dont support hoisting thats why it shows refferenceerror




2.
// function greet(name,greeting = "hello") {
//     if (name && greeting) {
//         return  `${greeting}, ${name}!`;
//     }
//     else if (name) {
//         return  `${greeting}, ${name}!`;
//     }
//     else {
//         return greeting
//     }
// }
// console.log(greet("Alice")); // "Hello, Alice!"
// console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"






3.
// function sum(...args) {
//     let total = 0;
//     for (const a of args) {
//         total += a;
//     }
//     return total;
// } 
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(10, 20, 30, 40)); // 100
// console.log(sum(5)); // 5




4.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const mergedArray = [...array1, ...array2,...array3 ]
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]






5.
// let person = {
//     name:"John",
//     age: 30,
//     greet (){
//         return  `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// console.log(person.greet());







6.
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit)
// }






7.
// const name = "Alice";
// const age = 25;
// const message = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message); // "My name is Alice and I am 25 years old."








8.
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 85 },
//     { name: "Charlie", grade: 92 }
//   ];
//   for (const student of students) {
//     console.log(`${student.name}: ${student.grade}`)
//   }






9.
// let nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let Array of nestedArray) {
//     let sum = 0;
//     for (let number of Array) {
//         sum += number;
//     }
//     console.log(`Sum of ${Array} = ${sum}`);
// }






10.
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."