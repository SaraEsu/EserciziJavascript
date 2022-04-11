const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;


person2.firstName='Simon';

console.log(person1);
console.log(person2);

/*Viene modificato anche l'oggetto 'person1'
 perché gli oggetti non vengono modificati per valore
 (come nel caso delle variabili),
 ma per il riferimento allo spazio di memori.
 */