## Stack Memory:
Stack is a linear data structure: Last In, First Out (LIFO).

Used to store:
Primitive data types (Number, String, Boolean, Undefined, Null, Symbol, BigInt).
Function calls (Call Stack).

Call Stack:
A special part of stack memory.
Tracks active function calls in JavaScript.
Functions are pushed when called and popped when returned.

📌 Example:
```js
function greet() {
    console.log("Hello");
}
greet();
```

When greet() is called:
[ main() ]
[ greet() ]  <- pushed

When finished:
[ main() ]   <- greet() popped

Stack Storing Primitive Variables

Stored directly in stack memory.
Example:

let a = 10;  // stored in stack
let b = a;   // b copies the value
Changes to a won't affect b — because primitives are copied by value.
