const Customer = require("./customer");

class PremiumCustomer extends Customer {
  constructor(name, age, address, phone, membershipLevel) {
    super(name, age, address, phone);
    this.membershipLevel = membershipLevel;
  }
  placeOrder(order) {
    console.log(`${this.name} (Premium) placed an order: ${order}`);
  }
}

export default PremiumCustomer;
