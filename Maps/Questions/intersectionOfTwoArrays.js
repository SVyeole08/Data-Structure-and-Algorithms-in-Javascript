let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
let map = new Map();
for (let i = 0; i < arr1.length; i++) {
  if (map.has(arr1[i])) {
    map.set(arr1[i], map.get(arr1[i]) + 1);
  } else map.set(arr1[i], 1);
}
let ans = []
for (let i = 0; i < arr2.length; i++) {
  if (map.get(arr2[i]) > 0) {
    ans.push(arr2[i]);
    map.set(arr2[i], map.get(arr2[i]) - 1);
  }
}
console.log(ans)

//Without Duplicates
var intersection = function (arr1, arr2) {
    let set = new Set(arr1)
    let ans = []
    for (let i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i]) && !ans.includes(arr2[i])) {
            ans.push(arr2[i])
        }
    }
    return ans
};