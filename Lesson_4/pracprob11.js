let statement = "The Flintstones Rock";
let statementObj = {};

function grabLetters (aString) {
  aString.split('').forEach( letter => {
    if (statementObj.hasOwnProperty(letter)) {
      statementObj[letter] += 1;
    } else {
      statementObj[letter] = 1;
    }
  });
}

grabLetters(statement);
console.log(statementObj);