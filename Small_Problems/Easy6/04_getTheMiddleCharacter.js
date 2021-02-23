function centerOf (string) {
  if (string.length % 2 === 0) {
    let half = string.length / 2 - 1;
    return string[half] + string[half + 1];
  } else if (string.length % 2 === 1) {
    let half = (string.length -1) / 2;
    return string[half];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"