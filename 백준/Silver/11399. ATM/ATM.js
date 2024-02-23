const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const times = input
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;

times.forEach((v, i) => {
  result += v * (N - i);
});

console.log(result);
