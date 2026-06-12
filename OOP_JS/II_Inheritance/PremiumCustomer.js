import Customer from "./Customer.js";
class PremiumCustomer extends Customer {
  constructor(name, age, address, phone, membershipLevel) {
    super(name, age, address, phone);
    this.membershipLevel = membershipLevel;
  }
}

export default PremiumCustomer;
