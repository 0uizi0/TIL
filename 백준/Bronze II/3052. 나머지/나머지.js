let fs = require("fs");
const { runInContext } = require("vm");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];
let num;
let array = [];
let rest;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    num = input[i].split(" ").map((x) => Number(x));
    numbers.push(num);
  }
}

for (let i = 0; i < numbers.length; i++) {
  rest = Number(numbers[i] % 42);
  if (array.indexOf(rest) == -1) {
    array.push(rest);
  }
}

console.log(array.length);
