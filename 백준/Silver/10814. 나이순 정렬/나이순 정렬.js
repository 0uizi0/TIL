const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArr = input.map((v) => v.split(" "));
const result = [];

// 조건에 따른 정렬
const sortedArr = inputArr.sort((a, b) => {
  let ageOfA = Number(a[0]),
    ageOfB = Number(b[0]);
  if (ageOfA !== ageOfB) return ageOfA - ageOfB;
});

// 출력
for (let m of sortedArr) {
  result.push(m.join(" "));
}

console.log(result.join("\n"));
