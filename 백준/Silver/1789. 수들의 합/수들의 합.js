const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let S = Number(input);
let num = 0;
let sum = 0;

while (sum <= S) {
  num++;
  sum += num;
}

console.log(num - 1);
