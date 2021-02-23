function isItemAvailable (idNum, transactions) {
  let transactionsOnly = transactions.filter(transaction => transaction['id'] === idNum);
  let valuesOnly = transactionsOnly.map(object => {
    if (object['movement'] === 'in') {
      return object['quantity'];
    } else if (object['movement'] === 'out') {
     return -(object['quantity']);
    }
  })
  if (valuesOnly.reduce((acum, num) => acum + num) > 0) {
    return true;
  } else {
    return false;
  }
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true