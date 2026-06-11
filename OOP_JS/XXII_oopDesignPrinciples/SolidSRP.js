// SOLID Principles - Single Responsibility Principle
// Một class chỉ nên có một trách nhiệm

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

class UserValidator {
  validate(user) {
    if (!user.getName() || user.getName().length === 0) {
      throw new Error("Name is required");
    }
    if (!user.getEmail() || !user.getEmail().includes("@")) {
      throw new Error("Valid email is required");
    }
    return true;
  }
}

class UserRepository {
  constructor() {
    this.users = [];
  }

  save(user) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }
}

module.exports = { User, UserValidator, UserRepository };
