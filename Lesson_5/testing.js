let arr = ['10', '11', '9', '7', '8'];

function reOrder (anArr) {
  anArr.sort((elementA, elementB) => {
    return elementB - elementA;
  })
}

reOrder(arr);
console.log(arr);