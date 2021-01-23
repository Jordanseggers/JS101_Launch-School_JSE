let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newObject = {};

function putInObj (anArr) {
  anArr.forEach(subArr => {
    newObject[subArr[0]] = subArr[1];
  })
}

putInObj(arr);

console.log(newObject);