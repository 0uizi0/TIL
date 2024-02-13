const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const [N, ...nums] = input;

// 오름차순 정렬
const result = nums.sort((a, b) => a - b);

console.log(result.join("\n"));
