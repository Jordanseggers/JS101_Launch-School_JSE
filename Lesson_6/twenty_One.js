const readline = require('readline-sync');

const STANDARD_DECK_OF_CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  
  return array;
}

function dealcards(Deck, hand) {
  let shuffledDeck = shuffle(Deck);
  hand[hand.length] = shuffledDeck[0];
  currentDeck = shuffledDeck.slice(1);
}

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
  while (sumOfHand > 21 && handToValues.includes(11)) {
    let aceIndex = handToValues.findIndex(card => card === 11);
    handToValues[aceIndex] = 1;
  }
  return sumOfHand;
}

function busted(hand) {
  return (sumHand(hand) > 21);
}

function joinOr (anyArr, joinWith = ',', separater = "and") {
  switch (anyArr.length) {
    case 0:
      return '';
    case 1:
    case 2:
      return anyArr.join(` ${separater} `);
    default:
      let beforeSeparater = anyArr.slice(0, anyArr.length - 1).join(`${joinWith} `);
      let afterSeparater = anyArr[anyArr.length - 1];
      return (`${beforeSeparater}${joinWith} ${separater} ${afterSeparater}`);
  }
}

function informPlayerOfDecks(dealerHand, playerHand) {
  console.log(`Dealer has: ${dealerHand[0]} and unknown card`);
  console.log(`You have: ${joinOr(playerHand)}`);
}

function playerTurn() {
  while (true) {
  informPlayerOfDecks(dealerHand, playerHand);
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted(playerHand)) {
    break;
  } else {
      dealcards(currentDeck, playerHand);
      if (busted(playerHand)) {
        console.log(`You drew ${playerHand[playerHand.length -1]} and busted with a total of ${sumHand(playerHand)}`);
        winner = 'dealer';
        break;
      }
    }
  }
}

function dealerTurn() {
  while (true)
    if (sumHand(dealerHand) > 16) {
      break;
    } else {
      console.log('dealer hit');
      dealcards(currentDeck, dealerHand);
      console.log(`The dealers hand is ${joinOr(dealerHand)}`);
    }
  if (sumHand(dealerHand) > 21) {
    console.log(`The dealer drew ${dealerHand[dealerHand.length -1]} and busted with a total of ${sumHand(dealerHand)}`);
    winner = 'player';
  } else {
    console.log(`The dealer's deck total is ${sumHand(dealerHand)}`);
  }
}

function determineWinner() {
  if (sumHand(playerHand) > sumHand(dealerHand)) {
    return 'player';
  } else if (sumHand(dealerHand) > sumHand(playerHand)) {
    return 'dealer';
  }
}

function declareWinner(winner) {
  if (winner === 'player') {
    console.log(`Player Wins with ${sumHand(playerHand)} verses ${sumHand(dealerHand)}`);
  } else if (winner === 'dealer') {
    console.log(`Dealer Wins with ${sumHand(dealerHand)} verses ${sumHand(playerHand)}`);
  } else {
    console.log('It\'s a tie');
  }
}

// functions above, game below

let playerHand = [];
let dealerHand = [];
let currentDeck = [];
let winner;

while(true) {
  dealcards(STANDARD_DECK_OF_CARDS, playerHand);
  dealcards(currentDeck, playerHand);
  dealcards(currentDeck, dealerHand);
  dealcards(currentDeck, dealerHand);
  
  playerTurn();
  if(!winner) {
    dealerTurn();
    if(!winner) {
      winner = determineWinner();
    }
  }
  
  declareWinner(winner);
  break;
}