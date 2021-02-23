function teddyAge () {
  function getRandomInt() {
    let min = 20;
    let max = 121;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  let age = getRandomInt();
  return `Teddy is ${age} years old!`;
}

console.log(teddyAge());