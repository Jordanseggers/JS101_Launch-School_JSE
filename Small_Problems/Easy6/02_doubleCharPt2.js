let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let consonants = [];


function doubleConsonants (string) {
  let newArray = [];
  
  for (let i = 0; i < string.length; i++) {
    if ((string[i] >= 'b' && string[i] <= 'z') || (string[i] >= 'B' && string[i] <= 'Z')) {
      if (!vowels.includes(string[i])) {
        newArray.push(string[i], string[i]);
      } else {
        newArray.push(string[i]);
      }
    } else {
      newArray.push(string[i]);
    }
  }
  return newArray.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""