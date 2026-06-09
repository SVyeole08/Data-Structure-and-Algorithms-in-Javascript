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


Day60.md

Page
1
/
1
100%
Q74. Print natural numbers 1 to n and n to 1 using recursion

// Print 1 to n
function print1ToN(n) {
    if (n === 0) return;
    print1ToN(n - 1);
    console.log(n);
}

// Print n to 1
function printNTo1(n) {
    if (n === 0) return;
    console.log(n);
    printNTo1(n - 1);
}

🛠 Algorithm:
Base Case: Stop when n === 0.
Recursive Step:

For 1 → n : first move down (n-1), then print n.
For n → 1 : print n, then move down (n-1).

Q. Sum / Factorial using recursion

```js
// Sum of numbers 1 to n
function sumN(n) {
    if (n === 0) return 0;
    return n + sumN(n - 1);
}

// Factorial of n
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
```
🛠 Algorithm:
Sum: Add current number n + sum of previous numbers.
Factorial: Multiply current number n × factorial of previous numbers.

Q. Fibonacci series
➡️ a) Print first n terms of Fibonacci Series
```js
function fibonacciSeries(n, a = 0, b = 1) {
    if (n === 0) return;
    console.log(a);
    fibonacciSeries(n - 1, b, a + b);
}
```
```js
➡️ b) Find nth term in Fibonacci Series (Sum of nth term)
function fibonacciNth(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciNth(n - 1) + fibonacciNth(n - 2);
}
```
🛠 Algorithm:
Printing Series:
Keep two variables a and b.
Print a, then recursively call with next numbers (b, a+b).

Finding nth Term:
Base cases: 0th term is 0, 1st term is 1.
Otherwise, sum of (n-1)th and (n-2)th term.

## 📚 Recursion Problems in JavaScript

 **Q. Sum of digits (e.g., 891 → 18)**
```js
function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
```

### 🛠 Algorithm:
- **Base case**: If number is 0, return 0.
- **Recursive case**: 
  - Take the last digit `n % 10`.
  - Add it to the sum of the rest `sumOfDigits(n/10)`.

**Q. Reverse of digits (e.g., 891 → 198)**
```js
function reverseNumber(n, rev = 0) {
    if (n === 0) return rev;
    return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
}
```

### 🛠 Algorithm:
- **Base case**: If number becomes 0, return the reversed number.
- **Recursive case**:
  - Multiply `rev` by 10 and add `n%10`.
  - Call the function for `Math.floor(n/10)`.


# 🧮 Maths Problem
**Q (Maths). Find GCD using Recursion**

### ➡️ a) **O(min(a,b))** — Brute Force GCD:

```js
function gcdBruteForce(a, b, i = Math.min(a, b)) {
    if (a % i === 0 && b % i === 0) return i;
    return gcdBruteForce(a, b, i - 1);
}
```

### ➡️ b) **O(max(a,b))** — Subtraction Method:

```js
function gcdSubtraction(a, b) {
    if (a === b) return a;
    if (a > b) return gcdSubtraction(a - b, b);
    return gcdSubtraction(a, b - a);
}
```

### ➡️ c) **O(log(max(a,b)))** — Euclidean Algorithm (Optimal):

```js
function gcdEuclidean(a, b) {
    if (b === 0) return a;
    return gcdEuclidean(b, a % b);
}
```

**Q. Count of Primes (Sieve of Eratosthenes)**

### ➡️ Code (Optimized):

```js
function countPrimes(n) {
    let isPrime = new Array(n+1).fill(true);
    
    for (let i = 2; i<= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <=n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for(let i=2;i<isPrime.length;i++){
        if(isPrime[i])process.stdout.write(i+" ")
    }
}
```

### 🛠 Algorithm:
- Mark all numbers as prime initially.
- Start from 2. For each prime number, mark its multiples as non-prime.
- Count the numbers still marked as prime.
- Time Complexity**: `O(n log(log n))`

**Q. Sqrt(x)**

### ➡️ a) Brute Force Solution:

```js
function sqrtBrute(x) {
    let i = 0;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}
```
Time Complexity of sqrtBrute(x):
The loop runs while i * i <= x.
So, i can go up to about √x (square root of x).
Thus, the number of iterations is roughly √x.
🔵 Final Time Complexity: O(√x)
✅ Works but slow for big numbers.


### ➡️ b) Optimized Solution (Binary Search):

```js
function sqrtBinarySearch(x) {
    if (x < 2) return x;
    
    let left = 1, right = Math.floor(x / 2);
    let ans = 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return ans;
}
```


### 🛠 Algorithm:
- Think of square root as finding a number whose square is ≤ `x`.
- Use **binary search** between `1` and `x/2`.
- Keep narrowing down based on `mid * mid`.

**Time Complexity**: `O(log n)`

**Q. Pow(x, n)**
### ➡️ a) Brute Force Method (Multiply x n-times):
```js
function powBrute(x, n) {
    let ans = 1;
    for (let i = 0; i < Math.abs(n); i++) {
        ans *= x;
    }
    return n >= 0 ? ans : 1 / ans;
}
```
✅ Works but slow if n is large.

---

### ➡️ b) Optimized Recursive Method (Exponentiation by Squaring):

```js
 public double myPow(double x, int n) {
        if(n==0) return 1.0;
        if(n<0) return 1/fun(x,n);
        return fun(x,n);
    }
    public double fun(double x , int n){
       if(n==0) return 1;
       double ans = fun(x , n/2);
       if(n%2==0) return ans*ans;
       return ans*ans*x;
    }
```

### 🛠 Algorithm:
- Divide the power into halves:
  - `x^n = (x^(n/2)) * (x^(n/2))`
- If **n** is odd, multiply an extra **x**.
- If **n** is negative, invert the result `1/x^n`.

**Time Complexity**: `O(log n)`
