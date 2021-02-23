function timeOfDay (number) {
  let hour;
  let min;
  if (number.toString().startsWith("-")) {
    hour = 24 + Math.floor(number / 60);
    min = 60 + (number % 60);
  } else {
    hour = Math.floor(number / 60);
    min = number % 60;
  }
  return formatTime(hour, min);
}

function formatTime (hour, min) {
  let correctHour = sizeHour(hour);
  if (correctHour < 10) {
    correctHour = '0' + correctHour.toString();
  }
  if (min < 10) {
    min = '0' + min.toString();
  }
  return `${correctHour}:${min}`;
}

function sizeHour (hour) {
  if (hour > 24) {
    hour = sizeHour(hour - 24);
  } else if (hour < 24) {
    return hour;
  }
  return hour;
}

console.log(timeOfDay(0)) // === "00:00");
console.log(timeOfDay(-3)) // === "23:57");
console.log(timeOfDay(35)) // === "00:35");
console.log(timeOfDay(-1437)) // === "00:03");
console.log(timeOfDay(3000)) // === "02:00");   /////
console.log(timeOfDay(800)) // === "13:20");
console.log(timeOfDay(-4231)) // === "01:29");  //////