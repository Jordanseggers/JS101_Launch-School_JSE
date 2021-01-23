let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//can't filter an object!!

let males = Object.values(munsters).filter(person => {
  return person['gender'] === 'male';
});

let agesArr = []

males.forEach(person => {
  let currentAge = person['age'];
  agesArr.push(currentAge);
})

let finalSum = agesArr.reduce((a, b) => {
  a + b;
});

console.log(finalSum);