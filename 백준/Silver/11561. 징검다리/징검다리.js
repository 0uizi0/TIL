const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...tc] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function binarySearch(n) {
  let l = 1;
  let r = n;
  k = 0;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let sn = (mid * (mid + 1)) / 2;

    if (sn <= n) {
      k = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return k;
}

let results = [];
for (let N of tc) {
  results.push(binarySearch(N));
}
console.log(results.join("\n"));
