let readline = require("readline-sync");

function sumIntegers(enteredInt) {
  let total = 0;
  for (let i = 1; i <= enteredInt; i++) {
    total += i;
  }
  return total;
}

function multiplyIntegers(enteredInt) {
  let product = 1;
  for (let i = 1; i <= enteredInt; i++) {
    product *= i;
  }
  return product;
}

function outputResult (choice, integer) {
    if (choice === "s") {
    let sum = sumIntegers(integer);
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
  } else if (choice ==="p") {
    let product = multiplyIntegers(integer);
    console.log(`The product of the integers between 1 and ${integer} is ${product}`);
  }
}

console.log("Please enter an integer greater than 0:");
let integer = parseInt(readline.prompt(), 10);

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let choice = readline.prompt();

outputResult(choice, integer);