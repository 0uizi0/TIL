const solution = (n) => {
  return n % 2 !== 0
    ? "수박".repeat(Number(n / 2)) + "수"
    : "수박".repeat(Number(n / 2));
};
