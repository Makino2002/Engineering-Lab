# Object and Class in Object-Oriented Programming (OOP)

## 1. Introduction

Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around **objects** rather than functions and logic. Two fundamental concepts in OOP are **Class** and **Object**.

---

# 2. What is a Class?

A **Class** is a blueprint or template used to create objects.

It defines:

- Attributes (data/properties)
- Methods (functions/behaviors)

### Example

A class named `Student` may contain:

Attributes:

- id
- name
- age

Methods:

- study()
- takeExam()

### JavaScript Example

```javascript
class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}
```

---

# 3. What is an Object?

An **Object** is an instance of a class.

If a class is a blueprint, an object is the actual thing built from that blueprint.

### Example

```javascript
const student1 = new Student(1, "John", 20);
const student2 = new Student(2, "Alice", 22);
```

Here:

- `student1` is an object
- `student2` is an object

Both objects are created from the `Student` class.

---

# 4. Relationship Between Class and Object

| Class                          | Object                  |
| ------------------------------ | ----------------------- |
| Blueprint                      | Real instance           |
| Defines properties and methods | Contains actual values  |
| Created once                   | Can have many instances |
| Does not occupy much memory    | Occupies memory         |

### Real-Life Example

Class = Car Design

Object:

- Toyota Camry
- Honda Civic
- Tesla Model 3

All are objects created from the general "Car" blueprint.

---

# 5. Creating Objects

### Using a Constructor

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");
```

Output:

```javascript
console.log(car1.brand);
// Toyota

console.log(car2.model);
// Civic
```

---

# 6. Properties and Methods

### Properties

Store information about an object.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Methods

Define behavior.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}
```
