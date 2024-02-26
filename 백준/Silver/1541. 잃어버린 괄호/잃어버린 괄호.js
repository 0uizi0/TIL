const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let result = 0;
let count = 0;

/** 입력값이 첫 번째 숫자인지 확인 후, true라면 더하고 false면 빼주기 */
const calNum = (num) => {
  if (count === 0) result += Number(num);
  else result -= Number(num);

  count++;
};

// - 연산자를 기준으로 문자열 분리
input.split("-").map((v) => {
  if (!v.includes("+")) return calNum(v);

  // + 연산자를 기준으로 문자열 분리
  const splitPlus = v
    .split("+")
    .map(Number)
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  return calNum(splitPlus);
});

console.log(result);
