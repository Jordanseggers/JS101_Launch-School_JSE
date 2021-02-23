function isElementPalindrome (string) {
  if (string.length < 2) {
    return false;
  } if (string.length % 2 === 0) {
    let half = string.length / 2;
    let firstHalf = string.slice(0, half);
    let secondHalf = string.slice(half, string.length);
    
    if (firstHalf === secondHalf.split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  } else if (string.length % 2 === 1) {
    let half = Math.floor(string.length / 2);
    let firstHalf = string.slice(0, half);
    let secondHalf = string.slice(half + 1, string.length);
    
    if (firstHalf === secondHalf.split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  }
}

function palindromes (string) {
  let allSubstrings = substrings(string);
  let allPalindromes = allSubstrings.filter(substring => isElementPalindrome(substring));
  return allPalindromes;
}

let allSubstrings = [];

function leadingSubstrings(input) {
  let currentSubString = '';
  let subStringArray = [];
  let stringArray = input.split('');
  
  stringArray.forEach(character => {
    currentSubString = currentSubString.concat(character);
    subStringArray.push(currentSubString);
  });
  return subStringArray;
}

function substrings (string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  
  return substrings;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]