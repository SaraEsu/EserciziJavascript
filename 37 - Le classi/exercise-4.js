class BankAccount {
    constructor(importo) {
        this.total = importo;
    }
    deposit = value =>this.total+=value;
    withdraw = value =>this.total-=value;
    view = () => console.log(this.total);
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();


