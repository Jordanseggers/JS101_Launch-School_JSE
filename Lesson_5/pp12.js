let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let mult3 = arr.map(subArr => {
  return subArr.filter(number => number % 3 === 0);
})

console.log(mult3);