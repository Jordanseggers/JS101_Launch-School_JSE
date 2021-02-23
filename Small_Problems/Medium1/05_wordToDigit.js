function wordToDigit (sentence) {
  let numObj = {
    one : '1',
    two : '2',
    three : '3',
    four : '4',
    five : '5',
    six : '6',
    seven : '7',
    eight: '8',
    nine : '9',
  };
  let words = sentence.split(' ');
  
  words.forEach(word => {
    for (let num in numObj) {
      if (word.includes(num)) {
        word.replace(num, numObj[num]);
      }
    }
  });
  return words.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));