
const person = {
  name:" ",
  surname:" ",
  get firstName(){
    return this.name;
  },
  set firstName(par){
    this.name = par;
  },
  get lastName(){
    return this.surname;
  },
  set lastName(par){
    this.surname = par;
  },
  fullName(){
    return(`${this.name} ${this.surname}`);
  }
};

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";

simon.firstName = "Simon";
simon.lastName = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins