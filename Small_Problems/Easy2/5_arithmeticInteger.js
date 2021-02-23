let readline = require ("readline-sync");

const ADD = (num1, num2) => `${num1} + ${num2} = ${Number(num1) + Number(num2)}`;
const SUBTRACT = (num1, num2) => `${num1} - ${num2} = ${Number(num1) - Number(num2)}`;
const MULTIPLY = (num1, num2) => `${num1} * ${num2} = ${Number(num1) * Number(num2)}`;
const DIVIDE = (num1, num2) => `${num1} / ${num2} = ${parseInt(Number(num1) / Number(num2))}`;
const REMAINDER = (num1, num2) => `${num1} % ${num2} = ${Number(num1) % Number(num2)}`;
const MULT_MULT = (num1, num2) => `${num1} ** ${num2} = ${Number(num1) ** Number(num2)}`;

console.log("Enter the first number:");
let num1 = readline.prompt();

console.log("Enter the second number:")
let num2 = readline.prompt();

console.log(ADD(num1, num2));
console.log(SUBTRACT(num1, num2));
console.log(MULTIPLY(num1, num2));
console.log(DIVIDE(num1, num2));
console.log(REMAINDER(num1, num2));
console.log(MULT_MULT(num1, num2));