let arr = [-2, 0, 1, 1, 2];
const brute = () => {
  let set = new Set();
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          let trip = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          set.add(trip.toString());
        }
      }
    }
  }
  for (let a of set) {
    result.push(a.split(",").map(Number));
  }
  console.log(result);
};//Gives TLE

//Efficient program
arr.sort((a, b) => a - b);
let result = [];
for (let i = 0; i < arr.length - 2; i++) {
  if (i != 0 && arr[i] == arr[i - 1]) continue;
  let j = i + 1;
  let k = arr.length - 1;
  while (j < k) {
    let sum = arr[i] + arr[j] + arr[k];
    if (sum == 0) {
      result.push([arr[i], arr[j++], arr[k--]]);
      while (j < k && arr[j - 1] == arr[j]) j++;
      while (j < k && arr[k + 1] == arr[k]) k--;
    } else if (sum < 0) {
      j++;
    } else {
      k--;
    }
  }
}
console.log(result);
