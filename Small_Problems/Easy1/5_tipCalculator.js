let readline = require("readline-sync");

console.log("What is the bill?");
let billAmount = parseFloat(readline.prompt());

console.log("What is the tip percentage?");
let tipPercentage = parseFloat(readline.prompt());

let tip = billAmount * (tipPercentage / 100);
let total = billAmount + tip;

console.log(`The tip is $${tip.toFixed(2)} and the total is $${total.toFixed(2)}`);