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

console.log(substrings('abcde'));