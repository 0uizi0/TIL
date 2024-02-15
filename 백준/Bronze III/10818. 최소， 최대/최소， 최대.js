const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n")
const nums = input.split(' ').map(Number)

// 최소, 최대 구하기
const [min, max] = [Math.min(...nums), Math.max(...nums)]

// 출력
console.log(min, max)