const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [X, Y] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const checkWinRate = (total, winCnt) => Math.floor((winCnt * 100) / total);

const Z = checkWinRate(X, Y);

let l = 1;
let r = 1000000000;
let cnt = Infinity;

while (l <= r) {
  let mid = parseInt((l + r) / 2);
  let newZ = checkWinRate(X + mid, Y + mid);

  if (Z !== newZ) {
    cnt = Math.min(cnt, mid);
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}

cnt === Infinity ? console.log(-1) : console.log(cnt);