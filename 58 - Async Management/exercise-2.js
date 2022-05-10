const persons = [{
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
  let ok = persons.find(item => item.id === id);
  return new Promise((resolve, reject) => {
    if (ok) {
      setTimeout(() => resolve(ok), 1000);
    } else {
      reject("Id non riconosciuto");
    }
  });
}

fetchPersonById(1).then((person) => console.log(person)).catch((err) => console.log(err));