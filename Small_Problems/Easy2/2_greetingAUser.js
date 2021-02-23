let readline = require ("readline-sync");

function greeting () {
  let name = readline.question('What is your name?');
  if (name[name.length - 1] === '!') {
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}`)
  }
}

greeting();