class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {

      if (amount<0) {
        throw new Error("C'è un errore!"); 
      }
      else{
        this.#amount += amount;
      }
    
    } catch (err) {
      console.log('message', err.message);
      
    }
  }

  withdraw(amount) {
    
try {

  if (amount>0 || this.#amount>amount) {
    throw new Error("C'è un errore!"); 
  }
  else{
    this.#amount -= amount;
  }

} catch (err) {

  console.log('stack', err.stack);
}
  

  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();