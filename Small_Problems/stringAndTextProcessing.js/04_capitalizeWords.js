function wordCap (originalString) {
  let wordArray = originalString.split(' ');
  let newWord = wordArray.map(word => {
    return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
  });
  return newWord.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'console.log()