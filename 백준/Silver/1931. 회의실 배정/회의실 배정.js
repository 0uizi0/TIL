// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = Number(input.shift());
let list = [];
for (let i of input) {
  list.push(i.split(" ").map(Number));
}

list.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let result = 1;
let eTime = list[0][1];

for (let i = 1; i < count; i++) {
  if (eTime <= list[i][0]) {
    eTime = list[i][1];
    result += 1;
  }
}

// output
console.log(result);
