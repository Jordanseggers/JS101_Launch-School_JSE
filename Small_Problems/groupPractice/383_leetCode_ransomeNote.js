function canConstruct (ransomNote, magazine) {
  let lettersRM = {};
  ransomNote.split('').forEach(char => {
    if (lettersRM.hasOwnProperty(char)) {
      lettersRM[char][0] += 1;
    } else {
      lettersRM[char] = [1, 0];
    }
  });
  magazine.split('').forEach(char => {
    if (lettersRM.hasOwnProperty(char)) {
      lettersRM[char][1] += 1;
    } else {
      lettersRM[char] = [0, 1];
    }
  });
  let missingLetters = Object.values(lettersRM).filter(letterTally => {
    if (letterTally[0] > letterTally[1]) {
      return true;
    } else {
      return false;
    }
  });
  if (missingLetters.length > 0) {
    return false;
  } else {
    return true;
  }
};

//function ransomHasMore (letterTally) {
//  if (letterTally[0] > letterTally[1]) {
//    return true;
//  } else {
//    return false;
//  }
//}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "aaa"));
console.log(canConstruct("abril", "brilloa"));