const hasAddress = require("./hasAddres");
const hasContactInfo = require("./hasContactInfo");
class Customer {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Customer.prototype, hasAddress);
Object.assign(Customer.prototype, hasContactInfo);

module.exports = Customer;
