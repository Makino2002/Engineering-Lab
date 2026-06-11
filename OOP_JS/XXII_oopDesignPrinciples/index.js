// OOP Design Principles Examples
const { User, UserValidator, UserRepository } = require("./SolidSRP");
const { Circle, Rectangle, Triangle, AreaCalculator } = require("./SolidOCP");
const { StringUtils, FormValidator } = require("./DRY");
const { SimpleCalculator } = require("./KISS");
const { UserManager } = require("./YAGNI");
const {
  UserAccount,
  EmailService,
  NotificationService,
} = require("./CohesionCoupling");

console.log("=== 1. SOLID - Single Responsibility Principle ===");
const user = new User("John Doe", "john@example.com");
const validator = new UserValidator();
const repository = new UserRepository();

validator.validate(user);
repository.save(user);
console.log("User saved:", repository.findAll());

console.log("\n=== 2. SOLID - Open/Closed Principle ===");
const shapes = [new Circle(5), new Rectangle(4, 5), new Triangle(3, 4)];
const calculator = new AreaCalculator();
console.log("Total area:", calculator.calculateTotal(shapes));

console.log("\n=== 3. DRY - Don't Repeat Yourself ===");
const formValidator = new FormValidator();
formValidator.validateName("John");
formValidator.validateEmail("john@example.com");
formValidator.validateUsername("john123");
console.log("Form valid:", formValidator.getErrors().length === 0);

console.log("\n=== 4. KISS - Keep It Simple ===");
const simpleCalc = new SimpleCalculator();
console.log("10 + 5 =", simpleCalc.add(10, 5));
console.log("10 - 5 =", simpleCalc.subtract(10, 5));
console.log("10 * 5 =", simpleCalc.multiply(10, 5));
console.log("10 / 5 =", simpleCalc.divide(10, 5));

console.log("\n=== 5. YAGNI - You Aren't Gonna Need It ===");
const userManager = new UserManager();
userManager.addUser("Alice", "alice@example.com");
userManager.addUser("Bob", "bob@example.com");
console.log("All users:", userManager.getAllUsers());

console.log("\n=== 6. High Cohesion & Low Coupling ===");
const userAccount = new UserAccount("Jane", "jane@example.com");
const emailService = new EmailService();
const notificationService = new NotificationService(emailService);
notificationService.notify(userAccount, "Welcome", "Welcome to our platform!");
