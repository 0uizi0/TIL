const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

// 오름차순 정렬
const result = input.sort((a, b) => a - b);

// result
console.log(result.join(' '));
