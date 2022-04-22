function isAdult(age) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let{age:età}=person;
let{age}=person;

console.log(isAdult(age));
console.log(isAdult(età));