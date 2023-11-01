// input
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let S = input.splice(0, N);

// hash
var hashMap = new Set(S);
let cnt = 0;

for (let str of input) {
  if (hashMap.has(str)) {
    cnt++;
  }
}

// output
console.log(cnt);
