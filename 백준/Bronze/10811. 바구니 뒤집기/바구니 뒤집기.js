const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
const methods = input.map((line) => line.split(" ").map(Number));
let baskets = new Array(N).fill().map((_, i) => i + 1);

methods.forEach((line) => {
  let [i, j] = line;
  baskets = [
    ...baskets.slice(0, i - 1),
    ...baskets.slice(i - 1, j).reverse(),
    ...baskets.slice(j),
  ];
});

console.log(baskets.join(" "));
