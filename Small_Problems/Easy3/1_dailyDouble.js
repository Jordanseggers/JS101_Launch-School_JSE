function crunch (stringThatNeedsCrunching) {
  let arraythatNeedsCrunching = stringThatNeedsCrunching.split('');
  let crunchedArray = [];
  
  for (let i = 0; i < arraythatNeedsCrunching.length; i++) {
    if (arraythatNeedsCrunching[i] !== crunchedArray[crunchedArray.length - 1]) {
      crunchedArray.push(arraythatNeedsCrunching[i]);
    } else {
      continue;
    }
  }
  return crunchedArray.join('');
}

//const result = words.filter(word => word.length > 6);

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
