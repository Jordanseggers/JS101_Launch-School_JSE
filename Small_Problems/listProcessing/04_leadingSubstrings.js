function leadingSubstrings(string) {
  let currentSubString = '';
  let subStringArray = [];
  let stringArray = string.split('');
  
  stringArray.forEach(character => {
    currentSubString = currentSubString.concat(character);
    subStringArray.push(currentSubString);
  })
  return subStringArray;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]