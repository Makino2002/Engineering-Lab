// SOLID Principles - Open/Closed Principle
// Mở rộng nhưng không sửa đổi code hiện có

class Shape {
  getArea() {
    throw new Error("getArea() must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

class AreaCalculator {
  calculateTotal(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
  }
}

module.exports = { Shape, Circle, Rectangle, Triangle, AreaCalculator };
