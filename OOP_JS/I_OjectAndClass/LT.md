# Object and Class in Object-Oriented Programming (OOP)

## 1. Introduction

Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around **objects** rather than functions and logic. Two fundamental concepts in OOP are **Class** and **Object**.

---

## 2. What is a Class?

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

---

## 3. What is an Object?

An **Object** is an instance of a class.

If a class is a blueprint, an object is the actual thing built from that blueprint.

### Example

```
Object: myCat (instance của Animal)
├── name = "Luna"
├── age = 3
├── species = "Felis catus"
└── [có thể gọi] eat(), sleep(), makeSound()

```

### Access Modifiers

Access modifiers control the level of access to the elements (fields, methods) of a class from the outside. They are the foundation of encapsulation.

#### Ba mức truy cập chính

| Modifier    | Ký hiệu | Truy cập từ         |
| ----------- | ------- | ------------------- |
| `public`    | `+`     | Mọi nơi             |
| `protected` | `#`     | Class đó + subclass |
| `private`   | `-`     | Chỉ trong class đó  |

#### Hình dung trực quan

```
Class BankAccount
├── [public]    accountNumber   → ai cũng thấy
├── [protected] interestRate    → chỉ class con thấy (SavingsAccount)
└── [private]   password        → chỉ BankAccount tự dùng
```

#### Why are Access Modifiers needed?

1. **Data Protection**: Prevents external code from accidentally overwriting important data.

2. **Implementation Hiding**: Users of the class don't need to know how it works internally.

3. **Change Control**: Makes it easy to change the internal logic without affecting the code using the class.

## 4. Relationship Between Class and Object

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

## 5. Constructor

### Constructor là gì?

**Constructor** là một **method đặc biệt** được gọi tự động khi một object được tạo ra (`new`). Nhiệm vụ chính là **khởi tạo trạng thái** ban đầu của object.

### Đặc điểm của Constructor

- Tên thường trùng với tên class (Java, C++) hoặc là keyword `constructor` (JS)
- Chạy **một lần duy nhất** khi object được tạo
- Không trả về giá trị (hoặc trả về `this` ngầm định)
- Có thể có nhiều constructor (overloading — trong các ngôn ngữ hỗ trợ)

### Constructor Overloading (khái niệm chung)

```
// Pseudocode
class Point {
  constructor()              → x=0, y=0 (default)
  constructor(x, y)         → x=x, y=y
  constructor(point)        → copy từ point khác
}
```

### Constructor vs Regular Method

|            | Constructor          | Method thường     |
| ---------- | -------------------- | ----------------- |
| Gọi khi    | `new ClassName()`    | `object.method()` |
| Số lần gọi | Đúng 1 lần           | Nhiều lần tùy ý   |
| Return     | Trả về object (ngầm) | Tùy               |
| Mục đích   | Khởi tạo             | Thực hiện hành vi |

---

## 6. Methods

### Method là gì?

**Method** là một **hàm được định nghĩa bên trong class**, đại diện cho **hành vi** của object. Methods thao tác trên dữ liệu (fields) của object.

### Phân loại Methods

#### 4.1 Instance Methods

Hoạt động trên **một instance cụ thể** — cần `this` để truy cập dữ liệu của object đó.

#### 4.2 Static Methods

Thuộc về **class**, không phải instance — không có `this` trỏ đến object. Dùng cho utility functions hoặc factory methods.

```js
class MathUtils {
  static square(n) {
    return n * n;
  }

  static isEven(n) {
    return n % 2 === 0;
  }
}

MathUtils.square(4); // 16 — gọi trực tiếp từ class
```

#### 4.3 Accessor Methods (Getters/Setters)

Kiểm soát việc đọc/ghi dữ liệu. (Xem chi tiết trong file `gettingAndSetting.md`)

```js
class Temperature {
  #celsius;

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }

  set celsius(value) {
    if (value < -273.15) throw new RangeError("Below absolute zero!");
    this.#celsius = value;
  }
}
```

### Method Signature

Một method gồm:

```
[access_modifier] [static] returnType methodName(parameters) {
    // body
}
```

```js
// Instance method, public, trả về number
area() { return Math.PI * this.r ** 2; }

// Static method, public
static create(r) { return new Circle(r); }

// Private instance method
#validate() { return this.#r > 0; }
```

### Nguyên tắc thiết kế Method

- **Single Responsibility**: Mỗi method làm đúng một việc
- **Tên động từ**: `calculateTax()`, `sendEmail()`, `validateInput()`
- **Ngắn gọn**: Nếu method dài hơn ~20 dòng, có thể nên tách ra
