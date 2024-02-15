const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [C, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = []

// 각 케이스에 해당하는 평균 이상 학생들의 비율 구하기
for (let i of input) {
  const [N, ...scores] = i.split(" ").map(Number);
  const sums = scores.reduce((acc, cur) => (acc += cur), 0);
  const average = sums / N;

  const topStudents = scores.filter((v) => v > average).length;
  const topRates = ((topStudents / N) * 100).toFixed(3);
  
  result.push(`${topRates}%`)
}

// 출력
console.log(result.join('\n'))