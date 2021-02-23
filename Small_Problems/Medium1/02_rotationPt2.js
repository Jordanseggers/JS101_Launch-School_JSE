function rotateRightmostDigits (num, idx) {
  let stringNum = num.toString();
  let newString = '';
  for (let i = 0; i < stringNum.length; i++) {
    if (i !== stringNum[stringNum.length - idx]) {
      newString.concat(stringNum[i]);
    }
  }
  return newString.concat(stringNum[stringNum.length - idx]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917)