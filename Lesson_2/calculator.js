const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

// Ask the user for the first number.

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

// Ask the user for the second number.

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt(`${number1} ${number2}`);

// Ask the user for an operation to perform.

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4)Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}
/* this takes a string number from the user as a
choice and stores it in the operation variable */
// Perform the operation on the two numbers.

let output;
switch (operation) { // the string '1' is pulled from readline question for addition
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2); //Number() takes a string and coerses it into a number
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is: ${output}`);

// Print the result to the terminal.