let readline = require ("readline-sync");

function searching () {
  let num1 = Number(readline.question('Enter the 1st number: '));
  let num2 = Number(readline.question('Enter the 2nd number: '));
  let num3 = Number(readline.question('Enter the 3rd number: '));
  let num4 = Number(readline.question('Enter the 4th number: '));
  let num5 = Number(readline.question('Enter the 5th number: '));
  let numberToFind = Number(readline.question('Enter the 6th number: '));
  
  let numArray = [num1, num2, num3, num4, num5];
  
  let included = numArray.some(num => num === numberToFind);
  if (included) {
    return `The number ${numberToFind} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`;
  } else {
    return `The number ${numberToFind} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`;
  }
}

console.log(searching());