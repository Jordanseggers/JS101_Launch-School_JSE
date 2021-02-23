const HOURS_IN_DAY = 24;
const MIN_IN_HOUR = 60;


function afterMidnight (time) {
  let hours = Number(time.split(':')[0]);
  let min = Number(time.split(':')[1]);
  
  if (hours === 24) {
    hours = 0;
  }
  
  let totalMin = (hours * MIN_IN_HOUR) + min;
  return totalMin;
} 

function beforeMidnight (time) {
  let hours = Number(time.split(':')[0]);
  let min = Number(time.split(':')[1]);
  
  if (hours === 24) {
    hours = 0;
  }
  
  let totalMin = (hours * MIN_IN_HOUR) + min;
  return 1438 - totalMin;
} 

console.log(afterMidnight("00:00")) ///=== 0);
console.log(beforeMidnight("00:00")) /// === 0);
console.log(afterMidnight("12:34")) // === 754);
console.log(beforeMidnight("12:34")) /// === 686);
console.log(afterMidnight("24:00")) // === 0);
console.log(beforeMidnight("24:00")) /// === 0);
