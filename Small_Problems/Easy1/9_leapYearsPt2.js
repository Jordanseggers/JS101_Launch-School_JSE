function checkIfLeapYear (year) {
  if (year > 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return (year % 4 === 0);
    }
  } else {
    return (year % 4 === 0);
  }
}

console.log(checkIfLeapYear(1991));
console.log(checkIfLeapYear(2016));
console.log(checkIfLeapYear(2015));
console.log(checkIfLeapYear(2400));
console.log(checkIfLeapYear(1900));