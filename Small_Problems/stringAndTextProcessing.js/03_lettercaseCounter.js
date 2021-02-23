function letterCaseCount (string) {
  let countObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }
  
  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      countObject['lowercase'] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      countObject['uppercase'] += 1;
    } else if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
      countObject['neither'] += 1;
    }
  });
  return countObject;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }