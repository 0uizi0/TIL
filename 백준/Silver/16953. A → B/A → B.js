const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let count = 1;
let status = false;

while (A <= B) {
  if (A === B) {
    status = true;
    break;
  }

  if (B % 2 === 0) B /= 2;
  else if (B % 10 === 1) B = Math.floor(B / 10);
  else break;

  count++;
}

if (status) console.log(count);
else console.log(-1);
