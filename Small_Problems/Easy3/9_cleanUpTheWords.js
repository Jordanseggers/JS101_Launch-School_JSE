function cleanUp (messyString) {
  let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let lowerCaseLetters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let messyArray = messyString.split('');
  let cleanArray = [];
  for (let i = 0; i < messyString.length; i++) {
    if (upperCaseLetters.includes(messyArray[i]) || lowerCaseLetters.includes(messyArray[i])) {
      cleanArray.push(messyArray[i]);
    } else if (cleanArray[cleanArray.length -1] === ' ') {
      continue;
    } else {
      cleanArray.push(' ');
    }
  }
  return cleanArray.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "