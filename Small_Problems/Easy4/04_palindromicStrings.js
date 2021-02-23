function isPalindrome (string) {
  let reversedString = string.split('').reverse().join('');
  if (reversedString === string) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true