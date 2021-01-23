let statement = "The Flintstones Rock";

let charsInStatement = statement.split('').filter(char => char !== ' ');
//this line sets the variable equal to a new string that has the space character filtered out of an array that split the statement string into individual characters
//
let result = {}; //setting up empty object

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

