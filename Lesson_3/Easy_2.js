//goal: determine if ends with exclamation mark

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endExclamation (string) {
  if (string[string.length - 1] === '!') {
    console.log('Found an exclamation!');
  }
}

endExclamation(str1);
endExclamation(str2);