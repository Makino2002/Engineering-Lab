const PremiumCustomer = require("./premiumCustomer");

const premiumCustomer1 = new PremiumCustomer(
  "Jane Smith",
  "28",
  "456 Elm St",
  "555-5678",
  "Gold",
);
console.log(premiumCustomer1);
premiumCustomer1.placeOrder("Sushi");
premiumCustomer1.cancelOrder("Sushi");
