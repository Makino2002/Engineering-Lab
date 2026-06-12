const SecureCustom = require("../SecureCustom");

const secureCustomer = new SecureCustomer(
  "John Doe",
  "john.doe@example.com",
  "mySecurePassword123",
);
secureCustomer.displayInfo();
secureCustomer.setPassword("newSecurePassword456");
secureCustomer.displayInfo();
