const readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

//logic check for APR input   can this be made simpler?
function logCheck(aPR) {
  if (aPR <= 1) {
    prompt("Woah you're getting a fantastic deal!");
    prompt ("Are you sure that's an APR rather than a monthly rate?");
    let secondTry = readline.question();

    while (secondTry[0] !== 'n' && secondTry[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      secondTry = readline.question().toLowerCase();
    }

    if (secondTry[0] === 'n') {
      return ('try again');
    }
  }
  return ('go');
}

//annual percentage rate to monthly formula
function annToMon(aPR) {
  return ((aPR / 100) / 12);
}

while (true) {
  prompt('---------------------------------');

  //Ask the user for Loan amount
  prompt("Please enter the loan amount ($)");
  let loanNoDollarS = (readline.question().replace("$", ""));

  let loanAmt = parseFloat(loanNoDollarS.replace(",", ""));  //node doesn't support .replaceAll...

  //Ask the user for APR
  prompt("Please enter the Annual Percentage Rate (%)");
  let aPR = parseFloat(readline.question());

  //double check APR entry
  if (logCheck(aPR) === 'try again') {
    prompt("Please enter the Annual Percentage Rate (%)");
    aPR = parseFloat(readline.question());
  }

  let mPR = annToMon(aPR);

  //Ask the user for loan duration
  prompt("Please enter the loan duration in years");
  let loanTimeYear = parseFloat(readline.question());

  let loanTimeMonth = loanTimeYear * 12;

  //calculate monthly payment
  let monPay = loanAmt * (mPR / (1 - Math.pow((1 + mPR), (-loanTimeMonth))));
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