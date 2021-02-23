function maxRotation (startNum) {
  let currentNum = startNum.toString();
  let answer;
  for (let i = 0; i === startNum.toString().length; i ++) {
    console.log(i);
    answer = rotateRightmostDigits(currentNum, i);
  }
  return answer;
}

function rotateRightmostDigits(numberString, count) {
  let firstPart = numberString.slice(0, count);
  let secondPart = numberString.slice(count);
  let resultString = firstPart + rotateString(secondPart);

  return resultString;
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845console.log()