function multiplyAllPairs (arr1, arr2) {
  let multipleArray = [];
  arr1.forEach(number => {
    for (let i = 0; i < arr2.length; i++) {
      multipleArray.push(number * arr2[i]);
    }
  });
  return multipleArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));