// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [m, seed, X1, X2] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// Exhaustive Search
const result = []

for (let a = 0; a < m; a++) {
  for (let c = 0; c < m; c++) {
    const checkX1 = X1 == (a * seed + c) % m,
      checkX2 = X2 == (a * X1 + c) % m;
    if (checkX1 && checkX2) {
      result.push([a,c])
      break;
    }
  }
}

// output
// 주어진 배열에서 랜덤으로 요소 1개 출력
function randomItem(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

console.log(randomItem(result).join(" "))