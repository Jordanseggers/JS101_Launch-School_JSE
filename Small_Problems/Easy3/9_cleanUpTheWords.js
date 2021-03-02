function cleanUp (messyString) {
  let cleanArray = [];
  messyString.split('').forEach(char => {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      cleanArray.push(char);
    } else {
      if (cleanArray[cleanArray.length - 1] !== ' ') {
        cleanArray.push(' ');
      }
    }
  });
  return cleanArray.join('');
}

console.log(cleanUp("---what's my +*& line?"));