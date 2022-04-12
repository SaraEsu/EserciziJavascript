const Person = {
  firstName:"",
  lastName:"",

  get FirstName(){
    return this.firstName;
  },
  set FirstName(par){
    this.firstName = par;
  },

  get LastName(){
    return this.lastName;
  },
  set LastName(par){
    this.lastName = par;
    
  },

fullName(){
  return (`${this.getFirstName} ${this.getLastName}`)
}
};

const john = Object.create(Person);
const simon = Object.create(Person);

john.FirstName ("John");
john.LastName ("Doe");

simon.FirstName ("Simon");
simon.LastName ("Collins");

console.log(simon.getLastName)
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins