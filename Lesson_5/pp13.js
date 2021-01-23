let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((theArr, nextArr) => {
  let currentArrSum = theArr.filter(number => number % 2 === 1)
                            .reduce((sum, next) => sum + next);
  let nextArrSum = (nextArr.filter(number => number % 2 === 1))
                           .reduce((sum, next) => sum + next);
  
  return currentArrSum - nextArrSum;
})

console.log(arr);

//get odds from each arr
//add odds from each arr
//sort array by odds