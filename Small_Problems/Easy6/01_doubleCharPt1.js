function repeater (originalString) {
  let newString = '';
  for (let i = 0; i < originalString.length; i++) {
    newString = newString.concat(originalString[i], originalString[i]);
  }
  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""console.log()