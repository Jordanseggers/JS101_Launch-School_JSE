function logInBox(text) {
  let borderFill = '';
  let fill = '';
  
  for (let i = 0; i > text.length; i++) {
    borderFill.concat('-');
    fill.concat(' ');
  }
  
  console.log(`+-${borderFill}-+`);
  console.log(`| ${fill} |`);
  console.log(`| ${text} |`);
  console.log(`| ${fill} |`);
  console.log(`+-${borderFill}-+`);
}

logInBox('heeeeyyyyooo');