function rotateRightmostDigits (num, swapNum) {
  let numArray = num.toString().split('');
  let movedToEnd = numArray.splice(-swapNum, 1);
  numArray.push(movedToEnd[0]);
  let finalNum = Number(numArray.join(''));
  console.log(finalNum);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917