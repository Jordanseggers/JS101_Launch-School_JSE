let checkOne = [1, 2, 3];


function joinOr (anyArr, joinWith = ',', separater = "or") {
  switch (anyArr.length) {
    case 0:
      return '';
    case 1:
    case 2:
      return anyArr.join(` ${separater} `);
    default:
      let beforeSeparater = anyArr.slice(0, anyArr.length - 1).join(`${joinWith} `);
      let afterSeparater = anyArr[anyArr.length - 1];
      console.log(`${beforeSeparater}${joinWith} ${separater} ${afterSeparater}`);
  }
}
  
console.log(joinOr(checkOne));
  
