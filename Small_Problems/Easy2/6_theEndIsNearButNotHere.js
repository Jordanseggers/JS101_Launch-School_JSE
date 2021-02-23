function nextToLastWord (anyString) {
  let words = anyString.split(' ');
  return words[words.length - 2];
}

console.log(nextToLastWord("last word") === "last");
console.log(nextToLastWord("Launch School is great!") === "is");