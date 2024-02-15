const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = []

for (let i of input) {
  const testCase = i.split(' ')
  const [R,S] = [Number(testCase[0]),testCase[1]]
  const P = [...S].map(v => v.repeat(R)).join('')
  result.push(P)
}

// 출력
console.log(result.join('\n'))