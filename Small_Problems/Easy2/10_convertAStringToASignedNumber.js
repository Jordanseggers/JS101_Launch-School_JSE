function stringToSignedInteger (theString) {
  let DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  
  if (theString[0] === '+' || theString[0] === '-') {
    let arrayOfStrings = theString.split("");
    let sign = arrayOfStrings[0];
    let arrayOfDigits = arrayOfStrings.slice(1).map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    if (sign === '-'){
      value = 0 - value;
      return value;
    } else {
      return value;
    }
  } else {
    let arrayOfDigits = theString.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true