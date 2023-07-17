// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [[N, K], ...kinds] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

kinds.sort((a, b) => b - a);
let cnt = 0;

// GREEDY
function greedy(target) {
  if (target == 0) return cnt;

  for (let coin of kinds) {
    let dValue = Math.floor(target / coin),
      rValue = target % coin;
    if (dValue > 0) {
      cnt += dValue;
      return greedy(rValue);
    }
  }
}

// output
console.log(greedy(K));
