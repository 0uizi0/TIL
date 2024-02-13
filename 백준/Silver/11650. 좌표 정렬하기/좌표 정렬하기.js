const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift().split(" "));
const positions = input.map((v) => v.split(" ").map(Number));
const result = [];

// 오름차순 정렬
const sortedArr = positions.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 0; i < N; i++) {
  const r = sortedArr[i].join(" ");
  result.push(r);
}

// 출력
console.log(result.join("\n"));
