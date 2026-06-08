# Inheritance in Object-Oriented Programming (OOP)

## 1. What is Inheritance?

**Inheritance** is one of the four fundamental principles of Object-Oriented Programming (OOP).

Inheritance allows a class to acquire the properties and methods of another class.

The existing class is called the **Parent Class (Base Class)**, while the new class is called the **Child Class (Derived Class)**.

---

# 2. Benefits of Inheritance

- Reuse existing code.
- Reduce code duplication.
- Improve maintainability.
- Create hierarchical relationships between classes.
- Support polymorphism.

---

# 3. Real-Life Example

Consider a customer management system.

Every customer has:

- name
- age
- address
- phone

A premium customer also has:

- membershipLevel

Instead of rewriting all customer properties, we can inherit them from the `Customer` class.

---

# 4. Parent Class

```javascript
class Customer {
  constructor(name, age, address, phone) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
  }

  showInfo() {
    console.log(`${this.name} - ${this.phone}`);
  }
}

module.exports = Customer;
```

---

# 5. Child Class

```javascript
const Customer = require("./customer");

class PremiumCustomer extends Customer {
  constructor(name, age, address, phone, membershipLevel) {
    super(name, age, address, phone);

    this.membershipLevel = membershipLevel;
  }
}

export default PremiumCustomer;
```

---

# 6. Creating an Object

```javascript
const customer1 = new PremiumCustomer(
  "John",
  25,
  "New York",
  "0123456789",
  "Gold",
);
```

Object structure:

```javascript
{
  name: "John",
  age: 25,
  address: "New York",
  phone: "0123456789",
  membershipLevel: "Gold"
}
```

---

# 7. Accessing Inherited Properties

```javascript
console.log(customer1.name);
console.log(customer1.phone);
console.log(customer1.membershipLevel);
```

Output:

```text
John
0123456789
Gold
```

---

# 8. Accessing Inherited Methods

Suppose the parent class contains:

```javascript
showInfo() {
  console.log(
    `${this.name} - ${this.phone}`
  );
}
```

The child object can use it directly:

```javascript
customer1.showInfo();
```

Output:

```text
John - 0123456789
```

Even though `showInfo()` is not declared inside `PremiumCustomer`.

---
