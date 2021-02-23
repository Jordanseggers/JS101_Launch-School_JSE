function wordSizes (sentence) {
  let lengthObject = {};
  
  sentence.split(' ').forEach(word => {
    if (lengthObject.hasOwnProperty(word)) {
      word += 1;
    } else {
      lengthObject[word.length] = 1;
    }
  })
  delete lengthObject[0];
  return lengthObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}