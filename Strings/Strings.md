
## Introduction of String

In JavaScript, a string is a sequence of characters used to represent text. Strings are enclosed in either single quotes ' ', double quotes " ", or backticks `, and they are immutable, meaning once created, their characters cannot be changed.

### Methods of string

| `length` | Returns string length |

| `slice(start, end)` | Extracts substring |

| `substring(start, end)` | Similar to `slice`, but no negative indexes |

| `substr(start, length)` | Extracts part of string with length |

| `toUpperCase()` | Converts to uppercase |

| `toLowerCase()` | Converts to lowercase |

| `concat()` | Concatenates strings |

| `trim()` | Removes spaces from both sides |

| `indexOf(substring)` | Returns first index of substring |

| `lastIndexOf(substring)` | Returns last index of substring |

| `includes(substring)` | Checks if substring exists |

| `startsWith(substring)` | Checks if string starts with substring |

| `endsWith(substring)` | Checks if string ends with substring | 

| `replace(old, new)` | Replaces first occurrence of substring |

| `replaceAll(old, new)` | Replaces all occurrences |

| `split(separator)` | Splits string into an array |

| `charAt(index)` | Returns character at index |

| `charCodeAt(index)` | Returns Unicode value of character |

— Q. Accept a string from user and print each character on a new line
```js
let prompt = require("prompt-sync")();  
let str = prompt("Enter a string: ");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
```

— Q. Accept a string and print it in reverse order

```js
let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);
```

-Q. Print each character on a new line
```js
function printEachChar(str) {
    for (let char of str) {
        console.log(char);
    }
}
```

// Example usage:
printEachChar("Hello");

-Q. Print string in reverse order
```js
function printReverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}
```

// Example usage:
printReverse("Hello"); // Output: "olleH"

-Q. Check if string is palindrome (using two-pointer)
```js
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
 ```
// Example usage:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

-Q. Toggle each alphabet using ASCII values
```js
function toggleCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            result += String.fromCharCode(charCode + 32); // to lowercase
        } else if (charCode >= 97 && charCode <= 122) { // a-z
            result += String.fromCharCode(charCode - 32); // to uppercase
        } else {
            result += str[i]; // non-alphabetic characters remain same
        }
    }
    return result;
}
 ```
// Example usage:
console.log(toggleCase("AcgDfD")); // Output: "aCGdFd"

-Q. Count words with given prefix
```js
function countPrefix(words, pref) {
    let count = 0;
    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }
    return count;
}
 ```
// Example usage:
console.log(countPrefix(["pay","attention","practice","attend"], "at")); // Output: 2

-Q. Capitalize first & last character of each word

```js
let s = "hello bhai kya haal chaal";
let ans = "";
let arrStr = s.split(" ");
for(let i=0;i<arrStr.length;i++){
   let word = arrStr[i]
   if(word.length<=2) ans = ans + word.toUpperCase()+" ";
   else {
     ans = ans + word.charAt(0).toUpperCase() 
               + word.substring(1,word.length-1)
               + word.charAt(word.length-1).toUpperCase()+" ";
   }
}
console.log(ans);
```

Q61.Frequency of Each Character (Using Bitmap / Integer Array)

function charFrequency(str) {
    let freq = new Array(123).fill(0);  // ASCII: 'a' to 'z' is 97-122

    for (let i=0;i<str.length;i++) {
        let ascii = str.charCodeAt(i);
        freq[ascii]++;
    }

    for (let i = 97; i <= 122; i++) {  // only print lowercase letters
        if (freq[i] > 0) {
            console.log(`${String.fromCharCode(i)} : ${freq[i]}`);
        }
    }
}

// Example:
charFrequency("character");


Q62. Check Two Strings Are Anagram Or Not (Using Frequency Array)
```js
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freq = new Array(123).fill(0);

    for (let ch of str1) {
        freq[ch.charCodeAt(0)]++;
    }

    for (let ch of str2) {
        freq[ch.charCodeAt(0)]--;
    }

    for (let i = 97; i <= 122; i++) {  // check lowercase letters
        if (freq[i] !== 0) return false;
    }

    return true;
}
```

// Example:
```js
console.log(isAnagram("arc", "car"));    // true
console.log(isAnagram("state", "taste"));// true
console.log(isAnagram("night", "thing"));// true
console.log(isAnagram("apple", "papel"));// true
console.log(isAnagram("test", "rest"));  // false

```

JavaScript — Set
✅ Definition:
A Set is a built-in collection of unique values (no duplicates allowed).

Exmaple:
let set = new Set();

// Adding elements
set.add(1);
set.add(2);
set.add(3);
set.add(2);  // Duplicate, will be ignored

console.log("Set after adding:", set);  // Set {1, 2, 3}

// Checking existence
console.log(set.has(2));  // true
console.log(set.has(5));  // false

// Deleting an element
set.delete(2);
console.log("After deletion:", set);  // Set {1, 3}

// Looping through the Set
for (let item of set) {
    console.log("Element:", item);
}

// Size of the Set
console.log("Total Elements:", set.size);  // 2

// Clearing all elements
set.clear();
console.log("After clear:", set);  // Set {}
