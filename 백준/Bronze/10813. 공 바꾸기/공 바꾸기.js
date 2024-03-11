const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let methods = input.map((line) => line.split(" ").map(Number));
let baskets = new Array(N).fill().map((_, i) => i + 1);

methods.forEach((line) => {
  let [i, j] = line;
  const iOrigin = baskets[i - 1];
  const jOrigin = baskets[j - 1];

  baskets[i - 1] = jOrigin;
  baskets[j - 1] = iOrigin;
});

console.log(baskets.join(" "));
