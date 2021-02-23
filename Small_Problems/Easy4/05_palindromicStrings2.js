function isRealPalindrome (string) {
  let caselessArray = string.toLowerCase().split('')
  let cleanString = caselessArray.filter(character => (character >= 'a' && character <= 'z') || (character >= '0' && character <= '9')).join('');
  return isPalindrome(cleanString);
}





function isPalindrome (string) {
  return string === string.split('').reverse().join('');
}





console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
