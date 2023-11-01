// input
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// hash
function getAllSubstrings(str) {
  let substrings = [];

  for (let i = 1; i <= str.length; i++) {
    for (let startIdx = 0; startIdx + i <= str.length; startIdx++) {
      let substring = str.slice(startIdx, startIdx + i);
      substrings.push(substring);
    }
  }

  return substrings;
}

let separatedString = getAllSubstrings(input);
var hashMap = new Set(separatedString);

// output
console.log(hashMap.size);
