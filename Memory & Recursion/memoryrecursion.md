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

## Recursion:
A function calling itself to solve smaller sub-problems.
Each call is pushed to the call stack.
Needs a base case to prevent infinite loop.

🧾 Example 1: Print "Hello World" N times using Recursion
```js
function printHello(n) {
    if (n === 0) return;    // base case
    console.log("Hello World");
    printHello(n - 1);      // recursive call
}
```
printHello(5);
💡 Output:

Hello World
Hello World
Hello World
Hello World
Hello World

🧾 Example 2: Print N to 1 using Recursion
```js
function printNumbers(n) {
    if (n === 0) return;     // base case
    console.log(n);
    printNumbers(n - 1);     // recursive call
}
```

printNumbers(5);
💡 Output:

5
4
3
2
1
