function triangles (triangleLength) {
  for (let i = 1; i <= triangleLength; i++) {
    let numOfSpaces = triangleLength - i;
    console.log(' '.repeat(numOfSpaces).concat('*'.repeat(i)));
  }
}

triangles(5);
triangles(9);