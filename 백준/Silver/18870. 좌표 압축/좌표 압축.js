const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0].split(" "));
const nums = input[1].split(" ").map(Number);
const result = [];
const object = {};

// 오름차순 정렬
const uniqueNums = [...new Set(nums)];
const sortedNums = uniqueNums.sort((a, b) => a - b);

// 조건에 만족하는 좌표의 개수 구하기
sortedNums.forEach((v, i) => (object[v] = i));

for (let n of nums) {
  let count = object[n];
  result.push(count)
}

// 출력
console.log(result.join(' '))
