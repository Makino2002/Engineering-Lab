const Customer = require("./customer");
class PremiumCustomer extends Customer {
  constructor(name, age, address, phone, membershipLevel) {
    super(name, age, address, phone);
    this.membershipLevel = membershipLevel;
  }
}

export default PremiumCustomer;
