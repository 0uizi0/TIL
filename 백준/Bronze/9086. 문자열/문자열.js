const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(input.shift());
let result = [];

input.forEach((v) => {
  let first = v[0];
  let last = v[v.length - 1];
  result.push(first + last);
});

console.log(result.join("\n"));
