let readline = require ("readline-sync");

function retire (currentAge, retirementAge) {
  let yearsToWork = retirementAge - currentAge;
  let retireYear = 2021 + yearsToWork;
  
  return `It's 2021. You will reitre in ${retireYear}. You have only ${yearsToWork} years of work to go!`
}

let currentAge = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire? ');

console.log(retire(currentAge, retirementAge));