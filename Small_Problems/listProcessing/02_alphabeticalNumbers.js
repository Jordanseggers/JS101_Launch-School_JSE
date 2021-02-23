function convertArray (inputArray) {
  let keyArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
  let outputArray;
  if (typeof (inputArray[0]) === 'number') {
    outputArray = inputArray.map(number => keyArray[number]);
  } else if (typeof (inputArray[0]) === 'string') {
    outputArray = inputArray.map(name => keyArray.findIndex(string => string === name));
  }
  return outputArray;
}

function alphabeticNumberSort (array) {
  let initialSwap = convertArray(array);
  let sortedNames = initialSwap.sort();
  return convertArray(sortedNames);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]