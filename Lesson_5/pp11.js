let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let modifiedArr = arr.map(theObj => {
  for (const key in theObj) {
    let number = theObj[key];
    console.log(number);
    number = number * 2;
    return theObj;
  }
})

console.log(modifiedArr);