// input
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, H] = input.shift().split(" ").map(Number);
const bottom = Array.from({ length: H + 1 }, () => 0); //종유석
const top = Array.from({ length: H + 1 }, () => 0); //석순

// 장애물 쌓기
input.forEach((v, idx) => {
  idx % 2 === 0 ? bottom[Number(v)]++ : top[H - Number(v) + 1]++;
});

// 누적합 구하기
for (let i = 1; i <= H; i++) {
  top[i] += top[i - 1];
  bottom[H - i] += bottom[H - i + 1];
}

// 최솟값, 최솟값의 개수 구하기
let min = Infinity;
let minCnt = 0;
for (let i = 1; i <= H; i++) {
  if (top[i] + bottom[i] < min) {
    minCnt = 1;
    min = top[i] + bottom[i];
  } else if (top[i] + bottom[i] === min) {
    minCnt++;
  }
}

// ouput
console.log(min, minCnt);
