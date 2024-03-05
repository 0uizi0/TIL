const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(A + B + C);
