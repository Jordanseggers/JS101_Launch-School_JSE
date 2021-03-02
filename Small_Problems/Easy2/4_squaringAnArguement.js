function SQUARE (num) {
  return multiply(num, num);
}


function multiply (num1, num2) {
  return num1 * num2;
}

console.log(SQUARE(5) === 25);
console.log(SQUARE(-8) === 64);
