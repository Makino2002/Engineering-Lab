const Customer = require("./Customer");
const customer = new Customer("Bob");
customer.setAddress("123 Elm St");
customer.setPhone("555-555-5555");

console.log(
  `${
    customer.name
  } lives at ${customer.getAddress()} and can be contacted at ${customer.getPhone()}`,
);
