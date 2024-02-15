const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 0;

// 그룹 문자인지 판단하는 함수
const isGroup = (word) => {
  const chars = [];
  for (let w of word) {
    if (!chars.includes(w)) chars.push(w);
    else if (chars.includes(w) && w === chars[chars.length - 1]) chars.push(w);
    else return false;
  }
  return true;
};

// 그룹 단어의 개수 구하기
for (let word of input) {
  if (isGroup(word)) result++;
}

// 출력
console.log(result)
