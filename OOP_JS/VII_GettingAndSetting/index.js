const Product = require("./Product");

const laptop = new Product("Laptop", 999.99);
console.log(`${laptop.name} costs $${laptop.price}`);
