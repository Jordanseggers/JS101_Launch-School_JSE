function isBalanced (string) {
  let parenthesesArray = string.split('').filter(element => (element === '(') || (element === ')'));
  if (parenthesesArray.length === 0) {
    return true;
  } else if (checkEvenIndexes(parenthesesArray) && checkOddIndexes(parenthesesArray)) {
    return true;
  } else {
    return false;
  }
}

function checkEvenIndexes (parenthesesArray) {
  for (let i = 0; i < parenthesesArray.length; i++) {
    if (parenthesesArray[i] % 2 === 0 && parenthesesArray[i] !== '(') {
      return false;
    } else {
      return true;
    }
  }
}

function checkOddIndexes (parenthesesArray) {
  for (let i = 0; i < parenthesesArray.length; i++) {
    if (parenthesesArray[i] % 2 === 1 && parenthesesArray[i] !== ')') {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);