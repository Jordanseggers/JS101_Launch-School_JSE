let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flinstonesObj = {};

function makeObject (theArrToConvert) {
  theArrToConvert.map((key, value) => {
    flinstonesObj[key] = value;
  });
}

makeObject(flintstones);
console.log(flinstonesObj);