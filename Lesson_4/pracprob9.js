let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageSum = 0;

function addAges (ageObj) {
  Object.keys(ageObj).forEach(name => {
    ageSum += ages[name];
  })
}

addAges(ages);

console.log(ageSum);