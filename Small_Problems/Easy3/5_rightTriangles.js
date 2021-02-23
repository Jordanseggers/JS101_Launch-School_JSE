function triangle (lengthNumber) {
  
  for (let i = 1; i <= lengthNumber; i++) {
    let star = '*'
    console.log(star.repeat(i));
  }
}

triangle(2);
triangle(5);
triangle(7);