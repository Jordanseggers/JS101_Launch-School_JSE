let readline = require('readline-sync');

function findAreaInMeters(length, width) {
  return length * width;
}

function convertArea(areaInMeters) {
  return areaInMeters * 10.7639;
}

let length = readline.question("please enter the room length in meters ");
let width = readline.question("please enter the room width in meters ");

let areaInMeters = findAreaInMeters(length, width);
let areaInFeet = convertArea(areaInMeters);

console.log(`The area in meters is ${areaInMeters}. The area in feet is ${areaInFeet}`);