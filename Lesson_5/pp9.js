
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let newArr = [];

function sortArr (theArr) {
  theArr.forEach(subArr => {
    let newSubArr = subArr.sort((a, b) => {
      a - b;
    });
    newArr.push(newSubArr);
  });
}

sortArr(arr);

console.log(newArr);