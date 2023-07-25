// input
const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath));

const numbers = [],
  output = [],
  result = [];

for (let i = 0; i < input; i++) {
  numbers.push(i + 1);
}

// Exhaustive Search
function permutation(permu, rests, output) {
  if (rests.length == 0) {
    return output.push(permu);
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
}

permutation([], numbers, output);

// output
output.forEach((line) => {
  let lineStr = "";
  line.forEach((num) => {
    lineStr += num + " ";
  });
  result.push(lineStr.trim());
});

console.log(result.join("\n"));
