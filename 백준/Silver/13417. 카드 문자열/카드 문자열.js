const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let result = [];
let idx = 1;

for (let t = 0; t < T; t += 1) {
  const N = Number(input[idx]);
  const cards = input[idx + 1].split(" ");
  idx += 2;

  let deque = [cards[0]];

  for (let i = 1; i < N; i += 1) {
    const card = cards[i];
    card <= deque[0] ? deque.unshift(card) : deque.push(card);
  }

  result.push(deque.join(""));
}

console.log(result.join("\n"));