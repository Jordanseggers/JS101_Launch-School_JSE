let readlineSync = require('readline-sync');

const CHOSEN_FIRST_PLAYER = {};
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();
  
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`)
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr (anyArr, joinWith = ',', separater = "or") {
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

function playerChoosesSquare(board) {
  let square;
  
  while (true) {
    
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`)
    square = readlineSync.question().trim();
    if (emptySquares(board).includes(square)) break;
    
    prompt("Sorry, that's not a valid choice.")
  }
  
  board[square] = 'X'
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  
  if(!square) {
    if (board[5] === INITIAL_MARKER) {
      square = 5;
    }
  }
  
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square =emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);
  
  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  
  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  
  return null;
}

function chooseSquare (board, currentPlayer) {
  if (currentPlayer === 'Human') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'Computer') {
    computerChoosesSquare(board);
  }
}

function setFirstPlayer (choice) {
  if (choice === 'u') {
    CHOSEN_FIRST_PLAYER['playerOne'] = 'Human';
  } else {
    CHOSEN_FIRST_PLAYER['playerOne'] = 'Computer';
  }
  console.log(CHOSEN_FIRST_PLAYER);
}

function alternatePlayer (currentPlayer) {
  if (currentPlayer === 'Human') {
    return 'Computer';
  } else {
    return 'Human';
  }
}

//Game below, separate functions above this point

while (true) {
  let board = initializeBoard();
  
  prompt('Who will go first? (user or computer)');
  let choice = readlineSync.question().toLowerCase()[0];
  while (choice[0] !== 'u' && choice[0] !== 'c') {
    prompt('Please enter "u" or "c".');
    choice = readlineSync.question().toLowerCase();
  }
  
  setFirstPlayer(choice);
  debugger;
  
  let currentPlayer = CHOSEN_FIRST_PLAYER['playerOne'];
  debugger;
  console.log(currentPlayer);

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
  
  displayBoard(board);
  
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
  
  prompt('Play again? (y or n)');
  let answer = readlineSync.question().toLowerCase()[0];
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readlineSync.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');