function Person() {
  FirstName:"";
  LastName:"";

  get FirstName(){
    return this.FirstName;
  }
  set FirstName(par){
    this.FirstName = par;
  }

  getLastName(){
    return this.LastName;
  }
  setLastName(){
    this.LastName = par;
    
  }

fullName(){
  return (`${this.getFirstName} ${this.getLastName}`)
}
}

const john = Object.create(person);
const simon = Object.create(person);

john.setFirstName ("John");
john.setLastName ("Doe");

simon.setFirstName ("Simon");
simon.setLastName ("Collins");

console.log(simon.getLastName)
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins