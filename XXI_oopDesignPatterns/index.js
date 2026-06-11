// OOP Design Patterns Examples
const DatabaseConnection = require("./Singleton");
const DatabaseFactory = require("./Factory");
const { Subject, Observer } = require("./Observer");
const {
  ShoppingCart,
  CreditCardPayment,
  PayPalPayment,
  BitcoinPayment,
} = require("./Strategy");

console.log("=== 1. SINGLETON PATTERN ===");
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log("Same instance?", db1 === db2); // true
console.log(db1.query("SELECT * FROM users"));

console.log("\n=== 2. FACTORY PATTERN ===");
const mysqlDB = DatabaseFactory.createDatabase("mysql");
const mongoDBDB = DatabaseFactory.createDatabase("mongodb");
console.log(mysqlDB.connect());
console.log(mongoDBDB.connect());

console.log("\n=== 3. OBSERVER PATTERN ===");
const subject = new Subject();
const observer1 = new Observer("User 1");
const observer2 = new Observer("User 2");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("New message arrived!");

console.log("\n=== 4. STRATEGY PATTERN ===");
const cart = new ShoppingCart(new CreditCardPayment());
console.log(cart.checkout(100));

cart.setPaymentStrategy(new PayPalPayment());
console.log(cart.checkout(50));

cart.setPaymentStrategy(new BitcoinPayment());
console.log(cart.checkout(75));
