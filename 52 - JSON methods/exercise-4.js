const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

for (values in person) {
  if (typeof (person[values]) === "string") {
    delete person[values];
  }
}

const json = JSON.stringify(person);
console.log(json); // Should return: { id: 1, age: 25 }