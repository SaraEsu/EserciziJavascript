class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }


}


class BankAccountVip extends BankAccount {
  balance = 0;
 constructor(amount){
   super(amount);
   this.balance = amount;
 } 

 deposit(amount) {

  if (this.balance >= 1000) {
    amount += amount * 3 / 100;
  }
  super.deposit(amount);
}
}




const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();

