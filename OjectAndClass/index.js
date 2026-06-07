const Customer = require("./customer");

const customer1 = new Customer("John Doe", "30", "123 Main St", "555-1234");
customer1.placeOrder("Pizza");
customer1.cancelOrder("Pizza");
