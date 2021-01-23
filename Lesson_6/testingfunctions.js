function convertHandToValues(hand) {
  return hand.map(card => {
    switch(card) {
      case 'J':
      case 'Q':
      case 'K':
        return 10;
      case 'A':
        return 11;
      default: 
        return card;
    }
  });
}

function sumHand(hand) {
  let handToValues = convertHandToValues(hand);
  let sumOfHand = handToValues.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sumOfHand > 21 && handToValues.includes(11)) {
    sumOfHand -= 10;
  }
  return sumOfHand;
}

console.log(sumHand([20, 11]));