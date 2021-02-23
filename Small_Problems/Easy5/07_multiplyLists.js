function multiplyList (arr1, arr2) {
  let newArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    newArr.push(arr1[idx] * arr2[idx]);
  }
  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); 