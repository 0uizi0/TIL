const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const boxes = input[1].split(" ").map(Number);

function returnMaxBox(len, boxes) {
  const dp = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[j] < boxes[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
}

console.log(returnMaxBox(N, boxes));