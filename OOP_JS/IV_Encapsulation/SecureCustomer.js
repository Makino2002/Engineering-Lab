class SecureCustomer {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    let _password = password; //* Private variable (not accessible directly outside)

    this.getPassword = function () {
      return _password; //* Getter method to access the private variable
    };
    this.setPassword = function (newPassword) {
      _password = newPassword; //* Setter method to update the private variable
    };
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Email: ${this.email} , Password: ${this.getPassword()}`,
    ); //* Accessing the private variable through the getter method
  }
}

export default SecureCustomer;
