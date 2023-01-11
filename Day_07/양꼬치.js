const solution = (n, k) =>
  parseInt(n / 10) != 0
    ? 12000 * n + 2000 * k - 2000 * parseInt(n / 10)
    : 12000 * n + 2000 * k;
