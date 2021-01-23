let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flinstonesObj = {};

function fillObject (flinstonesArr) {
  let index = 0;
  flinstonesArr.forEach(person => {
    flinstonesObj[person] = index;
    index += 1;
  })
}

fillObject(flintstones);

console.log(flinstonesObj);