const prompt = require('prompt-sync')();
const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve,reject)=>{
    if(persons.find(person => person.id == id)){
      resolve(persons.find(person =>person.id == id));
    }
    else{
      reject(`${id} non è un id`);
    }
  });
}
let inputId = prompt("Inserisci un id ");
fetchPersonById(inputId)
.then(ok => console.log(ok))
.catch(no => console.log(no));
