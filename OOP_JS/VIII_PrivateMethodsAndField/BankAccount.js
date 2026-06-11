class BankAccount {
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#showbalance();
    } else {
      console.log("Deposit amount must be positive.");
    }
  }
  #showbalance() {
    console.log(`Current balance: $${this.#balance}`);
  }
}
module.exports = BankAccount;
