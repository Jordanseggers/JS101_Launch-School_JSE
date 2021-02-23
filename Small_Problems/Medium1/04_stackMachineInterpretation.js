function minilang (instructions) {
  let stackArray = [];
  let register = 0;
  
  let instructionsArray = instructions.split(' ');
  for (let i = 0; i >= instructionsArray.length; i++){
      if (instructionsArray[i] === 'PUSH') {
        stackArray.push(register);
    } else if (instructionsArray[i] === 'ADD') {
        register = register + stackArray.pop();
    } else if (instructionsArray[i] === 'SUB') {
      register = register - stackArray.pop();
    } else if (instructionsArray[i] === 'MULT') {
      register = register * stackArray.pop();
    } else if (instructionsArray[i] === 'DIV') {
      register = parseInt(register / stackArray.pop(), 10);
    } else if (instructionsArray[i] === 'MOD') {
      register = register % stackArray.pop();
    } else if (instructionsArray[i] === 'POP') {
      register = stackArray.pop();
    } else if (instructionsArray[i] === 'PRINT') {
      console.log(register);
    } else {
      register = instructionsArray[i];
    }
  }
}
  


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)