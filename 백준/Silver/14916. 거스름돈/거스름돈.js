const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = +require("fs").readFileSync(filePath).toString().trim();

function greedy(n) {
  let cnt = 0;

  while (n >= 0) {
    if (n % 5 === 0) return cnt + n / 5;
    n -= 2;
    cnt += 1;
  }
  return -1;
}

console.log(greedy(N));
