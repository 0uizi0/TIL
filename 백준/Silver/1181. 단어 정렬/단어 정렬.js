const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift().split(" "));
const uniqueWords = [...new Set(input)];

// 오름차순 정렬
const result = uniqueWords.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
});

// 출력
console.log(result.join("\n"));
