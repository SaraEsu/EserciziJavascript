const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let i = 0;

for(let keys in person){
  console.log(Object.keys(person)[i] + ': ' + Object.values(person)[i]);
  i++;
}