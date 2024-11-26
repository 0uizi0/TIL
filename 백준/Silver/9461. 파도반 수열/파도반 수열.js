const filepath = process.platform === 'linux' ? 0 : './input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n');

const dp = new Array(101).fill(1);

dp[4] = 2;
dp[5] = 2;

for (let i = 6; i <= 100; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

for (const n of input) {
  console.log(dp[Number(n)]);
}