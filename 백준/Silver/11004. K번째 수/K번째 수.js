const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);

// 오름차순 정렬
const result = nums.sort((a, b) => a - b);

console.log(result[K - 1]);
