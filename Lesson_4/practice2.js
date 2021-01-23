let statement = "The Flintstones Rock";

//frequency each letter occurs

let frequency = {};
let keyArray = [...statement];
let newKeyArray = [];
let counter = 0;
let secondCounter = 0;

function reduceKeys (anArray) {
  while (counter < anArray.length) {
    let currentCharacter = anArray[counter];
    if (newKeyArray.includes(currentCharacter)){
      counter += 1;
      continue;
    }
    newKeyArray.push(currentCharacter);
  }
}

reduceKeys(keyArray)
console.log(newKeyArray);

function tallyKeys (keysToTally, anArray) {
  while (secondCounter < anArray.length) {
    let currentCharacter = anArray[character];
    counter +=1;
    character +=
  }
}

//cycle throuch statement
//match letter to it's key and increment that value