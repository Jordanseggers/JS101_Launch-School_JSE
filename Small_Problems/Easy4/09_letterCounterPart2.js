function wordSizes (sentence) {
  let lengthObject = {};
  let cleanArray = removeNonLetters(sentence.split(' '));
  
  cleanArray.forEach(word => {
    if (lengthObject.hasOwnProperty(word.length)) {
      lengthObject[word.length] += 1;
    } else {
      lengthObject[word.length] = 1;
    }
  })
  delete lengthObject[0];
  return lengthObject;
}

function removeNonLetters (splitSentence) {
  let cleanSplitSentence = splitSentence.map(word => removeCharacters(word));
  
  function removeCharacters (word) {
    return word.split('').filter(character => (character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')).join('');
  }
  return cleanSplitSentence;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}