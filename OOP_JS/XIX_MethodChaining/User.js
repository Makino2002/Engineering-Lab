class User {
  constructor(name) {
    this.name = name;
    this.loggedIn = false;
  }
  login() {
    this.loggedIn = true;
    console.log(`${this.name} logged in.`);
    return this; // Return the instance for chaining
  }
  userInfo() {
    console.log(`User: ${this.name}, Logged In: ${this.loggedIn}`);
    return this; // Return the instance for chaining
  }
  updateProfile(newName) {
    this.name = newName;
    console.log(`${this.name}'s profile updated.`);
    return this; // Return the instance for chaining
  }
  logout() {
    this.loggedIn = false;
    console.log(`${this.name} logged out.`);
    return this; // Return the instance for chaining
  }
}
module.exports = User;
