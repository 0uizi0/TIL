const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...scores] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cnt = 0;

for (let i = N - 1; i > 0; i -= 1) {
  if (scores[i - 1] >= scores[i]) {
    cnt += scores[i - 1] - scores[i] + 1;
    scores[i - 1] = scores[i] - 1;
  }
}

console.log(cnt);