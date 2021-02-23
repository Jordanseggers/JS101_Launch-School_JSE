function shortLongShort (stringA, stringB) {
  if (stringA.length < stringB.length) {
    console.log(`${stringA}${stringB}${stringA}`);
  } else {
    console.log(`${stringB}${stringA}${stringB}`);
  }
}

shortLongShort('hey', 'hi');
shortLongShort('ggg', 'bbbb');