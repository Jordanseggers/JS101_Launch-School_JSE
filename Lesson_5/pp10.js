let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

function desSort (anArr) {
  anArr.map(subArr => {
    if (typeof (subArr[0]) === "string") {
      return subArr.sort((a, b) => {
        b - a;
      }) else {
        return subArr.sort((a, b) => {
          b - a;
        })
      }
    }
  });
}

desSort(arr);

console.log(desSort);