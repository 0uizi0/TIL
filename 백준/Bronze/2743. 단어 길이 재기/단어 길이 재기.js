const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(input.length);
