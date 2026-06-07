## Number Conversion & Bitwise Operators

### ✅ 1️⃣ Decimal to Binary Process
Divide the number by 2.
Record the remainder (0 or 1).
Keep dividing the quotient by 2 until it becomes 0.
Reverse the remainders → this is your binary.

Example:
Decimal: 10  
10 ÷ 2 = 5, remainder 0  
5 ÷ 2 = 2, remainder 1  
2 ÷ 2 = 1, remainder 0  
1 ÷ 2 = 0, remainder 1  

Reverse: 1010 → Binary.

### 2️⃣ Binary to Decimal Process

Start from the rightmost bit.
Multiply each bit by 2^position.
Sum all the results.

Example:
Binary: 1010  
= (1×2³) + (0×2²) + (1×2¹) + (0×2⁰)  
= 8 + 0 + 2 + 0 = 10 (Decimal)


## Bitwise Operators in JavaScript:

### 1️⃣ & (AND Operator)
Compares each bit of two numbers.

Returns 1 if both bits are 1, otherwise 0.

Example:
```js
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a & b);  // Output: 1 (Binary: 001)
```

### 2️⃣ | (OR Operator)
Compares each bit of two numbers.
Returns 1 if at least one bit is 1, otherwise 0.

Example:
```js
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a | b);  // Output: 7 (Binary: 111)
```

### 3️⃣ ^ (XOR Operator)
Compares each bit of two numbers.
Returns 1 if the bits are different, 0 if they are the same.

Example:
```js
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a ^ b);  // Output: 6 (Binary: 110)
```

Summary:
& → Both must be 1 to return 1.
| → At least one 1 to return 1.
^ → Returns 1 when bits are different.

### Shift Operators

1️⃣ Left Shift (<<)
Shifts bits to the left.
Each left shift = multiply by 2.

Example:
let x = 5;         // Binary: 101
console.log(x << 1);  // Output: 10  (5 * 2)

2️⃣ Right Shift (>>)
Shifts bits to the right.
Each right shift = divide by 2 (floor for integers).

Example:
Edit
let x = 8;         // Binary: 1000
console.log(x >> 1);  // Output: 4  (8 / 2)

Q: Swap Two Integers Without Third Variable — Using Bitwise XOR
```js
let a = 5, b = 7;

a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b);  // Output: 7 5
```
Logic:XORing twice with the same value restores the original value.

Q: Check Even or Odd — Using Bitwise AND
```js
function isEven(num) {
    return (num & 1) === 0;
}

console.log(isEven(4));  // true (Even)
console.log(isEven(7));  // false (Odd)
```
Logic:
num & 1 checks the last bit.
0 → Even, 1 → Odd.

Q: Check if a Number is Power of 2 — Using Bitwise AND
```js
function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(8));   // true
console.log(isPowerOfTwo(10));  // false
```
Logic:
Powers of 2 have only one 1 in binary.
(num & (num - 1)) will be 0 only for powers of 2.