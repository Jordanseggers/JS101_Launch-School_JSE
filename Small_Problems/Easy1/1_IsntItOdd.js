function isOdd(numberToCheck) {
  return((Math.abs(numberToCheck)) % 2 === 1);
}

console.log(isOdd(2));
console.log(isOdd(1));
console.log(isOdd(-4));
console.log(isOdd(-7));