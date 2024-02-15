const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const scores = input.toString().split(' ').map(Number)
const M = Math.max(...scores)

const sumsOfModifiedScores = scores.map(s => s/M*100).reduce((acc,cur)=>acc+=cur,0)
const modifiedAverage = sumsOfModifiedScores / N

// 출력
console.log(modifiedAverage)