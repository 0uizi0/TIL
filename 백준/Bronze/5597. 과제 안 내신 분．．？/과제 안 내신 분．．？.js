const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const students = new Array(30).fill().map((_, i) => i + 1);
const result = [];

// 출석하지 않은 학생 구하기
for (let n of students) {
  if (!input.includes(n)) result.push(n);
}

// 출석번호 오름차순 정렬 및 출력
result.sort((a, b) => a - b);
console.log(result.join("\n"));
