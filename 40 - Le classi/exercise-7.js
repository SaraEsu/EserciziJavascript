class Person {
  constructor(firstName,lastName,age){
    this.name = firstName;
    this.surname = lastName;
    this._age = age;
  }
  get firstName(){
    return this.name;
  }
  set firstName(value){
    this.name = value;
  }
  get lastName(){
    return this.surname;
  }
  set lastName(value){
    this.surname = value;
  }
  get age(){
    return this._age;
  }
  set age(value){
    this._age = value;
  }
  get fullName(){
    return `${this.name} ${this.surname}` 
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);