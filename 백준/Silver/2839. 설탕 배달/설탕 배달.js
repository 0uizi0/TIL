const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);
let result = 0;
let status = false;

while (N >= 0) {
  if (N === 0 || N % 5 === 0) {
    result += N / 5;
    console.log(result);
    status = true;
    break;
  }
  N -= 3;
  result++;
}

if (!status) console.log(-1);
