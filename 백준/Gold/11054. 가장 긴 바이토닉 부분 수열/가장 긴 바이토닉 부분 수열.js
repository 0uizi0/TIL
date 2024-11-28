const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input.split(" ").map((i) => +i);

const inDP = new Array(N).fill(1);
const deDP = new Array(N).fill(1);

for (let i = 0; i < N; i += 1) {
  let cnt = 1;
  for (let j = 0; j < i; j += 1) {
    if (arr[i] > arr[j]) cnt = Math.max(cnt, inDP[j] + 1);
  }
  inDP[i] = cnt;
}

for (let i = N - 1; i >= 0; i -= 1) {
  let cnt = 1;
  for (let j = i + 1; j < N; j += 1) {
    if (arr[i] >  arr[j]) cnt = Math.max(cnt, deDP[j] + 1);
  }
  deDP[i] = cnt;
}

console.log(Math.max(...inDP.map((v, i) => v + deDP[i])) - 1);