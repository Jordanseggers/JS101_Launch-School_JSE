let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// add up ages

function addUpAges (theObject) {
  let agesArray = Object.values(theObject);
  let ageSum = 0
  agesArray.forEach(age => ageSum += age)
  return ageSum;
}

console.log(addUpAges(ages));