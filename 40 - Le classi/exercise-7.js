class Person {
  constructor(name,surname,personAge){
    this.firstName = name;
    this.lastName = surname;
    this.age = personAge;
  }
  get FirstName(){
    return this.name;
  }
  set FirstName(value){
    this.firstName = value;
  }
  get LastName(){
    return this.surname;
  }
  set LastName(value){
    this.lastName = value;
  }
  get PersonAge(){
    return this.personAge;
  }
  set PersonAge(value){
    this.age = value;
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}` 
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);