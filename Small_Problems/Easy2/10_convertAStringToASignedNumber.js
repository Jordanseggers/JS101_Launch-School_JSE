let theKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 

function stringToInteger(stringOfNums) {
  let place = 1;
  let totalNum = 0;
  
  let stringArr = stringOfNums.toString().split('');
  for (let i = stringArr.length - 1; i >= 0; i --){
    let indexValue = theKey.findIndex(num => num === stringArr[i]);
    totalNum += (place * indexValue);
    place *= 10;
  }
  return totalNum;
}

function stringToSignedInteger (stringNums) {
  if (stringNums[0] === '+') {
    return stringToInteger(stringNums.slice(1));
  } else if (stringNums[0] === '-') {
    return 0 - stringToInteger(stringNums.slice(1));
  } else {
    return stringToInteger(stringNums);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true