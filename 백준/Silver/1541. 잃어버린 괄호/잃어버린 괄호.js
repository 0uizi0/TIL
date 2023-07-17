// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

// GREEDY
const firstOrder = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("-")
  .map((formula) => {
    let num = formula.split("+");
    return num.reduce((n1, n2) => Number(n1) + Number(n2), 0);
  });

const nextOrder = firstOrder.reduce((acc, cur) => (acc -= cur));

// output
console.log(nextOrder);
