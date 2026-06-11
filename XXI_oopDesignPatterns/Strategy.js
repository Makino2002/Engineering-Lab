// Strategy Pattern - Chọn algorithm ở runtime
class PaymentStrategy {
  pay(amount) {
    throw new Error("pay() method must be implemented");
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    return `Paid ${amount} via Credit Card`;
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    return `Paid ${amount} via PayPal`;
  }
}

class BitcoinPayment extends PaymentStrategy {
  pay(amount) {
    return `Paid ${amount} Bitcoin`;
  }
}

class ShoppingCart {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount) {
    return this.paymentStrategy.pay(amount);
  }
}

module.exports = {
  PaymentStrategy,
  CreditCardPayment,
  PayPalPayment,
  BitcoinPayment,
  ShoppingCart,
};
