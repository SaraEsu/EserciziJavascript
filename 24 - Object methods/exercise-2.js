const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
/* console.log(...Object.values(person)); */
Object.values(person).forEach(function(value){console.log(value)});