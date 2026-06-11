class Product {
  #price;
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log("Price must be positive.");
    }
  }
}

module.exports = Product;
