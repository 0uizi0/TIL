const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const N = Number(input.shift());
const dice = input.map((r) => r.split(" ").map(Number));
const facToFace = {
  0: 5,
  1: 3,
  2: 4,
  3: 1,
  4: 2,
  5: 0,
};

let max = 0;

const dfs = (diceIdx, topNum, sum) => {
  if (diceIdx === N) {
    max = Math.max(sum, max);
    return;
  }
  const bottom = dice[diceIdx].findIndex((v) => v === topNum);
  const top = facToFace[bottom];

  const maxNum = Math.max(
    ...dice[diceIdx].filter((_, i) => i !== bottom && i !== top)
  );
  dfs(diceIdx + 1, dice[diceIdx][top], sum + maxNum);
};

(function () {
  dice[0].forEach((_, i) => {
    const bottom = i;
    const top = facToFace[bottom];

    const maxNum = Math.max(
      ...dice[0].filter((_, i) => i !== bottom && i !== top)
    );
    dfs(1, dice[0][top], maxNum);
  });
  console.log(max);
})();
