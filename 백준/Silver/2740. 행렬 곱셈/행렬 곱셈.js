const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// input
const [N, M] = input.shift().split(" ").map(Number);
const A = input.slice(0, N).map((line) => line.split(" ").map(Number));
const [[_, K], ...B] = input
  .slice(N)
  .map((line) => line.split(" ").map(Number));

const result = Array.from({ length: N }, () => Array(K).fill(0));

// divide and conquer
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    for (let k = 0; k < M; k++) {
      result[i][j] += A[i][k] * B[k][j];
    }
  }
}

// output
result.forEach((line) => console.log(line.join(" ")));
