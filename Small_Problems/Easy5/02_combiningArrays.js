function union (arr1, arr2) {
  let newArray = arr1.slice();
  for (let idx = 0; idx < arr2.length; idx ++) {
    if (newArray.includes(arr2[idx])){
      continue;
    } else {
      newArray.push(arr2[idx]);
    }
  }
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));