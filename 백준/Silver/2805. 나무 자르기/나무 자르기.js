const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [[N, M], trees] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let l = 1;
let r = Math.max(...trees);
let result = 0;

while (l <= r) {
  let mid = parseInt((l + r) / 2);
  const remains = trees.reduce((acc, cur) => acc + Math.max(cur - mid, 0), 0);

  if (remains < M) r = mid - 1;
  else {
    l = mid + 1;
    result = mid;
  }
}

console.log(result);