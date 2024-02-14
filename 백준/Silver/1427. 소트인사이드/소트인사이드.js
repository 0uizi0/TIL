const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

// 내림차순 정렬
const sortedNums = input.sort((a, b) => b - a);

// 출력
console.log(sortedNums.join(""));
