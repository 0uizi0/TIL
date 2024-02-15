const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const convertedNums = input.map(v => v.toString().split('').reverse().join('')).map(Number)
const max = Math.max(...convertedNums)

console.log(max)