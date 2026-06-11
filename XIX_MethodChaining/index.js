const User = require("./User");
const user = new User("Alice");
// Method chaining example
user
  .login()
  .userInfo()
  .updateProfile("Alice Johnson")
  .userInfo()
  .logout()
  .userInfo();
