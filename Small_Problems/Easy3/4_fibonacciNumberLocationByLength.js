function findFibonacciIndexByLength (length) {
  let fibonacciArray = [1, 1];
  while (fibonacciArray[fibonacciArray.length - 1].toString().length < length) {
    fibonacciArray.push(fibonacciArray[length - 1] + fibonacciArray[length - 2]);
  }
  return fibonacciArray.length - 1;
}

console.log(findFibonacciIndexByLength(2));       // 7
//console.log(findFibonacciIndexByLength(10));      // 45
//console.log(findFibonacciIndexByLength(16));      // 74console.log())