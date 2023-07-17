// input
const { time } = require("console");
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [[N], times] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

times.sort((a, b) => a - b);
let order = 0,
  sum = 0,
  accTime = 0;

// GREEDY
function greedy(order) {
  if (order === N) return sum;

  accTime += times[order];
  sum += accTime;
  order++;

  return greedy(order);
}

// output
console.log(greedy(order));
