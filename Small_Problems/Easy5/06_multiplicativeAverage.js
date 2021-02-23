function multiplicativeAverage (array) {
  let multiplied = array.reduce((acumulator, number) => acumulator * number);
  let divided = multiplied / array.length;
  return divided.toFixed(3);
} 

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"