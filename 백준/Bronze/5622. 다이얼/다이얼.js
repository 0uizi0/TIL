const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

// 단어에 해당하는 숫자 찾기
const setDial = (w) => {
  if (["A", "B", "C"].includes(w)) return 2;
  else if (["D", "E", "F"].includes(w)) return 3;
  else if (["G", "H", "I"].includes(w)) return 4;
  else if (["J", "K", "L"].includes(w)) return 5;
  else if (["M", "N", "O"].includes(w)) return 6;
  else if (["P", "Q", "R", "S"].includes(w)) return 7;
  else if (["T", "U", "V"].includes(w)) return 8;
  else if (["W", "X", "Y", "Z"].includes(w)) return 9;
};

const result = input.reduce((acc, cur) => {
  let time = setDial(cur) + 1;
  return (acc += time);
}, 0);

console.log(result);
