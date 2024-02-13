const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const nums = input.slice(1, input.length);

// 오름차순 정렬
nums.sort((a, b) => a - b);

console.log(nums.join("\n"));
