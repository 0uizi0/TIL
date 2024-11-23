const file = process.platform === 'linux' ? 0 : './input.txt';
const [N, input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let inputs = input.split(' ').map((v) => Number(v));
let dp = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (inputs[i] < inputs[j] && dp[j] > max) max = dp[j];
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));