function isUppercase(string) {
  for (let i = 0; i < string.length; i++) {
    if (string === '') {
      return true;
    } else if (string[i] >= 'a' && string[i] <= 'z') {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true