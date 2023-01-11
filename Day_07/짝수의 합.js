const solution = (n) => {
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    parseInt(i % 2) == 0 ? (result += i) : (result += 0);
  }
  return result;
};
