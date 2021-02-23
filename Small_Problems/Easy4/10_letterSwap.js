function swap (originalString) {
  let originalArray = originalString.split(' ');
  return originalArray.map(word => letterSwap(word)).join(' ');
  
 function letterSwap (word) {
    let wordArray = word.split('');
    let reorderWordArray = [];
    
    if (wordArray.length > 1) {
      reorderWordArray.push(wordArray[wordArray.length - 1], wordArray.slice(1, wordArray.length - 1).join(''), wordArray[0]);
      return reorderWordArray.join('');
    } else {
      return word;
    }
  }
}

 
  
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"