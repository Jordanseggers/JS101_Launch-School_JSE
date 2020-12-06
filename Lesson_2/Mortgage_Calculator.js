const readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

let aPR = "tbd";

function getAPR() {
  prompt("Please enter the Annual Percentage Rate (%)");
  aPR = readline.question();
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

//logic check for APR input   can this be made simpler?
function aPRIsLow(aPR) {
  prompt("Woah you're getting a fantastic deal!");
  prompt ("Are you sure that's an APR rather than a monthly rate?");
  if (tryAgain()) {
    getAPR();
  }
}

function tryAgain() {
  let secondTry = readline.question();

  while (secondTry[0] !== 'n' && secondTry[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    secondTry = readline.question().toLowerCase();
  }
  if (secondTry[0] === 'n') {
    return true;
  } else {
    return false;
  }
}

//annual percentage rate to monthly formula
function annToMon(aPR) {
  return ((aPR / 100) / 12);
}

while (true) {
  prompt('---------------------------------');
  // If true call step 1 again if false call step 2
  //Ask the user for Loan amount
  prompt("Please enter the loan amount ($)");

  let OnlyNumPortionOfLoan = (readline.question().replace("$", "")).replace(",", "");

  while (isInvalidNumber(OnlyNumPortionOfLoan)) {
    prompt("Please enter the loan amount ($)");
    OnlyNumPortionOfLoan = (readline.question().replace("$", "")).replace(",", "");
  }

  //Ask the user for APR
  getAPR();

  if (isInvalidNumber(aPR)) {
    prompt("Must enter a positive number");
    getAPR();
  }

  //double check aPR entry
  if (aPR < 1) {
    aPRIsLow(aPR);
  }

  let mPR = annToMon(aPR);

  //Ask the user for loan duration
  prompt("Please enter the loan duration in years");
  let loanTimeYear = readline.question();

  while (isInvalidNumber(loanTimeYear)) {
    prompt("Must enter a positive number");
    loanTimeYear = readline.question();
  }

  let loanTimeMonth = loanTimeYear * 12;

  //calculate monthly payment
  let monPay = OnlyNumPortionOfLoan * (mPR / (1 - Math.pow((1 + mPR), (-loanTimeMonth))));
  let finalBill = monPay.toFixed(2);
  console.log(`The monthly payment will be $${finalBill}`);

  prompt("Would you like to calculate another loan?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}