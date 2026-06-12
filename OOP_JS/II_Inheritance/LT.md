# Inheritance in Object-Oriented Programming (OOP)

## 1. What is Inheritance?

**Inheritance** is an Object-Oriented Programming (OOP) mechanism that allows one class (child/subclass) to acquire the properties and behaviors of another class (parent/superclass).

In simple terms:

A child class can reuse and extend what already exists in a parent class.
The existing class is called the **Parent Class (Base Class)**, while the new class is called the **Child Class (Derived Class)**.

---

## 2. Why Do We Need Inheritance?

Without inheritance, multiple classes may contain the same logic repeatedly.

For example:

A Dog can eat and sleep.
A Cat can eat and sleep.

If every class defines its own eating and sleeping behavior, the code becomes duplicated.

Inheritance solves this problem by placing common functionality in a parent class and allowing child classes to reuse it.

Benefits
Code reusability
Less duplication
Easier maintenance
Better organization

## 3. Real-Life Example

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

## 4. Parent Class

A parent class contains common attributes and behaviors shared by multiple classes.

---

## 5. Child Class

A child class inherits from a parent class and can add its own features.

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

## 6. The "IS-A" Relationship

Inheritance should represent a real-world IS-A relationship.

Examples:

Dog IS-A Animal
Cat IS-A Animal
Bird IS-A Animal

If the statement sounds natural, inheritance is usually appropriate.
