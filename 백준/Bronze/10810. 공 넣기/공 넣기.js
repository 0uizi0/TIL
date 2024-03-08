const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let methods = input.map((line) => line.split(" ").map(Number));
let baskets = new Array(N).fill(0);

methods.forEach((line) => {
  let [i, j, k] = line;
  for (let idx = i; idx <= j; idx++) {
    baskets[idx - 1] = k;
  }
});

console.log(baskets.join(' '))