
Nested Looping & Pattern Programming in JavaScript

Nested Loops
Definition: A loop inside another loop.

Use case: Common in grid or matrix problems, pattern printing, and multi-dimensional iteration.

Syntax:

for (let i = 0; i < rows; i++) {
  for (let j = 0; j <= i; j++) {
    // inner loop logic
  }
}
Outer loop controls rows

Inner loop controls columns (what’s printed on each line)

🎨 Pattern Programming
Patterns are based on printing characters like *, numbers, or alphabets using nested loops.



### 🔹 **Q35: Right Angle Triangle of Stars**

#### Output:

```
* 
* * 
* * * 
* * * * 
* * * * * 
```

#### ✅ Code:

```javascript
function patternStars(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log(); // New line
  }
}
patternStars(5);
```

#### 🧠 Algorithm:

* Use nested loops: `i` controls rows, `j` controls stars.
* Use `process.stdout.write("* ")` for inline printing.
* Use `console.log()` after each row to break the line.

---

### 🔹 **Q: Right Angle Triangle of Numbers**

#### Output:

```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
```

#### ✅ Code:

```javascript
function patternNumbers(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}
patternNumbers(5);
```

#### 🧠 Algorithm:

* Outer loop `i` from `1 to n`: total rows.
* Inner loop `j` from `1 to i`: print numbers.
* Use `process.stdout.write(j + " ")` to avoid line breaks.

---

### 🔹 **Q: Right Angle Triangle of Alphabets**

#### Output:

```
A 
A B 
A B C 
A B C D 
A B C D E 
```

#### ✅ Code:

```javascript
function patternAlphabets(n) {
  for (let i = 1; i <= n; i++) {
    let charCode = 65; // ASCII of 'A'
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charCode) + " ");
      charCode++;
    }
    console.log();
  }
}
patternAlphabets(5);
```

#### 🧠 Algorithm:

* `charCode = 65` (for A)
* Print character using `String.fromCharCode(charCode)`
* Increment `charCode` after each print

---

### 🔹 **Q: Inverted Right Angle Triangle**

#### Output:

```
* * * * * 
* * * * 
* * * 
* * 
* 
```

#### ✅ Code:

```javascript
function invertedPattern(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
invertedPattern(5);
```

#### 🧠 Algorithm:

* Outer loop `i` decreases from `n` to `1`
* Inner loop `j` runs from `1 to i` to print stars
* Use `process.stdout.write()` inside the loop
---