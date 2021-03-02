let theKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 

function stringToInteger(stringOfNums) {
  let place = 1;
  let totalNum = 0;
  
  let stringArr = stringOfNums.toString().split('');
  for (let i = stringArr.length - 1; i >= 0; i --){
    let indexValue = theKey.findIndex(num => num === stringArr[i]);
    totalNum += (place * indexValue);
    place *= 10;
  }
  return totalNum;
}

console.log(stringToInteger("4321"))// === 4321); // logs true
console.log(stringToInteger("570"))// === 570); // logs true