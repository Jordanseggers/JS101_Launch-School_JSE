function countOccurrences (array) {
  let counts = {};
  array.forEach(element => {
    if (counts.hasOwnProperty[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  })
  for (let key in counts) {
    console.log(`${key} => ${counts[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
