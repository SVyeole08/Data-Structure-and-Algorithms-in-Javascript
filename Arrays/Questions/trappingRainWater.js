let height =[]
let left = [];
let right = [];
let maxLeft = height[0];
let maxRight = 0;
for (let i = 0; i < height.length; i++) {
  maxLeft = Math.max(height[i], maxLeft);
  left[i] = maxLeft;
}
for (let i = height.length - 1; i >= 0; i--) {
  maxRight = Math.max(height[i], maxRight);
  right[i] = maxRight;
}
let ans = 0;
for (let i = 0; i < height.length; i++) {
  ans += Math.min(left[i], right[i])-height[i];
}
console.log(ans);
