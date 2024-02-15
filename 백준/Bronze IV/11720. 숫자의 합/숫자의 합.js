const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input.toString().split('').map(Number)
const sum = nums.reduce((acc,cur)=>acc+=cur,0)

console.log(sum)