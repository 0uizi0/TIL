// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, rLengths, rCosts] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let sortByCheap = rCosts.slice(0, rCosts.length - 1).sort((a, b) => a - b);
let totalLengths = rLengths.reduce((acc, cur) => (acc += cur));
let miniCost = 0;

// GREEDY
for (let r = 0; r < rCosts.length; r++) {
  if (rCosts[r] === sortByCheap[0]) {
    miniCost += rCosts[r] * totalLengths;
    break;
  }
  miniCost += rCosts[r] * rLengths[0];
  totalLengths -= rLengths.shift();
}

// output
console.log(miniCost);
