function halvsies (startArray) {
  let firstHalf = [];
  let secondHalf = [];
  if (startArray.length === 1) {
    firstHalf.push(startArray[0]);
    return [firstHalf, secondHalf];
  } else if (startArray.length % 2 === 0) {
    for (let i = 0; i < startArray.length / 2; i++) {
      firstHalf.push(startArray[i]);
    }
    for (let i = startArray.length / 2; i < startArray.length; i++) {
      secondHalf.push(startArray[i]);
    }
    return [firstHalf, secondHalf];
  } else {
    for (let i = 0; i < (Math.floor(startArray.length / 2) + 1); i++) {
      firstHalf.push(startArray[i]);
    }
    for (let i = Math.floor(startArray.length / 2) + 1 ; i < startArray.length; i++) {
      secondHalf.push(startArray[i]);
    }
    return [firstHalf, secondHalf];
  }
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]