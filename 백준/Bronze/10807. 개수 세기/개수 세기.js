const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let nums = input[0].toString().trim().split(" ").map(Number);
let v = Number(input[1]);

let result = 0;

nums.forEach((n) => {
  if (n === v) result++;
});

console.log(result);
