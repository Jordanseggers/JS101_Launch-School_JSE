function isPalindromicNumber (num) {
  let StringNum = String(num);
  let reverseStringNum = StringNum.split('').reverse().join('');
  return StringNum === reverseStringNum;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true