function greetings (nameArray, workObject) {
  let name = nameArray.join(' ');
  let title = workObject['title'];
  let occupation = workObject['occupation'];
  
  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));