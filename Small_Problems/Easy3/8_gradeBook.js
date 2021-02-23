function getGrade (gradeOne, gradeTwo, gradeThree) {
  let gradeAverage = (gradeOne + gradeTwo + gradeThree) / 3;
  if (gradeAverage > 90) {
    return 'A';
  } else if (gradeAverage > 80) {
    return 'B';
  } else if (gradeAverage > 70) {
    return 'C';
  } else if (gradeAverage > 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"