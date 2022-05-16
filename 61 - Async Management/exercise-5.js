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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
    let yep = persons.find(person => person.id === id);
    if(yep){
      return resolve(yep)
    }
    else{
      return reject(`${id} is an invalid id`)
    }
  },1000)})
}


function fetchJobById(id){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
    let ok = jobs.find(job => job.id === id);
    if(ok){
      return resolve(ok)
    }
    else{
      return reject(`${id} is an invalid id`)
    }
  },500)} )
}



let input = prompt("Inserisci un id ");
input = input*1; 
Promise.race([fetchPersonById(input),fetchJobById(input)])
.then((values) => console.log(values))
.catch((err) => console.log(err));
