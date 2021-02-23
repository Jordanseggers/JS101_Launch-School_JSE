let nextCase = 'upper';

function staggeredCase (string) {
  return string.split(' ').map(word => staggeredCaseOnWord(word)).join(' ');
}

function staggeredCaseOnWord (string) {
  return string.toLowerCase().split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      if (nextCase === 'upper') {
        nextCase = 'lower';
        return char.toUpperCase();
      } else if (nextCase === 'lower') {
        nextCase = 'upper';
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}


console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(
  staggeredCase("ignore 77 the 444 numbers")
);
