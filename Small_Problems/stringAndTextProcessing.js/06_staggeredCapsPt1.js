function staggeredCase (string) {
  let originalString = string.split('');
  let newArray = [];
  for (let idx = 0; idx < originalString.length; idx ++) {
    if (idx % 2 === 0) {
      newArray.push(originalString[idx].toUpperCase());
    } else if (idx % 2 === 1) {
      newArray.push(originalString[idx].toLowerCase());
    } else {
      newArray.push(originalString[idx]);
    }
  }
  return newArray.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"