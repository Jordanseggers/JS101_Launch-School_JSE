let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};


Object.entries(munsters).forEach(person => {
  console.log(`${person[0]} is a ${person[1]['age']}-year-old ${person[1]['gender']}.`);
});

