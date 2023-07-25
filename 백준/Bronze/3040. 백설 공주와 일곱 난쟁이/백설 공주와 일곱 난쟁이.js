// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// Exhaustive Search
const totalSum = input.reduce((cur, acc) => (acc += cur));
let result;

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (totalSum - input[i] - input[j] === 100) {
      result = input.filter((_, idx) => idx !== i && idx !== j);
    }
  }
}

// output
console.log(result.join("\n"));
