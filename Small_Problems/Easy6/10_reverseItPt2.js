function reverseWords(originalString) {
  let stringArray = originalString.split(' ');
  let fixedStringArray = stringArray.map(word => {
    if (word.length >= 5) {
      return wordCharSwap(word);
    } else if (word.length < 5) {
      return word;
    }
  })
  return fixedStringArray;
}



function wordCharSwap (word) {
  let swappedWord = []
  for (let i = word.length; i >= 0; i--) {
    swappedWord.push(word[i]);
  }
  return swappedWord.join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"console.log()