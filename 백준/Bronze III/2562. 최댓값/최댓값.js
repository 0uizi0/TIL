const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

// 최댓값 및 최댓값 위치 구하기
const max = Math.max(...input)
const maxIdx = input.indexOf(max) + 1

// 출력
const result = [max, maxIdx]
console.log(result.join('\n'))