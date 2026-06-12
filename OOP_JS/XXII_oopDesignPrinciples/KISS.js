// KISS - Keep It Simple, Stupid
// Giữ code đơn giản

// Tốt: Đơn giản, dễ hiểu
class SimpleCalculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Không tốt: Quá phức tạp cho một task đơn giản
class ComplexCalculator {
  calculate(a, b, operation) {
    const operations = {
      add: (x, y) => x + y,
      sub: (x, y) => x - y,
      mul: (x, y) => x * y,
      div: (x, y) => (y === 0 ? null : x / y),
    };

    if (!operations[operation]) {
      throw new Error("Unknown operation");
    }

    const result = operations[operation](a, b);
    return result === null ? { error: "Division by zero" } : { result };
  }
}

module.exports = { SimpleCalculator, ComplexCalculator };
