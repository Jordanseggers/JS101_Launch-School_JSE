let theKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 

function integerToString (num) {
  let numArray = [];
  while(num > 0) {
    numArray.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  if (numArray.length === 0) {
    numArray = ['0'];
  }
  return numArray.join('');
}

console.log(integerToString(4321));
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));  