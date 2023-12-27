const solution = (triangle) => {
  const n = triangle.length;
  const memo = Array.from(Array(n), () => Array(n).fill(-1));

  const dp = (x, y) => {
    if (x === n - 1) return triangle[x][y];
    if (memo[x][y] !== -1) return memo[x][y];

    let left = dp(x + 1, y);
    let right = dp(x + 1, y + 1);

    // 현재 위치의 최대 합 계산
    memo[x][y] = triangle[x][y] + Math.max(left, right);
    return memo[x][y];
  };

  return dp(0, 0);
};