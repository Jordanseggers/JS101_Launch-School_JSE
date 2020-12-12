const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const VALID_CHOICE_ABREVIATIONS = ['r', 'p', 's'];
const WINNING_SCORE = 3;
let score = {"you": 0, "the computer": 0};

function prompt(message) {
  console.log(`=> ${message}`);
}

function translateLetterToChoice(letter) {
  let translation = '';
  if (letter === 's') {
    translation = 'scissors';
  } else if (letter === 'r') {
    translation = ('rock');
  } else if (letter === 'p') {
    translation = 'paper';
  }
  return (translation);
}

function getWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return ('you');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    return ('the computer');
  } else {
    return ('nobody');
  }
}

function informUserOfRound(round) {
  if (round === 1) {
    prompt('Best 3/5 wins the grand champion title!');
  } else if (round === 2) {
    prompt('Go for another round!');
  } else if (round === 3) {
    prompt('Keep going!');
  } else if (round === 4) {
    prompt('This might be the Final round up next!');
  }
}

function tallyTheWins(winnerOfCurrentRound) {
  if (winnerOfCurrentRound === 'you') {
    score["you"] += 1;
  } else if (winnerOfCurrentRound === "the computer") {
    score["the computer"] += 1;
  }
}

function checkForGrandChampion() {
  if (score["you"] === WINNING_SCORE) {
    return ('you');
  } else if (score["the computer"] === WINNING_SCORE) {
    return ('the computer');
  } else {
    return ('nobody');
  }
}

let thisCurrentRound = 1;


while (true) {
  console.clear();

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = (readline.question()).toLowerCase();

  while (!VALID_CHOICES.includes(choice) &&
        !VALID_CHOICE_ABREVIATIONS.includes(choice)) {
    prompt("That's not a valid choice");
    choice = (readline.question()).toLowerCase();
  }

  if (choice.length === 1 ) {
    choice = translateLetterToChoice(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let winnerOfCurrentRound = getWinner(choice, computerChoice);
  prompt(`and the winner is... ${winnerOfCurrentRound}`);

  tallyTheWins(winnerOfCurrentRound);

  if (winnerOfCurrentRound !== 'nobody') {
    thisCurrentRound += 1;
  }

  let grandChampion = checkForGrandChampion();
  if (grandChampion !== 'nobody') {
    prompt(`The grand champion is ${grandChampion}!!`);
    break;
  }

  prompt(`You have ${score["you"]} wins. The computer has ${score["the computer"]} wins.`);

  informUserOfRound(thisCurrentRound);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}