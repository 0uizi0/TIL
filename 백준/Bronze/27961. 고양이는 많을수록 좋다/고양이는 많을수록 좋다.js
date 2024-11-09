const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = require("fs").readFileSync(filePath).toString().trim();

let cnt = 0;
let cats = 0;

while (cats < N) {
  cats === 0 ? (cats += 1) : (cats *= 2);
  cnt += 1;
}

console.log(cnt);
