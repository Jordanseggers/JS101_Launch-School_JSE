function swapName (unorderedName) {
  let nameArray = unorderedName.split(' ');
  let lastName = nameArray.pop();
  
  for (let i = 1; i < nameArray.length - 1; i++) {
    
  }
  
  return `${lastName}, ${nameArray.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"