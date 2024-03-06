const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);
let result = "";

while (N > 4) {
  result += "long ";
  N -= 4;
}

console.log(result + "long int");
