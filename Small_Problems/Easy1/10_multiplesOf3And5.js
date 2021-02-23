function sumTheMultiples (otherNumber) {
  let sum = 0;
  for (let i = 1; i <= otherNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumTheMultiples(1000));
console.log(sumTheMultiples(5));