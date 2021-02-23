function interleave (arr1, arr2) {
  let combinedArr = [];
  for (let i = 0; i < arr1.length; i ++) {
    combinedArr.push(arr1[i]);
    combinedArr.push(arr2[i]);
  }
  return combinedArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));