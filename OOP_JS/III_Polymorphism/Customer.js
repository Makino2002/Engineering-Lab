class Customer {
  constructor(name, age, address, phone) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
  }
  placeOrder(order) {
    console.log(`${this.name} placed an order: ${order}`);
  }
  cancelOrder(order) {
    console.log(`${this.name} canceled the order: ${order}`);
  }
}

export default Customer;
