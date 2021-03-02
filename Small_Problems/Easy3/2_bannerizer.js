function logInBox (textLine) {
  let textLength = textLine.length;
  console.log(`+-${'-'.repeat(textLength)}-+`);
  console.log(`| ${' '.repeat(textLength)} |`);
  console.log(`| ${textLine} |`);
  console.log(`| ${' '.repeat(textLength)} |`);
  console.log(`+-${'-'.repeat(textLength)}-+`);
}

logInBox('To boldly go where no one has gone before.');