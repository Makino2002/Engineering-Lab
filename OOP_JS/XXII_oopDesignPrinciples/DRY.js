// DRY - Don't Repeat Yourself
// Tránh lặp lại code

class StringUtils {
  static isEmpty(str) {
    return !str || str.trim().length === 0;
  }

  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static capitalize(str) {
    if (this.isEmpty(str)) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static trimWhitespace(str) {
    return str.trim();
  }
}

class FormValidator {
  constructor() {
    this.errors = [];
  }

  validateName(name) {
    if (StringUtils.isEmpty(name)) {
      this.errors.push("Name is required");
      return false;
    }
    return true;
  }

  validateEmail(email) {
    if (StringUtils.isEmpty(email)) {
      this.errors.push("Email is required");
      return false;
    }
    if (!StringUtils.isValidEmail(email)) {
      this.errors.push("Email is invalid");
      return false;
    }
    return true;
  }

  validateUsername(username) {
    if (StringUtils.isEmpty(username)) {
      this.errors.push("Username is required");
      return false;
    }
    if (username.length < 3) {
      this.errors.push("Username must be at least 3 characters");
      return false;
    }
    return true;
  }

  getErrors() {
    return this.errors;
  }
}

module.exports = { StringUtils, FormValidator };
