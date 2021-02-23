function stringy (integer) {
  let binaryArray = [];
  for (let i = 0; i < integer; i++) {
    if (i % 2 === 0) {
      binaryArray.push('1');
    } else {
      binaryArray.push('0');
    }
  }
  return binaryArray.join('');
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"