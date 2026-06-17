## Map in JavaScript

Map is a built-in object that holds key-value pairs.
Unlike regular objects, a Map can have keys of any type (not just strings or symbols).

Map remembers the original insertion order of the keys.

It has better performance for frequently adding/removing key-value pairs compared to plain objects.

Map can not have duplicate keys but can have duplicate values. 

```js
let map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
map.clear();
```

Example:

```js
let myMap = new Map();

// Adding values
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'booleanKey');

// Accessing values
console.log(myMap.get('name'));  // Output: Alice
console.log(myMap.get(true));    // Output: booleanKey

// Checking existence
console.log(myMap.has('age'));   // Output: true

// Iterating over Map
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Size of Map
console.log(myMap.size);  // Output: 3
```

Traversing values and keys of map:

```js
let map = new Map();
map.set("slkf", 23);
map.set("sd",234);
map.set("sda",294);
map.set("sdas",254);

for(let a of map.keys()){
    console.log(a); //returns only keys
}

for(let a of map.values()){
    console.log(a); //returns only values
}

for(let a of map.entries()){
    console.log(a); //returns entries one by one key -> value
}

for(let [key, value] of map.entries()){
    console.log(key,value); 
}
```

Q. Two Sum:
Given an array of integers nums and a target, return the indices of the two numbers such that they add up to target.

Approach 1: Brute Force (O(n²))

```js
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
```

⚡️ Approach 2: Hash Map (O(n))

```js
function twoSum(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

Q. First Letter Appears Twice
Given a string, find the first character that appears twice.

Approach 1: Set Lookup (O(n))

```js
function repeatedCharacter(s) {
    let seen = new Set();

    for(let char of s) {
        if(seen.has(char)) return char;
        seen.add(char);
    }
    return null;
}
```

Approach 2: Map for Frequency Counting

```js
function repeatedCharacter(s) {
    let freq = new Map();

    for(let char of s) {
        if(freq.has(char)) {
            freq.set(char, freq.get(char) + 1);
            if(freq.get(char) === 2) return char;
        } else {
            freq.set(char, 1);
        }
    }

    return null;
}
```

Explanation:

A Map stores the frequency of each character.
When any character’s count reaches 2, that’s your answer.
If none reaches 2, return null.


Q. Sort the People

Given names and corresponding heights, sort the people in descending order by height.

```js
let names = ["Alice", "Bob", "Charlie"];
let heights = [165, 180, 175];

Expected output:
["Bob", "Charlie", "Alice"]

//Approach:

var sortPeople = function(names, heights) {
    let map = new Map()
    for(let i=0;i<names.length;i++){
       map.set(heights[i] , names[i]);
    }
    heights.sort((a,b)=> b-a)
    // height = [180,170,165]

    let ans = new Array(names.length)
    for(let i=0;i<ans.length;i++){
         ans[i] = map.get(heights[i])
    }
    return ans;
};
```
