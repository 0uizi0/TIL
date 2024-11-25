const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const nums = input.split(" ").map(Number);
const memo = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;

  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j] && memo[j] > max) {
      max = memo[j];
      maxIdx = j;
    }
  }
  memo[i] = maxIdx === -1 ? nums[i] : nums[i] + memo[maxIdx];
}

console.log(Math.max(...memo));
