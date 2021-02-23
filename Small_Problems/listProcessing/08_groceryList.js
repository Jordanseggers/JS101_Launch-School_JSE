function buyFruit (twoDArray) {
  let fruits = [];
  twoDArray.forEach(element => {
    let fruit = element[0].concat(' ');
    let amount = element[1];
    let fruitsArray = (fruit.repeat(amount).split(' '));
    fruitsArray.forEach(fruit => {
      if (fruit !== '') {
        fruits.push(fruit);
      }
    })
  })
  
  return fruits;
}

//function listFruits (fruit, amount) {
//  fruit = fruit.concat(' ');
//  return fruit.repeat(amount).split(' ');
//}
//
//console.log(listFruits('banana', 7));

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]