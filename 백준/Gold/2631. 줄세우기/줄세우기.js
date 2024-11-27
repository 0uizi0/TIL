const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const longest = new Array(N).fill(1);

for (let i = 1; i < N; i += 1) {
  let cnt = 0;
  for (let j = 0; j < i; j += 1) {
    if (arr[j] < arr[i]) cnt = Math.max(cnt, longest[j]);
  }
  longest[i] = cnt + 1;
}

console.log(N - Math.max(...longest));
