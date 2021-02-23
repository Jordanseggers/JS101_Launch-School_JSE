const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function removeVowels (originalArr) {
  let newArr = originalArr.map(string => cleanString(string));
  return newArr;
} 

function cleanString(originalString) {
  let newArr = [];
  originalString.split('').forEach(char => {
    if (!VOWELS.includes(char)) {
      newArr.push(char);
    }
  });
  return newArr.join('');
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]console.log()