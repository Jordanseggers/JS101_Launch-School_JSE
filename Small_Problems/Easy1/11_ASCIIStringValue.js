function asciiValue (stringA) {
  let total = 0;
  
  for (let i = 0; i < stringA.length; i++) {
    let currentCharacterValue = stringA.charCodeAt(i);
    total += currentCharacterValue;
  }
  return total;
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));