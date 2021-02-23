function sum (number) {
  let stringArray = number.toString().split('');
  let numArray = stringArray.map(number => Number(number));
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (numArray.reduce(reducer));
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

