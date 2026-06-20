# 📘 DSA Practice Problems

---

## 🔀 If-Else

| # | Problem |
| --- | --- |
| 1 | Movie rating |
| 2 | [Profile based program](https://drive.google.com/file/d/1TvfLLb0VDj6qNpWGJtwlKueZHj8GIMjy/view?usp=sharing) |
| 3 | Accept an English alphabet from user and check if it is a consonant or a vowel |

---

## 🔁 Loops

| # | Problem |
| --- | --- |
| 4 | [ISBN number](https://www.geeksforgeeks.org/program-check-isbn/) |
| 5 | Harshad number |
| 6 | Perfect square |
| 7 | Abundant number |
| 8 | Find number of integers which has exactly x divisors |
| 9 | Program for finding out the prime factors of a number |
| 10 | Calculate the area of a circle, rectangle, and triangle using a switch statement |
| 12 | Perfect number |
| 13 | [Friendly pairs](https://prepinsta.com/java-program/friendly-pair-or-notamicable-or-not-using-java/) |
| 14 | [Permutations in which n people can occupy r seats in a classroom](https://prepinsta.com/java-program/permutations-in-which-n-people-can-occupy-r-seats-in-a-classroom/) |
| 15 | [Maximum number of handshakes](https://prepinsta.com/java-program/maximum-number-of-handshakes/) |
| 16 | [Counting number of days in a given month of a year](https://prepinsta.com/java-program/counting-number-of-days-in-a-given-month-of-a-year/) |

### Problem 11 — Neon Number / Armstrong Number

> A **neon number** is a number where the sum of digits of its square equals the number itself.

```js
Input  : 9
Output : Given number 9 is a Neon number

Explanation:
  square of 9 = 9 × 9 = 81
  sum of digits of square = 8 + 1 = 9  ✓ (equals given number)
```

Also implement: **Armstrong number**

### Problem 17 — Sum of Even-Indexed Fibonacci Numbers

> For a given positive integer N, find the value of **F₂ + F₄ + F₆ + … + F₂ₙ**,  
> where Fᵢ denotes the i-th Fibonacci number.

```js
Input : n = 4
Output: 33

Fibonacci series (0th to 8th term): 0, 1, 1, 2, 3, 5, 8, 13, 21
Sum of even-indexed terms = 0 + 1 + 3 + 8 + 21 = 33

Input : n = 7
Output: 609
0 + 1 + 3 + 8 + 21 + 55 + 144 + 377 = 609
```

---

## 🗂️ Arrays

| # | Problem |
| --- | --- |
| 18 | Summation of absolute differences of all pairs in a sorted array |
| 19 | Find min of (a\_sum + b\_sum, c\_sum) from two linked arrays |
| 20 | Update every element with multiplication of previous and next elements |
| 21 | Count steps to exhaust array by repeatedly removing max and its right |
| 22 | Find minimum value to add to balance a split array |
| 23 | [2206. Divide Array Into Equal Pairs](https://leetcode.com/problems/divide-array-into-equal-pairs/) |
| 24 | [2341. Maximum Number of Pairs in Array](https://leetcode.com/problems/maximum-number-of-pairs-in-array/) |
| 25 | [2154. Keep Multiplying Found Values by Two](https://leetcode.com/problems/keep-multiplying-found-values-by-two/) |
| 26 | [2057. Smallest Index With Equal Value](https://leetcode.com/problems/smallest-index-with-equal-value/) |
| 27 | [2169. Count Operations to Obtain Zero](https://leetcode.com/problems/count-operations-to-obtain-zero/) |
| 28 | [2357. Make Array Zero by Subtracting Equal Amounts](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/) |
| 29 | [1979. Find Greatest Common Divisor of Array](https://leetcode.com/problems/find-greatest-common-divisor-of-array/) |
| 30 | [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/) |
| 31 | [2160. Minimum Sum of Four Digit Number After Splitting Digits](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/) |
| 32 | [2164. Sort Even and Odd Indices Independently](https://leetcode.com/problems/sort-even-and-odd-indices-independently/) |
| 33 | [2293. Min Max Game](https://leetcode.com/problems/min-max-game/) |
| 34 | [2078. Two Furthest Houses With Different Colors](https://leetcode.com/problems/two-furthest-houses-with-different-colors/) |
| 36 | Print count of subarrays whose sum equals a target |
| 37 | [1929. Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) |
| 38 | [1920. Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/) |
| 19b | [Sort first half ascending, second half descending](https://prepinsta.com/java-program/to-find-sum-of-minimum-absolute-difference-of-the-given-array/) |
| 20b | [Find sum of minimum absolute difference of the given array](https://prepinsta.com/java-program/to-find-sum-of-minimum-absolute-difference-of-the-given-array/) |

### Problem 18 — Absolute Difference Sum

```js
Input : arr[] = {1, 2, 3, 4}
Output: 10

|2-1| + |3-1| + |4-1| + |3-2| + |4-2| + |4-3| = 10
```

### Problem 19 — Min of (a\_sum + b\_sum, c\_sum)

> Given integer array `A[]` and character array `B[]` (chars: `'a'`, `'b'`, `'c'`),  
> where `B[i]` is linked to `A[i]`.

**Find:** `min(a_sum + b_sum, c_sum)`

```js
Example 1:
A[] = {3, 6, 4, 5, 6}
B[] = {'a', 'c', 'b', 'b', 'a'}

a_sum = 3 + 6 = 9
b_sum = 4 + 5 = 9
c_sum = 6
→ min(9 + 9, 6) = min(18, 6) = 6   ✅

Example 2:
A[] = {4, 2, 6, 1, 3}
B[] = {'b', 'a', 'c', 'a', 'b'}

a_sum = 2 + 1 = 3
b_sum = 4 + 3 = 7
c_sum = 6
→ min(3 + 7, 6) = min(10, 6) = 6   ✅
```

### Problem 20 — Multiply with Neighbours

```js
Input  : arr[] = {2, 3, 4, 5, 6}
Output : arr[] = {6, 8, 15, 24, 30}

Rules:
  First element  → first × second
  Last element   → last × second-last
  Middle element → previous × next
```

### Problem 21 — Steps to Exhaust Array

```js
Input : [2, 3, 5, 4, 1]
Output: Steps Taken: 3

Step 1: Remove 5 (max) and everything to its right → [2, 3]
Step 2: Remove 3 (max, already rightmost)          → [2]
Step 3: Remove 2                                    → []
```

### Problem 22 — Balance the Array

> An array is **balanced** if sum of left half == sum of right half.  
> Find the **minimum value** to add to any element to achieve balance.

```js
Input : 1 2 1 2 1 3
Output: 2

Left sum  = 1 + 2 + 1 = 4
Right sum = 2 + 1 + 3 = 6
Difference = 2 → add 2 to any element in the left half

Input : 20 10
Output: 10
```

### Problem 36 — Count Subarrays with Sum Equal to Target

```js
Input : {1, 2, 3, 7, 5},  T = 12
Output: 2

Subarrays: {2, 3, 7} and {7, 5} — both sum to 12
```

---

## 🔤 Strings

| # | Problem |
| --- | --- |
| 39 | Remove the vowels from a string |
| 40 | Count Asterisks |
| 41 | [2278. Percentage of Letter in String](https://leetcode.com/problems/percentage-of-letter-in-string/) |
| 42 | [2124. Check if All A's Appears Before All B's](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/) |
| 43 | [2299. Strong Password Checker II](https://leetcode.com/problems/strong-password-checker-ii/) |
| 44 | Greatest English Letter in Upper and Lower Case |
| 45 | [2283. Check if Number Has Equal Digit Count and Digit Value](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/) |
| 46 | [2243. Calculate Digit Sum of a String](https://leetcode.com/problems/calculate-digit-sum-of-a-string/) |
| 47 | [2068. Check Whether Two Strings are Almost Equivalent](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/) |
| 48 | [2042. Check if Numbers Are Ascending in a Sentence](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/) |
| 49 | [2000. Reverse Prefix of Word](https://leetcode.com/problems/reverse-prefix-of-word/) |

---

## #️⃣ Hashing

| # | Problem |
| --- | --- |
| 50 | [Replace each element by its rank in the array](https://prepinsta.com/java-program/to-replace-each-element-by-its-rank-in-the-given-array/) |
| 51 | [2404. Most Frequent Even Element](https://leetcode.com/problems/most-frequent-even-element/) |
| 52 | [575. Distribute Candies](https://leetcode.com/problems/distribute-candies/) |
| 53 | [389. Find the Difference](https://leetcode.com/problems/find-the-difference/) |
| 54 | [2062. Count Vowel Substrings of a String](https://leetcode.com/problems/count-vowel-substrings-of-a-string/) |
| 55 | [2053. Kth Distinct String in an Array](https://leetcode.com/problems/kth-distinct-string-in-an-array/) |
| 56 | [645. Set Mismatch](https://leetcode.com/problems/set-mismatch/) |
| 57 | [804. Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/) |
| 58 | [819. Most Common Word](https://leetcode.com/problems/most-common-word/) |

---

## Total Problems: 58
