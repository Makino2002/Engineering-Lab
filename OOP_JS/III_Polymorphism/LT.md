# III — Polymorphism

## Objectives

- Understand the concept of polymorphism in object-oriented programming.

- Recognize common types of polymorphism and their benefits.

- Know how to use polymorphism in software design (without coding).

## Key Concept

Polymorphism is the ability of different objects to be handled through the same common interface. This allows the same call (e.g., a method with the same name) to behave differently depending on the actual type of the object.

## Forms of Polymorphism

- Subtype polymorphism: an interface or parent class is implemented/overridden by multiple subclasses.

- Method overriding: a subclass provides specific behavior for a method declared in the parent class.

- Parametric polymorphism: the same structure works with multiple data types (this concept often appears in languages ​​with static types and generics).

## Benefits

- Increased extensibility: easy to add new classes without modifying the general code.

- Increased reusability: general code works with many types of objects.

- Reduced dependencies: calling code only needs to know the general interface, not the specific details.

## Practical applications (description, no code)

- Payment system design: there may be different types of `PaymentMethod` (cards, e-wallets, bank transfers) but the system only calls a single general `process()` method; each type implements its own detailed processing.

- Display Interface: A `render()` function takes a `Component` and calls `render()` for each component type (button, input, card). Each type displays differently but is called through the same interface.

## Design Notes

- Ensure the interface/parent class adequately describes the common behavior, avoiding overuse that leads to a heavy interface.

- Avoid explicit type-checking to differentiate behavior; prioritize overriding and common interfaces.

- Consider the SOLID principle (especially the L-Liskov Substitution): a subclass must be able to replace its parent class without changing the correctness of the program.

## Self-Study Exercises

- Describe a simple system with at least three different object types that use the same common interface. Write a short essay on how polymorphism reduces complexity.

- Analyze an existing (or imagined) design and indicate where polymorphism can be applied to improve scalability.

---
